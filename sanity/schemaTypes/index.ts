import { siteSettings } from './siteSettings'
import { heroSection } from './heroSection'
import { capabilitiesSection } from './capabilitiesSection'
import { caseStudySection } from './caseStudySection'
import { statsSection } from './statsSection'
import { introVideoSection } from './introVideoSection'
import { testimonialSection } from './testimonialSection'
import { aboutSection } from './aboutSection'
import { industriesSection } from './industriesSection'
import { post, blogSection } from './post'
import { contactSection } from './contactSection'
import { homePage } from './homePage'
import { caseStudy } from './caseStudy'
import { service } from './service'

export const schemaTypes = [
  // Singletons / documents
  siteSettings,
  homePage,
  caseStudy,
  service,
  post,
  // Section objects
  heroSection,
  capabilitiesSection,
  caseStudySection,
  statsSection,
  introVideoSection,
  testimonialSection,
  aboutSection,
  industriesSection,
  blogSection,
  contactSection,
]
