import db from "@/lib/db";
import CategoryManager from "@/components/CategoryManager";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminCategories() {
  const categories = await db.category.findMany({
    include: { _count: { select: { products: true } } },
    orderBy: { name: "asc" }
  });

  return (
    <div className="space-y-12 pb-20">
      <div>
        <h1 className="text-4xl font-bold mb-2">إدارة التصنيفات</h1>
        <p className="text-white/40">تنظيم قائمة الطعام من خلال تصنيفات واضحة وصور مميزة.</p>
      </div>

      <CategoryManager categories={categories} />
    </div>
  );
}
