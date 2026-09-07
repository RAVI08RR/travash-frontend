export interface ServiceCTA {
  label: string
  href: string
}

export interface ServiceHero {
  eyebrow?: string
  title: string
  description: string
  primaryCTA?: ServiceCTA
  secondaryCTA?: ServiceCTA
  heroImage?: {
    asset?: {
      _id: string
      url: string
    }
  } | string
  backgroundImage?: string
  heroImageAlt?: string
  highlights?: string[]
}

export interface ProblemPainPoint {
  title: string
  description: string
}

export interface ServiceProblemSection {
  label?: string
  title?: string
  headline?: string
  description?: string
  image?: { asset?: { url: string } } | string
  painPoints?: ProblemPainPoint[]
}

export interface SolutionBenefit {
  icon?: string
  title: string
  description: string
}

export interface ServiceSolutionOverview {
  heading?: string
  description?: string
  image?: { asset?: { url: string } } | string
  benefits?: SolutionBenefit[]
  cta?: ServiceCTA
}

export interface ServiceCapability {
  title: string
  shortDescription?: string
  problem?: string
  solution?: string
  businessImpact?: string
  icon?: string
  technologies?: string[]
  optionalCTA?: ServiceCTA
}

export interface ServiceProcessStep {
  number?: string
  title: string
  description: string
  icon?: string
}

export interface ServiceProcess {
  heading?: string
  description?: string
  steps?: ServiceProcessStep[]
}

export interface RelatedCaseStudy {
  _id?: string
  title: string
  slug: string
  category?: string
  client?: string
  shortDescription?: string
  heroImage?: { asset?: { url: string } }
  featureImage?: { asset?: { url: string } }
  image?: string
  metrics?: { value: string; label: string; description?: string }[]
}

export interface ServiceEngagementModel {
  title: string
  description: string
  icon?: string
  badge?: string
  cta?: ServiceCTA
}

export interface ServiceTechnologyItem {
  name: string
  icon?: string
}

export interface ServiceTechnologyGroup {
  category: string
  technologies: string[]
  items?: ServiceTechnologyItem[]
  description?: string
}

export interface ServiceTrustStat {
  value: string
  label: string
  description?: string
}

export interface ServiceTrustSection {
  heading?: string
  description?: string
  backgroundImage?: string
  stats?: ServiceTrustStat[]
  trustPoints?: string[]
}

