"use client";

import { Category, Product } from "@prisma/client";
import { Search, Tag as TagIcon } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface CategoryWithProducts extends Category {
  products: Product[];
}

interface MenuGalleryProps {
  categories: CategoryWithProducts[];
}

export default function MenuGallery({ categories }: MenuGalleryProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    let data = categories;

    // 1. Filter by Category
    if (selectedCategoryId !== "all") {
      data = data.filter(cat => cat.id === selectedCategoryId);
    }

    // 2. Filter by Search Query (deep filter)
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      data = data.map(cat => ({
        ...cat,
        products: cat.products.filter(p => 
          p.name.toLowerCase().includes(query) || 
          p.description?.toLowerCase().includes(query)
        )
      })).filter(cat => cat.products.length > 0);
    }

    return data;
  }, [categories, selectedCategoryId, searchQuery]);

  return (
    <div className="pt-[76px] md:pt-[96px]">
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  (e.target as HTMLInputElement).blur();
                }
              }}
              className="w-full bg-black/40 border border-white/10 rounded-full px-16 py-5 focus:outline-none focus:border-brand-orange transition-all shadow-xl text-lg"
              placeholder="ابحث عن وجبتك المفضلة..."
            />
          </div>
        </div>
      </div>

      {/* Sleek Pill Categories Row */}
      <div className="sticky top-[64px] md:top-[80px] z-30 py-2.5 md:py-3.5 backdrop-blur-xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-brand-gray/60 border border-white/10 rounded-full p-1.5 flex items-center justify-start md:justify-center gap-2 overflow-x-auto scrollbar-hide shadow-xl relative">
            
            {/* "All" Category Pill */}
            <button 
              onClick={() => setSelectedCategoryId("all")}
              className={cn(
                "flex items-center gap-2 px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-black transition-all duration-300 whitespace-nowrap group shrink-0",
                selectedCategoryId === "all" 
                  ? "text-brand-dark bg-gradient-to-r from-brand-yellow to-orange-400 shadow-[0_0_15px_rgba(255,186,8,0.3)]" 
                  : "bg-white/5 border border-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              )}
            >
              <TagIcon className={cn("w-4 h-4 transition-transform", selectedCategoryId === "all" ? "text-brand-dark rotate-12" : "text-brand-red group-hover:rotate-12")} />
              <span>الكل</span>
            </button>

            {categories.map((cat) => (
              <button 
                key={cat.id} 
                onClick={() => setSelectedCategoryId(cat.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-black transition-all duration-300 whitespace-nowrap group shrink-0",
                  selectedCategoryId === cat.id 
                    ? "text-brand-dark bg-gradient-to-r from-brand-yellow to-orange-400 shadow-[0_0_15px_rgba(255,186,8,0.3)]" 
                    : "bg-white/5 border border-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                {cat.image ? (
                  <img src={cat.image} alt={cat.name} className="w-4 h-4 md:w-5 md:h-5 rounded-full object-cover" />
                ) : (
                  <TagIcon className="w-4 h-4 md:w-5 md:h-5 text-brand-red animate-pulse" />
                )}
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-20 min-h-[50vh]">
        {/* Results Info */}
        {(selectedCategoryId !== "all" || searchQuery !== "") && (
          <div className="mb-12 flex items-center justify-between border-b border-white/5 pb-6">
            <h2 className="text-xl md:text-2xl font-bold">
              {searchQuery ? `نتائج البحث عن: "${searchQuery}"` : "الوجبات المتاحة"}
            </h2>
            <button 
              onClick={() => { setSelectedCategoryId("all"); setSearchQuery(""); }}
              className="text-brand-orange text-sm font-bold hover:underline"
            >
              إعادة تعيين الكل
            </button>
          </div>
        )}

        {/* Products Display */}
        {filteredData.length === 0 ? (
          <div className="py-20 text-center space-y-4">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-white/20" />
            </div>
            <h3 className="text-2xl font-bold text-white/60">لم يتم العثور على نتائج</h3>
            <p className="text-white/30">جرب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً.</p>
          </div>
        ) : (
          <div className="space-y-20">
            {filteredData.map((cat) => (
              <div key={cat.id} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
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
        )}
      </div>
    </div>
  );
}
