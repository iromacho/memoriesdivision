import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Añade Poppins como la fuente sans por defecto
        // O como una clase separada:
        // poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [react(),tailwindcss()],
})
