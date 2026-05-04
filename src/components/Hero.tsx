import { Button } from "@/components/ui/button";
import { Award, ShieldCheck, Truck } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden py-12 md:py-20">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[150px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 space-y-12 md:space-y-16 animate-in fade-in zoom-in duration-1000">
        
        {/* TOP SECTION: Logo and Text Side-by-Side strictly */}
        <div className="flex flex-row-reverse items-center justify-center md:justify-between gap-4 md:gap-12 lg:gap-16 max-w-6xl mx-auto">

          {/* Logo on the Right */}
          <div className="flex-shrink-0 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] relative flex items-center justify-center">
            <div className="absolute inset-0 bg-brand-red/20 blur-[80px] rounded-full animate-pulse" />
            <img 
              src="/logo.png" 
              alt="Hot Spicy Logo" 
              className="relative w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,77,0,0.5)] hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Text Content on the Left */}
          <div className="text-right space-y-3 md:space-y-6 flex-1 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-[1.2] md:leading-[1.1] tracking-tighter">
              <span className="text-brand-red italic drop-shadow-md">هوت سبايسي</span>
              <br />
              <span className="text-white">فخامة المذاق</span>
            </h1>

            <p className="text-xs sm:text-sm md:text-xl text-white/60 leading-relaxed">
              نجمع بين الجودة العالية والنكهات الحارة الأصيلة لنقدم لك تجربة لا تُنسى من البرجر والوجبات السريعة الفاخرة.
            </p>
          </div>

        </div>

        {/* BOTTOM SECTION: Buttons and Icons centered below */}
        <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-5xl mx-auto border-t border-white/5 pt-8 md:pt-12">
          
          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/menu">
              <Button size="lg" className="rounded-full px-8 md:px-12 h-12 md:h-16 text-sm md:text-xl font-bold bg-brand-red hover:bg-brand-red/90 text-white shadow-[0_0_20px_rgba(230,57,70,0.4)] transition-all hover:scale-105">
                عرض القائمة
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="rounded-full px-8 md:px-12 h-12 md:h-16 text-sm md:text-xl font-bold border-2 border-white/20 hover:bg-white/10 transition-all hover:scale-105">
                من نحن
              </Button>
            </Link>
          </div>

          {/* Features Icons */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 w-full">
            <div className="flex flex-col items-center justify-center gap-2 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-brand-yellow/20 p-3 md:p-4 rounded-full">
                <Award className="w-6 h-6 md:w-10 md:h-10 text-brand-yellow drop-shadow-[0_0_10px_rgba(255,186,8,0.5)]" />
              </div>
              <div className="text-[10px] md:text-lg font-bold text-white text-center">جودة عالية</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-emerald-500/20 p-3 md:p-4 rounded-full">
                <ShieldCheck className="w-6 h-6 md:w-10 md:h-10 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              </div>
              <div className="text-[10px] md:text-lg font-bold text-white text-center">نظافة وأمان</div>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 md:gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-8 rounded-2xl md:rounded-[2.5rem] hover:bg-white/10 hover:-translate-y-2 transition-all duration-300">
              <div className="bg-brand-red/20 p-3 md:p-4 rounded-full">
                <Truck className="w-6 h-6 md:w-10 md:h-10 text-brand-red drop-shadow-[0_0_10px_rgba(230,57,70,0.5)]" />
              </div>
              <div className="text-[10px] md:text-lg font-bold text-white text-center">توصيل فوري</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
