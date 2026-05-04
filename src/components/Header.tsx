"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "الرئيسية" },
    { href: "/menu", label: "القائمة" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "اتصل بنا" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container mx-auto max-w-fit">
        <nav className="bg-brand-dark/60 backdrop-blur-xl border border-white/10 rounded-full p-1.5 flex items-center gap-1 shadow-2xl">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap",
                  isActive 
                    ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/20 scale-105" 
                    : "text-white/50 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
