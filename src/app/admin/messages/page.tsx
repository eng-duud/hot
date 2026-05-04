import db from "@/lib/db";
import { MessageSquare, Calendar, Phone, User } from "lucide-react";

export default async function AdminMessages() {
  const messages = await db.message.findMany({
    orderBy: { createdAt: "desc" }
  });

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold mb-2">رسائل العملاء</h1>
          <p className="text-white/40">إدارة الردود والتواصل مع العملاء الذين راسلوك.</p>
        </div>
        <div className="bg-brand-orange/10 text-brand-orange px-6 py-2 rounded-full font-bold">
          إجمالي الرسائل: {messages.length}
        </div>
      </div>

      <div className="grid gap-6">
        {messages.length === 0 ? (
          <div className="bg-white/5 border border-white/10 p-20 rounded-[3rem] text-center space-y-4">
             <MessageSquare className="w-16 h-16 text-white/10 mx-auto" />
             <p className="text-white/30 text-xl font-medium">لا توجد رسائل من العملاء بعد.</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors group">
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="space-y-6 flex-1">
                  <div className="flex flex-wrap gap-6 text-sm">
                    <div className="flex items-center gap-2 text-white/60">
                      <User className="w-4 h-4 text-brand-orange" />
                      <span className="font-bold text-white">{msg.senderName}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <Phone className="w-4 h-4 text-brand-green" />
                      <span>{msg.senderPhone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <Calendar className="w-4 h-4 text-brand-red" />
                      <span>{new Date(msg.createdAt).toLocaleDateString("ar-YE")}</span>
                    </div>
                  </div>
                  <div className="text-lg leading-relaxed text-white/80 bg-black/30 p-6 rounded-2xl border border-white/5">
                    {msg.messageContent}
                  </div>
                </div>
                <div className="flex md:flex-col gap-2 justify-center">
                   <button className="bg-brand-orange px-6 py-3 rounded-xl font-bold hover:bg-brand-orange/90 transition-colors">اتصال</button>
                   <button className="bg-white/5 border border-white/10 px-6 py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">حذف</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
