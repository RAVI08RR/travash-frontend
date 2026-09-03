import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

import React from 'react'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 's2k81yej'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

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
            // Singleton: Home Page
            S.listItem()
              .title('Home Page')
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage')
              ),
            // Singleton: Site Settings
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
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
