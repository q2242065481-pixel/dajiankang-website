import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.zhuoyue-health.example.cn', // 上线前替换为真实域名
  prefetch: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
