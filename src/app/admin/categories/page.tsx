import db from "@/lib/db";
import { Plus, Trash2, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createCategory, deleteCategory } from "@/app/actions/categories";

export default async function AdminCategories() {
  const categories = await db.category.findMany({
    include: { _count: { select: { products: true } } },
    orderBy: { name: "asc" }
  });

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold mb-2">إدارة التصنيفات</h1>
          <p className="text-white/40">تنظيم قائمة الطعام من خلال تصنيفات واضحة.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Add Category Form */}
        <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] space-y-8 h-fit">
          <h3 className="text-2xl font-bold">إضافة تصنيف جديد</h3>
          <form action={async (formData) => { "use server"; await createCategory(formData); }} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/50 px-1">اسم التصنيف</label>
              <input 
                name="name"
                type="text" 
                required
                className="w-full bg-black/30 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="مثلاً: برجر، وجبات عائلية..."
              />
            </div>
            <Button className="w-full h-16 rounded-2xl text-lg font-bold">إضافة التصنيف</Button>
          </form>
        </div>

        {/* Categories List */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold px-4">التصنيفات الحالية</h3>
          <div className="grid gap-4">
            {categories.length === 0 ? (
              <div className="p-12 border border-dashed border-white/10 rounded-[2rem] text-center text-white/20">
                لا توجد تصنيفات حالياً.
              </div>
            ) : (
              categories.map((cat) => (
                <div key={cat.id} className="flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="bg-brand-orange/20 p-3 rounded-xl">
                      <Tag className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{cat.name}</div>
                      <div className="text-sm text-white/40">{cat._count.products} منتجات</div>
                    </div>
                  </div>
                  <form action={async () => { "use server"; await deleteCategory(cat.id); }}>
                    <button className="p-3 rounded-xl hover:bg-brand-red/10 text-white/10 group-hover:text-brand-red/50 hover:text-brand-red transition-all">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
