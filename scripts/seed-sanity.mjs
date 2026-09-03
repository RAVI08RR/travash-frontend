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
      { _key: '1', platform: 'linkedin', url: 'https://linkedin.com' },
      { _key: '2', platform: 'twitter', url: 'https://twitter.com' },
      { _key: '3', platform: 'github', url: 'https://github.com' },
      { _key: '4', platform: 'instagram', url: 'https://instagram.com' },
    ],
    menuLinks: [
      { _key: '1', label: 'Home', href: '/' },
      { _key: '2', label: 'Services', href: '/services' },
      { _key: '3', label: 'Our Work', href: '/work' },
      { _key: '4', label: 'About', href: '/about' },
      { _key: '5', label: 'Careers', href: '/careers' },
      { _key: '6', label: 'Blog', href: '/blog' },
      { _key: '7', label: 'Contact', href: '/contact' },
    ],
    serviceLinks: [
      { _key: '1', label: 'Platform Engineering', href: '/services/platform-engineering' },
      { _key: '2', label: 'AI & Automation', href: '/services/ai-automation' },
      { _key: '3', label: 'Dedicated Tech Teams', href: '/services/dedicated-teams' },
      { _key: '4', label: 'Product Development', href: '/services/product-development' },
      { _key: '5', label: 'UX/UI Design', href: '/services/design' },
    ],
    offices: [
      { _key: '1', label: 'India', address: 'Hyderabad, Telangana, India' },
      { _key: '2', label: 'Dubai', address: 'Dubai Internet City, UAE' },
    ],
    contactEmail: 'hello@travash.com',
    contactPhone: '+1 (555) 019-2834',
    copyrightText: '© 2024 Travash. All rights reserved.',
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
          iconName: 'platform',
          title: 'Platform Engineering',
          description:
            'We build secure, multi-tenant SaaS platforms and custom enterprise software to future-proof your business.',
          ctaLabel: 'Explore Platform Engineering',
          ctaHref: '/services/platform-engineering',
        },
        {
          _key: '2',
          iconName: 'ai',
          title: 'AI & Automation',
          description:
            'Put your data to work. We integrate AI voice agents and smart workflows to cut operational costs and eliminate manual work.',
          ctaLabel: 'Explore AI Solutions',
          ctaHref: '/services/ai-automation',
        },
        {
          _key: '3',
          iconName: 'teams',
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
          projectName: 'AI-Powered Identity Verification',
          clientType: 'Enterprise AI for Government Security',
          outcomes: [
            { _key: '1', value: '1.9M+', label: 'Applications Processed' },
            { _key: '2', value: '99.7%', label: 'Accuracy Rate' },
          ],
          tags: ['AI-Assisted Verification', 'Automated Data Extraction', 'Government Tech'],
          clientName: 'SIAC',
          ctaLabel: 'View Case Study',
          ctaHref: '/work',
        },
        {
          _key: '2',
          projectName: 'E-Commerce Platform Revamp',
          clientType: 'Retail & Consumer Technology',
          outcomes: [
            { _key: '1', value: '3.2×', label: 'Conversion Increase' },
            { _key: '2', value: '50%', label: 'Faster Load Times' },
          ],
          tags: ['Next.js', 'Headless Commerce', 'Performance'],
          clientName: 'Netak',
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
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    testimonials: {
      heading: 'Trusted by Businesses Worldwide',
      testimonials: [
        {
          _key: '1',
          quote:
            'Travash transformed our verification process completely. Their AI-powered solution was not only technically impressive but also delivered real business impact from day one. The team understood our domain deeply and delivered beyond expectations.',
          authorName: 'Imran Khan',
          authorTitle: 'Chief Technology Officer',
          authorCompany: 'PIXL Group',
        },
      ],
    },
    about: {
      heading: 'Built to Solve Real Business Problems',
      paragraphs: [
        'At Travash, we combine deep technical expertise with AI-accelerated delivery to help organisations build products that matter. From early-stage MVPs to enterprise-scale platforms, we are the technology partner that stays accountable to outcomes — not just deliverables.',
        'Our cross-functional teams bring together product thinking, engineering excellence, and domain knowledge across 8+ verticals. We embed with your organisation, align to your goals, and deliver with the urgency and precision that modern business demands.',
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
        'Tell us about your project goals and requirements. Our engineering leaders will analyze your needs and propose an actionable execution roadmap.',
      submitLabel: 'Get a Free Consultation',
      successMessage: "Thank you! We'll be in touch shortly.",
      notifyEmail: 'hello@travash.com',
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
