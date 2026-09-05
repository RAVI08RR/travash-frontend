'use client'

import { motion } from 'framer-motion'
import StackIcon from 'tech-stack-icons'

export interface TechnologyCategory {
  category: string
  technologies: string[]
  description?: string
}

interface TechnologyStackProps {
  title?: string
  subtitle?: string
  items?: TechnologyCategory[]
}

// Comprehensive dictionary mapping tech terms to valid tech-stack-icons names
const TECH_ICON_MAP: Record<string, string> = {
  // Frontend Frameworks & Languages
  react: 'reactjs',
  'react.js': 'reactjs',
  'react js': 'reactjs',
  'react native': 'reactjs',
  next: 'nextjs',
  'next.js': 'nextjs',
  'next js': 'nextjs',
  vue: 'vuejs',
  'vue.js': 'vuejs',
  angular: 'angular',
  html: 'html5',
  html5: 'html5',
  css: 'css3',
  css3: 'css3',
  javascript: 'js',
  js: 'js',
  typescript: 'typescript',
  ts: 'typescript',
  tailwind: 'tailwindcss',
  'tailwind css': 'tailwindcss',
  tailwindcss: 'tailwindcss',
  jquery: 'jquery',
  sass: 'sass',
  framer: 'framer',
  'framer motion': 'framer',
  bootstrap: 'bootstrap5',
  vite: 'vitejs',
  webpack: 'webpack',
  svelte: 'svelte',

  // Backend & Languages
  node: 'nodejs',
  'node.js': 'nodejs',
  nodejs: 'nodejs',
  express: 'expressjs',
  'express.js': 'expressjs',
  python: 'python',
  django: 'django',
  flask: 'flask',
  fastapi: 'fastapi',
  java: 'java',
  spring: 'spring',
  'spring boot': 'spring',
  php: 'php',
  laravel: 'laravel',
  'php-laravel': 'laravel',
  go: 'go',
  golang: 'go',
  rust: 'rust',
  csharp: 'csharp',
  'c#': 'csharp',
  dotnet: 'dotnet',
  '.net': 'dotnet',
  ruby: 'ruby',
  rails: 'rubyonrails',

  // Databases & Caches
  mysql: 'mysql',
  'mysql enterprise': 'mysql',
  postgresql: 'postgresql',
  postgres: 'postgresql',
  mongodb: 'mongodb',
  mongo: 'mongodb',
  redis: 'redis',
  'redis cache': 'redis',
  sqlite: 'sqlite',
  supabase: 'supabase',
  firebase: 'firebase',
  elasticsearch: 'elasticsearch',
  graphql: 'graphql',
  prisma: 'prisma',

  // Cloud, DevOps & Tools
  aws: 'aws',
  'aws s3': 'aws',
  gcp: 'gcp',
  'google cloud': 'gcp',
  azure: 'azure',
  docker: 'docker',
  kubernetes: 'kubernetes',
  k8s: 'kubernetes',
  nginx: 'nginx',
  apache: 'apache',
  linux: 'linux',
  ubuntu: 'ubuntu',
  vercel: 'vercel',
  cloudflare: 'cloudflare',
  kafka: 'kafka',
  rabbitmq: 'rabbitmq',
  git: 'git',
  github: 'github',
  gitlab: 'gitlab',

  // Integrations, APIs & AI
  openai: 'openai',
  'gpt-4': 'openai',
  gpt: 'openai',
  stripe: 'stripe',
  twilio: 'twilio',
  hubspot: 'hubspot',
  figma: 'figma',
  android: 'android',
  postman: 'postman',
}

// Helper to resolve an icon name from a technology string
function resolveTechIcon(tech: string): string | null {
  const clean = tech.toLowerCase().trim()

  // 1. Direct match
  if (TECH_ICON_MAP[clean]) {
    return TECH_ICON_MAP[clean]
  }

  // 2. Substring / Word match
  for (const [pattern, iconName] of Object.entries(TECH_ICON_MAP)) {
    const escaped = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`(^|\\b|\\s|_|-)${escaped}(\\b|\\s|_|-|$)`, 'i')
    if (regex.test(clean)) {
      return iconName
    }
  }

  return null
}

