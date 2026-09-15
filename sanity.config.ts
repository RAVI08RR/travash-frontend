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

const customStructure = (S: any) =>
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
                .title('Trusted By (Client Logos)')
                .id('trustedBySection')
                .child(
                  S.document()
                    .title('Trusted By (Client Logos)')
                    .schemaType('trustedBySection')
                    .documentId('trustedBySection')
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

      // Media Library (Centralized Reusable Assets)
      S.listItem()
        .title('Media Library')
        .id('mediaLibrary')
        .child(
          S.list()
            .title('Media Library & Bulk Upload')
            .items([
              S.listItem()
                .title('⚡ Bulk Image Upload (Drag & Drop Batches)')
                .id('bulkMediaUpload')
                .child(
                  S.documentTypeList('bulkMediaUpload')
                    .title('Bulk Image Upload Batches')
                ),
              S.divider(),
              S.listItem()
                .title('All Media Assets')
                .id('allMedia')
                .child(
                  S.documentTypeList('mediaItem')
                    .title('All Media Assets')
                ),
              S.listItem()
                .title('Images (PNG, WebP, JPG, GIF)')
                .id('mediaImages')
                .child(
                  S.documentList()
                    .title('Images')
                    .apiVersion('2024-01-01')
                    .filter('_type == "mediaItem" && (mediaType == "image" || image.asset._ref match "*-png*" || image.asset._ref match "*-webp*" || image.asset._ref match "*-jpg*" || image.asset._ref match "*-jpeg*" || image.asset._ref match "*-gif*")')
                ),
              S.listItem()
                .title('Vector & SVGs (Icons & Logos)')
                .id('mediaVectors')
                .child(
                  S.documentList()
                    .title('Vector & SVGs')
                    .apiVersion('2024-01-01')
                    .filter('_type == "mediaItem" && (mediaType == "icon" || mediaType == "logo" || image.asset._ref match "*-svg*")')
                ),
              S.listItem()
                .title('Client & Partner Logos')
                .id('mediaLogos')
                .child(
                  S.documentList()
                    .title('Logos')
                    .apiVersion('2024-01-01')
                    .filter('_type == "mediaItem" && (mediaType == "logo" || category == "client-logos")')
                ),
              S.listItem()
                .title('Videos (MP4, WebM, MOV)')
                .id('mediaVideos')
                .child(
                  S.documentList()
                    .title('Videos')
                    .apiVersion('2024-01-01')
                    .filter('_type == "mediaItem" && (mediaType == "video" || file.asset._ref match "*-mp4*" || file.asset._ref match "*-webm*" || file.asset._ref match "*-mov*")')
                ),
              S.listItem()
                .title('Documents & PDFs')
                .id('mediaDocuments')
                .child(
                  S.documentList()
                    .title('Documents & PDFs')
                    .apiVersion('2024-01-01')
                    .filter('_type == "mediaItem" && (mediaType == "document" || file.asset._ref match "*-pdf*" || file.asset._ref match "*-doc*")')
                ),
              S.listItem()
                .title('Other Assets')
                .id('mediaOther')
                .child(
                  S.documentList()
                    .title('Other Assets')
                    .apiVersion('2024-01-01')
                    .filter('_type == "mediaItem" && (mediaType == "other" || !defined(mediaType))')
                ),
            ])
        ),

      // Services
      S.documentTypeListItem('service').title('Services'),

      // Case Studies Listing Page (Hero & Page Content)
      S.listItem()
        .title('Case Studies Listing Page')
        .id('caseStudiesPage')
        .child(
          S.document()
            .title('Case Studies Listing Page')
            .schemaType('caseStudiesPage')
            .documentId('caseStudiesPage')
        ),

      // Case Studies (Detail Pages)
      S.documentTypeListItem('caseStudy').title('Case Studies (Detail Pages)'),

      // Technologies
      S.documentTypeListItem('technology').title('Technologies'),

      // Industries
      S.documentTypeListItem('industry').title('Industries'),

      S.divider(),

      // Blog System
      S.documentTypeListItem('blogPost').title('Blog Posts (WordPress Migrated)'),
      S.documentTypeListItem('category').title('Blog Categories'),
      S.documentTypeListItem('tag').title('Blog Tags'),
      S.documentTypeListItem('author').title('Blog Authors'),
      S.documentTypeListItem('post').title('Legacy Posts'),
    ])

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
      structure: customStructure,
    }),
    visionTool(),
  ],
})
