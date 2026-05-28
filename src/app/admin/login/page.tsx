"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/app/actions/auth";
import { Lock, Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await loginAdmin(password);

      if (result.error) {
        setError(result.error);
        setLoading(false);
        return;
      }

      router.push("/admin");
      router.refresh();
    } catch {
      setError("حدث خطأ غير متوقع");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-red/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-brand-yellow/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-brand-red/20 blur-[40px] rounded-full animate-pulse" />
            <img
              src="/logo.png"
              alt="Hot Spicy Logo"
              className="relative w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,77,0,0.4)]"
            />
          </div>
          <h1 className="text-3xl font-black text-white mb-2">لوحة التحكم</h1>
          <p className="text-white/40 text-sm">أدخل رمز الدخول للمتابعة</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6 shadow-2xl">
            {/* Password Field */}
            <div className="space-y-3">
              <label className="text-sm font-bold text-white/70 block">
                رمز الدخول
              </label>
              <div className="relative">
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pr-12 pl-12 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-red/50 focus:ring-2 focus:ring-brand-red/20 transition-all text-lg tracking-widest"
                  required
                  autoFocus
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm text-center animate-in fade-in slide-in-from-top-2 duration-300">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full bg-gradient-to-l from-brand-red to-red-700 hover:from-red-700 hover:to-brand-red text-white font-bold py-4 rounded-2xl transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(230,57,70,0.4)] hover:scale-[1.02] active:scale-[0.98] text-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  جاري التحقق...
                </span>
              ) : (
                "دخول"
              )}
            </button>
          </div>
        </form>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-white/30 hover:text-white/60 text-sm inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            العودة للموقع
          </Link>
        </div>
      </div>
    </div>
  );
}
