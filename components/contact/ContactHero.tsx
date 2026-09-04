import { MessageSquare, Mail, Phone } from 'lucide-react'

interface ContactHeroProps {
  heading?: string
  description?: string
  eyebrow?: string
}

export default function ContactHero({ heading, description, eyebrow }: ContactHeroProps) {
  const eyebrowText = eyebrow || 'CONTACT US'
  const h1 = heading || 'Get in touch!'
  const desc =
    description ||
    'Share your requirements below, and our enterprise consulting specialists will reach out promptly to discuss your technical architecture, scope, and delivery timeline.'

  return (
    <section className="relative pt-12 pb-12 lg:pt-20 lg:pb-16 bg-gradient-to-b from-[#F4F8FC] via-white to-white overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[350px] pointer-events-none opacity-40">
        <div className="absolute -top-16 left-1/3 w-80 h-80 bg-teal-100/50 rounded-full blur-3xl" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-blue-200/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#02487D] text-xs font-bold uppercase tracking-wider mb-6">
            <MessageSquare className="w-3.5 h-3.5 text-[#14B8A6]" />
            <span>{eyebrowText}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1E3D] tracking-tight leading-[1.15] mb-4">
            {h1}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {desc}
          </p>
        </div>
      </div>
    </section>
  )
}
