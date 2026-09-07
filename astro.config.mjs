import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zhuoyue-health.edgeone.app', // 部署成功后替换为 EdgeOne 分配的子域名
  output: 'static', // 纯静态导出，EdgeOne Pages 直接部署 dist/
  prefetch: true,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
