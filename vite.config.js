import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Automatically use "/" for Vercel and local development, and "/speecto_Clone" when built on GitHub Actions for GitHub Pages
  base: process.env.VITE_BASE_PATH ?? (process.env.GITHUB_ACTIONS ? "/speecto_Clone" : "/"),
});