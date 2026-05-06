"use client";

import { useState, useEffect } from "react";
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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Update CSS variables for 3D rotation
      const rotationY = (window.scrollY % 360) * 0.2;
      const rotationX = Math.sin(window.scrollY * 0.005) * 15;
      document.documentElement.style.setProperty('--logo-rotate-y', `${rotationY}deg`);
      document.documentElement.style.setProperty('--logo-rotate-x', `${rotationX}deg`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
      {/* ── Top Bar: Premium Branding ── */}
      <div className="w-full bg-brand-dark/95 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.3)] relative z-10 luxury-fire-top">
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="flex items-center justify-between h-16 md:h-20 pb-1 md:pb-2 pt-1">
            
            {/* Brand / Logo */}
            <Link href="/" className="flex items-center gap-4 group perspective-1000">
              {/* 3D Floating Logo Container */}
              <div 
                id="floating-logo"
                className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0 transition-transform duration-300 ease-out preserve-3d"
                style={{ 
                  transform: 'translateZ(20px) rotateX(var(--logo-rotate-x, 0deg)) rotateY(var(--logo-rotate-y, 0deg))',
                }}
              >
                {/* Glow Effect */}
                <span className="absolute inset-0 rounded-full bg-brand-red/30 blur-2xl group-hover:bg-brand-yellow/40 transition-colors duration-500 animate-pulse-slow" />
                
                {/* Main Logo Image with 3D Depth Simulation */}
                <div className="relative w-full h-full preserve-3d floating-3d-animation">
                   {/* Front Layer */}
                  <img
                    src="/logo.png"
                    alt="Hot Spicy Logo"
                    className="relative w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,186,8,0.5)] z-10"
                  />
                  {/* Subtle 3D Depth Layer (Offset) */}
                  <img
                    src="/logo.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain opacity-40 blur-[1px] translate-z-[-5px] brightness-50"
                  />
                </div>
              </div>
              
              {/* Typography with 3D Reveal */}
              <div className="flex flex-col leading-none group-hover:translate-x-1 transition-transform duration-500">
                <span className="text-xl md:text-3xl font-black tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                  <span className="text-brand-red inline-block hover:scale-110 transition-transform cursor-default">هوت</span>
                  <span className="text-brand-yellow inline-block hover:scale-110 transition-transform cursor-default"> سبايسي</span>
                </span>
                <span className="text-[10px] md:text-xs text-brand-beige/50 font-bold tracking-[0.4em] uppercase mt-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                  Hot Spicy
                </span>
              </div>
            </Link>

            {/* Actions */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* Call Now Button */}
              <Link 
                href="tel:770620062" 
                className="group relative flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-tr from-green-600 to-emerald-400 text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] hover:-translate-y-1"
                title="اتصل بنا الآن"
              >
                {/* Ping animation effect */}
                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20 group-hover:opacity-40" style={{ animationDuration: '2s' }} />
                <Phone className="w-4 h-4 md:w-5 md:h-5 relative z-10 group-hover:scale-110 transition-transform" />
              </Link>
              
              <ThemeToggle />
            </div>

          </div>
        </div>
      </div>

      {/* ── Nav Bar: Edge-to-Edge Modern Bar ── */}
      <div className="w-full bg-brand-gray/95 backdrop-blur-3xl border-b border-t border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] z-20 relative">
        {/* Subtle top glow line to separate from top bar */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-red/50 to-transparent" />
        
        <div className="container mx-auto px-2 md:px-8">
          <nav className="flex items-center justify-center gap-2 md:gap-4 h-14 md:h-16 overflow-hidden px-1 py-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center justify-center gap-1.5 md:gap-2 px-3 py-2 md:px-8 md:py-2.5 text-[12px] md:text-base font-bold rounded-full whitespace-nowrap transition-all duration-300 flex-1 md:flex-none",
                    isActive 
                      ? "text-brand-dark bg-gradient-to-r from-brand-yellow to-[#FFD000] shadow-[0_0_20px_rgba(255,186,8,0.5)] transform scale-105" 
                      : "text-white/90 hover:text-brand-yellow hover:bg-white/10 hover:scale-105"
                  )}
                >
                  <Icon className={cn("w-4 h-4 md:w-5 md:h-5", isActive ? "text-brand-dark" : "text-brand-red drop-shadow-md")} />
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
