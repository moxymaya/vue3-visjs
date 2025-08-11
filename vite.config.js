// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue' // <-- Make sure this is here
import path from 'path'

export default defineConfig({
  plugins: [vue()], // <-- And here
  test: {
    // Your Vitest configurations
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 Add your alias here
    },
  },
})
