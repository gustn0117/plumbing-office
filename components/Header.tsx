"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const PHONE = "010-4111-6977";

const navItems = [
  { label: "서비스", href: "#services" },
  { label: "진행절차", href: "#process" },
  { label: "고객후기", href: "#reviews" },
  { label: "상담하기", href: `tel:${PHONE}` },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04),0_8px_30px_rgba(0,0,0,0.04)] border-b border-gray-100/60 py-2.5"
            : "bg-transparent py-5"
        }`}
        style={{ transition: "padding 0.2s ease, background-color 0.2s ease" }}
      >
        <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
          <a href="#" className="flex items-center group">
            <div>
              <div
                className={`text-lg font-black tracking-tight ${
                  scrolled ? "text-brand-800" : "text-white"
                }`}
                style={{ transition: "color 0.2s ease" }}
              >
                배관<span className={`text-sparkle ${scrolled ? "text-brand-500" : "text-gold-400"}`}>사무소</span>
              </div>
              <div
                className={`text-[9px] tracking-[3px] font-medium ${
                  scrolled ? "text-gray-400" : "text-white/50"
                }`}
                style={{ transition: "color 0.2s ease" }}
              >
                PLUMBING OFFICE
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                  scrolled
                    ? "text-gray-500 hover:text-brand-500 hover:bg-brand-50"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`tel:${PHONE}`}
              className="ml-4 inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-transform duration-200 shimmer-sweep"
              style={{
                background: "linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",
                boxShadow: "0 4px 20px rgba(231,76,60,0.3), 0 0 0 1px rgba(231,76,60,0.1)",
              }}
            >
              <Phone className="w-4 h-4" />
              <span className="text-sparkle">긴급상담</span>
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2.5 rounded-xl ${
              scrolled ? "text-brand-800" : "text-white"
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-brand-950/95 pt-24 px-6">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-white text-2xl font-bold py-5 border-b border-white/[0.06] hover:text-gold-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-10 flex flex-col gap-3">
            <a href={`tel:${PHONE}`} className="btn-primary justify-center text-base">
              <Phone className="w-5 h-5" /> 전화상담
            </a>
            <a href={`sms:${PHONE}`} className="btn-outline justify-center text-base">
              <MessageCircle className="w-5 h-5" /> 문자상담
            </a>
          </div>
        </div>
      )}
    </>
  );
}
