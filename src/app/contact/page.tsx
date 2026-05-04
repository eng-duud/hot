"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<{ success?: string; error?: string } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = await submitContactForm(formData);
    
    setLoading(false);
    setStatus(result);
    
    if (result.success) {
      // Get data before resetting
      const name = formData.get("name") as string;
      const phone = formData.get("phone") as string;
      const message = formData.get("message") as string;
      
      // Prepare WhatsApp URL
      const waText = `مرحباً هوت سبايسي،\n\nالاسم: ${name}\nرقم الهاتف: ${phone}\nالرسالة:\n${message}`;
      const waUrl = `https://wa.me/967770620062?text=${encodeURIComponent(waText)}`;
      
      // Open WhatsApp in a new tab
      window.open(waUrl, '_blank');
      
      // Reset form
      form.reset();
    }
  }

  return (
    <main className="min-h-screen bg-brand-dark">
      <Header />

      <div className="pt-[112px] md:pt-[136px]">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold">تواصل <span className="text-brand-red">معنا</span></h1>
              <p className="text-white/60 text-lg">نحن هنا للإجابة على استفساراتكم واقتراحاتكم. لا تتردد في مراسلتنا.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-brand-orange/20 p-4 rounded-2xl h-fit">
                  <MapPin className="w-6 h-6 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">العنوان</h4>
                  <p className="text-white/50">صنعاء، الأصبحي، شارع 22 مايو، مقابل المريسي للصرافة</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-brand-red/20 p-4 rounded-2xl h-fit">
                  <Phone className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">أرقام التواصل</h4>
                  <p className="text-white/50 space-x-2 space-x-reverse">
                    <a href="tel:780620062" className="hover:text-brand-yellow transition-colors">780620062</a> <span>|</span> <a href="tel:770620062" className="hover:text-brand-yellow transition-colors">770620062</a>
                  </p>
                  <p className="text-white/50 space-x-2 space-x-reverse">
                    <a href="tel:730620062" className="hover:text-brand-yellow transition-colors">730620062</a> <span>|</span> <a href="tel:776820068" className="hover:text-brand-yellow transition-colors">776820068</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-brand-green/20 p-4 rounded-2xl h-fit">
                  <Mail className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">البريد الإلكتروني</h4>
                  <a href="mailto:hotspicy7706@gmail.com" className="text-white/50 hover:text-brand-yellow transition-colors">hotspicy7706@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 px-1">الاسم الكامل</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="أدخل اسمك هنا"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 px-1">رقم الهاتف</label>
                <input 
                  name="phone"
                  type="tel" 
                  required
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors"
                  placeholder="000 000 000"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/70 px-1">الرسالة</label>
                <textarea 
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-brand-dark/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  placeholder="كيف يمكننا مساعدتك؟"
                />
              </div>

              <Button 
                type="submit" 
                disabled={loading}
                className="w-full h-16 rounded-2xl text-lg gap-3 font-bold"
              >
                {loading ? "جاري الإرسال..." : "إرسال الرسالة"}
                <Send className="w-5 h-5" />
              </Button>

              {status?.success && (
                <div className="p-4 bg-brand-green/20 border border-brand-green/30 text-brand-green rounded-2xl text-center font-medium">
                  {status.success}
                </div>
              )}

              {status?.error && (
                <div className="p-4 bg-brand-red/20 border border-brand-red/30 text-brand-red rounded-2xl text-center font-medium">
                  {status.error}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
      </div>
    </main>
  );
}
