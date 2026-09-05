import fs from 'fs';
import path from 'path';
import https from 'https';

const portfolioJsonPath = path.resolve('migration/portfolio/portfolio.json');
const targetDir = path.resolve('public/images/portfolio');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadImage(url, dest) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.warn(`Failed (${res.statusCode}): ${url}`);
        return resolve(false);
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Saved: ${dest}`);
        resolve(true);
      });
    }).on('error', (err) => {
      console.warn(`Error on ${url}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  const content = fs.readFileSync(portfolioJsonPath, 'utf8');
  const items = JSON.parse(content);
  console.log(`Loaded ${items.length} items from portfolio.json`);

  const results = [];
  for (const item of items) {
    if (item.slug && item.featuredImageUrl) {
      const ext = path.extname(new URL(item.featuredImageUrl).pathname) || '.png';
      const filename = `${item.slug}${ext}`;
      const destPath = path.join(targetDir, filename);
      console.log(`Downloading ${item.slug} -> ${item.featuredImageUrl}`);
      await downloadImage(item.featuredImageUrl, destPath);
      results.push({
        slug: item.slug,
        title: item.title,
        featuredImageUrl: item.featuredImageUrl,
        localPath: `/images/portfolio/${filename}`
      });
    }
  }

  fs.writeFileSync(
    path.resolve('public/images/portfolio/manifest.json'),
    JSON.stringify(results, null, 2),
    'utf8'
  );
  console.log('Finished downloading all live portfolio thumbnails!');
}

run().catch(console.error);
