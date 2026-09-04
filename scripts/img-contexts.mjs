import fs from 'fs';

const html = fs.readFileSync('scripts/live-page.html', 'utf8');

const imgRegex = /<img[^>]+(?:src|data-lazy-src)=["']([^"']+)["'][^>]*>/gi;
let match;
const seen = new Set();
while ((match = imgRegex.exec(html)) !== null) {
  const url = match[1];
  if (!url.startsWith('data:') && !seen.has(url)) {
    seen.add(url);
    const start = Math.max(0, match.index - 500);
    const end = Math.min(html.length, match.index + 500);
    const snippet = html.substring(start, end).replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '');
    const cleanText = snippet.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`\n========================================`);
    console.log(`IMG: ${url}`);
    console.log(`CONTEXT: ${cleanText.substring(0, 300)}`);
  }
}
