import Link from "next/link";
import Logo from "@/components/Logo";
import { MapPin, Clock, Phone, Flame } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 md:px-8 py-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand Column */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-brand-orange/30 blur-lg" />
                <img
                  src="/logo.png"
                  alt="Hot Spicy Logo"
                  className="relative w-full h-full object-contain drop-shadow-[0_0_12px_rgba(255,87,34,0.8)]"
                />
              </div>
              <div className="leading-none">
                <div className="text-lg font-black">
                  <span className="text-brand-orange">هوت</span>
                  <span className="text-white"> سبايسي</span>
                </div>
                <div className="text-[10px] text-white/30 tracking-widest uppercase">Hot Spicy</div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              أجود اللحوم المشوية على الفحم، بالنكهات الحارة الأصيلة. تجربة لا تُنسى في كل وجبة.
            </p>
            {/* Divider with flame */}
            <div className="flex items-center gap-3 pt-2">
              <Flame className="w-4 h-4 text-brand-orange" />
              <span className="text-xs text-white/20 tracking-widest uppercase">Finest Burgers in Sanaa</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-5">
            <h5 className="text-sm font-bold text-white/80 uppercase tracking-widest">الصفحات</h5>
            <ul className="space-y-3">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/menu", label: "قائمة الطعام" },
                { href: "/about", label: "من نحن" },
                { href: "/contact", label: "اتصل بنا" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-brand-orange text-sm transition-colors duration-200 hover:translate-x-1 inline-block transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h5 className="text-sm font-bold text-white/80 uppercase tracking-widest">تواصل معنا</h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm leading-relaxed">صنعاء، الأصبحي<br />شارع 22 مايو</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-red flex-shrink-0" />
                <span className="text-white/40 text-sm">يومياً: 12 ظ – 2 ص</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                <div className="text-white/40 text-sm space-y-1">
                  <div>770620062</div>
                  <div>730620062</div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} هوت سبايسي — جميع الحقوق محفوظة.
          </p>
          <a
            href="https://maps.app.goo.gl/MwXv8oYtcjWAf1JP7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/20 hover:text-brand-orange transition-colors"
          >
            عرض الموقع على الخريطة ↗
          </a>
        </div>

      </div>
    </footer>
  );
}
