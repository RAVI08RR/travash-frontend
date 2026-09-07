'use client'

import Image from 'next/image'
import { Sparkles, Network } from 'lucide-react'

interface TechBadge {
  name: string
  icon: string
  category?: string
  color?: string
}

// Row 1: AI, LLMs, Automation & Cloud Ecosystem
const ROW_1_TECH: TechBadge[] = [
  { name: 'OpenAI / ChatGPT', icon: 'https://cdn.simpleicons.org/openai/000000' },
  { name: 'Anthropic Claude', icon: 'https://cdn.simpleicons.org/anthropic/D97706' },
  { name: 'Google AI Studio', icon: 'https://cdn.simpleicons.org/google/4285F4' },
  { name: 'NotebookLM', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
  { name: 'Meta Llama', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/meta/meta-original.svg' },
  { name: 'Zapier', icon: 'https://cdn.simpleicons.org/zapier/FF4A00' },
  { name: 'Hugging Face', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg' },
  { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'Mistral AI', icon: 'https://cdn.simpleicons.org/mistral/FA520F' },
  { name: 'AWS Bedrock', icon: '/images/services/aws.svg' },
  { name: 'Azure AI', icon: '/images/services/azure.svg' },
  { name: 'Make', icon: 'https://cdn.simpleicons.org/make/6D28D9' },
]

// Row 2: Full-Stack Languages, Web & Mobile Platforms
const ROW_2_TECH: TechBadge[] = [
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Java Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'iOS (Swift)', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg' },
  { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
]

// Row 3: Design, Media, Databases & Enterprise Infra
const ROW_3_TECH: TechBadge[] = [
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg' },
  { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg' },
  { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-plain.svg' },
  { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'Docker', icon: '/images/services/docker.svg' },
  { name: 'Kubernetes', icon: '/images/services/kubernetes.svg' },
  { name: 'Snowflake', icon: 'https://cdn.simpleicons.org/snowflake/29B5E8' },
  { name: 'Apache Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg' },
  { name: 'MySQL', icon: '/casestudy-img/mysql-1.svg' },
]

function MarqueeRow({ items, direction = 'ltr' }: { items: TechBadge[]; direction?: 'ltr' | 'rtl' }) {
  const repeatedItems = [...items, ...items, ...items, ...items]
  const animationClass = direction === 'ltr' ? 'animate-marquee-ltr' : 'animate-marquee-rtl'

  return (
    <div className="relative w-full overflow-hidden py-2.5">
      <div className={`flex items-center gap-4 sm:gap-6 w-max ${animationClass} hover:[animation-play-state:paused] px-4`}>
        {repeatedItems.map((tech, idx) => (
          <div
            key={idx}
            className="group/chip flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-white border border-gray-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-[#0B4785]/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer select-none"
          >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center shrink-0">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={28}
                height={28}
                className="w-full h-full object-contain group-hover/chip:scale-110 transition-transform duration-300"
                unoptimized
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 tracking-tight whitespace-nowrap group-hover/chip:text-[#0B4785] transition-colors duration-200">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechnologyMarquee() {
  return (
    <section className="relative py-14 sm:py-20 bg-gradient-to-b from-white via-[#F4F8FC]/60 to-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden border-y border-gray-100/80">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-teal-50/70 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold uppercase tracking-wider mb-5">
            <Network className="w-3.5 h-3.5 text-[#0B4785]" />
            <span>INTEGRATIONS & ECOSYSTEM</span>
          </div>

          {/* Headline with Travash styled colorful accents */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#0B1E3D] tracking-tight leading-[1.2] mb-4">
            Integrate AI With Your{' '}
            <span className="text-[#FF3838]">Data</span>{' '}
            <span className="bg-gradient-to-r from-[#7C3AED] to-[#0B4785] bg-clip-text text-transparent">And</span>{' '}
            <span className="text-[#0070F3]">Connect</span>{' '}
            To 500+ Platforms Seamlessly
          </h2>

          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Use pre-built nodes for common apps. Custom API connections for everything else.
          </p>
        </div>
      </div>

      {/* 3-Row Multi-Directional Marquee with Gradient Fade Edges */}
      <div className="relative w-full overflow-hidden flex flex-col gap-2.5 sm:gap-4">
        {/* Left and Right Fade Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        {/* Row 1: Left to Right (LTR) */}
        <MarqueeRow items={ROW_1_TECH} direction="ltr" />

        {/* Row 2: Right to Left (RTL) */}
        <MarqueeRow items={ROW_2_TECH} direction="rtl" />

        {/* Row 3: Left to Right (LTR) */}
        <MarqueeRow items={ROW_3_TECH} direction="ltr" />
      </div>
    </section>
  )
}
