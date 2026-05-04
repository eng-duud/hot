"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const dark = stored !== "light";
    setIsDark(dark);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    const theme = next ? "dark" : "light";
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <button
      onClick={toggle}
      aria-label="تبديل الوضع"
      className="relative w-10 h-10 flex items-center justify-center rounded-full border border-brand-yellow/30 bg-brand-yellow/10 hover:bg-brand-yellow/20 hover:border-brand-yellow/60 transition-all duration-300 group shadow-[0_0_10px_rgba(255,186,8,0.2)]"
    >
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-brand-yellow/20 transition-opacity" />
      {isDark ? (
        <Sun className="w-5 h-5 text-brand-yellow drop-shadow-[0_0_8px_rgba(255,186,8,0.8)] transition-transform group-hover:rotate-45 duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-brand-yellow drop-shadow-[0_0_8px_rgba(255,186,8,0.8)] transition-transform group-hover:-rotate-12 duration-300" />
      )}
    </button>
  );
}
