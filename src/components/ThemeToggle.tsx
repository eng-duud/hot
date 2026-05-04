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
      className="relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-orange/50 transition-all duration-300 group"
    >
      <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-brand-orange/10 transition-opacity" />
      {isDark ? (
        <Sun className="w-4 h-4 text-brand-orange transition-transform group-hover:rotate-45 duration-300" />
      ) : (
        <Moon className="w-4 h-4 text-white/70 transition-transform group-hover:-rotate-12 duration-300" />
      )}
    </button>
  );
}
