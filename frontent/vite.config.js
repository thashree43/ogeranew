// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: './postcss.config.js', // Ensure the correct path to your postcss config file
  },
});
