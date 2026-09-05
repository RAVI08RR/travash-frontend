import { groq } from 'next-sanity'

const imageFragment = groq`
  {
    asset-> {
      _id,
      url,
      metadata {
        dimensions { width, height, aspectRatio },
        lqip
      }
    },
    alt,
    caption
  }
`

// Fetch all published portfolio projects with resolved references and fallback support
export const allPortfolioProjectsQuery = groq`
  *[_type in ["portfolioProject", "caseStudy"] && coalesce(status, "published") == "published" && coalesce(portfolioVisible, true) == true] | order(coalesce(displayOrder, portfolioOrder, 100) asc, _createdAt desc) {
    _id,
    _type,
    wordpressId,
    title,
    "slug": slug.current,
    shortTitle,
    "excerpt": coalesce(excerpt, shortDescription, cardDescription),
    "description": coalesce(description, shortDescription),
    projectUrl,
    originalWordPressUrl,
    publishedAt,
    "industry": select(
      defined(industry._ref) => industry->{ _id, title, "name": coalesce(title, name), "slug": slug.current },
      defined(industry) && count(*[_type == "industry" && _id == ^.industry]) > 0 => *[_type == "industry" && _id == ^.industry][0]{ _id, title, "name": coalesce(title, name), "slug": slug.current },
      defined(industry) && !(industry match "^[A-Za-z0-9_-]{18,}$") => { "title": industry, "name": industry, "slug": industry },
      defined(industries[0]._ref) => industries[0]->{ _id, title, "name": coalesce(title, name), "slug": slug.current },
      null
    ),
    "industryName": coalesce(industryName, industry),
    "services": select(
      defined(services[0]._ref) => services[]->{ _id, title, "slug": slug.current },
      defined(services[0].title) => services[] { _id, title, "slug": slug.current },
      defined(services[0]) && count(*[_type == "portfolioService" && _id in ^.services]) > 0 => *[_type == "portfolioService" && _id in ^.services]{ _id, title, "slug": slug.current },
      defined(serviceType) => [{ "title": serviceType, "slug": serviceType }],
      defined(category) => [{ "title": category, "slug": category }],
      []
    ),
    "technologies": select(
      defined(technologies[0]._ref) => technologies[]->{ _id, title, "name": coalesce(title, name), "slug": slug.current, icon ${imageFragment} },
      defined(technologies[0].title) => technologies[] { _id, title, "name": coalesce(title, name), "slug": slug.current },
      defined(technologies[0]) && count(*[_type == "technology" && _id in ^.technologies]) > 0 => *[_type == "technology" && _id in ^.technologies]{ _id, title, "name": coalesce(title, name), "slug": slug.current },
      defined(technologies) => technologies,
      []
    ),
    "techStack": coalesce(techStack, []),
    platform,
    year,
    client,
    location,
    "featuredImage": coalesce(featuredImage ${imageFragment}, cardImage ${imageFragment}, featureImage ${imageFragment}, heroImage ${imageFragment}),
    "cardImage": coalesce(cardImage ${imageFragment}, featuredImage ${imageFragment}, featureImage ${imageFragment}, heroImage ${imageFragment}),
    "heroImage": coalesce(heroImage ${imageFragment}, featuredImage ${imageFragment}, cardImage ${imageFragment}),
    "metrics": coalesce(metrics[] { value, label, description }, []),
    isFeatured,
    displayOrder
  }
`

