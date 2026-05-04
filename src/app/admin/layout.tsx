import { LayoutDashboard, MessageSquare, Package, Tag, LogOut, Home } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-brand-dark">
      {/* Sidebar */}
      <aside className="w-72 border-l border-white/10 bg-black/50 p-8 flex flex-col gap-12 sticky top-0 h-screen">
        <Link href="/" className="flex items-center gap-2">
          <Logo iconSize={20} />
          <span className="text-[10px] bg-brand-orange px-2 py-0.5 rounded-full text-white">ADMIN</span>
        </Link>

        <nav className="flex flex-col gap-2 flex-1">
          <Link href="/admin" className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 text-white hover:bg-white/10 transition-colors">
            <LayoutDashboard className="w-5 h-5 text-brand-orange" />
            <span className="font-medium">لوحة التحكم</span>
          </Link>
          <Link href="/admin/products" className="flex items-center gap-4 px-6 py-4 rounded-2xl text-white/50 hover:bg-white/5 hover:text-white transition-colors">
            <Package className="w-5 h-5" />
            <span className="font-medium">المنتجات</span>
          </Link>
          <Link href="/admin/categories" className="flex items-center gap-4 px-6 py-4 rounded-2xl text-white/50 hover:bg-white/5 hover:text-white transition-colors">
            <Tag className="w-5 h-5" />
            <span className="font-medium">التصنيفات</span>
          </Link>
          <Link href="/admin/messages" className="flex items-center gap-4 px-6 py-4 rounded-2xl text-white/50 hover:bg-white/5 hover:text-white transition-colors">
            <MessageSquare className="w-5 h-5" />
            <span className="font-medium">رسائل العملاء</span>
          </Link>
        </nav>

        <div className="space-y-4 pt-8 border-t border-white/5">
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
      <main className="flex-1 p-12 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
