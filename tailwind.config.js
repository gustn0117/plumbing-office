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
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcdaff",
          300: "#8ec3ff",
          400: "#59a1ff",
          500: "#2980b9",
          600: "#1a6da6",
          700: "#155a8a",
          800: "#1a3a5c",
          900: "#0d1b2a",
          950: "#060e18",
        },
        gold: {
          300: "#fcd34d",
          400: "#f1c40f",
          500: "#eab308",
          600: "#ca8a04",
        },
        danger: {
          500: "#e74c3c",
          600: "#c0392b",
        },
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', "sans-serif"],
        display: ['"Noto Sans KR"', "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #f0f4f8 0%, #e8eef5 100%)",
        "dark-gradient": "linear-gradient(180deg, #0d1b2a 0%, #1a2a3a 50%, #0d1b2a 100%)",
        "cta-gradient": "linear-gradient(135deg, #1a3a5c 0%, #0d1b2a 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "count-up": "countUp 2s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "glow": "glow 2s ease-in-out infinite alternate",
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
          "0%": { boxShadow: "0 0 20px rgba(41,128,185,0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(41,128,185,0.6)" },
        },
      },
    },
  },
  plugins: [],
};