export interface ServiceTestimonial {
  quote: string
  author: string
  role: string
  company: string
  badge?: string
  avatarImage?: string
  portalImage?: string
  image?: { asset?: { url: string } }
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceFinalCTA {
  heading: string
  description: string
  backgroundImage?: string
  primaryCTA?: ServiceCTA
  secondaryCTA?: ServiceCTA
  features?: { title: string; description: string }[]
}

export interface ServiceSEO {
  metaTitle?: string
  metaDescription?: string
  ogImage?: { asset?: { url: string } }
  canonicalUrl?: string
  noIndex?: boolean
}

export interface ServiceData {
  _id?: string
  _type?: 'service'
  title: string
  slug: string
  menuTitle?: string
  shortDescription?: string
  icon?: { asset?: { url: string } }
  hero?: ServiceHero
  problemSection?: ServiceProblemSection
  solutionOverview?: ServiceSolutionOverview
  capabilitiesImage?: string
  capabilities?: ServiceCapability[]
  process?: ServiceProcess
  relatedCaseStudies?: RelatedCaseStudy[]
  engagementModels?: ServiceEngagementModel[]
  engagementBgImage?: string
  technologyStack?: ServiceTechnologyGroup[]
  trustSection?: ServiceTrustSection
  testimonial?: ServiceTestimonial
  faqs?: ServiceFAQ[]
  finalCTA?: ServiceFinalCTA
  seo?: ServiceSEO
}

// -------------------------------------------------------------
// 1. AI & DATA ENGINEERING
// -------------------------------------------------------------
export const DEFAULT_AI_DATA_ENGINEERING_SERVICE: ServiceData = {
  title: 'AI & Data Engineering',
  slug: 'ai-data-engineering',
  menuTitle: 'AI & Data Engineering',
  shortDescription:
    'Turn AI hype into enterprise ROI. We engineer custom AI automation solutions, agentic workflows, and secure LLM integrations to solve complex business bottlenecks.',
  hero: {
    eyebrow: 'Enterprise AI & Data Architecture',
    title: 'Turn AI Hype into Hard Enterprise ROI.',
    description:
      'Stop getting stuck in the pilot phase. We engineer production-ready AI agents, automate data pipelines, and deploy custom machine learning models that solve real operational bottlenecks—securely and at scale.',
    primaryCTA: { label: 'Book a Technical Consultation', href: '#contact' },
    secondaryCTA: { label: 'Explore AI Success Stories', href: '#case-studies' },
    highlights: [
      '80% POC failure rate solved',
      'Zero data leakage private models',
      'Up to 40% faster time-to-market',
      'Sub-second inference pipelines',
    ],
  },
  problemSection: {
    label: 'The Reality of Enterprise AI',
    title: 'The Problem: 80% of enterprise AI projects never make it to production.',
    headline: "Tech leaders know that dropping a generic chatbot into a legacy system doesn't drive growth.",
    description:
      "You are dealing with fragmented data silos, strict compliance regulations, and a severe shortage of specialized engineering talent. You don't need more experimentation. You need execution.",
    painPoints: [
      {
        title: 'Fragmented Data Silos',
        description: 'Proprietary enterprise data is locked in legacy stores without automated vectorization or high-speed pipelines.',
      },
      {
        title: 'Data Drift & Model Degradation',
        description: 'Models trained on static datasets degrade rapidly in accuracy as real-world input distributions shift over time.',
      },
      {
        title: 'Regulatory & IP Risk',
        description: 'Using public foundation models creates massive data privacy liabilities and strict compliance violations.',
      },
      {
        title: 'Severe AI Talent Shortage',
        description: 'Bypassing the 6-month hiring cycle for elite deep learning, computer vision, and MLOps talent.',
      },
    ],
  },
  solutionOverview: {
    heading: 'How Travash Solves It',
    description:
      'We bridge the gap between AI theory and technical reality. We deploy dedicated development teams that integrate directly into your workflows to build reliable, scalable architectures.',
    benefits: [
      {
        icon: 'users',
        title: 'We Unblock Talent',
        description: 'Instantly access the top 1% of AI engineers, bypassing the brutal 6-month technical recruiting cycle.',
      },
      {
        icon: 'shield',
        title: 'We Protect Your Data',
        description: 'We build private, isolated environments. Your proprietary data never trains public foundation models.',
      },
      {
        icon: 'zap',
        title: 'We Build for Speed',
        description: 'Using pre-built solution accelerators, we cut time-to-market by up to 40% with enterprise-grade security.',
      },
      {
        icon: 'cpu',
        title: 'Sub-Second Real-Time Inference',
        description: 'ONNX runtime compilation and optimized vector search across high-dimensional embeddings.',
      },
    ],
    cta: { label: 'Book Technical AI Review', href: '#contact' },
  },
  capabilities: [
    {
      title: 'Custom AI Software Development',
      shortDescription: 'Bespoke AI applications built directly into your legacy infrastructure with total data sovereignty.',
      problem: "Off-the-shelf AI tools can't handle unique business logic and fail strict compliance rules.",
      solution: 'We architect end-to-end custom AI applications tailored strictly to your legacy infrastructure.',
      businessImpact: 'Total data sovereignty, zero licensing bloat, and a proprietary AI ecosystem that scales seamlessly.',
      technologies: ['Python', 'FastAPI', 'PyTorch', 'Docker'],
    },
    {
      title: 'Autonomous AI Agents',
      shortDescription: 'Agentic systems with memory, multi-step planning, tool-use capabilities, and safety guardrails.',
      problem: 'Teams burning thousands of hours on complex, multi-step tasks requiring dynamic decision-making.',
      solution: 'Autonomous agents that reason, plan, and execute operational tasks across CRM and ERP systems.',
      businessImpact: 'Reduces human intervention in routine operational tasks by up to 70%.',
      technologies: ['LangChain', 'Llama 3', 'OpenAI', 'CrewAI'],
    },
    {
      title: 'AI Automation Solutions',
      shortDescription: 'Intelligent, high-speed data pipelines combining RPA with AI decisioning for end-to-end automation.',
      problem: 'Legacy business processes, manual data entry, and fragmented workflows choking profit margins.',
      solution: 'We replace manual bottlenecks with intelligent, high-speed data processing pipelines.',
      businessImpact: 'Eliminates human error in data processing and slashes operational overhead from days to seconds.',
      technologies: ['Apache Kafka', 'Python', 'Redis', 'PostgreSQL'],
    },
    {
      title: 'Generative AI Development',
      shortDescription: 'Secure internal GenAI tools using private, fine-tuned models for document analysis and synthesis.',
      problem: 'Massive unstructured data exists, but extracting actionable insights takes too much human time.',
      solution: 'We build secure internal GenAI tools using private, fine-tuned foundation models.',
      businessImpact: 'Drastically reduces document synthesis time while keeping proprietary IP completely secure.',
      technologies: ['Hugging Face', 'PyTorch', 'Milvus', 'LangChain'],
    },
    {
      title: 'LLM Integration Services',
      shortDescription: 'Secure Retrieval-Augmented Generation (RAG) connecting foundation models to internal databases.',
      problem: 'Public LLMs hallucinate facts and expose sensitive enterprise data to the outside world.',
      solution: 'We safely connect foundation models to proprietary databases using secure RAG and vector databases.',
      businessImpact: 'Context-aware answers based only on internal truth, with zero risk of data leakage.',
      technologies: ['OpenAI', 'Llama 3', 'Pinecone', 'Milvus'],
    },
    {
      title: 'Machine Learning Development',
      shortDescription: 'Predictive analytics and continuous MLOps pipelines forecasting trends and detecting anomalies.',
      problem: 'Reacting to market shifts, equipment failures, and disruptions instead of anticipating them.',
      solution: 'We train supervised and unsupervised models on historical data to forecast trends in real time.',
      businessImpact: 'Transforms operations from reactive to proactive, optimizing inventory and uptime.',
      technologies: ['Scikit-Learn', 'TensorFlow', 'PyTorch', 'ONNX'],
    },
    {
      title: 'Computer Vision',
      shortDescription: 'Visual intelligence for object detection, facial recognition, and real-time spatial mapping.',
      problem: 'Physical quality control and inspection rely on manual review, causing high labor costs and errors.',
      solution: 'We deploy visual intelligence models on edge hardware or cloud for real-time video processing.',
      businessImpact: 'Achieves near-100% accuracy in defect detection and automates physical compliance monitoring.',
      technologies: ['OpenCV', 'YOLOv8', 'PyTorch', 'Docker'],
    },
    {
      title: 'Natural Language Processing (NLP)',
      shortDescription: 'Text-analysis and voice engines that extract intent, analyze sentiment, and classify unstructured data.',
      problem: 'Critical business insights are trapped inside millions of text documents, emails, and call transcripts.',
      solution: 'Deep text-analysis and speech recognition systems extracting entities and structured data.',
      businessImpact: 'Powers intelligent enterprise search and provides instant, data-backed operational insights.',
      technologies: ['Hugging Face', 'Python', 'FastAPI', 'Tesseract OCR'],
    },
    {
      title: 'AI Consulting Services',
      shortDescription: 'Strategic roadmaps, data readiness audits, and pragmatic phased deployment architectures.',
      problem: 'Lack of clear roadmap, budget estimate, or understanding of data readiness for AI.',
      solution: 'Strategic advisory auditing infrastructure, assessing feasibility, and mapping phased delivery.',
      businessImpact: 'Ensures AI investments are directed strictly toward projects with guaranteed business ROI.',
      technologies: ['Architecture Audit', 'Data Readiness', 'MLOps Strategy'],
    },
  ],
  process: {
    heading: 'Our AI Engineering Lifecycle',
    description: 'A disciplined, 4-stage engineering pipeline from data audit to continuous production telemetry.',
    steps: [
      { number: '01', title: 'Data Audit & Feasibility Study', description: 'Evaluate training data quality, distribution balance, and technical feasibility.' },
      { number: '02', title: 'Model Architecture & Validation', description: 'Develop and benchmark model topologies against rigorous precision-recall metrics.' },
      { number: '03', title: 'Containerization & MLOps Pipeline', description: 'Package models into optimized Docker microservices with automated health checks.' },
      { number: '04', title: 'Telemetry & Continuous Retraining', description: 'Monitor live inference metrics, detect data drift, and automate retraining loops.' },
    ],
  },
  technologyStack: [
    {
      category: 'Models & Foundation',
      technologies: ['OpenAI', 'Anthropic Claude', 'Llama 3', 'Hugging Face'],
      description: 'Frontier foundation models fine-tuned and hosted in private, isolated enterprise environments.',
    },
    {
      category: 'AI Frameworks & Libraries',
      technologies: ['PyTorch', 'TensorFlow', 'OpenCV', 'LangChain'],
      description: 'Foundational frameworks for training, fine-tuning, and orchestrating intelligent agentic workflows.',
    },
    {
      category: 'Vector DBs & Streaming',
      technologies: ['Milvus', 'Redis', 'PostgreSQL', 'Apache Kafka'],
      description: 'Sub-millisecond similarity search across high-dimensional vector embeddings and streaming queues.',
    },
    {
      category: 'MLOps & Deployment',
      technologies: ['Docker', 'Kubernetes', 'FastAPI', 'ONNX'],
      description: 'Containerized model inference runtimes with real-time latency optimization and health telemetry.',
    },
  ],
  relatedCaseStudies: [
    {
      title: 'Satyaapan — Passport Verification at Scale',
      slug: 'satyapaan',
      category: 'Government AI & Security',
      client: 'Telangana State Police',
      shortDescription: 'AI-powered biometric passport verification platform processing 1.96M+ applications with facial recognition and automated clearance workflows.',
      image: '/home-img/satyapaan-min 2.png',
      metrics: [
        { value: '1.96M', label: 'Applications Processed' },
        { value: '99.4%', label: 'Biometric Accuracy' },
      ],
    },
    {
      title: 'Darpan — AI Facial Retrieval Engine',
      slug: 'darpan',
      category: 'Computer Vision & AI',
      client: 'State Law Enforcement',
      shortDescription: 'Deep learning facial recognition system matching missing-person records in real-time across high-volume state-scale databases.',
      image: '/images/services/darpan.webp',
      metrics: [
        { value: '800+', label: 'High-Risk Cases Flagged' },
        { value: '<1s', label: 'Match Response Time' },
      ],
    },
    {
      title: 'AI Voice Calling Agent',
      slug: 'ai-voice-agent',
      category: 'Conversational AI',
      client: 'Enterprise Growth Network',
      shortDescription: 'Bespoke AI voice agent delivering 24/7 automated sales calls, <3s response time, and 100% CRM synchronization.',
      image: '/images/services/analytics.webp',
      metrics: [
        { value: '+310%', label: 'Booked Appointments' },
        { value: '<3s', label: 'Speed-to-Lead' },
      ],
    },
    {
      title: 'Crowd Counting & Analytics Engine',
      slug: 'satyapaan',
      category: 'Computer Vision',
      client: 'Public Safety Authority',
      shortDescription: 'High-density crowd estimation and real-time perimeter security monitoring using custom deep learning video pipelines.',
      image: '/home-img/satyapaan-min 2.png',
      metrics: [
        { value: '98.8%', label: 'Count Precision' },
        { value: 'Real-Time', label: 'Video Inference' },
      ],
    },
    {
      title: 'Nigaah — Intelligent Surveillance Suite',
      slug: 'darpan',
      category: 'AI Video Telemetry',
      client: 'Municipal Law Enforcement',
      shortDescription: 'Distributed AI surveillance network with automatic license plate recognition, anomaly detection, and unified alert routing.',
      image: '/images/services/darpan.webp',
      metrics: [
        { value: '500+', label: 'Streams Processed' },
        { value: '<500ms', label: 'Alert Latency' },
      ],
    },
  ],
  trustSection: {
    heading: 'Why Global Leaders Trust Us',
    description:
      'Since 2005, Travash has operated as an AI-first digital transformation company. When global giants like MasterCard, VISA, Facebook, Autodesk, and UBS need to scale complex technical initiatives, they rely on our elite engineering talent.',
    stats: [
      { value: '2005', label: 'Established', description: 'Two decades of high-stakes engineering rigor' },
      { value: '99.4%', label: 'Biometric Precision', description: 'State-scale computer vision accuracy' },
      { value: '1.96M+', label: 'Records Processed', description: 'Zero-failure high-volume scale' },
      { value: '<3s', label: 'Speed-to-Lead', description: 'Real-time conversational agent response' },
    ],
  },
  testimonial: {
    quote:
      'Working with Travash on our bespoke AI Voice Calling Agent was a total game-changer, taking us from manual handling to a high-speed automated growth engine. Speed-to-lead plummeted from over four hours to under three seconds (24/7), directly increasing booked appointments by +310%. Our team reclaimed over 25 hours per week to focus entirely on closings, and our HubSpot CRM is 100% automated. Critically, the AI agent sounds real human, making it highly effective and customer-friendly. Travash delivers custom AI architectures with immediate operational clarity and rapid, measurable ROI.',
    author: 'Founder & CEO',
    role: 'Sales Operations',
    company: 'AI Voice Agent Client',
    avatarImage: '/images/services/imran-khan.png',
    badge: 'Verified Enterprise Client',
  },
  faqs: [
    {
      question: 'How do you ensure our proprietary data doesn’t leak into public AI models?',
      answer:
        'We operate on a strict zero-retention, private-deployment model. Your data never leaves your environment and is never used to train public foundation models. We use secure Retrieval-Augmented Generation (RAG) and private instances (like Azure OpenAI or AWS Bedrock) to ensure total data sovereignty.',
    },
    {
      question: 'How long does it take to move an AI project from concept to production?',
      answer:
        'While every enterprise environment is different, we focus on rapid deployment. We typically deliver a functional, secure Proof of Concept (PoC) within 4 to 6 weeks. From there, we iterate and scale the solution into your production environment within 3 to 6 months.',
    },
    {
      question: 'Do we need an internal team of AI experts to maintain this?',
      answer:
        'No. We offer flexible engagement models. We can either train your existing engineers to manage the system post-launch, or you can leverage our managed teams for continuous MLOps, model tuning, and infrastructure support.',
    },
    {
      question: 'What is the difference between your custom AI solutions and off-the-shelf tools?',
      answer:
        'Off-the-shelf tools force your business processes to adapt to their software. Our custom AI solutions are engineered to adapt to your business. We build systems that understand your specific industry jargon, integrate seamlessly with your legacy databases, and comply with your unique security frameworks.',
    },
  ],
  finalCTA: {
    heading: 'Ready to move from experimentation to execution?',
    description:
      'Stop guessing. Speak directly with a senior AI architect to evaluate your data readiness and build a roadmap that actually drives revenue.',
    primaryCTA: { label: 'Request a Technical Consultation', href: '#contact' },
    secondaryCTA: { label: 'Explore AI Case Studies', href: '/portfolio' },
  },
  seo: {
    metaTitle: 'AI Development Company | Enterprise AI, ML & Data Solutions | Travash',
    metaDescription:
      'Turn AI hype into enterprise ROI. We engineer custom AI automation solutions, agentic workflows, and secure LLM integrations to solve complex business bottlenecks.',
  },
}

// -------------------------------------------------------------
// 2. DATA & ANALYTICS SOLUTIONS
// -------------------------------------------------------------
export const DEFAULT_DATA_ANALYTICS_SERVICE: ServiceData = {
  title: 'Data & Analytics Solutions',
  slug: 'data-analytics-solutions',
  menuTitle: 'Data & Analytics',
  shortDescription:
    'Convert raw enterprise data into hard ROI. We architect high-speed data pipelines, deploy scalable cloud warehouses, and build custom business intelligence systems.',
  hero: {
    eyebrow: 'Enterprise Data Engineering & BI',
    title: 'Stop Drowning in Data. Start Driving Revenue.',
    description:
      'Having terabytes of data means nothing if you cannot extract immediate, actionable truth from it. We architect high-speed data pipelines, implement powerful business intelligence platforms, and build custom dashboards that turn raw enterprise data into hard ROI.',
    primaryCTA: { label: 'Book a Data Architecture Audit', href: '#contact' },
    secondaryCTA: { label: 'View Analytics Case Studies', href: '#case-studies' },
    highlights: [
      'Sub-second query response times',
      'Zero-data-loss streaming pipelines',
      'Custom executive KPI dashboards',
      'SOC2 / HIPAA-ready data security',
    ],
  },
  problemSection: {
    label: 'The Reality of Enterprise Data',
    title: 'The Problem: You are making critical decisions based on outdated spreadsheets.',
    headline: 'Tech leaders are sitting on a goldmine of data, but it is trapped in disconnected silos.',
    description:
      'Finance uses one system, sales uses another, and your supply chain is a black box. When it takes your team three weeks to manually compile a performance report, you are reacting to the past instead of navigating the future.',
    painPoints: [
      {
        title: 'Disconnected Data Silos',
        description: 'Multiple departments use conflicting software tools, making it impossible to see unified real-time metrics.',
      },
      {
        title: 'Manual Spreadsheet Drudgery',
        description: 'Analysts spend thousands of wasted hours manually copying and pasting numbers into Excel every week.',
      },
      {
        title: 'Dirty & Un-Sanitized Records',
        description: 'Corrupt, duplicated, and inconsistent schemas result in inaccurate business intelligence reporting.',
      },
      {
        title: 'Unused Unstructured Data',
        description: 'PDFs, customer service transcripts, and logs remain locked away without natural language extraction.',
      },
    ],
  },
  solutionOverview: {
    heading: 'How Travash Solves It',
    description:
      'We do not just visualize data; we fix the plumbing underneath it. We deploy senior data architects who untangle your fragmented systems and build a secure, centralized single source of truth.',
    benefits: [
      {
        icon: 'database',
        title: 'Eradicate Data Silos',
        description: 'Automated ETL pipelines extracting data from legacy systems into unified warehouses like Snowflake and BigQuery.',
      },
      {
        icon: 'users',
        title: 'Top 1% Data Talent',
        description: 'Dedicated pods of senior data engineers, warehouse architects, and BI analysts embedded in your delivery.',
      },
      {
        icon: 'bar-chart',
        title: 'Real-Time Visibility',
        description: 'Role-based interactive dashboards giving executive leadership immediate operational clarity.',
      },
      {
        icon: 'trending-up',
        title: 'Predictive Intelligence',
        description: 'Moving beyond historical reporting into machine learning-driven forecasting and anomaly detection.',
      },
    ],
    cta: { label: 'Schedule Data Architecture Review', href: '#contact' },
  },
  capabilities: [
    {
      title: 'Data Engineering',
      shortDescription: 'Scalable data infrastructure, high-throughput ETL/ELT pipelines, and distributed lakehouse storage.',
      problem: 'Data is dirty, duplicated, and scattered across dozens of incompatible legacy systems.',
      solution: 'We architect scalable data infrastructure using modern engines like Hadoop, Spark, and NoSQL.',
      businessImpact: 'Creates an unshakeable foundation of high-quality data ensuring accurate BI reporting.',
      technologies: ['Apache Kafka', 'Apache Spark', 'Python', 'Airflow'],
    },
    {
      title: 'Business Intelligence (BI)',
      shortDescription: 'Enterprise BI platforms enabling non-technical teams to query massive datasets intuitively.',
      problem: 'Non-technical leaders cannot get answers without submitting IT tickets and waiting days.',
      solution: 'We customize leading BI engines with intuitive semantic layers so anyone can explore data.',
      businessImpact: 'Democratizes data access across your company, cutting time from question to answer.',
      technologies: ['Power BI', 'Tableau', 'Looker', 'dbt'],
    },
    {
      title: 'Advanced Analytics',
      shortDescription: 'Descriptive, diagnostic, and predictive analytics models forecasting business trends.',
      problem: 'Knowing what happened last quarter without mathematical ability to predict next month.',
      solution: 'We build predictive analytics models using historical data to forecast trends and flag anomalies.',
      businessImpact: 'Anticipate supply chain shortages, predict churn, and optimize pricing dynamically.',
      technologies: ['Python', 'Scikit-Learn', 'Snowflake', 'BigQuery'],
    },
    {
      title: 'Custom Dashboards',
      shortDescription: 'Role-based, real-time visual interfaces that cut through noise and highlight vital KPIs.',
      problem: 'Executive dashboards cluttered with vanity metrics that provide zero operational value.',
      solution: 'UX-led data visualization tailored to specific roles from CEO to warehouse managers.',
      businessImpact: 'Accelerates executive decisions and aligns teams around visible, immediate metrics.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Automated Reporting',
      shortDescription: 'Scheduled, compliant, and zero-error data drops that eliminate weekly manual Excel compilation.',
      problem: 'Analysts burning thousands of hours copying data into Excel for weekly compliance reports.',
      solution: 'Automated reporting systems pulling live data and distributing it securely on schedule.',
      businessImpact: 'Recoups thousands of man-hours and ensures regulatory reporting is always accurate.',
      technologies: ['Python', 'PostgreSQL', 'Airflow', 'Node.js'],
    },
  ],
  process: {
    heading: 'Our Data Engineering Process',
    description: 'A disciplined 4-stage process bringing complete order to enterprise data chaos.',
    steps: [
      { number: '01', title: 'Data Discovery & Audit', description: 'Map existing data sources, identify pipeline bottlenecks, and define target business metrics.' },
      { number: '02', title: 'Pipeline Architecture', description: 'Design automated ETL processes and select optimized data warehousing solutions.' },
      { number: '03', title: 'Agile Engineering', description: 'Build and validate ingestion pipelines in iterative sprints with continuous schema testing.' },
      { number: '04', title: 'BI Integration & DataOps', description: 'Deploy interactive dashboards, predictive models, and continuous monitoring telemetry.' },
    ],
  },
  technologyStack: [
    {
      category: 'Cloud Platforms',
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud'],
      description: 'Enterprise multi-cloud ecosystems with auto-scaling compute and high-availability architecture.',
    },
    {
      category: 'Containerization & Orchestration',
      technologies: ['Docker', 'Kubernetes'],
      description: 'Microservices containerization with zero-downtime rolling deployments and automated cluster healing.',
    },
    {
      category: 'CI/CD & Automation',
      technologies: ['Jenkins', 'GitLab', 'Ansible', 'HashiCorp Terraform'],
      description: 'Version-controlled infrastructure as code and automated deployment pipelines with zero human error.',
    },
    {
      category: 'Monitoring & Security',
      technologies: ['DataGrip', 'Prometheus', 'Grafana', 'Cloudflare'],
      description: 'Real-time infrastructure observability, log aggregation, automated alerts, and edge DDoS protection.',
    },
  ],
  relatedCaseStudies: [
    {
      title: 'I4C — National Cyber Crime Coordination',
      slug: 'i4c',
      category: 'Government Data Platform',
      client: 'National Cyber Crime Bureau',
      shortDescription: 'National-scale cyber fraud tracking and analytics platform processing real-time fraud alerts and enabling instant coordination across 1,000+ stations.',
      image: '/images/services/i4c.png',
      metrics: [
        { value: '1000+', label: 'Stations Connected' },
        { value: 'Real-Time', label: 'Data Sync' },
      ],
    },
    {
      title: 'Darpan — AI Facial Retrieval Engine',
      slug: 'darpan',
      category: 'Computer Vision & AI',
      client: 'State Law Enforcement',
      shortDescription: 'Deep learning facial recognition system matching missing-person records in real-time across high-volume state-scale databases.',
      image: '/images/services/darpan.webp',
      metrics: [
        { value: '800+', label: 'High-Risk Cases Flagged' },
        { value: '<1s', label: 'Match Response Time' },
      ],
    },
    {
      title: 'Dine Desk — Restaurant Management Platform',
      slug: 'dine-desk',
      category: 'Hospitality Analytics SaaS',
      client: 'Enterprise Restaurant Network',
      shortDescription: 'Data-driven restaurant management platform with occupancy analytics, automated reporting, and real-time operational intelligence for multi-unit chains.',
      image: '/images/services/dinedesk.png',
      metrics: [
        { value: '3x', label: 'Table Turnover' },
        { value: '40%', label: 'No-Show Reduction' },
      ],
    },
  ],
  trustSection: {
    heading: 'Why Global Leaders Trust Us',
    description:
      'Since 2005, Travash has operated as a trusted technology partner for organizations that deal with massive, complex datasets. Global leaders like MasterCard, VISA, Facebook, Autodesk, and UBS trust our elite engineering talent to manage, protect, and analyze their most critical information.',
    stats: [
      { value: '2005', label: 'Established', description: 'Enterprise architectural discipline' },
      { value: '100M+', label: 'Stolen Funds Intercepted', description: 'Real-time fraud telemetry' },
      { value: '99.99%', label: 'Uptime', description: 'Mission-critical database availability' },
      { value: '<50ms', label: 'Query Latency', description: 'Sub-second data retrieval' },
    ],
  },
  testimonial: {
    quote:
      "Travash is our technology partner and the backbone of our national fight against cyber fraud. They engineer and manage the massive coordination application we rely on to track fraudsters in real-time, halt malicious activities, and recover stolen funds. Thanks to their robust infrastructure and deep expertise, we are saving millions of citizens' hard-earned rupees.",
    author: 'Senior Leadership & National Coordinator',
    role: 'Cyber Crime Coordination',
    company: 'National Anti-Fraud Network',
    avatarImage: '/images/services/testimonial-avatar.jpeg',
    badge: 'National Public Safety Authority',
  },
  faqs: [
    {
      question: 'We have massive amounts of unstructured data (PDFs, emails, images). Can you analyze that?',
      answer:
        'Yes. Traditional relational databases cannot handle unstructured data, but our data engineers utilize modern NoSQL databases and data lakes to store it. From there, we deploy Natural Language Processing (NLP) and machine learning models to extract structured insights from your unstructured documents.',
    },
    {
      question: 'How do you ensure our sensitive business data remains secure during analytics?',
      answer:
        'Security is our baseline. We implement strict Role-Based Access Control (RBAC), meaning a warehouse employee cannot see executive financial dashboards. We utilize data masking, encryption at rest, and encryption in transit to ensure absolute compliance with global standards.',
    },
    {
      question: 'What is the difference between a Data Lake and a Data Warehouse?',
      answer:
        'A Data Lake stores raw, unstructured, and structured data exactly as it comes in—it is highly flexible and scalable. A Data Warehouse stores processed, structured data that has been cleaned and optimized specifically for fast querying by Business Intelligence tools. We typically architect a combination of both to maximize your analytics capabilities.',
    },
  ],
  finalCTA: {
    heading: 'Ready to turn your data into a competitive advantage?',
    description:
      'Stop making decisions based on outdated spreadsheets. Speak with a senior Data Architect today to evaluate your infrastructure and build a roadmap for real-time analytics.',
    primaryCTA: { label: 'Request a Data Architecture Audit', href: '#contact' },
    secondaryCTA: { label: 'View Case Studies', href: '/portfolio' },
  },
  seo: {
    metaTitle: 'Enterprise Data Analytics Services & Business Intelligence | Travash',
    metaDescription:
      'Stop drowning in fragmented data. We provide enterprise data engineering, custom dashboards, and data analytics services to drive real-time decisions.',
  },
}

// -------------------------------------------------------------
// 3. SOFTWARE ENGINEERING
// -------------------------------------------------------------
export const DEFAULT_SOFTWARE_ENGINEERING_SERVICE: ServiceData = {
  title: 'Custom Software Development & Product Engineering',
  slug: 'software-engineering',
  menuTitle: 'Software Engineering',
  shortDescription:
    'Build software that scales, not technical debt. We provide product engineering services, SaaS development, and legacy system modernization for global enterprises.',
  hero: {
    eyebrow: 'Full-Stack Enterprise Engineering',
    title: 'Build Software That Scales, Not Technical Debt.',
    description:
      'Stop fighting with rigid, off-the-shelf platforms. We co-engineer robust enterprise software, high-performance SaaS applications, and custom digital products designed to solve complex business bottlenecks and drive hard ROI.',
    primaryCTA: { label: 'Book a Technical Consultation', href: '#contact' },
    secondaryCTA: { label: 'View Our Engineering Case Studies', href: '#case-studies' },
    highlights: [
      'Cloud-Native Microservices',
      'Zero-Downtime Releases',
      'Pre-Built Solution Accelerators',
      'Top 1% Engineering Pods',
    ],
  },
  problemSection: {
    label: 'The Reality of Enterprise Software',
    title: 'The Problem: You are forced to choose between speed, security, and quality.',
    headline: 'Tech leaders are under immense pressure to launch products faster, but building in-house drains time and budget.',
    description:
      'Relying on generic, boxed software creates fragmented workflows and security vulnerabilities. Meanwhile, your legacy systems are becoming too expensive to maintain. You need a predictable, repeatable way to build and scale technology without breaking your existing operations.',
    painPoints: [
      {
        title: 'Crushing Technical Debt',
        description: 'Fragile legacy codebases make adding even simple features risky, slow, and unpredictable.',
      },
      {
        title: '6-Month Recruiting Bottlenecks',
        description: 'Searching for senior full-stack talent stalls product roadmaps and burns hiring capital.',
      },
      {
        title: 'Rigid Monoliths',
        description: 'Inflexible commercial software forces your business workflows to adapt to their limitations.',
      },
      {
        title: 'Disconnected Data Silos',
        description: 'Isolated legacy applications require error-prone manual data entry to sync information.',
      },
    ],
  },
  solutionOverview: {
    heading: 'How Travash Solves It',
    description:
      'We don’t just write code; we help you build a scalable "product factory." We deploy agile engineering pods that integrate directly into your business, combining deep technical authority with rapid execution.',
    benefits: [
      {
        icon: 'users',
        title: 'Dedicated Engineering Pods',
        description: 'Instantly scale capacity with dedicated development teams of top 1% engineers, bypassing hiring friction.',
      },
      {
        icon: 'zap',
        title: 'Solution Accelerators',
        description: 'Pre-built, secure frameworks and reusable architectures for common enterprise challenges to cut time-to-market.',
      },
      {
        icon: 'cloud',
        title: 'Agile & Cloud-Native',
        description: 'Every product is built on cloud-native microservices, ensuring zero downtime, multi-tenant scale, and automated CI/CD.',
      },
      {
        icon: 'shield',
        title: '100% IP Ownership',
        description: 'Complete legal transfer of all source code, architecture blueprints, and design assets upon milestone completion.',
      },
    ],
    cta: { label: 'Schedule Technical Consultation', href: '#contact' },
  },
  capabilities: [
    {
      title: 'Custom Software Development',
      shortDescription: 'Bespoke applications designed from scratch, tailored exclusively to your proprietary workflows.',
      problem: 'Your business logic is unique, but you are bending operations to generic SaaS limitations.',
      solution: 'We architect bespoke applications from the ground up—from requirements to cloud deployment.',
      businessImpact: 'A proprietary digital asset matching your workflows with zero ongoing licensing bloat.',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Java'],
    },
    {
      title: 'Enterprise Software Development',
      shortDescription: 'Robust internal platforms—from ERPs to CRM systems—that unify departments and automate workflows.',
      problem: 'Disconnected data silos prevent departments from communicating, causing massive inefficiencies.',
      solution: 'Centralized enterprise solutions including custom ERPs, HRMS, and business automation platforms.',
      businessImpact: 'Unifies your entire workforce under a secure digital roof, streamlining operations.',
      technologies: ['Java', 'Spring Boot', 'C# .NET', 'Oracle', 'PostgreSQL'],
    },
    {
      title: 'SaaS Development',
      shortDescription: 'High-performance multi-tenant platforms designed for rapid scaling, billing, and recurring revenue.',
      problem: 'Building a multi-tenant architecture that can handle thousands of concurrent users is overwhelming.',
      solution: 'High-performance subscription platforms with dynamic billing engines and scalable cloud infra.',
      businessImpact: 'Accelerates time-to-market and ensures your SaaS scales rapidly without performance drops.',
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe API'],
    },
    {
      title: 'Product Engineering Services',
      shortDescription: 'End-to-end product lifecycle engineering, taking concepts through UI/UX, MVP, and full launch.',
      problem: 'Taking an idea from MVP to mature product requires a complex blend of design and engineering.',
      solution: 'Iterative UX methodologies, A/B testing, and agile sprints to validate and build winning features.',
      businessImpact: 'Reduces development risk, launches faster, and iterates based on real data.',
      technologies: ['Figma', 'React Native', 'Node.js', 'Docker'],
    },
    {
      title: 'API Development & Integration',
      shortDescription: 'Secure REST and GraphQL APIs allowing legacy systems and cloud applications to communicate seamlessly.',
      problem: 'Legacy tools, cloud platforms, and third-party apps are isolated, requiring manual data syncing.',
      solution: 'Secure, high-performance APIs and intelligent integrations syncing systems in real time.',
      businessImpact: 'Eliminates manual data syncing, cuts human error, and creates an automated ecosystem.',
      technologies: ['GraphQL', 'REST', 'FastAPI', 'Node.js', 'Redis'],
    },
    {
      title: 'Legacy System Modernization',
      shortDescription: 'Future-proof aging technical infrastructure by migrating monoliths to agile cloud microservices.',
      problem: 'Core business relies on outdated monolithic code that is expensive to maintain and insecure.',
      solution: 'Zero-disruption modernization untangling monolithic codebases into agile microservices.',
      businessImpact: 'Drastically reduces server costs, hardens security, and future-proofs operations.',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Microservices'],
    },
  ],
  process: {
    heading: 'Our Engineering Process',
    description: 'We bring rigorous order to complex technical builds to ensure on-time, vulnerability-free releases.',
    steps: [
      { number: '01', title: 'Discovery & Architecture', description: 'Analyze business logic, map data architectures, and create wireframes before writing code.' },
      { number: '02', title: 'Agile Sprints', description: 'Iterative 2-week delivery cycles with continuous client demos and total transparency.' },
      { number: '03', title: 'QA & Security Testing', description: 'Integrated automated testing and DevSecOps pipelines ensuring vulnerability-free code.' },
      { number: '04', title: 'CI/CD Deployment', description: 'Automated continuous integration and deployment launching software with zero downtime.' },
    ],
  },
  technologyStack: [
    {
      category: 'Frontend Platforms',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      description: 'Modern component-driven web user interfaces with server-side rendering.',
    },
    {
      category: 'Backend & APIs',
      technologies: ['Java', 'Node.js', 'Go', 'Python', 'GraphQL', 'REST'],
      description: 'Robust server environments built for high concurrency and zero memory leaks.',
    },
    {
      category: 'Databases & Messaging',
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka'],
      description: 'Relational ACID transactions, fast cache layers, and distributed messaging.',
    },
    {
      category: 'Cloud & CI/CD',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
      description: 'Scalable containerization and continuous delivery pipelines for zero-downtime releases.',
    },
  ],
  relatedCaseStudies: [
    {
      title: 'Satyaapan — Passport Verification Platform',
      slug: 'satyapaan',
      category: 'Government Enterprise Software',
      client: 'Telangana State Police',
      shortDescription: 'Full-stack enterprise web platform for high-volume passport verification, integrating AI, database matching, and automated workflow routing.',
      image: '/home-img/satyapaan-min 2.png',
      metrics: [
        { value: '1.96M', label: 'Records Processed' },
        { value: '99.9%', label: 'Uptime' },
      ],
    },
    {
      title: 'UGO — Field Operations Mobile Platform',
      slug: 'ugo',
      category: 'Enterprise Mobile & Web',
      client: 'Field Operations Enterprise',
      shortDescription: 'Cross-platform mobile app for real-time GPS field tracking, task management, and live dispatch coordination for large-scale field teams.',
      image: '/home-img/ugo-field.png',
      metrics: [
        { value: '10K+', label: 'Daily Active Users' },
        { value: '3x', label: 'Operational Efficiency' },
      ],
    },
    {
      title: 'Direct Owners — Property Marketplace',
      slug: 'direct-owners',
      category: 'SaaS Platform',
      client: 'Real Estate Technology',
      shortDescription: 'High-performance property marketplace platform with advanced search, lead management, and multi-vendor listing workflows.',
      image: '/images/services/dinedesk.png',
      metrics: [
        { value: '50K+', label: 'Active Listings' },
        { value: '4x', label: 'Lead Conversion Lift' },
      ],
    },
    {
      title: 'Dine Desk — Restaurant Management Platform',
      slug: 'dine-desk',
      category: 'Full-Stack Web & Mobile SaaS',
      client: 'Enterprise Restaurant Network',
      shortDescription: 'End-to-end multi-tenant table reservation, staff management, and CRM platform built with modular React and microservices.',
      image: '/images/services/dinedesk.png',
      metrics: [
        { value: '3x', label: 'Table Turnover' },
        { value: '99.9%', label: 'Platform Availability' },
      ],
    },
  ],
  trustSection: {
    heading: 'Why Global Leaders Trust Us',
    description:
      'Since 2005, Travash has operated as a trusted technology partner for organizations that cannot afford to fail. When global leaders like MasterCard, VISA, Facebook, Autodesk, and UBS need to build mission-critical software, they rely on our elite engineering talent.',
    stats: [
      { value: '2005', label: 'Founded', description: 'Decades of software engineering excellence' },
      { value: '99.9%', label: 'Platform Uptime', description: 'Engineered for zero downtime' },
      { value: '10K+', label: 'Active Daily Users', description: 'High-concurrency mobile & web systems' },
      { value: '100%', label: 'IP Ownership', description: 'All source code transferred to client' },
    ],
  },
  testimonial: {
    quote:
      "Trying to force our UK logistics operations into rigid, off-the-shelf software was an absolute nightmare. We needed a system that adapted to our unique workflows, not the other way around. Travash stepped in, mapped out our exact operational DNA, and built a bespoke internal application that fits us like a glove. Everything from our internal tracking to dispatch is finally unified exactly how we work on the floor. They didn't just build an app; they engineered a flawless digital extension of our business.",
    author: 'Operations Director',
    role: 'Head of Operations',
    company: 'UGO',
    avatarImage: '/images/services/imran-khan.png',
    badge: 'Logistics Enterprise UK',
  },
  faqs: [
    {
      question: 'Who owns the intellectual property (IP) and the source code?',
      answer:
        'You do. We work strictly under Non-Disclosure Agreements (NDAs). Once the project is completed and compensated, 100% of the IP, source code, and design assets are legally transferred to your organization.',
    },
    {
      question: 'How do you mitigate the risks of legacy system modernization?',
      answer:
        'We do not believe in "rip and replace." We use an incremental, microservices-based approach. We isolate specific components of your legacy system, modernize them, and run them in parallel to ensure zero business disruption during the transition.',
    },
    {
      question: 'How quickly can you onboard an engineering team for our project?',
      answer:
        'Because we maintain a deep bench of vetted, top-tier engineering talent, we can typically assemble and onboard a dedicated development pod tailored to your tech stack within 2 to 4 weeks.',
    },
    {
      question: 'Will my software be built to scale?',
      answer:
        'Absolutely. We take a cloud-native, API-first approach to all software engineering. This means your application is designed from day one to handle increased traffic, complex database queries, and future feature expansions without requiring a total rebuild.',
    },
  ],
  finalCTA: {
    heading: 'Ready to build digital products that drive real revenue?',
    description:
      'Stop letting technical debt slow you down. Speak with a senior engineering architect today to discuss your roadmap, architecture, and deployment strategy.',
    primaryCTA: { label: 'Request a Technical Consultation', href: '#contact' },
    secondaryCTA: { label: 'Explore Engineering Case Studies', href: '/portfolio' },
  },
  seo: {
    metaTitle: 'Custom Software Development Company | Enterprise & SaaS Solutions | Travash',
    metaDescription:
      'Build software that scales, not technical debt. We provide product engineering services, SaaS development, and legacy system modernization for global enterprises.',
  },
}

// -------------------------------------------------------------
// 4. DIGITAL EXPERIENCES (WEB & MOBILE)
// -------------------------------------------------------------
export const DEFAULT_DIGITAL_EXPERIENCES_SERVICE: ServiceData = {
  title: 'Digital Experiences (Web & Mobile)',
  slug: 'digital-experiences-web-mobile',
  menuTitle: 'Digital Experiences',
  shortDescription:
    'Stop losing users to clunky interfaces. We design and engineer high-performance web applications, enterprise portals, and custom mobile apps that drive adoption and revenue.',
  hero: {
    eyebrow: 'UX-Led Web & Mobile Engineering',
    title: 'Stop Losing Users to Clunky Interfaces.',
    description:
      'A powerful backend means nothing if your frontend frustrates the user. We design and engineer high-performance web applications, enterprise portals, and custom mobile apps that drive adoption, engagement, and hard revenue.',
    primaryCTA: { label: 'Book a UX & Engineering Audit', href: '#contact' },
    secondaryCTA: { label: 'View Our Digital Experience Portfolio', href: '#case-studies' },
    highlights: [
      'Sub-Second Load Times',
      'Cross-Platform React Native & Flutter',
      'Human-Centered UI/UX',
      '60fps Gesture Animations',
    ],
  },
  problemSection: {
    label: 'The Reality of Digital Experiences',
    title: 'The Problem: Bad design is costing you market share.',
    headline: 'Tech leaders know that user expectations are ruthless.',
    description:
      "Whether it is a consumer-facing mobile app or an internal enterprise portal, if it takes too many clicks to achieve a goal, users abandon it. You don't just need a development team to write code; you need engineers who understand user behavior, load speeds, and conversion architecture.",
    painPoints: [
      {
        title: 'High User Churn & Abandonment',
        description: 'Complex navigation hierarchies and slow UI transitions lead users to abandon workflows.',
      },
      {
        title: 'Double Maintenance Overhead',
        description: 'Managing separate iOS and Android native codebases inflates budgets and causes feature parity delays.',
      },
      {
        title: 'Frustrating Desktop & Mobile Lag',
        description: 'Legacy web tools requiring full-page reloads that perform poorly on mobile viewports.',
      },
      {
        title: 'Internal Data Silos',
        description: 'Employees wasting hours searching through disconnected portals and spreadsheets.',
      },
    ],
  },
  solutionOverview: {
    heading: 'How Travash Solves It',
    description:
      'We treat UI/UX design and software engineering as a single, unified discipline. We deploy cross-functional pods of designers and developers who build fast, intuitive digital products.',
    benefits: [
      {
        icon: 'layout',
        title: 'UX-Led Engineering',
        description: 'We map the user journey, conduct usability testing, and prototype interactive wireframes before writing frontend code.',
      },
      {
        icon: 'smartphone',
        title: 'Cross-Platform Velocity',
        description: 'Using modern frameworks like React Native and Flutter to build single-codebase apps running flawlessly on iOS and Android.',
      },
      {
        icon: 'zap',
        title: 'Performance First',
        description: 'We engineer for sub-second load times and fluid 60fps micro-interactions that keep users engaged.',
      },
      {
        icon: 'lock',
        title: 'Enterprise Security Gateways',
        description: 'Strict role-based access control (RBAC), data encryption, and secure API gateways built directly into the client.',
      },
    ],
    cta: { label: 'Schedule UX Review', href: '#contact' },
  },
  capabilities: [
    {
      title: 'UI/UX Design',
      shortDescription: 'Empathy, creativity, and user testing to design interfaces that solve problems and drive action.',
      problem: 'Steep learning curves leading to high support tickets and low user retention.',
      solution: 'User testing, wireframing, and interactive prototyping building intuitive UI architectures.',
      businessImpact: 'Drastically cuts onboarding time, reduces support costs, and lifts user retention.',
      technologies: ['Figma', 'Framer Motion', 'Design Systems', 'User Testing'],
    },
    {
      title: 'Web Application Development',
      shortDescription: 'Complex browser software delivering the speed and fluidity of a native desktop application.',
      problem: 'Legacy web tools are slow, require constant reloads, and look terrible on mobile.',
      solution: 'Lightning-fast SPAs and PWAs built using modern component-driven JavaScript frameworks.',
      businessImpact: 'Delivers a frictionless user experience across all screen sizes, reducing bounce rates.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Mobile App Development',
      shortDescription: 'Cutting-edge native and cross-platform mobile apps for iOS and Android environments.',
      problem: 'Managing separate codebases for Apple and Android doubles development and upkeep costs.',
      solution: 'High-performance cross-platform apps with secure APIs and offline sync capabilities.',
      businessImpact: 'Gets you into App Store and Google Play faster, cutting costs and delighting mobile users.',
      technologies: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)'],
    },
    {
      title: 'Enterprise Portals',
      shortDescription: 'Secure digital hubs connecting employees, partners, and vendors with role-based data views.',
      problem: 'Internal data scattered across emails, spreadsheets, and legacy tools making collaboration impossible.',
      solution: 'Role-based portals securely aggregating CRM, ERP, and operations data in one dashboard.',
      businessImpact: 'Breaks down data silos, accelerates decisions, and enforces strict access control.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
    },
    {
      title: 'High-Conversion Website Development',
      shortDescription: 'Fast, scalable, and SEO-optimized corporate web platforms that act as lead generation engines.',
      problem: 'Current website is slow, difficult to update, and fails to convert traffic into qualified leads.',
      solution: 'Modern website design and development backed by headless CMS architecture and technical SEO.',
      businessImpact: 'Turns your site into a high-speed, high-converting digital asset easy for marketing to manage.',
      technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'TypeScript'],
    },
  ],
  process: {
    heading: 'Our Experience Engineering Process',
    description: 'We eliminate guesswork from digital product development with iterative user-validated sprints.',
    steps: [
      { number: '01', title: 'Research & Empathy', description: 'Analyze target audience, define user personas, and map out core feature workflows.' },
      { number: '02', title: 'Wireframing & Prototyping', description: 'Interactive clickable prototypes allowing you to validate user flow before development.' },
      { number: '03', title: 'Frontend & Backend Build', description: 'Engineers integrate pixel-perfect UI with secure, scalable cloud infrastructure and APIs.' },
      { number: '04', title: 'User Testing & Launch', description: 'Device-compatibility testing, accessibility audits, and load stress testing for a flawless rollout.' },
    ],
  },
  technologyStack: [
    {
      category: 'Web Frameworks',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      description: 'Blazing-fast responsive interfaces with server-side rendering and fluid animations.',
    },
    {
      category: 'UI/UX & Design Systems',
      technologies: ['Figma', 'Framer Motion', 'HTML5', 'CSS3'],
      description: 'Pixel-perfect component design libraries and interactive motion design systems.',
    },
    {
      category: 'Mobile & Cross-Platform',
      technologies: ['React Native', 'Flutter', 'iOS', 'Android'],
      description: 'Native mobile experiences with 60fps gesture-driven navigation and offline support.',
    },
    {
      category: 'State & API Integrations',
      technologies: ['GraphQL', 'REST', 'Node.js', 'Redux'],
      description: 'Reactive client state management and clean headless CMS / API integrations.',
    },
  ],
  relatedCaseStudies: [
    {
      title: 'Rating Star — Digital Experience Platform',
      slug: 'pixl',
      category: 'Brand Experience & UI/UX',
      client: 'Rating Star',
      shortDescription: 'Complete end-to-end digital experience with intuitive UX workflows, modern aesthetic design, and high-conversion client interactions.',
      image: '/images/services/analytics.webp',
      metrics: [
        { value: '3x', label: 'User Engagement' },
        { value: '45%', label: 'Retention Boost' },
      ],
    },
    {
      title: 'Indispare — E-Commerce Experience',
      slug: 'indispare',
      category: 'Industrial Marketplace UX',
      client: 'Indispare',
      shortDescription: 'Streamlined parts discovery and quotation user journey engineered for frictionless navigation across hundreds of thousands of SKUs.',
      image: '/images/services/dinedesk.png',
      metrics: [
        { value: '4x', label: 'Checkout Conversion' },
        { value: '<1.2s', label: 'Page Load Speed' },
      ],
    },
    {
      title: 'Direct Owners — Property Experience',
      slug: 'direct-owners',
      category: 'Consumer Web Platform',
      client: 'Real Estate Technology',
      shortDescription: 'High-conversion property marketplace with intuitive search, immersive listing pages, and streamlined lead capture flows.',
      image: '/images/services/i4c.png',
      metrics: [
        { value: '50K+', label: 'Active Listings' },
        { value: '4x', label: 'Lead Conversion Lift' },
      ],
    },
  ],
  trustSection: {
    heading: 'Why Global Leaders Trust Us',
    description:
      'Since 2005, Travash has operated as a trusted technology partner for organizations that demand exceptional quality. When global leaders like MasterCard, VISA, Facebook, Autodesk, and UBS need to build user-facing digital products, they rely on our elite design and engineering talent.',
    stats: [
      { value: '2005', label: 'Established', description: 'Two decades of design & engineering mastery' },
      { value: '3x', label: 'Engagement Lift', description: 'Average client user engagement growth' },
      { value: '<1.2s', label: 'Load Time', description: 'Sub-second mobile experience performance' },
      { value: '60fps', label: 'Fluid Motion', description: 'Hardware-accelerated gesture animations' },
    ],
  },
  testimonial: {
    quote:
      "We came to Travash with nothing but a concept and a blank canvas for Rating Star. We needed more than just a fresh coat of paint; we needed a complete, end-to-end digital experience. They mapped out every single user workflow from scratch and translated complex requirements into a beautifully clean, highly intuitive interface. They didn't just design our platform — they defined how our users experience our brand. The final design is visually striking, modern, and completely effortless to navigate.",
    author: 'Vinay',
    role: 'Founder',
    company: 'Rating Star',
    avatarImage: '/images/services/imran-khan.png',
    badge: 'Verified Founder',
  },
  faqs: [
    {
      question: 'Should we build a Native app (iOS/Android) or a Cross-Platform app?',
      answer:
        'It depends on your specific use case. If your app requires heavy use of native device hardware (like complex AR or extreme graphics), Native is best. If you need to hit the market quickly and cost-effectively on both Apple and Android, a cross-platform framework like React Native is usually the smartest business decision.',
    },
    {
      question: 'Do you provide ongoing support after the app or website is launched?',
      answer:
        'Yes. Digital products require continuous iteration. We offer long-term support contracts to handle OS updates, security patches, feature expansions, and continuous UX optimization based on live user data.',
    },
    {
      question: 'How do you ensure the web application is secure?',
      answer:
        'Security is engineered into the architecture from day one. We implement strict data encryption, secure API gateways, and role-based access controls (RBAC) to ensure your enterprise data is never exposed.',
    },
  ],
  finalCTA: {
    heading: 'Ready to build a digital product your users will actually love?',
    description:
      'Stop losing customers to bad design. Speak with a senior UX architect and engineering lead today to map out your next web or mobile application.',
    primaryCTA: { label: 'Request a UX & Engineering Consultation', href: '#contact' },
    secondaryCTA: { label: 'Explore Our Portfolio', href: '/portfolio' },
  },
  seo: {
    metaTitle: 'Web Application & Mobile App Development Company | Travash',
    metaDescription:
      'Stop losing users to poor design. We provide UX-led web application development and custom mobile app development for high-growth enterprises.',
  },
}

