import { groq } from 'next-sanity'

// Reusable image fragment with expanded asset reference
const imageFragment = `{
  ...,
  asset->{ _id, url, metadata { dimensions, lqip } }
}`

// Full home page query — fetches everything in one request
export const homePageQuery = groq`
  {
    "homePage": *[_type == "homePage"][0] {
      hero {
        eyebrowText,
        headingLine1,
        headingHighlight,
        headingLine2,
        subtext,
        primaryCta,
        secondaryCta,
        heroImage ${imageFragment},
        trustedByLabel,
        trustedByLogos[] {
          alt,
          image ${imageFragment}
        }
      },
      capabilities {
        heading,
        cards[] {
          iconName,
          icon ${imageFragment},
          title,
          description,
          ctaLabel,
          ctaHref
        }
      },
      caseStudies {
        heading,
        caseStudies[] {
          projectName,
          clientType,
          image ${imageFragment},
          outcomes[] { value, label },
          tags,
          clientName,
          clientLogo ${imageFragment},
          ctaLabel,
          ctaHref
        }
      },
      stats {
        stats[] { value, label }
      },
      introVideo {
        eyebrow,
        heading,
        videoThumbnail ${imageFragment},
        videoUrl
      },
      testimonials {
        heading,
        testimonials[] {
          quote,
          authorName,
          authorTitle,
          authorCompany,
          authorPhoto ${imageFragment}
        }
      },
      about {
        heading,
        paragraphs,
        image ${imageFragment},
        ctaLabel,
        ctaHref
      },
      industries {
        heading,
        industries[] {
          name,
          image ${imageFragment},
          href
        }
      },
      blog {
        heading,
        ctaLabel,
        ctaHref
      },
      contact {
        heading,
        subheading,
        sideImage ${imageFragment},
        submitLabel,
        successMessage,
        notifyEmail
      }
    },
    "siteSettings": *[_type == "siteSettings"][0] {
      logo ${imageFragment},
      navLinks[] { label, href },
      ctaLabel,
      ctaHref,
      footerLogo ${imageFragment},
      socialLinks[] { platform, url },
      menuLinks[] { label, href },
      serviceLinks[] { label, href },
      offices[] { label, address },
      contactEmail,
      contactPhone,
      copyrightText
    }
  }
`

// Recent blog posts (3 most recent)
export const recentPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    category,
    publishedAt,
    excerpt,
    coverImage ${imageFragment}
  }
`
