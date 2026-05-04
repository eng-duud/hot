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
        <div className="container mx-auto px-4 space-y-16">
          {/* First Row: Logo, Marketing, Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            <div className="space-y-6">
              <Logo className="justify-start" />
              <p className="text-white/40 text-lg leading-relaxed">
                نحن نفتخر بتقديم أجود أنواع اللحوم الطازجة والمكونات المختارة بعناية لنقدم لك وجبة تليق بك.
              </p>
            </div>
            
            <div className="md:col-span-2 flex items-start gap-6 p-8 rounded-3xl bg-white/5 border border-white/10">
              <div className="bg-brand-orange/20 p-4 rounded-2xl">
                <MapPin className="w-8 h-8 text-brand-orange" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">موقعنا</h4>
                <p className="text-white/50 text-lg">صنعاء، الأصبحي، شارع 22 مايو، مقابل المريسي للصرافة</p>
              </div>
            </div>
          </div>

          {/* Second Row: Hours and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-brand-red/20 p-4 rounded-2xl">
                <Clock className="w-8 h-8 text-brand-red" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">ساعات العمل</h4>
                <p className="text-white/50">يومياً من الساعة 12:00 ظهراً وحتى 2:00 صباحاً</p>
              </div>
            </div>

            <div className="flex items-start gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-brand-green/20 p-4 rounded-2xl">
                <Phone className="w-8 h-8 text-brand-green" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">اتصل بنا</h4>
                <p className="text-white/50 text-lg font-bold tracking-wider">770620062 | 776820068 | 730620062</p>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-white/20 pt-8 border-t border-white/5">
            &copy; {new Date().getFullYear()} هوت سبايسي - جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </main>
  );
}
