import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically updates the service worker
      manifest: {
        name: 'Groww Digitally',
        short_name: 'Groww Digitally',
        description: 'Helping different sectors grow with innovative digital solutions.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#36B7C3',
        icons: [
          {
            src: '/assets/images/logo.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable', // For maskable icons (like Android)
          },
          {
            src: '/assets/images/logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
