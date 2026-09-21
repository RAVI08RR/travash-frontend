import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const ALLOWED_SLUGS = [
  'pekt',
  'satyapaan',
  'direct-owners',
  'ugo',
  'indispare',
  'i4c-bank-portal',
  'dovehouse',
  'skipr',
  'darpan',
  'i-verify',
  'dine-desk',
];

async function run() {
  console.log('Updating Sanity CMS portfolio visibility for 11 case studies...\n');

  const allCaseStudies = await client.fetch(`*[_type == "caseStudy"]{ _id, title, "slug": slug.current, portfolioVisible, portfolioOrder }`);
  console.log(`Found ${allCaseStudies.length} case study documents in Sanity.\n`);

  for (const cs of allCaseStudies) {
    if (cs._id.startsWith('drafts.')) continue;

    const slug = (cs.slug || '').toLowerCase().trim();
    let orderIdx = ALLOWED_SLUGS.indexOf(slug);
    if (orderIdx === -1 && slug === 'i4c') orderIdx = ALLOWED_SLUGS.indexOf('i4c-bank-portal');
    if (orderIdx === -1 && slug === 'dinedesk') orderIdx = ALLOWED_SLUGS.indexOf('dine-desk');

    const isVisible = orderIdx !== -1;
    const portfolioOrder = isVisible ? orderIdx + 1 : 999;

    console.log(`Updating ${cs._id} (slug: "${slug}") => portfolioVisible: ${isVisible}, portfolioOrder: ${portfolioOrder}`);

    // Patch published document
    await client.patch(cs._id).set({ portfolioVisible: isVisible, portfolioOrder }).commit();

    // Patch draft document if it exists
    const draftId = `drafts.${cs._id}`;
    try {
      const draftDoc = await client.getDocument(draftId);
      if (draftDoc) {
        await client.patch(draftId).set({ portfolioVisible: isVisible, portfolioOrder }).commit();
      }
    } catch {
      // ignore draft errors
    }
  }

  console.log('\n=== SANITY PORTFOLIO VISIBILITY SUMMARY ===');
  const activeDocs = await client.fetch(`*[_type == "caseStudy" && !(_id match "drafts.*") && coalesce(portfolioVisible, true) == true] | order(portfolioOrder asc) { _id, title, "slug": slug.current, portfolioOrder }`);
  console.log(`Active visible case studies in Sanity (${activeDocs.length}):`);
  activeDocs.forEach((d, i) => {
    console.log(`${i + 1}. [Order ${d.portfolioOrder}] ${d.slug} -> ${d.title}`);
  });
}

run().catch(err => {
  console.error('Error updating Sanity portfolio visibility:', err);
  process.exit(1);
});
