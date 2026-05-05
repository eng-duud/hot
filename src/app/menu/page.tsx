import Header from "@/components/Header";
import db from "@/lib/db";
import { Filter, Search, Tag as TagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function MenuPage() {
  const categories = await db.category.findMany({
    include: { products: true },
    orderBy: { name: "asc" }
  });

  if (categories.length === 0) {
    return (
      <main className="min-h-screen bg-brand-dark">
        <Header />
        <div className="pt-[112px] md:pt-[136px] flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 max-w-2xl w-full">
            <h2 className="text-3xl font-bold mb-4">القائمة <span className="text-brand-red">فارغة</span> حالياً</h2>
            <p className="text-white/50 text-lg">لم يتم إضافة أي أطباق أو تصنيفات إلى قاعدة البيانات حتى الآن. يرجى إضافتها من لوحة التحكم.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-dark pb-20">
      <Header />

      <div className="pt-[112px] md:pt-[136px]">
        {/* Page Header & Search */}
        <div className="bg-white/5 border-b border-white/10 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black">قائمة <span className="text-brand-red">الطعام</span></h1>
              <p className="text-white/50 max-w-xl mx-auto text-lg">اكتشف أشهى المأكولات المحضرة بكل حب في هوت سبايسي.</p>
            </div>
            
            <div className="max-w-xl mx-auto relative group">
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5 group-focus-within:text-brand-orange transition-colors" />
              <input
                type="text"
                className="w-full bg-black/40 border border-white/10 rounded-full px-16 py-5 focus:outline-none focus:border-brand-orange transition-all shadow-xl text-lg"
                placeholder="ابحث عن وجبتك المفضلة..."
              />
            </div>
          </div>
        </div>

        {/* Circular Categories Row */}
        <div className="bg-brand-gray/50 border-b border-white/5 py-12">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-center gap-8 md:gap-16 overflow-x-auto pb-6 scrollbar-hide">
              {/* "All" Category */}
              <div className="flex flex-col items-center gap-4 cursor-pointer group shrink-0">
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-brand-red flex items-center justify-center border-4 border-brand-red shadow-[0_0_20px_rgba(230,57,70,0.4)] transition-all duration-300 group-hover:scale-110">
                  <TagIcon className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                <span className="font-bold text-sm md:text-lg text-white">الكل</span>
              </div>

              {categories.map((cat) => (
                <div key={cat.id} className="flex flex-col items-center gap-4 cursor-pointer group shrink-0">
                  <div className={cn(
                    "w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/5 flex items-center justify-center border-4 border-transparent transition-all duration-500 group-hover:border-brand-orange group-hover:scale-110 overflow-hidden relative",
                    !(cat as any).image && "bg-brand-orange/10"
                  )}>
                    {(cat as any).image ? (
                      <img src={(cat as any).image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <TagIcon className="w-8 h-8 md:w-12 md:h-12 text-brand-orange/50" />
                    )}
                  </div>
                  <span className="font-bold text-sm md:text-lg text-white/70 group-hover:text-brand-orange transition-colors">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-20">
          {/* Products Grid */}
          <div className="space-y-24">
            {categories.map((cat) => (
              <div key={cat.id} className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-2 bg-brand-red rounded-full" />
                  <h2 className="text-3xl md:text-4xl font-black">{cat.name}</h2>
                  <span className="text-white/20 text-lg font-bold">({cat.products.length})</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 md:gap-10">
                  {cat.products.map((product) => (
                    <div key={product.id} className="group bg-[#1A1A1A] rounded-[2.5rem] border border-white/5 hover:border-brand-orange/30 transition-all duration-500 p-5 flex flex-col shadow-lg">
                      <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative">
                        <img 
                          src={product.image || "/placeholder.jpg"} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                        />
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                          <span className="text-brand-orange font-black text-lg">{product.price} <span className="text-[10px] text-white/50">ر.ي</span></span>
                        </div>
                      </div>
                      <div className="px-2 space-y-4 flex-1 flex flex-col">
                        <h3 className="text-2xl font-black group-hover:text-brand-orange transition-colors">{product.name}</h3>
                        <p className="text-white/40 text-sm leading-relaxed line-clamp-3 flex-1">{product.description}</p>
                        <Button className="w-full mt-4 rounded-2xl h-12 bg-white/5 hover:bg-brand-red text-white border border-white/5 hover:border-brand-red transition-all duration-300 font-bold">
                          اطلب الآن
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
