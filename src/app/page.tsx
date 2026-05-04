import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MapPin, Phone, Flame } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      
      {/* Featured Categories/Products Preview */}
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
            {/* Featured Item 1 */}
            <div className="group relative bg-brand-gray rounded-3xl overflow-hidden border border-white/5 hover:border-brand-orange/50 transition-all duration-300">
               <div className="aspect-[4/3] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=600&auto=format&fit=crop" alt="Burger" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="p-8 space-y-4">
                 <h3 className="text-2xl font-bold">جراند سبايسي برجر</h3>
                 <p className="text-white/50 text-sm line-clamp-2">قطعة لحم مشوية بعناية مع صوص سبايسي السري وجبنة شيدر ذائبة.</p>
                 <div className="flex justify-between items-center pt-4">
                   <span className="text-2xl font-bold text-brand-orange">2500 ر.ي</span>
                   <Button size="sm" className="rounded-full">أضف للسلة</Button>
                 </div>
               </div>
            </div>

            {/* Featured Item 2 */}
            <div className="group relative bg-brand-gray rounded-3xl overflow-hidden border border-white/5 hover:border-brand-orange/50 transition-all duration-300">
               <div className="aspect-[4/3] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=600&auto=format&fit=crop" alt="Chicken" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="p-8 space-y-4">
                 <h3 className="text-2xl font-bold">أجنحة الدجاج الحارة</h3>
                 <p className="text-white/50 text-sm line-clamp-2">أجنحة دجاج مقرمشة مغطاة بصوص البافالو الحار وتقدم مع صوص الرانش.</p>
                 <div className="flex justify-between items-center pt-4">
                   <span className="text-2xl font-bold text-brand-orange">1800 ر.ي</span>
                   <Button size="sm" className="rounded-full">أضف للسلة</Button>
                 </div>
               </div>
            </div>

            {/* Featured Item 3 */}
            <div className="group relative bg-brand-gray rounded-3xl overflow-hidden border border-white/5 hover:border-brand-orange/50 transition-all duration-300">
               <div className="aspect-[4/3] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=600&auto=format&fit=crop" alt="Fries" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
               </div>
               <div className="p-8 space-y-4">
                 <h3 className="text-2xl font-bold">بطاطس هوت لودد</h3>
                 <p className="text-white/50 text-sm line-clamp-2">بطاطس مقلية ذهبية مغطاة بالجبنة، اللحم المفروم، والهلابينو.</p>
                 <div className="flex justify-between items-center pt-4">
                   <span className="text-2xl font-bold text-brand-orange">1200 ر.ي</span>
                   <Button size="sm" className="rounded-full">أضف للسلة</Button>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="bg-brand-orange/20 p-4 rounded-2xl">
              <MapPin className="w-8 h-8 text-brand-orange" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">موقعنا</h4>
              <p className="text-white/50">صنعاء، الأصبحي، شارع 22 مايو، مقابل المريسي للصرافة</p>
            </div>
          </div>
          
          <div className="flex items-start gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="bg-brand-red/20 p-4 rounded-2xl">
              <Clock className="w-8 h-8 text-brand-red" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">ساعات العمل</h4>
              <p className="text-white/50">يومياً من الساعة 12:00 ظهراً <br /> وحتى 2:00 صباحاً</p>
            </div>
          </div>

          <div className="flex items-start gap-6 p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="bg-brand-green/20 p-4 rounded-2xl">
              <Phone className="w-8 h-8 text-brand-green" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">اتصل بنا</h4>
              <p className="text-white/50">770620062 | 776820068 <br /> 730620062 | 780620062</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-auto py-12 border-t border-white/10 bg-brand-dark">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-12 h-12 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <Flame className="w-8 h-8 text-brand-orange" />
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-brand-orange">هوت</span>{" "}
              <span className="text-white">سبايسي</span>
            </span>
          </div>
          <p className="text-white/40 max-w-md mx-auto">
            نحن نفتخر بتقديم أجود أنواع اللحوم الطازجة والمكونات المختارة بعناية لنقدم لك وجبة تليق بك.
          </p>
          <div className="text-sm text-white/20 pt-8">
            &copy; {new Date().getFullYear()} هوت سبايسي - جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>
    </main>
  );
}
