export interface IndustryMetric {
  value: string
  label: string
}

export interface IndustryChallenge {
  title: string
  problem: string
  solution: string
}

export interface IndustryCapability {
  title: string
  description: string
  icon?: string
}

export interface IndustryDetailData {
  slug: string
  title: string
  shortTitle?: string
  eyebrow: string
  tagline: string
  heroImage: string
  overview: string
  metrics: IndustryMetric[]
  challenges: IndustryChallenge[]
  capabilities: IndustryCapability[]
  technologies: string[]
  compliance: string[]
  caseStudyHighlight?: {
    title: string
    client: string
    description: string
    metric: string
    metricLabel: string
    href: string
  }
}

export const INDUSTRIES_MAP: Record<string, IndustryDetailData> = {
  fintech: {
    slug: 'fintech',
    title: 'Banking & Financial Services',
    shortTitle: 'FinTech',
    eyebrow: 'FINANCIAL TECHNOLOGY & BANKING',
    tagline: 'High-throughput core banking APIs, sub-millisecond payment processing, zero-trust fraud defense, and regulatory compliance.',
    heroImage: 'https://travash.com/wp-content/uploads/2026/08/Banking-Financial-Services.webp',
    overview:
      'The modern financial landscape demands sub-second transaction speeds, ironclad security, and strict regulatory compliance. We architect microservices-driven banking platforms, automated algorithmic risk scoring, and zero-trust verification systems that power millions of transactions each month without degradation.',
    metrics: [
      { value: '12M+', label: 'Monthly Transactions Processed' },
      { value: '<80ms', label: 'Core Banking API Response' },
      { value: '99.999%', label: 'Infrastructure Availability SLA' },
      { value: 'Zero-Trust', label: 'Fraud Shield Architecture' },
    ],
    challenges: [
      {
        title: 'Legacy Core Banking Monoliths',
        problem: 'Decades-old mainframes struggle to support real-time open banking APIs, causing downtime during peak payment volumes.',
        solution: 'We architect modern event-driven microservices strangler patterns that decouple legacy databases and enable instant API responses.',
      },
      {
        title: 'Sub-Second Fraud & Identity Theft',
        problem: 'Sophisticated synthetic identities and bot attacks bypass traditional static rule-based security filters.',
        solution: 'We integrate real-time anomaly detection AI models and behavioral biometrics that evaluate risks in under 50 milliseconds.',
      },
      {
        title: 'Strict Multi-Jurisdiction Compliance',
        problem: 'Navigating evolving PCI-DSS, SOC 2 Type II, and central bank regulations across borders requires heavy auditing overhead.',
        solution: 'Automated compliance auditing pipelines with immutable cryptographic logging and end-to-end tokenization.',
      },
    ],
    capabilities: [
      {
        title: 'Core Payment & Open Banking APIs',
        description: 'Scalable payment orchestrations supporting ACH, SEPA, UPI, Faster Payments, and SWIFT integrations.',
      },
      {
        title: 'AI Algorithmic Fraud Detection',
        description: 'Machine learning pipelines scoring risk vectors, velocity checks, and transaction anomalies in real time.',
      },
      {
        title: 'WealthTech & Portfolio Portals',
        description: 'Multi-asset trading interfaces, real-time market data streaming, and automated financial advisory tools.',
      },
      {
        title: 'Lending & Credit Scoring Engines',
        description: 'Automated underwriting workflows connecting credit bureaus, bank statements, and alternative data sources.',
      },
    ],
    technologies: ['Java', 'Go', 'Kafka', 'PostgreSQL', 'Redis', 'Docker', 'AWS GovCloud', 'GraphQL'],
    compliance: ['PCI-DSS Level 1', 'SOC 2 Type II', 'ISO 27001', 'GDPR', 'Open Banking UK/EU'],
    caseStudyHighlight: {
      title: 'High-Volume Digital Banking Experience & API Modernization',
      client: 'Kotak & FinTech Consortium',
      description: 'Engineered microservices backend handling 12M+ monthly active transactions with <80ms latency and AI fraud shield.',
      metric: '12M+',
      metricLabel: 'Monthly Txns',
      href: '/work',
    },
  },

  government: {
    slug: 'government',
    title: 'Government & Public Sector',
    shortTitle: 'GovTech',
    eyebrow: 'GOVTECH & SOVEREIGN DIGITAL SERVICES',
    tagline: 'Sovereign digital identity platforms, citizen portal modernization, tamper-proof audit trails, and strict compliance.',
    heroImage: 'https://travash.com/wp-content/uploads/2026/08/Government-Public-Sector.png',
    overview:
      'Public sector institutions require technology that is universally accessible, resilient against cyber threats, and capable of processing millions of citizen interactions reliably. Travash delivers sovereign digital transformation projects that eliminate bureaucratic delays and establish trustworthy civic digital infrastructure.',
    metrics: [
      { value: '1.9M+', label: 'Citizens Verified Online' },
      { value: '99.7%', label: 'Automated Document Accuracy' },
      { value: 'SIAC Certified', label: 'National Registry Compliance' },
      { value: '100%', label: 'Data Sovereignty Maintained' },
    ],
    challenges: [
      {
        title: 'Fragmented Siloed Public Records',
        problem: 'Departments rely on disconnected databases, forcing citizens to navigate fragmented physical verification queues.',
        solution: 'We build unified API interoperability gateways that connect disparate agencies under sovereign data access controls.',
      },
      {
        title: 'Document Fraud & Manual Verification',
        problem: 'Manual inspection of passports, identity cards, and civil records creates backlogs and invites forgery.',
        solution: 'Implemented computer vision and optical character recognition (OCR) models achieving 99.7% automated verification accuracy.',
      },
      {
        title: 'Strict Sovereign Data Regulations',
        problem: 'Public sector digital assets cannot leave domestic borders or be processed on uncertified foreign clouds.',
        solution: 'Architected sovereign on-premises and certified localized cloud clusters with zero external data egress.',
      },
    ],
    capabilities: [
      {
        title: 'Digital Citizen Portals',
        description: 'WCAG 2.1 AA accessible web applications providing multilingual citizen service self-service workflows.',
      },
      {
        title: 'Automated Document & ID Extraction',
        description: 'Proprietary computer vision pipelines authenticating identity documents against government database records.',
      },
      {
        title: 'Cryptographic Audit Trails',
        description: 'Tamper-evident system event logging ensuring transparent oversight for judicial and audit committees.',
      },
      {
        title: 'Public Registry Interoperability',
        description: 'Secure enterprise service buses (ESB) synchronizing civil, land, and corporate registries.',
      },
    ],
    technologies: ['Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Kubernetes', 'Redis', 'Azure Government'],
    compliance: ['SIAC Standards', 'ISO 27001', 'WCAG 2.1 AA', 'NIST Cybersecurity Framework'],
    caseStudyHighlight: {
      title: 'AI-Assisted Identity Verification & Public Registry Modernization',
      client: 'SIAC Certified Registry',
      description: 'Automated public registry document extraction pipeline processing 1.9M+ applications with 99.7% accuracy.',
      metric: '1.9M+',
      metricLabel: 'Processed',
      href: '/work',
    },
  },

  ecommerce: {
    slug: 'ecommerce',
    title: 'E-commerce & Retail',
    shortTitle: 'Retail',
    eyebrow: 'HEADLESS COMMERCE & RETAIL SYSTEMS',
    tagline: 'Headless commerce architectures, personalized AI recommendation engines, automated inventory sync, and peak-scale reliability.',
    heroImage: '/home-img/Frame.png',
    overview:
      'Omnichannel retailers need frictionless customer journeys, lightning-fast product discoverability, and rock-solid reliability during extreme peak shopping events. We build headless commerce platforms that unify digital storefronts, warehouse ERPs, and automated fulfillment pipelines.',
    metrics: [
      { value: '3.4x', label: 'Average Conversion Lift' },
      { value: '10,000+', label: 'Concurrent Checkouts Handled' },
      { value: '<600ms', label: 'Global Storefront Page Load' },
      { value: '0s', label: 'Black Friday Downtime' },
    ],
    challenges: [
      {
        title: 'Monolithic Storefront Latency',
        problem: 'Bulky legacy e-commerce themes result in sluggish page speeds, dragging down Google Core Web Vitals and conversions.',
        solution: 'We engineer decoupled headless Next.js frontends connected to high-performance edge CDNs for instantaneous rendering.',
      },
      {
        title: 'Flash Sale Concurrency Crashes',
        problem: 'Sudden surges of checkout traffic overload relational database locks, resulting in abandoned shopping carts.',
        solution: 'Implemented distributed queue processing, Redis session caching, and auto-scaling serverless checkouts.',
      },
      {
        title: 'Multi-Channel Inventory Inaccuracies',
        problem: 'Selling across physical retail, marketplaces, and web stores leads to accidental overselling and costly stockouts.',
        solution: 'Engineered real-time bi-directional inventory webhooks synchronizing ERP, POS, and storefront inventory in milliseconds.',
      },
    ],
    capabilities: [
      {
        title: 'Headless Storefront Development',
        description: 'Next.js and Shopify Plus / Medusa / Commercelayer architectures optimized for sub-second speeds.',
      },
      {
        title: 'AI Search & Recommendation Engines',
        description: 'Vector-powered visual search, personalized product recommendations, and automated cross-sell triggers.',
      },
      {
        title: 'Omnichannel ERP & Warehouse Sync',
        description: 'Automated integration with SAP, NetSuite, and warehouse management systems for instant order routing.',
      },
      {
        title: 'Multi-Currency & Global Localization',
        description: 'Dynamic currency switching, localized tax engines, and regional payment gateway routing.',
      },
    ],
    technologies: ['Next.js', 'React', 'Shopify Plus API', 'Node.js', 'Redis', 'PostgreSQL', 'ElasticSearch'],
    compliance: ['PCI-DSS Level 1', 'GDPR', 'CCPA', 'SOC 2 Type II'],
  },

  health: {
    slug: 'health',
    title: 'Health & Wellness',
    shortTitle: 'Healthcare',
    eyebrow: 'HEALTHCARE & DIGITAL WELLNESS',
    tagline: 'HIPAA-compliant telemedicine platforms, electronic health record (EHR) integrations, clinical AI diagnostics, and patient portals.',
    heroImage: '/home-img/Frame-2.png',
    overview:
      'Digital healthcare demands uncompromising patient data protection, seamless interoperability across clinical workflows, and empathetic user experiences. Travash builds enterprise medical portals, remote patient telemetry systems, and compliant health tech platforms that elevate clinical outcomes.',
    metrics: [
      { value: '100%', label: 'HIPAA & GDPR Compliant' },
      { value: '350k+', label: 'Remote Consultations Powered' },
      { value: '99.99%', label: 'Clinical Uptime SLA' },
      { value: 'HL7/FHIR', label: 'Standard Interoperability' },
    ],
    challenges: [
      {
        title: 'Strict Patient Data Privacy (HIPAA)',
        problem: 'Data breaches in healthcare carry catastrophic legal penalties and erode critical patient trust.',
        solution: 'Zero-knowledge encryption architectures with end-to-end encrypted video streaming and encrypted data-at-rest.',
      },
      {
        title: 'Fragmented EHR / EMR Interoperability',
        problem: 'Clinical teams struggle to pull patient history from disparate proprietary hospital software systems.',
        solution: 'Built standardized HL7 and FHIR data integration pipelines connecting labs, clinics, and hospital databases.',
      },
      {
        title: 'Complex Patient Scheduling & Adherence',
        problem: 'Missed appointments and poor medication adherence impact patient outcomes and clinic revenues.',
        solution: 'Automated SMS/WhatsApp reminders, one-click telehealth sessions, and gamified patient adherence dashboards.',
      },
    ],
    capabilities: [
      {
        title: 'Telehealth & Virtual Consultation',
        description: 'HIPAA-compliant HD WebRTC video, secure chat, digital prescription generation, and integrated billing.',
      },
      {
        title: 'EHR / EMR Interoperability (FHIR/HL7)',
        description: 'Seamless bi-directional synchronization with Epic, Cerner, and regional clinical health databases.',
      },
      {
        title: 'Patient Engagement & Mobile Portals',
        description: 'Intuitive iOS & Android apps for lab result access, symptom checking, and appointment booking.',
      },
      {
        title: 'Remote Patient Monitoring (IoT)',
        description: 'Real-time telemetry ingestion from smart glucose monitors, pulse oximeters, and wearable sensors.',
      },
    ],
    technologies: ['React Native', 'Next.js', 'Python', 'WebRTC', 'AWS HIPAA Eligible Cloud', 'PostgreSQL'],
    compliance: ['HIPAA', 'HITECH', 'GDPR', 'HL7 FHIR', 'SOC 2 Type II'],
  },

  travel: {
    slug: 'travel',
    title: 'Travel & Hospitality',
    shortTitle: 'Hospitality',
    eyebrow: 'TRAVEL & HOSPITALITY PLATFORMS',
    tagline: 'Global distribution system (GDS) integrations, dynamic booking engines, AI itinerary generators, and guest portals.',
    heroImage: '/home-img/Frame-1.png',
    overview:
      'Travel and hospitality operators navigate hyper-dynamic pricing, complex inventory distribution networks, and mobile-first guest expectations. We build booking platforms, loyalty management systems, and smart concierge portals that drive direct bookings and customer retention.',
    metrics: [
      { value: '15M+', label: 'Annual Searches Processed' },
      { value: '<450ms', label: 'Availability Search Speed' },
      { value: '42%', label: 'Direct Booking Growth' },
      { value: 'Multi-GDS', label: 'Unified Distribution API' },
    ],
    challenges: [
      {
        title: 'High-Latency GDS & Inventory Feeds',
        problem: 'Connecting to Amadeus, Sabre, and bedbanks introduces latency that frustrates travelers and causes drop-offs.',
        solution: 'Engineered high-concurrency caching layers that pre-index availability and return complex search results in <450ms.',
      },
      {
        title: 'High Third-Party OTA Commission Costs',
        problem: 'Over-reliance on Booking.com and Expedia erodes hotel and airline profit margins.',
        solution: 'Designed frictionless direct booking web applications featuring dynamic package discounting and personalized loyalty rewards.',
      },
    ],
    capabilities: [
      {
        title: 'High-Performance Booking Engines',
        description: 'Fast, responsive flight, hotel, and car rental reservation flows with real-time room selection.',
      },
      {
        title: 'AI Travel Assistants & Itineraries',
        description: 'Intelligent itinerary generators tailoring travel plans based on real-time budget, weather, and preferences.',
      },
      {
        title: 'Guest Mobile Key & Check-In Apps',
        description: 'Contactless digital check-in, digital room keys, and automated guest concierge messaging.',
      },
    ],
    technologies: ['Node.js', 'Go', 'Redis', 'Next.js', 'PostgreSQL', 'GraphQL', 'Amadeus/Sabre APIs'],
    compliance: ['PCI-DSS Level 1', 'GDPR', 'SCA 3DS2'],
  },

  recruitment: {
    slug: 'recruitment',
    title: 'Recruitment & HR Tech',
    shortTitle: 'HR Tech',
    eyebrow: 'HR TECH & TALENT PLATFORMS',
    tagline: 'AI talent matching engines, automated resume parsing, global payroll integrations, and applicant tracking platforms.',
    heroImage: '/home-img/Frame-3.png',
    overview:
      'Modern HR organizations need platforms that reduce time-to-hire, eliminate screening bias, and handle multi-national payroll without compliance friction. We architect intelligent recruitment platforms that empower talent acquisition teams to hire the right candidates faster.',
    metrics: [
      { value: '4.5x', label: 'Faster Candidate Matching' },
      { value: '85%', label: 'Manual Screening Time Saved' },
      { value: '100%', label: 'GDPR / EEOC Compliant' },
      { value: '250k+', label: 'Candidate Profiles Indexed' },
    ],
    challenges: [
      {
        title: 'Overwhelming Unstructured Resume Volumes',
        problem: 'Recruiters spend hundreds of hours manually sorting PDFs, missing qualified talent due to fatigue.',
        solution: 'Implemented LLM-based resume extraction and semantic embedding matchers that score candidate fit accurately.',
      },
      {
        title: 'Candidate Drop-off in Lengthy Portals',
        problem: 'Complex multi-step application forms cause top candidate drop-off rates exceeding 70%.',
        solution: 'Created 1-click apply experiences with automated LinkedIn/portfolio extraction and WhatsApp application flows.',
      },
    ],
    capabilities: [
      {
        title: 'Semantic AI Candidate Matching',
        description: 'Vector-search candidate discovery that matches skills, experience depth, and culture fit beyond exact keyword matches.',
      },
      {
        title: 'Automated Applicant Tracking (ATS)',
        description: 'Full-lifecycle candidate pipelines with automated interview scheduling and scorecard reviews.',
      },
      {
        title: 'Global Onboarding & Compliance',
        description: 'Digital contract signing, automated I-9/tax form processing, and multi-country payroll integration.',
      },
    ],
    technologies: ['Python', 'LangChain', 'Next.js', 'PostgreSQL', 'AWS Textract', 'FastAPI'],
    compliance: ['GDPR', 'EEOC Compliance', 'SOC 2 Type II', 'CCPA'],
  },

  'real-estate': {
    slug: 'real-estate',
    title: 'Real Estate & PropTech',
    shortTitle: 'PropTech',
    eyebrow: 'PROPTECH & ASSET MANAGEMENT',
    tagline: 'Virtual property tour platforms, smart building IoT telemetry, automated lease management, and spatial search.',
    heroImage: '/home-img/Frame-4.png',
    overview:
      'PropTech is transitioning toward intelligent building automation, instant digital leasing, and rich spatial visualization. We engineer property portals, tenant management platforms, and smart building telemetry systems that maximize asset valuation and tenant satisfaction.',
    metrics: [
      { value: '50,000+', label: 'Managed Units on Platform' },
      { value: '3.2x', label: 'Faster Lease Execution' },
      { value: '3D Spatial', label: 'Interactive Virtual Tours' },
      { value: 'IoT Telemetry', label: 'Real-Time Energy Tracking' },
    ],
    challenges: [
      {
        title: 'Cumbersome Paper-Heavy Leasing',
        problem: 'Slow document generation and manual signature collection delay tenant move-in and revenue realization.',
        solution: 'Integrated automated digital lease generation with legal e-signatures and instant credit screening.',
      },
      {
        title: 'Building Energy Waste & Equipment Failure',
        problem: 'HVAC and lighting anomalies go unnoticed until expensive utility bills or equipment breakdowns occur.',
        solution: 'Deployed IoT telemetry pipelines analyzing smart meter sensors to trigger preventative maintenance tickets.',
      },
    ],
    capabilities: [
      {
        title: 'Interactive 3D Property Portals',
        description: 'WebGL-powered interactive property floorplans, neighborhood score integrations, and instant inquiry forms.',
      },
      {
        title: 'Tenant & Owner Portals',
        description: 'Automated rent collection, digital maintenance ticket dispatching, and owner financial statements.',
      },
      {
        title: 'Smart Building IoT Telemetry',
        description: 'Centralized dashboards monitoring building energy efficiency, water usage, and HVAC performance.',
      },
    ],
    technologies: ['Three.js', 'React', 'Node.js', 'PostgreSQL', 'MQTT WebSockets', 'AWS IoT Core'],
    compliance: ['SOC 2 Type II', 'GDPR', 'PCI-DSS'],
  },

  manufacturing: {
    slug: 'manufacturing',
    title: 'Manufacturing & Supply Chain',
    shortTitle: 'Manufacturing',
    eyebrow: 'INDUSTRY 4.0 & SUPPLY CHAIN',
    tagline: 'Industrial IoT fleet tracking, predictive maintenance AI models, warehouse automation, and supply chain visibility.',
    heroImage: '/home-img/Manufacturing (1).png',
    overview:
      'Industry 4.0 demands total operational visibility from the factory floor to the final customer delivery. We architect high-throughput telemetry pipelines, predictive maintenance models, and intelligent warehouse management software that eliminate operational bottlenecks.',
    metrics: [
      { value: '4.8x', label: 'Supply Chain Throughput' },
      { value: '-38%', label: 'Unscheduled Machine Downtime' },
      { value: '99.99%', label: 'Telemetry Pipeline Uptime' },
      { value: 'Real-Time', label: 'Global Fleet Tracking' },
    ],
    challenges: [
      {
        title: 'Unplanned Factory Equipment Downtime',
        problem: 'Sudden machine failure halts production lines, costing tens of thousands of dollars per hour in lost output.',
        solution: 'Implemented predictive machine learning models that analyze vibration and temperature anomalies to flag issues before failure.',
      },
      {
        title: 'Blind Spots in Global Freight Tracking',
        problem: 'Disparate carrier systems cause delays and prevent accurate arrival time forecasting for critical components.',
        solution: 'Engineered centralized telemetry ingestion platform streaming live GPS and container environmental sensor data.',
      },
    ],
    capabilities: [
      {
        title: 'Predictive Maintenance Telemetry',
        description: 'Real-time sensor ingestion, anomaly detection algorithms, and automated technician dispatching.',
      },
      {
        title: 'Supply Chain Visibility Portals',
        description: 'Unified multi-carrier shipping dashboards with real-time ETA predictions and customs clearance tracking.',
      },
      {
        title: 'Warehouse Automation Software',
        description: 'Automated barcode/RFID inventory routing, picking optimization, and ERP integration.',
      },
    ],
    technologies: ['Go', 'Kafka', 'TimescaleDB', 'Python ML', 'React', 'Docker', 'AWS IoT Greengrass'],
    compliance: ['ISO 9001', 'ISO 27001', 'SOC 2 Type II'],
    caseStudyHighlight: {
      title: 'Enterprise Cloud Migration & Logistics Architecture',
      client: 'Global Logistics Network',
      description: 'Scaled freight tracking architecture achieving 4.8x speedup and 99.99% uptime with 38% cloud infrastructure savings.',
      metric: '4.8x',
      metricLabel: 'Speedup',
      href: '/work',
    },
  },
}

export const ALL_INDUSTRIES_LIST = Object.values(INDUSTRIES_MAP)
