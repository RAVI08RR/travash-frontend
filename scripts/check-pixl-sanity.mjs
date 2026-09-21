import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function run() {
  const caseStudyBySlugQuery = `*[_type == "caseStudy" && (slug.current == $slug || _id == $slug || _id == "caseStudy-" + $slug || _id == "drafts.caseStudy-" + $slug)][0]{
    ...,
    "gallery": gallery[] {
      _type,
      asset-> { _id, url, metadata { dimensions, lqip } }
    },
    "heroImage": heroImage {
      _type,
      asset-> { _id, url, metadata { dimensions, lqip } }
    },
    "featureImage": featureImage {
      _type,
      asset-> { _id, url, metadata { dimensions, lqip } }
    },
    "cardImage": cardImage {
      _type,
      asset-> { _id, url, metadata { dimensions, lqip } }
    }
  }`;

  const portfolioProjectBySlugQuery = `*[_type == "portfolioProject" && slug.current == $slug][0]{
    ...,
    "featuredImage": featuredImage { asset-> { _id, url } },
    "heroImage": heroImage { asset-> { _id, url } }
  }`;

  const cs = await client.fetch(caseStudyBySlugQuery, { slug: 'pixl' });
  const pp = await client.fetch(portfolioProjectBySlugQuery, { slug: 'pixl' });

  console.log('=== SANITY CASE STUDY FOR pixl ===');
  console.log(JSON.stringify(cs, null, 2));

  console.log('\n=== SANITY PORTFOLIO PROJECT FOR pixl ===');
  console.log(JSON.stringify(pp, null, 2));
}

run().catch(console.error);
