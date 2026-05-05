import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

/* ── Inline color tokens — immune to any theme overrides ── */
const C = {
  text:      "#F5EBE0",       /* Beige for main text */
  muted:     "rgba(245,235,224,0.55)", /* Muted beige */
  faint:     "rgba(245,235,224,0.25)",
  border:    "rgba(245,235,224,0.08)",
  surface:   "rgba(245,235,224,0.04)",
  primary:   "#E63946",       /* Red */
  secondary: "#FFBA08",       /* Fiery Yellow */
  green:     "#2A9D8F",       /* Green accent */
  bg:        "#121212",
};

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

const socials = [
  { href: "https://www.instagram.com/hot.spicy021", label: "Instagram", Icon: Instagram },
  { href: "https://wa.me/967780620062",   label: "WhatsApp",  Icon: () => <WhatsAppIcon /> },
  { href: "https://www.facebook.com/HotSpicy020",  label: "Facebook",  Icon: Facebook },
];

const navLinks = [
  { href: "/",        label: "الرئيسية" },
  { href: "/menu",    label: "تصفح القائمة" },
  { href: "/about",   label: "من نحن" },
  { href: "/contact", label: "تواصل معنا" },
];

/* Section title with orange bar */
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 style={{ color: C.text, display: "flex", alignItems: "center", gap: "10px", fontWeight: 900, fontSize: "clamp(13px, 2.5vw, 18px)", marginBottom: 0 }}>
      <span style={{ width: 3, height: 20, borderRadius: 99, background: C.primary, flexShrink: 0, display: "inline-block" }} />
      {children}
    </h4>
  );
}

/* Contact row with icon circle */
function ContactRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <div style={{
        width: 34, height: 34, borderRadius: "50%",
        background: C.surface, border: `1px solid ${C.border}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, color: C.primary,
      }}>
        {icon}
      </div>
      <div>
        <p style={{ color: C.faint, fontSize: 10, marginBottom: 2 }}>{label}</p>
        <div style={{ color: C.text, fontWeight: 700, fontSize: "clamp(11px, 2vw, 13px)", lineHeight: 1.5 }}>{value}</div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: C.bg, borderTop: `1px solid ${C.border}`, marginTop: "auto" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(32px, 5vw, 56px) clamp(16px, 4vw, 40px)" }}>

        {/* ── 2×2 Grid — always two columns ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(20px, 5vw, 56px)",
        }}>

          {/* ① Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 2vw, 20px)" }}>
            {/* Logo + Name */}
            <div style={{ display: "flex", alignItems: "center", gap: "clamp(8px, 2vw, 14px)" }}>
              <div style={{ position: "relative", width: "clamp(32px, 6vw, 48px)", height: "clamp(32px, 6vw, 48px)", flexShrink: 0 }}>
                <span style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  background: "rgba(255,87,34,0.25)", filter: "blur(14px)",
                }} />
                <img
                  src="/logo.png"
                  alt="Hot Spicy"
                  style={{
                    position: "relative", width: "100%", height: "100%",
                    objectFit: "contain",
                    filter: "drop-shadow(0 0 10px rgba(255,87,34,0.8))",
                  }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: "clamp(15px, 3vw, 22px)", lineHeight: 1 }}>
                  <span style={{ color: C.primary }}>هوت</span>
                  <span style={{ color: C.secondary }}> سبايسي</span>
                </div>
                <div style={{ color: C.faint, fontSize: "clamp(8px, 1.5vw, 11px)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 3 }}>Hot Spicy</div>
              </div>
            </div>

            {/* Tagline */}
            <p style={{ color: C.muted, fontSize: "clamp(11px, 2vw, 13px)", lineHeight: 1.7, maxWidth: 260 }}>
              شريككم في النكهة الحارة والمذاق الفاخر في قلب صنعاء بأجود المكونات.
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: 8 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social-link"
                  style={{
                    width: "clamp(30px, 5vw, 38px)", height: "clamp(30px, 5vw, 38px)",
                    borderRadius: "50%", background: C.surface, border: `1px solid ${C.border}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: C.muted, textDecoration: "none",
                  }}
                >
                  <s.Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ② Quick Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 2vw, 20px)" }}>
            <SectionTitle>روابط سريعة</SectionTitle>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "clamp(8px, 1.5vw, 14px)" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-nav-link"
                    style={{ color: C.muted, fontSize: "clamp(11px, 2vw, 13px)", textDecoration: "none" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ③ Contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 2vw, 20px)" }}>
            <SectionTitle>تواصل معنا</SectionTitle>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(8px, 1.5vw, 14px)" }}>
              <ContactRow
                icon={<Phone size={14} />}
                label="اتصل بنا"
                value={
                  <>
                    <a href="tel:780620062" className="footer-nav-link" style={{ textDecoration: "none", color: "inherit" }}>780620062</a>
                    <br />
                    <a href="tel:770620062" className="footer-nav-link" style={{ textDecoration: "none", color: "inherit" }}>770620062</a>
                  </>
                }
              />
              <ContactRow
                icon={<Mail size={14} />}
                label="راسلنا"
                value={<a href="mailto:hotspicy7706@gmail.com" className="footer-nav-link" style={{ textDecoration: "none", color: "inherit" }}>hotspicy7706@gmail.com</a>}
              />
            </div>
          </div>

          {/* ④ Location */}
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(10px, 2vw, 20px)" }}>
            <SectionTitle>موقعنا</SectionTitle>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8, color: C.muted, fontSize: "clamp(11px, 2vw, 13px)", lineHeight: 1.7 }}>
              <MapPin size={14} style={{ color: C.primary, marginTop: 3, flexShrink: 0 }} />
              <span>صنعاء، الأصبحي<br />شارع 22 مايو مقابل شركة المريسي للصرافة</span>
            </div>
            <a
              href="https://maps.app.goo.gl/MwXv8oYtcjWAf1JP7"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-btn"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 8, width: "100%", padding: "clamp(10px, 2vw, 16px) 0",
                borderRadius: 14, background: C.surface, border: `1px solid ${C.border}`,
                color: C.muted, fontSize: "clamp(10px, 2vw, 13px)", fontWeight: 700,
                textDecoration: "none",
              }}
            >
              <MapPin size={14} style={{ color: C.primary }} />
              فتح الخريطة
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ marginTop: "clamp(28px, 5vw, 48px)", paddingTop: 20, borderTop: `1px solid ${C.faint}`, textAlign: "center" }}>
          <p style={{ color: C.faint, fontSize: "clamp(10px, 1.8vw, 12px)" }}>
            &copy; {new Date().getFullYear()} هوت سبايسي &mdash; جميع الحقوق محفوظة.
          </p>
        </div>

      </div>
    </footer>
  );
}
