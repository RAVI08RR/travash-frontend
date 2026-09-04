import { Metadata } from 'next'
import ServiceDetailPage, { generateMetadata as generateServiceMetadata } from '../services/[slug]/page'

export async function generateMetadata(): Promise<Metadata> {
  return generateServiceMetadata({ params: Promise.resolve({ slug: 'data-analytics-solutions' }) })
}

export default async function DataAnalyticsSolutionsPage() {
  return <ServiceDetailPage params={Promise.resolve({ slug: 'data-analytics-solutions' })} />
}
