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
import { technology } from './technology'
import { industry } from './industry'

import { aboutPage } from './aboutPage'
import { job } from './job'
import { technologyCategory } from './technologyCategory'

export const schemaTypes = [
  // Singletons / documents
  siteSettings,
  homePage,
  aboutPage,
  caseStudy,
  service,
  technology,
  technologyCategory,
  industry,
  post,
  job,
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
