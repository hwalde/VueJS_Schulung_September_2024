import { defineConfig } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
// import vuetify from 'vite-plugin-vuetify'
// import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()/*, vuetify({ autoImport: true })*/],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080', // Your Spring Boot backend URL
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './vitest.setup.ts',
  //   exclude: [...configDefaults.exclude, '**/e2e/**'],
  // },
})
