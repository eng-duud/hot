import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram", icon: <Instagram className="w-4 h-4" /> },
  { href: "https://wa.me/770620062",   label: "WhatsApp",  icon: <WhatsAppIcon className="w-4 h-4" /> },
  { href: "https://www.facebook.com",  label: "Facebook",  icon: <Facebook className="w-4 h-4" /> },
];

const navLinks = [
  { href: "/",        label: "الرئيسية" },
  { href: "/menu",    label: "تصفح القائمة" },
  { href: "/about",   label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/[0.06] mt-auto">
      <div className="container mx-auto px-3 sm:px-6 md:px-8 py-10 md:py-14">

        {/* ── Always 2×2 grid ── */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-10 md:gap-12">

          {/* ① Top-Right: Brand */}
          <div className="space-y-3 md:space-y-5">
            {/* Logo + Name */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-brand-orange/25 blur-xl" />
                <img
                  src="/logo.png"
                  alt="Hot Spicy Logo"
                  className="relative w-full h-full object-contain drop-shadow-[0_0_10px_rgba(255,87,34,0.85)]"
                />
              </div>
              <div className="leading-none">
                <div className="text-sm sm:text-lg md:text-xl font-black">
                  <span className="text-brand-orange">هوت</span>
                  <span className="text-white"> سبايسي</span>
                </div>
                <div className="text-[9px] sm:text-[10px] text-white/25 tracking-[0.15em] uppercase mt-0.5">Hot Spicy</div>
              </div>
            </div>

            {/* Tagline — hidden on very small screens */}
            <p className="text-white/40 text-[11px] sm:text-xs md:text-sm leading-relaxed hidden sm:block">
              شريككم في النكهة الحارة والمذاق الفاخر في قلب صنعاء بأجود المكونات.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-orange hover:border-brand-orange/40 hover:bg-brand-orange/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ② Top-Left: Quick Links */}
          <div className="space-y-3 md:space-y-5">
            <h4 className="text-xs sm:text-sm md:text-lg font-black flex items-center gap-2">
              <span className="w-0.5 h-4 sm:h-5 rounded-full bg-brand-orange inline-block flex-shrink-0" />
              روابط سريعة
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-[11px] sm:text-xs md:text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ③ Bottom-Right: Contact */}
          <div className="space-y-3 md:space-y-5">
            <h4 className="text-xs sm:text-sm md:text-lg font-black flex items-center gap-2">
              <span className="w-0.5 h-4 sm:h-5 rounded-full bg-brand-orange inline-block flex-shrink-0" />
              تواصل معنا
            </h4>
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-brand-orange" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-white/30">اتصل بنا</p>
                  <p className="text-white/80 font-bold text-[11px] sm:text-xs md:text-sm leading-relaxed">
                    770620062<br />730620062
                  </p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-brand-orange" />
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] text-white/30">البريد</p>
                  <p className="text-white/80 font-bold text-[10px] sm:text-xs md:text-sm break-all">info@hotspicy-yemen.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* ④ Bottom-Left: Location */}
          <div className="space-y-3 md:space-y-5">
            <h4 className="text-xs sm:text-sm md:text-lg font-black flex items-center gap-2">
              <span className="w-0.5 h-4 sm:h-5 rounded-full bg-brand-orange inline-block flex-shrink-0" />
              موقعنا
            </h4>
            <div className="flex items-start gap-2 text-white/50 text-[11px] sm:text-xs md:text-sm leading-relaxed">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-brand-orange mt-0.5 flex-shrink-0" />
              <span>صنعاء، الأصبحي<br />شارع 22 مايو</span>
            </div>
            <a
              href="https://maps.app.goo.gl/MwXv8oYtcjWAf1JP7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-brand-orange/10 hover:border-brand-orange/40 transition-all duration-300 group"
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-brand-orange group-hover:scale-110 transition-transform" />
              <span className="font-bold text-white/70 group-hover:text-white text-[10px] sm:text-xs md:text-sm transition-colors">
                فتح الخريطة
              </span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 md:mt-14 pt-5 border-t border-white/[0.05] text-center">
          <p className="text-[10px] sm:text-xs text-white/20">
            &copy; {new Date().getFullYear()} هوت سبايسي &mdash; جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
}
