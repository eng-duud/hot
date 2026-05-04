import Link from "next/link";
import { Flame, PhoneCall, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-brand-dark/40 backdrop-blur-xl border border-white/10 rounded-full h-16 md:h-20 px-6 md:px-10 flex items-center justify-between shadow-2xl">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl md:text-2xl font-black tracking-tighter">
              <span className="text-brand-orange group-hover:text-white transition-colors">هوت</span>{" "}
              <span className="text-white group-hover:text-brand-orange transition-colors">سبايسي</span>
            </span>
          </Link>

          {/* Navigation - Visible on all screens */}
          <nav className="flex items-center gap-3 md:gap-8 font-bold text-[10px] md:text-sm uppercase tracking-widest">
            <Link href="/" className="text-white/60 hover:text-brand-orange transition-all">الرئيسية</Link>
            <Link href="/menu" className="text-white/60 hover:text-brand-orange transition-all">القائمة</Link>
            <Link href="/about" className="text-white/60 hover:text-brand-orange transition-all">من نحن</Link>
            <Link href="/contact" className="text-white/60 hover:text-brand-orange transition-all">اتصل بنا</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
