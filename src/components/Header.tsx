import Link from "next/link";
import { Flame, PhoneCall, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-bold tracking-tight">
            <span className="text-brand-orange">هوت</span>{" "}
            <span className="text-white">سبايسي</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 md:gap-12 font-medium">
          <Link href="/" className="hover:text-brand-orange transition-colors">الرئيسية</Link>
          <Link href="/menu" className="hover:text-brand-orange transition-colors">القائمة</Link>
          <Link href="/about" className="hover:text-brand-orange transition-colors">من نحن</Link>
          <Link href="/contact" className="hover:text-brand-orange transition-colors">اتصل بنا</Link>
        </nav>
      </div>
    </header>
  );
}
