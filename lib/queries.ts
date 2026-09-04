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

// Portfolio Page Query — fetches all portfolio case studies, industries, technologies, and shared sections
export const portfolioPageQuery = groq`
  {
    "projects": *[_type == "caseStudy" && coalesce(portfolioVisible, true) == true] | order(coalesce(portfolioOrder, 100) asc, _createdAt desc) {
      _id,
      title,
      "slug": slug.current,
      portfolioTitle,
      cardDescription,
      shortDescription,
      category,
      industry,
      projectType,
      "industries": coalesce(
        industries[]->name,
        industries
      ),
      "technologies": coalesce(
        technologies[]->name,
        technologies
      ),
      featured,
      portfolioOrder,
      portfolioVisible,
      caseStudyUrl,
      cardImage ${imageFragment},
      cardImageAlt,
      featureImage ${imageFragment},
      heroImage ${imageFragment},
      metrics[] { value, label }
    },
    "industries": *[_type == "industry"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      description
    },
    "technologies": *[_type == "technology"] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      category,
      icon ${imageFragment}
    },
    "pageData": {
      "stats": coalesce(
        *[_id == "statsSection"][0],
        *[_type == "statsSection"][0],
        *[_type == "homePage"][0].stats
      ) {
        stats[] { value, label }
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

// Query all industries for portfolio filter
export const allIndustriesQuery = groq`
  *[_type == "industry"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    description
  }
`

// Query all technologies
export const allTechnologiesQuery = groq`
  *[_type == "technology"] | order(order asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    category,
    "categoryTitle": categoryRef->title,
    icon ${imageFragment},
    description,
    website,
    featured,
    order
  }
`

// Query all technology categories
export const technologyCategoriesQuery = groq`
  *[_type == "technologyCategory"] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    order
  }
`

// About Page query
export const aboutPageQuery = groq`
  {
    "aboutPage": *[_type == "aboutPage"][0] {
      hero {
        eyebrow,
        heading,
        description,
        heroImage ${imageFragment}
      },
      story {
        heading,
        content
      },
      timeline[] {
        year,
        title,
        description
      },
      missionVision {
        missionTitle,
        missionDescription,
        visionTitle,
        visionDescription
      },
      values[] {
        title,
        description,
        iconName
      },
      leadership[] {
        name,
        role,
        experienceYears,
        bio,
        image ${imageFragment},
        linkedinUrl
      },
      teams {
        heading,
        description
      },
      culture {
        heading,
        description
      },
      seo {
        metaTitle,
        metaDescription
      }
    },
    "siteSettings": *[_type == "siteSettings"][0] {
      ...,
      logo ${imageFragment},
      footerLogo ${imageFragment}
    }
  }
`

// Jobs Queries
export const jobsQuery = groq`
  *[_type == "job" && active != false] | order(order asc, publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    employmentType,
    location,
    experience,
    salary,
    shortDescription,
    active,
    publishedAt
  }
`

export const jobBySlugQuery = groq`
  *[_type == "job" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    employmentType,
    location,
    experience,
    salary,
    shortDescription,
    overview,
    responsibilities,
    requirements,
    preferredSkills,
    benefits,
    active,
    publishedAt,
    seo {
      metaTitle,
      metaDescription
    }
  }
`

export const allJobSlugsQuery = groq`
  *[_type == "job" && defined(slug.current)] {
    "slug": slug.current
  }
`

// Blog Queries
export const blogsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage ${imageFragment},
    category,
    publishedAt,
    featured,
    tags,
    author {
      name,
      role,
      avatar ${imageFragment}
    }
  }
`

export const featuredBlogQuery = groq`
  *[_type == "post" && featured == true][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage ${imageFragment},
    category,
    publishedAt,
    author {
      name,
      role,
      avatar ${imageFragment}
    }
  }
`

export const blogBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    coverImage ${imageFragment},
    category,
    publishedAt,
    tags,
    author {
      name,
      role,
      avatar ${imageFragment}
    },
    body,
    relatedPosts[]-> {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      coverImage ${imageFragment},
      category,
      publishedAt
    },
    seo {
      metaTitle,
      metaDescription
    }
  }
`

export const allBlogSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`

export const blogCategoriesQuery = groq`
  array::unique(*[_type == "post" && defined(category)].category)
`

// Site Settings & Contact Query
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    ...,
    logo ${imageFragment},
    footerLogo ${imageFragment}
  }
