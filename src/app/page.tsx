import db from "@/lib/db";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MapPin, Phone, Star, Trophy } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/Logo";

export default async function Home() {
  const featuredProducts = await db.product.findMany({
    where: { isFeatured: true },
    take: 3,
    orderBy: { createdAt: "desc" }
  });

  const bestSellers = await db.product.findMany({
    where: { isBestSeller: true },
    take: 4,
    orderBy: { createdAt: "desc" }
  });

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      
      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-24 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold">أطباقنا <span className="text-brand-orange">المميزة</span></h2>
                <p className="text-white/60 max-w-xl">استمتع بتشكيلة مختارة من أفضل وجباتنا، المحضرة بكل حب وعناية لتناسب ذوقك الرفيع.</p>
              </div>
              <Link href="/menu">
                <Button variant="outline" className="rounded-full gap-2">
                  عرض القائمة كاملة
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group relative bg-brand-gray rounded-3xl overflow-hidden border border-white/5 hover:border-brand-orange/50 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={product.image || "/placeholder.jpg"} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-bold">{product.name}</h3>
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </div>
                    <p className="text-white/50 text-sm line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center pt-4">
                      <span className="text-2xl font-bold text-brand-orange">{product.price} ر.ي</span>
                      <Button size="sm" className="rounded-full">أضف للسلة</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Best Sellers Section */}
      {bestSellers.length > 0 && (
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="space-y-4 mb-16">
              <h2 className="text-4xl font-bold">الأكثر <span className="text-brand-orange">مبيعاً</span></h2>
              <p className="text-white/60 mx-auto max-w-2xl">الوجبات التي نالت إعجاب الجميع وأصبحت الأكثر طلباً في هوت سبايسي.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {bestSellers.map((product) => (
                <div key={product.id} className="group bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-all text-right">
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                    <img src={product.image || "/placeholder.jpg"} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-brand-orange text-white p-2 rounded-xl">
                      <Trophy className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="text-2xl font-bold text-brand-orange">{product.price} ر.ي</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="mt-auto py-20 border-t border-white/10 bg-brand-dark/50">
        <div className="container mx-auto px-2 md:px-4 space-y-8">
          {/* Grid Layout: Always 2 Columns */}
          <div className="grid grid-cols-2 gap-3 md:gap-8 items-stretch">
            
            {/* Column 1: Logo & About */}
            <div className="flex flex-col justify-center p-4 md:p-10 rounded-2xl md:rounded-[3rem] bg-white/5 border border-white/10 space-y-4 md:space-y-6">
              <Logo className="justify-start scale-75 md:scale-100 origin-right" />
              <p className="text-white/40 text-xs md:text-lg leading-relaxed">
                نحن نفتخر بتقديم أجود أنواع اللحوم الطازجة.
              </p>
            </div>

            {/* Column 2: Location Card (Clickable) */}
            <a 
              href="https://maps.app.goo.gl/MwXv8oYtcjWAf1JP7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-start gap-3 md:gap-6 p-4 md:p-10 rounded-2xl md:rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-orange/50 transition-all group"
            >
              <div className="bg-brand-orange/20 p-3 md:p-5 rounded-xl md:rounded-2xl group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 md:w-10 md:h-10 text-brand-orange" />
              </div>
              <div>
                <h4 className="text-sm md:text-2xl font-bold mb-1">موقعنا</h4>
                <p className="text-white/50 text-[10px] md:text-lg">صنعاء، الأصبحي، شارع 22 مايو</p>
              </div>
            </a>

            {/* Column 3: Hours Card */}
            <div className="flex flex-col md:flex-row items-start gap-3 md:gap-6 p-4 md:p-10 rounded-2xl md:rounded-[3rem] bg-white/5 border border-white/10">
              <div className="bg-brand-red/20 p-3 md:p-5 rounded-xl md:rounded-2xl">
                <Clock className="w-6 h-6 md:w-10 md:h-10 text-brand-red" />
              </div>
              <div>
                <h4 className="text-sm md:text-2xl font-bold mb-1">ساعات العمل</h4>
                <p className="text-white/50 text-[10px] md:text-lg">يومياً من 12ظ حتى 2ص</p>
              </div>
            </div>

            {/* Column 4: Contact Card */}
            <div className="flex flex-col md:flex-row items-start gap-3 md:gap-6 p-4 md:p-10 rounded-2xl md:rounded-[3rem] bg-white/5 border border-white/10">
              <div className="bg-brand-green/20 p-3 md:p-5 rounded-xl md:rounded-2xl">
                <Phone className="w-6 h-6 md:w-10 md:h-10 text-brand-green" />
              </div>
              <div>
                <h4 className="text-sm md:text-2xl font-bold mb-1">اتصل بنا</h4>
                <p className="text-white/50 text-[10px] md:text-lg font-bold">770620062</p>
                <p className="text-white/50 text-[10px] md:text-lg font-bold">730620062</p>
              </div>
            </div>

          </div>

          <div className="text-center text-sm text-white/20 pt-12 border-t border-white/5">
            &copy; {new Date().getFullYear()} هوت سبايسي - جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </main>
  );
}
