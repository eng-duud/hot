import { Button } from "@/components/ui/button";
import { Flame, Award, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Enforced Horizontal Layout on Desktop and improved on Mobile */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-16 animate-in fade-in zoom-in duration-1000">

          {/* Logo on the Right */}
          <div className="flex-shrink-0 w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 relative flex items-center justify-center mb-8 lg:mb-0">
            <div className="absolute inset-0 bg-brand-red/20 blur-[80px] rounded-full animate-pulse" />
            <img 
              src="/logo.png" 
              alt="Hot Spicy Logo" 
              className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,77,0,0.5)] hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Marketing Content on the Left */}
          <div className="text-center lg:text-right space-y-6 flex-1 max-w-3xl">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-5 py-2.5 rounded-full bg-brand-red/10 border border-brand-red/20 text-brand-red font-bold text-sm shadow-[0_0_15px_rgba(230,57,70,0.2)]">
              <Flame className="w-5 h-5 animate-pulse" />
              <span>أفضل مطعم وجبات سريعة في المدينة</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tighter">
              <span className="text-brand-red italic drop-shadow-md">هوت سبايسي</span>
              <br />
              <span className="text-white">فخامة المذاق</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed mx-auto lg:mx-0 max-w-2xl">
              نجمع بين الجودة العالية والنكهات الحارة الأصيلة لنقدم لك تجربة لا تُنسى من البرجر والوجبات السريعة الفاخرة.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 pt-2">
              <Link href="/menu">
                <Button size="lg" className="rounded-full px-10 h-16 text-xl font-bold bg-brand-red hover:bg-brand-red/90 text-white shadow-[0_0_20px_rgba(230,57,70,0.4)]">
                  عرض القائمة
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-xl font-bold border-2 border-white/20 hover:bg-white/10">
                  من نحن
                </Button>
              </Link>
            </div>

            {/* Features Icons (High Quality, Cleanliness, Fast Delivery) */}
            <div className="grid grid-cols-3 gap-4 pt-10">
              <div className="flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-[2rem] hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                <div className="bg-brand-yellow/20 p-3 rounded-full">
                  <Award className="w-8 h-8 md:w-10 md:h-10 text-brand-yellow drop-shadow-[0_0_10px_rgba(255,186,8,0.5)]" />
                </div>
                <div className="text-xs md:text-sm font-bold text-white text-center">جودة عالية</div>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-[2rem] hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                <div className="bg-emerald-500/20 p-3 rounded-full">
                  <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                </div>
                <div className="text-xs md:text-sm font-bold text-white text-center">نظافة وأمان</div>
              </div>

              <div className="flex flex-col items-center justify-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-[2rem] hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                <div className="bg-brand-red/20 p-3 rounded-full">
                  <Truck className="w-8 h-8 md:w-10 md:h-10 text-brand-red drop-shadow-[0_0_10px_rgba(230,57,70,0.5)]" />
                </div>
                <div className="text-xs md:text-sm font-bold text-white text-center">توصيل فوري</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
