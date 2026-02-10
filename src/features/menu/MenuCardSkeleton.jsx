export default function MenuCardSkeleton() {
    return (
        <div className="card bg-gray-700 shadow-md animate-pulse">
            <div className="h-48 w-full bg-gray-800" />
            <div className="card-body space-y-3">
                <div className="h-5 bg-gray-600 rounded w-3/4" />
                <div className="h-4 bg-gray-600 rounded w-full" />
                <div className="h-4 bg-gray-600 rounded w-5/6" />
                <div className="flex justify-between items-center pt-2">
                    <div className="h-5 bg-gray-600 rounded w-16" />
                    <div className="h-8 bg-gray-600 rounded w-16" />
                </div>
            </div>
        </div>
    );
}