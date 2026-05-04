"use client";

import { useState, useEffect } from "react";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image: string | null;
}

export default function FeaturedGallery({ products }: { products: Product[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (products.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 seconds
    
    return () => clearInterval(interval);
  }, [products.length]);

  if (!products || products.length === 0) return null;

  const currentProduct = products[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-[3rem] overflow-hidden bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 group h-[500px] md:h-[600px]">
      
      {/* Background Image layers */}
      {products.map((product, index) => (
        <div 
          key={product.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
          )}
        >
          <img 
            src={product.image || "/placeholder.jpg"} 
            alt={product.name} 
            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[10s] ease-out" 
          />
          {/* Luxury dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/70 to-transparent" />
        </div>
      ))}

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4 max-w-2xl text-right ml-auto">
          <div className="flex items-center justify-end gap-3 mb-2">
            <h3 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg leading-tight">{currentProduct.name}</h3>
            <Star className="w-8 h-8 text-brand-yellow fill-brand-yellow drop-shadow-[0_0_15px_rgba(255,186,8,0.6)]" />
          </div>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed drop-shadow-md line-clamp-2">{currentProduct.description}</p>
        </div>
        
        <div className="flex-shrink-0 bg-black/40 backdrop-blur-md border border-white/10 px-8 py-4 rounded-3xl self-end md:self-auto shadow-2xl">
           <span className="text-4xl md:text-5xl font-black text-brand-yellow drop-shadow-[0_0_15px_rgba(255,186,8,0.3)]">{currentProduct.price} <span className="text-lg font-medium text-white/50">ر.ي</span></span>
        </div>
      </div>

      {/* Navigation Arrows */}
      {products.length > 1 && (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-between px-4 md:px-8 pointer-events-none">
          <button 
            onClick={nextSlide} 
            className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-lg border border-white/20 text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <button 
            onClick={prevSlide} 
            className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-lg border border-white/20 text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      )}

      {/* Indicators */}
      {products.length > 1 && (
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "transition-all duration-300 rounded-full",
                index === currentIndex 
                  ? "w-8 h-2.5 bg-brand-yellow shadow-[0_0_10px_rgba(255,186,8,0.8)]" 
                  : "w-2.5 h-2.5 bg-white/30 hover:bg-white/60"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
