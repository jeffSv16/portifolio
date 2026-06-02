import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages (projeto): /portifolio/
// Local: npm run dev usa base /
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
