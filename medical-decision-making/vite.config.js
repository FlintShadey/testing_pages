
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/testing_pages/', // Replace REPOSITORY_NAME with your GitHub repo name
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
