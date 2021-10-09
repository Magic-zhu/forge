import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '@core': path.resolve(__dirname, './src/core/'),
    '@components': path.resolve(__dirname, './src/components/'),
    '@models': path.resolve(__dirname, './src/models/'),
    '@utils': path.resolve(__dirname, './src/utils/'),
    '@': '/src/',
  },
});
