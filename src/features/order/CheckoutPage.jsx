import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "./order.api";
import useCartStore from "../../store/cartStore";
import toast from "react-hot-toast";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import TextArea from "../../components/ui/TextArea";

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    customerName: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const validate = () => {
    const newErrors = {};

    if (!form.customerName.trim()) {
      newErrors.customerName = "Name is required";
    }

    if (!form.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!/^[0-9]{8,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Enter valid phone number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (items.length === 0) {
      setServerError("Cart is empty.");
      return;
    }

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      setServerError("");

      const payload = {
        items: items.map((i) => ({
          menuItem: i.menuItem,
          quantity: i.quantity,
        })),
        customerName: form.customerName.trim(),
        address: form.address.trim(),
        phone: form.phone.trim(),
        totalAmount,
      };

      const order = await placeOrder(payload);
      toast.success("Order placed successfully.");
      clearCart();
      navigate(`/track/${order.orderId}`);
    } catch (error) {
      setServerError(error.message || "Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <Button to="/">Browse Menu</Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            placeholder="Name"
            value={form.customerName}
            onChange={(e) =>
              setForm({ ...form, customerName: e.target.value })
            }
            error={errors.customerName}
          />
        </div>

        <div>
          <TextArea
            placeholder="Address"
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            error={errors.address}
          />
        </div>

        <div>
          <Input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            error={errors.phone}
          />
        </div>

        <div className="flex justify-between items-center">
          <span className="font-bold">Total: ₹{totalAmount}</span>
          <Button loading={loading} type="submit">
            Place Order
          </Button>
        </div>

        {serverError && (
          <div className="text-red-500 text-sm border border-red-500/30 p-3 rounded">
            {serverError}
          </div>
        )}
      </form>
    </div>
  );
}