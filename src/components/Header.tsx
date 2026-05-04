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
      <div className="w-full bg-gradient-to-b from-black/95 to-[#121212]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)] relative z-10 luxury-fire-top">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 pb-1 md:pb-2 pt-1">
            
            {/* Brand / Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              {/* Logo with custom float/pulse animation */}
              <div className="relative w-12 h-12 md:w-14 md:h-14 flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-brand-red/20 blur-xl group-hover:bg-brand-yellow/30 transition-colors duration-500" />
                <img
                  src="/logo.png"
                  alt="Hot Spicy Logo"
                  className="relative w-full h-full object-contain animate-premium-logo drop-shadow-[0_0_15px_rgba(255,186,8,0.4)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Typography */}
              <div className="flex flex-col leading-none">
                <span className="text-xl md:text-2xl font-black tracking-tight drop-shadow-md">
                  <span className="text-brand-red">هوت</span>
                  <span className="text-brand-yellow"> سبايسي</span>
                </span>
                <span className="text-[10px] md:text-xs text-brand-beige/50 font-bold tracking-[0.3em] uppercase mt-1 md:mt-1.5">
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

      {/* ── Nav Bar: Edge-to-Edge Modern Bar ── */}
      <div className="w-full bg-[#121212]/95 backdrop-blur-3xl border-b border-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.3)] z-20">
        <div className="container mx-auto px-0 md:px-8">
          <nav className="flex items-center justify-center gap-1 md:gap-2 h-12 md:h-14 overflow-hidden px-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-6 md:py-2.5 text-[11px] md:text-base font-bold rounded-full whitespace-nowrap transition-all duration-300 mx-0.5 md:mx-1 flex-1 md:flex-none",
                    isActive 
                      ? "text-brand-dark bg-gradient-to-r from-brand-yellow to-[#FFD000] shadow-[0_0_15px_rgba(255,186,8,0.3)]" 
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
      </div>
    </header>
  );
}
