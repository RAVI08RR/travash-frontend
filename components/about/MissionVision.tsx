import { Compass, Eye, CheckCircle2 } from 'lucide-react'

interface MissionVisionProps {
  data?: {
    missionTitle?: string
    missionDescription?: string
    visionTitle?: string
    visionDescription?: string
  }
}

export default function MissionVision({ data }: MissionVisionProps) {
  const missionTitle = data?.missionTitle || 'Our Mission'
  const missionDescription =
    data?.missionDescription ||
    'To empower global enterprises, forward-thinking startups, and public-sector institutions with production-grade digital solutions, transforming software from an operational cost into a sustainable profit and growth driver.'

  const visionTitle = data?.visionTitle || 'Our Vision'
  const visionDescription =
    data?.visionDescription ||
    'To be the world’s most trusted technology partner, renowned for engineering rigor, innovative AI acceleration, and enduring client partnerships exceeding 90% retention.'

  return (
    <section className="py-16 sm:py-20 bg-white font-['Plus_Jakarta_Sans',sans-serif] border-b border-gray-100">
      <div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#14B8A6] uppercase tracking-widest block mb-2">
            PURPOSE & DIRECTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E3D] tracking-tight">
            Defining Our Purpose: Mission & Vision
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#0B1E3D] to-[#004771] text-white shadow-xl overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#14B8A6] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight">{missionTitle}</h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{missionDescription}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-[#14B8A6]">
              <CheckCircle2 className="w-4 h-4" />
              <span>Engineering excellence with measurable ROI</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-[#EEF4FB] text-[#0B1E3D] border border-blue-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#004771] flex items-center justify-center text-white mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 tracking-tight">{visionTitle}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{visionDescription}</p>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center gap-2 text-xs font-semibold text-[#004771]">
              <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
              <span>Built for high-trust, multi-year technological leadership</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
