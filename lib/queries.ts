import { groq } from 'next-sanity'

// Reusable image fragment with expanded asset reference
const imageFragment = `{
  ...,
  asset->{ _id, url, metadata { dimensions, lqip } }
}`

// Full home page query — fetches everything in one request
export const homePageQuery = groq`
  {
    "homePage": {
      "hero": coalesce(
        *[_id == "heroSection"][0],
        *[_type == "heroSection"][0],
        *[_type == "homePage"][0].hero
      ) {
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
      "capabilities": coalesce(
        *[_id == "capabilitiesSection"][0],
        *[_type == "capabilitiesSection"][0],
        *[_type == "homePage"][0].capabilities
      ) {
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
      "caseStudies": coalesce(
        *[_id == "caseStudySection"][0],
        *[_type == "caseStudySection"][0],
        *[_type == "homePage"][0].caseStudies
      ) {
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
      "stats": coalesce(
        *[_id == "statsSection"][0],
        *[_type == "statsSection"][0],
        *[_type == "homePage"][0].stats
      ) {
        stats[] { value, label }
      },
      "introVideo": coalesce(
        *[_id == "introVideoSection"][0],
        *[_type == "introVideoSection"][0],
        *[_type == "homePage"][0].introVideo
      ) {
        eyebrow,
        heading,
        videoThumbnail ${imageFragment},
        videoUrl
      },
      "testimonials": coalesce(
        *[_id == "testimonialSection"][0],
        *[_type == "testimonialSection"][0],
        *[_type == "homePage"][0].testimonials
      ) {
        heading,
        testimonials[] {
          quote,
          authorName,
          authorTitle,
          authorCompany,
          authorPhoto ${imageFragment}
        }
      },
      "about": coalesce(
        *[_id == "aboutSection"][0],
        *[_type == "aboutSection"][0],
        *[_type == "homePage"][0].about
      ) {
        heading,
        paragraphs,
        image ${imageFragment},
        ctaLabel,
        ctaHref
      },
      "industries": coalesce(
        *[_id == "industriesSection"][0],
        *[_type == "industriesSection"][0],
        *[_type == "homePage"][0].industries
      ) {
        heading,
        industries[] {
          name,
          image ${imageFragment},
          href
        }
      },
      "blog": coalesce(
        *[_id == "blogSection"][0],
        *[_type == "blogSection"][0],
        *[_type == "homePage"][0].blog
      ) {
        heading,
        ctaLabel,
        ctaHref
      },
      "contact": coalesce(
        *[_id == "contactSection"][0],
        *[_type == "contactSection"][0],
        *[_type == "homePage"][0].contact
      ) {
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

// Fetch single case study by slug
export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    eyebrow,
    category,
    industry,
    client,
    location,
    shortDescription,
    heroImage ${imageFragment},
    projectMeta[] { label, value },
    metrics[] { value, label, description },
    executiveSummary {
      title,
      subtitle,
      paragraphs
    },
    challenge {
      title,
      subtitle,
      content,
      points
    },
    featureImage ${imageFragment},
    complexity {
      title,
      intro,
      items[] { title, description, icon }
    },
    approach {
      title,
      intro,
      steps[] { stepNumber, title, description }
    },
    solution {
      title,
      intro,
      items[] { title, description }
    },
    solutionArchitecture {
      title,
      intro,
      image ${imageFragment},
      caption
    },
    technologyStack[] {
      category,
      technologies,
      description
    },
    impact {
      title,
      subtitle,
      content,
      outcomes
    },
    beforeAfter {
      title,
      subtitle,
      beforeTitle,
      afterTitle,
      before,
      after
    },
    testimonial {
      quote,
      author,
      role,
      company,
      image ${imageFragment}
    },
    whyItMatters {
      title,
      subtitle,
      items
    },
    nextStep {
      heading,
      content,
      primaryCTA { label, href },
      secondaryCTA { label, href }
    },
    relatedServices[]-> {
      _id,
      title,
      "slug": slug.current,
      menuTitle,
      shortDescription
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage ${imageFragment}
    }
  }
`

// Query for generating static params for case studies
export const allCaseStudySlugsQuery = groq`
  *[_type == "caseStudy" && defined(slug.current)] {
    "slug": slug.current
  }
`

// Query for a single service by slug with resolved references
export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    "slug": slug.current,
    menuTitle,
    shortDescription,
    icon ${imageFragment},
    hero {
      eyebrow,
      title,
      description,
      primaryCTA { label, href },
      secondaryCTA { label, href },
      heroImage ${imageFragment},
      heroImageAlt,
      highlights
    },
    problemSection {
      label,
      title,
      headline,
      description,
      painPoints[] {
        title,
        description
      }
    },
    solutionOverview {
      heading,
      description,
      benefits[] {
        icon,
        title,
        description
      },
      cta { label, href }
    },
    capabilities[] {
      title,
      shortDescription,
      problem,
      solution,
      businessImpact,
      icon,
      technologies,
      optionalCTA { label, href }
    },
    process {
      heading,
      description,
      steps[] {
        number,
        title,
        description,
        icon
      }
    },
    relatedCaseStudies[]-> {
      _id,
      title,
      "slug": slug.current,
      category,
      client,
      shortDescription,
      heroImage ${imageFragment},
      featureImage ${imageFragment},
      metrics[] { value, label, description }
    },
    engagementModels[] {
      title,
      description,
      icon,
      badge,
      cta { label, href }
    },
    technologyStack[] {
      category,
      technologies,
      description
    },
    trustSection {
      heading,
      description,
      stats[] { value, label, description },
      trustPoints
    },
    testimonial {
      quote,
      author,
      role,
      company,
      badge,
      image ${imageFragment}
    },
    faqs[] {
      question,
      answer
    },
    finalCTA {
      heading,
      description,
      primaryCTA { label, href },
      secondaryCTA { label, href }
    },
    seo {
      metaTitle,
      metaDescription,
      ogImage ${imageFragment},
      canonicalUrl,
      noIndex
    }
  }
`

// Query for generating static params for all services
export const allServiceSlugsQuery = groq`
  *[_type == "service" && defined(slug.current)] {
    "slug": slug.current
  }
`


