import { Link } from "react-router-dom";

export default function Button({
    children,
    to,
    variant = "primary",
    loading = false,
    disabled = false,
    className = "",
    ...props
}) {
    const styles = {
        primary: "btn btn-primary bg-gray-600 hover:bg-gray-700",
        danger: "btn btn-error bg-red-600 hover:bg-red-700",
    };

    const isDisabled = loading || disabled;
    const classes = `${styles[variant] || styles.primary} ${className}`;

    if (to) {
        return (
            <Link
                to={isDisabled ? "#" : to}
                aria-disabled={isDisabled}
                className={`btn bg-slate-600 hover:bg-slate-700 ${classes} ${isDisabled ? "opacity-60 pointer-events-none" : ""}`}
                {...props}
            >
                {loading ? "Please wait..." : children}
            </Link>
        );
    }

    return (
        <button
            className={classes + "px-3"}
            disabled={isDisabled}
            {...props}
        >
            {loading ? "Please wait..." : children}
        </button>
    );
}