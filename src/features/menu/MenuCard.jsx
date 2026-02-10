import { useState } from "react";
import Button from "../../components/ui/Button";
import useCartStore from "../../store/cartStore";

export default function MenuCard({ item }) {
    const addItem = useCartStore((s) => s.addItem);
    const cartItems = useCartStore((s) => s.items);

    const [imgError, setImgError] = useState(false);

    const unavailable = !item.isAvailable;

    const quantity =
        cartItems.find((i) => i.menuItem === item._id)?.quantity || 0;

    return (
        <div
            className={`card bg-gray-700 shadow-md relative ${unavailable ? "opacity-60" : ""
                }`}
        >
            <figure className="relative h-48 w-full bg-gray-800 flex items-center justify-center">
                {!imgError ? (
                    <img
                        src={item.image}
                        alt={item.name}
                        className="h-48 w-full object-cover"
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <span className="text-sm opacity-60">Image unavailable</span>
                )}

                {unavailable && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center select-none">
                        <span className="badge badge-error badge-lg">
                            Not Available
                        </span>
                    </div>
                )}

                {quantity > 0 && (
                    <div className="absolute top-2 right-2">
                        <span className="badge badge-primary badge-lg">
                            ×{quantity}
                        </span>
                    </div>
                )}
            </figure>

            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>

                <p className="text-sm opacity-70">{item.description}</p>

                <div className="flex items-center justify-between mt-3">
                    <span className="font-bold text-lg select-none">
                        ₹{item.price}
                    </span>

                    <Button
                        disabled={unavailable}
                        onClick={() =>
                            addItem({
                                menuItem: item._id,
                                name: item.name,
                                price: item.price,
                            })
                        }
                    >
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
}