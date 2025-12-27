"use client";

import { forwardRef } from "react";

type CardProps = {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
  variant?: "default" | "bordered" | "elevated" | "gradient";
  padding?: "none" | "sm" | "md" | "lg";
  hoverable?: boolean;
  clickable?: boolean;
  onClick?: () => void;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      title,
      subtitle,
      headerAction,
      footer,
      variant = "default",
      padding = "md",
      hoverable = false,
      clickable = false,
      onClick,
      className = "",
      headerClassName = "",
      bodyClassName = "",
      footerClassName = "",
    },
    ref
  ) => {
    const baseClasses = "bg-white rounded-xl transition-all duration-200";

    const variantClasses = {
      default: "border border-gray-200",
      bordered: "border-2 border-gray-300",
      elevated: "shadow-lg border border-gray-100",
      gradient:
        "border border-gray-200 bg-gradient-to-br from-white to-gray-50",
    };

    const paddingClasses = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    };

    const headerPaddingClasses = {
      none: "",
      sm: "px-4 pt-4 pb-3",
      md: "px-6 pt-6 pb-4",
      lg: "px-8 pt-8 pb-5",
    };

    const bodyPaddingClasses = {
      none: "",
      sm: "px-4 pb-4",
      md: "px-6 pb-6",
      lg: "px-8 pb-8",
    };

    const footerPaddingClasses = {
      none: "",
      sm: "px-4 pb-4 pt-3",
      md: "px-6 pb-6 pt-4",
      lg: "px-8 pb-8 pt-5",
    };

    const hoverClasses = hoverable
      ? "hover:shadow-xl hover:scale-[1.02] hover:border-blue-200"
      : "";

    const clickableClasses = clickable
      ? "cursor-pointer active:scale-[0.98]"
      : "";

    const hasHeader = title || subtitle || headerAction;
    const hasFooter = footer;

    return (
      <div
        ref={ref}
        onClick={clickable ? onClick : undefined}
        className={`
          ${baseClasses}
          ${variantClasses[variant]}
          ${hoverClasses}
          ${clickableClasses}
          ${!hasHeader && !hasFooter ? paddingClasses[padding] : ""}
          ${className}
        `}
      >
        {hasHeader && (
          <div
            className={`border-b border-gray-200 ${headerPaddingClasses[padding]} ${headerClassName}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {title && (
                  <h3 className="text-lg font-bold text-gray-900 truncate">
                    {title}
                  </h3>
                )}
                {subtitle && (
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {subtitle}
                  </p>
                )}
              </div>
              {headerAction && (
                <div className="shrink-0">{headerAction}</div>
              )}
            </div>
          </div>
        )}

        <div
          className={`${
            hasHeader || hasFooter ? bodyPaddingClasses[padding] : ""
          } ${bodyClassName}`}
        >
          {children}
        </div>

        {hasFooter && (
          <div
            className={`border-t border-gray-200 ${footerPaddingClasses[padding]} ${footerClassName}`}
          >
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
