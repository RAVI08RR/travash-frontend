import fs from 'fs';

const html = fs.readFileSync('scripts/live-page.html', 'utf8');

['critical.webp', 'Eradicate.webp', 'analytics.webp'].forEach(imgName => {
  let idx = 0;
  while ((idx = html.indexOf(imgName, idx)) !== -1) {
    const start = Math.max(0, idx - 400);
    const end = Math.min(html.length, idx + 400);
    const snippet = html.substring(start, end);
    console.log(`\n=================== [${imgName}] ===================`);
    console.log(snippet.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, ''));
    idx += imgName.length;
  }
});
