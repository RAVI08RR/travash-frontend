import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { jobsQuery, siteSettingsQuery } from '@/lib/queries'

import Navbar from '@/components/sections/Navbar'
import CareerHero from '@/components/career/CareerHero'
import CareerBenefits from '@/components/career/CareerBenefits'
import JobList from '@/components/career/JobList'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Careers — Engineering Opportunities & Culture | Travash',
  description:
    'Join Travash Software Solutions. Explore career opportunities in frontend, backend, Java, AI, and full-stack engineering in a high-growth environment.',
}

const DEFAULT_JOBS = [
  {
    title: 'PHP Developer',
    slug: 'php-developer',
    category: 'Backend Development',
    employmentType: 'Full-time',
    location: 'Hyderabad, India (Hybrid)',
    experience: '3-5 Years',
    shortDescription:
      'Architect, develop, and optimize scalable web platforms using PHP, Laravel, and MySQL for enterprise SaaS and eCommerce solutions.',
  },
  {
    title: 'Frontend Developer',
    slug: 'frontend-developer',
    category: 'Frontend Development',
    employmentType: 'Full-time',
    location: 'Hyderabad, India (Hybrid)',
    experience: '2-4 Years',
    shortDescription:
      'Build responsive, high-performance user interfaces using React, Next.js, TypeScript, and modern design systems with pixel-perfect fidelity.',
  },
  {
    title: 'Java Developer',
    slug: 'java-developer',
    category: 'Software Engineering',
    employmentType: 'Full-time',
    location: 'Hyderabad, India (Hybrid)',
    experience: '4-7 Years',
    shortDescription:
      'Design and deploy microservices architectures, RESTful APIs, and enterprise cloud solutions using Spring Boot, Kafka, and PostgreSQL.',
  },
]

async function getCareerData() {
  try {
    const [jobs, siteSettings] = await Promise.all([
      client.fetch(jobsQuery),
      client.fetch(siteSettingsQuery),
    ])
    return {
      jobs: jobs && jobs.length > 0 ? jobs : DEFAULT_JOBS,
      siteSettings,
    }
  } catch {
    return {
      jobs: DEFAULT_JOBS,
      siteSettings: null,
    }
  }
}

export default async function CareerPage() {
  const { jobs, siteSettings } = await getCareerData()

  return (
    <>
      <Navbar settings={siteSettings} />
      <main>
        <CareerHero openPositionsCount={jobs.length} />
        <CareerBenefits />
        <JobList jobs={jobs} />
        <Testimonials />
        <Contact />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
