"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "@/components/ui/button";
import { ImagePlus, Trash } from "lucide-react";
import Image from "next/image";

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
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
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
      
      <CldUploadWidget onUpload={onUpload} uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}>
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button 
              type="button" 
              onClick={onClick}
              variant="outline"
              className="w-full h-32 border-dashed border-2 border-white/10 rounded-2xl hover:border-brand-orange/50 hover:bg-white/5 transition-all flex flex-col gap-2"
            >
              <ImagePlus className="h-8 w-8 text-white/30" />
              <span className="text-white/50 font-medium">اضغط لرفع صورة المنتج</span>
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
