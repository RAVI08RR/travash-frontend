/**
 * seed-testimonials.mjs
 * -----------------------------------------------------------------------
 * Run ONCE to seed all existing website testimonials into the Sanity
 * "testimonial" document type so they appear in Testimonials Library.
 *
 * Usage:
 *   node seed-testimonials.mjs
 *
 * Requires: SANITY_API_TOKEN with "Editor" or "Administrator" permissions.
 * Set it via environment variable:
 *   $env:SANITY_API_TOKEN="sk..."   (PowerShell)
 *   set SANITY_API_TOKEN=sk...       (CMD)
 * -----------------------------------------------------------------------
 */

import { createClient } from '@sanity/client'

const PROJECT_ID = 's2k81yej'
const DATASET   = 'production'
const API_TOKEN  = process.env.SANITY_API_TOKEN

if (!API_TOKEN) {
  console.error('\n❌  SANITY_API_TOKEN is not set.\n')
  console.error('Set it first:')
  console.error('  PowerShell:  $env:SANITY_API_TOKEN="sk..."')
  console.error('  CMD:         set SANITY_API_TOKEN=sk...\n')
  process.exit(1)
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset:   DATASET,
  token:     API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn:    false,
})

/**
 * All testimonials extracted from the existing website:
 *  - service-data.ts  (service page fallback testimonials)
 *  - case-study-data.ts (case study page testimonials)
 *  - ServiceTestimonial.tsx DEFAULT_TESTIMONIALS
 *
 * Fields: clientName, designation, company, quote, categories, badge
 * Note: avatarImage paths are local — photos must be linked manually in Studio.
 */
