"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Dropdown,
  DropdownHeader,
  DropdownSection,
  DropdownItem,
  DropdownDivider,
} from "./Dropdown";

type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  email?: string;
  size?: "sm" | "md" | "lg";
  showDropdown?: boolean;
  className?: string;
};

const Avatar = ({
  src,
  alt = "User avatar",
  name = "John Doe",
  email = "john@example.com",
  size = "md",
  showDropdown = false,
  className = "",
}: AvatarProps) => {
  const [open, setOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: "w-8 h-8 text-xs",
    md: "w-9 h-9 text-sm",
    lg: "w-10 h-10 text-base",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const avatarContent = (
    <div className="relative w-full h-full rounded-full overflow-hidden cursor-pointer border border-gray-300">
      {src && !imageError ? (
        <Image
          src={src}
          alt={alt || name}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-semibold">
          {getInitials(name)}
        </div>
      )}
    </div>
  );

  if (!showDropdown) {
    return (
      <div
        className={`${sizeClasses[size]} ${className} ring-2 ring-white hover:ring-blue-200 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 rounded-full`}
      >
        {avatarContent}
      </div>
    );
  }

  return (
    <Dropdown
      open={open}
      onClose={() => setOpen(false)}
      trigger={
        <button
          onClick={() => setOpen(!open)}
          className={`${sizeClasses[size]} ${className} ring-2 ring-white hover:ring-blue-200 transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-105 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          aria-label="User menu"
          aria-expanded={open}
        >
          {avatarContent}
        </button>
      }
    >
      <DropdownHeader>
        <div className="flex items-center gap-3">
          <div
            className={`${sizeClasses.lg} ring-2 ring-white shadow-md rounded-full shrink-0`}
          >
            {avatarContent}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {name}
            </p>
            <p className="text-xs text-gray-600 truncate">{email}</p>
          </div>
        </div>
      </DropdownHeader>

      <DropdownSection>
        <DropdownItem
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          }
        >
          Profile
        </DropdownItem>
        <DropdownItem
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          }
        >
          Settings
        </DropdownItem>
        <DropdownItem
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          }
        >
          Help & Support
        </DropdownItem>
      </DropdownSection>

      <DropdownDivider />

      <DropdownSection>
        <DropdownItem
          variant="danger"
          icon={
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          }
        >
          Sign out
        </DropdownItem>
      </DropdownSection>
    </Dropdown>
  );
};

export default Avatar;
