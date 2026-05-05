"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
      className={cn(
        "relative w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-500 group overflow-hidden",
        isDark 
          ? "bg-brand-gray border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]" 
          : "bg-brand-yellow border-brand-yellow shadow-[0_0_15px_rgba(255,186,8,0.3)]"
      )}
    >
      {/* Animated background pulse */}
      <span className={cn(
        "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        isDark ? "bg-white/5" : "bg-black/5"
      )} />
      
      {isDark ? (
        <Sun className="w-5 h-5 text-brand-yellow drop-shadow-[0_0_8px_rgba(255,186,8,0.8)] transition-all duration-500 group-hover:rotate-90 group-hover:scale-110" />
      ) : (
        <Moon className="w-5 h-5 text-brand-dark transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110" />
      )}
    </button>
  );
}
