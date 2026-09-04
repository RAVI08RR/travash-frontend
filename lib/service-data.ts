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
  metrics?: { value: string; label: string; description?: string }[]
}

export interface ServiceEngagementModel {
  title: string
  description: string
  icon?: string
  badge?: string
  cta?: ServiceCTA
}

export interface ServiceTechnologyGroup {
  category: string
  technologies: string[]
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
  stats?: ServiceTrustStat[]
  trustPoints?: string[]
}

export interface ServiceTestimonial {
  quote: string
  author: string
  role: string
  company: string
  badge?: string
  image?: { asset?: { url: string } }
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceFinalCTA {
  heading: string
  description: string
  primaryCTA?: ServiceCTA
  secondaryCTA?: ServiceCTA
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
  capabilities?: ServiceCapability[]
  process?: ServiceProcess
  relatedCaseStudies?: RelatedCaseStudy[]
  engagementModels?: ServiceEngagementModel[]
  technologyStack?: ServiceTechnologyGroup[]
  trustSection?: ServiceTrustSection
  testimonial?: ServiceTestimonial
  faqs?: ServiceFAQ[]
  finalCTA?: ServiceFinalCTA
  seo?: ServiceSEO
}

// Complete fallback seed data extracted from the WordPress reference page:
// https://travash.com/data-analytics-solutions/
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
    primaryCTA: {
      label: 'Book a Data Architecture Audit',
      href: '#contact',
    },
    secondaryCTA: {
      label: 'View Analytics Case Studies',
      href: '#case-studies',
    },
    heroImage: '/home-img/satyapaan-min 2.png',
    heroImageAlt: 'Data Analytics and Intelligence Dashboard',
    highlights: [
      'Enterprise Data Engineering',
      'Real-Time Analytics',
      'Modern Cloud Warehouses',
      'Business Intelligence',
    ],
  },
  problemSection: {
    label: 'The Problem',
    title: 'Outdated Spreadsheets & Data Silos',
    headline: 'You are making critical decisions based on outdated spreadsheets.',
    description:
      'Tech leaders are sitting on a goldmine of data, but it is trapped in disconnected silos. Finance uses one system, sales uses another, and your supply chain is a black box. When it takes your team three weeks to manually compile a performance report, you are reacting to the past instead of navigating the future.',
    painPoints: [
      {
        title: 'Disconnected Enterprise Silos',
        description: 'Departments rely on isolated systems with conflicting versions of customer and financial records.',
      },
      {
        title: 'Slow Manual Reporting Cycles',
        description: 'Teams spend weeks stitching together static spreadsheets instead of analyzing live performance.',
      },
      {
        title: 'Unverified & Inconsistent Data',
        description: 'Duplicate rows and unstandardized schemas undermine confidence during strategic board meetings.',
      },
      {
        title: 'Reactive Business Posture',
        description: 'Without real-time telemetry, leadership makes high-stakes decisions based on stale historical data.',
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
        description:
          'We build automated pipelines that extract, transform, and load (ETL) data from all your legacy and third-party systems into one unified data lake or warehouse.',
      },
      {
        icon: 'users',
        title: 'Top 1% Data Talent',
        description:
          'Instantly scale your engineering velocity with a dedicated pod of elite data engineers, distributed database architects, and BI specialists.',
      },
      {
        icon: 'eye',
        title: 'Real-Time Visibility',
        description:
          'We replace manual reporting with automated, real-time analytics, giving your executive team absolute clarity on business health at a single glance.',
      },
    ],
    cta: {
      label: 'Get a Free Consultation',
      href: '#contact',
    },
  },
  capabilities: [
    {
      title: 'Data Engineering & Pipelines',
      shortDescription:
        'Secure, high-volume automated data pipelines engineered for petabyte-scale throughput and zero data loss.',
      problem: 'Your data is dirty, duplicated, and scattered across dozens of incompatible legacy databases.',
      solution:
        'We architect scalable data infrastructure using Big Data technologies like Spark, Kafka, and NoSQL. We build automated ETL pipelines that clean and route data into a centralized, secure data warehouse.',
      businessImpact:
        'Creates an unshakeable foundation of high-quality data, ensuring your business intelligence tools report verified truth.',
      icon: 'database',
      technologies: ['Apache Spark', 'Kafka', 'Python', 'SQL', 'Airflow', 'dbt'],
      optionalCTA: { label: 'Explore Engineering', href: '#contact' },
    },
    {
      title: 'Business Intelligence (BI) Platforms',
      shortDescription:
        'Intuitive semantic layers and interactive dashboards that democratize analytics across non-technical leadership.',
      problem:
        'Non-technical leaders cannot get answers to strategic questions without submitting a ticket to IT and waiting days.',
      solution:
        'We implement and customize leading BI engines (like Power BI, Tableau, and Looker) or architect bespoke analytics interfaces with natural querying.',
      businessImpact:
        'Democratizes data across your organization, drastically cutting the time from strategic question to data-backed answer.',
      icon: 'pie-chart',
      technologies: ['Power BI', 'Tableau', 'Looker', 'Custom React Charts'],
      optionalCTA: { label: 'Explore BI', href: '#contact' },
    },
    {
      title: 'Data Warehousing & Modern Data Lakes',
      shortDescription:
        'Elastic cloud repositories structured for sub-second analytical queries across millions of transactions.',
      problem:
        'Traditional relational databases choke and lock tables when heavy analytical reports run during peak business hours.',
      solution:
        'We design decoupled, modern cloud data warehouses using Snowflake, Databricks, BigQuery, and Redshift with separated storage and compute.',
      businessImpact:
        'Executes complex multi-year trend queries in seconds with zero performance degradation to customer-facing transactional systems.',
      icon: 'server',
      technologies: ['Snowflake', 'Databricks', 'AWS Redshift', 'Google BigQuery', 'PostgreSQL'],
      optionalCTA: { label: 'Explore Warehousing', href: '#contact' },
    },
    {
      title: 'Cloud Data Platforms (AWS, Azure & GCP)',
      shortDescription:
        'Multi-cloud data ecosystems built with auto-scaling compute, serverless microservices, and enterprise IAM security.',
      problem:
        'Legacy on-premise servers lack the elastic compute power required for high-throughput AI model training and streaming data ingestion.',
      solution:
        'Our certified cloud architects design and migrate your infrastructure to AWS, Microsoft Azure, or Google Cloud Platform, optimizing for cost and uptime.',
      businessImpact:
        'Cuts cloud infrastructure spend by up to 35% through rightsizing and FinOps governance while achieving 99.99% availability.',
      icon: 'cloud',
      technologies: ['AWS S3 & EMR', 'Azure Synapse', 'Google Cloud Platform', 'Terraform', 'Kubernetes'],
      optionalCTA: { label: 'Explore Cloud', href: '#contact' },
    },
    {
      title: 'Data Governance, Compliance & Security',
      shortDescription:
        'Granular role-based access control, automated audit trails, and strict adherence to global privacy mandates.',
      problem:
        'Ungoverned data lakes lead to security compliance violations, unauthorized access, and sensitive customer data leakage.',
      solution:
        'We implement enterprise data cataloging, automated lineage tracking, data masking, and strict encryption at rest and in transit.',
      businessImpact:
        'Guarantees full compliance with GDPR, SOC 2, HIPAA, and regional sovereign security regulations with complete audit defensibility.',
      icon: 'shield',
      technologies: ['Apache Ranger', 'HashiCorp Vault', 'AWS IAM', 'Data Lineage Tools'],
      optionalCTA: { label: 'Explore Governance', href: '#contact' },
    },
    {
      title: 'AI & ML Data Readiness',
      shortDescription:
        'Feature store architecture, clean labeled datasets, and low-latency feature serving for predictive AI models.',
      problem:
        'Machine learning models fail in production because training datasets are stale, poorly structured, and out of sync with live databases.',
      solution:
        'We build feature engineering pipelines, automated validation gates, and vector embeddings storage to prepare your data for LLMs and ML models.',
      businessImpact:
        'Reduces model training preparation cycles by 60% and guarantees reliable inference accuracy for production AI systems.',
      icon: 'cpu',
      technologies: ['Vector DBs', 'Python ML Stack', 'Vertex AI', 'AWS SageMaker', 'PyTorch'],
      optionalCTA: { label: 'Explore AI Readiness', href: '#contact' },
    },
  ],
  process: {
    heading: 'Our Data Engineering Process',
    description:
      'We do not guess with your mission-critical data. We follow a strict, enterprise-grade engineering methodology to ensure complete stability, data integrity, and zero downtime.',
    steps: [
      {
        number: '01',
        title: 'Data Discovery & Architecture Audit',
        description:
          'We audit your existing databases, third-party APIs, legacy schemas, and security posture to identify bottlenecks, duplicate records, and exact target requirements.',
      },
      {
        number: '02',
        title: 'Architecture & Pipeline Blueprinting',
        description:
          'We engineer a decoupled technical blueprint specifying ingestion rates, storage layers, transformation logic, and infrastructure as code (Terraform).',
      },
      {
        number: '03',
        title: 'Data Ingestion & Pipeline Engineering',
        description:
          'We construct automated high-throughput ETL/ELT pipelines with built-in validation gates, exception alerts, and dead-letter queues.',
      },
      {
        number: '04',
        title: 'Data Warehouse & Semantic Modeling',
        description:
          'We deploy the cloud data warehouse, organize dimensional star/snowflake schemas, and build semantic layers for self-service business intelligence.',
      },
      {
        number: '05',
        title: 'Validation, Governance & Security Testing',
        description:
          'We run parallel reconciliation tests against legacy databases, verify checksums, and configure role-based access control (RBAC) and data masking.',
      },
      {
        number: '06',
        title: 'Continuous Telemetry & Cost Optimization',
        description:
          'Post-deployment, we configure automated health alerts, query latency monitoring, and FinOps policies to prevent compute overspend.',
      },
    ],
  },
  relatedCaseStudies: [
    {
      title: 'AI-Powered Passport Verification & Fraud Prevention',
      slug: 'satyapaan',
      category: 'Enterprise AI / Public Sector',
      client: 'Telangana State Police',
      shortDescription:
        'Automated high-throughput identity screening processing 1.96M passport applicants with real-time biometric matching.',
      featureImage: { asset: { url: '/home-img/satyapaan-min 2.png' } },
      metrics: [
        { value: '1.96M', label: 'Applications Processed' },
        { value: '800+', label: 'Adverse Records Intercepted' },
      ],
    },
  ],
  engagementModels: [
    {
      title: 'Dedicated Engineering Team',
      description:
        'A dedicated pod of senior data engineers, distributed database architects, and BI analysts embedded into your sprint cycles.',
      icon: 'users',
      badge: 'Most Popular',
      cta: { label: 'Hire Dedicated Team', href: '#contact' },
    },
    {
      title: 'Fixed Fee Milestone Projects',
      description:
        'For strictly scoped enterprise projects like complete data warehouse migrations or new BI platform rollouts with guaranteed deliverables.',
      icon: 'file-check',
      badge: 'Fixed Scope',
      cta: { label: 'Scope a Project', href: '#contact' },
    },
    {
      title: 'Time & Material Consulting',
      description:
        'Flexible on-demand access to principal data architects for infrastructure audits, emergency troubleshooting, and technical roadmaps.',
      icon: 'clock',
      badge: 'Flexible',
      cta: { label: 'Book Advisory', href: '#contact' },
    },
    {
      title: 'Staff Augmentation',
      description:
        'Instantly inject senior, pre-vetted data engineers and PySpark/SQL specialists directly into your existing agile engineering squads.',
      icon: 'user-plus',
      badge: 'Fast Scale',
      cta: { label: 'Augment Staff', href: '#contact' },
    },
  ],
  technologyStack: [
    {
      category: 'Data Engineering & Streaming',
      technologies: ['Apache Spark', 'Apache Kafka', 'Python', 'SQL', 'Apache Airflow', 'dbt'],
      description: 'Distributed streaming and batch computation for real-time and scheduled pipeline execution.',
    },
    {
      category: 'Cloud Warehouses & Databases',
      technologies: ['Snowflake', 'Databricks', 'Google BigQuery', 'AWS Redshift', 'PostgreSQL', 'MongoDB'],
      description: 'Decoupled cloud storage and compute engines optimized for ultra-low analytical query latency.',
    },
    {
      category: 'Business Intelligence & Dashboards',
      technologies: ['Power BI', 'Tableau', 'Looker', 'Metabase', 'Custom D3/React Visualizations'],
      description: 'Enterprise reporting layers empowering decision-makers to interact naturally with live data.',
    },
    {
      category: 'Cloud Infrastructure & DevOps',
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Terraform'],
      description: 'Resilient cloud infrastructure with infrastructure as code and automated deployment pipelines.',
    },
  ],
  trustSection: {
    heading: 'Why Global Leaders Trust Travash',
    description:
      'Founded in 2005, Travash operates as a trusted technology engineering partner for organizations running mission-critical operations at scale. Global enterprises and public-sector authorities rely on our technical rigor to architect secure data foundations, protect sensitive records, and build high-performance systems.',
    stats: [
      { value: '2005', label: 'Year Founded', description: '20+ Years of Enterprise Engineering Rigor' },
      { value: '100+', label: 'Production Platforms Shipped', description: 'Tested Across High-Concurrency Workloads' },
      { value: '99.99%', label: 'Infrastructure Uptime', description: 'Zero Data Loss Engineering Standard' },
      { value: '1.96M+', label: 'Verified Records Handled', description: 'Trusted with State-Scale Public Registries' },
    ],
    trustPoints: [
      'Senior data engineers and certified cloud architects across AWS, Azure, and GCP',
      'Strict zero-trust security standards, end-to-end data encryption, and role-based access control',
      'Transparent sprint execution with dedicated technical project management',
      'Proven track record scaling mission-critical public and enterprise platforms',
    ],
  },
  testimonial: {
    quote:
      'Travash is our technology partner and the backbone of our national fight against cyber fraud. They engineer and manage the massive coordination application we rely on to track fraudsters in real-time, halt malicious activities, and recover stolen funds. Thanks to their robust infrastructure and deep expertise, we are saving millions of citizens hard-earned money. Travash stands shoulder-to-shoulder with us on the frontlines.',
    author: 'Senior Leadership & National Coordinator',
    role: 'National Cyber Fraud Mitigation Portal',
    company: 'Public Safety Initiative',
    badge: 'National Infrastructure Partner',
  },
  faqs: [
    {
      question: "How do you ensure our proprietary data doesn't leak into public AI models?",
      answer:
        'We enforce strict zero-trust network boundaries and enterprise data governance. All data processing pipelines, vector databases, and analytics platforms run entirely within your private cloud Virtual Private Cloud (VPC) or dedicated on-premise infrastructure. We configure private endpoints, data masking, and strict API controls so your sensitive business data is never shared with public LLMs or third-party training corpuses.',
    },
    {
      question: 'Should our enterprise use a single cloud provider or a multi-cloud data strategy?',
      answer:
        'The answer depends on your existing software ecosystem, data sovereignty mandates, and latency requirements. For most enterprises, standardizing on one primary cloud provider (such as AWS, Azure, or GCP) simplifies IAM security and drastically reduces data egress costs. However, we architect data platforms using cloud-agnostic tools like Snowflake, Databricks, and Terraform, ensuring you retain the flexibility to deploy workloads across multiple clouds without vendor lock-in.',
    },
    {
      question: 'How does modern data pipeline automation actually save our business money?',
      answer:
        'Automated pipelines replace hundreds of hours of manual report compilation by analysts, eliminate human transcription errors, and prevent costly operational mistakes caused by outdated spreadsheets. Furthermore, by modernizing your architecture with decoupled storage and serverless compute, you only pay for compute resources during query execution rather than maintaining expensive, idle database instances 24/7.',
    },
    {
      question: 'Can you migrate our legacy databases and data warehouses without system downtime?',
      answer:
        'Yes. We utilize phased migration strategies and Change Data Capture (CDC) replication to keep your new cloud data warehouse continuously synchronized with your existing legacy systems in real-time. We run automated reconciliation and checksum validation scripts in parallel until total parity is confirmed, allowing you to cut over seamlessly with zero interruption to active business operations.',
    },
    {
      question: 'How quickly can Travash deploy a dedicated team of data engineers to our project?',
      answer:
        'Depending on your technical stack and seniority requirements, we can assemble and onboard a dedicated pod of pre-vetted senior data engineers, BI specialists, and cloud architects within 1 to 2 weeks. Our engineers seamlessly integrate into your agile rituals, Jira/GitHub workflows, and communication channels.',
    },
  ],
  finalCTA: {
    heading: 'Ready to turn your enterprise data into a competitive advantage?',
    description:
      'Talk with our senior data engineering team to assess your current architecture, eliminate costly silos, and build a practical roadmap for scalable analytics.',
    primaryCTA: {
      label: 'Book a Data Architecture Audit',
      href: '#contact',
    },
    secondaryCTA: {
      label: 'Talk to Our Data Experts',
      href: '#contact',
    },
  },
  seo: {
    metaTitle: 'Data & Analytics Solutions | Enterprise Data Engineering | Travash',
    metaDescription:
      'Transform raw enterprise data into actionable intelligence. Travash architects scalable data pipelines, cloud warehouses, and BI dashboards that drive revenue.',
  },
}
