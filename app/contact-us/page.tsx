import { Metadata } from 'next'
import { client } from '@/lib/sanity'
import { siteSettingsQuery } from '@/lib/queries'

import Navbar from '@/components/sections/Navbar'
import ContactHero from '@/components/contact/ContactHero'
import ContactPageLayout from '@/components/contact/ContactPageLayout'
import Footer from '@/components/sections/Footer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export const metadata: Metadata = {
  title: 'Contact Us — Global Offices in India & Dubai | Travash',
  description:
    'Get in touch with Travash Software Solutions. Contact our software engineering and AI consulting teams in Hyderabad, India and Sharjah, UAE.',
}

async function getContactData() {
  try {
    const siteSettings = await client.fetch(siteSettingsQuery)
    return { siteSettings }
  } catch {
    return { siteSettings: null }
  }
}

export default async function ContactUsPage() {
  const { siteSettings } = await getContactData()

  return (
    <>
      <Navbar settings={siteSettings} />
      <main className="bg-white">
        <ContactHero />
        <ContactPageLayout
          email={siteSettings?.contactEmail || 'contact@travash.com'}
          phone={siteSettings?.contactPhone || '(+91) 7416743434'}
          offices={siteSettings?.offices}
          socialLinks={siteSettings?.socialLinks}
        />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
