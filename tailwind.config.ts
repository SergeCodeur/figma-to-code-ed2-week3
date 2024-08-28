import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "tokena-white": "hsl(var(--tokena-white))",
        "tokena-light-gray": "hsl(var(--tokena-light-gray))",
        "tokena-gray": "hsl(var(--tokena-gray))",
        "tokena-dark": "hsl(var(--tokena-dark))",
        "tokena-dark-2": "hsl(var(--tokena-dark-2))",
        "tokena-red": "hsl(var(--tokena-red))",
        "tokena-green": "hsl(var(--tokena-green))",
        "tokena-yellow": "hsl(var(--tokena-yellow))",
        "tokena-dark-gray": "hsl(var(--tokena-dark-gray))",
        "tokena-blue": "hsl(var(--tokena-blue))",
        "tokena-dark-blue-1": "hsl(var(--tokena-dark-blue-1))",
        "tokena-dark-blue-2": "hsl(var(--tokena-dark-blue-2))",
        "trick-chart-1": "hsl(var(--trick-chart-1))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        mona: ["var(--font-mona)"],
      },
      fontSize: {
        xxs: [
          "10px",
          {
            lineHeight: "12px",
          },
        ],
      },
      borderRadius: {
        xxl: "12px",
        xl: "10px",
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      screens: {
        xs: "375px",
        xxl: "1360px",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
