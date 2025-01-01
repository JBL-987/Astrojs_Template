import { defineConfig } from 'astro/config';
import node from '@astrojs/node'; // Ganti dengan adapter yang sesuai

export default defineConfig({
  output: 'static',
  adapter: node({ mode: 'standalone' }), // Konfigurasi adapter
});