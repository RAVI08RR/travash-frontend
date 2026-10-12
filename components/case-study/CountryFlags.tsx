import React from 'react'

export interface CountryInfo {
  code: string
  name: string
  flagComponent?: React.ReactNode
}

// 1. USA Flag SVG
export function FlagUSA({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`inline-block rounded-[3px] shadow-[0_0_1px_rgba(0,0,0,0.3)] shrink-0 object-cover ${className}`}
      aria-label="USA Flag"
    >
      <path fill="#bd3d44" d="M0 0h640v480H0z" />
      <path
        stroke="#fff"
        strokeWidth="37"
        d="M0 55.4h640M0 129.2h640M0 203h640M0 277h640M0 350.8h640M0 424.6h640"
      />
      <path fill="#192f5d" d="M0 0h296v258.5H0z" />
      {/* Stars Grid */}
      <g fill="#fff">
        <g id="s1">
          <g id="s2">
            <g id="s3">
              <path d="m24.7 18.5 3.3 10.1h10.6l-8.6 6.3 3.3 10.1-8.6-6.2-8.6 6.2 3.3-10.1-8.6-6.3h10.6z" />
            </g>
            <use href="#s3" x="49.3" />
            <use href="#s3" x="98.7" />
          </g>
          <use href="#s2" x="148" />
        </g>
        <use href="#s1" y="37" />
        <use href="#s1" y="74" />
        <use href="#s1" y="111" />
        <use href="#s1" y="148" />
        <use href="#s1" y="185" />
      </g>
    </svg>
  )
}

// 2. UAE / Dubai Flag SVG
export function FlagUAE({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`inline-block rounded-[3px] shadow-[0_0_1px_rgba(0,0,0,0.3)] shrink-0 object-cover ${className}`}
      aria-label="UAE Flag"
    >
      <path fill="#00732f" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#000" d="M0 320h640v160H0z" />
      <path fill="#f00" d="M0 0h160v480H0z" />
    </svg>
  )
}

// 3. UK Flag SVG (Union Jack)
export function FlagUK({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`inline-block rounded-[3px] shadow-[0_0_1px_rgba(0,0,0,0.3)] shrink-0 object-cover ${className}`}
      aria-label="UK Flag"
    >
      <clipPath id="uk-clip">
        <path d="M0 0h640v480H0z" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path stroke="#fff" strokeWidth="60" d="m0 0 640 480M640 0 0 480" />
        <path
          stroke="#c8102e"
          strokeWidth="40"
          d="m0 0 640 480M640 0 0 480"
          clipPath="url(#uk-clip)"
        />
        <path stroke="#fff" strokeWidth="100" d="M320 0v480M0 240h640" />
        <path stroke="#c8102e" strokeWidth="60" d="M320 0v480M0 240h640" />
      </g>
    </svg>
  )
}

// 4. India Flag SVG
export function FlagIndia({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`inline-block rounded-[3px] shadow-[0_0_1px_rgba(0,0,0,0.3)] shrink-0 object-cover ${className}`}
      aria-label="India Flag"
    >
      <path fill="#f93" d="M0 0h640v160H0z" />
      <path fill="#fff" d="M0 160h640v160H0z" />
      <path fill="#128807" d="M0 320h640v160H0z" />
      <g transform="matrix(3.2 0 0 3.2 320 240)">
        <circle r="20" fill="none" stroke="#000080" strokeWidth="2" />
        <circle r="3.5" fill="#000080" />
        <g id="spokes">
          <g id="s4">
            <line x1="0" y1="-20" x2="0" y2="20" stroke="#000080" strokeWidth="0.8" />
            <line x1="-20" y1="0" x2="20" y2="0" stroke="#000080" strokeWidth="0.8" />
          </g>
          <use href="#s4" transform="rotate(30)" />
          <use href="#s4" transform="rotate(60)" />
          <use href="#s4" transform="rotate(15)" />
          <use href="#s4" transform="rotate(45)" />
          <use href="#s4" transform="rotate(75)" />
        </g>
      </g>
    </svg>
  )
}

