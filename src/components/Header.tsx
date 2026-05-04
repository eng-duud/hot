import Link from "next/link";
import { Flame, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-md overflow-visible">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-brand-orange transition-colors">الرئيسية</Link>
          <Link href="/menu" className="hover:text-brand-orange transition-colors">القائمة</Link>
          <Link href="/about" className="hover:text-brand-orange transition-colors">من نحن</Link>
          <Link href="/contact" className="hover:text-brand-orange transition-colors">اتصل بنا</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href="tel:770620062">
            <Button variant="default" className="rounded-full px-8 gap-3 bg-gradient-to-r from-brand-green to-emerald-500 hover:scale-105 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)] animate-pulse border-none font-bold">
              <PhoneCall className="w-5 h-5" />
              اتصل واطلب الآن
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
