import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base:'/wamuseum/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 确保路径别名设置正确
    }
  },
  build:{
    outDir:'dist',
  }
})
