import fs from 'fs';

const html = fs.readFileSync('scripts/live-page.html', 'utf8');
const css = fs.readFileSync('scripts/live-page-styles.css', 'utf8');

// Function to find CSS rule for an elementor class or id
function getCssFor(selector) {
  const reg = new RegExp(`(?:\\.|#)${selector}[^{]*\\{([^}]+)\\}`, 'gi');
  const matches = [];
  let m;
  while ((m = reg.exec(css)) !== null) {
    matches.push(m[0]);
  }
  return matches;
}

// Inspect the main content containers
// In Elementor, top-level containers have class "e-parent"
const parentContainers = [...html.matchAll(/<div[^>]+class="([^"]*e-parent[^"]*)"[^>]*>/gi)];
console.log(`Found ${parentContainers.length} e-parent containers:`);

parentContainers.forEach((c, i) => {
  const start = c.index;
  // find container id: data-id="xyz"
  const dataId = c[0].match(/data-id="([^"]+)"/)?.[1];
  const className = c[1];
  const snippet = html.substring(start, start + 2500).replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '');
  const headings = [...snippet.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi)].map(h => h[1].replace(/<[^>]+>/g, '').trim());
  const btns = [...snippet.matchAll(/<a[^>]+class="[^"]*(?:elementor-button|btn|button)[^"]*"[^>]*>([\s\S]*?)<\/a>/gi)].map(b => b[1].replace(/<[^>]+>/g, '').trim());
  const imgs = [...snippet.matchAll(/(?:bv-data-src|src)=["']([^"']+\.(?:webp|png|jpg|jpeg|svg)[^"']*)["']/gi)].map(m => m[1]).filter(u => !u.startsWith('data:'));

  console.log(`\n=================== CONTAINER ${i+1} (data-id: ${dataId}) ===================`);
  console.log('Headings:', headings);
  console.log('Buttons:', btns);
  console.log('Images:', imgs);
  
  // Find background colors in CSS
  if (dataId) {
    const rules = getCssFor(`elementor-element-${dataId}`);
    if (rules.length) {
      console.log('CSS rules:', rules.slice(0, 3));
    }
  }
});
