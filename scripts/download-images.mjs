import https from 'https';
import fs from 'fs';
import path from 'path';

const imagesToDownload = [
  { url: 'https://travash.com/wp-content/uploads/2026/08/Stop-drowning.webp', file: 'hero-bg.webp' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/critical.webp', file: 'critical.webp' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/Eradicate.webp', file: 'eradicate.webp' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/analytics.webp', file: 'analytics.webp' },
  { url: 'https://travash.com/wp-content/uploads/2025/05/Group-1000003149.svg', file: 'process-icon.svg' },
  { url: 'https://travash.com/wp-content/uploads/2025/04/Darpan-1.webp', file: 'darpan.webp' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/i4c-1.png', file: 'i4c.png' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/dinedesk.png', file: 'dinedesk.png' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/custom-software.webp', file: 'engagement-bg.webp' },
  { url: 'https://travash.com/wp-content/uploads/2025/03/Boosting.svg', file: 'boosting.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/aws.svg', file: 'aws.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/azure.svg', file: 'azure.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/Google-Cloud.svg', file: 'google-cloud.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/docker.svg', file: 'docker.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/kubernetes.svg', file: 'kubernetes.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/Jenkins.svg', file: 'jenkins.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/GitLab.svg', file: 'gitlab.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/Ansible-1.svg', file: 'ansible.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/HashiCorp-Terraform.svg', file: 'terraform.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/DataGrip.svg', file: 'datagrip.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/Prometheus.svg', file: 'prometheus.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/Grafana.svg', file: 'grafana.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/Cloudflare.svg', file: 'cloudflare.svg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/Global-Leaders.webp', file: 'global-leaders.webp' },
  { url: 'https://travash.com/wp-content/uploads/al_opt_content/IMAGE/travash.com/wp-content/uploads/2025/03/1685959343RD408.jpeg', file: 'testimonial-avatar.jpeg' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/image.webp', file: 'cta-bg.webp' },
  { url: 'https://travash.com/wp-content/uploads/2026/08/I4C-Bank-Portal-300x274.png', file: 'i4c-portal.png' }
];

const targetDir = path.resolve('public/images/services');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.warn(`Failed: ${url} (status: ${res.statusCode})`);
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
  for (const item of imagesToDownload) {
    const dest = path.join(targetDir, item.file);
    await download(item.url, dest);
  }
  console.log('All downloads completed!');
}

run();
