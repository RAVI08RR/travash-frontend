'use client'

import dynamic from 'next/dynamic'
import config from '@/sanity.config'

// NextStudio uses useMemo internally — dynamic import with ssr:false ensures
// it only ever mounts client-side, preventing hook dependency size mismatch
// between SSR (returns null → 0 deps) and client (mounts with deps).
const NextStudioDynamic = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false, loading: () => null }
)

export function Studio() {
  return <NextStudioDynamic config={config} />
}
