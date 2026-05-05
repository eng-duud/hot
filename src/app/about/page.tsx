import Header from "@/components/Header";
import { CheckCircle2, Flame, History, ShieldCheck, Star, Users } from "lucide-react";
import AboutSlider from "@/components/AboutSlider";
import db from "@/lib/db";

export default async function AboutPage() {
  // @ts-ignore
  const sliderImages = await db.aboutSliderImage.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <main className="min-h-screen bg-brand-dark">
      <Header />

      <div className="pt-[112px] md:pt-[136px]">
      {/* Story Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop')] bg-fixed bg-cover bg-center opacity-5 -z-10" />
        
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 text-brand-orange font-bold uppercase tracking-widest mb-6">
            <Flame className="w-5 h-5" />
            <span>قصتنا</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white">شغفنا هو سر <span className="text-brand-red">نكهتنا!</span></h1>
          <p className="text-xl text-white/70 leading-relaxed">
            نحن مطعم متخصص في تقديم أشهى الوجبات الطازجة بأعلى معايير الجودة
            <br />
            نؤمن أن الطعام ليس مجرد وجبة… بل تجربة متكاملة
            <br />
            فريقنا يعمل يوميًا ليقدم لك نكهات استثنائية ترضي جميع الأذواق
            <br />
            نستخدم مكونات طازجة مختارة بعناية لضمان أفضل جودة ممكنة
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6 text-center md:text-right">
              <div className="bg-brand-orange/10 dark:bg-brand-orange/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto md:mr-0 border border-brand-orange/10 dark:border-transparent">
                <ShieldCheck className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold text-white">أعلى معايير الجودة</h3>
              <p className="text-white/50 leading-relaxed">نختار لحومنا بعناية فائقة من الموردين المحليين المعتمدين لضمان الطزاجة والمذاق الأصيل يومياً.</p>
            </div>

            <div className="space-y-6 text-center md:text-right">
              <div className="bg-brand-red/10 dark:bg-brand-red/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto md:mr-0 border border-brand-red/10 dark:border-transparent">
                <Star className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-2xl font-bold text-white">مكونات طازجة</h3>
              <p className="text-white/50 leading-relaxed">نختار خضرواتنا بعناية ونُحضّرها يوميًا لضمان طزاجتها ونكهتها الغنية التي تُكمل كل طبق بشكل مثالي.</p>
            </div>

            <div className="space-y-6 text-center md:text-right">
              <div className="bg-brand-green/10 dark:bg-brand-green/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto md:mr-0 border border-brand-green/10 dark:border-transparent">
                <Users className="w-8 h-8 text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold text-white">فريق محترف</h3>
              <p className="text-white/50 leading-relaxed">طهاة "هوت سبايسي" مدربون على أعلى مستوى لضمان تناسق النكهة والسرعة في الأداء.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy/History */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <div className="absolute -inset-4 bg-brand-orange/20 blur-3xl rounded-full" />
             <AboutSlider images={sliderImages} />
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-white">لماذا <span className="text-brand-red">هوت سبايسي؟</span></h2>
              <p className="text-white/60 leading-relaxed text-lg">
                في صنعاء، الخيارات كثيرة، لكن في هوت سبايسي نقدم لك الفرق الذي يمكنك تذوقه. نستخدم توابلنا الخاصة التي تم تطويرها على مدار سنوات لتعطي المذاق "الحار والمميز" الذي يحبه عملاؤنا.
              </p>
            </div>
            
            <ul className="space-y-4">
              {[
                "لحوم بلدية طازجة 100%",
                "صوصات محضرة منزلياً بدون مواد حافظة",
                "بيئة عمل نظيفة ومعقمة وفق المعايير الصحية",
                "خدمة عملاء استثنائية تجعلك تشعر وكأنك في بيتك"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-4 text-white/80">
                  <CheckCircle2 className="w-6 h-6 text-brand-green flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
