import React from 'react'

export default function CaseStudyContent({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`min-w-0 flex flex-col gap-0 ${className}`}>
      {children}
    </div>
  )
}
