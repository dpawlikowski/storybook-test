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
        assetFileNames: `[name][extname]`,

        chunkFileNames: "[name].js",

        entryFileNames: "[name].js",
      },
    },
  },
});
