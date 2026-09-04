import fs from 'fs';

const html = fs.readFileSync('scripts/live-page.html', 'utf8');

// Search for top level sections in the main content
// Elementor usually has <section class="elementor-section ..."> or <div class="elementor-element ... e-con ...">
const sectionMatches = [...html.matchAll(/<(?:section|div)[^>]+class=["']([^"']*(?:elementor-top-section|e-con-parent|elementor-section)[^"']*)["'][^>]*>([\s\S]*?)<\/(?:section|div)>/gi)];

console.log(`Found ${sectionMatches.length} top sections`);

// Let's print out the text / heading inside each top section
sectionMatches.forEach((s, idx) => {
  const inner = s[2];
  const headings = [...inner.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(h => h[1].replace(/<[^>]+>/g, '').trim());
  const imgs = [...inner.matchAll(/<img[^>]+(?:src|data-lazy-src)=["']([^"']+)["']/gi)].map(m => m[1]);
  const bgStyle = s[0].match(/background(?:-color)?:[^;"]+/gi) || [];
  
  console.log(`\n--- SECTION ${idx + 1} ---`);
  console.log('Classes:', s[1].trim().split(/\s+/).slice(0, 5).join(' '));
  console.log('Headings:', headings);
  console.log('Images:', imgs.filter(i => !i.startsWith('data:')));
  console.log('Inline background style:', bgStyle);
});
