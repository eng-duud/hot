import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-orange/10 blur-[150px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 animate-in fade-in zoom-in duration-1000">

          {/* Logo on the Right */}
          <div className="flex-shrink-0">
            <Logo showText={false} className="scale-[1.5] md:scale-[2]" />
          </div>

          {/* Marketing Content on the Left */}
          <div className="text-right space-y-6 flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green font-bold text-sm">
              <Flame className="w-5 h-5" />
              <span>أفضل برجر مشوي على اللهب في صنعاء</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
              <span className="text-brand-red italic drop-shadow-md">هوت سبايسي</span>
              <br />
              فخامة المذاق في كل قطعة
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
              نجمع بين الجودة العالية والنكهات الحارة الأصيلة لنقدم لك تجربة لا تُنسى من البرجر والوجبات السريعة الفاخرة.
            </p>

            <div className="flex flex-wrap items-center justify-start md:justify-end gap-4 pt-4">
              <Link href="/menu">
                <Button size="lg" className="rounded-full px-10 h-16 text-xl font-bold">
                  عرض القائمة
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-xl font-bold border-2">
                  من نحن
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-8 md:gap-12 pt-12 opacity-50">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black">100%</div>
                <div className="text-xs font-bold uppercase tracking-widest">لحم طازج</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black">+24</div>
                <div className="text-xs font-bold uppercase tracking-widest">توابل سرية</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black">4.9</div>
                <div className="text-xs font-bold uppercase tracking-widest">تقييم العملاء</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
