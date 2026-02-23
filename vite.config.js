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
        enabled: false, // Desabilitado para evitar interferência de cache no download de PDF
        type: 'module',
      },
      manifest: {
        name: 'Visão 360',
        short_name: 'Visão 360',
        description: 'Gestão Estratégica',
        start_url: '/',
        scope: '/',
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
