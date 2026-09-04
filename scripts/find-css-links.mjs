import fs from 'fs';

const html = fs.readFileSync('scripts/live-page.html', 'utf8');

const cssLinks = [...html.matchAll(/<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+)["']/gi)].map(m => m[1]);
console.log('Total external stylesheets:', cssLinks.length);
cssLinks.forEach((link, i) => {
  if (link.includes('elementor') || link.includes('post') || link.includes('custom')) {
    console.log(`[${i}] ${link}`);
  }
});
