import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 将 '@' 指向 'src' 目录
      'components': path.resolve(__dirname, 'src/components'), // 将 'components' 指向 'src/components' 目录
    }
  }
})
