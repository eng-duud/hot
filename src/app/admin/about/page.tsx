"use client";

import { useState, useEffect } from "react";
import { addSliderImage, deleteSliderImage, getSliderImages } from "@/app/actions/about";
import ImageUpload from "@/components/ImageUpload";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, ImageIcon } from "lucide-react";

export default function AdminAboutSlider() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  async function fetchImages() {
    const data = await getSliderImages();
    setImages(data);
    setLoading(false);
  }

  async function handleAddImage(url: string) {
    const result = await addSliderImage(url);
    if (result.success) {
      fetchImages();
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("هل أنت متأكد من حذف هذه الصورة؟")) return;
    const result = await deleteSliderImage(id);
    if (result.success) {
      fetchImages();
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">سلايدر صفحة من نحن</h1>
        <p className="text-white/40">إضافة وحذف الصور التي تظهر في سلايدر صفحة من نحن.</p>
      </div>

      <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Plus className="w-5 h-5 text-brand-orange" />
          إضافة صورة جديدة
        </h2>
        <ImageUpload 
          value="" 
          onChange={(url) => handleAddImage(url)} 
          onRemove={() => {}} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="col-span-full py-20 text-center text-white/20">جاري التحميل...</div>
        ) : images.length === 0 ? (
          <div className="col-span-full py-20 text-center text-white/20 border border-white/5 rounded-[2rem]">
            لا توجد صور حالياً. أضف أول صورة!
          </div>
        ) : (
          images.map((img) => (
            <div key={img.id} className="relative group rounded-2xl overflow-hidden border border-white/10 bg-black/50 aspect-video">
              <img 
                src={img.url} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button 
                  onClick={() => handleDelete(img.id)}
                  className="p-3 bg-brand-red text-white rounded-xl hover:bg-brand-red/80 transition-colors shadow-lg"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
