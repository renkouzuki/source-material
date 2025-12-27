"use client";

import { useState, createContext, useContext, useRef, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";

const SidebarContext = createContext({
  open: false,
  setOpen: (value) => { },
  position: "left",
  overlay: true,
  fullWidth: false,
});

export function SidebarProvider({ children, position = "left", overlay = true, fullWidth = false }) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen, position, overlay, fullWidth }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider");
  }
  return context;
}

export function SidebarTrigger({ children = null, className = "", asChild = false }) {
  const { setOpen } = useSidebar();

  if (asChild && children) {
    return (
      <div onClick={() => setOpen(true)} className={className}>
        {children}
      </div>
    );
  }

  if (children) {
    return (
      <button
        className={className}
        onClick={() => setOpen(true)}
        aria-label="Toggle menu"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`cursor-pointer relative p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${className}`}
      onClick={() => setOpen(true)}
      aria-label="Toggle menu"
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span className="block h-0.5 w-full bg-gray-700 rounded-full" />
        <span className="block h-0.5 w-full bg-gray-700 rounded-full" />
        <span className="block h-0.5 w-full bg-gray-700 rounded-full" />
      </div>
    </button>
  );
}

export function Sidebar({ children, className = "" }) {
  const { open, setOpen, position, overlay, fullWidth } = useSidebar();

  const getSidebarClasses = () => {
    const baseClasses = "fixed bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col";

    if (fullWidth) {
      return `${baseClasses} inset-0 ${position === "right"
          ? open ? "translate-x-0" : "translate-x-full"
          : open ? "translate-x-0" : "-translate-x-full"
        }`;
    }

    if (position === "right") {
      return `${baseClasses} top-0 right-0 h-full w-80 ${open ? "translate-x-0" : "translate-x-full"}`;
    }

    return `${baseClasses} top-0 left-0 h-full w-80 ${open ? "translate-x-0" : "-translate-x-full"}`;
  };

  return (
    <>
      {overlay && (
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setOpen(false)}
        />
      )}
      <div className={`${getSidebarClasses()} ${className}`}>
        {children}
      </div>
    </>
  );
}

export function SidebarHeader({ children, className = "" }) {
  const { setOpen } = useSidebar();

  return (
    <div className={`flex items-center justify-between p-4 border-b border-gray-200 shrink-0 ${className}`}>
      <div className="flex items-center gap-3 flex-1">{children}</div>
      <button
        onClick={() => setOpen(false)}
        className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors cursor-pointer"
        aria-label="Close menu"
      >
        <X className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
}

export function SidebarContent({ children, className = "" }) {
  return (
    <div className={`flex-1 flex flex-col p-4 space-y-1 overflow-y-auto ${className}`}>
      {children}
    </div>
  );
}

export function SidebarFooter({ children, className = "" }) {
  return (
    <div className={`shrink-0 p-4 border-t border-gray-200 bg-gray-50/50 ${className}`}>
      {children}
    </div>
  );
}

export function SidebarLink({ href, children, onClick = undefined, className = "" }) {
  const { setOpen } = useSidebar();

  const handleClick = (e) => {
    setOpen(false);
    if (onClick) onClick(e);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`group relative px-4 py-3 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 font-medium ${className}`}
    >
      <div className="flex items-center justify-between">
        <span>{children}</span>
        <svg
          className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transform group-hover:translate-x-1 transition-all"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}

export function Header({ children, className = "", reverseMobile = false, reverseDesktop = false }) {
  const getFlexClass = () => {
    if (reverseMobile && reverseDesktop) {
      return "flex-row-reverse";
    }
    if (reverseMobile && !reverseDesktop) {
      return "flex-row-reverse md:flex-row";
    }
    if (!reverseMobile && reverseDesktop) {
      return "flex-row md:flex-row-reverse";
    }
    return "";
  };

  return (
    <header className={`bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-200/50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-16 ${getFlexClass()}`}>
          {children}
        </div>
      </div>
    </header>
  );
}

export function HeaderBrand({ children, className = "" }) {
  return <div className={`shrink-0 ${className}`}>{children}</div>;
}

export function HeaderNav({ children, className = "" }) {
  return (
    <div className={`hidden md:flex items-center gap-6 ${className}`}>
      {children}
    </div>
  );
}

export function HeaderNavItems({ children, className = "" }) {
  return (
    <nav className={`flex items-center gap-2 ${className}`}>{children}</nav>
  );
}

export function HeaderNavItem({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}

const DropdownContext = createContext({
  open: false,
  setOpen: (value) => { },
});

export function HeaderDropdown({ children, className = "" }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={dropdownRef} className={`relative ${className}`}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
}

export function HeaderDropdownTrigger({ children, className = "" }) {
  const { open, setOpen } = useContext(DropdownContext);

  return (
    <button
      onClick={() => setOpen(!open)}
      className={`px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/80 transition-all duration-200 flex items-center gap-1 ${className}`}
    >
      {children}
      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
    </button>
  );
}

export function HeaderDropdownContent({ children, className = "", align = "left" }) {
  const { open } = useContext(DropdownContext);

  if (!open) return null;

  const alignClass = align === "right" ? "right-0" : "left-0";

  return (
    <div
      className={`absolute ${alignClass} top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 ${className}`}
    >
      {children}
    </div>
  );
}

export function HeaderDropdownItem({ href, children, onClick = undefined, className = "" }) {
  const { setOpen } = useContext(DropdownContext);

  const handleClick = (e) => {
    setOpen(false);
    if (onClick) onClick(e);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50/80 hover:text-blue-600 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}

export function HeaderActions({ children, className = "" }) {
  return (
    <div className={`flex items-center gap-3 pl-3 border-l border-gray-200 ${className}`}>
      {children}
    </div>
  );
}