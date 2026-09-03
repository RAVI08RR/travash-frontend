'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X } from 'lucide-react'

interface NavLink {
  label: string
  href: string
  hasDropdown?: boolean
}

interface SiteSettings {
  logo?: { asset?: { url: string } }
  navLinks?: NavLink[]
  ctaLabel?: string
  ctaHref?: string
}

interface NavbarProps {
  settings?: SiteSettings
}

const DEFAULT_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Our Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar({ settings }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const navLinks = settings?.navLinks || DEFAULT_LINKS
  const ctaLabel = settings?.ctaLabel || 'Contact us'
  const ctaHref = settings?.ctaHref || '/contact'
  const logoUrl = settings?.logo?.asset?.url || 'https://travash.com/wp-content/uploads/2023/12/New-latest-logo.svg'

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
        <nav className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src={logoUrl}
              alt="Travash Software Solutions"
              width={160}
              height={42}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                {link.hasDropdown || link.label === 'Services' ? (
                  <div
                    className="flex items-center gap-1 text-[15px] font-medium text-[#1E293B] hover:text-[#0B4785] transition-colors cursor-pointer py-2"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link href={link.href}>{link.label}</Link>
                    <ChevronDown size={14} className="text-gray-500 group-hover:text-[#0B4785] transition-transform duration-200 group-hover:rotate-180" />

                    {/* Services Dropdown */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        {[
                          { name: 'AI & Data Engineering', href: '/services/ai-data' },
                          { name: 'Platform Engineering', href: '/services/platform-engineering' },
                          { name: 'Dedicated Tech Teams', href: '/services/dedicated-teams' },
                          { name: 'Enterprise Applications', href: '/services/enterprise' },
                          { name: 'Digital Experiences', href: '/services/digital' },
                        ].map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-[#0B4785] hover:bg-gray-50 rounded-lg transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="text-[15px] font-medium text-[#1E293B] hover:text-[#0B4785] transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Right: Contact Us Button */}
          <div className="flex items-center gap-4">
            <Link
              href={ctaHref}
              className="hidden sm:inline-flex items-center justify-center border border-[#0B4785] text-[#0B4785] hover:bg-[#0B4785] hover:text-white text-sm font-semibold px-6 py-2.5 rounded-lg transition-all duration-200"
            >
              {ctaLabel}
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image
              src={logoUrl}
              alt="Travash"
              width={130}
              height={36}
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-1.5 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-2 flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-800 hover:text-[#0B4785] hover:bg-gray-50 px-4 py-3 rounded-xl text-base font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="p-6 border-t border-gray-100">
            <Link
              href={ctaHref}
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center border border-[#0B4785] bg-[#0B4785] text-white text-sm font-semibold px-5 py-3 rounded-lg hover:bg-[#082a50] transition-colors shadow-sm"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
