import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  base: '/testing_pages/', // Replace with your repository name
  plugins: [vue(), vuetify()],
})
