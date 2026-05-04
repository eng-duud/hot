"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
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
      {/* ── Top Bar: Logo + Name + Theme Toggle ── */}
      <div className="bg-brand-dark/80 backdrop-blur-2xl border-b border-white/[0.06] px-4 md:px-8">
        <div className="container mx-auto flex items-center justify-between h-16">

          {/* Logo + Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              {/* Glow shadow behind logo */}
              <span className="absolute inset-0 rounded-full bg-brand-orange/30 blur-lg scale-110 group-hover:bg-brand-orange/50 transition-all duration-500" />
              <img
                src="/logo.png"
                alt="Hot Spicy Logo"
                className="relative w-full h-full object-contain drop-shadow-[0_0_12px_rgba(255,87,34,0.8)] group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-tight">
                <span className="text-brand-orange">هوت</span>
                <span className="text-white"> سبايسي</span>
              </span>
              <span className="text-[10px] text-white/30 font-medium tracking-widest uppercase">Hot Spicy</span>
            </div>
          </Link>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>

      {/* ── Nav Bar: Page Links ── */}
      <div className="bg-black/40 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="container mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-center gap-1 h-11 overflow-x-auto scrollbar-hide">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative px-5 py-1.5 text-sm font-bold rounded-full whitespace-nowrap transition-all duration-300",
                    isActive
                      ? "text-brand-orange"
                      : "text-white/40 hover:text-white"
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-brand-orange/10 border border-brand-orange/20" />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
