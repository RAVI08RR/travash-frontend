export interface CaseStudyData {
  _id?: string
  title: string
  slug: { current: string }
  eyebrow?: string
  category?: string
  industry?: string
  client?: string
  location?: string
  shortDescription?: string
  heroImage?: { asset?: { url: string } }
  projectMeta?: { label: string; value: string }[]
  metrics?: { value: string; label: string; description?: string }[]
  executiveSummary?: {
    title?: string
    subtitle?: string
    paragraphs: string[]
  }
  challenge?: {
    title?: string
    subtitle?: string
    content?: string
    points: string[]
  }
  featureImage?: { asset?: { url: string } } | string
  complexity?: {
    title?: string
    intro?: string
    items: { title: string; description: string; icon?: string }[]
  }
  approach?: {
    title?: string
    intro?: string
    steps: { stepNumber?: string; title: string; description: string }[]
  }
  solution?: {
    title?: string
    intro?: string
    items: { title: string; description: string }[]
  }
  solutionArchitecture?: {
    title?: string
    intro?: string
    image?: { asset?: { url: string } }
    caption?: string
  }
  technologyStack?: {
    category: string
    technologies: string[]
    description?: string
  }[]
  impact?: {
    title?: string
    subtitle?: string
    content?: string
    outcomes: string[]
  }
  beforeAfter?: {
    title?: string
    subtitle?: string
    beforeTitle?: string
    afterTitle?: string
    before: string[]
    after: string[]
  }
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
    image?: { asset?: { url: string } }
  }
  whyItMatters?: {
    title?: string
    subtitle?: string
    items: string[]
  }
  nextStep?: {
    heading?: string
    content?: string
    primaryCTA?: { label: string; href: string }
    secondaryCTA?: { label: string; href: string }
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: { asset?: { url: string } }
  }
}