const DEFAULT_FALLBACK_STACK: TechnologyCategory[] = [
  {
    category: 'Backend Architecture',
    technologies: ['Java', 'Laravel'],
  },
  {
    category: 'Database Infrastructure',
    technologies: ['MySQL Enterprise'],
  },
  {
    category: 'Frontend Interface',
    technologies: ['HTML5', 'CSS3', 'jQuery'],
  },
  {
    category: 'Advanced Integrations & AI Automation',
    technologies: [
      'DARPAN technology, AFIS (Automated Fingerprint Identification System)',
      'Artificial Intelligence, Automated Data Extraction, Advanced Facial Recognition, Real-Time Matching',
    ],
  },
]

export default function TechnologyStack({
  title = 'Enterprise\nTechnology Stack',
  subtitle = 'To deliver a robust custom software solution capable of processing millions of records securely, we utilised a highly resilient tech stack:',
  items,
}: TechnologyStackProps) {
  const stackCategories = items && items.length > 0 ? items : DEFAULT_FALLBACK_STACK
  const titleLines = title.split('\n')

  return (
    <section
      id="technology-stack"
      className="py-14 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100 overflow-hidden"
    >
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-28 self-start"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#0F172A] tracking-[-1px] leading-[1.12]">
              {titleLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </motion.div>

          {/* Right Column: Dynamic Cards with tech-stack-icons matching Screenshot 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 flex flex-col gap-6"
          >
            {subtitle && (
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-normal">
                {subtitle}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stackCategories.map((cat, idx) => {
                // Classify items into icon-backed technologies and text/integration pills
                const iconItems: { original: string; icon: string }[] = []
                const pillItems: string[] = []

                cat.technologies.forEach((tech) => {
                  const iconName = resolveTechIcon(tech)
                  // If it's a long descriptive sentence (> 30 chars), treat as pill
                  if (iconName && tech.length <= 32) {
                    iconItems.push({ original: tech, icon: iconName })
                  } else {
                    pillItems.push(tech)
                  }
                })

                return (
                  <div
                    key={idx}
                    className="bg-[#F4F6FB] rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-between min-h-[170px] border border-gray-100/70"
                  >
                    {/* Category Title in Uppercase Bold Blue */}
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#0B3B66] text-center mb-4 sm:mb-5">
                      {cat.category}
                    </h3>

                    <div className="my-auto w-full flex flex-col items-center justify-center gap-3">
                      {/* 1. Icon Tiles using tech-stack-icons */}
                      {iconItems.length > 0 && (
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
                          {iconItems.map((item, tIdx) => {
                            // If MySQL, render wide tile matching design screenshot
                            const isMysql = item.icon === 'mysql'
                            return (
                              <div
                                key={tIdx}
                                className={`${
                                  isMysql
                                    ? 'w-44 sm:w-52 h-16 sm:h-20 px-4'
                                    : 'w-16 h-16 sm:w-20 sm:h-20 p-2.5'
                                } bg-white rounded-xl shadow-xs border border-gray-100/80 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-200 group`}
                              >
                                <div
                                  className={`${
                                    isMysql
                                      ? 'w-24 sm:w-28 h-10'
                                      : 'w-8 h-8 sm:w-9 sm:h-9'
                                  } flex items-center justify-center`}
                                >
                                  <StackIcon
                                    name={item.icon as any}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                {!isMysql && (
                                  <span className="text-[10px] text-gray-500 font-medium mt-1 truncate max-w-[56px] leading-none">
                                    {item.original.replace(/\s*\(.*?\)/g, '')}
                                  </span>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      )}

                      {/* 2. Pills for long features, integrations & biometrics */}
                      {pillItems.length > 0 && (
                        <div className="flex flex-col gap-2.5 w-full">
                          {pillItems.map((pill, pIdx) => (
                            <div
                              key={pIdx}
                              className="bg-white rounded-xl shadow-xs border border-gray-100/80 px-4 py-2.5 text-center text-xs text-gray-700 font-medium leading-snug"
                            >
                              {pill}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Optional Category Description if no technologies present */}
                    {cat.description && iconItems.length === 0 && pillItems.length === 0 && (
                      <p className="text-xs text-gray-500 text-center leading-relaxed">
                        {cat.description}
                      </p>
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