// -------------------------------------------------------------
// 5. ENTERPRISE APPLICATIONS
// -------------------------------------------------------------
export const DEFAULT_ENTERPRISE_APPS_SERVICE: ServiceData = {
  title: 'Enterprise Applications & Modernization',
  slug: 'enterprise-applications',
  menuTitle: 'Enterprise Applications',
  shortDescription:
    'Stop adapting your business to rigid software. Our senior architects engineer custom enterprise software, ERPs, and CRM development services tailored to your workflows.',
  hero: {
    eyebrow: 'Mission-Critical Business Systems',
    title: 'Architected for Scale. Engineered for Your Enterprise.',
    description:
      'The difference between an expensive, unstable system and a swift, reliable platform is how well the foundation is architected. We design and build custom enterprise applications, CRMs, and ERPs that adapt to your exact business operations—not the other way around.',
    primaryCTA: { label: 'Book an Architectural Assessment', href: '#contact' },
    secondaryCTA: { label: 'View Enterprise Case Studies', href: '#case-studies' },
    highlights: [
      'Senior Architects at the Helm',
      'API-First Integration',
      'Zero Per-Seat Licensing Fees',
      'SOC2 / GDPR Ready',
    ],
  },
  problemSection: {
    label: 'The Reality of Enterprise Software',
    title: 'The Problem: Off-the-shelf software is dictating how you run your business.',
    headline: 'You bought an out-of-the-box ERP or CRM promising total efficiency.',
    description:
      "Instead, you got bloated licensing fees, features you don't use, and a system that refuses to talk to your other tools. When you are forced to change your proprietary business workflows just to make the software work, the software has failed you.",
    painPoints: [
      {
        title: 'Bloated Per-Seat Licensing Costs',
        description: 'Paying exorbitant monthly vendor fees for software bloated with features you never use.',
      },
      {
        title: 'Inflexible Proprietary Workflows',
        description: 'Forced to alter your core operational procedures just to accommodate rigid boxed software limitations.',
      },
      {
        title: 'Departmental Data Blind Spots',
        description: 'Finance, logistics, and sales teams running on isolated tools requiring manual spreadsheet compilation.',
      },
      {
        title: 'Fragile Middleware Connectors',
        description: 'Integration APIs that break every time commercial SaaS vendors roll out unannounced updates.',
      },
    ],
  },
  solutionOverview: {
    heading: 'How Travash Solves It: The Architectural Advantage',
    description:
      'We believe great software is architected, not just written. Before a single line of code is deployed, our highly experienced system architects design a blueprint built for longevity, security, and scale.',
    benefits: [
      {
        icon: 'award',
        title: 'Senior Architects at the Helm',
        description: 'Tackle complex security challenges and amplify portability from day one so systems handle massive loads.',
      },
      {
        icon: 'link',
        title: 'No More Data Silos',
        description: 'API-first architecture ensuring custom applications integrate flawlessly with legacy mainframes and cloud tools.',
      },
      {
        icon: 'cpu',
        title: 'Build for Your Reality',
        description: 'Custom microservices matching your operational logic, eliminating per-seat vendor licensing fees forever.',
      },
      {
        icon: 'shield',
        title: 'Enterprise Compliance Built-In',
        description: 'Data security gateways, role-based access controls (RBAC), and encryption aligning with SOC2 and GDPR.',
      },
    ],
    cta: { label: 'Schedule Architecture Review', href: '#contact' },
  },
  capabilities: [
    {
      title: 'CRM Development Services',
      shortDescription: 'Intelligent customer management mapping exactly to your unique sales cycles and customer journeys.',
      problem: 'Generic CRMs are cluttered with irrelevant features leading to poor sales adoption.',
      solution: 'Custom CRM solutions and Salesforce integrations automating lead scoring and pipelines.',
      businessImpact: 'Higher team adoption, faster sales cycles, and a unified view of customer interactions.',
      technologies: ['Node.js', 'React', 'Salesforce API', 'PostgreSQL'],
    },
    {
      title: 'ERP Development Services',
      shortDescription: 'Centralize finance, supply chain, procurement, and operations into a modular platform.',
      problem: 'Finance uses one system, logistics uses another, requiring weeks to compile reports.',
      solution: 'Bespoke modular ERP applications connecting back-office operations in real time.',
      businessImpact: 'Single source of truth, zero duplicate data entry, and slashed administrative overhead.',
      technologies: ['Java', 'Spring Boot', 'Oracle', 'Kafka'],
    },
    {
      title: 'HRMS (Human Resource Management)',
      shortDescription: 'Digitize employee lifecycles from automated onboarding to payroll integration and tracking.',
      problem: 'Scaling global staff using spreadsheets results in compliance risks and payroll errors.',
      solution: 'Secure role-based HRMS portals automating leave, benefits, and compliance reviews.',
      businessImpact: 'Protects from compliance fines, cuts HR administrative time, and delights new talent.',
      technologies: ['React', 'Next.js', 'PostgreSQL', 'Node.js'],
    },
    {
      title: 'Core Business Applications',
      shortDescription: 'Bespoke internal systems for specialized operations that generic software cannot handle.',
      problem: 'Company performs niche operations with no commercial software available to execute it.',
      solution: 'Custom web and desktop applications tailored exclusively to your proprietary logic.',
      businessImpact: 'Massive competitive advantage by digitizing and owning your core operational secret sauce.',
      technologies: ['Java', 'C# .NET', 'Python', 'React'],
    },
    {
      title: 'Workflow & Automation Systems',
      shortDescription: 'Replace manual email approval chains with intelligent, automated digital pipelines.',
      problem: 'Critical business approvals require manual handoffs between departments causing massive delays.',
      solution: 'Intelligent workflow systems with custom rule engines automating task routing and notifications.',
      businessImpact: 'Accelerates operations from days to minutes with a guaranteed, tamper-proof audit trail.',
      technologies: ['Node.js', 'FastAPI', 'Redis', 'PostgreSQL'],
    },
  ],
  process: {
    heading: 'Our Architectural Process',
    description: 'We do not guess. We engineer with structural precision and enterprise security rigor.',
    steps: [
      { number: '01', title: 'System Architecture & Blueprinting', description: 'Audit existing environments, identify security vulnerabilities, and design scalable cloud blueprints.' },
      { number: '02', title: 'Technology Selection', description: 'Define the exact tech stack needed for low latency and high portability for your specific use case.' },
      { number: '03', title: 'Agile Engineering', description: 'Dedicated pods build the application in iterative sprints with continuous progress demos.' },
      { number: '04', title: 'Enterprise Security & Deployment', description: 'Implement strict access controls and deploy via CI/CD pipelines with zero business disruption.' },
    ],
  },
  technologyStack: [
    {
      category: 'Enterprise Languages',
      technologies: ['Java', 'C# .NET', 'Python', 'TypeScript'],
      description: 'Strongly-typed enterprise backends designed for extreme transaction volume and zero memory leaks.',
    },
    {
      category: 'Frameworks & Architectures',
      technologies: ['Spring Boot', '.NET', 'Node.js', 'Next.js'],
      description: 'Modular microservice architectures, enterprise domain services, and clean RESTful API contracts.',
    },
    {
      category: 'Data & Distributed Storage',
      technologies: ['Oracle', 'PostgreSQL', 'MySQL', 'Redis'],
      description: 'ACID transaction management, enterprise data warehousing, and low-latency cache layers.',
    },
    {
      category: 'Integration & Cloud',
      technologies: ['Apache Kafka', 'Docker', 'Kubernetes', 'Azure'],
      description: 'Enterprise message buses, automated container orchestration, and seamless hybrid cloud integration.',
    },
  ],
  relatedCaseStudies: [
    {
      title: 'Unix Parts — Enterprise ERP Platform',
      slug: 'indispare',
      category: 'Enterprise Application',
      client: 'Unix Parts',
      shortDescription: 'Custom enterprise ERP platform for parts management, inventory control, and procurement automation across a large industrial distribution operation.',
      image: '/images/services/analytics.webp',
      metrics: [
        { value: '100%', label: 'Process Automated' },
        { value: '5x', label: 'Operational Efficiency' },
      ],
    },
    {
      title: 'PIXL — Custom CRM System',
      slug: 'pixl',
      category: 'Custom CRM Development',
      client: 'PIXL Group',
      shortDescription: 'Bespoke CRM platform engineered for creative studio operations — client onboarding, project pipeline management, and automated billing workflows.',
      image: '/images/services/i4c.png',
      metrics: [
        { value: '80%', label: 'Admin Time Saved' },
        { value: '100%', label: 'Custom to Workflow' },
      ],
    },
    {
      title: 'HRMS HOCS — HR Management System',
      slug: 'satyapaan',
      category: 'HR Enterprise Application',
      client: 'Sri Lanka Enterprise',
      shortDescription: 'End-to-end Human Resource Management System (HRMS) with employee lifecycle management, payroll automation, and compliance reporting.',
      image: '/images/services/dinedesk.png',
      metrics: [
        { value: '1000+', label: 'Employees Managed' },
        { value: '90%', label: 'HR Process Automated' },
      ],
    },
  ],
  trustSection: {
    heading: 'Why Global Leaders Trust Us',
    description:
      'Since 2005, Travash has built the digital backbone for organizations that demand flawless execution. When global enterprises like MasterCard, VISA, Facebook, and Autodesk require highly secure, architecturally sound software, they trust our elite engineering teams.',
    stats: [
      { value: '2005', label: 'Founded', description: 'Enterprise architectural excellence' },
      { value: '$2M+', label: 'Licensing Saved', description: 'Replaced rigid boxed enterprise software' },
      { value: '99.9%', label: 'Inventory Accuracy', description: 'Real-time multi-warehouse sync' },
      { value: '80%', label: 'Admin Time Slashed', description: 'Automated digital workflow engines' },
    ],
  },
  testimonial: {
    quote:
      'Travash modernized our entire enterprise application stack without a single hour of production downtime. Their technical team understood our complex business logic deeply and delivered systems that are faster, more secure, and far easier for our teams to maintain and scale.',
    author: 'Abdul',
    role: 'Managing Director',
    company: 'Dubai Enterprise Client',
    avatarImage: '/images/services/imran-khan.png',
    badge: 'Managing Director',
  },
  faqs: [
    {
      question: 'Build vs. Buy: Why should we build custom enterprise software instead of buying a SaaS subscription?',
      answer:
        'Buying generic software forces you to change your business to fit the tool, and you are locked into escalating per-user licensing costs. Building custom software means you own the IP, you pay zero ongoing licensing fees, and the platform is architected exactly for your competitive advantage. For scaling enterprises, custom builds almost always provide a higher long-term ROI.',
    },
    {
      question: 'How do you ensure the new application will communicate with our old legacy systems?',
      answer:
        'Integration is an architectural priority. We do not build isolated islands. We develop secure APIs and middleware that allow your new custom application to seamlessly push and pull data from your existing legacy mainframes or third-party tools.',
    },
    {
      question: 'How do you handle data security in enterprise applications?',
      answer:
        'Security is baked into the architecture, not added as an afterthought. We implement Data Security Gateways, strict Role-Based Access Control (RBAC), and data encryption at rest and in transit. We align our builds with global compliance standards (like SOC2 or GDPR).',
    },
  ],
  finalCTA: {
    heading: 'Ready to architect a system that actually fits your business?',
    description:
      'Stop compromising with off-the-shelf software. Speak directly with a senior system architect today to discuss your infrastructure, data flow, and development roadmap.',
    primaryCTA: { label: 'Request an Architectural Assessment', href: '#contact' },
    secondaryCTA: { label: 'Explore Case Studies', href: '/portfolio' },
  },
  seo: {
    metaTitle: 'Enterprise Software Development Company | Custom ERP & CRM | Travash',
    metaDescription:
      'Stop adapting your business to rigid software. Our senior architects engineer custom enterprise software, ERPs, and CRM development services tailored to your workflows.',
  },
}

