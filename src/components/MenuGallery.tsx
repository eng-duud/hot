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

      {/* Circular Categories Row */}
      <div className="bg-brand-gray/50 border-b border-white/5 py-4 md:py-6 sticky top-[112px] md:top-[136px] z-30 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center gap-6 md:gap-10 overflow-x-auto pb-2 scrollbar-hide">
            {/* "All" Category */}
            <div 
              onClick={() => setSelectedCategoryId("all")}
              className="flex flex-col items-center gap-2 cursor-pointer group shrink-0"
            >
              <div className={cn(
                "w-14 h-14 md:w-20 md:h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300 group-hover:scale-110",
                selectedCategoryId === "all" 
                  ? "bg-brand-red border-brand-red shadow-[0_0_15px_rgba(230,57,70,0.3)]" 
                  : "bg-white/5 border-transparent hover:border-white/20"
              )}>
                <TagIcon className={cn("w-6 h-6 md:w-10 md:h-10 transition-colors", selectedCategoryId === "all" ? "text-white" : "text-white/40")} />
              </div>
              <span className={cn(
                "font-bold text-xs md:text-sm transition-colors",
                selectedCategoryId === "all" ? "text-brand-red" : "text-white/70 group-hover:text-white"
              )}>الكل</span>
            </div>

            {categories.map((cat) => (
              <div 
                key={cat.id} 
                onClick={() => setSelectedCategoryId(cat.id)}
                className="flex flex-col items-center gap-2 cursor-pointer group shrink-0"
              >
                <div className={cn(
                  "w-14 h-14 md:w-20 md:h-20 rounded-full bg-white/5 flex items-center justify-center border-2 transition-all duration-500 group-hover:scale-110 overflow-hidden relative",
                  selectedCategoryId === cat.id ? "border-brand-orange shadow-[0_0_15px_rgba(255,186,8,0.2)]" : "border-transparent",
                  !(cat as any).image && "bg-brand-orange/10"
                )}>
                  {(cat as any).image ? (
                    <img src={(cat as any).image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  ) : (
                    <TagIcon className={cn("w-6 h-6 md:w-10 md:h-10 transition-colors", selectedCategoryId === cat.id ? "text-brand-orange" : "text-brand-orange/50")} />
                  )}
                  {/* Overlay for selected state if no image */}
                  {selectedCategoryId === cat.id && !(cat as any).image && (
                    <div className="absolute inset-0 bg-brand-orange/20" />
                  )}
                </div>
                <span className={cn(
                  "font-bold text-xs md:text-sm transition-colors",
                  selectedCategoryId === cat.id ? "text-brand-orange" : "text-white/70 group-hover:text-white"
                )}>{cat.name}</span>
              </div>
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
