import path from "path";
import { defineConfig } from "vite";
import ViteRestart from "vite-plugin-restart";

export default defineConfig({
  plugins: [
    ViteRestart({
      restart: ".vitepress/config/*.*",
    }),
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./')
    }
  },
 
});
