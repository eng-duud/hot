import Header from "@/components/Header";
import db from "@/lib/db";
import { Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function MenuPage() {
  const categories = await db.category.findMany({
    include: { products: true }
  });

  if (categories.length === 0) {
    return (
      <main className="min-h-screen bg-brand-dark">
        <Header />
        <div className="pt-[112px] md:pt-[136px] flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <div className="bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 max-w-2xl w-full">
            <h2 className="text-3xl font-bold mb-4">القائمة <span className="text-brand-red">فارغة</span> حالياً</h2>
            <p className="text-white/50 text-lg">لم يتم إضافة أي أطباق أو تصنيفات إلى قاعدة البيانات حتى الآن. يرجى إضافتها من لوحة التحكم.</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-dark">
      <Header />

      {/* pt-[112px] md:pt-[136px] = accommodates new thinner premium header */}
      <div className="pt-[112px] md:pt-[136px]">
        <div className="bg-white/5 border-b border-white/10 py-12">
          <div className="container mx-auto px-4 md:px-8 text-center space-y-6">
            <h1 className="text-4xl font-bold">قائمة <span className="text-brand-red">الطعام</span></h1>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
              <input
                type="text"
                className="w-full bg-brand-dark border border-white/10 rounded-full px-16 py-4 focus:outline-none focus:border-brand-orange transition-colors"
                placeholder="ابحث عن وجبتك المفضلة..."
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-12">

            {/* Categories Sidebar */}
            <aside className="md:w-64 space-y-4">
              <div className="flex items-center gap-2 mb-6 text-xl font-bold">
                <Filter className="w-5 h-5 text-brand-orange" />
                <span>التصنيفات</span>
              </div>
              <div className="flex md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
                <Button variant="default" className="rounded-full justify-start px-6 whitespace-nowrap">الكل</Button>
                {categories.map((cat: any) => (
                  <Button key={cat.id} variant="ghost" className="rounded-full justify-start px-6 text-white/60 hover:text-white whitespace-nowrap">
                    {cat.name}
                  </Button>
                ))}
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1 space-y-20">
              {categories.map((cat: any) => (
                <div key={cat.id} className="space-y-8">
                  <h2 className="text-3xl font-bold border-r-4 border-brand-red pr-4">{cat.name}</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {cat.products.map((product: any) => (
                      <div key={product.id} className="group bg-brand-gray rounded-[2rem] border border-white/5 hover:border-brand-orange/30 transition-all duration-300 p-4">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                          <img src={product.image || "/placeholder.jpg"} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="px-2 space-y-3">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold">{product.name}</h3>
                            <span className="text-brand-orange font-bold text-lg">{product.price} ر.ي</span>
                          </div>
                          <p className="text-sm text-white/40 line-clamp-2">{product.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
