"use client";

import { forwardRef } from "react";

type InputProps = {
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search";
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  helperText?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      label,
      placeholder,
      value,
      onChange,
      onBlur,
      onFocus,
      error,
      disabled = false,
      required = false,
      className = "",
      inputClassName = "",
      leftIcon,
      rightIcon,
      helperText,
      size = "md",
      fullWidth = false,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "text-sm py-2 px-3",
      md: "text-base py-2.5 px-4",
      lg: "text-lg py-3 px-5",
    };

    const iconSizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    };

    return (
      <div className={`${fullWidth ? "w-full" : ""} ${className}`}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          {leftIcon && (
            <div
              className={`absolute left-3 top-1/2 -translate-y-1/2 ${iconSizeClasses[size]} text-gray-400 pointer-events-none`}
            >
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={`
              w-full rounded-lg border transition-all duration-200 outline-none
              ${sizeClasses[size]}
              ${leftIcon ? "pl-10" : ""}
              ${rightIcon ? "pr-10" : ""}
              ${
                error
                  ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100 bg-red-50/30"
                  : "border-gray-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 bg-white"
              }
              ${
                disabled
                  ? "bg-gray-100 cursor-not-allowed opacity-60"
                  : "hover:border-gray-400"
              }
              placeholder:text-gray-400
              ${inputClassName}
            `}
            {...props}
          />

          {rightIcon && (
            <div
              className={`absolute right-3 top-1/2 -translate-y-1/2 ${iconSizeClasses[size]} text-gray-400`}
            >
              {rightIcon}
            </div>
          )}
        </div>

        {(error || helperText) && (
          <p
            className={`mt-2 text-sm ${
              error ? "text-red-600" : "text-gray-500"
            }`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
