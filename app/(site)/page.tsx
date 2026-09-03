import { client } from '@/lib/sanity'
import { homePageQuery, recentPostsQuery } from '@/lib/queries'

import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import TrustedBy from '@/components/sections/TrustedBy'
import Capabilities from '@/components/sections/Capabilities'
import CaseStudies from '@/components/sections/CaseStudies'
import Stats from '@/components/sections/Stats'
import IntroVideo from '@/components/sections/IntroVideo'
import Testimonials from '@/components/sections/Testimonials'
import About from '@/components/sections/About'
import Industries from '@/components/sections/Industries'
import BlogSection from '@/components/sections/BlogSection'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

// Revalidate every 60 seconds (ISR)
export const revalidate = 60

async function getPageData() {
  try {
    const [pageData, posts] = await Promise.all([
      client.fetch(homePageQuery),
      client.fetch(recentPostsQuery),
    ])
    return { pageData, posts }
  } catch {
    // Return null data if Sanity is not configured — fallback to defaults in components
    return { pageData: null, posts: [] }
  }
}

export default async function HomePage() {
  const { pageData, posts } = await getPageData()

  const homePage = pageData?.homePage
  const siteSettings = pageData?.siteSettings

  return (
    <>
      <Navbar settings={siteSettings} />
      <main>
        <Hero data={homePage?.hero} />
        <TrustedBy
          label={homePage?.hero?.trustedByLabel}
          logos={homePage?.hero?.trustedByLogos}
        />
        <Capabilities data={homePage?.capabilities} />
        <CaseStudies data={homePage?.caseStudies} />
        <Stats data={homePage?.stats} />
        <IntroVideo data={homePage?.introVideo} />
        <Testimonials data={homePage?.testimonials} />
        <About data={homePage?.about} />
        <Industries data={homePage?.industries} />
        <BlogSection sectionData={homePage?.blog} posts={posts} />
        <Contact data={homePage?.contact} />
      </main>
      <Footer settings={siteSettings} />
    </>
  )
}
