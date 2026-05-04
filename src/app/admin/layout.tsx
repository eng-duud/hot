import { LayoutDashboard, MessageSquare, Package, Tag, LogOut, Home } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-brand-dark">
      {/* Sidebar */}
      <aside className="w-full lg:w-72 border-b lg:border-b-0 lg:border-l border-white/10 bg-black/50 p-4 lg:p-8 flex flex-col gap-4 lg:gap-12 lg:sticky lg:top-0 lg:h-screen z-50">
        
        <div className="flex items-center justify-between lg:justify-start lg:gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo iconSize={20} />
            <span className="text-[10px] bg-brand-orange px-2 py-0.5 rounded-full text-white">ADMIN</span>
          </Link>
          
          <button className="lg:hidden flex items-center gap-2 px-3 py-1.5 rounded-lg text-brand-red/70 hover:bg-brand-red/10 hover:text-brand-red transition-colors text-xs font-bold">
            <LogOut className="w-4 h-4" />
            خروج
          </button>
        </div>

        <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide w-full lg:flex-1">
          <Link href="/admin" className="flex items-center gap-2 lg:gap-4 px-4 py-3 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl bg-white/5 text-white hover:bg-white/10 transition-colors whitespace-nowrap">
            <LayoutDashboard className="w-4 h-4 lg:w-5 lg:h-5 text-brand-orange" />
            <span className="font-medium text-sm lg:text-base">لوحة التحكم</span>
          </Link>
          <Link href="/admin/products" className="flex items-center gap-2 lg:gap-4 px-4 py-3 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl text-white/50 hover:bg-white/5 hover:text-white transition-colors whitespace-nowrap">
            <Package className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="font-medium text-sm lg:text-base">المنتجات</span>
          </Link>
          <Link href="/admin/categories" className="flex items-center gap-2 lg:gap-4 px-4 py-3 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl text-white/50 hover:bg-white/5 hover:text-white transition-colors whitespace-nowrap">
            <Tag className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="font-medium text-sm lg:text-base">التصنيفات</span>
          </Link>
          <Link href="/admin/messages" className="flex items-center gap-2 lg:gap-4 px-4 py-3 lg:px-6 lg:py-4 rounded-xl lg:rounded-2xl text-white/50 hover:bg-white/5 hover:text-white transition-colors whitespace-nowrap">
            <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="font-medium text-sm lg:text-base">رسائل العملاء</span>
          </Link>
        </nav>

        <div className="hidden lg:flex flex-col space-y-4 pt-8 border-t border-white/5">
           <Link href="/" className="flex items-center gap-4 px-6 py-4 rounded-2xl text-white/30 hover:text-white transition-colors">
            <Home className="w-5 h-5" />
            <span className="font-medium">العودة للموقع</span>
          </Link>
          <button className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-brand-red/50 hover:bg-brand-red/10 hover:text-brand-red transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 overflow-y-auto w-full">
        {children}
      </main>
    </div>
  );
}
