import fs from 'fs';

const html = fs.readFileSync('scripts/live-page.html', 'utf8');

const targetImages = [
  'critical.webp',
  'Eradicate.webp',
  'analytics.webp',
  'Group-1000003149.svg',
  'Darpan-1.webp',
  'i4c-1.png',
  'dinedesk.png',
  'Boosting.svg',
  'aws.svg',
  'azure.svg',
  'Google-Cloud.svg',
  'docker.svg',
  'kubernetes.svg',
  'Jenkins.svg',
  'GitLab.svg',
  'Ansible-1.svg',
  'HashiCorp-Terraform.svg',
  'DataGrip.svg',
  'Prometheus.svg',
  'Grafana.svg',
  'Cloudflare.svg',
  'I4C-Bank-Portal-300x274.png',
  '1685959343RD408.jpeg'
];

targetImages.forEach(imgName => {
  let idx = 0;
  while ((idx = html.indexOf(imgName, idx)) !== -1) {
    const start = Math.max(0, idx - 300);
    const end = Math.min(html.length, idx + 300);
    const snippet = html.substring(start, end).replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<script[\s\S]*?<\/script>/gi, '');
    const clean = snippet.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`\n=================== [${imgName}] at index ${idx} ===================`);
    console.log(clean);
    idx += imgName.length;
  }
});
