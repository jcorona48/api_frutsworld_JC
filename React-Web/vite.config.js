import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Habilitar la detección de cambios en la carpeta raíz del proyecto
      // para reiniciar el servidor automáticamente
      usePolling: true,
      interval: 100,
    },
  }
})
