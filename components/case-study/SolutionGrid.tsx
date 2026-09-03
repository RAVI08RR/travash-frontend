import { CheckCircle2 } from 'lucide-react'

interface SolutionItem {
  title: string
  description: string
}

export default function SolutionGrid({ items }: { items: SolutionItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="bg-white border border-gray-200/90 rounded-2xl p-6 shadow-sm hover:border-[#0B4785]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-[#EEFBF3] border border-[#C6F5D8] text-[#16A34A] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
