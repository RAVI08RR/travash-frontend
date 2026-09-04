import fs from 'fs';

const html = fs.readFileSync('scripts/live-page.html', 'utf8');

// Find all image attributes: src, data-src, data-lazy-src, srcset
const allImgs = [];
const imgTags = html.match(/<img[^>]+>/gi) || [];
for (const tag of imgTags) {
  const src = tag.match(/src=["']([^"']+)["']/i)?.[1];
  const dataSrc = tag.match(/data-src=["']([^"']+)["']/i)?.[1];
  const dataLazy = tag.match(/data-lazy-src=["']([^"']+)["']/i)?.[1];
  allImgs.push({ tag, src: dataSrc || dataLazy || src });
}

console.log('Real image sources from <img>:');
allImgs.forEach((img, i) => {
  if (img.src && !img.src.startsWith('data:')) {
    console.log(`[${i}] ${img.src}`);
  }
});

// Find CSS background images: background-image: url(...) or background: url(...)
const bgMatches = [...html.matchAll(/url\(['"]?([^'")]+)['"]?\)/gi)].map(m => m[1]);
const uniqueBgs = [...new Set(bgMatches)].filter(u => !u.startsWith('data:'));
console.log('\nBackground images in HTML:');
uniqueBgs.forEach((bg, i) => console.log(`[bg ${i}] ${bg}`));

// Let's inspect sections and elementor widgets
const sections = [...html.matchAll(/class=["']([^"']*(?:elementor-section|elementor-container|service|hero|process)[^"']*)["']/gi)]
  .map(m => m[1]);
console.log('\nSample Section Classes:', sections.slice(0, 15));
