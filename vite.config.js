import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: 'OrionUIComponents',
      fileName: () => `index.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lucide-react', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'LucideReact',
          'react-router-dom': 'ReactRouterDOM',
        },
      },
    },
  },
});