// Fetch single portfolio project by slug
export const portfolioProjectBySlugQuery = groq`
  *[_type in ["portfolioProject", "caseStudy"] && slug.current == $slug][0] {
    _id,
    _type,
    wordpressId,
    title,
    "slug": slug.current,
    shortTitle,
    "excerpt": coalesce(excerpt, shortDescription, cardDescription),
    "description": coalesce(description, shortDescription),
    projectUrl,
    originalWordPressUrl,
    publishedAt,
    updatedAt,
    "industry": select(
      defined(industry._ref) => industry->{ _id, title, "name": coalesce(title, name), "slug": slug.current, description },
      defined(industry) && count(*[_type == "industry" && _id == ^.industry]) > 0 => *[_type == "industry" && _id == ^.industry][0]{ _id, title, "name": coalesce(title, name), "slug": slug.current, description },
      defined(industry) && !(industry match "^[A-Za-z0-9_-]{18,}$") => { "title": industry, "name": industry, "slug": industry },
      defined(industries[0]._ref) => industries[0]->{ _id, title, "name": coalesce(title, name), "slug": slug.current },
      null
    ),
    "industryName": coalesce(industryName, industry),
    serviceType,
    "services": select(
      defined(services[0]._ref) => services[]->{ _id, title, "slug": slug.current, description },
      defined(services[0].title) => services[] { _id, title, "slug": slug.current },
      defined(services[0]) && count(*[_type == "portfolioService" && _id in ^.services]) > 0 => *[_type == "portfolioService" && _id in ^.services]{ _id, title, "slug": slug.current, description },
      defined(serviceType) => [{ "title": serviceType, "slug": serviceType }],
      defined(category) => [{ "title": category, "slug": category }],
      []
    ),
    "technologies": select(
      defined(technologies[0]._ref) => technologies[]->{ _id, title, "name": coalesce(title, name), "slug": slug.current, icon ${imageFragment} },
      defined(technologies[0].title) => technologies[] { _id, title, "name": coalesce(title, name), "slug": slug.current },
      defined(technologies[0]) && count(*[_type == "technology" && _id in ^.technologies]) > 0 => *[_type == "technology" && _id in ^.technologies]{ _id, title, "name": coalesce(title, name), "slug": slug.current },
      defined(technologies) => technologies,
      []
    ),
    "techStack": coalesce(techStack, []),
    platform,
    year,
    client,
    location,
    "featuredImage": coalesce(featuredImage ${imageFragment}, cardImage ${imageFragment}, featureImage ${imageFragment}, heroImage ${imageFragment}),
    "cardImage": coalesce(cardImage ${imageFragment}, featuredImage ${imageFragment}, featureImage ${imageFragment}, heroImage ${imageFragment}),
    "heroImage": coalesce(heroImage ${imageFragment}, featuredImage ${imageFragment}, cardImage ${imageFragment}),
    "featureImage": coalesce(featureImage ${imageFragment}, featuredImage ${imageFragment}, cardImage ${imageFragment}),
    "gallery": coalesce(gallery[] ${imageFragment}, []),
    content,
    sections[] {
      heading,
      content,
      items
    },
    features[] {
      title,
      description
    },
    challenges[] {
      title,
      description
    },
    solutions[] {
      title,
      description
    },
    results[] {
      title,
      description
    },
    "metrics": coalesce(metrics[] { value, label, description }, []),
    testimonial {
      quote,
      name,
      designation,
      company,
      image ${imageFragment}
    },
    // Also include legacy case study fields if available for backward compatibility
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
    solution {
      title,
      intro,
      items[] { title, description }
    },
    impact {
      title,
      subtitle,
      content,
      outcomes
    },
    technologyStack[] {
      category,
      technologies,
      description
    },
    seo {
      metaTitle,
      metaDescription,
      canonicalUrl,
      ogTitle,
      ogDescription,
      ogImage ${imageFragment},
      noIndex
    },
    displayOrder,
    isFeatured,
    status
  }
`

// Featured projects for homepage and spotlights
export const featuredPortfolioProjectsQuery = groq`
  *[_type in ["portfolioProject", "caseStudy"] && (isFeatured == true || featured == true) && coalesce(status, "published") == "published" && coalesce(portfolioVisible, true) == true] | order(coalesce(displayOrder, portfolioOrder, 100) asc) [0...6] {
    _id,
    title,
    "slug": slug.current,
    "excerpt": coalesce(excerpt, shortDescription, cardDescription),
    "featuredImage": coalesce(featuredImage ${imageFragment}, cardImage ${imageFragment}, featureImage ${imageFragment}, heroImage ${imageFragment}),
    "cardImage": coalesce(cardImage ${imageFragment}, featuredImage ${imageFragment}, featureImage ${imageFragment}, heroImage ${imageFragment}),
    "heroImage": coalesce(heroImage ${imageFragment}, featuredImage ${imageFragment}, cardImage ${imageFragment}),
    "industry": select(
      defined(industry._ref) => industry->{ title, "name": coalesce(title, name), "slug": slug.current },
      defined(industry) && count(*[_type == "industry" && _id == ^.industry]) > 0 => *[_type == "industry" && _id == ^.industry][0]{ title, "name": coalesce(title, name), "slug": slug.current },
      defined(industry) && !(industry match "^[A-Za-z0-9_-]{18,}$") => { "title": industry, "name": industry, "slug": industry },
      null
    ),
    "services": select(
      defined(services[0]._ref) => services[]->{ title, "slug": slug.current },
      defined(services[0].title) => services[] { title, "slug": slug.current },
      defined(services[0]) && count(*[_type == "portfolioService" && _id in ^.services]) > 0 => *[_type == "portfolioService" && _id in ^.services]{ title, "slug": slug.current },
      []
    ),
    year,
    client
  }
`

// Distinct portfolio industries
export const portfolioIndustriesQuery = groq`
  *[_type == "industry"] | order(coalesce(title, name) asc) {
    _id,
    "title": coalesce(title, name),
    "slug": slug.current,
    description,
    "projectCount": count(*[_type == "portfolioProject" && coalesce(portfolioVisible, true) == true && (references(^._id) || industry == ^.name || industry == ^.title || industry == ^._id)])
  }
`

