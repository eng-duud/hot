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
    <div className={cn("flex items-center gap-3 group", className)}>
      <div className="relative flex items-center justify-center">
        {!error ? (
          <img 
            src="/logo.png" 
            alt="Hot Spicy Logo" 
            className={cn("object-contain transition-transform group-hover:scale-110", 
              iconSize === 24 ? "w-12 h-12" : "w-10 h-10"
            )}
            onError={() => setError(true)}
          />
        ) : (
          <div className="bg-brand-orange p-2 rounded-full group-hover:scale-110 transition-transform">
            <Flame className="text-white" style={{ width: iconSize, height: iconSize }} />
          </div>
        )}
      </div>
      
      {showText && (
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-brand-orange">هوت</span>{" "}
          <span className="text-white">سبايسي</span>
        </span>
      )}
    </div>
  );
}