// -------------------------------------------------------------
// 6. CLOUD & DEVOPS
// -------------------------------------------------------------
export const DEFAULT_CLOUD_DEVOPS_SERVICE: ServiceData = {
  title: 'Cloud & DevOps Engineering',
  slug: 'cloud-devops',
  menuTitle: 'Cloud & DevOps',
  shortDescription:
    'Stop overpaying for inefficient infrastructure. We provide enterprise cloud migration services, CI/CD automation, and multi-cloud architecture for global brands.',
  hero: {
    eyebrow: 'Automated Cloud Infrastructure & SRE',
    title: 'Ship Code Faster. Never Go Down.',
    description:
      'Your infrastructure should accelerate your business, not hold it hostage. We architect scalable cloud solutions, execute zero-downtime migrations, and implement elite DevOps pipelines so your engineering teams can ship secure code in minutes, not months.',
    primaryCTA: { label: 'Book a Cloud Infrastructure Audit', href: '#contact' },
    secondaryCTA: { label: 'View Cloud & DevOps Case Studies', href: '#case-studies' },
    highlights: [
      'Zero-Downtime Cloud Migration',
      'FinOps Cost Optimization',
      'Automated CI/CD Pipelines',
      '99.99% Guaranteed SLA Uptime',
    ],
  },
  problemSection: {
    label: 'The Reality of Cloud & Infrastructure',
    title: 'The Problem: You are scaling costs, not performance.',
    headline: 'Tech leaders are pushed to move everything to the cloud to increase speed.',
    description:
      'But without proper architecture, rapid migrations result in skyrocketing AWS or Azure bills, critical security vulnerabilities, and deployment bottlenecks. When developers spend 40% of their time fighting infrastructure and managing manual releases instead of building products, your engineering pipeline is broken.',
    painPoints: [
      {
        title: 'Runaway Cloud Compute Spend',
        description: 'Unmonitored cloud invoices scaling exponentially faster than actual business revenue.',
      },
      {
        title: 'Painful Manual Release Events',
        description: 'Deployments requiring hours of manual configuration, constant rollbacks, and downtime.',
      },
      {
        title: 'Critical Security Vulnerabilities',
        description: 'Late security checks and tangled IAM permissions exposing private infrastructure.',
      },
      {
        title: 'Developer Productivity Drain',
        description: 'Engineers wasting 40% of sprint time firefighting infrastructure instead of shipping features.',
      },
    ],
  },
  solutionOverview: {
    heading: 'How Travash Solves It',
    description:
      'We treat infrastructure as software. We deploy senior cloud architects and site reliability engineers (SREs) who build automated, self-healing environments.',
    benefits: [
      {
        icon: 'zap',
        title: 'Eradicate Bottlenecks',
        description: 'Instill a true DevSecOps culture, automating testing, security, and deployments for maximum velocity.',
      },
      {
        icon: 'dollar-sign',
        title: 'Cost Optimization (FinOps)',
        description: 'Refactor monolithic applications into cloud-native microservices to drastically cut monthly compute costs.',
      },
      {
        icon: 'globe',
        title: 'Global Scale & Security',
        description: 'Highly available, multi-tenant environments designed to withstand traffic spikes and comply with global laws.',
      },
      {
        icon: 'shield',
        title: 'Automated Self-Healing',
        description: 'Real-time telemetry and auto-healing scripts catching and resolving anomalies before users notice.',
      },
    ],
    cta: { label: 'Book Cloud Consultation', href: '#contact' },
  },
  capabilities: [
    {
      title: 'Cloud Migration Services',
      shortDescription: 'Zero-disruption transitions from legacy on-premise servers to modern high-performance cloud environments.',
      problem: 'Moving massive legacy monoliths causes unacceptable downtime and data loss risks.',
      solution: 'Phased, risk-free cloud migrations shifting workloads incrementally using parallel environments.',
      businessImpact: 'Exit expensive data centers securely with infinite scalability and zero disruption.',
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform'],
    },
    {
      title: 'DevOps Consulting Services',
      shortDescription: 'Bridge development and operations, replacing manual handoffs with intelligent automated pipelines.',
      problem: 'Software releases are painful manual events resulting in rollbacks and broken code.',
      solution: 'Automated testing, infrastructure as code (IaC), and continuous real-time monitoring.',
      businessImpact: 'Reduces manual overhead and transforms IT from a cost center to a high-speed delivery engine.',
      technologies: ['Ansible', 'Terraform', 'Docker', 'Kubernetes'],
    },
    {
      title: 'CI/CD Automation',
      shortDescription: 'Automated delivery highways taking code from a developer’s laptop to production in minutes.',
      problem: 'Code sits in testing environments for weeks waiting for manual QA approvals.',
      solution: 'Automated build, security-scan, and testing pipelines on every single code commit.',
      businessImpact: 'Empowers engineers to deploy multiple times a day with total confidence.',
      technologies: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD'],
    },
    {
      title: 'AWS (Amazon Web Services)',
      shortDescription: 'Resilient cloud architectures maximizing performance, auto-scaling compute, and security.',
      problem: 'AWS environment has tangled permissions, unused resources, and bloated invoices.',
      solution: 'Certified AWS architects implementing EC2 auto-scaling, S3 data lakes, and serverless.',
      businessImpact: 'Slashes AWS spend, tightens IAM security, and guarantees 99.99% infrastructure uptime.',
      technologies: ['AWS', 'AWS Lambda', 'EC2 Auto-scaling', 'AWS S3'],
    },
    {
      title: 'Microsoft Azure',
      shortDescription: 'Enterprise-grade hybrid and public cloud solutions utilizing the Microsoft ecosystem.',
      problem: 'Struggling to scale enterprise Microsoft tools securely in a hybrid cloud.',
      solution: 'Deploy secure Azure Kubernetes (AKS), Azure DevOps, and seamless Active Directory.',
      businessImpact: 'Provides a highly secure, compliant environment natively integrated with enterprise stacks.',
      technologies: ['Azure', 'AKS', 'Azure DevOps', 'Azure Synapse'],
    },
    {
      title: 'Google Cloud (GCP)',
      shortDescription: 'Data-heavy, high-compute platforms leveraging Google’s machine learning infrastructure.',
      problem: 'Data engineering and AI models choking on standard cloud infrastructure.',
      solution: 'Architect data pipelines and microservices utilizing BigQuery, Vertex AI, and GKE.',
      businessImpact: 'Accelerates data processing and machine learning workflows with lowest latency.',
      technologies: ['Google Cloud', 'GKE', 'BigQuery', 'Vertex AI'],
    },
    {
      title: 'DevSecOps & Cloud Security',
      shortDescription: 'Military-grade security baked into development pipelines for compliance without sacrificing speed.',
      problem: 'Security treated as an afterthought leading to delayed launches or catastrophic data breaches.',
      solution: 'Cloud security gateways, automated vulnerability scans, and identity policies in CI/CD.',
      businessImpact: 'Ensures absolute compliance with SOC2, HIPAA, and GDPR while maintaining rapid release velocity.',
      technologies: ['SonarQube', 'Datadog', 'Cloudflare', 'Docker'],
    },
    {
      title: 'Cloud Cost Optimization (FinOps)',
      shortDescription: 'Bring financial accountability to cloud spend, right-sizing resources and eliminating waste.',
      problem: 'Cloud bill is a black box scaling faster than actual company revenue.',
      solution: 'FinOps audits identifying orphaned resources and right-sizing compute instances.',
      businessImpact: 'Instantly reclaims wasted IT budget, providing predictable, optimized monthly cloud costs.',
      technologies: ['AWS Cost Explorer', 'Terraform', 'Datadog', 'Kubernetes'],
    },
  ],
  process: {
    heading: 'Our Infrastructure Engineering Process',
    description: 'We do not guess with your infrastructure. We follow strict enterprise-grade site reliability methodology.',
    steps: [
      { number: '01', title: 'Cloud Readiness & Security Audit', description: 'Audit codebase, database schemas, and security posture to identify the exact cloud architecture needed.' },
      { number: '02', title: 'Blueprinting & IaC', description: 'Design architecture and write it as code (Terraform/Ansible) for repeatable, version-controlled security.' },
      { number: '03', title: 'Phased Execution & Containerization', description: 'Migrate and deploy in controlled sprints using Docker and Kubernetes for zero downtime.' },
      { number: '04', title: 'Continuous Monitoring (SRE)', description: 'Implement metric telemetry, distributed trace monitoring, and auto-healing scripts.' },
    ],
  },
  technologyStack: [
    {
      category: 'Cloud Infrastructure',
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform'],
      description: 'Multi-cloud elasticity, auto-scaling instances, and declarative Infrastructure as Code.',
    },
    {
      category: 'Containerization & Orchestration',
      technologies: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD'],
      description: 'Microservices container runtimes with automated cluster scaling and progressive rollouts.',
    },
    {
      category: 'CI/CD & Automation',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Ansible'],
      description: 'Automated build, test, and release pipelines ensuring continuous, zero-error deployments.',
    },
    {
      category: 'Observability & Edge',
      technologies: ['Prometheus', 'Grafana', 'DataGrip', 'Cloudflare'],
      description: 'Full-stack metric telemetry, distributed trace monitoring, and global DDoS protection.',
    },
  ],
  relatedCaseStudies: [
    {
      title: 'Indispare — Cloud Auto-Scaling Platform',
      slug: 'indispare',
      category: 'Industrial Cloud Infrastructure',
      client: 'Indispare',
      shortDescription: 'Highly secure AWS cloud architecture handling high-concurrency industrial parts catalog and transactional traffic with 99.99% uptime.',
      image: '/images/services/analytics.webp',
      metrics: [
        { value: '99.99%', label: 'Infrastructure Uptime' },
        { value: '0', label: 'Downtime Incidents' },
      ],
    },
    {
      title: 'Dine Desk — Cloud-Native Restaurant SaaS',
      slug: 'dine-desk',
      category: 'Multi-Tenant Cloud SaaS',
      client: 'Enterprise Restaurant Network',
      shortDescription: 'Scalable containerized cloud architecture running automated CI/CD and multi-region database replication.',
      image: '/images/services/dinedesk.png',
      metrics: [
        { value: '3x', label: 'Peak Capacity' },
        { value: '<50ms', label: 'API Response Time' },
      ],
    },
    {
      title: 'Skipr — Fast Cloud Delivery Platform',
      slug: 'skipr',
      category: 'High-Scale Cloud Systems',
      client: 'Skipr Enterprise',
      shortDescription: 'Containerized Kubernetes cluster deployment with automated Terraform provisioning and high-velocity continuous delivery.',
      image: '/images/services/i4c.png',
      metrics: [
        { value: '65%', label: 'Deployment Cycle Reduction' },
        { value: '100%', label: 'Infrastructure as Code' },
      ],
    },
  ],
  trustSection: {
    heading: 'Why Global Leaders Trust Us',
    description:
      'Founded in 2005, Travash operates as a trusted technology partner for organizations that operate at a massive international scale. Global giants like MasterCard, VISA, Facebook, Autodesk, and UBS trust our elite engineering talent to protect and scale their most critical infrastructure.',
    stats: [
      { value: '2005', label: 'Founded', description: 'Two decades of mission-critical cloud engineering' },
      { value: '45%', label: 'Cloud Cost Cut', description: 'Average FinOps compute spend reduction' },
      { value: '99.99%', label: 'SLA Uptime', description: 'Zero unplanned production downtime' },
      { value: '10x', label: 'Deployment Velocity', description: 'Accelerated automated CI/CD pipelines' },
    ],
  },
  testimonial: {
    quote:
      "When your platform serves as the digital backbone for an industrial supply chain, even seconds of server downtime can cost millions. We didn't just need developers; we needed an impenetrable cloud infrastructure. Travash architected a highly secure, auto-scaling AWS environment that completely eliminated our performance bottlenecks. Their automated deployment pipelines ensure our system handles massive data loads and unexpected traffic spikes flawlessly. They didn't just build our platform — they gave us the ultimate operational peace of mind: true, uncompromising cloud reliability.",
    author: 'Founder & CEO',
    role: 'Chief Executive',
    company: 'Indispare',
    avatarImage: '/images/services/imran-khan.png',
    badge: 'Industrial Supply Chain',
  },
  faqs: [
    {
      question: 'Should we use a single cloud provider or a multi-cloud strategy?',
      answer:
        'It depends on your scale and risk tolerance. A single provider (like AWS or Azure) simplifies management and allows you to utilize deep, native features. A multi-cloud strategy prevents vendor lock-in and increases resilience but requires more complex architecture to manage effectively. We assess your business goals to determine the best path.',
    },
    {
      question: 'How does DevOps actually save us money?',
      answer:
        'DevOps reduces the hidden costs of custom software development. By automating testing and deployments, you drastically reduce the manual engineering hours spent on operations. Furthermore, by catching bugs instantly in the CI/CD pipeline, you avoid the massive financial cost of fixing a critical error in production.',
    },
    {
      question: 'Can you migrate our legacy monolithic application without rewriting it?',
      answer:
        'Yes. We can perform a "lift and shift" to get you out of your physical data center quickly. However, to truly gain the cost-saving and performance benefits of the cloud, we highly recommend a phased refactoring process, where we slowly break the monolith down into cloud-native microservices over time.',
    },
  ],
  finalCTA: {
    heading: 'Ready to build infrastructure that accelerates your business?',
    description:
      'Stop letting deployment bottlenecks and cloud costs slow you down. Speak with a senior Cloud Architect today to evaluate your infrastructure and build a roadmap for scale.',
    primaryCTA: { label: 'Request a Cloud & DevOps Audit', href: '#contact' },
    secondaryCTA: { label: 'Explore Case Studies', href: '/portfolio' },
  },
  seo: {
    metaTitle: 'DevOps Consulting Services & Cloud Infrastructure | Travash',
    metaDescription:
      'Stop overpaying for inefficient infrastructure. We provide enterprise cloud migration services, CI/CD automation, and multi-cloud architecture for global brands.',
  },
}

