"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import { Home, UtensilsCrossed, Info, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "الرئيسية", icon: Home },
  { href: "/menu", label: "القائمة", icon: UtensilsCrossed },
  { href: "/about", label: "من نحن", icon: Info },
  { href: "/contact", label: "اتصل بنا", icon: Phone },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300">
      {/* Dynamic fire background overlay */}
      <div className="absolute inset-0 luxury-fire-top pointer-events-none -z-10" />
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center gap-3 md:gap-4 group z-50">
            {/* Logo with custom float/pulse animation */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <span className="absolute inset-0 rounded-full bg-brand-red/20 blur-lg group-hover:bg-brand-yellow/30 transition-colors duration-500" />
              <img
                src="/logo.png"
                alt="Hot Spicy Logo"
                className="relative w-full h-full object-contain animate-premium-logo drop-shadow-[0_0_12px_rgba(255,186,8,0.4)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Typography */}
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-black tracking-tight drop-shadow-md">
                <span className="text-brand-red">هوت</span>
                <span className="text-brand-yellow"> سبايسي</span>
              </span>
              <span className="text-[8px] md:text-[10px] text-brand-beige/50 font-bold tracking-[0.2em] uppercase mt-0.5 md:mt-1">
                Hot Spicy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 overflow-hidden group/btn",
                    isActive 
                      ? "text-brand-dark bg-gradient-to-r from-brand-yellow to-[#FFD000] shadow-[0_0_15px_rgba(255,186,8,0.4)]" 
                      : "text-white/80 hover:text-brand-yellow hover:bg-white/5"
                  )}
                >
                  <Icon className={cn("w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110", isActive ? "text-brand-dark" : "text-brand-red")} />
                  <span>{link.label}</span>
                  {!isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-red to-brand-yellow scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-center" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions & Responsive Toggle */}
          <div className="flex items-center gap-2 md:gap-3 z-50">
            {/* Call Now Button (Visible on all screen sizes) */}
            <Link 
              href="tel:770620062" 
              className="group relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 text-white transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:-translate-y-0.5"
              title="اتصل بنا الآن"
            >
              {/* Ping animation effect */}
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-15 group-hover:opacity-30" style={{ animationDuration: '2s' }} />
              <Phone className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:scale-110 transition-transform" />
            </Link>
            
            <ThemeToggle />

            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 active:scale-95 transition-all z-50 flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-brand-red" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-3xl border-b border-white/10 transition-all duration-300 origin-top overflow-hidden md:hidden shadow-2xl z-10",
          isOpen ? "max-h-[300px] opacity-100 py-4 scale-y-100" : "max-h-0 opacity-0 scale-y-95 pointer-events-none"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-bold transition-all duration-200",
                  isActive 
                    ? "text-brand-dark bg-gradient-to-r from-brand-yellow to-[#FFD000] shadow-[0_0_15px_rgba(255,186,8,0.3)]" 
                    : "text-white/80 hover:text-brand-yellow hover:bg-white/5"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive ? "text-brand-dark" : "text-brand-red")} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
