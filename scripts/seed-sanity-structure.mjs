import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

// Simple env file parser
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local')
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n')
    for (const line of lines) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
      if (match) {
        const key = match[1]
        let value = match[2] || ''
        value = value.trim().replace(/^['"]|['"]$/g, '')
        process.env[key] = value
      }
    }
  }
}

loadEnv()

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!token) {
  console.error('Missing SANITY_API_TOKEN in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function seed() {
  console.log(`\n🚀 Seeding Sanity Content Structure for Project: ${projectId} (${dataset})...\n`)

  // 1. Technologies
  console.log('📌 Seeding Technologies (Java, React, Python, MySQL)...')
  const technologies = [
    {
      _id: 'technology-java',
      _type: 'technology',
      name: 'Java',
      slug: { _type: 'slug', current: 'java' },
      category: 'Backend',
    },
    {
      _id: 'technology-react',
      _type: 'technology',
      name: 'React',
      slug: { _type: 'slug', current: 'react' },
      category: 'Frontend',
    },
    {
      _id: 'technology-python',
      _type: 'technology',
      name: 'Python',
      slug: { _type: 'slug', current: 'python' },
      category: 'AI & ML',
    },
    {
      _id: 'technology-mysql',
      _type: 'technology',
      name: 'MySQL',
      slug: { _type: 'slug', current: 'mysql' },
      category: 'Database & Cloud',
    },
  ]

  for (const tech of technologies) {
    await client.createOrReplace(tech)
    console.log(`   ✔ Technology: ${tech.name}`)
  }

  // 2. Industries
  console.log('\n📌 Seeding Industries (Government, Banking, Healthcare, Real Estate, E-Commerce)...')
  const industries = [
    {
      _id: 'industry-government',
      _type: 'industry',
      name: 'Government',
      slug: { _type: 'slug', current: 'government' },
      description: 'National public safety, identity verification registries, and high-throughput law enforcement systems.',
    },
    {
      _id: 'industry-banking',
      _type: 'industry',
      name: 'Banking',
      slug: { _type: 'slug', current: 'banking' },
      description: 'Financial fraud mitigation, core banking transaction engines, payment gateways, and zero-trust compliance.',
    },
    {
      _id: 'industry-healthcare',
      _type: 'industry',
      name: 'Healthcare',
      slug: { _type: 'slug', current: 'healthcare' },
      description: 'Digital health platforms, patient medical record systems, pharmacy logistics, and HIPAA compliance.',
    },
    {
      _id: 'industry-real-estate',
      _type: 'industry',
      name: 'Real Estate',
      slug: { _type: 'slug', current: 'real-estate' },
      description: 'High-end property portals, interactive 3D masterplans, VIP broker engines, and luxury asset management.',
    },
    {
      _id: 'industry-ecommerce',
      _type: 'industry',
      name: 'E-Commerce',
      slug: { _type: 'slug', current: 'ecommerce' },
      description: 'High-conversion headless storefronts, multi-vendor marketplaces, warehouse telemetry, and checkout optimization.',
    },
  ]

  for (const ind of industries) {
    await client.createOrReplace(ind)
    console.log(`   ✔ Industry: ${ind.name}`)
  }

  // 3. Services
  console.log('\n📌 Seeding Services (Data & Analytics, AI & Data Engineering, Software Engineering)...')
  const services = [
    {
      _id: 'service-data-analytics-solutions',
      _type: 'service',
      title: 'Data & Analytics',
      slug: { _type: 'slug', current: 'data-analytics' },
      menuTitle: 'Data & Analytics',
      shortDescription:
        'Transform raw organizational data streams into actionable operational intelligence with modern data warehouses, automated ETL pipelines, and real-time dashboards.',
      hero: {
        eyebrow: 'ENTERPRISE DATA & ANALYTICS',
        title: 'Modern Data Architecture, Pipelines & Business Intelligence at Scale',
        description:
          'We engineer high-throughput data pipelines, cloud warehouses, and self-service analytics that empower modern enterprises to make decisions with absolute speed and confidence.',
        primaryCTA: { label: 'Consult Our Data Architects', href: '#contact' },
        secondaryCTA: { label: 'Explore Case Studies', href: '#case-studies' },
        highlights: ['Real-Time Stream Processing', 'Cloud Lakehouse Architecture', '99.99% Pipeline Reliability'],
      },
    },
    {
      _id: 'service-ai-data-engineering',
      _type: 'service',
      title: 'AI & Data Engineering',
      slug: { _type: 'slug', current: 'ai-data-engineering' },
      menuTitle: 'AI & Data Engineering',
      shortDescription:
        'Custom artificial intelligence models, computer vision systems, predictive algorithms, and automated workflows engineered for production environments.',
      hero: {
        eyebrow: 'APPLIED AI & MACHINE LEARNING',
        title: 'Production-Grade AI, Computer Vision & Intelligent Automation',
        description:
          'From facial recognition platforms to automated document verification and predictive telemetry, we build robust AI systems that solve high-stakes business challenges.',
        primaryCTA: { label: 'Schedule AI Consultation', href: '#contact' },
        secondaryCTA: { label: 'View AI Case Studies', href: '#case-studies' },
        highlights: ['Edge AI & Computer Vision', 'Zero-Trust Private AI Boundaries', 'Sub-Second Inference'],
      },
    },
    {
      _id: 'service-software-engineering',
      _type: 'service',
      title: 'Software Engineering',
      slug: { _type: 'slug', current: 'software-engineering' },
      menuTitle: 'Software Engineering',
      shortDescription:
        'High-performance web applications, resilient microservices, cloud-native architectures, and dedicated engineering pods built for scale.',
      hero: {
        eyebrow: 'CORE PLATFORM ENGINEERING',
        title: 'Mission-Critical Software, High-Concurrency APIs & Cloud Platforms',
        description:
          'We design and develop scalable enterprise web platforms, mobile products, and microservices backends with rock-solid security, test coverage, and clean architecture.',
        primaryCTA: { label: 'Discuss Your Project', href: '#contact' },
        secondaryCTA: { label: 'Browse Portfolio', href: '/portfolio' },
        highlights: ['High-Concurrency Backends', 'Zero-Downtime Deployments', 'Elite Full-Stack Pods'],
      },
    },
  ]

  for (const s of services) {
    await client.createOrReplace(s)
    console.log(`   ✔ Service: ${s.title}`)
  }

  // 4. Case Studies
  console.log('\n📌 Seeding Case Studies (Satyapaan, Darpan, i-Verify, I4C, UGO)...')
  const caseStudies = [
    {
      _id: 'caseStudy-satyapaan',
      _type: 'caseStudy',
      title: 'AI-Powered Passport Verification at Scale: 1.96 Million Applications Processed',
      portfolioTitle: 'Satyapaan - AI Passport Verification',
      slug: { _type: 'slug', current: 'satyapaan' },
      eyebrow: 'CASE STUDY',
      category: 'Artificial Intelligence',
      industry: 'Government',
      projectType: 'Web Application',
      portfolioVisible: true,
      featured: true,
      portfolioOrder: 1,
      cardDescription:
        'Automated high-throughput passport identity screening, facial recognition matching, and adverse case anomaly detection at state scale.',
      shortDescription:
        'Satyaapan is a web-based passport verification platform developed by Travash to help Telangana State Police automate high-volume identity screening, identify potential anomalies and route applications requiring further investigation to authorized officials.',
      client: 'Telangana State Police',
      location: 'Telangana, India',
      industries: [
        { _type: 'reference', _ref: 'industry-government' },
      ],
      technologies: [
        { _type: 'reference', _ref: 'technology-java' },
        { _type: 'reference', _ref: 'technology-python' },
        { _type: 'reference', _ref: 'technology-mysql' },
      ],
      metrics: [
        { _key: '1', value: '1.96M', label: 'Applications Processed', description: 'Centralized state-wide identity screening' },
        { _key: '2', value: '800+', label: 'High-Risk Cases Intercepted', description: 'Flagged before clearance' },
        { _key: '3', value: '99.4%', label: 'Biometric Accuracy', description: 'Real-time facial verification' },
      ],
    },
    {
      _id: 'caseStudy-darpan',
      _type: 'caseStudy',
      title: 'Darpan: AI Facial Recognition & Missing Person Retrieval Engine',
      portfolioTitle: 'Darpan - AI Facial Retrieval Engine',
      slug: { _type: 'slug', current: 'darpan' },
      eyebrow: 'CASE STUDY',
      category: 'Artificial Intelligence',
      industry: 'Government',
      projectType: 'Mobile Application',
      portfolioVisible: true,
      featured: true,
      portfolioOrder: 2,
      cardDescription:
        'Deep learning computer vision system matching missing records in real-time across state-wide photo databases.',
      shortDescription:
        'Darpan is a deep learning computer vision system developed to match missing persons and unidentified individuals in real-time across millions of state records with high accuracy.',
      client: 'State Police Department',
      location: 'India',
      industries: [
        { _type: 'reference', _ref: 'industry-government' },
      ],
      technologies: [
        { _type: 'reference', _ref: 'technology-python' },
        { _type: 'reference', _ref: 'technology-java' },
      ],
      metrics: [
        { _key: '1', value: '800+', label: 'Reunited Families', description: 'Verified identity matches' },
        { _key: '2', value: '65%', label: 'Turnaround Speedup', description: 'Faster identification process' },
      ],
    },
    {
      _id: 'caseStudy-i-verify',
      _type: 'caseStudy',
      title: 'i-Verify: Next-Gen Background Screening & Biometric Trust Platform',
      portfolioTitle: 'i-Verify - Identity Screening Platform',
      slug: { _type: 'slug', current: 'i-verify' },
      eyebrow: 'CASE STUDY',
      category: 'Enterprise Software',
      industry: 'Government',
      projectType: 'Web Application',
      portfolioVisible: true,
      featured: true,
      portfolioOrder: 3,
      cardDescription:
        'Comprehensive candidate identity and credential verification portal utilizing document AI and automated registry lookup.',
      shortDescription:
        'i-Verify provides a high-security automated candidate background check and credential verification platform with real-time public registry cross-referencing.',
      client: 'Enterprise Verification Consortium',
      location: 'India & UAE',
      industries: [
        { _type: 'reference', _ref: 'industry-government' },
        { _type: 'reference', _ref: 'industry-banking' },
      ],
      technologies: [
        { _type: 'reference', _ref: 'technology-react' },
        { _type: 'reference', _ref: 'technology-python' },
        { _type: 'reference', _ref: 'technology-mysql' },
      ],
      metrics: [
        { _key: '1', value: '500K+', label: 'Profiles Verified', description: 'Automated background clearances' },
        { _key: '2', value: '85%', label: 'Turnaround Reduction', description: 'Instant document extraction' },
      ],
    },
    {
      _id: 'caseStudy-i4c-bank-portal',
      _type: 'caseStudy',
      title: 'I4C National Bank Portal: Pan-India Financial Fraud Mitigation',
      portfolioTitle: 'I4C Bank Portal - Cyber Fraud Intercept',
      slug: { _type: 'slug', current: 'i4c-bank-portal' },
      eyebrow: 'CASE STUDY',
      category: 'Cyber Fraud Mitigation',
      industry: 'Banking',
      projectType: 'Web Application',
      portfolioVisible: true,
      featured: true,
      portfolioOrder: 4,
      cardDescription:
        'Pan-India real-time fraud mitigation coordination application enabling instant banking account freezes and recovered funds.',
      shortDescription:
        'The I4C portal serves as the nationwide frontline application connecting law enforcement agencies and financial institutions to coordinate immediate fund freezes upon reported cyber theft.',
      client: 'National Anti-Fraud Network',
      location: 'Pan-India',
      industries: [
        { _type: 'reference', _ref: 'industry-banking' },
        { _type: 'reference', _ref: 'industry-government' },
      ],
      technologies: [
        { _type: 'reference', _ref: 'technology-react' },
        { _type: 'reference', _ref: 'technology-java' },
        { _type: 'reference', _ref: 'technology-mysql' },
      ],
      metrics: [
        { _key: '1', value: '₹100M+', label: 'Fraud Intercepted', description: 'Stolen funds frozen in real-time' },
        { _key: '2', value: '<60s', label: 'Inter-Bank Freeze', description: 'Direct API account lock' },
      ],
    },
    {
      _id: 'caseStudy-ugo',
      _type: 'caseStudy',
      title: 'UGO: Intelligent Fleet Routing & Supply Chain Dispatch Platform',
      portfolioTitle: 'UGO - Logistics & Fleet Platform',
      slug: { _type: 'slug', current: 'ugo' },
      eyebrow: 'CASE STUDY',
      category: 'Logistics & Supply Chain',
      industry: 'E-Commerce',
      projectType: 'Mobile Application',
      portfolioVisible: true,
      featured: true,
      portfolioOrder: 5,
      cardDescription:
        'Next-level logistics dispatch platform with real-time GPS telemetry, route optimization, and driver workflow automation.',
      shortDescription:
        'UGO is an end-to-end fleet tracking and dispatch coordination system powering commercial transport operations with sub-second telemetry and dynamic routing.',
      client: 'Logistics Network Partner',
      location: 'Hyderabad, India',
      industries: [
        { _type: 'reference', _ref: 'industry-ecommerce' },
      ],
      technologies: [
        { _type: 'reference', _ref: 'technology-react' },
        { _type: 'reference', _ref: 'technology-python' },
        { _type: 'reference', _ref: 'technology-mysql' },
      ],
      metrics: [
        { _key: '1', value: '35%', label: 'Fuel Savings', description: 'Optimized delivery routes' },
        { _key: '2', value: '99.9%', label: 'On-Time Dispatch', description: 'Zero telemetry latency' },
      ],
    },
  ]

  for (const cs of caseStudies) {
    await client.createOrReplace(cs)
    console.log(`   ✔ Case Study: ${cs.portfolioTitle}`)
  }

  console.log('\n🎉 Sanity Content Structure successfully populated and linked!\n')
}

seed().catch((err) => {
  console.error('Seed execution error:', err)
  process.exit(1)
})
