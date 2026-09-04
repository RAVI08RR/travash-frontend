import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'travash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  // Transpile Sanity packages so Turbopack can handle their TS source files
  transpilePackages: [
    'sanity',
    'next-sanity',
    '@sanity/sdk-react',
    '@sanity/workbench',
    '@sanity/ui',
  ],
  // Also exclude from server bundling
  serverExternalPackages: ['@sanity/client'],
  async redirects() {
    const defaultRedirects = [
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/careers',
        destination: '/career',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
    ]

    try {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const fs = require('fs')
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const path = require('path')
      const redirectsPath = path.resolve(process.cwd(), 'migration/redirects.json')
      if (fs.existsSync(redirectsPath)) {
        const raw = JSON.parse(fs.readFileSync(redirectsPath, 'utf8'))
        const seen = new Set(defaultRedirects.map((r) => r.source))
        for (const item of raw) {
          if (
            item.source &&
            item.destination &&
            item.source !== item.destination &&
            !seen.has(item.source)
          ) {
            seen.add(item.source)
            defaultRedirects.push({
              source: item.source,
              destination: item.destination,
              permanent: true,
            })
          }
        }
      }
    } catch {
      // fallback to default redirects
    }

    return defaultRedirects
  },
}

export default nextConfig