// 5. Germany Flag SVG
export function FlagGermany({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`inline-block rounded-[3px] shadow-[0_0_1px_rgba(0,0,0,0.3)] shrink-0 object-cover ${className}`}
      aria-label="Germany Flag"
    >
      <path fill="#000" d="M0 0h640v160H0z" />
      <path fill="#d00" d="M0 160h640v160H0z" />
      <path fill="#ffce00" d="M0 320h640v160H0z" />
    </svg>
  )
}

// 6. Canada Flag SVG
export function FlagCanada({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`inline-block rounded-[3px] shadow-[0_0_1px_rgba(0,0,0,0.3)] shrink-0 object-cover ${className}`}
      aria-label="Canada Flag"
    >
      <path fill="#f00" d="M0 0h160v480H0zm480 0h160v480H480z" />
      <path fill="#fff" d="M160 0h320v480H160z" />
      <path
        fill="#f00"
        d="M320 120l14 42 36-18-12 40 44 8-32 30 18 42-42-12-12 36-14-6-14 6-12-36-42 12 18-42-32-30 44-8-12-40 36 18 14-42z"
      />
    </svg>
  )
}

// 7. Australia Flag SVG
export function FlagAustralia({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`inline-block rounded-[3px] shadow-[0_0_1px_rgba(0,0,0,0.3)] shrink-0 object-cover ${className}`}
      aria-label="Australia Flag"
    >
      <path fill="#00008b" d="M0 0h640v480H0z" />
      <g transform="scale(0.5)">
        <path fill="#012169" d="M0 0h640v480H0z" />
        <path stroke="#fff" strokeWidth="60" d="m0 0 640 480M640 0 0 480" />
        <path stroke="#c8102e" strokeWidth="40" d="m0 0 640 480M640 0 0 480" />
        <path stroke="#fff" strokeWidth="100" d="M320 0v480M0 240h640" />
        <path stroke="#c8102e" strokeWidth="60" d="M320 0v480M0 240h640" />
      </g>
      {/* Commonwealth 7-point star */}
      <circle cx="160" cy="360" r="40" fill="#fff" />
      {/* Southern cross stars */}
      <circle cx="480" cy="120" r="16" fill="#fff" />
      <circle cx="540" cy="200" r="16" fill="#fff" />
      <circle cx="480" cy="360" r="16" fill="#fff" />
      <circle cx="420" cy="240" r="16" fill="#fff" />
      <circle cx="500" cy="270" r="10" fill="#fff" />
    </svg>
  )
}

// 8. Singapore Flag SVG
export function FlagSingapore({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`inline-block rounded-[3px] shadow-[0_0_1px_rgba(0,0,0,0.3)] shrink-0 object-cover ${className}`}
      aria-label="Singapore Flag"
    >
      <path fill="#ed2939" d="M0 0h640v240H0z" />
      <path fill="#fff" d="M0 240h640v240H0z" />
      <circle cx="100" cy="120" r="60" fill="#fff" />
      <circle cx="120" cy="120" r="60" fill="#ed2939" />
    </svg>
  )
}

// 9. Saudi Arabia Flag SVG
export function FlagSaudiArabia({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 480"
      className={`inline-block rounded-[3px] shadow-[0_0_1px_rgba(0,0,0,0.3)] shrink-0 object-cover ${className}`}
      aria-label="Saudi Arabia Flag"
    >
      <path fill="#006c35" d="M0 0h640v480H0z" />
      <path
        fill="#fff"
        d="M200 320h240v14H200zm-20 7l30-15v30z"
      />
      <circle cx="320" cy="200" r="28" fill="none" stroke="#fff" strokeWidth="6" />
    </svg>
  )
}