// -------------------------------------------------------------
// 7. QUALITY ASSURANCE & TESTING
// -------------------------------------------------------------
export const DEFAULT_QA_TESTING_SERVICE: ServiceData = {
  title: 'Quality Assurance & Testing',
  slug: 'quality-assurance-testing',
  menuTitle: 'QA & Testing',
  shortDescription:
    'Eradicate bugs before they reach production. We provide elite QA testing, automation testing, performance testing, and security testing for global enterprises.',
  hero: {
    eyebrow: 'Zero-Defect Quality Engineering',
    title: 'Ruthless Software Testing. Enterprise Quality Assurance.',
    description:
      'A brilliant application is a liability if it crashes under pressure or exposes user data. We deploy senior Quality Engineering pods to stress-test your architecture, automate your release pipelines, and execute rigorous security testing so you can deploy with absolute certainty.',
    primaryCTA: { label: 'Book a QA & Security Audit', href: '#contact' },
    secondaryCTA: { label: 'View Software Testing Case Studies', href: '#case-studies' },
    highlights: [
      'Shift-Left QA Strategy',
      '70%+ Automated Test Coverage',
      'Military-Grade Penetration Testing',
      'Continuous DevSecOps CI/CD',
    ],
  },
  problemSection: {
    label: 'The Reality of Quality Assurance',
    title: 'The Problem: You are treating QA as a roadblock, not a continuous discipline.',
    headline: 'Tech leaders are forced to balance rapid feature releases with absolute platform stability.',
    description:
      'When software testing is squeezed into a desperate two-day window right before launch, manual testers cannot keep up. You either delay the release, or you push vulnerable code. When your customers find your bugs before your engineers do, your brand reputation takes the hit.',
    painPoints: [
      {
        title: 'Pre-Launch Bottlenecks',
        description: 'Manual testers overwhelmed by sprint output, creating desperate pre-release testing backlogs.',
      },
      {
        title: 'Silent Regression Bugs',
        description: 'New feature updates breaking existing critical user flows and payment integrations without warning.',
      },
      {
        title: 'Traffic Spike Catastrophes',
        description: 'Platforms crashing under high marketing demand due to untested concurrent database queries.',
      },
      {
        title: 'Security Vulnerability Gaps',
        description: 'Un-audited API endpoints exposing sensitive company records to malicious penetration.',
      },
    ],
  },
  solutionOverview: {
    heading: 'How Travash Solves It',
    description:
      'We do not just find bugs; we engineer quality into your product from day one. By "shifting left," our senior QA architects integrate testing directly into your development lifecycle, replacing manual bottlenecks with high-speed automation.',
    benefits: [
      {
        icon: 'check-circle',
        title: 'Automated Velocity',
        description: 'Intelligent test automation frameworks running thousands of regression tests in minutes for multiple daily deploys.',
      },
      {
        icon: 'shield',
        title: 'Military-Grade Security',
        description: 'DevSecOps integrated directly into your pipeline, scanning for vulnerabilities long before malicious exploitation.',
      },
      {
        icon: 'users',
        title: 'Top 1% QA Talent',
        description: 'Dedicated pods of automated test engineers, performance specialists, and ethical security hackers.',
      },
      {
        icon: 'activity',
        title: '100% Release Confidence',
        description: 'Real-time telemetry dashboards detailing test coverage, vulnerability scores, and release readiness.',
      },
    ],
    cta: { label: 'Schedule QA Consultation', href: '#contact' },
  },
  capabilities: [
    {
      title: 'QA Testing (Manual & Functional)',
      shortDescription: 'Validate complex business logic, UI aesthetics, and human user experience that scripts miss.',
      problem: 'Automated tests miss broken CSS on custom designs and confusing navigation patterns.',
      solution: 'Senior QA analysts execute exploratory testing mapping complex human user journeys.',
      businessImpact: 'Ensures software feels intuitive, visually flawless, and frictionless in real human hands.',
      technologies: ['Jira', 'TestRail', 'Postman', 'Cross-Browser Testing'],
    },
    {
      title: 'Automation Testing',
      shortDescription: 'Robust automated test scripts validating codebases in minutes, eliminating testing bottlenecks.',
      problem: 'Engineers write code faster than manual QA can test it, stalling release cycles.',
      solution: 'Custom automation frameworks for regression, API, and UI testing built into CI/CD.',
      businessImpact: 'Slashes testing time by over 70% and guarantees new features never break existing flows.',
      technologies: ['Playwright', 'Cypress', 'Selenium', 'Jest'],
    },
    {
      title: 'Performance Testing',
      shortDescription: 'Extreme traffic simulations ensuring systems remain fast and responsive during peak demand.',
      problem: 'Apps perform in staging with 10 users but crash when marketing sends 10,000 users.',
      solution: 'Aggressive stress, load, and concurrency simulations pushing servers to breaking points.',
      businessImpact: 'Guarantees 99.99% uptime during your most critical business surges and flash sales.',
      technologies: ['JMeter', 'k6', 'Gatling', 'PostgreSQL'],
    },
    {
      title: 'Security Testing',
      shortDescription: 'Aggressive ethical hacking and architecture audits fortifying applications against breaches.',
      problem: 'Cyber threats evolving faster than internal protocols, risking multi-million dollar fines.',
      solution: 'Penetration testing, DAST, and code audits identifying injection flaws and vulnerabilities.',
      businessImpact: 'Hardens digital perimeter and guarantees total compliance with SOC2, GDPR, and HIPAA.',
      technologies: ['SonarQube', 'OWASP ZAP', 'Burp Suite', 'Docker'],
    },
  ],
  process: {
    heading: 'Our Quality Engineering Process',
    description: 'We bring military rigor to software quality so nothing slips through into production.',
    steps: [
      { number: '01', title: 'Shift-Left Strategy & Audit', description: 'Review architecture and requirements on day one to prevent bugs before code is even written.' },
      { number: '02', title: 'Framework Architecture', description: 'Design a customized, scalable test automation framework suited to your exact tech stack.' },
      { number: '03', title: 'Continuous Execution', description: 'Automated security and regression test suites execute in parallel with every pull request.' },
      { number: '04', title: 'Telemetry & Reporting', description: 'Real-time dashboards detailing test coverage, vulnerability scores, and release readiness.' },
    ],
  },
  technologyStack: [
    {
      category: 'Automated E2E & Web Testing',
      technologies: ['Playwright', 'Cypress', 'Selenium', 'Jest'],
      description: 'Cross-browser automated test suites executing against staging and production builds in parallel.',
    },
    {
      category: 'API & Performance Testing',
      technologies: ['Postman', 'JMeter', 'k6', 'REST'],
      description: 'Automated API contract validation, latency benchmarking, and simulated high-concurrency load stress tests.',
    },
    {
      category: 'Continuous QA & Code Security',
      technologies: ['SonarQube', 'GitHub Actions', 'Jenkins', 'Docker'],
      description: 'Automated static code analysis, vulnerability scanning, and pre-merge quality gates in CI/CD pipelines.',
    },
    {
      category: 'Test Management & Tracking',
      technologies: ['Jira', 'Allure', 'DataGrip', 'PostgreSQL'],
      description: 'Comprehensive test case management, real-time defect telemetry dashboards, and regression tracking.',
    },
  ],
  relatedCaseStudies: [
    {
      title: 'RadiantSA — CTMS Clinical Platform',
      slug: 'satyapaan',
      category: 'Healthcare QA & Testing',
      client: 'RadiantSA',
      shortDescription: 'Aggressive validation of every data point across patient enrollment workflows, third-party integrations, and compliance requirements for a clinical research CTMS.',
      image: '/images/services/analytics.webp',
      metrics: [
        { value: '100%', label: 'Compliance Validated' },
        { value: '0', label: 'Launch Defects' },
      ],
    },
    {
      title: 'Dine Desk — Multi-Platform QA Suite',
      slug: 'dine-desk',
      category: 'Cross-Platform QA',
      client: 'Enterprise Restaurant Network',
      shortDescription: 'End-to-end automated testing across web and mobile for a restaurant management SaaS — covering reservation flows, integrations, and load scenarios.',
      image: '/images/services/dinedesk.png',
      metrics: [
        { value: '95%+', label: 'Test Coverage' },
        { value: '0', label: 'Critical Bugs Released' },
      ],
    },
    {
      title: 'PEKT — Performance & Security Testing',
      slug: 'pekt',
      category: 'Performance QA',
      client: 'PEKT Enterprise',
      shortDescription: 'Comprehensive performance benchmarking, load testing, and security vulnerability scanning for an enterprise-grade platform with complex workflow automation.',
      image: '/images/services/i4c.png',
      metrics: [
        { value: '10K+', label: 'Concurrent Users Tested' },
        { value: 'OWASP', label: 'Security Compliant' },
      ],
    },
  ],
  trustSection: {
    heading: 'Why Global Leaders Trust Us',
    description:
      'Since 2005, Travash has acted as the final line of defense for organizations that operate at a massive scale. International giants like MasterCard, VISA, Facebook, Autodesk, and UBS trust our elite engineering talent to validate and protect their most critical digital assets.',
    stats: [
      { value: '2005', label: 'Founded', description: 'Two decades of zero-defect engineering standards' },
      { value: '70%+', label: 'QA Time Slashed', description: 'Automated CI/CD test execution' },
      { value: '100%', label: 'Compliance Rate', description: 'Flawless HIPAA, SOC2 & GDPR audits' },
      { value: '0', label: 'Critical Bugs Released', description: 'Rigorous Shift-Left quality gates' },
    ],
  },
  testimonial: {
    quote:
      "In the clinical research industry, software bugs aren't just inconvenient — they are massive compliance risks. We needed a technology partner with an uncompromising approach to quality assurance. Travash didn't just do basic testing on our CTMS platform; they aggressively validated every single data point, from patient enrollment workflows to complex third-party integrations. Their rigorous testing protocols ensured our system was completely secure, compliant, and structurally flawless before we ever went live. They gave us the absolute confidence we needed to launch.",
    author: 'Chander',
    role: 'Project Director',
    company: 'RadiantSA (CTMS)',
    avatarImage: '/images/services/imran-khan.png',
    badge: 'Clinical Research Director',
  },
  faqs: [
    {
      question: 'When should Quality Assurance actually start in a project?',
      answer:
        'Testing should start before a single line of code is written. We practice "Shift-Left" testing, meaning our QA architects review business requirements and design wireframes alongside your product team. This catches logical flaws and architectural issues when they are cheapest to fix.',
    },
    {
      question: 'Should we automate all of our testing?',
      answer:
        'No. While automation is critical for regression, load, and API testing, attempting to automate 100% of your tests yields diminishing returns. Complex edge cases, UI/UX fluidity on custom minimalist designs, and exploratory scenarios still require the intuition of a senior human QA analyst. We help you find the perfect mathematical balance between manual and automated testing to maximize ROI.',
    },
    {
      question: 'How often should we conduct security penetration testing?',
      answer:
        'At a minimum, deep manual penetration testing should occur annually and before any major architectural change or product launch. However, by integrating automated vulnerability scanning (SAST/DAST) into your CI/CD pipeline, we ensure your code is continuously checked for known security flaws on a daily basis.',
    },
  ],
  finalCTA: {
    heading: 'Ready to release code with absolute confidence?',
    description:
      'Stop hoping your software works. Speak with a senior QA architect today to audit your current testing pipelines and build a framework that guarantees flawless performance.',
    primaryCTA: { label: 'Request a QA & Security Audit', href: '#contact' },
    secondaryCTA: { label: 'Explore QA Case Studies', href: '/portfolio' },
  },
  seo: {
    metaTitle: 'Enterprise Quality Assurance & Software Testing Services | Travash',
    metaDescription:
      'Eradicate bugs before they reach production. We provide elite QA testing, automation testing, performance testing, and security testing for global enterprises.',
  },
}

