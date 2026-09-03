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
  console.log(`Seeding Sanity project: ${projectId}, dataset: ${dataset}...`)

  // 1. Site Settings Singleton
  const siteSettingsDoc = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    ctaLabel: 'Contact Us',
    ctaHref: '/contact',
    navLinks: [
      { _key: '1', label: 'Home', href: '/' },
      { _key: '2', label: 'Services', href: '/services' },
      { _key: '3', label: 'Industries', href: '/industries' },
      { _key: '4', label: 'Our Work', href: '/work' },
      { _key: '5', label: 'About', href: '/about' },
      { _key: '6', label: 'Careers', href: '/careers' },
      { _key: '7', label: 'Blog', href: '/blog' },
    ],
    socialLinks: [
      { _key: '1', platform: 'facebook', url: 'https://www.facebook.com/travashsoftwaresolutions' },
      { _key: '2', platform: 'twitter', url: 'https://twitter.com/TravashSoftSols' },
      { _key: '3', platform: 'instagram', url: 'https://www.instagram.com/travashsoftwaresolutions/' },
      { _key: '4', platform: 'linkedin', url: 'https://www.linkedin.com/company/travash-software-solutions/' },
    ],
    menuLinks: [
      { _key: '1', label: 'Home', href: '/' },
      { _key: '2', label: 'About us', href: '/about' },
      { _key: '3', label: 'Services', href: '/services' },
      { _key: '4', label: 'Blogs', href: '/blog' },
      { _key: '5', label: 'Careers', href: '/careers' },
      { _key: '6', label: 'Contact us', href: '/contact' },
      { _key: '7', label: 'Works', href: '/work' },
      { _key: '8', label: 'Technologies', href: '/technologies' },
    ],
    serviceLinks: [
      { _key: '1', label: 'AI & Data Engineering', href: '/services/ai-data' },
      { _key: '2', label: 'Software Engineering', href: '/services/software' },
      { _key: '3', label: 'Digital Experiences', href: '/services/digital' },
      { _key: '4', label: 'Data & Analytics Solutions', href: '/services/analytics' },
      { _key: '5', label: 'Enterprise Applications', href: '/services/enterprise' },
      { _key: '6', label: 'Cloud & DevOps', href: '/services/cloud' },
      { _key: '7', label: 'Dedicated Talent & Teams', href: '/services/dedicated-teams' },
      { _key: '8', label: 'Quality Assurance & Testing', href: '/services/qa' },
      { _key: '9', label: 'Staff Augmentation', href: '/services/staff-augmentation' },
    ],
    offices: [
      {
        _key: '1',
        label: 'India',
        address:
          'Sanali Spazio building, Inorbit Mall Road, Madhapur Plot No 19, Software Units Layout, Sy.No.64, Madhapur Hyderabad, Rangareddy Telangana 500081',
      },
      {
        _key: '2',
        label: 'Dubai',
        address: 'SAIF ZONE ADDRESS : Saif Office Q1 05 103/A Sharjah U.A.E',
      },
    ],
    contactEmail: 'contact@travash.com',
    contactPhone: '(+91) 7416743434',
    copyrightText: '©2025 Travash Software Solutions Pvt. Ltd',
  }

  // 2. Home Page Singleton
  const homePageDoc = {
    _id: 'homePage',
    _type: 'homePage',
    hero: {
      eyebrowText: 'AI-POWERED PRODUCT ENGINEERING',
      headingLine1: 'AI-Assisted Software &',
      headingHighlight: 'Product Development',
      headingLine2: 'Company',
      subtext:
        'We design, build and modernize web, mobile, SaaS and enterprise products—combining software engineering, automation and AI to solve real business challenges.',
      primaryCta: { label: 'Book Free Consultation', href: '/contact' },
      secondaryCta: { label: 'View Our Portfolio', href: '/work' },
      trustedByLabel: 'Trusted by Startups, Enterprises & Public Sector',
    },
    capabilities: {
      heading: 'Capabilities That Move Business Forward',
      cards: [
        {
          _key: '1',
          title: 'Platform Engineering',
          description:
            'We build secure, multi-tenant SaaS platforms and custom enterprise software to future-proof your business.',
          ctaLabel: 'Explore Platform Engineering',
          ctaHref: '/services/platform-engineering',
        },
        {
          _key: '2',
          title: 'AI & Automation',
          description:
            'Put your data to work. We integrate AI voice agents and smart workflows to cut operational costs and eliminate manual work.',
          ctaLabel: 'Explore AI Solutions',
          ctaHref: '/services/ai-automation',
        },
        {
          _key: '3',
          title: 'Dedicated Tech Teams',
          description:
            'Accelerate execution without the overhead. Scale instantly by integrating our globally vetted developers into your agile workflows.',
          ctaLabel: 'Hire Dedicated Talent',
          ctaHref: '/services/dedicated-teams',
        },
      ],
    },
    caseStudies: {
      heading: 'Built on Results, Not Promises',
      caseStudies: [
        {
          _key: '1',
          projectName: 'AI-Powered Identity Verification & Fraud Prevention',
          clientType: 'Digital Identity & Trust Platform',
          outcomes: [
            { _key: '1', value: '1.9M+ verified', label: 'Applications processed securely' },
            { _key: '2', value: '99.7% Accuracy', label: 'Automated document extraction' },
            { _key: '3', value: 'Zero-trust', label: 'Tamper-proof audit logs' },
            { _key: '4', value: 'SIAC Certified', label: 'Full compliance across public registries' },
          ],
          tags: ['AI-Assisted Verification', 'Automated Data Extraction', 'Government Tech'],
          clientName: 'SIAC',
          ctaLabel: 'View Case Study',
          ctaHref: '/work',
        },
        {
          _key: '2',
          projectName: 'Enterprise Cloud Migration & Architecture',
          clientType: 'Global Logistics Network',
          outcomes: [
            { _key: '1', value: '4.8× Speedup', label: 'Processing throughput' },
            { _key: '2', value: '99.99% Uptime', label: 'High availability SLA' },
            { _key: '3', value: 'Cost -38%', label: 'Cloud infrastructure savings' },
            { _key: '4', value: 'Multi-Region', label: 'Global edge distribution' },
          ],
          tags: ['Next.js', 'Cloud Architecture', 'Performance'],
          clientName: 'Netak',
          ctaLabel: 'View Case Study',
          ctaHref: '/work',
        },
        {
          _key: '3',
          projectName: 'Digital Banking Experience & API Modernization',
          clientType: 'Kotak & FinTech Consortium',
          outcomes: [
            { _key: '1', value: '12M+ Txns', label: 'Monthly active transactions' },
            { _key: '2', value: '<80ms Latency', label: 'Core banking API response' },
            { _key: '3', value: 'Fraud Shield AI', label: 'Zero-trust verification' },
            { _key: '4', value: 'VISA Partners', label: 'Multi-region compliance' },
          ],
          tags: ['FinTech', 'Microservices', 'Banking APIs'],
          clientName: 'Kotak',
          ctaLabel: 'View Case Study',
          ctaHref: '/work',
        },
      ],
    },
    stats: {
      stats: [
        { _key: '1', value: '300+', label: 'Projects Delivered' },
        { _key: '2', value: '50+', label: 'Expert Engineers & AI Specialists' },
        { _key: '3', value: '20+', label: 'Years of Leadership Experience' },
        { _key: '4', value: '8+', label: 'Industry Verticals Served — Global Clients Across US, UK & MEA' },
      ],
    },
    introVideo: {
      eyebrow: 'Our Intro',
      heading: 'Meet Your Next Technology Partner',
      videoUrl: 'https://www.youtube.com/watch?v=ch2ui0gfHUY',
    },
    testimonials: {
      heading: 'Trusted by Businesses Worldwide',
      testimonials: [
        {
          _key: '1',
          quote:
            'Travash transformed our verification process completely. Their AI-powered solution was not only technically impressive but also delivered real business impact from day one. The team understood our domain deeply and delivered beyond expectations.',
          authorName: 'Imran Khan',
          authorTitle: 'Chief Technology Officer, PIXL Group',
          authorCompany: 'PIXL Group',
        },
        {
          _key: '2',
          quote:
            'Working with Travash felt like having an elite in-house engineering team. They delivered our core product ahead of schedule with zero architectural debt, allowing us to scale seamlessly across global markets.',
          authorName: 'Sarah Jenkins',
          authorTitle: 'VP of Product, FinTech Enterprise',
          authorCompany: 'FinTech Enterprise',
        },
        {
          _key: '3',
          quote:
            'Their deep expertise in public sector compliance and AI automation helped us process millions of applications with 99.7% accuracy. Exceptional commitment and engineering rigor.',
          authorName: 'Rajesh Verma',
          authorTitle: 'Director of Digital Transformation',
          authorCompany: 'Public Sector Advisory',
        },
        {
          _key: '4',
          quote:
            'The speed and precision of Travash’s engineering team is unmatched. From architecture design to microservices deployment, every milestone was hit with flawless execution.',
          authorName: 'Elena Rostova',
          authorTitle: 'Head of Engineering, SaaS Logistics',
          authorCompany: 'SaaS Logistics',
        },
        {
          _key: '5',
          quote:
            'Travash is more than an IT vendor—they are a true technology partner. Their AI integration shaved months off our product roadmap and helped us secure our next round of funding.',
          authorName: 'David Miller',
          authorTitle: 'Founder & CEO, HealthTech Labs',
          authorCompany: 'HealthTech Labs',
        },
      ],
    },
    about: {
      heading: 'Built to Solve Real Business Problems',
      paragraphs: [
        'Travash founded in 2005 by a visionary Senior Technologist, Travash was born from a mission to revolutionize perceptions of technology. We aimed to shift the narrative from viewing technology as a cost burden to embracing it as a powerful profit-driving force. Over the years, this vision has propelled us to deliver innovative IT solutions that empower businesses worldwide.',
        'At Travash, we don’t just adapt to technological evolution; we lead it. By combining deep expertise with forward-thinking strategies, we help organizations turn challenges into opportunities. Whether it’s streamlining operations, enhancing user experiences, or driving revenue growth, we craft tailored solutions that make a measurable impact. Join us on this journey of innovation and growth, where technology becomes the cornerstone of your success. With Travash, it’s not just IT—it’s IT redefined.',
      ],
      ctaLabel: 'Know More',
      ctaHref: '/about',
    },
    industries: {
      heading: 'Industries We Serve',
      industries: [
        { _key: '1', name: 'E-commerce & Retail', href: '/industries/ecommerce' },
        { _key: '2', name: 'Travel & Hospitality', href: '/industries/travel' },
        { _key: '3', name: 'Health & Wellness', href: '/industries/health' },
        { _key: '4', name: 'Recruitment & HR', href: '/industries/recruitment' },
        { _key: '5', name: 'Real Estate & Construction', href: '/industries/real-estate' },
        { _key: '6', name: 'Government & Public Sector', href: '/industries/government' },
        { _key: '7', name: 'Banking & Financial Services', href: '/industries/fintech' },
        { _key: '8', name: 'Manufacturing', href: '/industries/manufacturing' },
      ],
    },
    blog: {
      heading: 'Latest Insights from Travash',
      ctaLabel: 'View All Insights',
      ctaHref: '/blog',
    },
    contact: {
      heading: 'Request Your Free Consultation',
      subheading:
        "Get in touch today and let's turn your idea into a remarkable success story!",
      submitLabel: 'Get a Free Consultation',
      successMessage: "Thank you! We'll be in touch shortly.",
      notifyEmail: 'contact@travash.com',
    },
  }

  // 3. Blog Posts
  const blogPosts = [
    {
      _id: 'post-ai-software-dev',
      _type: 'post',
      title: 'How AI Is Reshaping Enterprise Software Development in 2024',
      slug: { _type: 'slug', current: 'how-ai-is-reshaping-enterprise-software-development' },
      category: 'AI & Technology',
      excerpt:
        'From code generation to intelligent testing, discover how AI tools are accelerating development cycles and reducing costs for enterprise teams.',
      publishedAt: new Date().toISOString(),
    },
    {
      _id: 'post-scalable-saas',
      _type: 'post',
      title: 'Building Scalable SaaS Platforms: Key Architecture Decisions',
      slug: { _type: 'slug', current: 'building-scalable-saas-platforms' },
      category: 'Platform Engineering',
      excerpt:
        'A deep dive into the architectural patterns and technology choices that separate resilient SaaS products from fragile ones.',
      publishedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    },
    {
      _id: 'post-tech-teams-vs-aug',
      _type: 'post',
      title: 'Dedicated Tech Teams vs. Staff Augmentation: Which Is Right for You?',
      slug: { _type: 'slug', current: 'dedicated-tech-teams-vs-staff-augmentation' },
      category: 'Team Strategy',
      excerpt:
        'We break down the pros, cons, and decision factors for choosing between a dedicated engineering team and traditional staff augmentation.',
      publishedAt: new Date(Date.now() - 86400000 * 12).toISOString(),
    },
  ]

  console.log('Writing siteSettings...')
  await client.createOrReplace(siteSettingsDoc)

  console.log('Writing individual section documents...')
  await client.createOrReplace({ _id: 'heroSection', _type: 'heroSection', ...homePageDoc.hero })
  await client.createOrReplace({ _id: 'capabilitiesSection', _type: 'capabilitiesSection', ...homePageDoc.capabilities })
  await client.createOrReplace({ _id: 'caseStudySection', _type: 'caseStudySection', ...homePageDoc.caseStudies })
  await client.createOrReplace({ _id: 'statsSection', _type: 'statsSection', ...homePageDoc.stats })
  await client.createOrReplace({ _id: 'introVideoSection', _type: 'introVideoSection', ...homePageDoc.introVideo })
  await client.createOrReplace({ _id: 'testimonialSection', _type: 'testimonialSection', ...homePageDoc.testimonials })
  await client.createOrReplace({ _id: 'aboutSection', _type: 'aboutSection', ...homePageDoc.about })
  await client.createOrReplace({ _id: 'industriesSection', _type: 'industriesSection', ...homePageDoc.industries })
  await client.createOrReplace({ _id: 'contactSection', _type: 'contactSection', ...homePageDoc.contact })

  console.log('Writing homePage...')
  await client.createOrReplace(homePageDoc)

  console.log('Writing blog posts...')
  for (const post of blogPosts) {
    await client.createOrReplace(post)
  }

  console.log('✅ Sanity CMS successfully seeded!')
}

seed().catch((err) => {
  console.error('Seed error:', err)
  process.exit(1)
})
