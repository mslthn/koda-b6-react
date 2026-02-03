import React from "react";

const Input = React.forwardRef(
  ({ label, htmlFor, id, placeholder, src, alt, type = "text", ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        <label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="relative">
          {src && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={src} alt={alt} className="h-5 w-5" />
            </div>
          )}
          <input
            ref={ref}
            type={type}
            id={id}
            placeholder={placeholder}
            {...rest}
            className={`block w-full ${
              src ? "pl-10" : "pl-3"
            } pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all`}
          />
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;