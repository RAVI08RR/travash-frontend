import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 's2k81yej',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const crestsureDoc = {
  _id: 'crestsure-case-study',
  _type: 'caseStudy',
  title: 'Crestsure: Creating a Clear Digital Experience for Corporate Governance and Risk Solutions',
  slug: { _type: 'slug', current: 'crestsure' },
  eyebrow: 'CASE STUDY',
  category: 'Corporate Website Development',
  client: 'Crestsure',
  heroSolution: 'Corporate Website / Digital Experience',
  industry: 'SaaS & Technology',
  capabilities: 'Corporate Website Development • Product Presentation • Content Architecture • Advisor Directory • Interactive Mapping • Webinar Sections • Enquiry Pathways',
  countries: ['Hong Kong'],
  location: 'Hong Kong',
  shortDescription: "Crestsure provides software solutions focused on corporate governance, risk management, compliance, legal operations and corporate resilience. Travash designed and developed a structured corporate website to bring together product information, advisor resources and knowledge-sharing sections so visitors can explore Crestsure's offerings and connect with the team.",
  projectMeta: [
    { _key: 'pm1', label: 'CLIENT', value: 'Crestsure' },
    { _key: 'pm2', label: 'SOLUTION', value: 'Corporate Website / Digital Experience' },
    { _key: 'pm3', label: 'INDUSTRY', value: 'Governance, Risk & Compliance Software' },
    { _key: 'pm4', label: 'CAPABILITIES', value: 'Corporate Website Development • Product Presentation • Content Architecture • Advisor Directory • Interactive Mapping • Webinar Sections • Enquiry Pathways' },
    { _key: 'pm5', label: 'Project Type', value: 'Corporate Website' },
    { _key: 'pm6', label: 'Year', value: '2024' },
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
    content: 'Crestsure needed a corporate website that could clearly present its suite of governance, risk and compliance software products to senior executives, board members and compliance professionals — audiences who require structured, authoritative information to evaluate software solutions.',
    pointsLabel: 'Key challenges included:',
    points: [
      'Product Complexity: Communicating four distinct software products (BoardCore360, BoardCorePrime, RiskCorePrime, LawCorePrime) to different audience segments.',
      'Audience Specificity: Reaching board directors, risk officers, legal teams and corporate advisors through clearly segmented content pathways.',
      'Advisor Discovery: Creating a structured directory to help businesses locate qualified Crestsure advisors.',
      'Knowledge Sharing: Presenting webinars and publications in easily accessible sections.',
      'Lead Generation: Providing clear contact and demonstration pathways for interested visitors.',
    ],
    takeaway: "The website needed to make Crestsure's complex product ecosystem easy to explore, with structured pathways for different visitor types.",
  },
  complexity: {
    title: 'Key Website Sections',
    intro: 'Designed for Clarity, Navigation and Audience-Specific Journeys',
    items: [
      { _key: 'cx1', title: '1. Product Pages', description: 'Dedicated sections for BoardCore360, BoardCorePrime, RiskCorePrime and LawCorePrime, each presenting features, benefits and use cases clearly.', icon: 'layers' },
      { _key: 'cx2', title: '2. Solutions Overview', description: "Organised content presenting how Crestsure's software addresses governance, risk, compliance and legal operations challenges.", icon: 'check' },
      { _key: 'cx3', title: '3. Advisor Directory', description: 'A structured directory enabling businesses to search and locate qualified Crestsure advisors by region or specialism.', icon: 'globe' },
      { _key: 'cx4', title: '4. Interactive Mapping', description: 'Location-based mapping to help visitors discover nearby advisors and regional resources.', icon: 'chart' },
      { _key: 'cx5', title: '5. Webinars & Publications', description: "Dedicated knowledge-sharing sections presenting Crestsure's webinars, insights and published resources.", icon: 'database' },
      { _key: 'cx6', title: '6. Corporate Content', description: "About, team, and corporate pages presenting Crestsure's mission, leadership and company story.", icon: 'shield' },
      { _key: 'cx7', title: '7. Enquiry & Demo Pathways', description: 'Clear contact forms and demonstration request pathways to support qualified leads.', icon: 'cpu' },
    ],
  },
  approach: {
    title: 'Travash Approach',
    subtitle: 'Structured Information Architecture for a Complex Software Ecosystem',
    steps: [
      { _key: 'ap1', stepNumber: '01', title: 'Discovery & Information Architecture', description: "Mapped Crestsure's product ecosystem, audience segments and content needs to define a clear site structure and navigation hierarchy." },
      { _key: 'ap2', stepNumber: '02', title: 'Product Content Design', description: 'Designed individual product pages for each software offering, presenting features, benefits and target audiences in structured, readable formats.' },
      { _key: 'ap3', stepNumber: '03', title: 'Advisor Directory & Mapping', description: 'Built a searchable advisor directory with interactive mapping to help businesses discover qualified Crestsure advisors by location.' },
      { _key: 'ap4', stepNumber: '04', title: 'Knowledge & Resources Sections', description: "Created dedicated sections for webinars and publications, making Crestsure's thought leadership content easy to browse and access." },
      { _key: 'ap5', stepNumber: '05', title: 'Enquiry & Demo Integration', description: 'Integrated contact and demonstration request pathways throughout the site to support lead generation and customer enquiries.' },
    ],
  },
  solution: {
    title: 'The Solution',
    subtitle: 'A Structured Corporate Website for a Multi-Product GRC Software Brand',
    intro: "Travash designed and developed a corporate website that organises Crestsure's product suite and resources into clear, navigable sections for executive and compliance audiences.",
    items: [
      { _key: 'sl1', title: 'Product Discovery Sections', description: "Dedicated pages for each of Crestsure's four software products, presenting capabilities and audience relevance clearly." },
      { _key: 'sl2', title: 'Structured Information Architecture', description: 'Organised content into clear navigational sections so different visitor types can find relevant product, solution and advisory information efficiently.' },
      { _key: 'sl3', title: 'Advisor Directory & Location Mapping', description: 'A structured advisor directory with interactive mapping, enabling businesses to find qualified Crestsure advisors by region or specialism.' },
      { _key: 'sl4', title: 'Knowledge & Webinar Sections', description: "Dedicated resource sections presenting Crestsure's webinars, insights and publications in a clear, accessible format." },
      { _key: 'sl5', title: 'Enquiry & Demonstration Pathways', description: 'Integrated contact and demonstration request forms to support customer enquiries and lead generation throughout the site.' },
    ],
  },
  technologyStack: [
    { _key: 'ts1', category: 'Website Platform', displayType: 'text', technologies: ['WordPress'] },
    { _key: 'ts2', category: 'Page Development', displayType: 'text', technologies: ['Elementor Pro'] },
    { _key: 'ts3', category: 'Dynamic Content', displayType: 'text', technologies: ['Advanced Custom Fields (ACF)'] },
    { _key: 'ts4', category: 'Interactive Mapping', displayType: 'text', technologies: ['Leaflet.js'] },
    { _key: 'ts5', category: 'Contact Forms', displayType: 'text', technologies: ['Contact Form 7'] },
    { _key: 'ts6', category: 'Responsive Experience', displayType: 'text', technologies: ['Desktop', 'Tablet', 'Mobile'] },
  ],
  impact: {
    title: 'Digital Transformation Impact',
    subtitle: 'A Structured Digital Presence for Crestsure\'s Software Ecosystem',
    content: "The Crestsure website provides a central destination for exploring its corporate resilience software, advisory resources and company information. The structured presentation of products, advisor profiles, knowledge resources and contact pathways supports a more organised digital experience for prospective customers.",
    outcomes: [
      "Easier exploration of the product ecosystem.",
      "Clearer presentation of software capabilities.",
      "More accessible advisor and knowledge resources.",
      "Defined pathways for product enquiries and demonstrations.",
    ],
  },
  beforeAfter: {
    title: 'Before and After',
    subtitle: 'From Fragmented Information to a Structured Digital Experience',
    beforeTitle: 'BEFORE',
    afterTitle: 'AFTER',
    before: [
      'Complex product suite without clear digital presentation for executive audiences.',
      'Limited advisor discoverability for businesses seeking qualified GRC support.',
      'Knowledge and webinar resources not easily accessible in one place.',
      'No clear enquiry or demonstration pathway for interested visitors.',
      'Website structure not aligned with the distinct needs of different audience segments.',
    ],
    after: [
      'Dedicated product pages presenting each software offering clearly to relevant audiences.',
      'Structured advisor directory with interactive mapping for regional discovery.',
      'Webinar and publication sections making knowledge resources easily accessible.',
      'Integrated contact and demonstration request pathways throughout the site.',
      'Clear navigation structure supporting different visitor journeys.',
    ],
  },
  whyItMatters: {
    title: 'Why This Project Matters',
    subtitle: 'Need a Website That Makes Complex Solutions Easier to Understand?',
    description: 'Travash helps businesses create corporate websites, web applications and digital experiences that organise information, present products clearly and support customer journeys.',
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
    content: 'Travash helps businesses create corporate websites, web applications and digital experiences that organise information, present products clearly and support customer journeys.',
    primaryCTA: { label: 'Discuss Your Project', href: '#contact' },
    secondaryCTA: { label: 'Schedule a Consultation', href: '#contact' },
  },
  seo: {
    metaTitle: 'Crestsure Case Study | Corporate Website Development | Travash',
    metaDescription: "Explore how Travash approached Crestsure's digital experience, presenting governance, risk, compliance and corporate resilience solutions through a structured website.",
  },
}

async function run() {
  console.log('🔍 Checking for existing Crestsure document...')
  const existing = await client.fetch(
    `*[_type == "caseStudy" && slug.current == "crestsure"][0]._id`
  )

  if (existing) {
    console.log(`✅ Found existing document: ${existing}`)
    console.log('📝 Patching with latest content (preserving images)...')
    // Patch everything EXCEPT hero/feature images so existing uploads are kept
    const { _id, _type, ...patchFields } = crestsureDoc
    await client.patch(existing).set(patchFields).commit()
    console.log('✅ Crestsure document updated successfully!')
  } else {
    console.log('📄 Creating new Crestsure case study document...')
    const result = await client.createOrReplace(crestsureDoc)
    console.log(`✅ Created: ${result._id}`)
  }

  console.log('\n🎉 Done! Go to Sanity Studio → Case Studies (Detail Pages) and search "Crestsure"')
}

run().catch((err) => {
  console.error('❌ Error:', err.message)
  process.exit(1)
})