// -------------------------------------------------------------
// 8. DEDICATED TALENT & TEAMS
// -------------------------------------------------------------
export const DEFAULT_DEDICATED_TEAMS_SERVICE: ServiceData = {
  title: 'Dedicated Talent & Agile Teams',
  slug: 'dedicated-talent-and-teams',
  menuTitle: 'Dedicated Teams',
  shortDescription:
    'Bypass the tech talent shortage. Scale your engineering capacity instantly with our vetted dedicated developers, managed teams, and offshore software development centers.',
  hero: {
    eyebrow: 'Elastic Engineering Scaling',
    title: 'Scale Your Engineering. Skip the Hiring Headache.',
    description:
      "A brilliant product roadmap means nothing if you don't have the engineers to execute it. We provide elite, production-ready dedicated developers, build secure offshore centers, and deploy fully managed teams that integrate perfectly with your business—allowing you to scale instantly without the massive overhead of traditional recruiting.",
    primaryCTA: { label: 'Book a Talent Strategy Call', href: '#contact' },
    secondaryCTA: { label: 'Explore Our Engagement Models', href: '#engagement-models' },
    highlights: [
      'Top 1% Vetted Engineers',
      'Onboarding in 2 to 4 Weeks',
      'Time Zone Overlap Guaranteed',
      'Zero-Risk Replacement Guarantee',
    ],
  },
  problemSection: {
    label: 'The Reality of Scaling Tech Teams',
    title: 'The Problem: The traditional hiring model is broken and bleeding your budget.',
    headline: 'Tech leaders are losing months trying to source, vet, and hire senior engineers.',
    description:
      'You are paying exorbitant recruiter fees, battling local talent shortages, and risking severe project delays if a key hire suddenly quits. You do not have six months to build a team; you have a product to ship this quarter.',
    painPoints: [
      {
        title: '6-Month Recruiting Bottlenecks',
        description: 'Unfilled senior engineering roles holding product roadmaps hostage and draining capital.',
      },
      {
        title: 'Exorbitant Recruiter Fees',
        description: 'High placement commissions with zero guarantee of long-term technical performance.',
      },
      {
        title: 'High Attrition Disruption',
        description: 'Key developers quitting mid-sprint, causing catastrophic loss of institutional knowledge.',
      },
      {
        title: 'Technical Screening Fatigue',
        description: 'Engineering leads burning hundreds of hours interviewing candidates who cannot write clean code.',
      },
    ],
  },
  solutionOverview: {
    heading: 'How Travash Solves It',
    description:
      'We provide instant engineering elasticity. We maintain a deep, globally distributed bench of elite technical talent ready to parachute into your projects. Our people are our best assets, continuously upgrading their knowledge to champion your business requirements.',
    benefits: [
      {
        icon: 'star',
        title: 'The Top 1% of Talent',
        description: 'Every engineer passes grueling evaluations covering algorithmic problem-solving, system design, and communication.',
      },
      {
        icon: 'clock',
        title: 'Instant Onboarding',
        description: 'Bypass long recruiting cycles. We match your tech stack and have developers writing code in your repos within weeks.',
      },
      {
        icon: 'globe',
        title: 'Global Footprint, Local Culture',
        description: 'Offshore and blended teams overlapping hours with your local time zone for seamless daily collaboration.',
      },
      {
        icon: 'shield',
        title: 'Zero-Risk Replacement',
        description: 'If an engineer is not a perfect fit within the initial period, we replace them seamlessly from our bench at zero cost.',
      },
    ],
    cta: { label: 'Assemble Your Squad', href: '#contact' },
  },
  capabilities: [
    {
      title: 'Dedicated Developers',
      shortDescription: 'Inject senior specialized engineers directly into internal teams to close immediate sprint skill gaps.',
      problem: 'Missing a niche skill needed to finish a critical sprint on time.',
      solution: 'Deploy elite developers joining your Slack, scrums, and reporting to internal tech leads.',
      businessImpact: 'Immediate firepower without long-term payroll commitments, scaling down dynamically.',
      technologies: ['React', 'Next.js', 'Node.js', 'Python', 'AWS'],
    },
    {
      title: 'Offshore Development Center (ODC)',
      shortDescription: 'Secure, scalable engineering hubs in cost-effective regions, managed and branded as your own.',
      problem: 'Scaling enterprise engineering in local markets is financially unsustainable.',
      solution: 'We build and manage customized ODCs handling legal, HR, payroll, and infrastructure.',
      businessImpact: 'Slashes engineering burn rate by up to 50% while maintaining complete culture and security control.',
      technologies: ['Dedicated Workspace', 'HIPAA/SOC2 Facilities', 'Managed IT Infrastructure'],
    },
    {
      title: 'Managed Engineering Pods',
      shortDescription: 'Hand off complete execution of specific software initiatives to cross-functional Travash delivery pods.',
      problem: 'Internal leadership lacks bandwidth to manage new builds while running core business.',
      solution: 'Standalone pods with Scrum Master, UI/UX, QA, and developers driven by Technical PMs.',
      businessImpact: 'Expands product capacity in parallel while internal leadership stays focused on core operations.',
      technologies: ['Agile Scrums', 'CI/CD Pipelines', 'Bi-Weekly Demos'],
    },
  ],
  process: {
    heading: 'Our Vetting & Matching Process',
    description: 'We do not forward resumes; we provide proven, battle-tested engineers.',
    steps: [
      { number: '01', title: 'The Technical Crucible', description: 'Live coding evaluations, architecture whiteboarding, and intense peer code reviews.' },
      { number: '02', title: 'The Domain Match', description: 'Matching domain experience in FinTech, Healthcare, and Enterprise systems for instant context.' },
      { number: '03', title: 'The Soft Skills Audit', description: 'Rigorous testing for fluent English proficiency, proactive communication, and agile mindset.' },
      { number: '04', title: 'Risk-Free Onboarding', description: 'Immediate bench replacement guarantee at zero cost if an engineer does not meet standards.' },
    ],
  },
  technologyStack: [
    {
      category: 'Full-Stack Development',
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Java', 'Python'],
      description: 'Senior full-stack engineers experienced in agile sprint cadences, code reviews, and CI/CD best practices.',
    },
    {
      category: 'Cloud & DevOps Specialists',
      technologies: ['AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform'],
      description: 'Certified cloud architects and SREs proficient in zero-downtime infrastructure and automation.',
    },
    {
      category: 'Data & AI Practitioners',
      technologies: ['PyTorch', 'TensorFlow', 'Apache Kafka', 'PostgreSQL', 'Redis'],
      description: 'Machine learning engineers, data pipeline architects, and vector database experts ready to deploy models.',
    },
    {
      category: 'Quality & Test Engineering',
      technologies: ['Playwright', 'Cypress', 'Jest', 'Postman', 'Jira'],
      description: 'Dedicated automated QA engineers ensuring zero defect escape rates and continuous test coverage.',
    },
  ],
  engagementModels: [
    {
      title: 'Time & Material',
      description: 'Best for long-term projects with evolving scopes. Utilize our elite technical resources on flexible monthly terms.',
      badge: 'Most Popular',
      cta: { label: 'Hire Dedicated Pod', href: '#contact' },
    },
    {
      title: 'Fixed Fee',
      description: 'For projects that are clearly defined, we agree on a strict fixed price and timeline, absorbing delivery risk.',
      badge: 'Fixed Scope',
      cta: { label: 'Scope a Project', href: '#contact' },
    },
    {
      title: 'Outcome Based Recruitment',
      description: 'We bear the operational cost required by the recruitment team, sharing commission upon successful deployment.',
      badge: 'Shared Risk',
      cta: { label: 'Discuss Terms', href: '#contact' },
    },
    {
      title: 'Proof of Concept (POC)',
      description: 'A fixed-bid model for conceptual initiatives, allowing you to validate technical ideas with minimal financial risk.',
      badge: 'Rapid Validation',
      cta: { label: 'Build a PoC', href: '#contact' },
    },
  ],
  relatedCaseStudies: [],
  trustSection: {
    heading: 'Why Global Leaders Trust Us',
    description:
      'Since 2005, Travash has specialized in sourcing, vetting, and managing elite technology talent. International giants like MasterCard, VISA, Facebook, Autodesk, and UBS do not compromise on engineering quality—and they trust us to scale their teams.',
    stats: [
      { value: '2005', label: 'Founded', description: 'Decades of elite engineering talent placement' },
      { value: '2-4 Wks', label: 'Deployment Speed', description: 'From initial call to active codebase contribution' },
      { value: '50%', label: 'Burn Rate Reduction', description: 'Cost-effective global delivery centers' },
      { value: '100%', label: 'Replacement Guarantee', description: 'Zero-risk staffing assurance' },
    ],
  },
  testimonial: {
    quote:
      "When we needed to rapidly scale our engineering capacity, Travash deployed a dedicated, highly skilled team that integrated seamlessly into our agile workflows on day one. They didn't just act as contractors; they became a true extension of our own company, eliminating massive hiring friction and overhead.",
    author: 'VP of Engineering',
    role: 'Head of Engineering',
    company: 'Enterprise Software Client',
    avatarImage: '/images/services/imran-khan.png',
    badge: 'VP of Engineering',
  },
  faqs: [
    {
      question: 'How do you handle time zone differences for offshore teams?',
      answer:
        'We map our teams to your reality. Our blended and offshore teams overlap their working hours with your local time zone to ensure they are present for daily standups, sprint planning, and collaborative problem-solving.',
    },
    {
      question: 'What happens if a developer leaves or isn’t a good fit?',
      answer:
        'We absorb the attrition risk. If an engineer is not performing to your standards, or if they leave the company, we handle the replacement immediately from our deep bench of vetted talent at zero additional cost to you, ensuring zero disruption to your roadmap.',
    },
    {
      question: 'Who manages the team on a daily basis?',
      answer:
        'That depends on the engagement model. For individual dedicated developers, your internal tech leads manage them directly. For Managed Teams or an ODC, we provide a seasoned Technical Project Manager or Scrum Master who drives the daily execution, shielding you from micro-management while providing total transparency.',
    },
  ],
  finalCTA: {
    heading: 'Ready to build your dream engineering team?',
    description:
      'Stop waiting for recruiters to find the right talent. Speak with a Client Engagement Specialist today to discuss your tech stack, team structure, and immediate engineering needs.',
    primaryCTA: { label: 'Request a Talent Strategy Consultation', href: '#contact' },
    secondaryCTA: { label: 'Review Engagement Models', href: '#engagement-models' },
  },
  seo: {
    metaTitle: 'Dedicated Development Team & Offshore Talent | Travash',
    metaDescription:
      'Bypass the tech talent shortage. Scale your engineering capacity instantly with our vetted dedicated developers, managed teams, and offshore software development centers.',
  },
}

