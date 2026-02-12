"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, Headset } from "lucide-react";

const PHONE = "010-4111-6977";

export default function FloatingCta() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating buttons */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-8 right-8 z-50 hidden md:block"
          >
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.div
                  key="expanded"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-2.5 items-end"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setExpanded(false)}
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white/60 flex items-center justify-center hover:bg-white/20 transition-colors mb-1"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  {/* Phone CTA */}
                  <a
                    href={`tel:${PHONE}`}
                    className="group flex items-center gap-3 text-white pl-5 pr-6 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                    style={{
                      background:
                        "linear-gradient(145deg, #0369a1 0%, #075985 50%, #0c4a6e 100%)",
                      boxShadow:
                        "0 10px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/15 transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-sm leading-none mb-0.5">
                        전화상담
                      </p>
                      <p className="text-white/70 text-xs">{PHONE}</p>
                    </div>
                  </a>

                  {/* SMS CTA */}
                  <a
                    href={`sms:${PHONE}`}
                    className="group flex items-center gap-3 text-white pl-5 pr-6 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                    style={{
                      background:
                        "linear-gradient(145deg, #38bdf8 0%, #0ea5e9 50%, #0284c7 100%)",
                      boxShadow:
                        "0 10px 40px rgba(14,165,233,0.25), inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/15 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-sm leading-none mb-0.5">
                        문자상담
                      </p>
                      <p className="text-white/70 text-xs">빠른 답변</p>
                    </div>
                  </a>
                </motion.div>
              ) : (
                <motion.button
                  key="collapsed"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setExpanded(true)}
                  className="group relative w-14 h-14 rounded-2xl text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                  style={{
                    transition: "transform 0.3s, filter 0.3s",
                    animation: "btnColorShift 1.5s ease-in-out infinite",
                  }}
                >
                  <Headset className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-brand-950 animate-pulse-slow" />
                  <span className="absolute -inset-1 rounded-2xl border-2 border-danger-500/20 animate-pulse-slow" />
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom bar */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-50 md:hidden safe-area-bottom"
            style={{
              animation: "btnColorShift 1.5s ease-in-out infinite",
              boxShadow: "0 -4px 20px rgba(0,0,0,0.2)",
            }}
          >
            <div className="flex items-center">
              <a
                href={`tel:${PHONE}`}
                className="flex-1 flex items-center justify-center gap-2 py-4 px-4 text-white font-bold text-base sm:text-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sparkle">긴급상담</span> <span className="sparkle-intense">{PHONE}</span>
              </a>
              <div className="w-px h-6 bg-white/20" />
              <a
                href={`sms:${PHONE}`}
                className="flex items-center justify-center py-4 px-5 text-white/90"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
