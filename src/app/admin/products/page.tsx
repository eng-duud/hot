import db from "@/lib/db";
import { Plus, Trash2, Edit, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { deleteProduct } from "@/app/actions/products";

export default async function AdminProducts() {
  const products = await db.product.findMany({
    include: { category: true },
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold mb-2">إدارة المنتجات</h1>
          <p className="text-white/40">إضافة وتعديل وحذف الوجبات من قائمة الطعام.</p>
        </div>
        <Button className="rounded-2xl h-14 px-8 gap-2 font-bold text-lg">
          <Plus className="w-5 h-5" />
          منتج جديد
        </Button>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="p-8 font-bold">المنتج</th>
              <th className="p-8 font-bold">التصنيف</th>
              <th className="p-8 font-bold">السعر</th>
              <th className="p-8 font-bold text-left">العمليات</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-20 text-center text-white/20 italic">
                   <Package className="w-12 h-12 mx-auto mb-4 opacity-10" />
                   لا يوجد منتجات حالياً. أضف أول منتج لك!
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="p-8">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-black/50 overflow-hidden border border-white/10">
                        <img src={product.image || "/placeholder.jpg"} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-bold text-lg">{product.name}</div>
                        <div className="text-sm text-white/40">{product.description?.substring(0, 40)}...</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-8">
                    <span className="px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold">
                      {product.category.name}
                    </span>
                  </td>
                  <td className="p-8 font-bold text-xl">{product.price} ر.ي</td>
                  <td className="p-8">
                    <div className="flex items-center justify-end gap-2">
                       <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all">
                         <Edit className="w-5 h-5" />
                       </button>
                       <form action={async () => { "use server"; await deleteProduct(product.id); }}>
                         <button className="p-3 rounded-xl bg-brand-red/10 hover:bg-brand-red text-brand-red hover:text-white transition-all">
                           <Trash2 className="w-5 h-5" />
                         </button>
                       </form>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
