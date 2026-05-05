"use client";

import { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface AboutSliderProps {
  images: { id: string; url: string }[];
}

export default function AboutSlider({ images }: AboutSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0) {
    return (
      <div className="relative z-10 rounded-[3rem] border border-white/10 shadow-2xl aspect-video bg-white/5 flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-50"
          alt="Default chef"
        />
      </div>
    );
  }

  return (
    <div className="relative group z-10 rounded-[3rem] border border-white/10 shadow-2xl aspect-video overflow-hidden bg-black">
      {/* Slider Images */}
      {images.map((img, index) => (
        <div
          key={img.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        >
          <img
            src={img.url}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      ))}

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-6 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white transition-all border border-white/10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-6 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-2xl text-white transition-all border border-white/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? "w-8 h-2 bg-brand-orange" 
                    : "w-2 h-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
