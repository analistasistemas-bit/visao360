import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      includeAssets: ['logo.jpeg', 'vite.svg'],
      devOptions: {
        enabled: true, // Garante que a PWA funcione durante o npm run dev
        type: 'module',
      },
      manifest: {
        name: 'Visão 360',
        short_name: 'Visão 360',
        description: 'Ebook: De Operacional a Estrategista em 90 dias',
        theme_color: '#0F172A', // text-slate-900 (primary)
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})
