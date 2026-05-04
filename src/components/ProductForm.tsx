"use client";

import { Category, Product } from "@prisma/client";
import { createProduct, updateProduct } from "@/app/actions/products";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import ImageUpload from "./ImageUpload";
import { useState } from "react";

interface ProductFormProps {
  categories: Category[];
  initialData?: Product;
}

export default function ProductForm({ categories, initialData }: ProductFormProps) {
  const [imageUrl, setImageUrl] = useState(initialData?.image || "");

  const formAction = initialData 
    ? updateProduct.bind(null, initialData.id)
    : createProduct;

  return (
    <form action={async (formData) => {
      // Add the image URL to the formData
      if (imageUrl) formData.set("image", imageUrl);
      await formAction(formData);
    }} className="grid md:grid-cols-2 gap-x-12 gap-y-8">
      
      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-white/50 px-1">اسم المنتج</label>
        <input 
          name="name"
          type="text" 
          defaultValue={initialData?.name}
          required
          className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors"
          placeholder="مثلاً: دبل تشيز برجر"
        />
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-white/50 px-1">الوصف</label>
        <textarea 
          name="description"
          defaultValue={initialData?.description || ""}
          rows={3}
          className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors resize-none"
          placeholder="اشرح مكونات الوجبة وما يميزها..."
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white/50 px-1">السعر (ر.ي)</label>
        <input 
          name="price"
          type="number" 
          defaultValue={initialData?.price}
          step="100"
          required
          className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors"
          placeholder="0.00"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white/50 px-1">التصنيف</label>
        <select 
          name="categoryId"
          defaultValue={initialData?.categoryId}
          required
          className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors appearance-none"
        >
          <option value="">اختر التصنيف...</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2 md:col-span-2">
        <label className="text-sm font-medium text-white/50 px-1">صورة المنتج</label>
        <ImageUpload 
          value={imageUrl} 
          onChange={(url) => setImageUrl(url)}
          onRemove={() => setImageUrl("")}
        />
        {/* Hidden input to ensure 'image' is in formData if needed by server action validation */}
        <input type="hidden" name="image" value={imageUrl} />
      </div>

      <div className="pt-8 md:col-span-2">
        <Button className="w-full h-16 rounded-2xl text-xl font-bold gap-3">
          <Package className="w-6 h-6" />
          {initialData ? "تحديث المنتج" : "حفظ المنتج"}
        </Button>
      </div>
    </form>
  );
}
