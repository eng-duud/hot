"use client";

import { Flame } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
}

export default function Logo({ className, iconSize = 24, showText = true }: LogoProps) {
  const [error, setError] = useState(false);

  return (
    <div className={cn("flex items-center gap-4 group", className)}>
      <div className="relative flex items-center justify-center animate-float">
        {!error ? (
          <img 
            src="/logo.png" 
            alt="Hot Spicy Logo" 
            className={cn("object-contain transition-transform group-hover:scale-125 drop-shadow-2xl", 
              iconSize === 24 ? "w-36 h-36 -mt-4" : "w-16 h-16"
            )}
            onError={() => setError(true)}
          />
        ) : (
          <div className="bg-brand-orange p-3 rounded-full group-hover:scale-110 transition-transform">
            <Flame className="text-white" style={{ width: iconSize * 1.5, height: iconSize * 1.5 }} />
          </div>
        )}
      </div>
      
      {showText && (
        <span className="text-3xl font-bold tracking-tight">
          <span className="text-brand-orange">هوت</span>{" "}
          <span className="text-white">سبايسي</span>
        </span>
      )}
    </div>
  );
}
