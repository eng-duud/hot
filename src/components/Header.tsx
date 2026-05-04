"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/menu", label: "القائمة" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "اتصل بنا" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* ── Top Bar: Premium Branding ── */}
      <div className="bg-gradient-to-b from-black/95 to-[#121212]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">
            
            {/* Brand / Logo */}
            <Link href="/" className="flex items-center gap-4 group">
              {/* Logo with custom float/pulse animation */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-brand-red/20 blur-xl group-hover:bg-brand-yellow/30 transition-colors duration-500" />
                <img
                  src="/logo.png"
                  alt="Hot Spicy Logo"
                  className="relative w-full h-full object-contain animate-premium-logo"
                />
              </div>
              
              {/* Typography */}
              <div className="flex flex-col leading-none">
                <span className="text-xl md:text-3xl font-black tracking-tight drop-shadow-md">
                  <span className="text-brand-red">هوت</span>
                  <span className="text-brand-yellow"> سبايسي</span>
                </span>
                <span className="text-[10px] md:text-xs text-brand-beige/50 font-medium tracking-[0.25em] uppercase mt-1 md:mt-1.5">
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

      {/* ── Nav Bar: Elegant Navigation ── */}
      <div className="bg-black/60 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-center gap-6 md:gap-10 h-12 md:h-14 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "premium-nav-link text-sm md:text-base font-bold whitespace-nowrap py-2",
                    isActive ? "text-white active" : "text-white/60"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
