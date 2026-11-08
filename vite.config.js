import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://tahir-3.github.io/tahir-portfolio/ on GitHub Pages.
// Override with BASE_PATH=/ when deploying to a root domain.
export default defineConfig({
  base: process.env.BASE_PATH ?? "/tahir-portfolio/",
  plugins: [react()],
});
