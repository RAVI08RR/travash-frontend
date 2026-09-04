import fs from 'fs';

const html = fs.readFileSync('scripts/live-page.html', 'utf8');

// Find all data-element_type="section" or class="elementor-section"
const regex = /<section[^>]+class="([^"]*elementor-section[^"]*)"[^>]*>/gi;
let match;
let i = 0;
while ((match = regex.exec(html)) !== null) {
  i++;
  const startIdx = match.index;
  const snippet = html.substring(startIdx, startIdx + 3000);
  const headings = [...snippet.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(h => h[1].replace(/<[^>]+>/g, '').trim());
  const imgs = [...snippet.matchAll(/(?:src|data-lazy-src)=["']([^"']+)["']/gi)].map(m => m[1]).filter(u => u.includes('wp-content'));
  
  console.log(`\n=== SECTION ${i} ===`);
  console.log('Class:', match[1]);
  console.log('Headings:', headings);
  console.log('Images:', imgs);
}
