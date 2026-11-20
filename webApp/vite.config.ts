import { defineConfig, createLogger } from 'vite';
import react from '@vitejs/plugin-react';

const logger = createLogger();
const originalWarn = logger.warn.bind(logger);
const originalWarnOnce = logger.warnOnce.bind(logger);

logger.warn = (msg, options) => {
  if (typeof msg === 'string' && msg.includes('points to missing source files')) return;
  originalWarn(msg, options);
};

logger.warnOnce = (msg, options) => {
  if (typeof msg === 'string' && msg.includes('points to missing source files')) return;
  originalWarnOnce(msg, options);
};

export default defineConfig({
  root: '.',
  plugins: [react()],
  customLogger: logger,
  optimizeDeps: {
    exclude: ['sharedLogic'],
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://www.omdbapi.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
