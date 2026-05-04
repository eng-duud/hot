import { Button } from "@/components/ui/button";
import { ArrowLeft, Flame } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-orange/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-brand-red/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-right duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-orange font-medium text-sm">
            <Flame className="w-4 h-4" />
            <span>أفضل برجر مشوي على اللهب في صنعاء</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            تذوق <span className="text-brand-orange">الفخامة</span> 
            <br />
            في كل قطمة!
          </h1>
          
          <p className="text-xl text-white/70 max-w-lg leading-relaxed">
            في هوت سبايسي، نجمع بين الجودة العالية والنكهات الحارة الأصيلة لنقدم لك تجربة لا تُنسى من البرجر والوجبات السريعة الفاخرة.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="rounded-full px-8 text-lg gap-2">
              تصفح القائمة
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-lg">
              من نحن
            </Button>
          </div>
          
          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-white/50">لحم طازج</div>
            </div>
            <div className="border-r border-white/10 h-10" />
            <div className="text-center">
              <div className="text-3xl font-bold">+24</div>
              <div className="text-sm text-white/50">توابل سرية</div>
            </div>
            <div className="border-r border-white/10 h-10" />
            <div className="text-center">
              <div className="text-3xl font-bold">4.9</div>
              <div className="text-sm text-white/50">تقييم العملاء</div>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in slide-in-from-left duration-1000">
          {/* Placeholder for a high-quality burger image */}
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-brand-orange/20 border border-white/10 bg-white/5 flex items-center justify-center">
             <img 
               src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop" 
               alt="Luxury Burger"
               className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
             />
          </div>
          
          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 z-20 bg-brand-green p-6 rounded-2xl shadow-xl animate-bounce">
            <div className="text-xs font-bold text-white/80 uppercase">الأكثر مبيعاً</div>
            <div className="text-2xl font-bold">كلاسيك سبايسي</div>
          </div>
        </div>
      </div>
    </section>
  );
}