// -------------------------------------------------------------
// 9. STAFF AUGMENTATION
// -------------------------------------------------------------
export const DEFAULT_STAFF_AUGMENTATION_SERVICE: ServiceData = {
  title: 'Staff Augmentation & Specialized Talent',
  slug: 'staff-augmentation',
  menuTitle: 'Staff Augmentation',
  shortDescription:
    'Stop settling for average hires. We provide specialized IT staffing, FinTech recruitment, and niche leadership hiring for global giants like Facebook and D.E. Shaw.',
  hero: {
    eyebrow: 'Elite Enterprise IT & FinTech Staffing',
    title: 'Hire the Top 1%. Skip the 6-Month Search.',
    description:
      "A brilliant product roadmap means nothing if you do not have the engineers and analysts to execute it. For two decades, we have provided elite, production-ready talent to the world's most demanding enterprises. From IT staffing to specialized FinTech recruitment, we bypass the hiring bottleneck and deliver vetted professionals ready to impact your bottom line.",
    primaryCTA: { label: 'Book a Talent Strategy Call', href: '#contact' },
    secondaryCTA: { label: 'Explore Our Staffing Solutions', href: '#capabilities' },
    highlights: [
      '20+ Years Sourcing Excellence',
      'Specialized BFSI & IT Talent Pool',
      'Pre-Screened Technical Verification',
      'Flexible Contract, C2H & FTE Models',
    ],
  },
  problemSection: {
    label: 'The Reality of Enterprise Hiring',
    title: 'The Problem: You are drowning in resumes, but starved of actual talent.',
    headline: 'Tech and finance leaders are losing months trying to source, vet, and hire niche professionals.',
    description:
      "Traditional recruitment agencies just forward you unvetted resumes, forcing your internal team to waste hours conducting technical screenings. You don't need a stack of CVs; you need a guaranteed hire.",
    painPoints: [
      {
        title: 'Unvetted Resume Floods',
        description: 'Recruitment agencies forwarding hundreds of CVs that fail basic technical screenings.',
      },
      {
        title: 'Niche Domain Shortages',
        description: 'Inability to source specialized FinTech, Quant, AI, and cloud architects in local markets.',
      },
      {
        title: '6+ Month Vacancy Delays',
        description: 'Crucial positions sitting vacant for quarters, stalling delivery milestones and increasing burnout.',
      },
      {
        title: 'Statutory & Payroll Friction',
        description: 'Managing complex contractor compliance, international tax laws, and onboarding friction.',
      },
    ],
  },
  solutionOverview: {
    heading: 'How Travash Solves It',
    description:
      'Since 2006, Travash has operated as a premier global staffing solutions provider, mastering the entire recruitment life cycle. We do not just source candidates; we architect end-to-end recruitment solutions for companies worldwide.',
    benefits: [
      {
        icon: 'check-circle',
        title: 'The Technical Crucible',
        description: 'All candidates undergo multiple rounds of evaluation, including relevant technical tests on coding and testing.',
      },
      {
        icon: 'database',
        title: 'Deep Domain Expertise',
        description: 'Proprietary database of vetted passive talent across IT and BFSI (Banking, Financial Services, and Insurance).',
      },
      {
        icon: 'briefcase',
        title: '360-Degree Management',
        description: 'From initial sourcing to payroll management and statutory compliance, we handle the friction so you can focus on scale.',
      },
      {
        icon: 'repeat',
        title: 'Elastic Contract Flexibility',
        description: 'Flexible options spanning contract staffing, contract-to-hire (C2H), and direct permanent FTE recruitment.',
      },
    ],
    cta: { label: 'Discuss Staffing Requirements', href: '#contact' },
  },
  capabilities: [
    {
      title: 'FinTech Staffing',
      shortDescription: 'Specialized talent for high-visibility roles in investment research and Global Capability Centers.',
      problem: 'Finding analysts and developers who understand strict financial compliance and modeling.',
      solution: 'Financial Operations Research, Equity Analysis, Quant & Risk Tech, AML, and Trade Surveillance talent.',
      businessImpact: 'Gain professionals who understand regulatory compliance from day one, minimizing training.',
      technologies: ['Quant Modeling', 'Risk Analytics', 'Trade Surveillance', 'AML/KYC'],
    },
    {
      title: 'IT Staffing',
      shortDescription: 'End-to-end technical staffing for enterprise IT departments and high-growth technology companies.',
      problem: 'Software roadmaps delayed by prolonged vacancies in core engineering roles.',
      solution: 'Full-Stack Developers, Cloud Engineers, DevOps specialists, and Data Analytics professionals.',
      businessImpact: 'Instantly scale software engineering capacity with pre-screened, deployment-ready talent.',
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Java', 'DevOps'],
    },
    {
      title: 'Leadership & Niche Hiring',
      shortDescription: 'Executive and niche technical recruitment for strategic enterprise leadership positions.',
      problem: 'Locating transformative technical leaders capable of steering large global engineering departments.',
      solution: 'Executive search targeting VP of Engineering, Director of Technology, and Principal Architect roles.',
      businessImpact: 'Secures visionary leadership capable of driving enterprise vision and scaling global delivery.',
      technologies: ['VP Engineering', 'Tech Directors', 'Principal Architects'],
    },
    {
      title: 'Contract Staffing',
      shortDescription: 'Flexible workforce solutions for short-term and project-based engineering requirements.',
      problem: 'Need immediate technical firepower for a critical project without long-term payroll commitments.',
      solution: 'On-demand technical contractors deployed within days on flexible duration contracts.',
      businessImpact: 'Hits sprint deadlines on time and allows capacity to scale down dynamically when done.',
      technologies: ['On-Demand Sprints', 'Short-Term Delivery', 'Flexible Contracts'],
    },
    {
      title: 'Contract-to-Hire (C2H)',
      shortDescription: 'Evaluate engineering performance and cultural fit on the job before making permanent offers.',
      problem: 'Hiring full-time engineers based solely on interviews carries massive financial and cultural risk.',
      solution: 'Candidates work on contract basis with pre-agreed conversion pathways to permanent roles.',
      businessImpact: 'Completely eliminates hiring risk by verifying delivery quality before permanent onboarding.',
      technologies: ['Risk-Free Trial', 'Performance Review', 'Direct Conversion'],
    },
    {
      title: 'FTE Permanent Placement',
      shortDescription: 'Direct permanent hires for critical strategic roles with comprehensive satisfaction guarantees.',
      problem: 'Internal HR teams lack specialized technical networks to source elite full-time engineers.',
      solution: 'Headhunting and full-lifecycle recruitment delivering vetted candidates for permanent hire.',
      businessImpact: 'Bypasses the hiring bottleneck, building loyal long-term teams with pre-screened professionals.',
      technologies: ['Permanent Placement', 'Executive Search', 'Satisfaction Guaranteed'],
    },
  ],
  process: {
    heading: 'Our Talent Deployment Lifecycle',
    description: 'A disciplined 4-stage talent delivery framework guaranteeing technical precision.',
    steps: [
      { number: '01', title: 'Requirements & SLA Alignment', description: 'Deep discovery into required tech stacks, seniority benchmarks, project timelines, and budget models.' },
      { number: '02', title: 'Technical Screening & Vetting', description: 'Rigorous multi-round live coding assessments and domain validation by senior technical architects.' },
      { number: '03', title: 'Client Verification & Matching', description: 'Shortlist presentation of top pre-screened candidates for final client verification.' },
      { number: '04', title: 'Onboarding & 360° Management', description: 'Seamless onboarding, hardware provisioning, statutory compliance, and continuous performance oversight.' },
    ],
  },
  technologyStack: [
    {
      category: 'Full-Stack & Mobile Engineers',
      technologies: ['React', 'Next.js', 'React Native', 'Flutter', 'TypeScript', 'Node.js'],
      description: 'Pre-vetted frontend and mobile engineers ready to contribute high-quality PRs from day one.',
    },
    {
      category: 'Cloud & SRE Architects',
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
      description: 'Senior DevOps and cloud specialists capable of hardening systems and streamlining delivery pipelines.',
    },
    {
      category: 'AI & Data Specialists',
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'Apache Kafka', 'Snowflake', 'Spark'],
      description: 'Data engineers and AI specialists with production experience in LLMs, computer vision, and ETL.',
    },
    {
      category: 'Enterprise & QA Engineers',
      technologies: ['Java', 'Spring Boot', 'C# .NET', 'Playwright', 'Cypress', 'SonarQube'],
      description: 'Specialists in enterprise backend refactoring, automated testing, and zero-defect deployments.',
    },
  ],
  relatedCaseStudies: [],
  trustSection: {
    heading: 'Why Global Leaders Trust Us',
    description:
      'Since 2006, Travash has operated as a trusted talent partner for organizations that cannot afford to compromise on quality. When global leaders like MasterCard, VISA, Facebook, Autodesk, and UBS need to scale their teams, they rely on our elite talent acquisition engine.',
    stats: [
      { value: '2006', label: 'Established', description: 'Two decades of elite global IT staffing' },
      { value: 'Top 1%', label: 'Vetted Talent', description: 'Rigorous algorithmic & domain testing' },
      { value: '100%', label: 'Compliance Managed', description: 'Complete statutory & payroll oversight' },
      { value: '<2 Wks', label: 'Candidate Shortlist', description: 'Fast-track deployment-ready talent' },
    ],
  },
  testimonial: {
    quote:
      "Scaling our project teams across multiple global deliverables requires a staffing partner who truly understands enterprise-level demands. Travash delivered exactly that. Their ability to rapidly source, technically vet, and deploy highly skilled professionals in niche technologies has been exceptional. They don't just forward resumes; they provide deployment-ready engineering talent that integrates seamlessly into our critical projects. Travash has proven to be a highly reliable, strategic extension of our talent acquisition engine.",
    author: 'Delivery Head / Talent Acquisition Leadership',
    role: 'Talent Acquisition',
    company: 'Infosys',
    avatarImage: '/images/services/testimonial-avatar.jpeg',
    badge: 'Global IT Delivery Leader',
  },
  faqs: [
    {
      question: 'What industries do you specialize in for staffing?',
      answer:
        'We specialize heavily in the Information Technology (IT) and BFSI (Banking, Financial Services, and Insurance) sectors. We provide everything from Full-Stack Developers, Cloud Architects, and AI Engineers to specialized FinTech Research Analysts, Quant Tech Specialists, and Risk Surveillance Professionals.',
    },
    {
      question: 'How do you vet candidates before presenting them to us?',
      answer:
        'We do not forward unvetted resumes. Every candidate passes a multi-round screening process, including live technical coding challenges, architectural peer reviews, domain compliance checks, and rigorous English communication assessments.',
    },
    {
      question: 'What is the difference between Contract Staffing and Contract-to-Hire (C2H)?',
      answer:
        'Contract Staffing is ideal for project-based needs where you require specialized talent for a set period (e.g., 6 to 12 months) without long-term commitments. Contract-to-Hire (C2H) allows you to evaluate an engineer on the job with a pre-agreed pathway to convert them into a permanent full-time employee.',
    },
    {
      question: 'How quickly can you provide qualified candidates?',
      answer:
        'Because we maintain an active proprietary database of pre-screened talent across IT and FinTech, we typically present a shortlist of vetted, deployment-ready candidates within 3 to 7 business days.',
    },
  ],
  finalCTA: {
    heading: 'Ready to hire the top 1% without the recruiting friction?',
    description:
      'Stop sifting through unvetted resumes. Speak with an enterprise talent acquisition specialist today to access deployment-ready tech and finance professionals.',
    primaryCTA: { label: 'Request a Talent Consultation', href: '#contact' },
    secondaryCTA: { label: 'Explore Staffing Models', href: '#capabilities' },
  },
  seo: {
    metaTitle: 'Elite Staff Augmentation Services & IT Staffing | Travash',
    metaDescription:
      'Stop settling for average hires. We provide specialized IT staffing, FinTech recruitment, and niche leadership hiring for global giants like Facebook and D.E. Shaw.',
  },
}