// 10. Global / Worldwide Icon
export function FlagGlobal({ className = 'w-6 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block shrink-0 text-[#02487D] ${className}`}
      aria-label="Global"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

/**
 * Returns flag component and display name for a given country string
 */
export function getCountryDetails(input: string): CountryInfo {
  const norm = (input || '').toLowerCase().trim()

  if (norm.includes('usa') || norm.includes('united states') || norm === 'us' || norm.includes('america')) {
    return {
      code: 'US',
      name: 'USA',
      flagComponent: <FlagUSA className="w-5 h-3.5 sm:w-6 sm:h-4" />,
    }
  }

  if (
    norm.includes('dubai') ||
    norm.includes('uae') ||
    norm.includes('united arab emirates') ||
    norm.includes('emirates')
  ) {
    return {
      code: 'AE',
      name: 'Dubai, UAE',
      flagComponent: <FlagUAE className="w-5 h-3.5 sm:w-6 sm:h-4" />,
    }
  }

  if (
    norm.includes('uk') ||
    norm.includes('united kingdom') ||
    norm.includes('britain') ||
    norm.includes('england') ||
    norm.includes('london')
  ) {
    return {
      code: 'GB',
      name: 'UK',
      flagComponent: <FlagUK className="w-5 h-3.5 sm:w-6 sm:h-4" />,
    }
  }

  if (norm.includes('india') || norm === 'in' || norm.includes('hyderabad') || norm.includes('telangana')) {
    return {
      code: 'IN',
      name: 'India',
      flagComponent: <FlagIndia className="w-5 h-3.5 sm:w-6 sm:h-4" />,
    }
  }

  if (norm.includes('germany') || norm.includes('deutschland') || norm === 'de') {
    return {
      code: 'DE',
      name: 'Germany',
      flagComponent: <FlagGermany className="w-5 h-3.5 sm:w-6 sm:h-4" />,
    }
  }

  if (norm.includes('canada') || norm === 'ca') {
    return {
      code: 'CA',
      name: 'Canada',
      flagComponent: <FlagCanada className="w-5 h-3.5 sm:w-6 sm:h-4" />,
    }
  }

  if (norm.includes('australia') || norm === 'au') {
    return {
      code: 'AU',
      name: 'Australia',
      flagComponent: <FlagAustralia className="w-5 h-3.5 sm:w-6 sm:h-4" />,
    }
  }

  if (norm.includes('singapore') || norm === 'sg') {
    return {
      code: 'SG',
      name: 'Singapore',
      flagComponent: <FlagSingapore className="w-5 h-3.5 sm:w-6 sm:h-4" />,
    }
  }

  if (norm.includes('saudi') || norm.includes('ksa')) {
    return {
      code: 'SA',
      name: 'Saudi Arabia',
      flagComponent: <FlagSaudiArabia className="w-5 h-3.5 sm:w-6 sm:h-4" />,
    }
  }

  if (norm.includes('global') || norm.includes('international') || norm.includes('worldwide')) {
    return {
      code: 'GLOBAL',
      name: 'Global',
      flagComponent: <FlagGlobal className="w-5 h-5" />,
    }
  }

  // Fallback for custom named locations
  return {
    code: 'CUSTOM',
    name: input,
    flagComponent: <FlagGlobal className="w-5 h-5 text-slate-500" />,
  }
}

/**
 * Resolves an array of CountryInfo from either explicit `countries` array
 * or string `location` with multi-country parsing fallback.
 */
export function resolveCountries(
  countries?: string[] | null,
  location?: string | null
): CountryInfo[] {
  // Case 1: Explicit array from Sanity CMS
  if (Array.isArray(countries) && countries.length > 0) {
    const list: CountryInfo[] = []
    const seen = new Set<string>()

    for (const item of countries) {
      if (typeof item === 'string' && item.trim()) {
        const info = getCountryDetails(item.trim())
        if (!seen.has(info.name)) {
          seen.add(info.name)
          list.push(info)
        }
      }
    }

    if (list.length > 0) return list
  }

  // Case 2: Parse legacy / fallback location string
  if (typeof location === 'string' && location.trim()) {
    const raw = location.trim()
    const detected: CountryInfo[] = []
    const seen = new Set<string>()

    // Check for comma, slash, ampersand, or bullet separated strings
    const tokens = raw
      .split(/[,/&•+;]|\band\b/gi)
      .map((t) => t.trim())
      .filter(Boolean)

    for (const t of tokens) {
      const info = getCountryDetails(t)
      if (!seen.has(info.name)) {
        seen.add(info.name)
        detected.push(info)
      }
    }

    if (detected.length > 0) return detected

    // If split did not yield, return single detail
    return [getCountryDetails(raw)]
  }

  // Default fallback if neither provided
  return [
    {
      code: 'IN',
      name: 'India',
      flagComponent: <FlagIndia className="w-5 h-3.5 sm:w-6 sm:h-4" />,
    },
  ]
}
