interface TechnologyCategory {
  category: string
  technologies: string[]
  description?: string
}

export default function TechnologyStack({ items }: { items: TechnologyCategory[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {items.map((cat, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200/90 rounded-2xl p-6 shadow-sm hover:border-[#0B4785]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0B4785] block mb-2">
              {cat.category}
            </span>
            <div className="flex flex-wrap gap-2 mb-4">
              {cat.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg bg-[#F1F5F9] text-gray-800 text-xs font-semibold border border-gray-200/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          {cat.description && (
            <p className="text-xs text-gray-500 leading-relaxed font-normal pt-3 border-t border-gray-100">
              {cat.description}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
