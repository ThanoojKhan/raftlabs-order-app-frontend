import { Link } from "react-router-dom";
import useCartStore from "../store/cartStore";

export default function FloatingCartButton() {
    const items = useCartStore((s) => s.items);

    const totalQty = items.reduce((s, i) => s + i.quantity, 0);
    const totalPrice = items.reduce((s, i) => s + i.price * i.quantity, 0);

    if (totalQty === 0) return null;

    return (
        <Link
            to="/cart"
            className="fixed bottom-5 right-5 btn btn-primary shadow-lg z-50"
        >
            🛒 {totalQty} • ₹{totalPrice}
        </Link>
    );
}