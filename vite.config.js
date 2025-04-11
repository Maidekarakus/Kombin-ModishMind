import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: "./",
  server: {
    port: 3000,
    historyApiFallback: true, // Çakışmayı önlemek için buraya ekleyin
  },
  build: {
    outDir: 'dist',
  },
  base: "/",
});