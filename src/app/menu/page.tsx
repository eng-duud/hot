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
        <div className="bg-brand-gray/50 border-b border-white/5 py-4 md:py-6">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex items-center justify-center gap-6 md:gap-10 overflow-x-auto pb-2 scrollbar-hide">
              {/* "All" Category */}
              <div className="flex flex-col items-center gap-2 cursor-pointer group shrink-0">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-brand-red flex items-center justify-center border-2 border-brand-red shadow-[0_0_15px_rgba(230,57,70,0.3)] transition-all duration-300 group-hover:scale-110">
                  <TagIcon className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                <span className="font-bold text-xs md:text-sm text-white">الكل</span>
              </div>

              {categories.map((cat) => (
                <div key={cat.id} className="flex flex-col items-center gap-2 cursor-pointer group shrink-0">
                  <div className={cn(
                    "w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center border-2 border-transparent transition-all duration-500 group-hover:border-brand-orange group-hover:scale-110 overflow-hidden relative",
                    !(cat as any).image && "bg-brand-orange/10"
                  )}>
                    {(cat as any).image ? (
                      <img src={(cat as any).image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    ) : (
                      <TagIcon className="w-6 h-6 md:w-10 md:h-10 text-brand-orange/50" />
                    )}
                  </div>
                  <span className="font-bold text-xs md:text-sm text-white/70 group-hover:text-brand-orange transition-colors">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-20">
          {/* Products Grid */}
          <div className="space-y-20">
            {categories.map((cat) => (
              <div key={cat.id} className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-8 w-1.5 bg-brand-red rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-black">{cat.name}</h2>
                  <span className="text-white/20 text-base font-bold">({cat.products.length})</span>
                </div>

                {/* 2x3 Grid with Horizontal Scroll */}
                <div className="grid grid-rows-2 grid-flow-col gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
                  {cat.products.map((product) => (
                    <div 
                      key={product.id} 
                      className="snap-start shrink-0 w-[150px] md:w-[220px] group bg-[#1A1A1A] rounded-[2rem] border border-white/5 hover:border-brand-orange/30 transition-all duration-500 p-3 md:p-4 flex flex-col shadow-lg"
                    >
                      <div className="aspect-square rounded-2xl overflow-hidden mb-3 md:mb-4 relative">
                        <img 
                          src={product.image || "/placeholder.jpg"} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                        />
                        <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-md px-2 md:px-3 py-1 rounded-lg border border-white/10">
                          <span className="text-brand-orange font-bold text-xs md:text-sm">{product.price} <span className="text-[8px] text-white/50">ر.ي</span></span>
                        </div>
                      </div>
                      <div className="px-1 space-y-1 md:space-y-2">
                        <h3 className="text-sm md:text-base font-bold group-hover:text-brand-orange transition-colors truncate">{product.name}</h3>
                        <p className="text-white/30 text-[10px] md:text-xs line-clamp-2 leading-tight">{product.description}</p>
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
