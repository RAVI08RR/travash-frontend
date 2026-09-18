import { defineType, defineField } from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Us Page',
  type: 'document',
  fields: [
    // -------------------------------------------------------------
    // 1. HERO SECTION
    // -------------------------------------------------------------
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'ABOUT TRAVASH' }),
        defineField({
          name: 'heading',
          title: 'Heading (H1)',
          type: 'string',
          initialValue:
            'We are a team of great innovators, creators and differentiators with exceptional high standards.',
        }),
        defineField({
          name: 'description',
          title: 'Supporting Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Founded in 2005 with a clear vision: to transform technology from a business cost center into a powerful engine of growth, scalability, and competitive advantage for enterprises worldwide.',
        }),
        defineField({
          name: 'credibilityBadges',
          title: 'Credibility Badges (Below Description)',
          type: 'array',
          of: [{ type: 'string' }],
          initialValue: ['Founded in 2005', '90%+ Client Retention', '500+ Delivered Solutions'],
        }),
        defineField({
          name: 'primaryCTA',
          title: 'Primary CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Button Text', type: 'string', initialValue: 'Speak with Our Team' }),
            defineField({ name: 'href', title: 'Target Link', type: 'string', initialValue: '/contact-us' }),
          ],
        }),
        defineField({
          name: 'secondaryCTA',
          title: 'Secondary CTA Button',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Button Text', type: 'string', initialValue: 'Explore Careers & Team' }),
            defineField({ name: 'href', title: 'Target Link', type: 'string', initialValue: '/career' }),
          ],
        }),
        defineField({
          name: 'heroImage',
          title: 'Hero / Team Image (Optional fallback)',
          type: 'image',
          options: { hotspot: true },
        }),
      ],
    }),

    // -------------------------------------------------------------
    // 2. LEADERSHIP SECTION
    // -------------------------------------------------------------
    defineField({
      name: 'leadershipHeader',
      title: 'Leadership Section Header',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'EXECUTIVE LEADERSHIP' }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Guiding Vision & Engineering Rigor',
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading / Description',
          type: 'text',
          rows: 2,
          initialValue:
            'Hands-on technology stewardship backed by decades of enterprise software consulting and industrial innovation.',
        }),
      ],
    }),
    defineField({
      name: 'leadership',
      title: 'Leadership Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Full Name', type: 'string' }),
            defineField({ name: 'role', title: 'Role / Designation', type: 'string' }),
            defineField({ name: 'experienceYears', title: 'Experience Summary (e.g. 24+ Years IT Leadership)', type: 'string' }),
            defineField({ name: 'bio', title: 'Biography', type: 'text', rows: 4 }),
            defineField({ name: 'image', title: 'Profile Photo', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'linkedinUrl', title: 'LinkedIn Profile URL', type: 'url' }),
            defineField({
              name: 'highlights',
              title: 'Experience Highlights (e.g. Satyam • GE • John Deere)',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: { title: 'name', subtitle: 'role', media: 'image' },
          },
        },
      ],
    }),

    // -------------------------------------------------------------
    // 3. COMPANY TIMELINE
    // -------------------------------------------------------------
    defineField({
      name: 'timelineHeader',
      title: 'Timeline Section Header',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'COMPANY TIMELINE' }),
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Our Journey of Continuous Innovation',
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading / Description',
          type: 'text',
          rows: 2,
          initialValue:
            'Two decades of delivering mission-critical enterprise engineering, cloud transformation, and AI-accelerated business velocity worldwide.',
        }),
      ],
    }),
    defineField({
      name: 'timeline',
      title: 'Company Journey Milestones',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'year', title: 'Year / Era (e.g. 2005, 2010, Today)', type: 'string' }),
            defineField({ name: 'title', title: 'Milestone Title', type: 'string' }),
            defineField({ name: 'phase', title: 'Phase / Tagline (e.g. Genesis & Foundation)', type: 'string' }),
            defineField({ name: 'metrics', title: 'Key Metric Badge (e.g. 500+ Projects & 250+ Clients)', type: 'string' }),
            defineField({ name: 'description', title: 'Detailed Description', type: 'text', rows: 3 }),
            defineField({
              name: 'highlights',
              title: 'Bullet Points / Key Achievements',
              type: 'array',
              of: [{ type: 'string' }],
            }),
          ],
          preview: {
            select: { title: 'year', subtitle: 'title' },
          },
        },
      ],
    }),

    // -------------------------------------------------------------
    // 4. STORY & HERITAGE
    // -------------------------------------------------------------
    defineField({
      name: 'story',
      title: 'Company Story & Heritage',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'OUR HERITAGE & VISION' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'How Our Vision Became Reality' }),
        defineField({ name: 'image', title: 'Story / Vision Image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'imageBadge', title: 'Image Overlay Badge', type: 'string', initialValue: 'Global Engineering & AI Lab' }),
        defineField({
          name: 'content',
          title: 'Story Paragraphs',
          type: 'array',
          of: [{ type: 'text', rows: 3 }],
        }),
        defineField({
          name: 'stats',
          title: 'Story Counter Badges',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'value', title: 'Stat Value (e.g. 2005, 500+, 90%+)', type: 'string' }),
                defineField({ name: 'label', title: 'Stat Label', type: 'string' }),
              ],
              preview: {
                select: { title: 'value', subtitle: 'label' },
              },
            },
          ],
        }),
      ],
    }),

    // -------------------------------------------------------------
    // 5. MISSION & VISION
    // -------------------------------------------------------------
    defineField({
      name: 'missionVision',
      title: 'Mission & Vision Section',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'PURPOSE & DIRECTION' }),
        defineField({ name: 'heading', title: 'Section Title', type: 'string', initialValue: 'Defining Our Purpose: Mission & Vision' }),
        defineField({
          name: 'missionTitle',
          title: 'Mission Title',
          type: 'string',
          initialValue: 'Our Mission',
        }),
        defineField({
          name: 'missionDescription',
          title: 'Mission Description',
          type: 'text',
          rows: 3,
          initialValue:
            'To empower global enterprises, forward-thinking startups, and public-sector institutions with production-grade digital solutions, transforming software from an operational cost into a sustainable profit and growth driver.',
        }),
        defineField({
          name: 'missionBadge',
          title: 'Mission Footer Badge',
          type: 'string',
          initialValue: 'Engineering excellence with measurable ROI',
        }),
        defineField({
          name: 'visionTitle',
          title: 'Vision Title',
          type: 'string',
          initialValue: 'Our Vision',
        }),
        defineField({
          name: 'visionDescription',
          title: 'Vision Description',
          type: 'text',
          rows: 3,
          initialValue:
            'To be the world’s most trusted technology partner, renowned for engineering rigor, innovative AI acceleration, and enduring client partnerships exceeding 90% retention.',
        }),
        defineField({
          name: 'visionBadge',
          title: 'Vision Footer Badge',
          type: 'string',
          initialValue: 'Built for high-trust, multi-year technological leadership',
        }),
      ],
    }),

    // -------------------------------------------------------------
    // 6. CORE VALUES
    // -------------------------------------------------------------
    defineField({
      name: 'valuesHeader',
      title: 'Values Section Header',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'WHAT GUIDES US' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Our Core Values' }),
        defineField({
          name: 'subheading',
          title: 'Subheading / Description',
          type: 'text',
          rows: 2,
          initialValue:
            'The enduring principles that define how we build software, collaborate with clients, and nurture talent.',
        }),
      ],
    }),
    defineField({
      name: 'values',
      title: 'Core Values List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
            defineField({ name: 'iconName', title: 'Lucide Icon Name (e.g. Shield, Award, Users, HeartHandshake, Globe, Sparkles)', type: 'string' }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
    }),

    // -------------------------------------------------------------
    // 7. TEAMS & CULTURE
    // -------------------------------------------------------------
    defineField({
      name: 'teams',
      title: 'Our Teams Header',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'THE PEOPLE BEHIND TRAVASH' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Our Teams' }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'At Travash Software Solutions, our team is the backbone of our success. We are a passionate group of developers, designers, and innovators dedicated to building cutting-edge software solutions that drive businesses forward.',
        }),
      ],
    }),
    defineField({
      name: 'culture',
      title: 'Our Culture Header & Card',
      type: 'object',
      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string', initialValue: 'Our Culture' }),
        defineField({
          name: 'cardHeading',
          title: 'Culture Card Heading',
          type: 'string',
          initialValue: 'Fostering an Environment Where Great Engineers Thrive',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'At Travash, we cultivate a culture of innovation, excellence, and collaboration. Our team thrives on cutting-edge technology, problem-solving, and client-centric strategies. We empower talent, embrace diversity, and drive digital transformation with passion and purpose—delivering impact that lasts.',
        }),
        defineField({
          name: 'cardFooter',
          title: 'Card Footer Highlights',
          type: 'string',
          initialValue: 'Work-Life Balance • Psychological Safety • High Velocity',
        }),
      ],
    }),
    defineField({
      name: 'culturePillars',
      title: 'Culture Pillars',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Pillar Title', type: 'string' }),
            defineField({ name: 'desc', title: 'Pillar Description', type: 'text', rows: 2 }),
            defineField({ name: 'iconName', title: 'Icon Name (e.g. Code2, Lightbulb, Users2, Rocket)', type: 'string' }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'desc' },
          },
        },
      ],
    }),

    // -------------------------------------------------------------
    // 8. TEAM SHOWCASE CARD
    // -------------------------------------------------------------
    defineField({
      name: 'teamShowcase',
      title: 'Dedicated Team Showcase Card',
      type: 'object',
      fields: [
        defineField({ name: 'badge', title: 'Badge Label', type: 'string', initialValue: 'The Minds Behind Travash' }),
        defineField({
          name: 'heading',
          title: 'Card Heading',
          type: 'string',
          initialValue: 'High-Impact Engineers & Technology Leaders',
        }),
        defineField({
          name: 'description',
          title: 'Card Description',
          type: 'text',
          rows: 3,
          initialValue:
            'Decades of combined engineering excellence delivering mission-critical web, mobile, AI, and enterprise platforms globally.',
        }),
        defineField({ name: 'image', title: 'Team Showcase Image', type: 'image', options: { hotspot: true } }),
        defineField({
          name: 'highlights',
          title: 'Card Highlights / Badges',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'label', title: 'Badge Category', type: 'string' }),
                defineField({ name: 'value', title: 'Badge Text', type: 'string' }),
                defineField({ name: 'iconName', title: 'Icon (MapPin, CheckCircle2, Users)', type: 'string' }),
              ],
              preview: {
                select: { title: 'label', subtitle: 'value' },
              },
            },
          ],
        }),
        defineField({ name: 'ctaText', title: 'CTA Button Text', type: 'string', initialValue: 'Explore Careers & Team' }),
        defineField({ name: 'ctaHref', title: 'CTA Link', type: 'string', initialValue: '/career' }),
      ],
    }),

    // -------------------------------------------------------------
    // 9. SEO
    // -------------------------------------------------------------
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle', title: 'Meta Title', type: 'string' }),
        defineField({ name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 }),
        defineField({ name: 'ogImage', title: 'OpenGraph Image', type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
})
