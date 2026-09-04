import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/lib/sanity'
import { jobBySlugQuery, allJobSlugsQuery, siteSettingsQuery } from '@/lib/queries'

import Navbar from '@/components/sections/Navbar'
import JobDetailContent, { JobDetailData } from '@/components/career/JobDetailContent'
import JobApplicationForm from '@/components/career/JobApplicationForm'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params: Promise<{ slug: string }>
}

const DEFAULT_JOB_DETAILS: Record<string, JobDetailData> = {
  'php-developer': {
    title: 'PHP Developer',
    slug: 'php-developer',
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
  },
  'frontend-developer': {
    title: 'Frontend Developer',
    slug: 'frontend-developer',
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
  },
  'java-developer': {
    title: 'Java Developer',
    slug: 'java-developer',
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
  },
}

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(allJobSlugsQuery)
    if (slugs && slugs.length > 0) {
      return slugs.map((s: { slug: string }) => ({ slug: s.slug }))
    }
  } catch {
    // fallback
  }
  return Object.keys(DEFAULT_JOB_DETAILS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  let jobData: JobDetailData | null = null

  try {
    jobData = await client.fetch(jobBySlugQuery, { slug })
  } catch {
    // fallback
  }

  if (!jobData && DEFAULT_JOB_DETAILS[slug]) {
    jobData = DEFAULT_JOB_DETAILS[slug]
  }

  if (!jobData) {
    return { title: 'Position Not Found | Travash Careers' }
  }

  return {
    title: `${jobData.title} — Careers at Travash`,
    description: jobData.shortDescription || `Apply for the ${jobData.title} opening at Travash Software Solutions.`,
  }
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params

  let job: JobDetailData | null = null
  let siteSettings: any = null

  try {
    const [fetchedJob, settings] = await Promise.all([
      client.fetch(jobBySlugQuery, { slug }),
      client.fetch(siteSettingsQuery),
    ])
    job = fetchedJob
    siteSettings = settings
  } catch {
    // continue to fallback
  }

  if (!job && DEFAULT_JOB_DETAILS[slug]) {
    job = DEFAULT_JOB_DETAILS[slug]
  }

  if (!job) {
    notFound()
  }

  return (
    <>
      <Navbar settings={siteSettings} />
      <main className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column: Job Details */}
            <div className="lg:col-span-7">
              <JobDetailContent job={job} />
            </div>

            {/* Right Column: Sticky Application Form */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <JobApplicationForm jobTitle={job.title} jobSlug={job.slug} />
            </div>
          </div>
        </div>
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
