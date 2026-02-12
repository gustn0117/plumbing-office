/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        gold: {
          300: "#fcd34d",
          400: "#f1c40f",
          500: "#eab308",
          600: "#ca8a04",
        },
        danger: {
          400: "#f87171",
          500: "#e74c3c",
          600: "#c0392b",
        },
      },
      fontFamily: {
        sans: ["'Cafe24Ssurround'", '-apple-system', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        "dark-gradient":
          "linear-gradient(180deg, #0284c7 0%, #0369a1 50%, #0284c7 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #0c6a94 100%)",
        "premium-mesh":
          "radial-gradient(at 40% 20%, rgba(14,165,233,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(241,196,15,0.05) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(14,165,233,0.05) 0px, transparent 50%)",
        "mesh-vivid":
          "radial-gradient(at 20% 30%, rgba(14,165,233,0.12) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(241,196,15,0.08) 0px, transparent 50%), radial-gradient(at 50% 80%, rgba(231,76,60,0.06) 0px, transparent 50%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        glow: "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 12s linear infinite",
        gradient: "gradient 8s ease infinite",
        "border-flow": "borderFlow 3s ease infinite",
        shine: "shine 2s ease-in-out infinite",
        "scale-in": "scaleIn 0.3s ease-out",
        "float-slow": "float 8s ease-in-out infinite",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(14,165,233,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(14,165,233,0.6)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        borderFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shine: {
          "0%": { left: "-100%" },
          "50%, 100%": { left: "100%" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(14,165,233,0.25)",
        "glow-lg": "0 0 60px rgba(14,165,233,0.35), 0 0 120px rgba(14,165,233,0.15)",
        "glow-gold": "0 0 40px rgba(241,196,15,0.25)",
        "glow-gold-lg": "0 0 60px rgba(241,196,15,0.35), 0 0 120px rgba(241,196,15,0.15)",
        "glow-danger": "0 0 40px rgba(231,76,60,0.25)",
        "glow-danger-lg": "0 0 60px rgba(231,76,60,0.35), 0 0 120px rgba(231,76,60,0.15)",
        premium:
          "0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05)",
        "premium-lg":
          "0 35px 70px -15px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.08)",
        "inner-glow":
          "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 50px -10px rgba(0,0,0,0.2)",
        "card-hover":
          "0 25px 50px -12px rgba(14,165,233,0.15), 0 10px 20px -5px rgba(0,0,0,0.08)",
        elevated:
          "0 4px 6px -1px rgba(0,0,0,0.05), 0 10px 15px -3px rgba(0,0,0,0.08), 0 20px 25px -5px rgba(0,0,0,0.04)",
        "dramatic":
          "0 30px 60px -15px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.05), 0 0 40px rgba(14,165,233,0.1)",
      },
    },
  },
  plugins: [],
};
