import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const PORT = process.env.PORT;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:${PORT}'
    }
  }
})
