"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import { Home, UtensilsCrossed, Info, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/menu", label: "القائمة", icon: UtensilsCrossed },
  { href: "/about", label: "من نحن", icon: Info },
  { href: "/contact", label: "اتصل بنا", icon: Phone },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
      {/* ── Top Bar: Premium Branding ── */}
      <div className="w-full bg-gradient-to-b from-black/95 to-[#121212]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)] relative z-10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-28 pb-4 md:pb-6 pt-2">
            
            {/* Brand / Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              {/* Logo with custom float/pulse animation */}
              <div className="relative w-14 h-14 md:w-20 md:h-20 flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-brand-red/20 blur-xl group-hover:bg-brand-yellow/30 transition-colors duration-500" />
                <img
                  src="/logo.png"
                  alt="Hot Spicy Logo"
                  className="relative w-full h-full object-contain animate-premium-logo drop-shadow-[0_0_15px_rgba(255,186,8,0.4)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Typography */}
              <div className="flex flex-col leading-none">
                <span className="text-2xl md:text-4xl font-black tracking-tight drop-shadow-md">
                  <span className="text-brand-red">هوت</span>
                  <span className="text-brand-yellow"> سبايسي</span>
                </span>
                <span className="text-[10px] md:text-[13px] text-brand-beige/50 font-bold tracking-[0.3em] uppercase mt-1 md:mt-2">
                  Hot Spicy
                </span>
              </div>
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>

          </div>
        </div>
      </div>

      {/* ── Nav Bar: Modern Floating Pill ── */}
      <div className="absolute left-0 right-0 -bottom-7 md:-bottom-8 flex justify-center pointer-events-none z-20">
        <nav className="pointer-events-auto flex items-center justify-center gap-1 md:gap-2 bg-[#121212]/90 backdrop-blur-3xl border border-white/10 rounded-full p-1.5 md:p-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-x-auto scrollbar-hide max-w-[95vw]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base font-bold rounded-full whitespace-nowrap transition-all duration-300",
                  isActive 
                    ? "text-brand-dark bg-gradient-to-r from-brand-yellow to-[#FFD000] shadow-[0_0_20px_rgba(255,186,8,0.4)]" 
                    : "text-brand-beige/70 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon className={cn("w-4 h-4 md:w-5 md:h-5", isActive ? "text-brand-dark" : "text-brand-beige/50")} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
