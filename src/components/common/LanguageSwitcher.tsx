"use client";

import { setUserLocale } from "@/lib/locale";
import { Locale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState, useTransition } from "react";
import { Dropdown, DropdownSection, DropdownItem } from "./Dropdown";

type Props = {
  locale?: string;
  inSidebar?: boolean;
};

const LanguageSwitcher = ({ locale, inSidebar = false }: Props) => {
  const t = useTranslations("lang");
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const [currentFlag, setCurrentFlag] = useState(locale || "en");

  const languages = [
    { value: "en", label: t("en") },
    { value: "vi", label: t("vi") },
  ];

  const currentLanguage = languages.find((lang) => lang.value === currentFlag);

  const onChange = (value: string) => {
    startTransition(() => {
      setUserLocale(value as Locale);
      setCurrentFlag(value);
      setOpen(false);
    });
  };

  if (inSidebar) {
    return (
      <Dropdown
        open={open}
        onClose={() => setOpen(false)}
        align="left"
        width="w-full"
        position="top"
        trigger={
          <button
            onClick={() => setOpen(!open)}
            disabled={isPending}
            className="w-full cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl bg-white hover:bg-blue-50 border border-gray-200 transition-all duration-200 group shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? (
              <div className="w-7 h-5 flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : (
              <div className="relative w-7 h-5 overflow-hidden rounded shadow-sm shrink-0 ring-1 ring-gray-200">
                <Image
                  src={`/images/${currentFlag}.svg`}
                  alt={currentFlag}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <span className="flex-1 text-left text-sm font-medium text-gray-700 group-hover:text-blue-600">
              {currentLanguage?.label}
            </span>
            <svg
              className={`w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-all ${
                open ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        }
        className="absolute bottom-full left-0 right-0"
      >
        <DropdownSection>
          {languages.map((item, index) => (
            <DropdownItem
              key={item.value}
              onClick={() => onChange(item.value)}
              disabled={isPending}
              className={`${
                currentFlag === item.value ? "bg-blue-50 text-blue-700" : ""
              } ${index > 0 ? "border-t border-gray-100" : ""}`}
            >
              <span className="relative w-7 h-5 overflow-hidden rounded shadow-sm shrink-0">
                <Image
                  src={`/images/${item.value}.svg`}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </span>
              <span className="flex-1">{item.label}</span>
              {currentFlag === item.value && (
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </DropdownItem>
          ))}
        </DropdownSection>
      </Dropdown>
    );
  }

  return (
    <Dropdown
      open={open}
      onClose={() => setOpen(false)}
      width="w-50"
      trigger={
        <button
          onClick={() => setOpen(!open)}
          aria-label="Change language"
          aria-haspopup="true"
          aria-expanded={open}
          disabled={isPending}
          className="group cursor-pointer relative w-10 h-10 rounded-full bg-linear-to-br from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 p-1.5 transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="relative w-full h-full overflow-hidden rounded-full border-2 border-white shadow-sm group-hover:border-blue-200 transition-colors">
            <Image
              src={`/images/${currentFlag}.svg`}
              alt={currentFlag}
              fill
              className="object-cover"
            />
          </div>
          {isPending && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80 rounded-full">
              <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </button>
      }
    >
      <DropdownSection>
        {languages.map((item, index) => (
          <DropdownItem
            key={item.value}
            onClick={() => onChange(item.value)}
            disabled={isPending}
            className={`flex items-center gap-3 px-3 py-2 ${
              currentFlag === item.value ? "bg-blue-50 text-blue-700" : ""
            } ${index > 0 ? "border-t border-gray-100" : ""}`}
          >
            <span className="relative w-7 h-5 shrink-0 overflow-hidden rounded shadow-sm ring-1 ring-gray-200">
              <Image
                src={`/images/${item.value}.svg`}
                alt={item.label}
                fill
                className="object-cover"
              />
            </span>

            <span className="flex-1 text-sm font-medium">{item.label}</span>

            {currentFlag === item.value && (
              <svg
                className="w-4 h-4 text-blue-600 shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </DropdownItem>
        ))}
      </DropdownSection>
    </Dropdown>
  );
};

export default LanguageSwitcher;
