"use client";

import { Category } from "@prisma/client";
import { Trash2, Edit, Tag, ImageIcon } from "lucide-react";
import { deleteCategory } from "@/app/actions/categories";
import CategoryForm from "./CategoryForm";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CategoryManagerProps {
  categories: (Category & { _count: { products: number } })[];
}

export default function CategoryManager({ categories }: CategoryManagerProps) {
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Form Section */}
      <div className="order-2 lg:order-1">
        <CategoryForm 
          key={editingCategory?.id || "new"} 
          initialData={editingCategory} 
          onCancel={() => setEditingCategory(null)} 
        />
      </div>

      {/* List Section */}
      <div className="space-y-6 order-1 lg:order-2">
        <h3 className="text-2xl font-bold px-4">التصنيفات الحالية</h3>
        <div className="grid gap-4">
          {categories.length === 0 ? (
            <div className="p-12 border border-dashed border-white/10 rounded-[2rem] text-center text-white/20">
              لا توجد تصنيفات حالياً.
            </div>
          ) : (
            categories.map((cat) => (
              <div 
                key={cat.id} 
                className={cn(
                  "flex items-center justify-between p-4 md:p-6 rounded-3xl bg-white/5 border transition-all duration-300 group",
                  editingCategory?.id === cat.id ? "border-brand-orange bg-brand-orange/5" : "border-white/10 hover:bg-white/10"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-brand-orange/10 flex items-center justify-center border border-white/5">
                    {cat.image ? (
                      <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                    ) : (
                      <ImageIcon className="w-6 h-6 text-brand-orange/40" />
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-lg">{cat.name}</div>
                    <div className="text-sm text-white/40">{cat._count.products} منتجات</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setEditingCategory(cat)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-brand-orange/10 text-white/30 hover:text-brand-orange transition-all"
                    title="تعديل"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={async () => {
                      if (confirm("هل أنت متأكد من حذف هذا التصنيف؟")) {
                        await deleteCategory(cat.id);
                      }
                    }}
                    className="p-3 rounded-xl bg-white/5 hover:bg-brand-red/10 text-white/30 hover:text-brand-red transition-all"
                    title="حذف"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
