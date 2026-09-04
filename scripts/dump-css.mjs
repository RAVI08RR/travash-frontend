import fs from 'fs';

const html = fs.readFileSync('scripts/live-page.html', 'utf8');

// Extract elementor inline css or style tags to see colors, typography, background colors
const styles = [...html.matchAll(/<style id="elementor-post-15125">([\s\S]*?)<\/style>/gi)].map(m => m[1]);
if (styles.length > 0) {
  fs.writeFileSync('scripts/live-page-styles.css', styles[0]);
  console.log('Saved elementor-post-15125 styles, length:', styles[0].length);
} else {
  // Try all style tags
  const allStyles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map(m => m[1]).join('\n');
  fs.writeFileSync('scripts/live-page-styles.css', allStyles);
  console.log('Saved all styles, length:', allStyles.length);
}

// Let's print out the exact text and structure of each container in main content
// Let's search for the container that holds the content
const mainContentIdx = html.indexOf('Stop Drowning in Data');
console.log('Hero start index:', mainContentIdx);
