import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '@': '/src/',
    '@core': '/src/core/',
    '@components': '/src/components/',
    '@models': '/src/models/',
  },
});
