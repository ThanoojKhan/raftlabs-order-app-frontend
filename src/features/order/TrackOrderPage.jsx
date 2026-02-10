import { useParams, Link } from "react-router-dom";
import { useOrderQuery } from "./useOrderQuery";
import Button from "../../components/ui/Button";
import ErrorState from "../../components/ui/ErrorState";

export default function TrackOrderPage() {
    const { id } = useParams();
    const { data, isLoading, isError } = useOrderQuery(id);

    if (isLoading) {
        return (
            <div className="flex justify-center p-10">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (isError || !data) {
        return (
            <ErrorState
                title="Unable to load order"
                message="The order may not exist or the server is unreachable."
                actionText="Back to Menu"
                to="/"
            />
        );
    }

    const { status, items, totalAmount } = data;

    return (
        <div className="p-6 max-w-xl mx-auto text-center space-y-6">
            <h1 className="text-2xl font-bold">Order Status</h1>

            <div>
                <span className={`badge badge-lg ${status === "ORDER_RECEIVED" ? "badge-success" : status === "PREPARING" ? "badge-warning" : "badge-success"}`}>
                    {status === "ORDER_RECEIVED" ? "Order Received" : status === "PREPARING" ? "Preparing" : "Out for Delivery"}
                </span>
            </div>

            <div className="text-left space-y-2">
                {items.map((item) => (
                    <div key={item.menuItem} className="flex justify-between">
                        <span>
                            {item.name} x {item.quantity}
                        </span>
                        <span>₹{item.price * item.quantity}</span>
                    </div>
                ))}
            </div>

            <div className="font-bold text-lg">Total: ₹{totalAmount}</div>
            <Button to="/">Order More Food</Button>
        </div>
    );
}