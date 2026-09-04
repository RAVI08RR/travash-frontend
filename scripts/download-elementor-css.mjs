import https from 'https';
import fs from 'fs';

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(dest, data);
        console.log(`Downloaded ${url} -> ${dest} (${data.length} bytes)`);
        resolve(data);
      });
    }).on('error', reject);
  });
}

async function run() {
  await downloadFile('https://travash.com/wp-content/uploads/elementor/css/post-15125.css', 'scripts/post-15125.css');
  await downloadFile('https://travash.com/wp-content/uploads/elementor/css/local-15125-frontend-desktop.css', 'scripts/local-15125-desktop.css');
}

run();