export const DEFAULT_SATYAPAAN_DATA: CaseStudyData = {
  _id: 'caseStudy-satyapaan',
  title: 'AI-Powered Passport Verification at Scale: 1.96 Million Applications Processed',
  slug: { current: 'satyapaan' },
  eyebrow: 'CASE STUDY',
  category: 'Enterprise AI / Public Sector',
  industry: 'Government & Public Sector',
  client: 'Telangana State Police',
  location: 'Telangana, India',
  shortDescription:
    'Satyaapan is a web-based passport verification platform developed by Travash to help Telangana State Police automate high-volume identity screening, identify potential anomalies and route applications requiring further investigation to authorized officials.',
  projectMeta: [
    { label: 'Industry', value: 'Government / Public Sector' },
    { label: 'Solution', value: 'Enterprise AI + Passport Verification' },
    { label: 'Region', value: 'India' },
    {
      label: 'Core Capabilities',
      value: 'AI, Automated Data Extraction, Facial Recognition, Verification Automation',
    },
  ],
  metrics: [
    {
      value: '1.96 Million',
      label: 'Passport Applications Processed',
      description: 'Centralized high-throughput verification at state scale',
    },
    {
      value: '800+',
      label: 'High-Risk Records Identified',
      description: 'Adverse cases intercepted before passport issuance',
    },
    {
      value: 'AI-Assisted',
      label: 'Verification Workflow',
      description: 'Automated data extraction, facial recognition & real-time matching',
    },
    {
      value: 'Telangana Police',
      label: 'Client / Technology Partner',
      description: 'Securing public registry and identity integrity',
    },
  ],
  executiveSummary: {
    title: 'Executive Summary',
    subtitle: 'Passport verification at scale required significant administrative effort while maintaining strong identity and security checks.',
    paragraphs: [
      'Passport verification at scale required significant administrative effort while maintaining strong identity and security checks. Travash developed Satyaapan, a centralized web application that combines automated data extraction, facial recognition and real-time matching to support passport verification.',
      'Clear applications can proceed through a structured clearance workflow, while potential anomalies are placed on hold and routed to the relevant officer or manager for investigation. The platform has successfully processed 1.96 million passport applications and helped identify and intercept 800+ high-risk adverse cases.',
    ],
  },
  challenge: {
    title: 'The Challenge',
    subtitle: 'Officials needed to identify critical security risks while processing surging volumes of applications.',
    content:
      'Traditional passport verification relied heavily on manual document inspection and fragmented record cross-referencing across departments, creating operational bottlenecks and risk of oversight.',
    points: [
      'Duplicate passport attempts and identity spoofing across jurisdictions',
      'Fraudulent identities or false biographical information submitted in applications',
      'Relevant cross-department matches against state and national criminal records',
      'Applications requiring further in-depth field investigation and escalation',
    ],
  },
  featureImage: '/home-img/satyapaan-min 2.png',
  complexity: {
    title: 'The Complexity',
    intro:
      'Satyaapan needed to operate within a sensitive public-safety workflow where application volume, identity verification and appropriate escalation were all critical.',
    items: [
      {
        title: 'High Application Volume',
        description:
          'The platform needed to operate at massive scale that ultimately reached 1.96 million processed applications without performance degradation.',
        icon: 'volume',
      },
      {
        title: 'Identity Matching',
        description:
          'Applicant information needed to be evaluated for duplicate records and potentially fraudulent identity scenarios across historical data.',
        icon: 'identity',
      },
      {
        title: 'Multiple Verification Sources',
        description:
          'The workflow required seamless interoperability with law enforcement databases including DARPAN and AFIS (Automated Fingerprint Identification System).',
        icon: 'sources',
      },
      {
        title: 'Exception Handling & Escalation',
        description:
          'Potential anomalies needed to be flagged automatically while authorized officers remained strictly responsible for investigation and clearance.',
        icon: 'exception',
      },
    ],
  },
  approach: {
    title: 'Travash Approach',
    intro: 'Automate Routine Screening. Surface Exceptions for Investigation.',
    steps: [
      {
        stepNumber: '01',
        title: 'Discover',
        description:
          'Understand the end-to-end passport verification process, operational bottlenecks, regulatory standards, and the exact information officials needed to evaluate applications.',
      },
      {
        stepNumber: '02',
        title: 'Architect',
        description:
          'Design a centralized, fault-tolerant web application capable of supporting automated data extraction, identity screening, biometric matching, and multi-tier role-based routing.',
      },
      {
        stepNumber: '03',
        title: 'Integrate',
        description:
          'Connect the platform securely with required verification technologies including DARPAN, AFIS, and relevant internal police intelligence records.',
      },
      {
        stepNumber: '04',
        title: 'Automate',
        description:
          'Deploy AI-assisted processing, advanced facial recognition, and real-time data matching to eliminate repetitive manual screening.',
      },
      {
        stepNumber: '05',
        title: 'Escalate',
        description:
          'Establish an automated dual-track workflow: clear applications proceed smoothly, while potential anomalies are placed on immediate hold for officer review.',
      },
    ],
  },
  solution: {
    title: 'The Solution',
    intro: 'Satyaapan – An Intelligent Digital Verification Workflow',
    items: [
      {
        title: 'Automated Application Ingestion',
        description:
          'Passport application data from external portals enters a structured, encrypted digital workflow ready for instantaneous processing.',
      },
      {
        title: 'Intelligent Data Extraction',
        description:
          'Relevant applicant personal information, historical references, and document data are extracted automatically with high accuracy.',
      },
      {
        title: 'Facial Recognition & Real-Time Matching',
        description:
          'Applicant facial imagery and biographical profiles are cross-checked in real-time against police watchlists and criminal records.',
      },
      {
        title: 'Automated Clearance / Hold Workflow',
        description:
          'Clear applications transition directly through structured approval, while flagged anomalies trigger audit trails and investigator alerts.',
      },
    ],
  },
  solutionArchitecture: {
    title: 'Solution Architecture',
    intro:
      'A multi-tier enterprise architecture engineered for high availability, zero-trust security, and real-time interoperability between public safety databases.',
    caption: 'Figure: Satyaapan Multi-Tier AI Verification & Escalation Architecture',
  },
  technologyStack: [
    {
      category: 'Backend & Core Services',
      technologies: ['Java', 'PHP / Laravel', 'RESTful Microservices', 'Secure API Gateways'],
      description: 'High-throughput enterprise application logic and secure session management.',
    },
    {
      category: 'Database & Data Storage',
      technologies: ['MySQL Enterprise', 'Encrypted Blob Storage', 'Redis In-Memory Cache'],
      description: 'ACID-compliant relational storage for millions of applicant verification records.',
    },
    {
      category: 'Frontend & Official Portal',
      technologies: ['HTML5', 'CSS3', 'Modern JavaScript / jQuery', 'Responsive Admin Portal'],
      description: 'Fast, accessible verification interface designed for law enforcement officers.',
    },
    {
      category: 'Integrations & AI Automation',
      technologies: [
        'DARPAN System Integration',
        'AFIS (Automated Fingerprint Identification)',
        'Advanced Facial Recognition',
        'Automated Data Extraction Engine',
      ],
      description: 'Biometric and law enforcement registry integration with real-time matching algorithms.',
    },
  ],
  impact: {
    title: 'The Impact',
    subtitle: 'Turning High-Volume Manual Verification Into an AI-Assisted Digital Workflow',
    content:
      'By replacing manual document cross-checking with AI-assisted verification, Telangana State Police achieved unprecedented turnaround speeds while significantly strengthening border and passport integrity.',
    outcomes: [
      'Reduced manual effort and accelerated verification turnaround times by over 65%',
      'Improved accuracy and consistency across every verification request statewide',
      'Automated repetitive checks to eliminate severe administrative bottlenecks',
      'Enabled seamless processing of 1.96 million high-volume passport applications',
      'Freed specialized law enforcement teams to focus on complex cases and critical security decisions',
      'Created a scalable, future-proof public safety workflow adaptable to other civic verification needs',
    ],
  },
  beforeAfter: {
    title: 'Before vs. After',
    subtitle: 'Transformation from manual / fragmented processes to AI-assisted digital verification.',
    beforeTitle: 'BEFORE SATYAPAAN',
    before: [
      'Manual application screening requiring extensive administrative paperwork',
      'Slow, error-prone manual document and photo review across separate registries',
      'Difficult cross-checking against disjointed police and criminal records',
      'Identical high-effort manual scrutiny required even for standard, clear applications',
      'Surging passport demand exponentially increased backlog and operational strain',
    ],
    afterTitle: 'AFTER SATYAPAAN',
    after: [
      'AI-assisted verification processing applications in real-time',
      'Automated document and biographical data extraction with high precision',
      'Facial recognition + real-time matching against DARPAN and AFIS databases',
      'Dual-track clearance workflow automatically routing only flagged cases to officers',
      'Centralized enterprise platform easily scaling to support 1.96M+ applications',
    ],
  },
  testimonial: {
    quote:
      'Satyaapan demonstrated how thoughtful enterprise technology and AI automation can revolutionize public safety workflows. By automatically screening routine applications and immediately surfacing high-risk cases, our teams were empowered to protect state integrity with speed and precision.',
    author: 'Public Safety & Technology Initiative',
    role: 'Senior Law Enforcement Leadership',
    company: 'Telangana State Police',
  },
  whyItMatters: {
    title: 'Why This Matters',
    subtitle: 'Does Your Organization Face a Similar Challenge?',
    items: [
      'Managing high-volume identity, credential, or application verification at scale',
      'Detecting fraud, duplicate records, or altered identities across historical datasets',
      'Coordinating multiple legacy databases, external registries, and biometric tools',
      'Automating routine screening while maintaining human-in-the-loop governance for high-stakes decisions',
    ],
  },
  nextStep: {
    heading: 'The Next Step',
    content:
      'The objective is not simply to introduce AI. Travash combines custom software development, web application development, AI-assisted automation and system integration to modernize high-volume operational workflows. Start with one clearly defined process or use case and determine whether the right next step is an assessment, POC or implementation.',
    primaryCTA: {
      label: 'Discuss a Public Safety Technology Initiative',
      href: '#contact',
    },
    secondaryCTA: {
      label: 'Discuss an AI / Automation POC',
      href: '#contact',
    },
  },
  seo: {
    metaTitle: 'AI-Powered Passport Verification Case Study | Travash Software Solutions',
    metaDescription:
      'Explore the Satyapaan case study by Travash—how Telangana State Police processed 1.96 million passport applications and intercepted 800+ adverse cases with AI verification.',
  },
}
