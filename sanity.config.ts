import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

import React from 'react'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

function TravashStudioIcon() {
  return React.createElement('img', {
    src: 'https://travash.com/wp-content/uploads/2023/12/New-latest-logo.svg',
    alt: 'Travash',
    style: { height: '22px', width: 'auto', objectFit: 'contain' },
  })
}

function TravashStudioLogo() {
  return React.createElement(
    'div',
    {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '0 8px',
      },
    },
    React.createElement('img', {
      src: 'https://travash.com/wp-content/uploads/2023/12/New-latest-logo.svg',
      alt: 'Travash',
      style: { height: '26px', width: 'auto', objectFit: 'contain' },
    }),
    React.createElement(
      'span',
      {
        style: {
          fontWeight: 700,
          fontSize: '12px',
          color: '#0B4785',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        },
      },
      'Studio'
    )
  )
}

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Travash Software Solutions',
  icon: TravashStudioIcon,
  studio: {
    components: {
      logo: TravashStudioLogo,
    },
  },
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Expandable Home Page with Submenu Sections
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(
                S.list()
                  .title('Home Page Sections')
                  .items([
                    S.listItem()
                      .title('Hero Section')
                      .id('heroSection')
                      .child(
                        S.document()
                          .title('Hero Section')
                          .schemaType('heroSection')
                          .documentId('heroSection')
                      ),
                    S.listItem()
                      .title('Capabilities')
                      .id('capabilitiesSection')
                      .child(
                        S.document()
                          .title('Capabilities')
                          .schemaType('capabilitiesSection')
                          .documentId('capabilitiesSection')
                      ),
                    S.listItem()
                      .title('Case Studies')
                      .id('caseStudySection')
                      .child(
                        S.document()
                          .title('Case Studies')
                          .schemaType('caseStudySection')
                          .documentId('caseStudySection')
                      ),
                    S.listItem()
                      .title('Stats')
                      .id('statsSection')
                      .child(
                        S.document()
                          .title('Stats')
                          .schemaType('statsSection')
                          .documentId('statsSection')
                      ),
                    S.listItem()
                      .title('Intro Video')
                      .id('introVideoSection')
                      .child(
                        S.document()
                          .title('Intro Video')
                          .schemaType('introVideoSection')
                          .documentId('introVideoSection')
                      ),
                    S.listItem()
                      .title('Testimonials')
                      .id('testimonialSection')
                      .child(
                        S.document()
                          .title('Testimonials')
                          .schemaType('testimonialSection')
                          .documentId('testimonialSection')
                      ),
                    S.listItem()
                      .title('About Us')
                      .id('aboutSection')
                      .child(
                        S.document()
                          .title('About Us')
                          .schemaType('aboutSection')
                          .documentId('aboutSection')
                      ),
                    S.listItem()
                      .title('Industries We Serve')
                      .id('industriesSection')
                      .child(
                        S.document()
                          .title('Industries We Serve')
                          .schemaType('industriesSection')
                          .documentId('industriesSection')
                      ),
                    S.listItem()
                      .title('Contact Us')
                      .id('contactSection')
                      .child(
                        S.document()
                          .title('Contact Us')
                          .schemaType('contactSection')
                          .documentId('contactSection')
                      ),
                    S.divider(),
                    S.listItem()
                      .title('All Home Page Fields (Full Document)')
                      .id('homePageFull')
                      .child(
                        S.document()
                          .title('Home Page (All Fields)')
                          .schemaType('homePage')
                          .documentId('homePage')
                      ),
                  ])
              ),

            // Singleton: Site Settings
            S.listItem()
              .title('Site Settings (Navbar & Footer)')
              .id('siteSettings')
              .child(
                S.document()
                  .title('Site Settings')
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),

            S.divider(),

            // Blog Posts
            S.documentTypeListItem('post').title('Blog Posts'),
          ]),
    }),
    visionTool(),
  ],
})
