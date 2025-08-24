import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/ibm-coursera-plants-shop/",
  plugins: [react()],
})
