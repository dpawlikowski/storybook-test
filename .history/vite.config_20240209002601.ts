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
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        2️⃣
        chunkFileNames: 'assets/js/[name]-[hash].js',
        3️⃣
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    }
});
