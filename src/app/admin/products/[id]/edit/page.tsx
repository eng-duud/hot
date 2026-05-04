import db from "@/lib/db";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductForm from "@/components/ProductForm";
import { notFound } from "next/navigation";

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const categories = await db.category.findMany();
  
  const product = await db.product.findUnique({
    where: { id: params.id }
  });

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="flex items-center gap-4">
        <Link href="/admin/products" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
          <ArrowRight className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-4xl font-bold mb-1 text-brand-orange">تعديل المنتج</h1>
          <p className="text-white/40">تعديل بيانات الوجبة المحددة.</p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[3rem] shadow-2xl">
        <ProductForm categories={categories} initialData={product} />
      </div>
    </div>
  );
}
