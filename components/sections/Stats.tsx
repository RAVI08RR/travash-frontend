'use client'

import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

interface Stat {
  value?: string
  label?: string
}

interface StatsData {
  stats?: Stat[]
}

const DEFAULT_STATS: Stat[] = [
  { value: '300+', label: 'Projects Delivered' },
  { value: '50+', label: 'Expert Engineers &\nAI Specialists' },
  { value: '20+', label: 'Years of Leadership\nExperience' },
  { value: '8+', label: 'Industry Verticals Served Global\nClients Across US, UK & MEA' },
]

function parseStatValue(raw: string = '') {
  const num = parseInt(raw.replace(/[^0-9]/g, ''), 10) || 0
  const suffix = raw.replace(/[0-9]/g, '')
  return { num, suffix }
}

function StatItem({ stat, index, isLast }: { stat: Stat; index: number; isLast: boolean }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const { num, suffix } = parseStatValue(stat.value)

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center px-4 sm:px-6 py-6 ${!isLast ? 'border-b sm:border-b-0 sm:border-r border-gray-100' : ''
        }`}
    >
      <div className="text-4xl lg:text-[46px] font-bold text-[#0B4785] mb-2 tabular-nums tracking-tight">
        {inView ? (
          <>
            <CountUp start={0} end={num} duration={2.5} delay={index * 0.15} />
            <span>{suffix}</span>
          </>
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-[220px] whitespace-pre-line">
        {stat.label}
      </p>
    </div>
  )
}

export default function Stats({ data }: { data?: StatsData }) {
  const stats = data?.stats?.length ? data.stats : DEFAULT_STATS

  return (
    <section className="bg-[#F2F2F2] py-0 lg:py-0 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} isLast={i === stats.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
