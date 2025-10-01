import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
        proxy: {
          '/api': {
            target: 'http://localhost:5243', // Your backend URL
            changeOrigin: true, // Needed for virtual hosts
            rewrite: (path) => path.replace(/^\/api/, ''), // Remove /api prefix
          },
        },
      },
})
