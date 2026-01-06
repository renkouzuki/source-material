"use client";

import { useState, useTransition } from "react";
import { setUserLocale } from "@/lib/locale";
import { Locale, useTranslations } from "next-intl";

const LanguageSwitcher = () => {
  const t = useTranslations("lang");
  const [isPending, startTransition] = useTransition();
  const [currentLang, setCurrentLang] = useState<Locale>("en");

  const languages: { value: Locale; label: string }[] = [
    { value: "en", label: t("en") },
    { value: "vi", label: t("vi") },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Locale;
    startTransition(() => {
      setUserLocale(value);
      setCurrentLang(value);
    });
  };

  return (
    <select
      value={currentLang}
      onChange={handleChange}
      disabled={isPending}
      className="border rounded px-2 py-1"
    >
      {languages.map((lang) => (
        <option key={lang.value} value={lang.value}>
          {lang.label}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
