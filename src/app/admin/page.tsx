import db from "@/lib/db";
import { MessageSquare, Package, Tag, Users } from "lucide-react";

export default async function AdminDashboard() {
  // Fetch stats
  const productsCount = await db.product.count();
  const categoriesCount = await db.category.count();
  const messagesCount = await db.message.count();

  const stats = [
    { label: "إجمالي المنتجات", value: productsCount, icon: Package, color: "text-brand-orange", bg: "bg-brand-orange/10" },
    { label: "التصنيفات", value: categoriesCount, icon: Tag, color: "text-brand-red", bg: "bg-brand-red/10" },
    { label: "رسائل العملاء", value: messagesCount, icon: MessageSquare, color: "text-brand-green", bg: "bg-brand-green/10" },
    { label: "زوار اليوم", value: "154", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-4xl font-bold mb-2">مرحباً بك في لوحة التحكم</h1>
        <p className="text-white/40">نظرة عامة على أداء مطعمك اليوم.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-6">
            <div className={`${stat.bg} w-14 h-14 rounded-2xl flex items-center justify-center`}>
              <stat.icon className={`w-7 h-7 ${stat.color}`} />
            </div>
            <div>
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="text-white/40 font-medium">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-6">
          <h3 className="text-2xl font-bold">آخر الرسائل</h3>
          <div className="space-y-4">
            {/* We will fetch messages here later */}
            <p className="text-white/20 italic">لا توجد رسائل جديدة حالياً.</p>
          </div>
        </div>
        
        <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-6">
          <h3 className="text-2xl font-bold">المنتجات الأكثر مبيعاً</h3>
          <div className="space-y-4">
             <p className="text-white/20 italic">البيانات ستتوفر عند بدء الطلبات.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