const TESTIMONIALS = [
  // ─── From service-data.ts ─────────────────────────────────────────────────

  {
    _id: 'testimonial-ai-voice-agent',
    clientName:  'Founder & CEO',
    designation: 'Sales Operations',
    company:     'AI Voice Agent Client',
    quote:       'Working with Travash on our bespoke AI Voice Calling Agent was a total game-changer, taking us from manual handling to a high-speed automated growth engine. Speed-to-lead plummeted from over four hours to under three seconds (24/7), directly increasing booked appointments by +310%. Our team reclaimed over 25 hours per week to focus entirely on closings, and our HubSpot CRM is 100% automated. Critically, the AI agent sounds real human, making it highly effective and customer-friendly. Travash delivers custom AI architectures with immediate operational clarity and rapid, measurable ROI.',
    categories:  ['ai-ml', 'software-engineering'],
    badge:       'Verified Enterprise Client',
  },

  {
    _id: 'testimonial-national-anti-fraud',
    clientName:  'Senior Leadership & National Coordinator',
    designation: 'Cyber Crime Coordination',
    company:     'National Anti-Fraud Network',
    quote:       "Travash is our technology partner and the backbone of our national fight against cyber fraud. They engineer and manage the massive coordination application we rely on to track fraudsters in real-time, halt malicious activities, and recover stolen funds. Thanks to their robust infrastructure and deep expertise, we are saving millions of citizens' hard-earned rupees.",
    categories:  ['cybersecurity', 'government-public', 'software-engineering'],
    badge:       'National Public Safety Authority',
  },

  {
    _id: 'testimonial-ugo-operations-director',
    clientName:  'Operations Director',
    designation: 'Head of Operations',
    company:     'UGO',
    quote:       "Trying to force our UK logistics operations into rigid, off-the-shelf software was an absolute nightmare. We needed a system that adapted to our unique workflows, not the other way around. Travash stepped in, mapped out our exact operational DNA, and built a bespoke internal application that fits us like a glove. Everything from our internal tracking to dispatch is finally unified exactly how we work on the floor. They didn't just build an app; they engineered a flawless digital extension of our business.",
    categories:  ['software-engineering', 'enterprise-general'],
    badge:       'Logistics Enterprise UK',
  },

  {
    _id: 'testimonial-vinay-rating-star',
    clientName:  'Vinay',
    designation: 'Founder',
    company:     'Rating Star',
    quote:       "We came to Travash with nothing but a concept and a blank canvas for Rating Star. We needed more than just a fresh coat of paint; we needed a complete, end-to-end digital experience. They mapped out every single user workflow from scratch and translated complex requirements into a beautifully clean, highly intuitive interface. They didn't just design our platform — they defined how our users experience our brand. The final design is visually striking, modern, and completely effortless to navigate.",
    categories:  ['software-engineering'],
    badge:       'Verified Founder',
  },

  {
    _id: 'testimonial-abdul-dubai-enterprise',
    clientName:  'Abdul',
    designation: 'Managing Director',
    company:     'Dubai Enterprise Client',
    quote:       'Travash modernized our entire enterprise application stack without a single hour of production downtime. Their technical team understood our complex business logic deeply and delivered systems that are faster, more secure, and far easier for our teams to maintain and scale.',
    categories:  ['software-engineering', 'enterprise-general'],
    badge:       'Managing Director',
  },

  {
    _id: 'testimonial-indispare-founder-ceo',
    clientName:  'Founder & CEO',
    designation: 'Chief Executive',
    company:     'Indispare',
    quote:       "When your platform serves as the digital backbone for an industrial supply chain, even seconds of server downtime can cost millions. We didn't just need developers; we needed an impenetrable cloud infrastructure. Travash architected a highly secure, auto-scaling AWS environment that completely eliminated our performance bottlenecks. Their automated deployment pipelines ensure our system handles massive data loads and unexpected traffic spikes flawlessly. They didn't just build our platform — they gave us the ultimate operational peace of mind: true, uncompromising cloud reliability.",
    categories:  ['cloud-devops', 'software-engineering'],
    badge:       'Industrial Supply Chain',
  },

  {
    _id: 'testimonial-chander-radiantsa',
    clientName:  'Chander',
    designation: 'Project Director',
    company:     'RadiantSA (CTMS)',
    quote:       "In the clinical research industry, software bugs aren't just inconvenient — they are massive compliance risks. We needed a technology partner with an uncompromising approach to quality assurance. Travash didn't just do basic testing on our CTMS platform; they aggressively validated every single data point, from patient enrollment workflows to complex third-party integrations. Their rigorous testing protocols ensured our system was completely secure, compliant, and structurally flawless before we ever went live. They gave us the absolute confidence we needed to launch.",
    categories:  ['software-engineering', 'healthcare-tech'],
    badge:       'Clinical Research Director',
  },

  {
    _id: 'testimonial-vp-engineering-dedicated-teams',
    clientName:  'VP of Engineering',
    designation: 'Head of Engineering',
    company:     'Enterprise Software Client',
    quote:       "When we needed to rapidly scale our engineering capacity, Travash deployed a dedicated, highly skilled team that integrated seamlessly into our agile workflows on day one. They didn't just act as contractors; they became a true extension of our own company, eliminating massive hiring friction and overhead.",
    categories:  ['dedicated-teams', 'staff-augmentation'],
    badge:       'VP of Engineering',
  },

  {
    _id: 'testimonial-infosys-delivery-head',
    clientName:  'Delivery Head / Talent Acquisition Leadership',
    designation: 'Talent Acquisition',
    company:     'Infosys',
    quote:       "Scaling our project teams across multiple global deliverables requires a staffing partner who truly understands enterprise-level demands. Travash delivered exactly that. Their ability to rapidly source, technically vet, and deploy highly skilled professionals in niche technologies has been exceptional. They don't just forward resumes; they provide deployment-ready engineering talent that integrates seamlessly into our critical projects. Travash has proven to be a highly reliable, strategic extension of our talent acquisition engine.",
    categories:  ['staff-augmentation', 'enterprise-general'],
    badge:       'Global IT Delivery Leader',
  },

  // ─── From case-study-data.ts ──────────────────────────────────────────────

  {
    _id: 'testimonial-pixl-sales-leadership',
    clientName:  'Pixl Sales Leadership',
    designation: 'Head of Sales Operations',
    company:     'Pixl Real Estate',
    quote:       'Deploying Travash Voice AI transformed our sales floor. Our consultants stopped chasing unvetted leads and now spend 100% of their working hours conducting viewings and closing deals. It paid for itself in under 60 days.',
    categories:  ['ai-ml', 'software-engineering'],
    badge:       '',
  },

  {
    _id: 'testimonial-telangana-police-commissioner',
    clientName:  'Senior Commissioner',
    designation: 'State Police Department',
    company:     'Telangana State Police',
    quote:       "Criminals exploiting our infrastructure to acquire multiple passports was a massive security crisis. Travash stepped in and engineered the Satyaapan platform, completely transforming our identity verification process. They didn't just build software; they built a real-time firewall that instantly flags duplicates and halts fraud in its tracks. This system literally saved our department's operational integrity. We are incredibly relieved and proud to rely on Travash as our trusted technology partner in law enforcement.",
    categories:  ['cybersecurity', 'government-public', 'ai-ml'],
    badge:       '',
  },

  {
    _id: 'testimonial-david-burn-direct-owners',
    clientName:  'David Burn',
    designation: 'Owner',
    company:     'Direct Owners',
    quote:       "Our vision was to revolutionize the vacation rental space by cutting out massive platform fees and connecting guests directly with property owners. Travash took this ambitious concept and engineered a flawless, custom web application from the ground up. They completely understood the complexities of the rental market and delivered a robust, intuitive platform that makes direct booking seamless for both sides. Travash didn't just build our software; they built the exact engine we needed to disrupt the industry.",
    categories:  ['software-engineering', 'ecommerce-retail'],
    badge:       '',
  },

  {
    _id: 'testimonial-bhushan-gupta-indispare',
    clientName:  'Bhushan Gupta',
    designation: 'Founder',
    company:     'Indispare',
    quote:       "Indispare started as nothing more than a concept. I had a clear vision for a completely unique B2B solution to streamline spare parts sales and procurement, and I brought that raw idea directly to Travash. They didn't just act as coders; they truly embraced the vision. They built the entire platform from scratch, turning a massive B2B industry challenge into a seamless, market-ready reality. If you have an ambitious idea and need a partner to bring it to life exactly as you envisioned, Travash is the team.",
    categories:  ['software-engineering', 'ecommerce-retail'],
    badge:       '',
  },

  {
    _id: 'testimonial-i4c-national-coordinator',
    clientName:  'Senior Leadership & National Coordinator',
    designation: 'National Coordinator',
    company:     'i4C (Central Government of India)',
    quote:       "Travash is our technology partner and the backbone of our national fight against cyber fraud. They engineer and manage the massive coordination application we rely on to track fraudsters in real-time, halt malicious activities, and recover stolen funds. Thanks to their robust infrastructure and deep expertise, we are saving millions of citizens' hard-earned rupees. Travash stands shoulder-to-shoulder with us on the frontlines, using technology to protect the nation.",
    categories:  ['cybersecurity', 'government-public', 'data-analytics'],
    badge:       '',
  },
]

async function seed() {
  console.log(`\n🚀  Seeding ${TESTIMONIALS.length} testimonials to Sanity...`)
  console.log(`    Project: ${PROJECT_ID}  |  Dataset: ${DATASET}\n`)

  let created = 0
  let skipped = 0

  for (const t of TESTIMONIALS) {
    const { _id, ...fields } = t

    // Check if already exists
    const existing = await client.getDocument(_id)
    if (existing) {
      console.log(`  ⏭️  Skipped (already exists): ${t.clientName} — ${t.company}`)
      skipped++
      continue
    }

    await client.createOrReplace({
      _id,
      _type: 'testimonial',
      ...fields,
      badge: fields.badge || undefined,
    })

    console.log(`  ✅  Created: ${t.clientName} — ${t.company}`)
    created++
  }

  console.log(`\n🎉  Done! Created: ${created}  |  Skipped (already existed): ${skipped}`)
  console.log('\n💡  Next step: Open Sanity Studio → "Testimonials Library"')
  console.log('    Add photos to each testimonial via the "Client Photo" field.')
  console.log('    Then go to Services and select testimonials for each service page.\n')
}

seed().catch((err) => {
  console.error('\n❌  Error during seed:', err.message)
  process.exit(1)
})