// Distinct portfolio services
export const portfolioServicesQuery = groq`
  *[_type == "portfolioService"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    "projectCount": count(*[_type == "portfolioProject" && coalesce(portfolioVisible, true) == true && (references(^._id) || ^._id in services)])
  }
`

// Distinct portfolio technologies
export const portfolioTechnologiesQuery = groq`
  *[_type == "technology"] | order(coalesce(title, name) asc) {
    _id,
    "title": coalesce(title, name),
    "slug": slug.current,
    category,
    icon ${imageFragment},
    "projectCount": count(*[_type == "portfolioProject" && coalesce(portfolioVisible, true) == true && (references(^._id) || ^._id in technologies)])
  }
`

// Related portfolio projects (by matching industry or services, excluding current slug)
export const relatedPortfolioProjectsQuery = groq`
  *[_type in ["portfolioProject", "caseStudy"] && slug.current != $currentSlug && coalesce(status, "published") == "published" && coalesce(portfolioVisible, true) == true] | order(_createdAt desc) [0...3] {
    _id,
    title,
    "slug": slug.current,
    "excerpt": coalesce(excerpt, shortDescription, cardDescription),
    "featuredImage": coalesce(featuredImage ${imageFragment}, cardImage ${imageFragment}, featureImage ${imageFragment}, heroImage ${imageFragment}),
    "cardImage": coalesce(cardImage ${imageFragment}, featuredImage ${imageFragment}, featureImage ${imageFragment}, heroImage ${imageFragment}),
    "heroImage": coalesce(heroImage ${imageFragment}, featuredImage ${imageFragment}, cardImage ${imageFragment}),
    "industry": select(
      defined(industry._ref) => industry->{ title, "name": coalesce(title, name), "slug": slug.current },
      defined(industry) && count(*[_type == "industry" && _id == ^.industry]) > 0 => *[_type == "industry" && _id == ^.industry][0]{ title, "name": coalesce(title, name), "slug": slug.current },
      defined(industry) && !(industry match "^[A-Za-z0-9_-]{18,}$") => { "title": industry, "name": industry, "slug": industry },
      null
    ),
    client,
    year
  }
`

// Search query
export const searchPortfolioProjectsQuery = groq`
  *[_type in ["portfolioProject", "caseStudy"] && coalesce(status, "published") == "published" && coalesce(portfolioVisible, true) == true && (
    title match $searchTerm + "*" ||
    excerpt match $searchTerm + "*" ||
    description match $searchTerm + "*" ||
    client match $searchTerm + "*"
  )] | order(coalesce(displayOrder, portfolioOrder, 100) asc) {
    _id,
    title,
    "slug": slug.current,
    "excerpt": coalesce(excerpt, shortDescription),
    "featuredImage": coalesce(featuredImage ${imageFragment}, cardImage ${imageFragment}, featureImage ${imageFragment}, heroImage ${imageFragment}),
    "cardImage": coalesce(cardImage ${imageFragment}, featuredImage ${imageFragment}, featureImage ${imageFragment}, heroImage ${imageFragment}),
    "heroImage": coalesce(heroImage ${imageFragment}, featuredImage ${imageFragment}, cardImage ${imageFragment}),
    "industry": select(
      defined(industry._ref) => industry->{ title, "name": coalesce(title, name), "slug": slug.current },
      defined(industry) && count(*[_type == "industry" && _id == ^.industry]) > 0 => *[_type == "industry" && _id == ^.industry][0]{ title, "name": coalesce(title, name), "slug": slug.current },
      defined(industry) && !(industry match "^[A-Za-z0-9_-]{18,}$") => { "title": industry, "name": industry, "slug": industry },
      null
    )
  }
`

// All portfolio slugs for static generation
export const allPortfolioSlugsQuery = groq`
  *[_type in ["portfolioProject", "caseStudy"] && defined(slug.current)] {
    "slug": slug.current
  }
`

// Query execution helper functions using client
import { client } from '@/lib/sanity'

export async function getAllPortfolioProjects() {
  return await client.fetch(allPortfolioProjectsQuery)
}

export async function getPortfolioProjectBySlug(slug: string) {
  return await client.fetch(portfolioProjectBySlugQuery, { slug })
}

export async function getFeaturedPortfolioProjects() {
  return await client.fetch(featuredPortfolioProjectsQuery)
}

export async function getPortfolioIndustries() {
  return await client.fetch(portfolioIndustriesQuery)
}

export async function getPortfolioServices() {
  return await client.fetch(portfolioServicesQuery)
}

export async function getPortfolioTechnologies() {
  return await client.fetch(portfolioTechnologiesQuery)
}

export async function getRelatedPortfolioProjects(currentSlug: string) {
  return await client.fetch(relatedPortfolioProjectsQuery, { currentSlug })
}

export async function searchPortfolioProjects(searchTerm: string) {
  return await client.fetch(searchPortfolioProjectsQuery, { searchTerm })
}

