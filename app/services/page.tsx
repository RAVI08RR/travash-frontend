import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'
import ServicesCatalogClient from '@/components/services/ServicesCatalogClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function generateMetadata(): Promise<Metadata> {
  try {
    const siteSettings = await client.fetch(siteSettingsQuery)
    const seo = siteSettings?.seo

    return {
      title: seo?.metaTitle || 'Enterprise Software & AI Engineering Services | Travash',
      description:
        seo?.metaDescription ||
        'Explore Travash software engineering practices: AI agent architectures, custom cloud platforms, data engineering pipelines, mobile applications, and dedicated agile teams.',
      alternates: {
        canonical: seo?.canonicalUrl || 'https://travash.com/services',
      },
      robots: seo?.noIndex ? { index: false, follow: false } : { index: true, follow: true },
      openGraph: {
        title: seo?.metaTitle || 'Enterprise Software & AI Engineering Services | Travash',
        description:
          seo?.metaDescription ||
          'Explore Travash software engineering practices: AI agent architectures, custom cloud platforms, data engineering pipelines, mobile applications, and dedicated agile teams.',
        url: seo?.canonicalUrl || 'https://travash.com/services',
        siteName: 'Travash Software Solutions',
        type: 'website',
      },
    }
  } catch {
    return {
      title: 'Enterprise Software & AI Engineering Services | Travash',
      description:
        'Explore Travash software engineering practices: AI agent architectures, custom cloud platforms, data engineering pipelines, mobile applications, and dedicated agile teams.',
    }
  }
}

export default async function ServicesListingPage() {
  const siteSettings = await client.fetch(siteSettingsQuery).catch(() => null)
  return <ServicesCatalogClient siteSettings={siteSettings} />
}
