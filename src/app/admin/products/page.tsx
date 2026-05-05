import db from "@/lib/db";
import { Plus, Trash2, Edit, Package, Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteProduct, toggleProductFeature, toggleProductBestSeller } from "@/app/actions/products";
import { cn } from "@/lib/utils";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function AdminProducts() {
  const products = await db.product.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-8 md:space-y-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">إدارة المنتجات</h1>
          <p className="text-white/40">إضافة وتعديل وحذف الوجبات من قائمة الطعام.</p>
        </div>
        <Link href="/admin/products/new">
          <Button className="w-full md:w-auto rounded-2xl h-14 px-8 gap-2 font-bold text-lg shadow-lg shadow-brand-orange/20">
            <Plus className="w-5 h-5" />
            منتج جديد
          </Button>
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-12 md:p-20 text-center text-white/20 italic">
           <Package className="w-12 h-12 mx-auto mb-4 opacity-10" />
           لا يوجد منتجات حالياً. أضف أول منتج لك!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-[#1a1a1a] border border-white/5 rounded-[2rem] p-6 flex flex-col gap-6 hover:bg-white/5 hover:border-brand-orange/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex gap-4 items-start">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-black overflow-hidden border border-white/5 flex-shrink-0 relative">
                  <img src={product.image || "/placeholder.jpg"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-xl truncate text-white/90">{product.name}</h3>
                  <div className="mt-2 mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[11px] font-bold tracking-wide">
                      {product.category.name}
                    </span>
                  </div>
                  <div className="font-black text-2xl text-brand-yellow">{product.price} <span className="text-sm font-medium text-white/40">ر.ي</span></div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-auto">
                <div className="flex gap-2">
                  <form action={async () => { "use server"; await toggleProductFeature(product.id, product.isFeatured); }}>
                    <button type="submit" className={cn(
                      "flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all",
                      product.isFeatured ? "text-brand-yellow bg-brand-yellow/10" : "text-white/30 hover:bg-white/5 hover:text-white"
                    )}>
                      <Star className={cn("w-4 h-4", product.isFeatured && "fill-brand-yellow")} />
                      مميز
                    </button>
                  </form>
                  <form action={async () => { "use server"; await toggleProductBestSeller(product.id, product.isBestSeller); }}>
                    <button type="submit" className={cn(
                      "flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all",
                      product.isBestSeller ? "text-brand-orange bg-brand-orange/10" : "text-white/30 hover:bg-white/5 hover:text-white"
                    )}>
                      <Trophy className={cn("w-4 h-4", product.isBestSeller && "fill-brand-orange")} />
                      مبيعاً
                    </button>
                  </form>
                </div>

                <div className="flex gap-2">
                  <Link href={`/admin/products/${product.id}/edit`} className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all shadow-sm">
                    <Edit className="w-4 h-4" />
                  </Link>
                  <form action={async () => { "use server"; await deleteProduct(product.id); }}>
                    <button type="submit" className="p-2.5 rounded-xl bg-brand-red/10 hover:bg-brand-red text-brand-red hover:text-white transition-all shadow-sm">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
