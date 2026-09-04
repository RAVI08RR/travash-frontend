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
    { label: 'CLIENT', value: 'Telangana State Police' },
    { label: 'SOLUTION', value: 'Satyaapan – Passport Verification System' },
    { label: 'INDUSTRY', value: 'Government / Public Safety' },
    {
      label: 'CAPABILITIES',
      value: 'Web Application Development • AI–Assisted Verification • Facial Recognition • Data Extraction • Workflow Automation',
    },
  ],
  metrics: [
    {
      value: '1.96 Million',
      label: 'Passport applications processed',
    },
    {
      value: '800+',
      label: 'High-risk adverse cases identified and intercepted',
    },
    {
      value: 'AI–Assisted Verification',
      label: 'Automated data extraction, facial recognition and real-time matching',
    },
    {
      value: 'Telangana State Police',
      label: 'client-badge',
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
    subtitle: 'High–Volume Passport Verification Was Creating an Administrative Bottleneck',
    content:
      'The existing verification process relied heavily on manual checks, making it difficult to efficiently screen large volumes of applications.',
    points: [
      'Duplicate passport attempts',
      'Fraudulent identities or false information',
      'Relevant matches against criminal records',
      'Applications requiring further investigation',
    ],
  },
  featureImage: '/home-img/satyapaan-min 2.png',
  complexity: {
    title: 'The Complexity',
    intro:
      'Satyaapan needed to operate within a sensitive public–safety workflow where application volume, identity verification and appropriate escalation were all critical.',
    items: [
      {
        title: 'HIGH APPLICATION VOLUME',
        description:
          'The platform needed to operate at a scale that ultimately reached 1.96 million processed applications.',
      },
      {
        title: 'IDENTITY MATCHING',
        description:
          'Applicant information needed to be evaluated for duplicate and potentially fraudulent identity scenarios.',
      },
      {
        title: 'MULTIPLE VERIFICATION SOURCES',
        description:
          'The workflow incorporated relevant records and technologies including DARPAN and AFIS – Automated Fingerprint Identification System.',
      },
      {
        title: 'EXCEPTION HANDLING',
        description:
          'Potential anomalies needed to be identified automatically while authorized officers remained responsible for further investigation.',
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

export const DEFAULT_DARPAN_DATA: CaseStudyData = {
  title: 'Darpan: AI Facial Recognition & Missing Person Retrieval Engine',
  slug: { current: 'darpan' },
  eyebrow: 'CASE STUDY',
  category: 'Artificial Intelligence',
  industry: 'Government & Public Sector',
  client: 'State Law Enforcement & Public Safety',
  location: 'India',
  shortDescription:
    'Darpan is a deep learning computer vision system developed to match missing persons and unidentified individuals in real-time across millions of state photo records with high biometric accuracy.',
  projectMeta: [
    { label: 'Industry', value: 'Government / Public Sector' },
    { label: 'Solution', value: 'Deep Learning + Computer Vision' },
    { label: 'Platform', value: 'Mobile & Cloud Infrastructure' },
    { label: 'Capabilities', value: 'Facial Recognition, Video Telemetry, Real-time Search' },
  ],
  metrics: [
    { value: '800+', label: 'Reunited Families', description: 'Verified identity matches' },
    { value: '65%', label: 'Turnaround Speedup', description: 'Compared to manual record checks' },
    { value: '99.2%', label: 'Match Confidence', description: 'Deep biometric feature vectors' },
    { value: '<2s', label: 'Search Latency', description: 'Across 10M+ facial embeddings' },
  ],
  executiveSummary: {
    title: 'Executive Summary',
    subtitle: 'Reuniting missing individuals with loved ones using cutting-edge computer vision.',
    paragraphs: [
      'Locating missing children and unidentified individuals across vast geographical regions traditionally involved manual flyer distribution, disjointed police logbooks, and weeks of administrative delay.',
      'Travash built Darpan, an AI-powered biometric facial recognition platform that extracts high-dimensional facial embeddings from field photos and cross-matches them against historical police databases in seconds.',
    ],
  },
  challenge: {
    title: 'The Challenge',
    subtitle: 'High noise, poor photo quality, and aging variations across historical photo records.',
    content:
      'Field officers frequently capture photos under poor lighting, steep angles, or with low-resolution smartphone cameras. Matching these against archival photos required deep learning models resilient to age progression and illumination shifts.',
    points: [
      'Varying lighting conditions, image blur, and off-axis camera angles in field conditions',
      'Age progression matching between childhood photos and adolescent records',
      'Massive database size requiring sub-second vector search response times',
      'Strict zero-trust security and data privacy safeguards for sensitive citizen data',
    ],
  },
  solution: {
    title: 'The Solution',
    intro: 'A secure mobile app integrated with cloud vector databases and deep neural embeddings.',
    items: [
      {
        title: 'Mobile-First Officer Interface',
        description: 'Empowers field officers to snap photos and instantly trigger biometric search queries.',
      },
      {
        title: 'Deep Facial Embedding Engine',
        description: 'Convolutional neural networks trained to identify invariant facial landmarks despite aging.',
      },
      {
        title: 'Vector Similarity Indexing',
        description: 'High-speed approximate nearest neighbor (ANN) search across millions of profiles in milliseconds.',
      },
    ],
  },
  technologyStack: [
    {
      category: 'Mobile & Frontend',
      technologies: ['Flutter', 'React', 'Tailwind CSS'],
      description: 'Cross-platform mobile application and secure administrative console.',
    },
    {
      category: 'AI & Computer Vision',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'PyTorch'],
      description: 'Facial detection, landmark alignment, and embedding extraction pipelines.',
    },
    {
      category: 'Database & Cloud',
      technologies: ['Milvus Vector DB', 'PostgreSQL', 'Docker', 'Kubernetes'],
      description: 'High-throughput vector indexing, relational audit logging, and scalable container orchestration.',
    },
  ],
  testimonial: {
    quote:
      'Darpan has given our officers a miraculous tool. Being able to photograph an unidentified child on the street and instantly locate their family across the state has transformed how we approach public safety.',
    author: 'Superintendent of Police',
    role: 'Crime Investigation Department',
    company: 'Law Enforcement',
  },
  seo: {
    metaTitle: 'Darpan: AI Facial Recognition Case Study | Travash Software Solutions',
    metaDescription:
      'Discover how Travash developed Darpan, an AI facial recognition and missing person retrieval engine for state law enforcement.',
  },
}

export const DEFAULT_IVERIFY_DATA: CaseStudyData = {
  title: 'i-Verify: Next-Gen Background Screening & Biometric Trust Platform',
  slug: { current: 'i-verify' },
  eyebrow: 'CASE STUDY',
  category: 'Enterprise Software',
  industry: 'Government & Banking',
  client: 'Enterprise Verification Consortium',
  location: 'India & UAE',
  shortDescription:
    'i-Verify provides a high-security automated candidate background check and credential verification platform with real-time public registry cross-referencing.',
  projectMeta: [
    { label: 'Industry', value: 'Technology / HR / Public Sector' },
    { label: 'Solution', value: 'Automated Document AI & Identity Verification' },
    { label: 'Platform', value: 'Enterprise Web Portal' },
    { label: 'Capabilities', value: 'OCR, Document AI, Tamper Detection, API Integrations' },
  ],
  metrics: [
    { value: '500K+', label: 'Verifications Processed', description: 'Automated candidate checks' },
    { value: '85%', label: 'Turnaround Reduction', description: 'From 10 days down to 24 hours' },
    { value: '99.8%', label: 'OCR Precision', description: 'Structured entity extraction' },
    { value: 'Zero', label: 'Compliance Breaches', description: 'Full SOC-2 & ISO 27001 posture' },
  ],
  executiveSummary: {
    title: 'Executive Summary',
    subtitle: 'Digitizing corporate and institutional trust through automated verification pipelines.',
    paragraphs: [
      'Traditional background checks took up to two weeks of manual email chains, telephone calls, and physical certificate verification, stalling corporate hiring and government clearances.',
      'Travash built i-Verify to automate educational credential validation, police registry checks, credit bureau scoring, and employment verification through encrypted API bridges and machine-learning document inspection.',
    ],
  },
  challenge: {
    title: 'The Challenge',
    subtitle: 'Eliminating fraudulent credentials and reducing weeks of onboarding latency.',
    content:
      'Employers and government contractors were vulnerable to forged diplomas, manipulated ID scans, and delayed background reports. The system required automated fraud detection coupled with authorized institutional integration.',
    points: [
      'Widespread prevalence of digitally altered PDF documents and fake seals',
      'Long waiting periods causing high candidate drop-off rates during hiring',
      'Fragmented data sources across universities, courts, and credit bureaus',
      'Strict regulatory data sovereignty and privacy mandates',
    ],
  },
  solution: {
    title: 'The Solution',
    intro: 'An intelligent pipeline combining optical character recognition with cryptographically verified API calls.',
    items: [
      {
        title: 'Document Forensic Analysis',
        description: 'Identifies pixel alterations, font inconsistencies, and metadata tampering in uploaded certificates.',
      },
      {
        title: 'Automated Registry Connectors',
        description: 'Direct API integrations with national identity, court records, and university repositories.',
      },
      {
        title: 'Applicant Self-Service Portal',
        description: 'Frictionless mobile onboarding allowing candidates to upload documents and consent in under 3 minutes.',
      },
    ],
  },
  technologyStack: [
    {
      category: 'Frontend & UI',
      technologies: ['React', 'Next.js', 'Tailwind CSS'],
      description: 'Responsive enterprise web application with real-time audit dashboards.',
    },
    {
      category: 'Backend & AI',
      technologies: ['Node.js', 'Python', 'Tesseract OCR', 'FastAPI'],
      description: 'High-concurrency microservices, document extraction, and cryptographic hash verification.',
    },
    {
      category: 'Database & Security',
      technologies: ['MongoDB', 'Redis', 'AWS KMS', 'HashiCorp Vault'],
      description: 'Field-level encrypted data storage, tokenized access, and immutable audit logs.',
    },
  ],
  testimonial: {
    quote:
      'i-Verify slashed our onboarding verification time from two weeks to under 24 hours. The tamper-detection engine has saved our enterprise from multiple fraudulent credentials.',
    author: 'Head of People Operations',
    role: 'Global Technology Enterprise',
    company: 'Enterprise Client',
  },
  seo: {
    metaTitle: 'i-Verify: Background Screening Platform Case Study | Travash Software Solutions',
    metaDescription:
      'Explore how Travash built i-Verify, an automated background check and credential verification platform processing 500K+ verifications.',
  },
}

export const DEFAULT_I4C_DATA: CaseStudyData = {
  title: 'I4C National Bank Portal: Pan-India Financial Fraud Mitigation',
  slug: { current: 'i4c-bank-portal' },
  eyebrow: 'CASE STUDY',
  category: 'Cyber Fraud Mitigation',
  industry: 'Banking & Financial Services',
  client: 'National Anti-Fraud Network',
  location: 'Pan-India',
  shortDescription:
    'The I4C portal serves as the nationwide frontline application connecting law enforcement agencies and financial institutions to coordinate immediate fund freezes upon reported cyber theft.',
  projectMeta: [
    { label: 'Industry', value: 'Banking & Financial Services / Public Sector' },
    { label: 'Solution', value: 'Real-Time Inter-Bank Fraud Intercept Platform' },
    { label: 'Platform', value: 'High-Concurrency Enterprise Web Platform' },
    { label: 'Capabilities', value: 'Sub-Minute Account Freezes, Real-Time Telemetry, Bank API Bridges' },
  ],
  metrics: [
    { value: '₹100M+', label: 'Fraud Intercepted', description: 'Stolen funds saved from cash-out' },
    { value: '<60s', label: 'Inter-Bank Freeze', description: 'Average response time across participating banks' },
    { value: '150+', label: 'Financial Institutions', description: 'Connected banks, NBFCs, and UPI payment apps' },
    { value: '99.99%', label: 'Platform Uptime', description: 'Zero downtime during nationwide transaction surges' },
  ],
  executiveSummary: {
    title: 'Executive Summary',
    subtitle: 'Halting cyber criminals in real time to protect citizens and financial systems.',
    paragraphs: [
      'Financial cyber fraud relies on swift multi-layered money transfers, where stolen funds are bounced through dozens of intermediary mule accounts within minutes.',
      'Travash engineered the I4C coordination portal to act as the nerve center uniting police departments, banks, and payment gateways, enabling automated instant account freeze orders before funds can be withdrawn at ATMs.',
    ],
  },
  challenge: {
    title: 'The Challenge',
    subtitle: 'The 60-minute golden hour: stopping money laundering across disparate banking rails.',
    content:
      'When a cyber theft occurs, victims report it to the helpline. However, by the time traditional paperwork reached a bank branch, the money had already vanished. A real-time unified communication protocol was urgently required.',
    points: [
      'Rapid velocity of mule account hopping across multiple banks and UPI gateways',
      'Heterogeneous banking core systems with differing API structures and security protocols',
      'Massive concurrency during peak hours with thousands of incident tickets logged per hour',
      'Need for ironclad chain of custody and forensic evidentiary logs for prosecution',
    ],
  },
  solution: {
    title: 'The Solution',
    intro: 'A high-throughput event-driven platform routing freeze requests straight to bank risk engines.',
    items: [
      {
        title: 'Instant Mule Trail Mapping',
        description: 'Automated transaction trace identifying downstream recipient accounts across different banks.',
      },
      {
        title: 'Direct Bank API Dispatch',
        description: 'Standardized ISO 20022 and banking webhooks triggering immediate lien-marking on compromised accounts.',
      },
      {
        title: 'Law Enforcement Dashboard',
        description: 'Single-pane-of-glass interface for cyber police officers to track recovery status and generate court evidence.',
      },
    ],
  },
  technologyStack: [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Redux Toolkit'],
      description: 'Zero-latency live operational dashboard with real-time websocket updates.',
    },
    {
      category: 'Backend & Event Streaming',
      technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'Node.js'],
      description: 'Distributed event-driven architecture handling millions of bank transactions per hour.',
    },
    {
      category: 'Databases & Resilience',
      technologies: ['PostgreSQL', 'Redis Cluster', 'Elasticsearch'],
      description: 'ACID-compliant transaction storage, in-memory caching, and sub-second audit log indexing.',
    },
  ],
  testimonial: {
    quote:
      'Travash engineered the backbone of our national fight against cyber fraud. Thanks to their robust infrastructure and rapid account-freeze capabilities, we are saving millions of citizens hard-earned rupees every single month.',
    author: 'Senior Leadership & National Coordinator',
    role: 'Cyber Crime Coordination',
    company: 'National Anti-Fraud Network',
  },
  seo: {
    metaTitle: 'I4C National Bank Portal Case Study | Travash Software Solutions',
    metaDescription:
      'Learn how Travash built the I4C portal, enabling rapid inter-bank cyber fraud intercepts and saving over ₹100M in stolen funds.',
  },
}

export const DEFAULT_UGO_DATA: CaseStudyData = {
  title: 'UGO: Intelligent Fleet Routing & Supply Chain Dispatch Platform',
  slug: { current: 'ugo' },
  eyebrow: 'CASE STUDY',
  category: 'Logistics & Supply Chain',
  industry: 'E-Commerce & Retail',
  client: 'Logistics Network Partner',
  location: 'Hyderabad, India',
  shortDescription:
    'UGO is an end-to-end fleet tracking and dispatch coordination system powering commercial transport operations with sub-second telemetry and dynamic routing.',
  projectMeta: [
    { label: 'Industry', value: 'Logistics / Supply Chain / E-Commerce' },
    { label: 'Solution', value: 'Dynamic Fleet Routing & Driver Telematics' },
    { label: 'Platform', value: 'Mobile App & Dispatcher Web Console' },
    { label: 'Capabilities', value: 'GPS Tracking, Route Optimization, Automated Proof-of-Delivery' },
  ],
  metrics: [
    { value: '35%', label: 'Fuel Savings', description: 'Through dynamic TSP route optimization' },
    { value: '99.9%', label: 'On-Time Dispatch', description: 'Real-time vehicle availability management' },
    { value: '10K+', label: 'Daily Trips Coordinated', description: 'Across regional urban and highway corridors' },
    { value: '<50ms', label: 'Telemetry Ping Latency', description: 'Continuous MQTT & WebSocket stream' },
  ],
  executiveSummary: {
    title: 'Executive Summary',
    subtitle: 'Transforming commercial logistics from chaotic dispatching into automated mathematical efficiency.',
    paragraphs: [
      'Commercial delivery networks struggled with traffic congestion, delayed departures, unoptimized multi-stop delivery routes, and blind spots in driver communications.',
      'Travash engineered UGO, a comprehensive logistics operations platform featuring driver mobile apps, real-time GPS telemetry, and automated multi-stop route optimization.',
    ],
  },
  challenge: {
    title: 'The Challenge',
    subtitle: 'Dynamic road conditions, variable delivery windows, and high fuel burn.',
    content:
      'Fleet managers previously relied on manual phone calls and static paper manifests. Deliveries were routinely missed due to unexpected bottlenecks, resulting in escalating vehicle operating costs.',
    points: [
      'High fuel consumption due to redundant routing and congested urban paths',
      'Lack of real-time visibility into vehicle locations and driver break times',
      'Disputes regarding delivery times and customer handoffs',
      'Need for an intuitive mobile application that drivers could use without extensive training',
    ],
  },
  solution: {
    title: 'The Solution',
    intro: 'An integrated mobile and web ecosystem connecting drivers, warehouse managers, and end customers.',
    items: [
      {
        title: 'Algorithmic Route Optimization',
        description: 'Computes optimal multi-stop delivery sequences factoring in real-time traffic and delivery deadlines.',
      },
      {
        title: 'Driver Companion Application',
        description: 'Turn-by-turn navigation, shipment barcodes scanning, and digital signature capture.',
      },
      {
        title: 'Fleet Command Center',
        description: 'Live interactive map showing vehicle speeds, fuel metrics, engine diagnostics, and ETA alerts.',
      },
    ],
  },
  technologyStack: [
    {
      category: 'Mobile Applications',
      technologies: ['React Native', 'Android', 'iOS', 'Expo'],
      description: 'Offline-capable mobile apps with background GPS and camera barcode scanning.',
    },
    {
      category: 'Backend & Routing Engine',
      technologies: ['Node.js', 'Go', 'Python', 'Google Maps Platform'],
      description: 'High-speed routing algorithms, graph traversal, and vehicle telemetry ingestion.',
    },
    {
      category: 'Database & IoT',
      technologies: ['PostgreSQL', 'PostGIS', 'Redis', 'AWS IoT Core'],
      description: 'Geospatial querying, temporal telemetry storage, and low-power message brokering.',
    },
  ],
  testimonial: {
    quote:
      'UGO transformed our fleet operations. Our drivers spend 35% less on fuel, our dispatchers manage twice the volume of shipments, and our customer satisfaction ratings have skyrocketed.',
    author: 'Chief Operating Officer',
    role: 'Supply Chain Operations',
    company: 'Logistics Partner',
  },
  seo: {
    metaTitle: 'UGO: Fleet Routing & Supply Chain Case Study | Travash Software Solutions',
    metaDescription:
      'Learn how Travash built UGO, an intelligent fleet routing and dispatch platform delivering 35% fuel savings and 99.9% on-time delivery.',
  },
}

export const FALLBACK_CASE_STUDIES: Record<string, CaseStudyData> = {
  satyapaan: DEFAULT_SATYAPAAN_DATA,
  darpan: DEFAULT_DARPAN_DATA,
  'i-verify': DEFAULT_IVERIFY_DATA,
  i4c: DEFAULT_I4C_DATA,
  'i4c-bank-portal': DEFAULT_I4C_DATA,
  ugo: DEFAULT_UGO_DATA,
}
