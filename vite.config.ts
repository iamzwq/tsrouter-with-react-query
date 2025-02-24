import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: env.VITE_BASE_URL,
    plugins: [react(), tailwindcss(), TanStackRouterVite({ autoCodeSplitting: true })],
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      port: 9000,
      open: true,
    },
    build: {
      minify: 'terser',
      rollupOptions: {
        output: {
          compact: true,
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]',
          manualChunks: {
            react: [
              'react',
              'react-dom',
              'react-hook-form',
              '@tanstack/react-router',
              '@tanstack/react-query',
              // 'jotai',
            ],
            mui: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
            // vendor: ["dayjs"],
          },
        },
      },
    },
  };
});
