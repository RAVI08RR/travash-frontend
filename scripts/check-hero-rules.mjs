import fs from 'fs';

const css = fs.readFileSync('scripts/post-15125.css', 'utf8');

['86e8ebf', '2ab0da5', '6ad87ff', 'f04eed6'].forEach(id => {
  const reg = new RegExp(`\\.elementor-element-${id}[^\\{]*\\{([^\\}]+)\\}`, 'gi');
  let m;
  console.log(`\n=== RULES FOR ${id} ===`);
  while ((m = reg.exec(css)) !== null) {
    console.log(m[0]);
  }
});
