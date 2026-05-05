import Header from "@/components/Header";
import db from "@/lib/db";
import MenuGallery from "@/components/MenuGallery";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function MenuPage() {
  const categories = await db.category.findMany({
    include: { products: true },
    orderBy: { name: "asc" }
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
    <main className="min-h-screen bg-brand-dark pb-20">
      <Header />
      <MenuGallery categories={categories as any} />
    </main>
  );
}
