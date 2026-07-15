import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Vercel automatically sets process.env.VERCEL=1. Use "/" on Vercel, otherwise VITE_BASE_PATH or "/speecto_Clone" for GitHub Pages
  base: process.env.VERCEL ? "/" : (process.env.VITE_BASE_PATH || "/speecto_Clone"),
});