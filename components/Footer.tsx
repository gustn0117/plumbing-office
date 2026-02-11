import { Phone, Clock, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-950 pt-12 px-5 text-center md:pb-12 pb-24">
      <div className="max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-6">
          <div className="w-9 h-9 bg-brand-800/80 rounded-xl flex items-center justify-center">
            <svg
              className="w-4.5 h-4.5 text-brand-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
          <span className="text-white/60 font-bold text-base">
            배관<span className="text-brand-400/80">사무소</span>
          </span>
        </div>

        {/* Info chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06]">
            <Phone className="w-3.5 h-3.5 text-brand-400/60" />
            <span className="text-white/40 text-sm">010-0000-0000</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06]">
            <Clock className="w-3.5 h-3.5 text-brand-400/60" />
            <span className="text-white/40 text-sm">24시간 연중무휴</span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.06]">
            <MapPin className="w-3.5 h-3.5 text-brand-400/60" />
            <span className="text-white/40 text-sm">전국 출장 가능</span>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gradient mb-6" />

        {/* Copyright */}
        <div className="text-white/20 text-sm">
          <p>&copy; 2026 배관사무소. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
