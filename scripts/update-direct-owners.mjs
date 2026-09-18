import { createClient } from '@sanity/client'
import fs from 'fs'

const env = Object.fromEntries(
  fs.readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter(l => l.includes('='))
    .map(l => {
      const [k, ...v] = l.split('=')
      return [k.trim(), v.join('=').trim()]
    })
)

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET,
  token: env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false
})

const caseStudyPayload = {
  title: 'AI Voice Agent: How We Built a Human-Sounding Voice AI Agent that Quadrupled Site Visits',
  slug: { _type: 'slug', current: 'direct-owners' },
  portfolioTitle: 'AI Voice Agent',
  cardDescription: 'Natural language processing, automated lead qualification, and real-time CRM syncing for Pixl.',
  shortDescription: 'Natural language processing, automated lead qualification, and real-time CRM syncing',
  eyebrow: 'CASE STUDY',
  category: 'AI Voice Agent',
  client: 'Pixl',
  industry: 'Real Estate',
  location: 'Global / Enterprise',
  projectType: 'AI Voice Agent',
  projectMeta: [
    { _key: 'pm_1', label: 'CLIENT', value: 'Pixl' },
    { _key: 'pm_2', label: 'SOLUTION', value: 'AI Voice Agent' },
    { _key: 'pm_3', label: 'INDUSTRY', value: 'Real Estate' },
    {
      _key: 'pm_4',
      label: 'CAPABILITIES',
      value: 'Conversational Intelligence • Knowledge Retrieval (RAG) • Voice & Speech AI • Telephony Infrastructure • Workflow Automation'
    }
  ],
  metrics: [
    {
      _key: 'm_0',
      value: '< 3s',
      label: 'Average speed-to-lead response time',
      description: 'Average speed-to-lead response time across all inbound inquiry channels'
    },
    {
      _key: 'm_1',
      value: '+310%',
      label: 'Increase in confirmed site visits',
      description: 'Increase in confirmed site visit appointments'
    },
    {
      _key: 'm_2',
      value: 'Conversational AI',
      label: 'Core Technology',
      description: 'Natural language processing, automated lead qualification, and real-time CRM syncing'
    },
    {
      _key: 'm_3',
      value: '24/7/365',
      label: 'Inbound Coverage',
      description: 'Pixl Real Estate Agency automated frontline availability'
    }
  ],
  executiveSummary: {
    title: 'Executive Summary',
    subtitle: 'Pixl Real Estate Agency',
    paragraphs: [
      'The AI Voice Agent is an advanced conversational AI solution engineered to automate frontline sales inquiries, streamline lead qualification, and manage multichannel ingestion instantly. Designed for enterprise scalability, it delivers natural, human-like voice interactions to eliminate lead decay and elevate the digital customer experience.'
    ]
  },
  challenge: {
    title: 'The Challenge',
    subtitle: 'Real estate sales teams needed to modernize legacy lead-response workflows and eliminate speed-to-lead bottlenecks.',
    headline: 'Real estate sales teams needed to modernize legacy lead-response workflows and eliminate speed-to-lead bottlenecks.',
    content: 'The existing inquiry process relied heavily on manual agent availability, leaving hot prospects waiting for hours outside of office times and causing rapid lead decay.',
    description: 'The existing inquiry process relied heavily on manual agent availability, leaving hot prospects waiting for hours outside of office times and causing rapid lead decay.',
    pointsLabel: 'SALES TEAMS NEEDED TO IDENTIFY :',
    points: [
      'Overcoming manual administrative fatigue with modern automated qualification solutions',
      'Ensuring sub-second response latency and 24/7 conversational availability',
      'Establishing instantaneous CRM data syncing and frictionless buyer journeys',
      'Integrating distributed multi-channel inquiries into a unified voice orchestrator'
    ],
    takeaway: 'The challenge was to reduce repetitive manual lead qualification without removing human involvement from hot lead conversions and complex sales negotiations.'
  },
  complexity: {
    title: 'The Complexity',
    intro: 'Scaling conversational speed-to-lead required solving multi-tier operational challenges:',
    items: [
      {
        _key: 'c_0',
        title: 'HIGH INQUIRY VOLUME',
        description: 'Handling 24/7 inbound leads from Facebook, Google, and property portals simultaneously without response latency.'
      },
      {
        _key: 'c_1',
        title: 'NATURAL CONVERSATION FLOW',
        description: 'Utilizing LLMs and Retrieval-Augmented Generation (RAG) to understand user intent, pause naturally, and answer complex property questions in real-time.'
      },
      {
        _key: 'c_2',
        title: 'LIVE CRM SYNCING',
        description: 'Securely extracting data, scoring leads (Hot/Warm/Cold), and updating HubSpot records during active calls.'
      },
      {
        _key: 'c_3',
        title: 'EXCEPTION HANDLING',
        description: 'Accurately identifying high-intent buyers and executing a sub-second SIP transfer to human agents with full context.'
      }
    ]
  },
  approach: {
    title: 'Travash Approach',
    subtitle: 'Automate Routine Qualification. Surface Hot Leads for Live Agents.',
    intro: 'Automate Routine Qualification. Surface Hot Leads for Live Agents.',
    steps: [
      {
        _key: 'app_0',
        stepNumber: '01',
        title: 'DISCOVER',
        description: 'Mapped out existing sales workflows and identified the most repetitive qualification questions causing administrative fatigue.'
      },
      {
        _key: 'app_1',
        stepNumber: '02',
        title: 'ARCHITECT',
        description: 'Designed a highly scalable, low-latency AI voice infrastructure using advanced Large Language Models (LLMs) and RAG.'
      },
      {
        _key: 'app_2',
        stepNumber: '03',
        title: 'INTEGRATE',
        description: 'Connected the conversational AI engine seamlessly with HubSpot CRM and Twilio SIP telephony networks.'
      },
      {
        _key: 'app_3',
        stepNumber: '04',
        title: 'AUTOMATE',
        description: 'Deployed autonomous AI agents to initiate outbound calls within 3 seconds of multichannel lead ingestion.'
      },
      {
        _key: 'app_4',
        stepNumber: '05',
        title: 'ESCALATE',
        description: 'Engineered a smart routing protocol to instantly transfer hot leads to human agents or automatically book calendar site visits.'
      }
    ]
  },
  solution: {
    title: 'The Solution',
    subtitle: 'AI Voice Agent – An Intelligent Conversational Sales Workflow',
    intro: 'AI Voice Agent – An Intelligent Conversational Sales Workflow',
    items: [
      {
        _key: 'sol_0',
        title: 'SUB-SECOND SPEED-TO-LEAD',
        description: 'Initiates an outbound phone call within 3 seconds of a prospect submitting an inquiry, eliminating lead decay.'
      },
      {
        _key: 'sol_1',
        title: 'NATURAL HUMAN-LIKE DIALOGUE',
        description: 'Leverages LLMs and Vector DBs to manage conversational nuance, understand intent, and answer precise property queries.'
      },
      {
        _key: 'sol_2',
        title: 'AUTOMATED LEAD SCORING',
        description: 'Dynamically categorizes prospects as Hot, Warm, or Cold based on budget, timeline, and intent.'
      },
      {
        _key: 'sol_3',
        title: 'SEAMLESS LIVE HANDOVER',
        description: 'Executes instant SIP transfers to human consultants for hot leads or automatically books site visits into team calendars.'
      }
    ]
  },
  techStackTitle: 'Enterprise Technology Stack',
  techStackSubtitle: 'Engineered with a high-throughput, sub-second latency voice intelligence stack to ensure human-like responsiveness and seamless CRM automation:',
  technologyStack: [
    {
      _key: 't_0',
      category: 'BACKEND ARCHITECTURE',
      displayType: 'auto',
      technologies: ['Python (FastAPI)', 'Node.js', 'PostgreSQL', 'MongoDB'],
      description: 'Asynchronous event routing and real-time state management.',
      items: [
        { _key: 'it_0_1', _type: 'techIconItem', name: 'Python', icon: 'python' },
        { _key: 'it_0_2', _type: 'techIconItem', name: 'Node.js', icon: 'nodejs' },
        { _key: 'it_0_3', _type: 'techIconItem', name: 'PostgreSQL', icon: 'postgresql' },
        { _key: 'it_0_4', _type: 'techIconItem', name: 'MongoDB', icon: 'mongodb' }
      ]
    },
    {
      _key: 't_1',
      category: 'DATABASE & INFRASTRUCTURE',
      displayType: 'auto',
      technologies: ['AWS', 'Google Cloud (Docker)', 'HubSpot CRM'],
      description: 'Elastic cloud containers and real-time CRM data synchronization.',
      items: [
        { _key: 'it_1_1', _type: 'techIconItem', name: 'AWS', icon: 'aws' },
        { _key: 'it_1_2', _type: 'techIconItem', name: 'Docker', icon: 'docker' },
        { _key: 'it_1_3', _type: 'techTextItem', text: 'Google Cloud (Docker)' },
        { _key: 'it_1_4', _type: 'techTextItem', text: 'HubSpot CRM' }
      ]
    },
    {
      _key: 't_2',
      category: 'ADVANCED INTEGRATIONS',
      displayType: 'auto',
      technologies: ['Twilio & SIP Trunking', 'n8n Enterprise', 'Deepgram (STT/TTS)'],
      description: 'Carrier-grade SIP telephony networks and ultra-low-latency voice synthesis.',
      items: [
        { _key: 'it_2_1', _type: 'techTextItem', text: 'Twilio & SIP Trunking' },
        { _key: 'it_2_2', _type: 'techTextItem', text: 'n8n Enterprise' },
        { _key: 'it_2_3', _type: 'techTextItem', text: 'Deepgram (STT/TTS)' }
      ]
    },
    {
      _key: 't_3',
      category: 'AI/AUTOMATION',
      displayType: 'auto',
      technologies: ['OpenAI GPT-4', 'Pinecone/Weaviate Vector DB (RAG)'],
      description: 'Domain-specific property knowledge retrieval and intent-guided dialogue.',
      items: [
        { _key: 'it_3_1', _type: 'techTextItem', text: 'OpenAI GPT-4' },
        { _key: 'it_3_2', _type: 'techTextItem', text: 'Pinecone/Weaviate Vector DB (RAG)' }
      ]
    }
  ],
  impact: {
    title: 'The Impact',
    subtitle: 'Turning High-Volume Lead Ingestion Into a High-Speed Growth Engine',
    content: 'Through strategic AI architecture and scalable cloud software engineering, Travash enabled Pixl to achieve immediate operational velocity and complete ROI within 60 days.',
    outcomes: [
      'Eliminated 4.2-hour average response times, dropping speed-to-lead to under 3 seconds',
      'Achieved a 310% month-over-month increase in confirmed site visit appointments',
      'Reduced repetitive administrative workload for the sales team by 72%',
      'Empowered leadership with 100% automated HubSpot CRM logging, capturing transcripts, summaries, and lead scores'
    ]
  },
  beforeAfter: {
    title: 'Before vs. After',
    subtitle: 'Transformation from manual response bottlenecks to autonomous 24/7 speed-to-lead execution.',
    beforeTitle: 'BEFORE AI VOICE AGENT',
    afterTitle: 'AFTER AI VOICE AGENT',
    before: [
      '4.2-hour average speed-to-lead, causing hot prospects to lose interest.',
      '~38% inbound lead coverage, limited strictly to standard office hours.',
      '15 minutes of manual CRM logging per call, creating massive administrative fatigue.',
      'Sales reps spent 65% of their day asking basic qualification questions.'
    ],
    after: [
      '< 3 seconds response time, engaging buyers while they are at peak intent.',
      '100% (24/7/365) coverage, answering inquiries around the clock.',
      '0 minutes of manual entry; 100% automated HubSpot CRM sync.',
      '+310% increase in booked site visits as reps focus entirely on closing deals.'
    ]
  },
  testimonialRef: {
    _type: 'reference',
    _ref: 'testimonial-pixl-sales-leadership'
  },
  testimonial: {
    heading: 'Client Perspective',
    intro: "Insights, expectations, and feedback from the client's point of view.",
    quote: "We needed a solution that could scale instantly, operate around the clock, and connect with prospective buyers immediately—without feeling like a rigid, frustrating automated phone system. Travash's AI Voice Agent transformed our sales pipeline into an automated growth engine, allowing our consultants to stop chasing unvetted leads and spend 100% of their time conducting viewings and closing deals.",
    author: 'Leadership Team',
    role: 'Sales Leadership',
    company: 'Pixl'
  },
  whyItMatters: {
    title: 'Why This Matters',
    subtitle: 'THIS CASE STUDY IS RELEVANT FOR ORGANIZATIONS MANAGING high-volume sales pipelines, rapid lead decay, and CRM automation.',
    description: "The objective wasn't simply to introduce an IVR system; it was to build a natural, context-aware dialogue engine. By automating routine qualification with human-like precision, enterprises can scale their sales efforts infinitely and secure a complete return on technology investment within 60 days.",
    items: [
      'High-volume sales pipelines experiencing rapid lead decay outside office hours',
      'Sales teams spending over 60% of their time on repetitive basic qualification questions',
      'Need for real-time, zero-latency CRM data synchronization and automated scoring',
      'Desire to harness human-sounding Conversational AI without sacrificing conversion rates'
    ]
  },
  nextStep: {
    heading: 'The Next Step',
    subtitle: 'Looking to Modernize a High-Volume Sales Pipeline or Speed-to-Lead Workflow?',
    content: 'Start with one clearly defined process to evaluate whether this high-tech, low-friction approach is right for your organization.',
    primaryCTA: {
      label: 'Discuss an AI Voice Agent Initiative',
      href: '#contact'
    },
    secondaryCTA: {
      label: 'Schedule an AI Discovery Session',
      href: '#contact'
    }
  },
  contact: {
    heading: 'Ready to automate and solve operational bottlenecks?',
    description: 'At Travash, we engineer enterprise-grade conversational AI and automation workflows that eliminate lead decay and scale customer acquisition. Visit travash.com to connect with our digital transformation experts.'
  },
  seo: {
    metaTitle: 'AI Voice Agent: How We Built a Human-Sounding Voice AI Agent that Quadrupled Site Visits | Travash',
    metaDescription: 'Natural language processing, automated lead qualification, and real-time CRM syncing engineered by Travash for Pixl.'
  }
}

