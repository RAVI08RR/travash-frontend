import fs from 'fs';

const css = fs.readFileSync('scripts/live-page-styles.css', 'utf8');

function findRules(id) {
  const reg = new RegExp(`\\.elementor-element-${id}[^\\{]*\\{([^\\}]+)\\}`, 'gi');
  let m;
  const res = [];
  while ((m = reg.exec(css)) !== null) {
    res.push(m[0]);
  }
  return res;
}

const ids = [
  '86e8ebf', '5977500', 'bb08654', '4bb68a1', 'c21bcf6', 'eb95f66', // hero
  '2ab0da5', 'b36bc7f', 'b5d2467', '9fa31d6', '1cf53fd', 'e321b30', '995ce30', // problem
  '6ad87ff', 'c80d4cb', 'd4a2a75', 'b736084', '49b0b2d', '383e7d6', '8ca4ad6', '95aa8ac', // solution
  'f04eed6', '5c2125a', 'fd3ca8f', '1d41a0d', 'fda9d15', '8dc33e8', // capabilities / services
  'd723d67', '6500200', // process
  '1ee5639', '4b5a69b', // case studies
  '15c908f', 'd9acae9', // engagement
  '9c85476', '169adfd', 'ed2cedc', '5a14a85', '9ba320f', 'd0a2994', // tech
  '2280c75', '7b5449f', 'd3e10f5', // trust
  '032f0e9', '13f0f0a', 'd08198b', // testimonial
  'undefined-75d615c', // faq
  'b7b17d9' // cta
];

ids.forEach(id => {
  const r = findRules(id);
  if (r.length > 0) {
    console.log(`\n=== ID ${id} ===`);
    r.forEach(rule => console.log(rule));
  }
});
