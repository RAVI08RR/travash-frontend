import fs from 'fs';

const css = fs.readFileSync('scripts/post-15125.css', 'utf8');

const reg = /\.elementor-element-c21bcf6[^{]*\{([^}]+)\}/gi;
let m;
console.log('=== HERO BUTTONS c21bcf6 ===');
while ((m = reg.exec(css)) !== null) {
  console.log(m[0]);
}