async function run() {
  console.log('Patching caseStudy-direct-owners in Sanity...')
  await client.patch('caseStudy-direct-owners')
    .set(caseStudyPayload)
    .commit()
  console.log('✅ caseStudy-direct-owners updated successfully!')

  // Check if draft exists and patch it too
  const draftDoc = await client.getDocument('drafts.caseStudy-direct-owners')
  if (draftDoc) {
    console.log('Patching drafts.caseStudy-direct-owners...')
    await client.patch('drafts.caseStudy-direct-owners')
      .set(caseStudyPayload)
      .commit()
    console.log('✅ drafts.caseStudy-direct-owners updated successfully!')
  }

  // Also update U312e1WEeOlY6t2zslOOZo (portfolioProject)
  console.log('Patching U312e1WEeOlY6t2zslOOZo (portfolioProject)...')
  await client.patch('U312e1WEeOlY6t2zslOOZo')
    .set({
      title: 'AI Voice Agent: How We Built a Human-Sounding Voice AI Agent that Quadrupled Site Visits',
      shortTitle: 'AI Voice Agent',
      excerpt: 'Natural language processing, automated lead qualification, and real-time CRM syncing',
      description: 'The AI Voice Agent is an advanced conversational AI solution engineered to automate frontline sales inquiries, streamline lead qualification, and manage multichannel ingestion instantly.',
      industryName: 'Real Estate',
      serviceType: 'AI Voice Agent',
      techStack: ['Python', 'Node.js', 'PostgreSQL', 'Twilio', 'GPT-4'],
      metrics: [
        {
          value: '< 3s',
          label: 'Average speed-to-lead response time',
          description: 'Average speed-to-lead response time across all inbound inquiry channels'
        },
        {
          value: '+310%',
          label: 'Increase in confirmed site visits',
          description: 'Increase in confirmed site visit appointments'
        },
        {
          value: 'Conversational AI',
          label: 'Core Technology',
          description: 'Natural language processing, automated lead qualification, and real-time CRM syncing'
        }
      ]
    })
    .commit()
  console.log('✅ U312e1WEeOlY6t2zslOOZo updated successfully!')

  const draftPortfolio = await client.getDocument('drafts.U312e1WEeOlY6t2zslOOZo')
  if (draftPortfolio) {
    console.log('Patching drafts.U312e1WEeOlY6t2zslOOZo...')
    await client.patch('drafts.U312e1WEeOlY6t2zslOOZo')
      .set({
        title: 'AI Voice Agent: How We Built a Human-Sounding Voice AI Agent that Quadrupled Site Visits',
        shortTitle: 'AI Voice Agent',
        excerpt: 'Natural language processing, automated lead qualification, and real-time CRM syncing',
        description: 'The AI Voice Agent is an advanced conversational AI solution engineered to automate frontline sales inquiries, streamline lead qualification, and manage multichannel ingestion instantly.',
        industryName: 'Real Estate',
        serviceType: 'AI Voice Agent',
      })
      .commit()
    console.log('✅ drafts.U312e1WEeOlY6t2zslOOZo updated successfully!')
  }
}

run().catch(console.error)
