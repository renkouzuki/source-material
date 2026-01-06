"use client";

import { useCallback, useState } from "react";

export type Theme = "light" | "dark";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const setThemeCookie = (theme: Theme) => {
  document.cookie = `theme=${theme}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Strict`;
};

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === "undefined") return "light";
    return document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  const applyTheme = useCallback((newTheme: Theme) => {
    const root = document.documentElement;
    root.classList.toggle("dark", newTheme === "dark");

    setThemeCookie(newTheme);
    setTheme(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    applyTheme(theme === "dark" ? "light" : "dark");
  }, [theme, applyTheme]);

  return {
    theme,
    toggleTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
  };
}
