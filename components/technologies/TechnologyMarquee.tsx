'use client'

import Image from 'next/image'

interface TechBadge {
  name: string
  icon: string
}

// Row 1: AI, LLM & Cloud Automation
const ROW_1_TECH: TechBadge[] = [
  { name: 'NotebookLM', icon: 'https://cdn.simpleicons.org/googlegemini/8E75B2' },
  { name: 'ChatGPT / OpenAI', icon: 'https://cdn.simpleicons.org/openai/000000' },
  { name: 'Google Gemini', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg' },
  { name: 'Meta Llama', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/meta/meta-original.svg' },
  { name: 'Mistral AI', icon: 'https://cdn.simpleicons.org/mistral/FA520F' },
  { name: 'Anthropic Claude', icon: 'https://cdn.simpleicons.org/anthropic/D97706' },
  { name: 'Zapier', icon: 'https://cdn.simpleicons.org/zapier/FF4A00' },
  { name: 'Google AI Studio', icon: 'https://cdn.simpleicons.org/google/4285F4' },
  { name: 'Hugging Face', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/huggingface/huggingface-original.svg' },
  { name: 'LangChain', icon: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
  { name: 'AWS Bedrock', icon: '/images/services/aws.svg' },
  { name: 'Azure AI', icon: '/images/services/azure.svg' },
]

// Row 2: Full-Stack Languages, Web & Mobile Platforms
const ROW_2_TECH: TechBadge[] = [
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'iOS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg' },
  { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
]

// Row 3: Creative, Media, Databases & Enterprise Infra
const ROW_3_TECH: TechBadge[] = [
  { name: 'DaVinci Resolve', icon: 'https://cdn.simpleicons.org/davinciresolve/000000' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
  { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg' },
  { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg' },
  { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xd/xd-plain.svg' },
  { name: 'After Effects', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-plain.svg' },
  { name: 'Premiere Pro', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg' },
  { name: 'CapCut', icon: 'https://cdn.simpleicons.org/bytedance/000000' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
  { name: 'Docker', icon: '/images/services/docker.svg' },
  { name: 'Kubernetes', icon: '/images/services/kubernetes.svg' },
  { name: 'Snowflake', icon: 'https://cdn.simpleicons.org/snowflake/29B5E8' },
  { name: 'Apache Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg' },
]

function MarqueeRow({ items, direction = 'ltr' }: { items: TechBadge[]; direction?: 'ltr' | 'rtl' }) {
  // Duplicate array 3 times for a smooth continuous infinite loop
  const repeatedItems = [...items, ...items, ...items]
  const animationClass = direction === 'ltr' ? 'animate-marquee-ltr' : 'animate-marquee-rtl'

  return (
    <div className="relative w-full overflow-hidden py-2">
      <div className={`flex items-center gap-6 sm:gap-8 lg:gap-10 w-max ${animationClass} hover:[animation-play-state:paused] px-4`}>
        {repeatedItems.map((tech, idx) => (
          <div
            key={idx}
            className="group flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-white border border-gray-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-[#004771]/40 hover:shadow-md hover:scale-105 transition-all duration-300 min-w-[64px] sm:min-w-[76px] h-[64px] sm:h-[76px] cursor-pointer"
            title={tech.name}
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
              <Image
                src={tech.icon}
                alt={tech.name}
                width={36}
                height={36}
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechnologyMarquee() {
  return (
    <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-16 bg-gradient-to-b from-[#F4F8FC] via-white to-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden border-b border-gray-100">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Single Main Section Title with Travash theme gradient */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <h1 className="section-heading-title">
            Integrate AI With Your Data And Connect To 500+ Platforms Seamlessly
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-normal mt-3 max-w-2xl mx-auto leading-relaxed">
            Use pre-built nodes for common apps. Custom API connections for everything else.
          </p>
        </div>

        {/* 3-Row Multi-Directional Marquee with Gradient Fade Edges */}
        <div className="relative w-full overflow-hidden flex flex-col gap-3 sm:gap-4">
          {/* Left and Right Fade Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Row 1: Left to Right (LTR) */}
          <MarqueeRow items={ROW_1_TECH} direction="ltr" />

          {/* Row 2: Right to Left (RTL) */}
          <MarqueeRow items={ROW_2_TECH} direction="rtl" />

          {/* Row 3: Left to Right (LTR) */}
          <MarqueeRow items={ROW_3_TECH} direction="ltr" />
        </div>
      </div>
    </section>
  )
}
