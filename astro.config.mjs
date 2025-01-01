import { defineConfig } from 'astro/config';
import node from '@astrojs/node'; // Ganti dengan adapter yang sesuai
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify({
    edgeMiddleware: true
  }),
  adapter: node({ mode: 'standalone' }), // Konfigurasi adapter
});