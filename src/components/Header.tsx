import Link from "next/link";
import { Flame, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Logo Image */}
            <img 
              src="/logo.png" 
              alt="Hot Spicy Logo" 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform"
              onError={(e) => {
                // Fallback to icon if image is not found
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback Icon */}
            <div className="hidden bg-brand-orange p-2 rounded-full">
              <Flame className="w-6 h-6 text-white" />
            </div>
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
          <a href="tel:770620062">
            <Button variant="default" className="rounded-full px-6 gap-2 bg-brand-green hover:bg-brand-green/90 animate-pulse">
              <PhoneCall className="w-4 h-4" />
              اتصل واطلب الآن
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
