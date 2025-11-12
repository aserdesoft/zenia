import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimización del bundle
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom']
        }
      }
    },
    // Habilitar minificación
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.logs en producción
        drop_debugger: true
      }
    },
    // Optimizar tamaño de chunks
    chunkSizeWarningLimit: 1000,
    // Source maps solo en desarrollo
    sourcemap: false
  },
  // Optimización de imágenes
  assetsInlineLimit: 4096, // 4KB - inline assets pequeños
})
