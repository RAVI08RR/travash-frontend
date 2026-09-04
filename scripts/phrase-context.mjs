import fs from 'fs';

const html = fs.readFileSync('scripts/live-page.html', 'utf8');

const keyPhrases = [
  'Stop Drowning in Data',
  'Having terabytes of data means nothing',
  'You are making critical decisions',
  'How Travash Solves It',
  'Our Data & Analytics Services',
  'Data Engineering',
  'Business Intelligence',
  'Our Infrastructure Engineering Process',
  'Cloud & DevOps Case Studies',
  'Flexible Engagement Models',
  'The Technologies We Command',
  'Why Global Leaders Trust Us',
  'What Technical Leaders Say',
  'Frequently Asked Questions',
  'Ready to build infrastructure'
];

keyPhrases.forEach(phrase => {
  const idx = html.indexOf(phrase);
  if (idx !== -1) {
    const context = html.substring(Math.max(0, idx - 400), Math.min(html.length, idx + 800));
    console.log(`\n=================== PHRASE: ${phrase} ===================`);
    // Extract nearest enclosing tags and classes
    const tagMatch = context.match(/<([a-z0-9]+)[^>]*class=["']([^"']+)["'][^>]*>/gi);
    console.log('Nearby tags/classes:', tagMatch?.slice(-5));
    // Check if there are images in this context
    const imgs = [...context.matchAll(/https?:\/\/[^\s"'<>]+\.(?:webp|png|jpg|jpeg|svg)/gi)].map(m => m[0]);
    console.log('Images nearby:', imgs);
  }
});
