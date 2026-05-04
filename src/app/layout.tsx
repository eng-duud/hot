import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "هوت سبايسي | Hot Spicy",
  description: "أفخم مطعم وجبات سريعة في صنعاء",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} bg-brand-dark text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
