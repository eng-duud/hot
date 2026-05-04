import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700", "800", "900"] });

export const metadata: Metadata = {
  title: "هوت سبايسي | Hot Spicy",
  description: "أفخم مطعم وجبات سريعة في صنعاء — برجر مشوي على الفحم بالنكهات الحارة الأصيلة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} bg-brand-dark text-white min-h-screen flex flex-col`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
