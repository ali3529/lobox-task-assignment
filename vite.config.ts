import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/lobox-task-assignment/",
  resolve: {
    alias: {
      "@styles": "/src/styles",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@shared": "/src/shared",
      "@constants": "/src/constants",
    },
  },
});
