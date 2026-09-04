import https from 'https';
import fs from 'fs';

https.get('https://travash.com/data-analytics-solutions/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scripts/live-page.html', data);
    console.log('Saved HTML, size:', data.length);
    
    // Find all images
    const imgRegex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    let match;
    const images = [];
    while ((match = imgRegex.exec(data)) !== null) {
      images.push({ tag: match[0], src: match[1] });
    }
    console.log(`Total images: ${images.length}`);
    images.forEach((img, i) => {
      console.log(`[${i}] ${img.src}`);
    });

    // Find main structure headings and text
    const h1Matches = data.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi);
    console.log('H1:', h1Matches);

    const h2Matches = data.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi);
    console.log('H2:', h2Matches);

    const h3Matches = data.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi);
    console.log('H3:', h3Matches?.slice(0, 10));
  });
}).on('error', (err) => {
  console.error('Error fetching page:', err);
});
