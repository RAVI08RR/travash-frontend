import fs from 'fs';

const css = fs.readFileSync('scripts/post-15125.css', 'utf8');

function getRules(selector) {
  const reg = new RegExp(`\\.elementor-element-${selector}[^{]*\\{([^}]+)\\}`, 'gi');
  let m;
  const res = [];
  while ((m = reg.exec(css)) !== null) {
    res.push(m[0]);
  }
  return res;
}

const sectionMap = {
  'Hero': ['86e8ebf', '5977500', 'bb08654', '4bb68a1', 'c21bcf6'],
  'Problem': ['2ab0da5', 'b36bc7f', 'b5d2467', '9fa31d6', '1cf53fd', '995ce30'],
  'How Travash Solves It': ['6ad87ff', 'c80d4cb', 'd4a2a75', 'b736084', '49b0b2d', '383e7d6', '8ca4ad6', '95aa8ac'],
  'What We Build (Capabilities)': ['f04eed6', '5c2125a', 'fd3ca8f', '1d41a0d', 'fda9d15', '8dc33e8'],
  'Process Timeline': ['d723d67', '9c5e41b', 'b32a1a0', '34fa5a9', '6500200'],
  'Case Studies': ['1ee5639', '1853313', '7bc9799', '4b5a69b'],
  'Engagement Models': ['15c908f', 'e5271ca', 'e52c3c9', 'd9acae9', '8bf0995', '827e7af', '4a027f7'],
  'Technologies': ['9c85476', '3526ff4', '169adfd', 'ed2cedc', '5a14a85', '9ba320f', 'd0a2994'],
  'Trust Leaders': ['2280c75', '7b5449f', 'd3e10f5']
};

for (const [secName, ids] of Object.entries(sectionMap)) {
  console.log(`\n======================================================`);
  console.log(`SECTION: ${secName}`);
  ids.forEach(id => {
    const rules = getRules(id);
    if (rules.length) {
      console.log(`--- Rules for [${id}] ---`);
      rules.forEach(r => console.log(r));
    }
  });
}
