import Image from 'next/image'
import { ExternalLink, Code2 } from 'lucide-react'

export interface TechnologyItem {
  _id?: string
  name: string
  slug?: string
  category?: string
  categoryTitle?: string
  icon?: { asset?: { url: string } }
  description?: string
  website?: string
  featured?: boolean
}

export default function TechnologyCard({ tech }: { tech: TechnologyItem }) {
  const iconUrl = tech.icon?.asset?.url

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-xs hover:shadow-md hover:border-gray-200 transition-all flex flex-col justify-between group">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-gray-100 flex items-center justify-center relative overflow-hidden group-hover:bg-[#E0F2FE] transition-colors p-2.5">
            {iconUrl ? (
              <Image
                src={iconUrl}
                alt={tech.name}
                width={36}
                height={36}
                className="object-contain w-auto h-auto max-w-full max-h-full"
              />
            ) : (
              <span className="text-sm font-extrabold text-[#004771]">
                {tech.name.slice(0, 2).toUpperCase()}
              </span>
            )}
          </div>

          {tech.website && (
            <a
              href={tech.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Official website of ${tech.name}`}
              className="text-gray-400 hover:text-[#004771] transition-colors p-1"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        <h3 className="text-base font-bold text-[#0B1E3D] group-hover:text-[#004771] transition-colors mb-1.5">
          {tech.name}
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed line-clamp-2">
          {tech.description || `Enterprise-grade ${tech.category || 'technology'} solution deployed for high availability and scalability.`}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
        <span className="text-[11px] font-bold text-[#14B8A6] uppercase tracking-wider">
          {tech.categoryTitle || tech.category || 'Technology'}
        </span>
      </div>
    </div>
  )
}
