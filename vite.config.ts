import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import routeHtmlPlugin from './vite-plugin-route-html'

export default defineConfig({
  base: '/',
  plugins: [react(), routeHtmlPlugin()],
})
