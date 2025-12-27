"use client";

import { useEffect, useRef, ReactNode } from "react";

type DropdownProps = {
  open: boolean;
  onClose: () => void;
  trigger: ReactNode;
  children: ReactNode;
  align?: "left" | "right";
  position?: "top" | "bottom";
  width?: string;
  offset?: string;
  className?: string;
};

export const Dropdown = ({
  open,
  onClose,
  trigger,
  children,
  align = "right",
  position = "bottom",
  width = "w-64",
  className = "",
}: DropdownProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, onClose]);

  const positionClasses = {
    top: "bottom-full mb-2",
    bottom: "top-full mt-2",
  };

  const alignClasses = {
    left: "left-0",
    right: "right-0",
  };

  const animationClasses = {
    top: "slide-in-from-bottom-2",
    bottom: "slide-in-from-top-2",
  };

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      {trigger}

      {open && (
        <div
          className={`absolute ${alignClasses[align]} ${positionClasses[position]} ${width} rounded-xl bg-white shadow-xl border border-gray-200 z-50 overflow-hidden animate-in fade-in ${animationClasses[position]} duration-200`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

type DropdownItemProps = {
  onClick?: () => void;
  icon?: ReactNode;
  children: ReactNode;
  variant?: "default" | "danger";
  disabled?: boolean;
  className?: string;
};

export const DropdownItem = ({
  onClick,
  icon,
  children,
  variant = "default",
  disabled = false,
  className = "",
}: DropdownItemProps) => {
  const variantClasses = {
    default: "text-gray-700 hover:bg-gray-50",
    danger: "text-red-600 hover:bg-red-50",
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full cursor-pointer flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${variantClasses[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {icon && <span className="w-4 h-4 shrink-0">{icon}</span>}
      {children}
    </button>
  );
};

type DropdownSectionProps = {
  children: ReactNode;
  className?: string;
};

export const DropdownSection = ({ children, className = "" }: DropdownSectionProps) => {
  return <div className={`py-1 ${className}`}>{children}</div>;
};

type DropdownHeaderProps = {
  children: ReactNode;
  className?: string;
};

export const DropdownHeader = ({ children, className = "" }: DropdownHeaderProps) => {
  return (
    <div className={`p-4 border-b border-gray-200 bg-linear-to-br from-blue-50 to-indigo-50 ${className}`}>
      {children}
    </div>
  );
};

type DropdownDividerProps = {
  className?: string;
};

export const DropdownDivider = ({ className = "" }: DropdownDividerProps) => {
  return <div className={`border-t border-gray-200 ${className}`} />;
};