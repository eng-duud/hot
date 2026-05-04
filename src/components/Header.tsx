import Link from "next/link";
import { Flame } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-orange p-2 rounded-full group-hover:scale-110 transition-transform">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-brand-orange">هوت</span>{" "}
            <span className="text-white">سبايسي</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-brand-orange transition-colors">الرئيسية</Link>
          <Link href="/menu" className="hover:text-brand-orange transition-colors">القائمة</Link>
          <Link href="/about" className="hover:text-brand-orange transition-colors">من نحن</Link>
          <Link href="/contact" className="hover:text-brand-orange transition-colors">اتصل بنا</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="default" className="rounded-full px-6">
            طلب أونلاين
          </Button>
        </div>
      </div>
    </header>
  );
}
