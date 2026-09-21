import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const DEFAULT_PIXL_DATA = {
  _id: 'caseStudy-pixl',
  title: 'How We Built a Human-Sounding Voice AI Agent that Quadrupled Site Visits for Pixl',
  slug: { current: 'pixl' },
  eyebrow: 'CASE STUDY',
  category: 'Enterprise AI & Voice Automation',
  industry: 'Real Estate & PropTech',
  client: 'Pixl',
  location: 'Global / UAE & USA',
  shortDescription:
    'How Travash engineered a bespoke, low-latency AI Voice Calling Agent that connects with inbound prospects in under 3 seconds, qualifies buyer intent, and quadrupled confirmed site visits for Pixl.',
  heroImage: { asset: { url: '/casestudy-thumbs/pixl-crm.png' } },
  featureImage: '/casestudy-thumbs/pixl-crm.png',
  projectMeta: [
    { label: 'CLIENT', value: 'Pixl' },
    { label: 'SOLUTION', value: 'Bespoke Conversational Voice AI Agent' },
    { label: 'INDUSTRY', value: 'Real Estate & PropTech' },
    {
      label: 'CAPABILITIES',
      value: 'Conversational LLMs • Voice AI (STT/TTS) • RAG Knowledge Base • Telephony SIP • Automated CRM Sync',
    },
  ],
  metrics: [
    {
      value: '< 3s',
      label: 'Speed-to-Lead Response Time',
      description: 'Dropped from 4.2 hours to sub-3-second instant outbound calls',
    },
    {
      value: '+310%',
      label: 'Confirmed Site Visits',
      description: 'Increase in booked appointments month-over-month',
    },
    {
      value: '72%',
      label: 'Administrative Workload Drop',
      description: 'Eliminated repetitive qualification overhead for sales consultants',
    },
    {
      value: '100%',
      label: 'HubSpot CRM Automation',
      description: 'Transcripts, summaries, scores, and recordings logged with zero manual entry',
    },
  ],
  executiveSummary: {
    title: 'Executive Snapshot',
    subtitle: 'If you manage sales in real estate, time is your biggest competitor.',
    paragraphs: [
      'When a prospective buyer submits an enquiry on Facebook, Google, or a property portal, they are at peak interest. If your team calls them within three minutes, your chances of booking a viewing are exceptionally high. Wait an hour, and that lead has already moved on to three other listings.',
      'Our client, Pixl, a rapidly scaling real estate agency handling high-volume residential and commercial developments, hit an operational bottleneck: lead decay during off-hours, sales fatigue from repetitive qualification calls, and inconsistent CRM records. Travash engineered a bespoke, low-latency AI Voice Calling Agent that listens, pauses naturally, answers complex property specifications on the fly, and guides every conversation toward confirmed calendar site visits.',
    ],
  },
  challenge: {
    title: 'The Backstory',
    subtitle: 'The Speed-to-Lead Dilemma in High-Volume Real Estate Sales',
    content: 'Pixl encountered three critical operational bottlenecks that capped conversion velocity:',
    points: [
      'Lead Decay: Enquiries flooded in 24/7, but human sales agents could only respond during office hours, leaving hot prospects waiting for hours.',
      'Administrative Fatigue: Experienced consultants spent over 65% of their working day asking basic qualification questions instead of closing deals.',
      'Inconsistent CRM Data: Busy agents took sketchy notes or forgot to update HubSpot altogether, leaving management with incomplete pipeline visibility.',
    ],
  },
  complexity: {
    title: 'Engineering Complexity',
    intro:
      'Replacing human sales calls with an automated agent requires sub-second telephony latency, contextual reasoning, and dynamic speech synthesis.',
    items: [
      {
        title: 'SUB-SECOND SPEED-TO-LEAD',
        description: 'Outbound calls must be triggered within 3 seconds of web submission while the prospect is still looking at the property listing.',
      },
      {
        title: 'NATURAL SPEECH CADENCES',
        description: 'Eliminates robotic IVR menus through neural TTS, voice activity detection (VAD), and natural conversational pauses.',
      },
      {
        title: 'DYNAMIC RAG KNOWLEDGE',
        description: 'Vector-indexed access to live floor plans, pricing tiers, zoning rules, and local neighborhood amenities.',
      },
      {
        title: 'LIVE SIP HANDOVER',
        description: 'Executes instantaneous live telephony handovers to human sales consultants when ultra-high-budget intent is detected.',
      },
    ],
  },
  approach: {
    title: 'Travash Approach',
    intro: 'A Voice Agent that Chats Like a Real Person with Single-Minded Focus on Site Visit Conversion.',
    steps: [
      {
        stepNumber: '01',
        title: 'Multi-Channel Ingestion',
        description: 'Configure real-time webhooks capturing inbound lead payloads from Facebook Ads, Google Ads, portals, WhatsApp, and websites.',
      },
      {
        stepNumber: '02',
        title: 'Sub-Second Voice Orchestration',
        description: 'Trigger automated outbound telephony via Twilio SIP trunking within 3 seconds of lead creation.',
      },
      {
        stepNumber: '03',
        title: 'RAG Knowledge Retrieval',
        description: 'Pair GPT-4 with Pinecone vector search to access real-time property inventory, pricing tiers, and community specifications.',
      },
      {
        stepNumber: '04',
        title: 'Intelligent Lead Qualification',
        description: 'Autonomously score leads across budget, location, purchasing timeline (0–30 days vs 1–3 months), and financing status.',
      },
      {
        stepNumber: '05',
        title: 'Calendar Booking & CRM Sync',
        description: 'Confirm site visits directly into agent calendars and push structured summaries, recordings, and scores to HubSpot.',
      },
    ],
  },
  solution: {
    title: 'The Solution',
    intro: 'End-to-End Voice AI Orchestration Converting Raw Inquiries into Confirmed Calendar Bookings',
    items: [
      {
        title: 'Multi-Channel Lead Ingestion',
        description: 'Custom webhooks capture lead payloads across ad networks, portals, WhatsApp, and websites within milliseconds.',
      },
      {
        title: 'Sub-Second Speed-to-Lead',
        description: 'AI agent dials the prospective buyer within 3 seconds of enquiry submission while interest is at its absolute peak.',
      },
      {
        title: 'Natural Context-Aware Dialogue',
        description: 'Powered by GPT-4 and vector search, answering intricate property specifications and layout questions accurately on the fly.',
      },
      {
        title: 'Automated Calendar Booking & SIP Handover',
        description: 'Negotiates available viewing slots on team calendars in real time, or executes sub-second SIP transfer to human consultants.',
      },
    ],
  },
  technologyStack: [
    {
      category: 'Conversational Intelligence',
      technologies: ['OpenAI GPT-4', 'GPT-4.1 Turbo', 'Contextual Prompt Chains'],
      description: 'Contextual reasoning, intent recognition, and multi-turn real estate dialogue management.',
    },
    {
      category: 'Knowledge Retrieval (RAG)',
      technologies: ['Pinecone Vector DB', 'Weaviate', 'Semantic Embeddings'],
      description: 'Sub-50ms property specification, layout, and pricing retrieval.',
    },
    {
      category: 'Voice & Speech AI',
      technologies: ['Deepgram STT', 'Neural TTS', 'Voice Activity Detection (VAD)'],
      description: 'Human-like cadences, zero robotic pauses, and natural interruption handling.',
    },
    {
      category: 'Telephony & Automation',
      technologies: ['Twilio SIP Trunking', 'n8n Enterprise', 'FastAPI', 'HubSpot API'],
      description: 'Telephony routing, microservice orchestration, and automated two-way CRM sync.',
    },
  ],
  impact: {
    title: 'Measurable Business Impact',
    subtitle: 'In the first 90 days following deployment, Pixl transformed its sales pipeline into an automated growth engine.',
    content:
      'Operational efficiencies delivered a complete return on technology investment within 60 days. Sales representatives reclaimed 25+ hours per week to focus 100% of their working time on conducting viewings and closing deals.',
    outcomes: [
      'Speed-to-lead plummeted from 4.2 hours to < 3 seconds (instant outbound outreach)',
      'Inbound lead coverage scaled from 38% (office hours only) to 100% (24/7/365 availability)',
      '+310% increase in confirmed site visits booked month-over-month',
      'Sales consultants reclaimed 25+ hours per week previously spent on repetitive vetting',
      'Cost per qualified lead dropped by 64%',
      '100% automated CRM data logging in HubSpot with zero manual entry',
    ],
  },
  beforeAfter: {
    title: 'Operational Metrics: Before vs. After',
    subtitle: 'From Manual Delays to Instant Conversational Execution',
    beforeTitle: 'BEFORE TRAVASH',
    afterTitle: 'AFTER TRAVASH',
    before: [
      '4.2 Hours average speed-to-lead response time',
      '~38% inbound lead coverage (limited to office hours)',
      'Baseline site visit appointment rate',
      '15 minutes of manual CRM data entry per call',
      'High cost per qualified lead due to severe lead decay',
    ],
    after: [
      '< 3 Seconds instant outbound speed-to-lead',
      '100% coverage (24/7/365 across all marketing channels)',
      '+310% increase in confirmed appointments booked',
      '0 minutes CRM time (100% automated sync with audio & transcripts)',
      '64% reduction in acquisition cost per qualified lead',
    ],
  },
  testimonial: {
    heading: 'Client Perspective',
    intro: "Insights, expectations, and feedback from the client's point of view.",
    quote:
      'Deploying Travash Voice AI transformed our sales floor. Our consultants stopped chasing unvetted leads and now spend 100% of their working hours conducting viewings and closing deals. It paid for itself in under 60 days.',
    author: 'Pixl Sales Leadership',
    role: 'Head of Sales Operations',
    company: 'Pixl Real Estate',
  },
  whyItMatters: {
    title: 'Why This Matters for High-Ticket Sales',
    subtitle: 'Does Your Business Suffer from Lead Decay and Administrative Gridlock?',
    items: [
      'Eliminating lead decay by reaching buyers while their inquiry is top of mind',
      'Relieving top-performing sales consultants from routine qualification calls',
      'Achieving 100% pipeline visibility with automated structured CRM data',
      'Operating 24/7 across global investor time zones with zero incremental staff costs',
    ],
  },
  nextStep: {
    heading: 'The Next Step',
    subtitle: 'Looking to Modernize a High-Volume Verification or Public-Safety Workflow?',
    content:
      'Ready to automate your sales pipeline and eliminate manual admin? Travash partners with growing companies to design, build, and deploy production-ready AI agents, automated workflow engines, and enterprise integrations tailored specifically to your operational goals.',
    primaryCTA: { label: 'Schedule an AI Strategy Call', href: '#contact' },
    secondaryCTA: { label: 'Request Voice AI Architecture Demo', href: '#contact' },
  },
  contact: {
    heading: 'Ready to automate and solve operational bottlenecks?',
    description:
      'At Travash, we engineer enterprise-grade AI and automation solutions that solve complex business challenges and streamline operations. Connect with our digital transformation experts.',
  },
};

