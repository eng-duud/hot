"use client";

import { Category } from "@prisma/client";
import { createCategory, updateCategory } from "@/app/actions/categories";
import { Button } from "@/components/ui/button";
import { Tag, Save, X } from "lucide-react";
import ImageUpload from "./ImageUpload";
import { useState } from "react";

interface CategoryFormProps {
  initialData?: Category | null;
  onCancel?: () => void;
}

export default function CategoryForm({ initialData, onCancel }: CategoryFormProps) {
  const [imageUrl, setImageUrl] = useState(initialData?.image || "");

  const formAction = initialData 
    ? updateCategory.bind(null, initialData.id)
    : createCategory;

  return (
    <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] space-y-8 h-fit animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">
          {initialData ? "تعديل التصنيف" : "إضافة تصنيف جديد"}
        </h3>
        {onCancel && (
          <button onClick={onCancel} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-6 h-6 text-white/40" />
          </button>
        )}
      </div>

      <form action={async (formData) => {
        if (imageUrl) formData.set("image", imageUrl);
        const result = await formAction(formData);
        if (result.success && !initialData) {
          // Reset if it was a new category
          setImageUrl("");
          (document.getElementById("category-name-input") as HTMLInputElement).value = "";
        }
        if (result.success && onCancel) {
          onCancel();
        }
      }} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/50 px-1">اسم التصنيف</label>
          <input 
            id="category-name-input"
            name="name"
            type="text" 
            defaultValue={initialData?.name}
            required
            className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors"
            placeholder="مثلاً: برجر، وجبات عائلية..."
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-white/50 px-1">صورة التصنيف</label>
          <ImageUpload 
            value={imageUrl} 
            onChange={(url) => setImageUrl(url)}
            onRemove={() => setImageUrl("")}
          />
          <input type="hidden" name="image" value={imageUrl} />
        </div>

        <div className="flex gap-4">
          <Button className="flex-1 h-16 rounded-2xl text-lg font-bold gap-2">
            {initialData ? <Save className="w-5 h-5" /> : <Tag className="w-5 h-5" />}
            {initialData ? "تحديث التصنيف" : "إضافة التصنيف"}
          </Button>
          {initialData && onCancel && (
            <Button type="button" variant="outline" onClick={onCancel} className="h-16 rounded-2xl px-8 border-white/10 hover:bg-white/5">
              إلغاء
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
