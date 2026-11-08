/** @type {import('tailwindcss').Config} */
const token = (name) => `hsl(var(--${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        background: token("background"),
        foreground: token("foreground"),
        card: token("card"),
        panel: token("panel"),
        muted: token("muted"),
        "muted-foreground": token("muted-foreground"),
        border: token("border"),
        inverse: token("inverse"),
        "inverse-foreground": token("inverse-foreground"),
        brand: {
          blue: token("brand-blue"),
          "blue-hover": token("brand-blue-hover"),
          yellow: token("brand-yellow"),
          red: token("brand-red"),
          green: token("brand-green"),
          pink: token("brand-pink"),
        },
      },
      boxShadow: {
        "brutal-sm": "3px 2px 0 0 hsl(var(--shadow))",
        brutal: "6px 4px 0 0 hsl(var(--shadow))",
        "brutal-lg": "8px 6px 0 0 hsl(var(--shadow))",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
