/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "primary-dark": "#1e40af",
        "primary-light": "#3b82f6",
        background: "#020617",
        "bg-secondary": "#111827",
        "bg-tertiary": "#1f2937",
        accent: "#38BDF8",
        "accent-dark": "#0ea5e9",
        "text-primary": "#ffffff",
        "text-secondary": "#d1d5db",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        "slide-down": "slideDown 0.6s ease-out",
        "slide-left": "slideLeft 0.6s ease-out",
        "slide-right": "slideRight 0.6s ease-out",
        "zoom-in": "zoomIn 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideDown: {
          from: {
            opacity: "0",
            transform: "translateY(-40px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideLeft: {
          from: {
            opacity: "0",
            transform: "translateX(40px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        slideRight: {
          from: {
            opacity: "0",
            transform: "translateX(-40px)",
          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        zoomIn: {
          from: {
            opacity: "0",
            transform: "scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
          },
          "50%": {
            boxShadow: "0 0 40px rgba(37, 99, 235, 0.8)",
          },
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)",
        "gradient-dark": "linear-gradient(135deg, #020617 0%, #111827 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(37, 99, 235, 0.3)",
        "glow-lg": "0 0 40px rgba(37, 99, 235, 0.5)",
      },
    },
  },
  plugins: [],
};
