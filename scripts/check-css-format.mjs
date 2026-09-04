import fs from 'fs';

const css = fs.readFileSync('scripts/live-page-styles.css', 'utf8');

const matches = css.match(/[^{}]*86e8ebf[^{]*\{[^}]+\}/gi);
console.log('Matches for 86e8ebf:', matches);

// Check what IDs exist in css
const anyElementorElement = [...css.matchAll(/\.elementor-element-([a-z0-9]+)/gi)].map(m => m[1]);
console.log('Total elementor-element classes in CSS:', anyElementorElement.length);
console.log('Sample IDs in CSS:', anyElementorElement.slice(0, 20));
