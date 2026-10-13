import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const CRESTSURE_DATA = {
  _id: 'caseStudy-crestsure',
  _type: 'caseStudy',
  title: 'Crestsure: Creating a Clear Digital Experience for Corporate Governance and Risk Solutions',
  slug: { _type: 'slug', current: 'crestsure' },
  eyebrow: 'CASE STUDY',
  category: 'Corporate Website Development',
  industry: 'SaaS & Technology',
  client: 'Crestsure',
  heroSolution: 'Corporate Website / Digital Experience',
  capabilities:
    'Corporate Website Development • Product Presentation • Content Architecture • Advisor Directory • Interactive Mapping • Webinar Sections • Enquiry Pathways',
  countries: ['UK'],
  location: 'UK',
  shortDescription:
    "Crestsure provides software solutions focused on corporate governance, risk management, compliance, legal operations and corporate resilience. Travash designed and developed a structured corporate website to bring together product information, advisor resources and knowledge-sharing sections so visitors can explore Crestsure's offerings and connect with the team.",

  // Portfolio listing fields
  portfolioTitle: 'Crestsure – GRC Corporate Website',
  cardDescription:
    "A structured corporate website for Crestsure's governance, risk, compliance and corporate resilience software suite, including product pages, advisor directory and enquiry pathways.",
  portfolioVisible: true,
  portfolioOrder: 14,
  displayOrder: 14,

  projectMeta: [
    { _key: 'meta_1', label: 'CLIENT', value: 'Crestsure' },
    { _key: 'meta_2', label: 'SOLUTION', value: 'Corporate Website / Digital Experience' },
    { _key: 'meta_3', label: 'INDUSTRY', value: 'Governance, Risk & Compliance Software' },
    {
      _key: 'meta_4',
      label: 'CAPABILITIES',
      value:
        'Corporate Website Development • Product Presentation • Content Architecture • Advisor Directory • Interactive Mapping • Webinar Sections • Enquiry Pathways',
    },
    { _key: 'meta_5', label: 'Project Type', value: 'Corporate Website' },
    { _key: 'meta_6', label: 'Year', value: '2024' },
  ],

  executiveSummary: {
    title: 'Executive Summary',
    subtitle: 'A Digital Home for Corporate Governance, Risk and Compliance Solutions',
    paragraphs: [
      'Crestsure provides software solutions focused on corporate governance, risk management, compliance, legal operations and corporate resilience. Its product ecosystem includes BoardCore360, BoardCorePrime, RiskCorePrime and LawCorePrime.',
      "The website brings together product information, corporate content, advisor resources and knowledge-sharing sections to help visitors explore Crestsure's offerings and connect with its team. Travash structured the digital experience to make complex GRC software easy to navigate and understand.",
    ],
  },

  challenge: {
    title: 'The Challenge',
    subtitle: 'Presenting Complex GRC Software Clearly to Decision-Makers',
    content:
      'Crestsure needed a corporate website that could clearly present its suite of governance, risk and compliance software products to senior executives, board members and compliance professionals — audiences who require structured, authoritative information to evaluate software solutions.',
    pointsLabel: 'Key challenges included:',
    points: [
      'Product Complexity: Communicating four distinct software products (BoardCore360, BoardCorePrime, RiskCorePrime, LawCorePrime) to different audience segments.',
      'Audience Specificity: Reaching board directors, risk officers, legal teams and corporate advisors through clearly segmented content pathways.',
      'Advisor Discovery: Creating a structured directory to help businesses locate qualified Crestsure advisors.',
      'Knowledge Sharing: Presenting webinars and publications in easily accessible sections.',
      'Lead Generation: Providing clear contact and demonstration pathways for interested visitors.',
    ],
    takeaway:
      "The website needed to make Crestsure's complex product ecosystem easy to explore, with structured pathways for different visitor types.",
  },

  complexity: {
    title: 'Key Website Sections',
    intro: 'Designed for Clarity, Navigation and Audience-Specific Journeys',
    items: [
      {
        _key: 'c_0',
        title: '1. Product Pages',
        description:
          'Dedicated sections for BoardCore360, BoardCorePrime, RiskCorePrime and LawCorePrime, each presenting features, benefits and use cases clearly.',
        icon: 'layers',
      },
      {
        _key: 'c_1',
        title: '2. Solutions Overview',
        description:
          "Organised content presenting how Crestsure's software addresses governance, risk, compliance and legal operations challenges.",
        icon: 'check',
      },
      {
        _key: 'c_2',
        title: '3. Advisor Directory',
        description:
          'A structured directory enabling businesses to search and locate qualified Crestsure advisors by region or specialism.',
        icon: 'globe',
      },
      {
        _key: 'c_3',
        title: '4. Interactive Mapping',
        description:
          'Location-based mapping to help visitors discover nearby advisors and regional resources.',
        icon: 'chart',
      },
      {
        _key: 'c_4',
        title: '5. Webinars & Publications',
        description:
          "Dedicated knowledge-sharing sections presenting Crestsure's webinars, insights and published resources.",
        icon: 'database',
      },
      {
        _key: 'c_5',
        title: '6. Corporate Content',
        description:
          "About, team, and corporate pages presenting Crestsure's mission, leadership and company story.",
        icon: 'shield',
      },
      {
        _key: 'c_6',
        title: '7. Enquiry & Demo Pathways',
        description:
          'Clear contact forms and demonstration request pathways to support qualified leads.',
        icon: 'cpu',
      },
    ],
  },

  approach: {
    title: 'Travash Approach',
    subtitle: 'Structured Information Architecture for a Complex Software Ecosystem',
    steps: [
      {
        _key: 's_0',
        stepNumber: '01',
        title: 'Discovery & Information Architecture',
        description:
          "Mapped Crestsure's product ecosystem, audience segments and content needs to define a clear site structure and navigation hierarchy.",
      },
      {
        _key: 's_1',
        stepNumber: '02',
        title: 'Product Content Design',
        description:
          'Designed individual product pages for each software offering, presenting features, benefits and target audiences in structured, readable formats.',
      },
      {
        _key: 's_2',
        stepNumber: '03',
        title: 'Advisor Directory & Mapping',
        description:
          'Built a searchable advisor directory with interactive mapping to help businesses discover qualified Crestsure advisors by location.',
      },
      {
        _key: 's_3',
        stepNumber: '04',
        title: 'Knowledge & Resources Sections',
        description:
          "Created dedicated sections for webinars and publications, making Crestsure's thought leadership content easy to browse and access.",
      },
      {
        _key: 's_4',
        stepNumber: '05',
        title: 'Enquiry & Demo Integration',
        description:
          'Integrated contact and demonstration request pathways throughout the site to support lead generation and customer enquiries.',
      },
    ],
  },

  solution: {
    title: 'The Solution',
    subtitle: 'A Structured Corporate Website for a Multi-Product GRC Software Brand',
    intro:
      "Travash designed and developed a corporate website that organises Crestsure's product suite and resources into clear, navigable sections for executive and compliance audiences.",
    items: [
      {
        _key: 'sol_0',
        title: 'Product Discovery Sections',
        description:
          "Dedicated pages for each of Crestsure's four software products, presenting capabilities and audience relevance clearly.",
      },
      {
        _key: 'sol_1',
        title: 'Structured Information Architecture',
        description:
          'Organised content into clear navigational sections so different visitor types can find relevant product, solution and advisory information efficiently.',
      },
      {
        _key: 'sol_2',
        title: 'Advisor Directory & Location Mapping',
        description:
          'A structured advisor directory with interactive mapping, enabling businesses to find qualified Crestsure advisors by region or specialism.',
      },
      {
        _key: 'sol_3',
        title: 'Knowledge & Webinar Sections',
        description:
          "Dedicated resource sections presenting Crestsure's webinars, insights and publications in a clear, accessible format.",
      },
      {
        _key: 'sol_4',
        title: 'Enquiry & Demonstration Pathways',
        description:
          'Integrated contact and demonstration request forms to support customer enquiries and lead generation throughout the site.',
      },
    ],
  },

  technologyStack: [
    {
      _key: 't_0',
      category: 'Frontend Development',
      displayType: 'text',
      items: [{ _key: 'item_0', _type: 'techIconItem', name: 'Custom Web Development' }],
      technologies: ['Custom Web Development'],
      description: '',
    },
    {
      _key: 't_1',
      category: 'Content Management',
      displayType: 'text',
      items: [{ _key: 'item_0', _type: 'techIconItem', name: 'CMS Integration' }],
      technologies: ['CMS Integration'],
      description: '',
    },
    {
      _key: 't_2',
      category: 'Interactive Features',
      displayType: 'text',
      items: [
        { _key: 'item_0', _type: 'techIconItem', name: 'Interactive Mapping' },
        { _key: 'item_1', _type: 'techIconItem', name: 'Search & Directory' },
      ],
      technologies: ['Interactive Mapping', 'Search & Directory'],
      description: '',
    },
  ],

  impact: {
    title: 'Capability Highlights',
    subtitle: "A Structured Digital Presence for Crestsure's Software Ecosystem",
    content:
      'These are capability highlights reflecting the scope and purpose of the website. Performance metrics will be added when verified project data becomes available.',
    outcomes: [
      "Product Discovery: Dedicated sections for Crestsure's software offerings, making it easier for visitors to explore each product.",
      'Structured Information: Organised content for products, solutions and corporate resources, reducing navigation friction for professional audiences.',
      'Advisor Accessibility: Advisor profiles and location-based discovery, helping businesses connect with qualified advisors.',
      "Knowledge Sharing: Webinars and publications presented in accessible sections, supporting Crestsure's thought leadership positioning.",
      'Customer Enquiries: Contact and demonstration pathways integrated throughout the site to support qualified lead generation.',
    ],
  },

  beforeAfter: {
    title: 'Before vs. After',
    subtitle: 'From Fragmented Information to a Structured Digital Experience',
    beforeTitle: 'BEFORE',
    before: [
      'Complex product suite without clear digital presentation for executive audiences.',
      'Limited advisor discoverability for businesses seeking qualified GRC support.',
      'Knowledge and webinar resources not easily accessible in one place.',
      'No clear enquiry or demonstration pathway for interested visitors.',
      'Website structure not aligned with the distinct needs of different audience segments.',
    ],
    afterTitle: 'AFTER',
    after: [
      'Dedicated product pages presenting each software offering clearly to relevant audiences.',
      'Structured advisor directory with interactive mapping for regional discovery.',
      'Webinar and publication sections making knowledge resources easily accessible.',
      'Integrated contact and demonstration request pathways throughout the site.',
      'Clear navigation structure supporting different visitor journeys.',
    ],
  },

  whyItMatters: {
    title: 'Final Takeaway',
    subtitle: 'Need a Website That Makes Complex Solutions Easier to Understand?',
    description:
      'Travash helps businesses create corporate websites, web applications and digital experiences that organise information, present products clearly and support customer journeys.',
    items: [
      'Corporate websites that communicate complex software suites clearly to professional audiences',
      'Structured information architecture supporting multiple products and audience segments',
      'Advisor directories and interactive features to improve discovery and accessibility',
      'Enquiry and demonstration pathways integrated throughout the customer journey',
    ],
  },

  nextStep: {
    heading: 'Need a Website That Makes Complex Solutions Easier to Understand?',
    subtitle: 'Corporate Website & Digital Experience Development',
    content:
      'Travash helps businesses create corporate websites, web applications and digital experiences that organise information, present products clearly and support customer journeys.',
    primaryCTA: { label: 'Discuss Your Project', href: '#contact' },
    secondaryCTA: { label: 'Schedule a Consultation', href: '#contact' },
  },

  seo: {
    metaTitle: 'Crestsure Case Study | Corporate Website Development | Travash',
    metaDescription:
      "Explore how Travash approached Crestsure's digital experience, presenting governance, risk, compliance and corporate resilience solutions through a structured website.",
  },
};

async function run() {
  console.log('Seeding & Publishing caseStudy-crestsure to Sanity CMS...\n');

  // 1. Create or replace the published document
  await client.createOrReplace(CRESTSURE_DATA);
  console.log('✓ Created/replaced published document: caseStudy-crestsure');

  // 2. Remove any draft
  try {
    await client.delete('drafts.caseStudy-crestsure');
    console.log('✓ Cleared drafts.caseStudy-crestsure');
  } catch {
    // ignore — draft may not exist
  }

  // 3. Verify
  const verified = await client.fetch(
    `*[_type == "caseStudy" && slug.current == "crestsure"][0]{ _id, title, "slug": slug.current, client, portfolioVisible }`
  );
  console.log('\n=== VERIFICATION RESULT ===');
  console.log(JSON.stringify(verified, null, 2));
  console.log('\n✅ Crestsure case study is live at /portfolio/crestsure and /case-studies/crestsure');
}

run().catch((err) => {
  console.error('Error seeding Crestsure to Sanity:', err);
  process.exit(1);
});
