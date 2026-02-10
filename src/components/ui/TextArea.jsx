export default function TextArea({
    value,
    onChange,
    placeholder,
    error,
    className = "",
    ...props
}) {
    return (
        <div className="w-full">
            <textarea
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`
          textarea textarea-bordered w-full px-2
          bg-slate-700 border-slate-600 text-white
          focus:outline-none focus:border-primary
          ${error ? "border-error" : ""}
          ${className}
        `}
                {...props}
            />

            {error && (
                <p className="text-red-500 text-sm mt-1">{error}</p>
            )}
        </div>
    );
}