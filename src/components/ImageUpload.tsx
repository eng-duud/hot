"use client";

import { Button } from "@/components/ui/button";
import { ImagePlus, Trash, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
  onRemove: (value: string) => void;
}

export default function ImageUpload({
  value,
  onChange,
  onRemove
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "");

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.secure_url) {
        onChange(data.secure_url);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const onClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        {value && (
          <div className="relative w-40 h-40 rounded-2xl overflow-hidden border border-white/10">
            <div className="absolute top-2 right-2 z-10">
              <Button 
                type="button" 
                onClick={() => onRemove(value)} 
                variant="destructive" 
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
            <img 
              src={value} 
              alt="Uploaded product" 
              className="object-cover w-full h-full"
            />
          </div>
        )}
      </div>
      
      <input 
        type="file" 
        accept="image/*" 
        className="hidden" 
        ref={fileInputRef} 
        onChange={onUpload}
      />

      <Button 
        type="button" 
        disabled={isUploading}
        onClick={onClick}
        variant="outline"
        className="w-full h-32 border-dashed border-2 border-white/10 rounded-2xl hover:border-brand-orange/50 hover:bg-white/5 transition-all flex flex-col gap-2"
      >
        {isUploading ? (
          <Loader2 className="h-8 w-8 text-white/30 animate-spin" />
        ) : (
          <ImagePlus className="h-8 w-8 text-white/30" />
        )}
        <span className="text-white/50 font-medium">
          {isUploading ? "جاري الرفع..." : "اضغط لرفع صورة المنتج"}
        </span>
      </Button>
    </div>
  );
}
