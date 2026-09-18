import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function seed() {
  console.log('--- Starting Sanity Seed for About Us & Career ---')

  // 1. Seed About Page
  const aboutDoc = {
    _id: 'aboutPage',
    _type: 'aboutPage',
    hero: {
      eyebrow: 'ABOUT TRAVASH SOFTWARE SOLUTIONS',
      heading: 'Engineering Scalable Software & AI Architecture Since 2005',
      subheading:
        'For two decades, Travash has served global enterprises and digital disruptors as a high-velocity engineering partner. From enterprise web platforms and microservices to generative AI and real-time cloud systems, we transform complex operational challenges into competitive digital advantages.',
      badge1: '19+ Years of Engineering Excellence',
      badge2: 'Enterprise-Grade Software & Cloud',
      badge3: 'Full-Lifecycle Product Partner',
      primaryCTA: {
        label: 'Explore Our Work',
        href: '/portfolio',
      },
      secondaryCTA: {
        label: 'Meet Our Leadership',
        href: '#leadership',
      },
    },
    leadershipHeader: {
      eyebrow: 'EXECUTIVE LEADERSHIP',
      heading: 'Guiding Vision & Engineering Rigor',
      subheading:
        'Our leadership team pairs deep enterprise architecture credentials with a high-touch client partnership ethos.',
    },
    leadership: [
      {
        _key: 'leader-1',
        name: 'V. S. Prakash Rao',
        role: 'Founder & Chief Executive Officer',
        bio: 'Over two decades of experience driving enterprise IT modernization, product strategy, and engineering transformation for global clients across the US, Europe, and Asia-Pacific. Passionate about building resilient organizations and high-velocity engineering cultures.',
        highlights: [
          'Enterprise IT Modernization Leader',
          'Global Client Delivery in US, Europe & APAC',
          'Architect of Travash Delivery Framework',
        ],
      },
      {
        _key: 'leader-2',
        name: 'K. R. V. Murthy',
        role: 'Chief Technology Officer & Head of Architecture',
        bio: 'Spearheads technical vision, cloud-native architectures, and generative AI research at Travash. Advises Fortune 500 and high-growth scale-ups on distributed microservices, event-driven platforms, and robust data security compliance.',
        highlights: [
          'Cloud-Native & Distributed Systems Authority',
          'GenAI, LLM Integration & Workflow Automation',
          'Enterprise Architecture Advisor to Scale-ups',
        ],
      },
    ],
    timelineHeader: {
      eyebrow: 'OUR MILESTONES',
      heading: 'Our Journey of Continuous Innovation',
      subheading:
        'From humble beginnings in 2005 to an international engineering powerhouse delivering mission-critical platforms worldwide.',
    },
    timeline: [
      {
        _key: 'tm-2005',
        year: '2005',
        title: 'Inception & Core Software Foundations',
        description:
          'Founded in Hyderabad with a committed team of senior systems engineers focusing on enterprise application development, client-server architectures, and custom database engineering.',
        highlights: [
          'Established headquarters in Hyderabad, India',
          'Secured first enterprise clients in manufacturing and retail',
        ],
      },
      {
        _key: 'tm-2010',
        year: '2010',
        title: 'Global Expansion & Enterprise Web Systems',
        description:
          'Expanded delivery capabilities to North American and European clients. Built robust offshore delivery frameworks delivering Java, .NET, and scalable web solutions.',
        highlights: [
          'Crossed 50+ successful production deployments',
          'Pioneered hybrid onsite-offshore delivery pods',
        ],
      },
      {
        _key: 'tm-2016',
        year: '2016',
        title: 'Cloud-Native Shift & Microservices Practice',
        description:
          'Formalized cloud transformation and DevOps practices. Assisted legacy enterprises in migrating monolithic infrastructure into containerized AWS and Azure microservices.',
        highlights: [
          'AWS & Microsoft cloud solution competencies',
          'Implemented automated CI/CD and zero-downtime release pipelines',
        ],
      },
      {
        _key: 'tm-2021',
        year: '2021',
        title: 'Modern Experience Engineering & Mobile',
        description:
          'Launched dedicated UI/UX and React/Next.js frontend engineering practices alongside Flutter and native iOS/Android enterprise mobility solutions.',
        highlights: [
          'Enterprise SaaS portals serving 5M+ monthly active users',
          'Built design-system-driven component libraries',
        ],
      },
      {
        _key: 'tm-2024',
        year: '2024 & Beyond',
        title: 'AI Acceleration, Voice Agents & Real-Time Intelligence',
        description:
          'Pioneering conversational AI voice agents, retrieval-augmented generation (RAG) knowledge systems, and autonomous workflow bots for real estate, healthcare, and enterprise sales.',
        highlights: [
          'Deployed human-sounding Voice AI handling 100,000+ monthly calls',
          'Deep integration of LLMs with CRM and enterprise transactional systems',
        ],
      },
    ],
    story: {
      eyebrow: 'OUR STORY & PURPOSE',
      heading: 'We Were Founded on a Single Conviction: Software Must Deliver Measurable ROI.',
      paragraphs: [
        'Travash was established in 2005 with a vision to eliminate the gap between high-level technology consulting and ground-level engineering execution. Too often, enterprises were handed multi-million-dollar slide decks with no accountable team to turn blueprints into performant production software.',
        'We built Travash to be that accountable engineering partner. Over nearly twenty years, we have continuously reinvested in our people, emerging technologies, and architectural rigor. Today, whether we are modernizing legacy ERP workflows or training localized LLMs for customer operations, our standard remains uncompromising.',
      ],
      imageBadge: '19+ Years of Trusted Engineering Delivery',
      stats: [
        { _key: 's1', value: '19+', label: 'Years in Business' },
        { _key: 's2', value: '250+', label: 'Delivered Projects' },
        { _key: 's3', value: '98%', label: 'On-Time Milestones' },
        { _key: 's4', value: '40+', label: 'Enterprise Clients' },
      ],
    },
    missionVision: {
      eyebrow: 'PURPOSE & ASPIRATION',
      heading: 'Engineered for Impact. Anchored in Integrity.',
      mission:
        'To empower forward-thinking enterprises with scalable software, intelligent automation, and dedicated engineering squads that accelerate growth and outpace disruption.',
      missionBadge: 'OUR MISSION',
      vision:
        'To be the world’s most trusted engineering partner for mission-critical software, recognized globally for technical excellence, engineering ethics, and human-centric innovation.',
      visionBadge: 'OUR VISION',
    },
    valuesHeader: {
      eyebrow: 'HOW WE OPERATE',
      heading: 'Core Values that Anchor Every Engagement',
      subheading:
        'Code is temporary; integrity and relationships endure. These four pillars guide every commit, review, and client interaction.',
    },
    values: [
      {
        _key: 'v1',
        title: 'Engineering Rigor',
        description:
          'We write software designed to last. Clean architecture, exhaustive automated testing, and comprehensive documentation are non-negotiable standards across all our pods.',
        icon: 'ShieldCheck',
      },
      {
        _key: 'v2',
        title: 'Radical Transparency',
        description:
          'No black-box development. Our clients enjoy direct access to engineers, real-time Jira/GitHub visibility, clear sprint burn-downs, and truthful risk reporting.',
        icon: 'Eye',
      },
      {
        _key: 'v3',
        title: 'Continuous Innovation',
        description:
          'We continually upskill in AI, cloud-native patterns, and performance optimization so our clients always benefit from the state of the art, not yesterday’s tech.',
        icon: 'Zap',
      },
      {
        _key: 'v4',
        title: 'Client-Centric Ownership',
        description:
          'We do not just execute tickets—we think like product owners. We challenge assumptions, suggest cost-saving alternatives, and obsess over business outcomes.',
        icon: 'Award',
      },
    ],
    teams: [
      { _key: 't1', name: 'Enterprise Cloud & Backend Pods', focus: 'Java, Spring Boot, Node.js, Python, AWS, Azure, Kafka' },
      { _key: 't2', name: 'Frontend & Experience Engineering', focus: 'React, Next.js, TypeScript, Tailwind, Micro-frontends' },
      { _key: 't3', name: 'AI & Machine Learning Squad', focus: 'Conversational Voice AI, LLMs, RAG, NLP, Computer Vision' },
      { _key: 't4', name: 'Quality Assurance & DevOps', focus: 'Automated Testing, Docker, Kubernetes, CI/CD Pipelines, SOC2' },
    ],
    culture: {
      heading: 'Engineering Squads Powered by Curiosity',
      description:
        'At Travash, our culture is rooted in mutual respect, continuous learning, and low bureaucracy. Senior architects mentor upcoming engineers, cross-functional squads share knowledge across domains, and every voice contributes to solution design.',
      cardHeading: 'Life at Travash',
      cardFooter: 'Curiosity • Collaboration • Excellence',
    },
    culturePillars: [
      {
        _key: 'cp1',
        title: 'Weekly Tech Guilds',
        description: 'Engineers demo new tools, discuss architectural trade-offs, and conduct internal hackathons.',
        icon: 'BookOpen',
      },
      {
        _key: 'cp2',
        title: 'Continuous Certification Support',
        description: 'Full sponsorship for AWS, Azure, Google Cloud, and AI engineering certifications.',
        icon: 'Sparkles',
      },
      {
        _key: 'cp3',
        title: 'Human-Centered Work Balance',
        description: 'Flexible hybrid arrangements, generous leave policies, and comprehensive health wellness coverage.',
        icon: 'Heart',
      },
    ],
    teamShowcase: {
      badge: 'TRAVASH TALENT & CULTURE',
      heading: 'Meet the Minds Behind the Architecture',
      description:
        'Our multidisciplinary squad of 50+ engineers, designers, cloud architects, and data scientists collaborate across time zones to build digital products that make an enduring difference.',
      highlights: [
        { _key: 'h1', label: 'Headquarters', value: 'Hyderabad, India', iconName: 'MapPin' },
        { _key: 'h2', label: 'Global Delivery', value: 'USA • UK • India', iconName: 'CheckCircle2' },
        { _key: 'h3', label: 'Engineering Bench', value: 'Full-Stack & Cloud Architects', iconName: 'Users' },
      ],
      ctaText: 'Explore Career Opportunities',
      ctaHref: '/career',
    },
    seo: {
      metaTitle: 'About Us — Leadership, History & Engineering Culture | Travash',
      metaDescription:
        'Learn about Travash Software Solutions. Founded in 2005, delivering high-impact software engineering, AI acceleration, and digital experiences worldwide.',
    },
  }

  console.log('Upserting About Page document (_id: aboutPage)...')
  await client.createOrReplace(aboutDoc)
  console.log('✅ About Page document created/updated successfully!')

  // 2. Seed Career Page
  const careerPageDoc = {
    _id: 'careerPage',
    _type: 'careerPage',
    hero: {
      eyebrow: 'CAREERS AT TRAVASH',
      heading: 'Travash is Built for Innovators.',
      description:
        'Travash is more than just a software company—it is a place where passionate developers, designers, and technologists come together to build innovative digital solutions. Work on real-world engineering problems with collaborative teams and limitless room for growth.',
      highlights: [
        { _key: 'h1', label: 'Coveted Work-Life Balance', icon: 'Trophy' },
        { _key: 'h2', label: 'Hybrid & Flexible Culture', icon: 'Users' },
        { _key: 'h3', label: '{count} Open Positions Available', icon: 'Briefcase' },
      ],
      primaryCTA: {
        label: 'View Open Positions',
        href: '#open-positions',
      },
      secondaryCTA: {
        label: 'Life at Travash',
        href: '#life-at-travash',
      },
    },
    benefitsSection: {
      eyebrow: 'WHY JOIN TRAVASH',
      heading: 'Perks Built Around People',
      description:
        'We provide the resources, freedom, and support you need to do your best work while enjoying life outside of it.',
      benefits: [
        {
          _key: 'b1',
          icon: 'Heart',
          title: 'Award-Winning Work-Life Balance',
          desc: 'We love our people and ensure they are supported at work and at home with flexible hours and generous leave policies.',
        },
        {
          _key: 'b2',
          icon: 'BookOpen',
          title: 'Continuous Learning & Upskilling',
          desc: 'Dedicated budget and company time for technical certifications, conferences, and mastery in AI, Cloud, and modern frameworks.',
        },
        {
          _key: 'b3',
          icon: 'Rocket',
          title: 'High-Impact Engineering',
          desc: 'Work on production systems utilized by global enterprises, fintech institutions, and critical public-sector initiatives.',
        },
        {
          _key: 'b4',
          icon: 'Users',
          title: 'Collaborative Squads',
          desc: 'Low bureaucracy, transparent communication, and supportive teammates who help you solve complex technical hurdles.',
        },
        {
          _key: 'b5',
          icon: 'Laptop',
          title: 'Modern Hardware & Tooling',
          desc: 'Latest M-series MacBooks, ergonomic setups, and access to premium developer tooling and AI copilots.',
        },
        {
          _key: 'b6',
          icon: 'ShieldCheck',
          title: 'Comprehensive Health & Wellness',
          desc: 'Premium medical coverage for you and your dependents, wellness programs, and mental health resources.',
        },
      ],
    },
    jobsSection: {
      eyebrow: 'JOIN OUR TEAM',
      heading: 'Explore Open Positions',
      description:
        'Find the role where you can make a tangible mark on enterprise software and scale your engineering capabilities.',
    },
    seo: {
      metaTitle: 'Careers — Engineering Opportunities & Culture | Travash',
      metaDescription:
        'Join Travash Software Solutions. Explore career opportunities in frontend, backend, Java, AI, and full-stack engineering in a high-growth environment.',
    },
  }

  console.log('Upserting Career Page document (_id: careerPage)...')
  await client.createOrReplace(careerPageDoc)
  console.log('✅ Career Page document created/updated successfully!')

  // 3. Seed Jobs
  const jobsToSeed = [
    {
      _id: 'job-php-developer',
      _type: 'job',
      title: 'PHP Developer',
      slug: { _type: 'slug', current: 'php-developer' },
      category: 'Backend Development',
      employmentType: 'Full-time',
      location: 'Hyderabad, India (Hybrid)',
      experience: '3-5 Years',
      salary: 'Competitive / Based on experience',
      shortDescription:
        'Architect, develop, and optimize scalable web platforms using PHP, Laravel, and MySQL for enterprise SaaS and eCommerce solutions.',
      overview:
        'We are looking for a skilled PHP Developer to join our backend engineering team. You will be responsible for developing robust web applications, building and consuming RESTful APIs, optimizing database queries, and collaborating with cross-functional teams to deliver secure, high-traffic software solutions.',
      responsibilities: [
        'Design, develop, and maintain clean, testable, and efficient PHP / Laravel codebases.',
        'Build resilient RESTful APIs for mobile and web frontend clients.',
        'Optimize complex MySQL queries, schemas, and indexing for low latency.',
        'Collaborate with frontend engineers and product managers in agile sprints.',
        'Conduct code reviews and ensure adherence to clean coding standards and security best practices.',
      ],
      requirements: [
        '3+ years of professional software development experience in PHP and Laravel.',
        'Strong proficiency with MySQL, query optimization, and relational database modeling.',
        'Working knowledge of Git, Linux environments, Docker, and CI/CD pipelines.',
        'Experience with REST APIs, authentication (OAuth/JWT), and third-party integrations.',
        'Strong analytical and problem-solving skills with attention to detail.',
      ],
      preferredSkills: [
        'Experience with Redis, Elasticsearch, or caching strategies.',
        'Knowledge of AWS or cloud infrastructure deployment.',
        'Familiarity with Vue.js or React is a plus.',
      ],
      benefits: [
        'Competitive compensation package',
        'Flexible hybrid working model',
        'Comprehensive health insurance',
        'Continuous learning & certification sponsorships',
        'Performance-based annual bonuses',
      ],
      active: true,
      order: 1,
      publishedAt: new Date().toISOString(),
      seo: {
        metaTitle: 'PHP Developer Opening in Hyderabad | Travash Careers',
        metaDescription:
          'Apply for the PHP Developer role at Travash Software Solutions. Join our backend team building Laravel enterprise applications.',
      },
    },
    {
      _id: 'job-frontend-developer',
      _type: 'job',
      title: 'Frontend Developer',
      slug: { _type: 'slug', current: 'frontend-developer' },
      category: 'Frontend Development',
      employmentType: 'Full-time',
      location: 'Hyderabad, India (Hybrid)',
      experience: '2-4 Years',
      salary: 'Competitive / Based on experience',
      shortDescription:
        'Build responsive, high-performance user interfaces using React, Next.js, TypeScript, and modern design systems with pixel-perfect fidelity.',
      overview:
        'We are seeking a passionate Frontend Developer to build fluid, high-performance web applications and digital experiences. You will translate UX wireframes and Figma designs into reusable, modular, and accessible components using React, Next.js, and TypeScript.',
      responsibilities: [
        'Develop modern, responsive web applications using React, Next.js, and TypeScript.',
        'Collaborate with UI/UX designers to translate Figma design tokens into clean code.',
        'Ensure web accessibility (WCAG), cross-browser compatibility, and SEO optimization.',
        'Optimize web performance, Core Web Vitals, and load times across mobile and desktop.',
        'Write unit and integration tests using Jest / React Testing Library.',
      ],
      requirements: [
        '2+ years of professional frontend engineering experience with React and modern JavaScript/TypeScript.',
        'Strong understanding of HTML5, modern CSS (Tailwind CSS), and responsive design.',
        'Experience with state management, Next.js App Router, and server-side rendering.',
        'Familiarity with Git version control and RESTful/GraphQL API consumption.',
      ],
      preferredSkills: [
        'Experience with animation libraries like Framer Motion.',
        'Knowledge of Headless CMS integration (Sanity, Contentful).',
        'Understanding of micro-frontends and modern bundling tooling.',
      ],
      benefits: [
        'Competitive compensation package',
        'Latest Apple MacBook Pro hardware setup',
        'Flexible working hours & hybrid schedule',
        'Health insurance for self and family',
        'Team retreats and hackathons',
      ],
      active: true,
      order: 2,
      publishedAt: new Date().toISOString(),
      seo: {
        metaTitle: 'Frontend Developer (React / Next.js) | Travash Careers',
        metaDescription:
          'Join Travash as a Frontend Developer building high-performance Next.js and TypeScript web applications.',
      },
    },
    {
      _id: 'job-java-developer',
      _type: 'job',
      title: 'Java Developer',
      slug: { _type: 'slug', current: 'java-developer' },
      category: 'Software Engineering',
      employmentType: 'Full-time',
      location: 'Hyderabad, India (Hybrid)',
      experience: '4-7 Years',
      salary: 'Competitive / Based on experience',
      shortDescription:
        'Design and deploy microservices architectures, RESTful APIs, and enterprise cloud solutions using Spring Boot, Kafka, and PostgreSQL.',
      overview:
        'We are looking for an experienced Java Developer to architect and develop enterprise-grade backend systems. You will work on distributed microservices, event-driven architectures, and high-concurrency transactional systems powering fintech, healthcare, and enterprise clients.',
      responsibilities: [
        'Architect, develop, and deploy scalable Java backend services using Spring Boot.',
        'Design event-driven workflows utilizing Apache Kafka or RabbitMQ.',
        'Build and secure RESTful microservices and GraphQL endpoints.',
        'Work closely with DevOps to containerize and deploy services on Kubernetes and AWS/Azure.',
        'Troubleshoot performance bottlenecks, memory leaks, and optimize multithreaded systems.',
      ],
      requirements: [
        '4+ years of solid experience in core Java (Java 11/17+) and Spring Boot ecosystem.',
        'Proven track record in building distributed microservices and enterprise REST APIs.',
        'Hands-on experience with relational databases (PostgreSQL, MySQL) and ORM frameworks (Hibernate/JPA).',
        'Familiarity with Docker, Kubernetes, and automated CI/CD pipelines.',
      ],
      preferredSkills: [
        'Experience with Apache Kafka, Redis, and event sourcing patterns.',
        'Knowledge of cloud platforms (AWS / Azure) and infrastructure security.',
        'Understanding of PLM systems or enterprise ERP integration.',
      ],
      benefits: [
        'Industry-leading compensation & annual incentives',
        'Hybrid work model with flexible scheduling',
        'Comprehensive medical & life insurance coverage',
        'Generous paid time off and parental leave',
        'Direct mentorship from seasoned enterprise architects',
      ],
      active: true,
      order: 3,
      publishedAt: new Date().toISOString(),
      seo: {
        metaTitle: 'Senior Java Developer Opening | Travash Careers',
        metaDescription:
          'Join Travash as an enterprise Java Developer building Spring Boot microservices, Kafka pipelines, and cloud systems.',
      },
    },
  ]

  for (const job of jobsToSeed) {
    console.log(`Upserting job document: ${job.title} (${job._id})...`)
    await client.createOrReplace(job)
    console.log(`✅ Job ${job.title} created/updated!`)
  }

  console.log('🎉 All About Us and Career documents seeded successfully in Sanity!')
}

seed().catch(err => {
  console.error('❌ Error during seed:', err)
  process.exit(1)
})
