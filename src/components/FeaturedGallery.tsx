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
    }, 4000);
    
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
    <div className="relative w-full max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 group h-[550px] md:h-[650px]">
      
      {/* Background Image layers with smooth crossfade */}
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
          {/* Professional luxury gradient overlay - ensures text readability in any mode */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#050505]/50" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-12 flex flex-col md:flex-row justify-between items-end gap-8">
        
        {/* Right Side: Title, Description & Indicators */}
        <div className="space-y-5 max-w-3xl text-right ml-auto w-full order-2 md:order-1">
          <div className="flex items-center justify-end gap-3 mb-2">
            <h3 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg leading-tight">{currentProduct.name}</h3>
            <Star className="w-8 h-8 text-brand-yellow fill-brand-yellow drop-shadow-[0_0_15px_rgba(255,186,8,0.6)]" />
          </div>
          <p className="text-white/70 text-base md:text-xl leading-relaxed drop-shadow-md line-clamp-3">{currentProduct.description}</p>
          
          {/* Indicators Line */}
          {products.length > 1 && (
            <div className="flex items-center justify-end gap-2 pt-4">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "transition-all duration-300 rounded-full",
                    index === currentIndex 
                      ? "w-10 h-1.5 bg-brand-yellow shadow-[0_0_10px_rgba(255,186,8,0.8)]" 
                      : "w-3 h-1.5 bg-white/20 hover:bg-white/50"
                  )}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Left Side: Price Tag and Navigation Arrows */}
        <div className="flex flex-col gap-4 self-end w-full md:w-auto order-1 md:order-2">
          
          {/* Price Box */}
          <div className="bg-[#111111]/80 backdrop-blur-xl border border-white/10 px-8 py-5 rounded-[2rem] shadow-2xl flex items-center justify-center relative overflow-hidden group-hover:border-brand-yellow/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-4xl md:text-5xl font-black text-brand-yellow drop-shadow-[0_0_15px_rgba(255,186,8,0.4)] relative z-10">
              {currentProduct.price} <span className="text-lg font-medium text-white/50">ر.ي</span>
            </span>
          </div>

          {/* Navigation Arrows placed under the price */}
          {products.length > 1 && (
            <div className="flex items-center gap-3 justify-center md:justify-end">
              <button 
                onClick={nextSlide} 
                className="w-14 h-14 flex items-center justify-center rounded-[1.25rem] bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-brand-red hover:border-brand-red hover:-translate-y-1 transition-all duration-300 shadow-lg group/btn"
              >
                <ChevronRight className="w-7 h-7 transform group-hover/btn:translate-x-1 transition-transform" /> 
              </button>
              <button 
                onClick={prevSlide} 
                className="w-14 h-14 flex items-center justify-center rounded-[1.25rem] bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-brand-red hover:border-brand-red hover:-translate-y-1 transition-all duration-300 shadow-lg group/btn"
              >
                <ChevronLeft className="w-7 h-7 transform group-hover/btn:-translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
