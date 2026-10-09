import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'virtual:content': path.resolve(__dirname, './src/content/index.ts'),
      '@airo/content': path.resolve(__dirname, './src/content/content-lib.tsx'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
