import { Link } from "react-router-dom";
import { useMenuQuery } from "./useMenuQuery";
import MenuCard from "./MenuCard";
import useCartStore from "../../store/cartStore";
import MenuCardSkeleton from "./MenuCardSkeleton";
import ErrorState from "../../components/ui/ErrorState";

export default function MenuPage() {
    const { data, isLoading, isError } = useMenuQuery();
    const items = useCartStore((s) => s.items);

    if (isLoading) {
        return (
            <div className="p-6 max-w-6xl mx-auto">
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <MenuCardSkeleton key={i} />
                    ))}
                </div>
            </div>
        );
    }


    if (isError) {
        return <ErrorState title="Unable to load menu" />
    }

    return (
        <div className="p-6 max-w-6xl mx-auto select-none">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold select-none">Menu</h1>

                <Link to="/cart" className="btn bg-slate-600 hover:bg-slate-700">
                    Cart ({items.length})
                </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {data?.map((item) => (
                    <MenuCard key={item._id} item={item} />
                ))}
            </div>

            {data?.length === 0 && (
                <div className="text-center opacity-60 mt-10">
                    No menu items available.
                </div>
            )}
        </div>
    );
}