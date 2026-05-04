import db from "@/lib/db";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { ArrowLeft, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeaturedGallery from "@/components/FeaturedGallery";

export default async function Home() {
  // Query featured products
  const featuredProducts = await db.product.findMany({
    where: { isFeatured: true },
    take: 6,
    orderBy: { createdAt: "desc" }
  });

  // Query best sellers
  const bestSellers = await db.product.findMany({
    where: { isBestSeller: true },
    take: 4,
    orderBy: { createdAt: "desc" }
  });

  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      {/* Adjust padding to compensate for the new thinner header */}
      <div className="pt-[112px] md:pt-[136px] flex-1">
        
        {/* 1. Hero / Intro */}
        <Hero />

        {/* 2. Best Sellers (الأكثر مبيعاً) */}
        {bestSellers.length > 0 && (
          <section className="py-24 bg-white/[0.02]">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <div className="space-y-4 mb-16">
                <h2 className="text-4xl font-bold">الأكثر <span className="text-brand-red">مبيعاً</span></h2>
                <p className="text-white/60 mx-auto max-w-2xl text-lg">الوجبات التي نالت إعجاب الجميع وأصبحت الأكثر طلباً في هوت سبايسي.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {bestSellers.map((product: any) => (
                  <div key={product.id} className="group bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-brand-yellow/30 hover:-translate-y-2 transition-all duration-300 text-right shadow-lg">
                    <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                      <img src={product.image || "/placeholder.jpg"} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute top-4 right-4 bg-gradient-to-br from-brand-yellow to-orange-500 text-white p-2.5 rounded-xl shadow-[0_0_15px_rgba(255,186,8,0.5)]">
                        <Trophy className="w-5 h-5 drop-shadow-md" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-brand-beige">{product.name}</h3>
                    <div className="text-3xl font-black text-brand-yellow mt-4">{product.price} <span className="text-sm font-medium text-white/50">ر.ي</span></div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 3. Featured Products (الأطباق المميزة) */}
        {featuredProducts.length > 0 && (
          <section className="py-24">
            <div className="container mx-auto px-4 md:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold">أطباقنا <span className="text-brand-red">المميزة</span></h2>
                  <p className="text-white/60 max-w-xl text-lg">استمتع بتشكيلة مختارة من أفضل وجباتنا، المحضرة بكل حب وعناية لتناسب ذوقك الرفيع.</p>
                </div>
                <Link href="/menu">
                  <Button variant="outline" className="rounded-full gap-2 text-brand-beige border-white/20 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 px-6 py-6 text-md">
                    عرض القائمة كاملة
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <FeaturedGallery products={featuredProducts as any} />
            </div>
          </section>
        )}
        
      </div>
    </main>
  );
}