`

// Unified Blog Queries (supports both new blogPost and existing post documents)
export const allBlogsUnifiedQuery = groq`
  *[_type in ["blogPost", "post"]] | order(publishedAt desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    "featuredImage": coalesce(featuredImage ${imageFragment}, coverImage ${imageFragment}),
    publishedAt,
    updatedAt,
    featured,
    wordpressId,
    originalWordPressUrl,
    "categories": select(
      defined(categories[0]._ref) => categories[]->{ _id, title, "slug": slug.current, description },
      defined(categories[0].title) => categories[] { _id, title, "slug": slug.current, description },
      defined(category) => [{ "title": category, "slug": category }]
    ),
    "tags": select(
      defined(tags[0]._ref) => tags[]->{ _id, title, "slug": slug.current },
      defined(tags[0].title) => tags[] { _id, title, "slug": slug.current },
      tags
    ),
    "author": select(
      defined(author._ref) => author->{ _id, name, "slug": slug.current, image ${imageFragment}, bio },
      defined(author.name) => {
        "name": author.name,
        "role": author.role,
        "image": coalesce(author.image ${imageFragment}, author.avatar ${imageFragment})
      }
    )
  }
`

export const blogBySlugUnifiedQuery = groq`
  *[_type in ["blogPost", "post"] && slug.current == $slug][0] {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    "featuredImage": coalesce(featuredImage ${imageFragment}, coverImage ${imageFragment}),
    publishedAt,
    updatedAt,
    featured,
    wordpressId,
    originalWordPressUrl,
    keywords,
    "content": coalesce(content, body),
    "categories": select(
      defined(categories[0]._ref) => categories[]->{ _id, title, "slug": slug.current, description },
      defined(categories[0].title) => categories[] { _id, title, "slug": slug.current, description },
      defined(category) => [{ "title": category, "slug": category }]
    ),
    "tags": select(
      defined(tags[0]._ref) => tags[]->{ _id, title, "slug": slug.current },
      defined(tags[0].title) => tags[] { _id, title, "slug": slug.current },
      tags
    ),
    "author": select(
      defined(author._ref) => author->{ _id, name, "slug": slug.current, image ${imageFragment}, bio },
      defined(author.name) => {
        "name": author.name,
        "role": author.role,
        "image": coalesce(author.image ${imageFragment}, author.avatar ${imageFragment})
      }
    ),
    seo {
      metaTitle,
      metaDescription,
      canonicalUrl,
      ogTitle,
      ogDescription,
      ogImage ${imageFragment},
      noIndex
    }
  }
`

export const featuredBlogsUnifiedQuery = groq`
  *[_type in ["blogPost", "post"] && featured == true] | order(publishedAt desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    "featuredImage": coalesce(featuredImage ${imageFragment}, coverImage ${imageFragment}),
    publishedAt,
    updatedAt,
    featured,
    "categories": select(
      defined(categories[0]._ref) => categories[]->{ _id, title, "slug": slug.current },
      defined(category) => [{ "title": category, "slug": category }]
    ),
    "author": select(
      defined(author._ref) => author->{ name, image ${imageFragment} },
      defined(author.name) => { "name": author.name, "image": author.avatar ${imageFragment} }
    )
  }
`

export const relatedBlogsUnifiedQuery = groq`
  *[_type in ["blogPost", "post"] && slug.current != $currentSlug] | order(publishedAt desc) [0...$limit] {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    "featuredImage": coalesce(featuredImage ${imageFragment}, coverImage ${imageFragment}),
    publishedAt,
    "categories": select(
      defined(categories[0]._ref) => categories[]->{ title, "slug": slug.current },
      defined(category) => [{ "title": category, "slug": category }]
    ),
    "author": select(
      defined(author._ref) => author->{ name, image ${imageFragment} },
      defined(author.name) => { "name": author.name, "image": author.avatar ${imageFragment} }
    )
  }
`

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "count": count(*[_type == "blogPost" && references(^._id)])
  }
`

export const allTagsQuery = groq`
  *[_type == "tag"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    "count": count(*[_type == "blogPost" && references(^._id)])
  }
`

export const allAuthorsQuery = groq`
  *[_type == "author"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    image ${imageFragment},
    bio
  }
`

export const searchBlogsUnifiedQuery = groq`
  *[_type in ["blogPost", "post"] && (title match $searchTerm || excerpt match $searchTerm || keywords[] match $searchTerm)] | order(publishedAt desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    excerpt,
    "featuredImage": coalesce(featuredImage ${imageFragment}, coverImage ${imageFragment}),
    publishedAt,
    "categories": select(
      defined(categories[0]._ref) => categories[]->{ title, "slug": slug.current },
      defined(category) => [{ "title": category, "slug": category }]
    ),
    "author": select(
      defined(author._ref) => author->{ name, image ${imageFragment} },
      defined(author.name) => { "name": author.name, "image": author.avatar ${imageFragment} }
    )
  }
`

export const allBlogSlugsUnifiedQuery = groq`
  *[_type in ["blogPost", "post"] && defined(slug.current)] {
    "slug": slug.current
  }
`




