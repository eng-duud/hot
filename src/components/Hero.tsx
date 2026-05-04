import { Button } from "@/components/ui/button";
import { ArrowLeft, Flame, PhoneCall } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-brand-red/10 blur-[150px] rounded-full -z-10" />

      <div className="container mx-auto px-4 flex flex-col items-center gap-12">
        {/* Prominent Floating Logo */}
        <div className="animate-in zoom-in fade-in duration-1000">
          <Logo showText={false} className="scale-[2] md:scale-[3]" />
        </div>

        <div className="space-y-8 animate-in slide-in-from-bottom duration-1000 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-brand-orange font-bold text-lg">
            <Flame className="w-6 h-6" />
            <span>أفضل برجر مشوي على اللهب في صنعاء</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter">
            تذوق <span className="text-brand-orange italic">الفخامة</span> 
            <br />
            في كل قطمة!
          </h1>
          
          <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            في هوت سبايسي، نجمع بين الجودة العالية والنكهات الحارة الأصيلة لنقدم لك تجربة لا تُنسى من البرجر والوجبات السريعة الفاخرة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <a href="tel:770620062" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-12 h-20 text-2xl font-black gap-4 bg-gradient-to-r from-brand-green to-emerald-500 hover:scale-105 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-pulse border-none">
                <PhoneCall className="w-8 h-8" />
                اتصل واطلب الآن
              </Button>
            </a>
            
            <Link href="/menu" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full px-12 h-20 text-2xl font-bold gap-3 border-2 hover:bg-white/5 transition-all">
                تصفح القائمة
                <ArrowLeft className="w-6 h-6" />
              </Button>
            </Link>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-12 pt-12 opacity-50">
            <div className="text-center">
              <div className="text-4xl font-black">100%</div>
              <div className="text-sm font-bold uppercase tracking-widest">لحم طازج</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black">+24</div>
              <div className="text-sm font-bold uppercase tracking-widest">توابل سرية</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black">4.9</div>
              <div className="text-sm font-bold uppercase tracking-widest">تقييم العملاء</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
