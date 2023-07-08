import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      '@choc-ui/logo': '@choc-ui/logo/dist/index.esm.js',
    },
  },
});
