export interface PortfolioProject {
  _id?: string
  title: string
  slug: string
  portfolioTitle?: string
  cardDescription?: string
  shortDescription?: string
  category?: string
  industry?: string
  projectType?: string
  industries?: string[]
  technologies?: string[] | { name: string; icon?: string }[]
  featured?: boolean
  portfolioOrder?: number
  portfolioVisible?: boolean
  caseStudyUrl?: string
  cardImage?: { asset?: { url: string } } | string
  cardImageAlt?: string
  featureImage?: { asset?: { url: string } } | string
  heroImage?: { asset?: { url: string } } | string
  metrics?: { value: string; label: string }[]
}

export interface IndustryItem {
  _id?: string
  name: string
  slug: string
  description?: string
}

export interface TechnologyItem {
  _id?: string
  name: string
  slug: string
  category?: string
  icon?: { asset?: { url: string } } | string
}

export const DEFAULT_PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    _id: 'proj-satyapaan',
    title: 'AI-Powered Passport Verification at Scale: 1.96 Million Applications Processed',
    portfolioTitle: 'Satyapaan - AI Passport Verification',
    slug: 'satyapaan',
    cardDescription:
      'Automated high-throughput passport identity screening, facial recognition matching, and adverse case anomaly detection at state scale.',
    shortDescription:
      'Automated high-throughput passport identity screening, facial recognition matching, and adverse case anomaly detection at state scale.',
    category: 'Artificial Intelligence',
    industry: 'Government & Public Sector',
    projectType: 'Web Application',
    industries: ['Government & Public Sector', 'Technology'],
    technologies: ['Java', 'Python', 'Face Recognition', 'MySQL', 'DARPAN API'],
    featured: true,
    portfolioOrder: 1,
    cardImage: '/home-img/satyapaan-min 2.png',
    metrics: [
      { value: '1.96M', label: 'Profiles Processed' },
      { value: '99.4%', label: 'Biometric Accuracy' },
    ],
  },
  {
    _id: 'proj-i4c',
    title: 'I4C National Bank Portal: Pan-India Financial Fraud Mitigation',
    portfolioTitle: 'I4C Bank Portal - Cyber Fraud Intercept',
    slug: 'i4c-bank-portal',
    cardDescription:
      'Pan-India real-time fraud mitigation coordination application enabling instant banking account freezes and recovered funds.',
    shortDescription:
      'Pan-India real-time fraud mitigation coordination application enabling instant banking account freezes and recovered funds.',
    category: 'Cyber Fraud Mitigation',
    industry: 'Banking & Financial Services',
    projectType: 'Web Application',
    industries: ['Banking & Financial Services', 'Government & Public Sector'],
    technologies: ['React', 'Node.js', 'Kafka', 'Redis', 'PostgreSQL'],
    featured: true,
    portfolioOrder: 2,
    cardImage: '/images/services/i4c.png',
    metrics: [
      { value: '₹100M+', label: 'Fraud Intercepted' },
      { value: '<60s', label: 'Account Freeze' },
    ],
  },
  {
    _id: 'proj-darpan',
    title: 'Darpan: AI Facial Recognition & Missing Person Retrieval Engine',
    portfolioTitle: 'Darpan - AI Facial Retrieval',
    slug: 'darpan',
    cardDescription:
      'Deep learning computer vision system matching missing records in real-time across state-wide photo databases.',
    shortDescription:
      'Deep learning computer vision system matching missing records in real-time across state-wide photo databases.',
    category: 'Artificial Intelligence',
    industry: 'Government & Public Sector',
    projectType: 'Mobile Application',
    industries: ['Government & Public Sector', 'Technology'],
    technologies: ['Flutter', 'TensorFlow', 'Computer Vision', 'Python'],
    featured: true,
    portfolioOrder: 3,
    cardImage: '/images/services/darpan.webp',
    metrics: [
      { value: '800+', label: 'High-Risk Cases' },
      { value: '65%', label: 'Turnaround Speedup' },
    ],
  },
  {
    _id: 'proj-iverify',
    title: 'i-Verify: Next-Gen Background Screening & Biometric Trust Platform',
    portfolioTitle: 'i-Verify - Identity Screening',
    slug: 'i-verify',
    cardDescription:
      'Comprehensive candidate identity and credential verification portal utilizing document AI and automated registry lookup.',
    shortDescription:
      'Comprehensive candidate identity and credential verification portal utilizing document AI and automated registry lookup.',
    category: 'Verification & Trust',
    industry: 'Technology',
    projectType: 'Web Application',
    industries: ['Technology', 'Recruitment & HR'],
    technologies: ['React', 'Node.js', 'Document AI', 'MongoDB', 'OCR'],
    featured: false,
    portfolioOrder: 4,
    cardImage: '/images/services/analytics.webp',
    metrics: [
      { value: '500K+', label: 'Verifications' },
      { value: '85%', label: 'Time Reduction' },
    ],
  },
  {
    _id: 'proj-ugo',
    title: 'UGO: Intelligent Fleet Routing & Supply Chain Management',
    portfolioTitle: 'UGO - Logistics & Fleet Platform',
    slug: 'ugo',
    cardDescription:
      'Next-level logistics dispatch platform with real-time GPS telemetry, route optimization, and driver workflow automation.',
    shortDescription:
      'Next-level logistics dispatch platform with real-time GPS telemetry, route optimization, and driver workflow automation.',
    category: 'Logistics & Supply Chain',
    industry: 'Technology',
    projectType: 'Mobile Application',
    industries: ['Technology', 'Manufacturing'],
    technologies: ['React Native', 'Go', 'Google Maps API', 'AWS IoT'],
    featured: true,
    portfolioOrder: 5,
    cardImage: '/home-img/ugo-min.png',
    metrics: [
      { value: '35%', label: 'Fuel Savings' },
      { value: '99.9%', label: 'On-Time Dispatch' },
    ],
  },
  {
    _id: 'proj-nigaah',
    title: 'Nigaah: Smart AI Video Analytics & Perimeter Surveillance',
    portfolioTitle: 'Nigaah - AI Video Surveillance',
    slug: 'nigaah-videosurveillance',
    cardDescription:
      'Edge AI video analytics system detecting boundary breaches, vehicle anomalies, and safety compliance in real time.',
    shortDescription:
      'Edge AI video analytics system detecting boundary breaches, vehicle anomalies, and safety compliance in real time.',
    category: 'Artificial Intelligence',
    industry: 'Government & Public Sector',
    projectType: 'AI / Artificial Intelligence',
    industries: ['Government & Public Sector', 'Technology'],
    technologies: ['YOLOv8', 'OpenCV', 'Python', 'WebRTC', 'Docker'],
    featured: false,
    portfolioOrder: 6,
    cardImage: '/images/services/critical.webp',
    metrics: [
      { value: '30 FPS', label: 'Real-Time Inference' },
      { value: '<2s', label: 'Alert Trigger' },
    ],
  },
  {
    _id: 'proj-crowdcounting',
    title: 'CrowdCounting: High-Density Crowd Density & Flow Telemetry',
    portfolioTitle: 'CrowdCounting - Vision Analytics',
    slug: 'crowdcounting',
    cardDescription:
      'Deep learning crowd density analysis estimating congregation sizes in dense public venues and transit hubs.',
    shortDescription:
      'Deep learning crowd density analysis estimating congregation sizes in dense public venues and transit hubs.',
    category: 'Artificial Intelligence',
    industry: 'Government & Public Sector',
    projectType: 'AI / Artificial Intelligence',
    industries: ['Government & Public Sector', 'Technology'],
    technologies: ['PyTorch', 'Computer Vision', 'CUDA', 'FastAPI'],
    featured: false,
    portfolioOrder: 7,
    cardImage: '/images/services/darpan.webp',
    metrics: [
      { value: '98%', label: 'Density Estimation' },
      { value: 'Zero', label: 'Hardware Sensor Need' },
    ],
  },
  {
    _id: 'proj-directowner',
    title: 'Direct Owner: Peer-to-Peer Real Estate Marketplace & Rental Portal',
    portfolioTitle: 'Direct Owner - Real Estate Portal',
    slug: 'direct-owners',
    cardDescription:
      'Eliminating intermediaries with a verified property marketplace featuring direct chat, tenancy contracts, and payments.',
    shortDescription:
      'Eliminating intermediaries with a verified property marketplace featuring direct chat, tenancy contracts, and payments.',
    category: 'Real Estate Tech',
    industry: 'Real Estate',
    projectType: 'Web Application',
    industries: ['Real Estate', 'Technology'],
    technologies: ['Next.js', 'React Native', 'PostgreSQL', 'Stripe'],
    featured: false,
    portfolioOrder: 8,
    cardImage: '/images/services/eradicate.webp',
    metrics: [
      { value: '15K+', label: 'Listings Published' },
      { value: 'Zero', label: 'Brokerage Fees' },
    ],
  },
  {
    _id: 'proj-dinedesk',
    title: 'Dine Desk: Enterprise Restaurant Management & Smart Reservation SaaS',
    portfolioTitle: 'Dine Desk - Hospitality SaaS',
    slug: 'dine-desk',
    cardDescription:
      'Multi-unit reservation engine, live waitlist tracking, dynamic table allocation, and guest analytics for restaurant chains.',
    shortDescription:
      'Multi-unit reservation engine, live waitlist tracking, dynamic table allocation, and guest analytics for restaurant chains.',
    category: 'Hospitality & SaaS',
    industry: 'Hospitality and Travel',
    projectType: 'Web Application',
    industries: ['Hospitality and Travel', 'Technology'],
    technologies: ['React', 'React Native', 'Node.js', 'WebSockets'],
    featured: true,
    portfolioOrder: 9,
    cardImage: '/images/services/dinedesk.png',
    metrics: [
      { value: '3x', label: 'Table Turnover' },
      { value: '40%', label: 'No-Show Reduction' },
    ],
  },
  {
    _id: 'proj-ledray',
    title: 'Ledray: Architectural Lighting Interactive Catalog & 3D Configurator',
    portfolioTitle: 'Ledray - Lighting E-Commerce',
    slug: 'ledray',
    cardDescription:
      'High-performance product catalog with interactive 3D lighting simulation, photometrics calculation, and B2B ordering.',
    shortDescription:
      'High-performance product catalog with interactive 3D lighting simulation, photometrics calculation, and B2B ordering.',
    category: 'E-Commerce & 3D',
    industry: 'E-Commerce & Retail',
    projectType: 'Website Development',
    industries: ['E-Commerce & Retail', 'Technology'],
    technologies: ['Three.js', 'Next.js', 'Tailwind CSS', 'Shopify API'],
    featured: false,
    portfolioOrder: 10,
    cardImage: '/home-img/ledray-min.png',
    metrics: [
      { value: '4.2x', label: 'User Engagement' },
      { value: '100%', label: 'Mobile Responsive' },
    ],
  },
  {
    _id: 'proj-indispare',
    title: 'Indispare: Industrial Spares Marketplace & B2B Inventory Logistics',
    portfolioTitle: 'Indispare - B2B Industrial Spares',
    slug: 'indispare',
    cardDescription:
      'B2B marketplace connecting manufacturers with verified machinery parts suppliers, live stock tracking, and quotes.',
    shortDescription:
      'B2B marketplace connecting manufacturers with verified machinery parts suppliers, live stock tracking, and quotes.',
    category: 'Industrial E-Commerce',
    industry: 'Manufacturing',
    projectType: 'Web Application',
    industries: ['Manufacturing', 'E-Commerce & Retail'],
    technologies: ['Next.js', 'GraphQL', 'Elasticsearch', 'MySQL'],
    featured: false,
    portfolioOrder: 11,
    cardImage: '/home-img/indispare-min.png',
    metrics: [
      { value: '50K+', label: 'SKUs Cataloged' },
      { value: '24h', label: 'RFQ Turnaround' },
    ],
  },
  {
    _id: 'proj-konvino',
    title: 'Konvino: Sommelier Cellar Management & Beverage Distribution Portal',
    portfolioTitle: 'Konvino - Beverage Logistics',
    slug: 'konvino',
    cardDescription:
      'Curated beverage discovery, inventory barcode scanning, and direct winery distribution for hospitality operators.',
    shortDescription:
      'Curated beverage discovery, inventory barcode scanning, and direct winery distribution for hospitality operators.',
    category: 'Hospitality Tech',
    industry: 'Hospitality and Travel',
    projectType: 'Mobile Application',
    industries: ['Hospitality and Travel', 'E-Commerce & Retail'],
    technologies: ['Swift', 'Kotlin', 'Laravel', 'Stripe'],
    featured: false,
    portfolioOrder: 12,
    cardImage: '/home-img/konvino-min.png',
    metrics: [
      { value: '10K+', label: 'Bottles Managed' },
      { value: '99.5%', label: 'Order Accuracy' },
    ],
  },
  {
    _id: 'proj-medimee',
    title: 'Medimee: HIPAA-Compliant Telehealth & Electronic Health Records',
    portfolioTitle: 'Medimee - Telehealth & EHR',
    slug: 'medimee',
    cardDescription:
      'Encrypted video consultations, digital prescription delivery, and patient vitals tracking in one secure healthcare app.',
    shortDescription:
      'Encrypted video consultations, digital prescription delivery, and patient vitals tracking in one secure healthcare app.',
    category: 'Healthcare & Telemedicine',
    industry: 'Healthcare',
    projectType: 'Web Application',
    industries: ['Healthcare', 'Health & Wellness'],
    technologies: ['React', 'WebRTC', 'Node.js', 'HIPAA AWS'],
    featured: false,
    portfolioOrder: 13,
    cardImage: '/home-img/medimee-min.png',
    metrics: [
      { value: '100%', label: 'HIPAA Compliant' },
      { value: '4.9★', label: 'Patient Rating' },
    ],
  },
  {
    _id: 'proj-pekt',
    title: 'PEKT: Predictive Equipment Health & Industrial IoT Sensor Telemetry',
    portfolioTitle: 'PEKT - Predictive IoT Maintenance',
    slug: 'pekt',
    cardDescription:
      'Continuous vibration and temperature telemetry for factory machinery, catching mechanical failures before downtime.',
    shortDescription:
      'Continuous vibration and temperature telemetry for factory machinery, catching mechanical failures before downtime.',
    category: 'Industrial IoT',
    industry: 'Manufacturing',
    projectType: 'Web Application',
    industries: ['Manufacturing', 'Technology'],
    technologies: ['Python', 'MQTT', 'InfluxDB', 'React Dashboard'],
    featured: false,
    portfolioOrder: 14,
    cardImage: '/home-img/pekt-min.png',
    metrics: [
      { value: '60%', label: 'Downtime Reduced' },
      { value: 'Sub-sec', label: 'Sensor Sampling' },
    ],
  },
  {
    _id: 'proj-skipr',
    title: 'Skipr: On-Demand Waste Logistics & Container Rental Booking App',
    portfolioTitle: 'Skipr - Waste Logistics App',
    slug: 'skipr',
    cardDescription:
      'On-demand skip container hiring, automated GPS fleet drop-offs, and digital waste disposal certification.',
    shortDescription:
      'On-demand skip container hiring, automated GPS fleet drop-offs, and digital waste disposal certification.',
    category: 'On-Demand Logistics',
    industry: 'Technology',
    projectType: 'Mobile Application',
    industries: ['Technology', 'Real Estate'],
    technologies: ['Flutter', 'Firebase', 'Google Maps SDK', 'Stripe'],
    featured: false,
    portfolioOrder: 15,
    cardImage: '/home-img/skipr-min.png',
    metrics: [
      { value: '12K+', label: 'Completed Bookings' },
      { value: '98%', label: 'Same-Day Drops' },
    ],
  },
  {
    _id: 'proj-gratus',
    title: 'Gratus: Corporate Peer Recognition & Micro-Rewards Employee SaaS',
    portfolioTitle: 'Gratus - Employee Recognition SaaS',
    slug: 'gratus',
    cardDescription:
      'Gamified peer recognition platform with Slack integration, points redemption catalog, and culture pulse metrics.',
    shortDescription:
      'Gamified peer recognition platform with Slack integration, points redemption catalog, and culture pulse metrics.',
    category: 'Enterprise SaaS',
    industry: 'Technology',
    projectType: 'Web Application',
    industries: ['Technology', 'Recruitment & HR'],
    technologies: ['Vue.js', 'Node.js', 'Slack API', 'PostgreSQL'],
    featured: false,
    portfolioOrder: 16,
    cardImage: '/home-img/gratus-min.png',
    metrics: [
      { value: '88%', label: 'Active Participation' },
      { value: '25%', label: 'Retention Boost' },
    ],
  },
  {
    _id: 'proj-gemba',
    title: 'Gemba Connect: Lean Factory Floor Management & Kaizen Collaboration',
    portfolioTitle: 'Gemba Connect - Shop Floor SaaS',
    slug: 'gemba',
    cardDescription:
      'Digital Kaizen boards, shift handover logs, and real-time production line incident escalation for plant managers.',
    shortDescription:
      'Digital Kaizen boards, shift handover logs, and real-time production line incident escalation for plant managers.',
    category: 'Manufacturing Software',
    industry: 'Manufacturing',
    projectType: 'Web Application',
    industries: ['Manufacturing', 'Technology'],
    technologies: ['React', 'Node.js', 'WebSockets', 'MongoDB'],
    featured: false,
    portfolioOrder: 17,
    cardImage: '/home-img/gemba-min.png',
    metrics: [
      { value: '45min', label: 'Shift Time Saved' },
      { value: '100%', label: 'Digital Audits' },
    ],
  },
  {
    _id: 'proj-wiggett',
    title: 'Wiggett Group: Electrical Safety & Construction Compliance Mobile App',
    portfolioTitle: 'Wiggett Group - Field Inspection App',
    slug: 'wiggett-app',
    cardDescription:
      'Offline-first field inspection app for commercial electricians, generating instant BS 7671 safety certificates.',
    shortDescription:
      'Offline-first field inspection app for commercial electricians, generating instant BS 7671 safety certificates.',
    category: 'Field Operations',
    industry: 'Real Estate',
    projectType: 'Mobile Application',
    industries: ['Real Estate', 'Manufacturing'],
    technologies: ['React Native', 'Express', 'PostgreSQL', 'PDF Engine'],
    featured: false,
    portfolioOrder: 18,
    cardImage: '/home-img/wiggett-min.png',
    metrics: [
      { value: '4x', label: 'Faster Certs' },
      { value: 'Zero', label: 'Paper Forms' },
    ],
  },
  {
    _id: 'proj-spencer',
    title: 'Spencer: Commercial Workspace Design & Fit-Out Showcase Website',
    portfolioTitle: 'Spencer - Workspace Architecture',
    slug: 'spencer',
    cardDescription:
      'Modern digital portfolio showcasing corporate interior transformations, sustainability certifications, and project case studies.',
    shortDescription:
      'Modern digital portfolio showcasing corporate interior transformations, sustainability certifications, and project case studies.',
    category: 'Corporate Web',
    industry: 'Real Estate',
    projectType: 'Website Development',
    industries: ['Real Estate'],
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    featured: false,
    portfolioOrder: 19,
    cardImage: '/images/services/hero-bg.webp',
    metrics: [
      { value: '99/100', label: 'Lighthouse Score' },
      { value: '<1s', label: 'Load Time' },
    ],
  },
  {
    _id: 'proj-dovehouse',
    title: 'Dove House: Luxury Senior Living & Memory Care Community Website',
    portfolioTitle: 'Dove House - Senior Care',
    slug: 'dovehouse',
    cardDescription:
      'Warm, accessible web experience for prospective residents and families, featuring virtual tours and visit scheduling.',
    shortDescription:
      'Warm, accessible web experience for prospective residents and families, featuring virtual tours and visit scheduling.',
    category: 'Healthcare & Living',
    industry: 'Healthcare',
    projectType: 'Website Development',
    industries: ['Healthcare', 'Health & Wellness'],
    technologies: ['Next.js', 'Tailwind CSS', 'Accessible UI'],
    featured: false,
    portfolioOrder: 20,
    cardImage: '/images/services/analytics.webp',
    metrics: [
      { value: '65%', label: 'Inquiry Increase' },
      { value: 'WCAG', label: 'AA Certified' },
    ],
  },
  {
    _id: 'proj-kalsi',
    title: 'Kalsi Estate: Commercial Property Portfolio & Asset Management',
    portfolioTitle: 'Kalsi Estate - Commercial Property',
    slug: 'kalsi-estate',
    cardDescription:
      'Interactive investor portal displaying prime industrial and retail real estate assets, tenant tenancy, and financial yields.',
    shortDescription:
      'Interactive investor portal displaying prime industrial and retail real estate assets, tenant tenancy, and financial yields.',
    category: 'Real Estate & Finance',
    industry: 'Real Estate',
    projectType: 'Website Development',
    industries: ['Real Estate', 'Banking & Financial Services'],
    technologies: ['Next.js', 'Tailwind CSS', 'Interactive Maps'],
    featured: false,
    portfolioOrder: 21,
    cardImage: '/images/services/critical.webp',
    metrics: [
      { value: '£50M+', label: 'Asset Portfolio' },
      { value: 'Live', label: 'Availability Map' },
    ],
  },
  {
    _id: 'proj-gridproperties',
    title: 'Grid Properties: Modern Architectural Development & Leasing Showcase',
    portfolioTitle: 'Grid Properties - Urban Development',
    slug: 'grid-properties',
    cardDescription:
      'Sleek urban property showcase with interactive floor plan viewer, specification downloads, and direct agent inquiry.',
    shortDescription:
      'Sleek urban property showcase with interactive floor plan viewer, specification downloads, and direct agent inquiry.',
    category: 'Real Estate & Design',
    industry: 'Real Estate',
    projectType: 'Website Development',
    industries: ['Real Estate'],
    technologies: ['React', 'Tailwind CSS', 'Mapbox', 'HubSpot'],
    featured: false,
    portfolioOrder: 22,
    cardImage: '/images/services/eradicate.webp',
    metrics: [
      { value: '2.5x', label: 'Lead Capture' },
      { value: 'HD', label: 'Floor Plan Renders' },
    ],
  },
  {
    _id: 'proj-soultrips',
    title: 'Soul Trips: Curated Wellness Travel & Experiential Retreat Booking',
    portfolioTitle: 'Soul Trips - Experiential Travel',
    slug: 'soul-trips',
    cardDescription:
      'Bespoke retreat itineraries, payment plans, and host management for transformative worldwide wellness travel.',
    shortDescription:
      'Bespoke retreat itineraries, payment plans, and host management for transformative worldwide wellness travel.',
    category: 'Travel & Wellness',
    industry: 'Hospitality and Travel',
    projectType: 'Web Application',
    industries: ['Hospitality and Travel', 'Health & Wellness'],
    technologies: ['Next.js', 'Stripe', 'Tailwind CSS', 'Sanity CMS'],
    featured: false,
    portfolioOrder: 23,
    cardImage: '/images/services/dinedesk.png',
    metrics: [
      { value: '100%', label: 'Online Bookings' },
      { value: '18+', label: 'Global Destinations' },
    ],
  },
  {
    _id: 'proj-alexander',
    title: 'Alexander Johnson Group: Private Wealth Advisory & M&A Showcase',
    portfolioTitle: 'Alexander Johnson - Wealth Advisory',
    slug: 'alexander-johnson-group',
    cardDescription:
      'Sophisticated institutional web presence communicating cross-border corporate finance, transaction history, and advisory.',
    shortDescription:
      'Sophisticated institutional web presence communicating cross-border corporate finance, transaction history, and advisory.',
    category: 'Financial Advisory',
    industry: 'Banking & Financial Services',
    projectType: 'Website Development',
    industries: ['Banking & Financial Services'],
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    featured: false,
    portfolioOrder: 24,
    cardImage: '/images/services/hero-bg.webp',
    metrics: [
      { value: 'Tier-1', label: 'Institutional Grade' },
      { value: 'Global', label: 'Investor Reach' },
    ],
  },
  {
    _id: 'proj-asak',
    title: 'Asak: Contemporary Minimalist Fashion E-Commerce Experience',
    portfolioTitle: 'Asak - Luxury E-Commerce',
    slug: 'asak',
    cardDescription:
      'Headless e-commerce storefront with fluid page transitions, instant filtering, and sub-second checkout speeds.',
    shortDescription:
      'Headless e-commerce storefront with fluid page transitions, instant filtering, and sub-second checkout speeds.',
    category: 'Luxury Retail',
    industry: 'E-Commerce & Retail',
    projectType: 'Website Development',
    industries: ['E-Commerce & Retail'],
    technologies: ['Next.js', 'Shopify Storefront API', 'Tailwind CSS'],
    featured: false,
    portfolioOrder: 25,
    cardImage: '/images/services/analytics.webp',
    metrics: [
      { value: '1.2s', label: 'Average Page Load' },
      { value: '+32%', label: 'Checkout Conversion' },
    ],
  },
  {
    _id: 'proj-arabianhills',
    title: 'Arbain Hills Estate: Ultra-Luxury Gated Community & Villa Portal',
    portfolioTitle: 'Arbain Hills Estate - Luxury Villas',
    slug: 'arabian-hills',
    cardDescription:
      'Virtual 3D masterplan navigation, villa inventory status, and VIP private broker lounge for Dubai luxury development.',
    shortDescription:
      'Virtual 3D masterplan navigation, villa inventory status, and VIP private broker lounge for Dubai luxury development.',
    category: 'Luxury Real Estate',
    industry: 'Real Estate',
    projectType: 'Website Development',
    industries: ['Real Estate', 'Banking & Financial Services'],
    technologies: ['Next.js', '3D Masterplan Engine', 'Tailwind CSS'],
    featured: false,
    portfolioOrder: 26,
    cardImage: '/images/services/global-leaders.webp',
    metrics: [
      { value: '$1.2B+', label: 'Development Value' },
      { value: '3D', label: 'Interactive Masterplan' },
    ],
  },
]

export const DEFAULT_INDUSTRIES: IndustryItem[] = [
  { name: 'Government & Public Sector', slug: 'government-public-sector' },
  { name: 'Banking & Financial Services', slug: 'banking-financial-services' },
  { name: 'Hospitality and Travel', slug: 'hospitality-and-travel' },
  { name: 'Healthcare', slug: 'healthcare' },
  { name: 'Real Estate', slug: 'real-estate' },
  { name: 'E-Commerce & Retail', slug: 'ecommerce-retail' },
  { name: 'Technology', slug: 'technology' },
  { name: 'Manufacturing', slug: 'manufacturing' },
  { name: 'Health & Wellness', slug: 'health-wellness' },
  { name: 'Recruitment & HR', slug: 'recruitment-hr' },
]

export const PROJECT_TYPE_FILTERS = [
  'All',
  'Web Application',
  'Mobile Application',
  'Website Development',
  'AI / Artificial Intelligence',
] as const
