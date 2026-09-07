import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

// Simple env file parser
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local')
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n')
    for (const line of lines) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/)
      if (match) {
        const key = match[1]
        let value = match[2] || ''
        value = value.trim().replace(/^['"]|['"]$/g, '')
        process.env[key] = value
      }
    }
  }
}

loadEnv()

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!token) {
  console.error('Missing SANITY_API_TOKEN in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const SERVICES = [
  {
    _id: 'service-ai-data-engineering',
    title: 'AI & Data Engineering',
    slug: 'ai-data-engineering',
    menuTitle: 'AI & Data Engineering',
    shortDescription: 'Custom deep learning architectures, scalable computer vision inference pipelines, and high-throughput vector storage systems engineered for enterprise scale.',
    hero: {
      eyebrow: 'Production-Grade AI & ML Systems',
      title: 'Architecting Intelligent Systems that Deliver Real Operational ROI',
      description: 'Move beyond experimental prototypes. We build, train, and deploy mission-critical AI applications, facial recognition engines, and scalable data streaming pipelines designed for sub-second inference at enterprise scale.',
      primaryCTA: { label: 'Schedule AI Consultation', href: '#contact' },
      secondaryCTA: { label: 'Explore AI Capabilities', href: '#capabilities' },
      highlights: ['Biometric & Facial AI', 'Sub-Second Inference', 'High-Throughput Streaming', 'Production MLOps'],
    },
    problemSection: {
      label: 'The AI Engineering Bottleneck',
      title: 'Why 85% of Enterprise AI Projects Fail to Reach Production',
      headline: 'The chasm between a Jupyter Notebook proof-of-concept and a 99.99% available production AI system is enormous.',
      description: 'Most organizations struggle with model drift, sluggish inference latencies, brittle data ingestion pipelines, and unmanageable GPU infrastructure costs.',
      painPoints: [
        { _key: 'p1', title: 'Inferencing Latency Bottlenecks', description: 'Unoptimized models take seconds to return results, making them unusable for real-time mobile and web user experiences.' },
        { _key: 'p2', title: 'Data Drift & Model Degradation', description: 'Models trained on static datasets degrade rapidly in accuracy as real-world input distributions shift over time.' },
        { _key: 'p3', title: 'Brittle Ingestion Pipelines', description: 'Data pipelines fail silently under sudden traffic surges, causing data loss and corrupted vector embeddings.' },
        { _key: 'p4', title: 'Astronomical GPU Cloud Spend', description: 'Over-provisioned compute resources without dynamic model quantization lead to wasteful infrastructure expenses.' },
      ],
    },
    solutionOverview: {
      heading: 'How Travash Engineers Production AI',
      description: 'We treat AI as a core systems engineering discipline — focusing on low latency, rigorous model observability, fault-tolerant pipelines, and measurable business impact.',
      benefits: [
        { _key: 'b1', icon: 'cpu', title: 'Optimized Inference Engines', description: 'Sub-second inference times through TensorRT optimization, ONNX runtime compilation, and dynamic batching.' },
        { _key: 'b2', icon: 'database', title: 'Resilient Streaming Pipelines', description: 'Zero-loss Kafka pipelines with automated schema validation and high-concurrency ingestion backbones.' },
        { _key: 'b3', icon: 'shield', title: 'Automated MLOps Telemetry', description: 'Continuous monitoring for precision/recall drift with automated canary deployments and model retraining loops.' },
        { _key: 'b4', icon: 'trending-up', title: 'Guaranteed Operational ROI', description: 'Strict SLA adherence, reproducible benchmarks, and cost-optimized multi-GPU cluster orchestration.' },
      ],
      cta: { label: 'Book Technical AI Review', href: '#contact' },
    },
    process: {
      heading: 'Our AI Engineering Lifecycle',
      description: 'A disciplined, 4-stage engineering pipeline from data audit to continuous production telemetry.',
      steps: [
        { _key: 's1', number: '01', title: 'Data Audit & Feasibility Study', description: 'Evaluate training data quality, distribution balance, and technical feasibility.' },
        { _key: 's2', number: '02', title: 'Model Architecture & Validation', description: 'Develop and benchmark model topologies against rigorous precision-recall metrics.' },
        { _key: 's3', number: '03', title: 'Containerization & MLOps Pipeline', description: 'Package models into optimized Docker microservices with automated health checks.' },
        { _key: 's4', number: '04', title: 'Telemetry & Continuous Retraining', description: 'Monitor live inference metrics, detect data drift, and automate retraining loops.' },
      ],
    },
    technologyStack: [
      { _key: 't1', category: 'AI & Deep Learning', technologies: ['PyTorch', 'TensorFlow', 'OpenCV', 'Hugging Face'], description: 'Foundational frameworks for training and fine-tuning specialized neural networks.' },
      { _key: 't2', category: 'Data Engineering & Streaming', technologies: ['Apache Kafka', 'Apache Spark', 'Python', 'FastAPI'], description: 'High-throughput stream processing and distributed data pipelines.' },
      { _key: 't3', category: 'Vector DBs & Storage', technologies: ['Milvus', 'Redis', 'PostgreSQL', 'MinIO'], description: 'Sub-millisecond similarity search across high-dimensional vector embeddings.' },
      { _key: 't4', category: 'MLOps & Inference', technologies: ['Docker', 'Kubernetes', 'FastAPI', 'ONNX'], description: 'Containerized model inference runtimes with real-time latency optimization.' },
    ],
    testimonial: {
      quote: 'Working with Travash on our bespoke AI Voice Calling Agent was a total game-changer, taking us from manual handling to a high-speed automated growth engine. Speed-to-lead plummeted from over four hours to under three seconds (24/7), directly increasing booked appointments by +310%. Our team reclaimed over 25 hours per week to focus entirely on closings, and our HubSpot CRM is 100% automated. Critically, the AI agent sounds real human, making it highly effective and customer-friendly. Travash delivers custom AI architectures with immediate operational clarity and rapid, measurable ROI.',
      author: 'Founder & CEO',
      role: 'Sales Operations',
      company: 'AI Voice Agent Client',
      badge: 'Verified Enterprise Client',
    },
  },
  {
    _id: 'service-data-analytics-solutions',
    title: 'Data & Analytics Solutions',
    slug: 'data-analytics-solutions',
    menuTitle: 'Data & Analytics',
    shortDescription: 'Convert raw enterprise data into hard ROI. We architect high-speed data pipelines, deploy scalable cloud warehouses, and build custom business intelligence systems.',
    hero: {
      eyebrow: 'Enterprise Data Engineering & BI',
      title: 'Stop Drowning in Data. Start Driving Revenue.',
      description: 'Having terabytes of data means nothing if you cannot extract immediate, actionable truth from it. We architect high-speed data pipelines, implement powerful business intelligence platforms, and build custom dashboards that turn raw enterprise data into hard ROI.',
      primaryCTA: { label: 'Book a Data Architecture Audit', href: '#contact' },
      secondaryCTA: { label: 'View Analytics Case Studies', href: '#case-studies' },
      highlights: ['Sub-second query response times', 'Zero-data-loss streaming pipelines', 'Custom executive KPI dashboards', 'SOC2 / HIPAA-ready data security'],
    },
    technologyStack: [
      { _key: 't1', category: 'Cloud Platforms', technologies: ['AWS', 'Microsoft Azure', 'Google Cloud'], description: 'Enterprise multi-cloud ecosystems with auto-scaling compute and high-availability architecture.' },
      { _key: 't2', category: 'Containerization & Orchestration', technologies: ['Docker', 'Kubernetes'], description: 'Microservices containerization with zero-downtime rolling deployments and automated cluster healing.' },
      { _key: 't3', category: 'CI/CD & Automation', technologies: ['Jenkins', 'GitLab', 'Ansible', 'HashiCorp Terraform'], description: 'Version-controlled infrastructure as code and automated deployment pipelines with zero human error.' },
      { _key: 't4', category: 'Monitoring & Security', technologies: ['DataGrip', 'Prometheus', 'Grafana', 'Cloudflare'], description: 'Real-time infrastructure observability, log aggregation, automated alerts, and edge DDoS protection.' },
    ],
    testimonial: {
      quote: "Travash is our technology partner and the backbone of our national fight against cyber fraud. They engineer and manage the massive coordination application we rely on to track fraudsters in real-time, halt malicious activities, and recover stolen funds. Thanks to their robust infrastructure and deep expertise, we are saving millions of citizens' hard-earned rupees.",
      author: 'Senior Leadership & National Coordinator',
      role: 'Cyber Crime Coordination',
      company: 'National Anti-Fraud Network',
      badge: 'National Public Safety Authority',
    },
  },
  {
    _id: 'service-software-engineering',
    title: 'Enterprise Software Engineering',
    slug: 'software-engineering',
    menuTitle: 'Software Engineering',
    shortDescription: 'Build mission-critical custom applications, high-performance web platforms, and resilient microservices designed to scale seamlessly with your business growth.',
    hero: {
      eyebrow: 'Full-Stack Software Engineering',
      title: 'Engineering Resilient Software for Complex Enterprise Demands',
      description: 'From high-concurrency transactional backends to intuitive responsive web platforms, we engineer clean, maintainable, and battle-tested software systems tailored to your exact business operations.',
      primaryCTA: { label: 'Schedule Engineering Consultation', href: '#contact' },
      secondaryCTA: { label: 'Explore Capabilities', href: '#capabilities' },
      highlights: ['Microservices Architecture', 'High Concurrency', 'Zero Downtime CI/CD', 'Full-Stack TypeScript & Java'],
    },
    technologyStack: [
      { _key: 't1', category: 'Frontend Platforms', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], description: 'Modern component-driven web user interfaces with server-side rendering.' },
      { _key: 't2', category: 'Backend & APIs', technologies: ['Java', 'Node.js', 'Go', 'Python', 'GraphQL', 'REST'], description: 'Robust server environments built for high concurrency and zero memory leaks.' },
      { _key: 't3', category: 'Databases & Messaging', technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Kafka'], description: 'Relational ACID transactions, fast cache layers, and distributed messaging.' },
      { _key: 't4', category: 'Cloud & CI/CD', technologies: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'], description: 'Scalable containerization and continuous delivery pipelines for zero-downtime releases.' },
    ],
    testimonial: {
      quote: "Trying to force our UK logistics operations into rigid, off-the-shelf software was an absolute nightmare. We needed a system that adapted to our unique workflows, not the other way around. Travash stepped in, mapped out our exact operational DNA, and built a bespoke internal application that fits us like a glove. Everything from our internal tracking to dispatch is finally unified exactly how we work on the floor. They didn't just build an app; they engineered a flawless digital extension of our business.",
      author: 'Operations Director',
      role: 'Head of Operations',
      company: 'UGO',
      badge: 'Logistics Enterprise UK',
    },
  },
  {
    _id: 'service-cloud-devops',
    title: 'Cloud & DevOps Engineering',
    slug: 'cloud-devops',
    menuTitle: 'Cloud & DevOps',
    shortDescription: 'Architect resilient multi-cloud infrastructure, automate zero-downtime CI/CD deployment pipelines, and optimize infrastructure spend across AWS, Azure, and GCP.',
    hero: {
      eyebrow: 'Resilient Cloud & Automated DevOps',
      title: 'Modernize Your Cloud. Scale Without Outages or Excessive Costs.',
      description: 'We design high-availability Kubernetes environments, automated Terraform infrastructure, and continuous delivery pipelines that help enterprises deploy faster with zero disruption.',
      primaryCTA: { label: 'Book Cloud Architecture Consultation', href: '#contact' },
      secondaryCTA: { label: 'View Cloud Case Studies', href: '/portfolio' },
    },
    technologyStack: [
      { _key: 't1', category: 'Cloud Infrastructure', technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform'], description: 'Multi-cloud elasticity, auto-scaling instances, and declarative Infrastructure as Code.' },
      { _key: 't2', category: 'Containerization & Orchestration', technologies: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD'], description: 'Microservices container runtimes with automated cluster scaling and progressive rollouts.' },
      { _key: 't3', category: 'CI/CD & Automation', technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Ansible'], description: 'Automated build, test, and release pipelines ensuring continuous, zero-error deployments.' },
      { _key: 't4', category: 'Observability & Edge', technologies: ['Prometheus', 'Grafana', 'DataGrip', 'Cloudflare'], description: 'Full-stack metric telemetry, distributed trace monitoring, and global DDoS protection.' },
    ],
    testimonial: {
      quote: "When your platform serves as the digital backbone for an industrial supply chain, even seconds of server downtime can cost millions. We didn't just need developers; we needed an impenetrable cloud infrastructure. Travash architected a highly secure, auto-scaling AWS environment that completely eliminated our performance bottlenecks. Their automated deployment pipelines ensure our system handles massive data loads and unexpected traffic spikes flawlessly. They didn't just build our platform — they gave us the ultimate operational peace of mind: true, uncompromising cloud reliability.",
      author: 'Founder & CEO',
      role: 'Chief Executive',
      company: 'Indispare',
      badge: 'Industrial Supply Chain',
    },
  },
  {
    _id: 'service-digital-experiences',
    title: 'Digital Experiences & UI/UX',
    slug: 'digital-experiences',
    menuTitle: 'Digital Experiences',
    shortDescription: 'Engineer high-conversion digital experiences, accessible web applications, and intuitive user interfaces backed by user-centric design and modern frontend engineering.',
    hero: {
      eyebrow: 'Modern Web & User Experience',
      title: 'Transforming User Journeys into High-Impact Digital Experiences.',
      description: 'From complex SaaS dashboards to high-velocity consumer web applications, we combine brand aesthetics, micro-interactions, and robust engineering to captivate users.',
      primaryCTA: { label: 'Explore Digital Experience Capabilities', href: '#contact' },
      secondaryCTA: { label: 'View Experience Portfolio', href: '/portfolio' },
    },
    technologyStack: [
      { _key: 't1', category: 'Web Frameworks', technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], description: 'Blazing-fast responsive interfaces with server-side rendering and fluid animations.' },
      { _key: 't2', category: 'UI/UX & Design Systems', technologies: ['Figma', 'Framer Motion', 'HTML5', 'CSS3'], description: 'Pixel-perfect component design libraries and interactive motion design systems.' },
      { _key: 't3', category: 'Mobile & Cross-Platform', technologies: ['React Native', 'Flutter', 'iOS', 'Android'], description: 'Native mobile experiences with 60fps gesture-driven navigation and offline support.' },
      { _key: 't4', category: 'State & API Integrations', technologies: ['GraphQL', 'REST', 'Node.js', 'Redux'], description: 'Reactive client state management and clean headless CMS / API integrations.' },
    ],
    testimonial: {
      quote: "We came to Travash with nothing but a concept and a blank canvas for Rating Star. We needed more than just a fresh coat of paint; we needed a complete, end-to-end digital experience. They mapped out every single user workflow from scratch and translated complex requirements into a beautifully clean, highly intuitive interface. They didn't just design our platform — they defined how our users experience our brand. The final design is visually striking, modern, and completely effortless to navigate.",
      author: 'Vinay',
      role: 'Founder',
      company: 'Rating Star',
      badge: 'Verified Founder',
    },
  },
  {
    _id: 'service-platform-engineering',
    title: 'Platform Engineering',
    slug: 'platform-engineering',
    menuTitle: 'Platform Engineering',
    shortDescription: 'Build scalable multi-tenant SaaS foundations, internal developer platforms (IDP), and unified API layers that empower product teams to ship software faster.',
    hero: {
      eyebrow: 'Scalable SaaS & Developer Platforms',
      title: 'Engineered for High Velocity. Architected for Multi-Tenant Scale.',
      description: 'Eliminate architectural bottlenecks and redundant scaffolding. We engineer developer platforms, self-healing services, and unified microservices platforms.',
      primaryCTA: { label: 'Consult Platform Engineers', href: '#contact' },
      secondaryCTA: { label: 'Explore Platform Architectures', href: '/portfolio' },
    },
    technologyStack: [
      { _key: 't1', category: 'Infrastructure as Code', technologies: ['Terraform', 'Ansible', 'Docker', 'Kubernetes'], description: 'Declarative cluster management, self-healing compute nodes, and reproducible environment templates.' },
      { _key: 't2', category: 'Cloud & Edge Platforms', technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Cloudflare'], description: 'Multi-region compute fabrics, low-latency edge routing, and enterprise identity federation.' },
      { _key: 't3', category: 'Messaging & Streaming', technologies: ['Apache Kafka', 'Redis', 'PostgreSQL', 'MySQL'], description: 'Event-driven pub/sub messaging backbones, distributed caching, and zero-loss ACID storage.' },
      { _key: 't4', category: 'Telemetry & Observability', technologies: ['Prometheus', 'Grafana', 'Datadog', 'SonarQube'], description: 'Real-time telemetry, automated anomaly triggers, and continuous code quality gating.' },
    ],
    testimonial: {
      quote: 'The platform Travash engineered for us is mission-critical infrastructure. They designed an architecture that is scalable, resilient, and easy for our internal teams to maintain. Their engineering quality is exceptional.',
      author: 'Senior Leadership & National Coordinator',
      role: 'Cyber Crime Coordination',
      company: 'National Anti-Fraud Network',
      badge: 'National Security Lead',
    },
  },
  {
    _id: 'service-enterprise-applications',
    title: 'Enterprise Applications & Modernization',
    slug: 'enterprise-applications',
    menuTitle: 'Enterprise Applications',
    shortDescription: 'Modernize legacy monoliths into agile microservices, integrate mission-critical ERPs and CRMs, and automate complex enterprise operational workflows.',
    hero: {
      eyebrow: 'Mission-Critical Business Systems',
      title: 'Modernize Legacy Complexity into Resilient Enterprise Engines.',
      description: 'Bridge core legacy databases, modern cloud services, and bespoke ERP/CRM workflows with zero data loss, guaranteed continuity, and enterprise compliance.',
      primaryCTA: { label: 'Schedule Modernization Audit', href: '#contact' },
      secondaryCTA: { label: 'View Enterprise Projects', href: '/portfolio' },
    },
    technologyStack: [
      { _key: 't1', category: 'Enterprise Languages', technologies: ['Java', 'C# .NET', 'Python', 'TypeScript'], description: 'Strongly-typed enterprise backends designed for extreme transaction volume and zero memory leaks.' },
      { _key: 't2', category: 'Frameworks & Architectures', technologies: ['Spring Boot', '.NET', 'Node.js', 'Next.js'], description: 'Modular microservice architectures, enterprise domain services, and clean RESTful API contracts.' },
      { _key: 't3', category: 'Data & Distributed Storage', technologies: ['Oracle', 'PostgreSQL', 'MySQL', 'Redis'], description: 'ACID transaction management, enterprise data warehousing, and low-latency cache layers.' },
      { _key: 't4', category: 'Integration & Cloud', technologies: ['Apache Kafka', 'Docker', 'Kubernetes', 'Azure'], description: 'Enterprise message buses, automated container orchestration, and seamless hybrid cloud integration.' },
    ],
    testimonial: {
      quote: 'Travash modernized our entire enterprise application stack without a single hour of production downtime. Their technical team understood our complex business logic deeply and delivered systems that are faster, more secure, and far easier for our teams to maintain and scale.',
      author: 'Abdul',
      role: 'Managing Director',
      company: 'Dubai Enterprise Client',
      badge: 'Managing Director',
    },
  },
  {
    _id: 'service-dedicated-teams',
    title: 'Dedicated Talent & Agile Teams',
    slug: 'dedicated-teams',
    menuTitle: 'Dedicated Teams',
    shortDescription: 'Scale your engineering bandwidth with pre-vetted senior software engineers, AI researchers, and DevOps architects embedded directly into your delivery sprints.',
    hero: {
      eyebrow: 'Elastic Engineering Scale',
      title: 'Elite Engineering Squads Embedded Seamlessly in Your Sprints.',
      description: 'Eliminate months of hiring delays. Integrate battle-tested full-stack developers, tech leads, and QA specialists who work aligned to your time zone and agile practices.',
      primaryCTA: { label: 'Assemble Your Squad', href: '#contact' },
      secondaryCTA: { label: 'Review Engagement Models', href: '/portfolio' },
    },
    technologyStack: [
      { _key: 't1', category: 'Full-Stack Development', technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Java', 'Python'], description: 'Senior full-stack engineers experienced in agile sprint cadences, code reviews, and CI/CD best practices.' },
      { _key: 't2', category: 'Cloud & DevOps Specialists', technologies: ['AWS', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform'], description: 'Certified cloud architects and SREs proficient in zero-downtime infrastructure and automation.' },
      { _key: 't3', category: 'Data & AI Practitioners', technologies: ['PyTorch', 'TensorFlow', 'Apache Kafka', 'PostgreSQL', 'Redis'], description: 'Machine learning engineers, data pipeline architects, and vector database experts ready to deploy models.' },
      { _key: 't4', category: 'Quality & Test Engineering', technologies: ['Playwright', 'Cypress', 'Jest', 'Postman', 'Jira'], description: 'Dedicated automated QA engineers ensuring zero defect escape rates and continuous test coverage.' },
    ],
    testimonial: {
      quote: "When we needed to rapidly scale our engineering capacity, Travash deployed a dedicated, highly skilled team that integrated seamlessly into our agile workflows on day one. They didn't just act as contractors; they became a true extension of our own company, eliminating massive hiring friction and overhead.",
      author: 'VP of Engineering',
      role: 'Head of Engineering',
      company: 'Enterprise Software Client',
      badge: 'VP of Engineering',
    },
  },
  {
    _id: 'service-quality-assurance',
    title: 'Quality Assurance & Automated Testing',
    slug: 'quality-assurance',
    menuTitle: 'QA & Testing',
    shortDescription: 'Ensure flawless software dependability with automated end-to-end testing frameworks, performance stress testing, and continuous security regression suites.',
    hero: {
      eyebrow: 'Zero-Defect Software Delivery',
      title: 'Bulletproof Reliability Through Continuous Automated Quality Engineering.',
      description: 'Ship software with supreme confidence. We architect comprehensive test suites, API contracts, cross-browser validation, and security vulnerability scans.',
      primaryCTA: { label: 'Request QA Audit', href: '#contact' },
      secondaryCTA: { label: 'Explore Quality Frameworks', href: '/portfolio' },
    },
    technologyStack: [
      { _key: 't1', category: 'Automated E2E & Web Testing', technologies: ['Playwright', 'Cypress', 'Selenium', 'Jest'], description: 'Cross-browser automated test suites executing against staging and production builds in parallel.' },
      { _key: 't2', category: 'API & Performance Testing', technologies: ['Postman', 'JMeter', 'k6', 'REST'], description: 'Automated API contract validation, latency benchmarking, and simulated high-concurrency load stress tests.' },
      { _key: 't3', category: 'Continuous QA & Code Security', technologies: ['SonarQube', 'GitHub Actions', 'Jenkins', 'Docker'], description: 'Automated static code analysis, vulnerability scanning, and pre-merge quality gates in CI/CD pipelines.' },
      { _key: 't4', category: 'Test Management & Tracking', technologies: ['Jira', 'Allure', 'DataGrip', 'PostgreSQL'], description: 'Comprehensive test case management, real-time defect telemetry dashboards, and regression tracking.' },
    ],
    testimonial: {
      quote: "In the clinical research industry, software bugs aren't just inconvenient — they are massive compliance risks. We needed a technology partner with an uncompromising approach to quality assurance. Travash didn't just do basic testing on our CTMS platform; they aggressively validated every single data point, from patient enrollment workflows to complex third-party integrations. Their rigorous testing protocols ensured our system was completely secure, compliant, and structurally flawless before we ever went live. They gave us the absolute confidence we needed to launch.",
      author: 'Chander',
      role: 'Project Director',
      company: 'RadiantSA (CTMS)',
      badge: 'Clinical Research Director',
    },
  },
  {
    _id: 'service-staff-augmentation',
    title: 'Staff Augmentation & Specialized Talent',
    slug: 'staff-augmentation',
    menuTitle: 'Staff Augmentation',
    shortDescription: 'Access top-tier senior software talent on-demand to bridge specialized skill gaps in AI, cloud architecture, mobile engineering, and data systems.',
    hero: {
      eyebrow: 'On-Demand Senior Talent',
      title: 'Accelerate Roadmaps with Specialized Senior Tech Specialists.',
      description: 'Plug critical technology skill gaps on demand. Scale capacity rapidly with flexible contracts and zero administrative overhead.',
      primaryCTA: { label: 'Request Talent Profiles', href: '#contact' },
      secondaryCTA: { label: 'View Available Profiles', href: '/portfolio' },
    },
    technologyStack: [
      { _key: 't1', category: 'Full-Stack & Mobile Engineers', technologies: ['React', 'Next.js', 'React Native', 'Flutter', 'TypeScript', 'Node.js'], description: 'Pre-vetted frontend and mobile engineers ready to contribute high-quality PRs from day one.' },
      { _key: 't2', category: 'Cloud & SRE Architects', technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'], description: 'Senior DevOps and cloud specialists capable of hardening systems and streamlining delivery pipelines.' },
      { _key: 't3', category: 'AI & Data Specialists', technologies: ['Python', 'PyTorch', 'TensorFlow', 'Apache Kafka', 'Snowflake', 'Spark'], description: 'Data engineers and AI specialists with production experience in LLMs, computer vision, and ETL.' },
      { _key: 't4', category: 'Enterprise & QA Engineers', technologies: ['Java', 'Spring Boot', 'C# .NET', 'Playwright', 'Cypress', 'SonarQube'], description: 'Specialists in enterprise backend refactoring, automated testing, and zero-defect deployments.' },
    ],
    testimonial: {
      quote: "Scaling our project teams across multiple global deliverables requires a staffing partner who truly understands enterprise-level demands. Travash delivered exactly that. Their ability to rapidly source, technically vet, and deploy highly skilled professionals in niche technologies has been exceptional. They don't just forward resumes; they provide deployment-ready engineering talent that integrates seamlessly into our critical projects. Travash has proven to be a highly reliable, strategic extension of our talent acquisition engine.",
      author: 'Delivery Head / Talent Acquisition Leadership',
      role: 'Talent Acquisition',
      company: 'Infosys',
      badge: 'Global IT Delivery Leader',
    },
  },
]

async function syncAllServices() {
  console.log(`🚀 Starting Sanity synchronization for ${SERVICES.length} services...`)
  console.log(`📌 Project: ${projectId} | Dataset: ${dataset}`)

  for (const s of SERVICES) {
    try {
      const doc = {
        _id: s._id,
        _type: 'service',
        title: s.title,
        slug: { _type: 'slug', current: s.slug },
        menuTitle: s.menuTitle,
        shortDescription: s.shortDescription,
        hero: s.hero,
        problemSection: s.problemSection,
        solutionOverview: s.solutionOverview,
        process: s.process,
        technologyStack: s.technologyStack,
        testimonial: s.testimonial,
      }

      const res = await client.createOrReplace(doc)
      console.log(`✅ Synced service: "${s.title}" (${s._id}) -> Rev: ${res._rev}`)
    } catch (err) {
      console.error(`❌ Failed to sync service "${s.title}":`, err.message)
    }
  }

  console.log(`🎉 All ${SERVICES.length} services successfully synchronized to Sanity CMS!`)
}

syncAllServices()
