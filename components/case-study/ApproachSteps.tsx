interface ApproachStep {
  stepNumber?: string
  title: string
  description: string
}

export default function ApproachSteps({ steps }: { steps: ApproachStep[] }) {
  return (
    <div className="flex flex-col gap-4">
      {steps.map((step, idx) => {
        const stepNum = step.stepNumber || String(idx + 1).padStart(2, '0')
        return (
          <div
            key={idx}
            className="group relative bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:border-[#0B4785]/50 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            {/* Left vertical accent line */}
            <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-transparent group-hover:bg-[#0B4785] rounded-r transition-colors duration-300" />

            {/* Step Number Badge */}
            <div className="w-12 h-12 rounded-xl bg-[#EEF4FB] border border-[#D5E4F5] text-[#0B4785] font-bold text-base flex items-center justify-center flex-shrink-0 group-hover:bg-[#0B4785] group-hover:text-white transition-colors duration-300">
              {stepNum}
            </div>

            {/* Step Content */}
            <div className="flex-1">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-[#0B4785] transition-colors duration-200 mb-1 leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
