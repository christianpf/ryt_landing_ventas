import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ryt_landing_ventas/',
  plugins: [react()],
  server: {
    host:true,
  },
})