function formatForSanity(csData) {
  return {
    _type: 'caseStudy',
    title: csData.title,
    slug: { _type: 'slug', current: csData.slug?.current || 'pixl' },
    eyebrow: csData.eyebrow || 'CASE STUDY',
    category: csData.category || 'Enterprise AI & Voice Automation',
    industry: csData.industry || 'Real Estate & PropTech',
    client: csData.client || 'Pixl',
    location: csData.location || 'Global / UAE & USA',
    shortDescription: csData.shortDescription,
    portfolioTitle: 'Pixl - AI Voice Calling Agent',
    cardDescription: csData.shortDescription,

    projectMeta: (csData.projectMeta || []).map((item, idx) => ({
      _key: `meta_${idx + 1}`,
      label: item.label,
      value: item.value,
    })),

    metrics: (csData.metrics || []).map((item, idx) => ({
      _key: `m_${idx}`,
      value: item.value,
      label: item.label,
      description: item.description || '',
    })),

    executiveSummary: csData.executiveSummary ? {
      title: csData.executiveSummary.title || 'Executive Snapshot',
      subtitle: csData.executiveSummary.subtitle || '',
      paragraphs: csData.executiveSummary.paragraphs || [],
    } : undefined,

    challenge: csData.challenge ? {
      title: csData.challenge.title || 'The Backstory',
      subtitle: csData.challenge.subtitle || '',
      content: csData.challenge.content || '',
      pointsLabel: csData.challenge.pointsLabel || 'KEY BOTTLENECKS:',
      points: csData.challenge.points || [],
      takeaway: csData.challenge.takeaway || '',
    } : undefined,

    complexity: csData.complexity ? {
      title: csData.complexity.title || 'Engineering Complexity',
      intro: csData.complexity.intro || '',
      items: (csData.complexity.items || []).map((item, idx) => ({
        _key: `c_${idx}`,
        title: item.title,
        description: item.description,
        icon: item.icon || '',
      })),
    } : undefined,

    approach: csData.approach ? {
      title: csData.approach.title || 'Travash Approach',
      subtitle: csData.approach.subtitle || csData.approach.intro || '',
      intro: csData.approach.intro || '',
      steps: (csData.approach.steps || []).map((step, idx) => ({
        _key: `s_${idx}`,
        stepNumber: step.stepNumber || String(idx + 1).padStart(2, '0'),
        title: step.title,
        description: step.description,
      })),
    } : undefined,

    solution: csData.solution ? {
      title: csData.solution.title || 'The Solution',
      subtitle: csData.solution.subtitle || csData.solution.intro || '',
      intro: csData.solution.intro || '',
      items: (csData.solution.items || []).map((item, idx) => ({
        _key: `sol_${idx}`,
        title: item.title,
        description: item.description,
      })),
    } : undefined,

    technologyStack: Array.isArray(csData.technologyStack)
      ? csData.technologyStack.map((cat, idx) => ({
          _key: `t_${idx}`,
          category: cat.category,
          displayType: 'icons',
          items: (cat.technologies || []).map((t, tidx) => ({
            _key: `item_${tidx}`,
            _type: 'techIconItem',
            name: typeof t === 'string' ? t : t.name || t.title,
          })),
          technologies: (cat.technologies || []).map(t => (typeof t === 'string' ? t : t.name || t.title)),
          description: cat.description || '',
        }))
      : undefined,

    impact: csData.impact ? {
      title: csData.impact.title || 'Measurable Business Impact',
      subtitle: csData.impact.subtitle || '',
      content: csData.impact.content || '',
      outcomes: csData.impact.outcomes || [],
    } : undefined,

    beforeAfter: csData.beforeAfter ? {
      title: csData.beforeAfter.title || 'Operational Metrics: Before vs. After',
      subtitle: csData.beforeAfter.subtitle || '',
      beforeTitle: csData.beforeAfter.beforeTitle || 'BEFORE TRAVASH',
      afterTitle: csData.beforeAfter.afterTitle || 'AFTER TRAVASH',
      before: csData.beforeAfter.before || [],
      after: csData.beforeAfter.after || [],
    } : undefined,

    testimonial: csData.testimonial ? {
      heading: csData.testimonial.heading || 'Client Perspective',
      intro: csData.testimonial.intro || "Insights, expectations, and feedback from the client's point of view.",
      quote: csData.testimonial.quote || '',
      author: csData.testimonial.author || csData.testimonial.name || '',
      role: csData.testimonial.role || csData.testimonial.designation || '',
      company: csData.testimonial.company || '',
    } : undefined,

    whyItMatters: csData.whyItMatters ? {
      title: csData.whyItMatters.title || 'Why This Matters for High-Ticket Sales',
      subtitle: csData.whyItMatters.subtitle || '',
      description: csData.whyItMatters.description || '',
      items: csData.whyItMatters.items || [],
    } : undefined,

    nextStep: csData.nextStep ? {
      heading: csData.nextStep.heading || 'The Next Step',
      subtitle: csData.nextStep.subtitle || '',
      content: csData.nextStep.content || '',
      primaryCTA: csData.nextStep.primaryCTA || { label: 'Discuss Your Initiative', href: '#contact' },
      secondaryCTA: csData.nextStep.secondaryCTA || { label: 'Schedule a Consultation', href: '#contact' },
    } : undefined,

    seo: {
      metaTitle: `${csData.title} | Travash Software Solutions`,
      metaDescription: csData.shortDescription,
    }
  };
}

async function run() {
  console.log('Seeding & Publishing caseStudy-pixl to Sanity CMS...\n');

  const formattedDoc = formatForSanity(DEFAULT_PIXL_DATA);

  // 1. Create or replace published document caseStudy-pixl
  const publishedDoc = {
    ...formattedDoc,
    _id: 'caseStudy-pixl',
  };

  await client.createOrReplace(publishedDoc);
  console.log('✓ Successfully created/replaced published document: caseStudy-pixl');

  // 2. Ensure any existing draft is deleted or aligned
  try {
    await client.delete('drafts.caseStudy-pixl');
    console.log('✓ Cleared drafts.caseStudy-pixl');
  } catch {
    // ignore
  }

  // 3. Verify fetch
  const verified = await client.fetch(`*[_type == "caseStudy" && slug.current == "pixl"][0]{ _id, title, "slug": slug.current, client }`);
  console.log('\n=== VERIFICATION RESULT ===');
  console.log(JSON.stringify(verified, null, 2));
}

run().catch(err => {
  console.error('Error seeding pixl to Sanity:', err);
  process.exit(1);
});
