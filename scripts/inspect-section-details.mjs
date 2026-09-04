import fs from 'fs';

const html = fs.readFileSync('scripts/live-page.html', 'utf8');
const css = fs.readFileSync('scripts/live-page-styles.css', 'utf8');

const containerIds = [
  '86e8ebf', // Hero
  '2ab0da5', // Problem
  '6ad87ff', // How Travash Solves It
  'f04eed6', // What We Build (Capabilities)
  'd723d67', // Process
  '1ee5639', // Case Studies
  '15c908f', // Engagement Models
  '9c85476', // Technologies header
  '169adfd', // Tech Cloud Platforms
  'ed2cedc', // Tech Containerization
  '5a14a85', // Tech CI/CD
  '9ba320f', // Tech Monitoring
  'd0a2994', // Tech Security
  '2280c75', // Why Global Leaders Trust Us
  '032f0e9', // What Technical Leaders Say
  'undefined-75d615c', // FAQ
  'b7b17d9'  // CTA Banner / Contact
];

containerIds.forEach(id => {
  const marker = `data-id="${id}"`;
  const idx = html.indexOf(marker);
  if (idx !== -1) {
    const start = html.lastIndexOf('<div', idx);
    // Find the matching close tag or next e-parent
    const nextParentIdx = html.indexOf('e-parent', idx + 100);
    const end = nextParentIdx !== -1 ? html.lastIndexOf('<div', nextParentIdx) : idx + 4000;
    const sectionHtml = html.substring(start, end);
    
    // Find CSS rules matching this id and its children
    const reg = new RegExp(`\\.elementor-element-${id}[^{]*\\{([^}]+)\\}`, 'gi');
    const rules = [];
    let m;
    while ((m = reg.exec(css)) !== null) {
      rules.push(m[0]);
    }
    
    console.log(`\n======================================================`);
    console.log(`CONTAINER ID: ${id}`);
    console.log(`CSS Rules for container:`, rules);
    
    // Extract child elementor elements
    const childElements = [...sectionHtml.matchAll(/class="([^"]*elementor-element-[a-z0-9]+[^"]*)"/gi)].map(m => {
      const elId = m[1].match(/elementor-element-([a-z0-9_-]+)/)?.[1];
      const type = m[1].match(/elementor-widget-([a-z0-9_-]+)/)?.[1] || (m[1].includes('e-con') ? 'container' : 'widget');
      return { elId, type, className: m[1] };
    });
    console.log(`Children count: ${childElements.length}`);
    childElements.slice(0, 8).forEach(c => {
      console.log(`  - Child [${c.elId}] (${c.type})`);
    });
  }
});
