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
    return [
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
  },
}

export default nextConfig
