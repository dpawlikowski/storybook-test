import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".mjs", ".mdx"],
  },
  build: {
    rollupOptions: {
      output: {
        1️⃣
        assetFileNames: `[name][extname]`
        2️⃣
        chunkFileNames: '[name].js',
        3️⃣
        entryFileNames: '[name].js',
      },
    }
});
