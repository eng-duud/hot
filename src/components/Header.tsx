import Link from "next/link";
import { Flame, PhoneCall, Menu } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-md overflow-visible">
      <div className="container mx-auto px-4 h-20 md:h-28 flex items-center justify-between">
        <Link href="/" className="scale-75 md:scale-100 origin-right">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-brand-orange transition-colors">الرئيسية</Link>
          <Link href="/menu" className="hover:text-brand-orange transition-colors">القائمة</Link>
          <Link href="/about" className="hover:text-brand-orange transition-colors">من نحن</Link>
          <Link href="/contact" className="hover:text-brand-orange transition-colors">اتصل بنا</Link>
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <a href="tel:770620062">
            <Button variant="default" className="rounded-full px-4 md:px-8 gap-3 bg-gradient-to-r from-brand-green to-emerald-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-pulse border-none font-bold">
              <PhoneCall className="w-5 h-5" />
              <span className="hidden sm:inline">اتصل واطلب الآن</span>
            </Button>
          </a>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden text-white">
            <Menu className="w-8 h-8" />
          </Button>
        </div>
      </div>
    </header>
  );
}
