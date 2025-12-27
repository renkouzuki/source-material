"use client";

import React, { useState, createContext, useContext } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const MobileMenuContext = createContext({
  open: false,
  setOpen: (value) => {},
});

export function HeaderProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function Header({ children, className = "" }) {
  return (
    <header
      className={`bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-200/50 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">{children}</div>
      </div>
    </header>
  );
}

export function HeaderMobileToggle({ className = "" }) {
  const { open, setOpen } = useContext(MobileMenuContext);

  return (
    <button
      className={`md:hidden cursor-pointer relative p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 ${className}`}
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
      aria-expanded={open}
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span
          className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-gray-700 rounded-full transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>
    </button>
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

export function HeaderActions({ children, className = "" }) {
  return (
    <div
      className={`flex items-center gap-3 pl-3 border-l border-gray-200 ${className}`}
    >
      {children}
    </div>
  );
}

export function MobileSidebar({ children }) {
  const { open, setOpen } = useContext(MobileMenuContext);

  return (
    <>
      <div
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`md:hidden fixed top-0 left-0 h-full w-70 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {children}
      </div>
    </>
  );
}

export function MobileSidebarHeader({ children, className = "" }) {
  const { setOpen } = useContext(MobileMenuContext);

  return (
    <div
      className={`flex items-center justify-between p-4 border-b border-gray-200 shrink-0 ${className}`}
    >
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

export function MobileSidebarNav({ children, className = "" }) {
  return (
    <nav
      className={`flex-1 flex flex-col p-4 space-y-1 overflow-y-auto ${className}`}
    >
      {children}
    </nav>
  );
}

export function MobileSidebarNavItem({
  href,
  children,
  onClick = undefined,
  className = "",
}) {
  const { setOpen } = useContext(MobileMenuContext);

  const handleClick = (e) => {
    setOpen(false);
    if (onClick) {
      onClick(e);
    }
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}

export function MobileSidebarFooter({ children, className = "" }) {
  return (
    <div
      className={`shrink-0 p-4 border-t border-gray-200 bg-gray-50/50 ${className}`}
    >
      {children}
    </div>
  );
}
