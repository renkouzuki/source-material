"use client";

import { forwardRef } from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "success";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      onClick,
      type = "button",
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses = "inline-flex cursor-pointer items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60";

    const sizeClasses = {
      sm: "text-sm py-2 px-4",
      md: "text-base py-2.5 px-6",
      lg: "text-lg py-3 px-8",
    };

    const variantClasses = {
      primary: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg focus:ring-blue-200 active:scale-95",
      secondary: "bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white shadow-md hover:shadow-lg focus:ring-gray-200 active:scale-95",
      outline: "bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-200 active:scale-95",
      ghost: "bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200 active:scale-95",
      danger: "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-md hover:shadow-lg focus:ring-red-200 active:scale-95",
      success: "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-md hover:shadow-lg focus:ring-green-200 active:scale-95",
    };

    const iconSizeClasses = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        onClick={onClick}
        className={`
          ${baseClasses}
          ${sizeClasses[size]}
          ${variantClasses[variant]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {loading ? (
          <>
            <div className={`${iconSizeClasses[size]} border-2 border-white border-t-transparent rounded-full animate-spin`} />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className={iconSizeClasses[size]}>{leftIcon}</span>}
            {children}
            {rightIcon && <span className={iconSizeClasses[size]}>{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;