import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import Button from "../../components/ui/Button";

export default function CartPage() {
    const { items, updateQuantity, removeItem } = useCartStore();
    const navigate = useNavigate();

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    if (items.length === 0) {
        return (
            <div className="p-10 text-center space-y-4">
                <p className="text-lg font-semibold">Your cart is empty</p>
                <Button to="/">Browse Menu</Button>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                <Button to="/">Go to Menu</Button>
            </div>
            <div className="space-y-4">
                {items.map((item) => (
                    <div
                        key={item.menuItem}
                        className="flex items-center justify-between p-4 border rounded-lg"
                    >
                        <div>
                            <h2 className="font-semibold">{item.name}</h2>
                            <p className="text-sm opacity-70">₹{item.price}</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                min="1"
                                className="input input-bordered bg-slate-600 px-2 w-20"
                                value={item.quantity}
                                onChange={(e) =>
                                    updateQuantity(item.menuItem, Number(e.target.value))
                                }
                            />
                            <Button
                                variant="danger"
                                onClick={() => removeItem(item.menuItem)}
                            >
                                Remove
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
                <span className="text-xl font-bold">Total: ₹{total}</span>
                <Button onClick={() => navigate("/checkout")}>
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    );
}