// -------------------------------------------------------------
// Fallback Dictionary & Slugs Mapping
// -------------------------------------------------------------
export const FALLBACK_SERVICES: Record<string, ServiceData> = {
  'data-analytics-solutions': DEFAULT_DATA_ANALYTICS_SERVICE,
  'data-analytics': DEFAULT_DATA_ANALYTICS_SERVICE,
  analytics: DEFAULT_DATA_ANALYTICS_SERVICE,
  'ai-data-engineering': DEFAULT_AI_DATA_ENGINEERING_SERVICE,
  'ai-data': DEFAULT_AI_DATA_ENGINEERING_SERVICE,
  'ai-automation': DEFAULT_AI_DATA_ENGINEERING_SERVICE,
  'software-engineering': DEFAULT_SOFTWARE_ENGINEERING_SERVICE,
  software: DEFAULT_SOFTWARE_ENGINEERING_SERVICE,
  cloud: DEFAULT_CLOUD_DEVOPS_SERVICE,
  'cloud-devops': DEFAULT_CLOUD_DEVOPS_SERVICE,
  'cloud-and-devops': DEFAULT_CLOUD_DEVOPS_SERVICE,
  digital: DEFAULT_DIGITAL_EXPERIENCES_SERVICE,
  'digital-experiences': DEFAULT_DIGITAL_EXPERIENCES_SERVICE,
  'digital-experiences-web-mobile': DEFAULT_DIGITAL_EXPERIENCES_SERVICE,
  'platform-engineering': DEFAULT_CLOUD_DEVOPS_SERVICE,
  platform: DEFAULT_CLOUD_DEVOPS_SERVICE,
  enterprise: DEFAULT_ENTERPRISE_APPS_SERVICE,
  'enterprise-applications': DEFAULT_ENTERPRISE_APPS_SERVICE,
  'dedicated-teams': DEFAULT_DEDICATED_TEAMS_SERVICE,
  'dedicated-talent': DEFAULT_DEDICATED_TEAMS_SERVICE,
  'dedicated-talent-and-teams': DEFAULT_DEDICATED_TEAMS_SERVICE,
  qa: DEFAULT_QA_TESTING_SERVICE,
  'quality-assurance': DEFAULT_QA_TESTING_SERVICE,
  'quality-assurance-testing': DEFAULT_QA_TESTING_SERVICE,
  'staff-augmentation': DEFAULT_STAFF_AUGMENTATION_SERVICE,
  staffing: DEFAULT_STAFF_AUGMENTATION_SERVICE,
}
