import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['framer-motion', 'react-intersection-observer', 'lucide-react']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animations': ['framer-motion']
        }
      }
    },
    sourcemap: true,
    assetsDir: 'assets',
    outDir: 'dist'
  },
  server: {
    fs: {
      strict: true
    }
  }
});