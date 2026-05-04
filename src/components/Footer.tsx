import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

// WhatsApp icon (lucide doesn't have it, using a simple SVG)
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const socialLinks = [
  {
    href: "https://www.instagram.com",
    label: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    href: "https://wa.me/770620062",
    label: "WhatsApp",
    icon: <WhatsAppIcon className="w-5 h-5" />,
  },
  {
    href: "https://www.facebook.com",
    label: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
  },
];

const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/menu", label: "تصفح قائمة الطعام" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/[0.06] mt-auto">
      <div className="container mx-auto px-4 md:px-8 py-16">

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

          {/* ── Top Right: Brand ── */}
          <div className="space-y-6">
            {/* Logo + Name */}
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-brand-orange/25 blur-xl" />
                <img
                  src="/logo.png"
                  alt="Hot Spicy Logo"
                  className="relative w-full h-full object-contain drop-shadow-[0_0_14px_rgba(255,87,34,0.85)]"
                />
              </div>
              <div className="leading-none">
                <div className="text-2xl font-black">
                  <span className="text-brand-orange">هوت</span>
                  <span className="text-white"> سبايسي</span>
                </div>
                <div className="text-[11px] text-white/25 tracking-[0.2em] uppercase mt-1">Hot Spicy</div>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-white/40 text-sm leading-loose max-w-xs">
              شريككم في النكهة الحارة والمذاق الفاخر في قلب صنعاء بأجود المكونات.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-orange hover:border-brand-orange/40 hover:bg-brand-orange/10 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Top Left: Quick Links ── */}
          <div className="space-y-6">
            <h4 className="text-xl font-black flex items-center gap-3">
              <span className="w-1 h-6 rounded-full bg-brand-orange inline-block" />
              روابط سريعة
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Bottom Right: Contact ── */}
          <div className="space-y-6">
            <h4 className="text-xl font-black flex items-center gap-3">
              <span className="w-1 h-6 rounded-full bg-brand-orange inline-block" />
              تواصل معنا
            </h4>
            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-brand-orange" />
                </div>
                <div>
                  <p className="text-[11px] text-white/30 mb-1">اتصل بنا</p>
                  <p className="text-white/80 font-bold text-sm leading-relaxed">
                    770620062<br />730620062
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-brand-orange" />
                </div>
                <div>
                  <p className="text-[11px] text-white/30 mb-1">البريد الإلكتروني</p>
                  <p className="text-white/80 font-bold text-sm">info@hotspicy-yemen.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Bottom Left: Location ── */}
          <div className="space-y-6">
            <h4 className="text-xl font-black flex items-center gap-3">
              <span className="w-1 h-6 rounded-full bg-brand-orange inline-block" />
              موقعنا
            </h4>

            {/* Address */}
            <div className="flex items-start gap-3 text-white/50 text-sm leading-relaxed">
              <MapPin className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
              <span>صنعاء، الأصبحي<br />شارع 22 مايو، مقابل المريسي للصرافة</span>
            </div>

            {/* Map Button */}
            <a
              href="https://maps.app.goo.gl/MwXv8oYtcjWAf1JP7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-brand-orange/10 hover:border-brand-orange/40 transition-all duration-300 group"
            >
              <MapPin className="w-5 h-5 text-brand-orange group-hover:scale-110 transition-transform" />
              <span className="font-bold text-white/70 group-hover:text-white text-sm transition-colors">فتح الخريطة التفاعلية</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/[0.05] text-center">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} هوت سبايسي &mdash; جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
}
