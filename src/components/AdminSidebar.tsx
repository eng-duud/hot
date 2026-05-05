"use client";

import { LayoutDashboard, MessageSquare, Package, Tag, LogOut, Home, Image as ImageIcon, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/admin", label: "لوحة التحكم", icon: LayoutDashboard },
  { href: "/admin/products", label: "المنتجات", icon: Package },
  { href: "/admin/categories", label: "التصنيفات", icon: Tag },
  { href: "/admin/messages", label: "رسائل العملاء", icon: MessageSquare },
  { href: "/admin/about", label: "سلايدر من نحن", icon: ImageIcon },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-80 border-b lg:border-b-0 lg:border-l border-white/5 bg-brand-dark/80 backdrop-blur-xl lg:bg-black/40 p-4 lg:p-8 flex flex-col gap-6 lg:gap-10 lg:sticky lg:top-0 lg:h-screen z-[100]">
      
      {/* Header */}
      <div className="flex items-center justify-between lg:justify-start lg:gap-3">
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-105 active:scale-95">
          <div className="bg-white/5 p-2 rounded-xl group-hover:bg-brand-orange/10 transition-colors">
            <Logo iconSize={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg leading-tight">HOT STORE</span>
            <span className="text-[10px] w-fit bg-brand-orange/20 text-brand-orange px-2 py-0.5 rounded-full font-bold tracking-wider">ADMIN PANEL</span>
          </div>
        </Link>
        
        <Link href="/" className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl bg-red-500/10 text-brand-red border border-brand-red/20 transition-all hover:bg-brand-red hover:text-white active:scale-95 text-xs font-bold">
          <LogOut className="w-4 h-4" />
          <span>خروج</span>
        </Link>
      </div>

      {/* Navigation */}
      <div className="relative w-full">
        {/* Mobile Gradient Masks */}
        <div className="lg:hidden absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="lg:hidden absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
        
        <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide w-full lg:flex-1 px-4 lg:px-0">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 lg:gap-4 px-5 py-3 lg:px-6 lg:py-4 rounded-2xl transition-all duration-300 whitespace-nowrap relative group",
                  isActive 
                    ? "bg-brand-orange text-brand-dark font-bold shadow-lg shadow-brand-orange/20 scale-[1.02]" 
                    : "text-white/60 hover:text-white hover:bg-white/5"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-transform group-hover:scale-110",
                  isActive ? "text-brand-dark" : "text-brand-orange/70"
                )} />
                <span className="text-sm lg:text-base">{item.label}</span>
                
                {isActive && (
                  <div className="hidden lg:block absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-brand-orange rounded-l-full shadow-[0_0_15px_rgba(233,196,106,0.5)]" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Links (Desktop Only) */}
      <div className="hidden lg:flex flex-col gap-3 mt-auto pt-8 border-t border-white/5">
         <Link href="/" className="flex items-center gap-4 px-6 py-4 rounded-2xl text-white/40 hover:text-white hover:bg-white/5 transition-all group">
          <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">العودة للموقع</span>
        </Link>
        <Link href="/" className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-brand-red/60 hover:bg-brand-red/10 hover:text-brand-red transition-all group">
          <LogOut className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="font-medium">تسجيل الخروج</span>
        </Link>
      </div>
    </aside>
  );
}
