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

// Complete fallback seed data extracted directly from the live WordPress reference page:
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
    heroImage: '/images/services/hero-bg.webp',
    backgroundImage: '/images/services/hero-bg.webp',
    heroImageAlt: 'Stop Drowning in Data - Travash Data Analytics',
    highlights: [
      'Enterprise Data Engineering',
      'Real-Time Analytics',
      'Modern Cloud Warehouses',
      'Business Intelligence',
    ],
  },
  problemSection: {
    label: 'The Problem:',
    title: 'Outdated Spreadsheets & Data Silos',
    headline: 'You are making critical decisions based on outdated spreadsheets.',
    description:
      'Tech leaders are sitting on a goldmine of data, but it is trapped in disconnected silos. Finance uses one system, sales uses another, and your supply chain is a black box. When it takes your team three weeks to manually compile a performance report, you are reacting to the past instead of navigating the future.',
    image: '/images/services/critical.webp',
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
    image: '/images/services/eradicate.webp',
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
          'Instantly scale your capacity with a dedicated development team of elite data engineers and BI analysts.',
      },
      {
        icon: 'eye',
        title: 'Real-Time Visibility',
        description:
          'We replace manual reporting with automated, real-time analytics, giving your executive team absolute clarity on business health at a glance.',
      },
    ],
    cta: {
      label: 'Get a Free Consultation',
      href: '#contact',
    },
  },
  capabilitiesImage: '/images/services/analytics.webp',
  capabilities: [
    {
      title: 'Data Engineering',
      shortDescription:
        'We build the critical plumbing—secure, high-volume data pipelines—that makes accurate analytics possible.',
      problem: 'Your data is dirty, duplicated, and scattered across dozens of incompatible legacy systems.',
      solution:
        'We architect scalable data infrastructure using Big Data technologies like Hadoop, Spark, and NoSQL. We build automated ETL pipelines that clean and route data into a centralized, secure data warehouse.',
      businessImpact:
        'Creates an unshakeable foundation of high-quality data, ensuring your business intelligence tools are reporting the actual truth.',
      icon: 'database',
      technologies: ['Apache Spark', 'Hadoop', 'Kafka', 'Python', 'SQL', 'Airflow', 'dbt'],
      optionalCTA: { label: 'Explore Engineering', href: '#contact' },
    },
    {
      title: 'Business Intelligence (BI)',
      shortDescription:
        'We deploy enterprise-grade BI platforms that empower your teams to query massive datasets without needing a degree in computer science.',
      problem:
        'Non-technical leaders cannot get answers to strategic questions without submitting a ticket to the IT department and waiting days.',
      solution:
        'We implement and customize leading BI engines (like Power BI, Tableau, or custom builds). We design intuitive semantic layers so anyone can explore data naturally.',
      businessImpact:
        'Democratizes data across your organization, drastically cutting the time it takes to move from a strategic question to a data-backed answer.',
      icon: 'pie-chart',
      technologies: ['Power BI', 'Tableau', 'Looker', 'Custom Semantic Models'],
      optionalCTA: { label: 'Explore BI', href: '#contact' },
    },
    {
      title: 'CI/CD (Continuous Integration & Continuous Deployment)',
      shortDescription:
        'We build the automated highways that take your code from a developer\'s laptop to production in minutes.',
      problem: 'Code sits in testing environments for weeks waiting for manual QA and security approvals.',
      solution:
        'We engineer automated CI/CD pipelines. Every code commit is automatically built, security-scanned, and tested before being safely deployed to staging or production.',
      businessImpact:
        'Empowers your engineers to deploy multiple times a day with total confidence, massively accelerating feature releases.',
      icon: 'server',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'ArgoCD'],
      optionalCTA: { label: 'Explore CI/CD', href: '#contact' },
    },
    {
      title: 'AWS (Amazon Web Services)',
      shortDescription:
        'We design, deploy, and manage highly resilient cloud architectures on the world\'s most comprehensive cloud platform.',
      problem:
        'Your AWS environment has grown organically over years, leading to tangled permissions, unused resources, and bloated monthly invoices.',
      solution:
        'Our certified AWS architects optimize your infrastructure. We implement EC2 auto-scaling, secure S3 data lakes, and serverless architectures to maximize performance.',
      businessImpact:
        'Slashes your AWS spend, tightens identity access management (IAM), and ensures 99.99% uptime.',
      icon: 'cloud',
      technologies: ['AWS S3', 'EC2 Auto-scaling', 'EMR', 'Redshift', 'Lambda'],
      optionalCTA: { label: 'Explore AWS', href: '#contact' },
    },
    {
      title: 'Microsoft Azure',
      shortDescription:
        'We engineer enterprise-grade hybrid and public cloud solutions utilizing the Microsoft ecosystem.',
      problem: 'You rely heavily on enterprise Microsoft tools but struggle to scale them securely in a hybrid cloud environment.',
      solution:
        'We leverage Azure’s advanced capabilities, deploying secure Kubernetes services (AKS), Azure DevOps pipelines, and seamless Active Directory integrations.',
      businessImpact:
        'Provides a highly secure, compliant environment that natively integrates with your existing enterprise software stack.',
      icon: 'shield',
      technologies: ['Azure Synapse', 'AKS', 'Azure DevOps', 'Active Directory'],
      optionalCTA: { label: 'Explore Azure', href: '#contact' },
    },
    {
      title: 'Google Cloud (GCP)',
      shortDescription:
        'We build data-heavy, high-compute platforms leveraging Google’s elite machine learning and analytics infrastructure.',
      problem:
        'Your data engineering and AI models are choking on standard cloud infrastructure due to low compute speed and high latency.',
      solution:
        'We architect data pipelines and microservices on GCP, utilizing BigQuery, Vertex AI, and Google Kubernetes Engine (GKE) for extreme performance.',
      businessImpact:
        'Accelerates data processing and machine learning workflows, giving you the fastest possible insights from your enterprise data.',
      icon: 'cpu',
      technologies: ['Google BigQuery', 'Vertex AI', 'GKE', 'Dataflow'],
      optionalCTA: { label: 'Explore GCP', href: '#contact' },
    },
    {
      title: 'DevSecOps & Cloud Security',
      shortDescription:
        'We bring financial accountability to the variable spend model of the cloud.',
      problem: 'Your cloud bill is a black box, and costs are scaling much faster than your actual business revenue.',
      solution:
        'We conduct rigorous FinOps audits. We identify orphaned resources, right-size your compute instances, and architect serverless functions to ensure you only pay for what you use.',
      businessImpact:
        'Instantly reclaims wasted IT budget, providing predictable, optimized monthly cloud expenditures.',
      icon: 'shield',
      technologies: ['FinOps Audits', 'Terraform', 'Vault', 'Kubernetes Security'],
      optionalCTA: { label: 'Explore DevSecOps', href: '#contact' },
    },
  ],
  process: {
    heading: 'Our Infrastructure Engineering Process',
    description:
      'We do not guess with your infrastructure. We follow a strict, enterprise-grade methodology to ensure absolute stability.',
    steps: [
      {
        number: '01',
        title: 'Cloud Readiness & Security Audit',
        description:
          'We audit your existing codebase, database structures, and security posture to identify the exact cloud architecture you need.',
        icon: '/images/services/process-icon.svg',
      },
      {
        number: '02',
        title: 'Blueprinting & Infrastructure as Code',
        description:
          'We design the architecture and write it as code (Terraform/Ansible) so your infrastructure is version-controlled, repeatable, and secure.',
        icon: '/images/services/process-icon.svg',
      },
      {
        number: '03',
        title: 'Phased Execution & Containerization',
        description:
          'We migrate or deploy in tightly controlled sprints, utilizing Docker and Kubernetes to ensure applications run perfectly in any environment.',
        icon: '/images/services/process-icon.svg',
      },
      {
        number: '04',
        title: 'Continuous Monitoring',
        description:
          'Post-deployment, we implement advanced telemetry and auto-healing scripts to catch and resolve anomalies before your users ever notice.',
        icon: '/images/services/process-icon.svg',
      },
    ],
  },
  relatedCaseStudies: [
    {
      title: 'Darpan',
      slug: 'satyapaan',
      category: 'AI & Face Recognition',
      client: 'State Police Department',
      shortDescription:
        'Leveraging AI for Missing Child Retrieval - A Revolutionary Face Recognition Mobile App Solution.',
      image: '/images/services/darpan.webp',
      featureImage: { asset: { url: '/images/services/darpan.webp' } },
      metrics: [
        { value: '1.96M', label: 'Face Profiles Scanned' },
        { value: '99.4%', label: 'Biometric Accuracy' },
      ],
    },
    {
      title: 'I4C Bank Portal',
      slug: 'i4c-bank-portal',
      category: 'Cyber Fraud Mitigation',
      client: 'National Cyber Coordination Centre',
      shortDescription:
        'Building a Pan-India financial fraud mitigation portal for instant account freezing and stolen fund recovery.',
      image: '/images/services/i4c.png',
      featureImage: { asset: { url: '/images/services/i4c.png' } },
      metrics: [
        { value: '₹100M+', label: 'Fraud Intercepted' },
        { value: 'Instant', label: 'Account Freeze' },
      ],
    },
    {
      title: 'Dine Desk',
      slug: 'dine-desk',
      category: 'Hospitality & Operations',
      client: 'Enterprise Restaurant Network',
      shortDescription:
        'Streamlining restaurant operations with smart reservations, waitlists, table management, and customer insights.',
      image: '/images/services/dinedesk.png',
      featureImage: { asset: { url: '/images/services/dinedesk.png' } },
      metrics: [
        { value: '3x', label: 'Table Turnover' },
        { value: '40%', label: 'No-Show Reduction' },
      ],
    },
  ],
  engagementBgImage: '/images/services/engagement-bg.webp',
  engagementModels: [
    {
      title: 'Dedicated Team',
      description:
        'A dedicated, fully managed pod of senior data engineers, cloud architects, and BI analysts embedded directly into your delivery workflow.',
      icon: '/images/services/boosting.svg',
      badge: 'Most Popular',
      cta: { label: 'Hire Dedicated Team', href: '#contact' },
    },
    {
      title: 'Fixed Fee',
      description:
        'For clearly scoped deliverables—such as a data warehouse migration or automated ETL rollout—with guaranteed milestones, fixed budget, and SLA delivery.',
      icon: '/images/services/boosting.svg',
      badge: 'Fixed Scope',
      cta: { label: 'Scope a Project', href: '#contact' },
    },
    {
      title: 'Time & Material (Advisory)',
      description:
        'On-demand access to certified principal architects for ad-hoc audits, infrastructure troubleshooting, performance tuning, and high-level technical guidance.',
      icon: '/images/services/boosting.svg',
      badge: 'Flexible',
      cta: { label: 'Book Advisory', href: '#contact' },
    },
    {
      title: 'Staff Augmentation',
      description:
        'Seamlessly integrate vetted, senior engineers into your existing internal engineering team within days to accelerate sprint velocity and bridge skill gaps.',
      icon: '/images/services/boosting.svg',
      badge: 'Rapid Scale',
      cta: { label: 'Augment Staff', href: '#contact' },
    },
  ],
  technologyStack: [
    {
      category: 'Cloud Platforms',
      technologies: ['AWS', 'Microsoft Azure', 'Google Cloud'],
      items: [
        { name: 'AWS', icon: '/images/services/aws.svg' },
        { name: 'Azure', icon: '/images/services/azure.svg' },
        { name: 'Google Cloud', icon: '/images/services/google-cloud.svg' },
      ],
      description: 'Enterprise multi-cloud ecosystems with auto-scaling compute and high-availability architecture.',
    },
    {
      category: 'Containerization & Orchestration',
      technologies: ['Docker', 'Kubernetes'],
      items: [
        { name: 'Docker', icon: '/images/services/docker.svg' },
        { name: 'Kubernetes', icon: '/images/services/kubernetes.svg' },
      ],
      description: 'Microservices containerization with zero-downtime rolling deployments and automated cluster healing.',
    },
    {
      category: 'CI/CD & Automation',
      technologies: ['Jenkins', 'GitLab', 'Ansible', 'HashiCorp Terraform'],
      items: [
        { name: 'Jenkins', icon: '/images/services/jenkins.svg' },
        { name: 'GitLab', icon: '/images/services/gitlab.svg' },
        { name: 'Ansible', icon: '/images/services/ansible.svg' },
        { name: 'Terraform', icon: '/images/services/terraform.svg' },
      ],
      description: 'Version-controlled infrastructure as code and automated deployment pipelines with zero human error.',
    },
    {
      category: 'Monitoring & Security',
      technologies: ['DataGrip', 'Prometheus', 'Grafana', 'Cloudflare'],
      items: [
        { name: 'DataGrip', icon: '/images/services/datagrip.svg' },
        { name: 'Prometheus', icon: '/images/services/prometheus.svg' },
        { name: 'Grafana', icon: '/images/services/grafana.svg' },
        { name: 'Cloudflare', icon: '/images/services/cloudflare.svg' },
      ],
      description: 'Real-time infrastructure observability, log aggregation, automated alerts, and edge DDoS protection.',
    },
  ],
  trustSection: {
    heading: 'Why Global Leaders Trust Us',
    description:
      'Founded in 2005, Travash operates as a trusted technology partner for organizations that operate at a massive international scale. Global giants like MasterCard, VISA, Facebook, Autodesk, and UBS trust our elite engineering talent to protect and scale their most critical infrastructure. We bring the execution rigor required for long-term, high-stakes technology partnerships.',
    backgroundImage: '/images/services/global-leaders.webp',
    stats: [
      { value: '2005', label: 'Year Founded', description: '20+ Years of Enterprise Engineering Rigor' },
      { value: '100+', label: 'Enterprise Systems Shipped', description: 'Tested Across High-Concurrency Workloads' },
      { value: '99.99%', label: 'Infrastructure Uptime', description: 'Zero Data Loss Engineering Standard' },
      { value: 'Global', label: 'Enterprise Giants', description: 'MasterCard, VISA, Facebook, Autodesk, UBS' },
    ],
    trustPoints: [
      'Senior data architects and certified engineers across AWS, Azure, and Google Cloud',
      'Strict zero-trust security standards, end-to-end data encryption, and role-based access control',
      'Transparent sprint execution with dedicated technical project management',
      'Proven track record scaling mission-critical public and enterprise platforms',
    ],
  },
  testimonial: {
    quote:
      'Travash is our technology partner and the backbone of our national fight against cyber fraud. They engineer and manage the massive coordination application we rely on to track fraudsters in real-time, halt malicious activities, and recover stolen funds. Thanks to their robust infrastructure and deep expertise, we are saving millions of citizens\' hard-earned rupees. Travash stands shoulder-to-shoulder with us on the frontlines, using technology to protect the nation.',
    author: 'Senior Leadership & National Coordinator',
    role: 'Cyber Crime Coordination',
    company: 'National Anti-Fraud Network',
    badge: 'National Infrastructure Partner',
    avatarImage: '/images/services/testimonial-avatar.jpeg',
    portalImage: '/images/services/i4c-portal.png',
  },
  faqs: [
    {
      question: 'How do you ensure our proprietary data doesn\'t leak into public AI models?',
      answer:
        'We enforce strict zero-trust network boundaries and enterprise data governance. All data processing pipelines, vector databases, and analytics platforms run entirely within your private cloud Virtual Private Cloud (VPC) or dedicated on-premise infrastructure. We configure private endpoints, data masking, and strict API controls so your sensitive business data is never shared with public LLMs or third-party training corpuses.',
    },
    {
      question: 'Should we use a single cloud provider or a multi-cloud strategy?',
      answer:
        'The answer depends on your existing software ecosystem, data sovereignty mandates, and latency requirements. For most enterprises, standardizing on one primary cloud provider (such as AWS, Azure, or GCP) simplifies IAM security and drastically reduces data egress costs. However, we architect infrastructure using cloud-agnostic tools like Terraform, Docker, and Kubernetes, ensuring you retain the flexibility to deploy workloads across multiple clouds without vendor lock-in.',
    },
    {
      question: 'How does DevOps actually save us money?',
      answer:
        'DevOps automation eliminates hundreds of hours of manual deployment and configuration toil, drastically reduces production downtime incidents, and right-sizes your cloud compute infrastructure. Through automated CI/CD pipelines, containerization, and FinOps monitoring, your development team releases features up to 5x faster while cutting idle infrastructure costs.',
    },
    {
      question: 'Can you migrate our legacy monolithic application without rewriting it?',
      answer:
        'Yes. We utilize phased strangler-fig migration patterns and containerization (Docker & Kubernetes) to lift and optimize your legacy monolithic services without disrupting ongoing production operations. We break components into modular microservices gradually while ensuring data consistency and continuous uptime.',
    },
  ],
  finalCTA: {
    heading: 'Ready to build infrastructure that accelerates your business?',
    description:
      'Connect with our certified architects to review your roadmap, audit your cloud spend, or scale your engineering capacity.',
    backgroundImage: '/images/services/cta-bg.webp',
    primaryCTA: {
      label: 'Book a Consultation',
      href: '#contact',
    },
    secondaryCTA: {
      label: 'Explore Case Studies',
      href: '#case-studies',
    },
    features: [
      {
        title: 'Strategic Guidance',
        description: 'Connects businesses with experienced architects.',
      },
      {
        title: 'Revenue-Focused Roadmaps',
        description: 'Ensures technology drives measurable business outcomes.',
      },
      {
        title: 'Data Readiness Evaluation',
        description: 'Assesses current states and defines next steps.',
      },
    ],
  },
  seo: {
    metaTitle: 'AI Development Company | Enterprise AI, ML & Data Solutions | Travash',
    metaDescription:
      'Travash offers UI/UX design services and data analytics solutions in India, creating user-centric, visually appealing designs that boost engagement and digital success.',
  },
}
