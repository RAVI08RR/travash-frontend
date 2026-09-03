import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Mail, Phone } from 'lucide-react'

interface SiteSettings {
  footerLogo?: { asset?: { url: string } }
  copyrightText?: string
  contactEmail?: string
  contactPhone?: string
}

const SocialIcons: Record<string, () => React.ReactElement> = {
  facebook: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  twitter: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  instagram: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  linkedin: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
}

export default function Footer({ settings }: { settings?: SiteSettings }) {
  const logoUrl =
    settings?.footerLogo?.asset?.url ||
    'https://travash.com/wp-content/uploads/2023/12/New-latest-logo.svg'

  return (
    <footer className="bg-white text-gray-700 border-t border-gray-200">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand, Socials & Legal */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-4">
              <Link href="/" className="inline-flex">
                <Image
                  src={logoUrl}
                  alt="Travash Software Solutions"
                  width={150}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              {/* Social Icons */}
              <div className="flex gap-2.5 pt-2">
                {[
                  { platform: 'facebook', href: 'https://www.facebook.com/travashsoftwaresolutions' },
                  { platform: 'twitter', href: 'https://twitter.com/TravashSoftSols' },
                  { platform: 'instagram', href: 'https://www.instagram.com/travashsoftwaresolutions/' },
                  { platform: 'linkedin', href: 'https://www.linkedin.com/company/travash-software-solutions/' },
                ].map(({ platform, href }) => {
                  const Icon = SocialIcons[platform]
                  return (
                    <a
                      key={platform}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-[#0B4785] hover:border-[#0B4785] hover:bg-gray-50 transition-all"
                      aria-label={platform}
                    >
                      {Icon ? <Icon /> : platform[0].toUpperCase()}
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="text-xs text-gray-500 pt-4 flex flex-col gap-1.5">
              <p>©2025 Travash Software Solutions Pvt. Ltd</p>
              <div className="flex gap-2">
                <Link href="/privacy" className="hover:text-[#0B4785] transition-colors">
                  Privacy Policy
                </Link>
                <span>|</span>
                <Link href="/terms" className="hover:text-[#0B4785] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Menu */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#0B4785] tracking-tight">Menu</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About us', href: '/about' },
                { label: 'Services', href: '/services' },
                { label: 'Blogs', href: '/blog' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact us', href: '/contact' },
                { label: 'Works', href: '/work' },
                { label: 'Technologies', href: '/technologies' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#0B4785] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#0B4785] tracking-tight">Our Services</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {[
                { label: 'AI & Data Engineering', href: '/services/ai-data' },
                { label: 'Software Engineering', href: '/services/software' },
                { label: 'Digital Experiences', href: '/services/digital' },
                { label: 'Data & Analytics Solutions', href: '/services/analytics' },
                { label: 'Enterprise Applications', href: '/services/enterprise' },
                { label: 'Cloud & DevOps', href: '/services/cloud' },
                { label: 'Dedicated Talent & Teams', href: '/services/dedicated-teams' },
                { label: 'Quality Assurance & Testing', href: '/services/qa' },
                { label: 'Staff Augmentation', href: '/services/staff-augmentation' },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-gray-600 hover:text-[#0B4785] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-sm font-bold text-[#0B4785] tracking-tight">Contact</h4>
            <div className="flex flex-col gap-4 text-sm text-gray-600">
              {/* India */}
              <div>
                <p className="font-semibold text-gray-900 mb-0.5">India</p>
                <p className="leading-relaxed text-xs sm:text-sm text-gray-600">
                  Sanali Spazio building, Inorbit Mall Road, Madhapur Plot No 19, Software Units Layout, Sy.No.64, Madhapur Hyderabad, Rangareddy Telangana 500081
                </p>
              </div>

              {/* Dubai */}
              <div>
                <p className="font-semibold text-gray-900 mb-0.5">Dubai</p>
                <p className="leading-relaxed text-xs sm:text-sm text-gray-600">
                  SAIF ZONE ADDRESS : Saif Office Q1 05 103/A Sharjah U.A.E
                </p>
              </div>

              {/* Email & Phone */}
              <div className="pt-2 flex flex-col gap-1.5 text-sm">
                <a
                  href="mailto:contact@travash.com"
                  className="text-gray-600 hover:text-[#0B4785] transition-colors"
                >
                  contact@travash.com
                </a>
                <a
                  href="tel:+917416743434"
                  className="text-gray-600 hover:text-[#0B4785] transition-colors font-medium"
                >
                  (+91) 7416743434
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
