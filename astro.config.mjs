// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare'; // import the Cloudflare adapter

export default defineConfig({
  output: 'server',      // needed for server-rendered pages
  adapter: cloudflare(), // configure the adapter
});
