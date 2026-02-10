import Button from "./Button";

export default function ErrorState({
    title = "Something went wrong",
    message = "Please try again later.",
    actionText = "Go Home",
    to = "/",
}) {
    return (
        <div className="p-10 text-center space-y-4">
            <p className="text-lg font-semibold text-red-500">{title}</p>
            <p className="opacity-70">{message}</p>

            {to && <Button to={to}>{actionText}</Button>}
        </div>
    );
}