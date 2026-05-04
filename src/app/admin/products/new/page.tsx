import db from "@/lib/db";
import { createProduct } from "@/app/actions/products";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package } from "lucide-react";
import Link from "next/link";

export default async function NewProductPage() {
  const categories = await db.category.findMany();

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="flex items-center gap-4">
        <Link href="/admin/products" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-4xl font-bold mb-1 text-brand-orange">منتج جديد</h1>
          <p className="text-white/40">أضف وجبة جديدة إلى قائمة الطعام الخاصة بك.</p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-2xl">
        <form action={async (formData) => { "use server"; await createProduct(formData); }} className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-white/50 px-1">اسم المنتج</label>
            <input 
              name="name"
              type="text" 
              required
              className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors"
              placeholder="مثلاً: دبل تشيز برجر"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-white/50 px-1">الوصف</label>
            <textarea 
              name="description"
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
            <label className="text-sm font-medium text-white/50 px-1">رابط الصورة</label>
            <div className="flex gap-4">
              <input 
                name="image"
                type="text" 
                className="flex-1 bg-black/30 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="https://images.unsplash.com/..."
              />
              <Button type="button" variant="outline" className="rounded-2xl px-8 border-dashed">
                رفع
              </Button>
            </div>
          </div>

          <div className="pt-8 md:col-span-2">
            <Button className="w-full h-16 rounded-2xl text-xl font-bold gap-3">
              <Package className="w-6 h-6" />
              حفظ المنتج
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
