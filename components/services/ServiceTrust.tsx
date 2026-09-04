'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react'
import type { ServiceTrustSection } from '@/lib/service-data'

export default function ServiceTrust({ trust }: { trust: ServiceTrustSection }) {
  if (!trust) return null

  const bgImage = trust.backgroundImage || '/images/services/global-leaders.webp'

  return (
    <section
      id="why-travash"
      className="relative min-h-[460px] flex items-center py-16 sm:py-20 lg:py-24 font-['Plus_Jakarta_Sans',sans-serif] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(11, 11, 11, 0.70) 0%, rgba(11, 11, 11, 0.75) 100%), url('${bgImage}')`,
      }}
    >
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#38BDF8] block mb-3">
            Enterprise Authority
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white tracking-tight leading-tight mb-6">
            {trust.heading || 'Why Global Leaders Trust Us'}
          </h2>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed font-normal mb-10 max-w-3xl mx-auto">
            {trust.description ||
              'Founded in 2005, Travash operates as a trusted technology partner for organizations that operate at a massive international scale. Global giants like MasterCard, VISA, Facebook, Autodesk, and UBS trust our elite engineering talent to protect and scale their most critical infrastructure. We bring the execution rigor required for long-term, high-stakes technology partnerships.'}
          </p>

          {/* Authority Highlights Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">2005</div>
              <div className="text-xs text-white/80 font-medium">Year Founded</div>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-xs text-white/80 font-medium">Enterprise Platforms</div>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">99.99%</div>
              <div className="text-xs text-white/80 font-medium">Uptime Guarantee</div>
            </div>
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Tier-1</div>
              <div className="text-xs text-white/80 font-medium">Global Giants</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
