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

// Emoji flag span — works for every country via unicode regional indicator letters
function EmojiFlag({ emoji, label, className = 'w-5 h-3.5 sm:w-6 sm:h-4' }: { emoji: string; label: string; className?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-[3px] shadow-[0_0_1px_rgba(0,0,0,0.3)] shrink-0 overflow-hidden ${className}`}
      role="img"
      aria-label={`${label} Flag`}
      style={{ fontSize: '1.1em', lineHeight: 1 }}
    >
      {emoji}
    </span>
  )
}

/**
 * Returns flag component and display name for a given country string
 */
export function getCountryDetails(input: string): CountryInfo {
  const norm = (input || '').toLowerCase().trim()

  // ── Top 10 with custom SVG flags ──
  if (norm.includes('usa') || norm.includes('united states') || norm === 'us' || norm.includes('america'))
    return { code: 'US', name: 'USA', flagComponent: <FlagUSA className="w-5 h-3.5 sm:w-6 sm:h-4" /> }
  if (norm.includes('dubai') || norm.includes('uae') || norm.includes('united arab emirates') || norm.includes('emirates'))
    return { code: 'AE', name: 'UAE', flagComponent: <FlagUAE className="w-5 h-3.5 sm:w-6 sm:h-4" /> }
  if (norm.includes('uk') || norm.includes('united kingdom') || norm.includes('britain') || norm.includes('england') || norm.includes('london'))
    return { code: 'GB', name: 'UK', flagComponent: <FlagUK className="w-5 h-3.5 sm:w-6 sm:h-4" /> }
  if (norm.includes('india') || norm === 'in' || norm.includes('hyderabad') || norm.includes('telangana'))
    return { code: 'IN', name: 'India', flagComponent: <FlagIndia className="w-5 h-3.5 sm:w-6 sm:h-4" /> }
  if (norm.includes('germany') || norm.includes('deutschland') || norm === 'de')
    return { code: 'DE', name: 'Germany', flagComponent: <FlagGermany className="w-5 h-3.5 sm:w-6 sm:h-4" /> }
  if (norm.includes('canada') || norm === 'ca')
    return { code: 'CA', name: 'Canada', flagComponent: <FlagCanada className="w-5 h-3.5 sm:w-6 sm:h-4" /> }
  if (norm.includes('australia') || norm === 'au')
    return { code: 'AU', name: 'Australia', flagComponent: <FlagAustralia className="w-5 h-3.5 sm:w-6 sm:h-4" /> }
  if (norm.includes('singapore') || norm === 'sg')
    return { code: 'SG', name: 'Singapore', flagComponent: <FlagSingapore className="w-5 h-3.5 sm:w-6 sm:h-4" /> }
  if (norm.includes('saudi') || norm.includes('ksa'))
    return { code: 'SA', name: 'Saudi Arabia', flagComponent: <FlagSaudiArabia className="w-5 h-3.5 sm:w-6 sm:h-4" /> }
  if (norm.includes('global') || norm.includes('international') || norm.includes('worldwide'))
    return { code: 'GLOBAL', name: 'Global', flagComponent: <FlagGlobal className="w-5 h-5" /> }

  // ── Asia Pacific ──
  if (norm.includes('hong kong') || norm === 'hk') return { code: 'HK', name: 'Hong Kong', flagComponent: <EmojiFlag emoji="🇭🇰" label="Hong Kong" /> }
  if (norm.includes('japan') || norm === 'jp') return { code: 'JP', name: 'Japan', flagComponent: <EmojiFlag emoji="🇯🇵" label="Japan" /> }
  if (norm.includes('china') || norm === 'cn') return { code: 'CN', name: 'China', flagComponent: <EmojiFlag emoji="🇨🇳" label="China" /> }
  if (norm.includes('south korea') || norm.includes('korea') || norm === 'kr') return { code: 'KR', name: 'South Korea', flagComponent: <EmojiFlag emoji="🇰🇷" label="South Korea" /> }
  if (norm.includes('taiwan') || norm === 'tw') return { code: 'TW', name: 'Taiwan', flagComponent: <EmojiFlag emoji="🇹🇼" label="Taiwan" /> }
  if (norm.includes('malaysia') || norm === 'my') return { code: 'MY', name: 'Malaysia', flagComponent: <EmojiFlag emoji="🇲🇾" label="Malaysia" /> }
  if (norm.includes('indonesia') || norm === 'id') return { code: 'ID', name: 'Indonesia', flagComponent: <EmojiFlag emoji="🇮🇩" label="Indonesia" /> }
  if (norm.includes('philippines') || norm === 'ph') return { code: 'PH', name: 'Philippines', flagComponent: <EmojiFlag emoji="🇵🇭" label="Philippines" /> }
  if (norm.includes('vietnam') || norm === 'vn') return { code: 'VN', name: 'Vietnam', flagComponent: <EmojiFlag emoji="🇻🇳" label="Vietnam" /> }
  if (norm.includes('thailand') || norm === 'th') return { code: 'TH', name: 'Thailand', flagComponent: <EmojiFlag emoji="🇹🇭" label="Thailand" /> }
  if (norm.includes('bangladesh') || norm === 'bd') return { code: 'BD', name: 'Bangladesh', flagComponent: <EmojiFlag emoji="🇧🇩" label="Bangladesh" /> }
  if (norm.includes('pakistan') || norm === 'pk') return { code: 'PK', name: 'Pakistan', flagComponent: <EmojiFlag emoji="🇵🇰" label="Pakistan" /> }
  if (norm.includes('sri lanka') || norm === 'lk') return { code: 'LK', name: 'Sri Lanka', flagComponent: <EmojiFlag emoji="🇱🇰" label="Sri Lanka" /> }
  if (norm.includes('nepal') || norm === 'np') return { code: 'NP', name: 'Nepal', flagComponent: <EmojiFlag emoji="🇳🇵" label="Nepal" /> }
  if (norm.includes('myanmar') || norm.includes('burma') || norm === 'mm') return { code: 'MM', name: 'Myanmar', flagComponent: <EmojiFlag emoji="🇲🇲" label="Myanmar" /> }
  if (norm.includes('cambodia') || norm === 'kh') return { code: 'KH', name: 'Cambodia', flagComponent: <EmojiFlag emoji="🇰🇭" label="Cambodia" /> }
  if (norm.includes('laos') || norm === 'la') return { code: 'LA', name: 'Laos', flagComponent: <EmojiFlag emoji="🇱🇦" label="Laos" /> }
  if (norm.includes('maldives') || norm === 'mv') return { code: 'MV', name: 'Maldives', flagComponent: <EmojiFlag emoji="🇲🇻" label="Maldives" /> }
  if (norm.includes('new zealand') || norm === 'nz') return { code: 'NZ', name: 'New Zealand', flagComponent: <EmojiFlag emoji="🇳🇿" label="New Zealand" /> }
  if (norm.includes('papua') || norm === 'pg') return { code: 'PG', name: 'Papua New Guinea', flagComponent: <EmojiFlag emoji="🇵🇬" label="Papua New Guinea" /> }
  if (norm.includes('fiji') || norm === 'fj') return { code: 'FJ', name: 'Fiji', flagComponent: <EmojiFlag emoji="🇫🇯" label="Fiji" /> }

  // ── Europe ──
  if (norm.includes('france') || norm === 'fr') return { code: 'FR', name: 'France', flagComponent: <EmojiFlag emoji="🇫🇷" label="France" /> }
  if (norm.includes('italy') || norm === 'it') return { code: 'IT', name: 'Italy', flagComponent: <EmojiFlag emoji="🇮🇹" label="Italy" /> }
  if (norm.includes('spain') || norm === 'es') return { code: 'ES', name: 'Spain', flagComponent: <EmojiFlag emoji="🇪🇸" label="Spain" /> }
  if (norm.includes('portugal') || norm === 'pt') return { code: 'PT', name: 'Portugal', flagComponent: <EmojiFlag emoji="🇵🇹" label="Portugal" /> }
  if (norm.includes('netherlands') || norm.includes('holland') || norm === 'nl') return { code: 'NL', name: 'Netherlands', flagComponent: <EmojiFlag emoji="🇳🇱" label="Netherlands" /> }
  if (norm.includes('belgium') || norm === 'be') return { code: 'BE', name: 'Belgium', flagComponent: <EmojiFlag emoji="🇧🇪" label="Belgium" /> }
  if (norm.includes('switzerland') || norm === 'ch') return { code: 'CH', name: 'Switzerland', flagComponent: <EmojiFlag emoji="🇨🇭" label="Switzerland" /> }
  if (norm.includes('austria') || norm === 'at') return { code: 'AT', name: 'Austria', flagComponent: <EmojiFlag emoji="🇦🇹" label="Austria" /> }
  if (norm.includes('sweden') || norm === 'se') return { code: 'SE', name: 'Sweden', flagComponent: <EmojiFlag emoji="🇸🇪" label="Sweden" /> }
  if (norm.includes('norway') || norm === 'no') return { code: 'NO', name: 'Norway', flagComponent: <EmojiFlag emoji="🇳🇴" label="Norway" /> }
  if (norm.includes('denmark') || norm === 'dk') return { code: 'DK', name: 'Denmark', flagComponent: <EmojiFlag emoji="🇩🇰" label="Denmark" /> }
  if (norm.includes('finland') || norm === 'fi') return { code: 'FI', name: 'Finland', flagComponent: <EmojiFlag emoji="🇫🇮" label="Finland" /> }
  if (norm.includes('ireland') || norm === 'ie') return { code: 'IE', name: 'Ireland', flagComponent: <EmojiFlag emoji="🇮🇪" label="Ireland" /> }
  if (norm.includes('poland') || norm === 'pl') return { code: 'PL', name: 'Poland', flagComponent: <EmojiFlag emoji="🇵🇱" label="Poland" /> }
  if (norm.includes('czech') || norm === 'cz') return { code: 'CZ', name: 'Czech Republic', flagComponent: <EmojiFlag emoji="🇨🇿" label="Czech Republic" /> }
  if (norm.includes('slovakia') || norm === 'sk') return { code: 'SK', name: 'Slovakia', flagComponent: <EmojiFlag emoji="🇸🇰" label="Slovakia" /> }
  if (norm.includes('hungary') || norm === 'hu') return { code: 'HU', name: 'Hungary', flagComponent: <EmojiFlag emoji="🇭🇺" label="Hungary" /> }
  if (norm.includes('romania') || norm === 'ro') return { code: 'RO', name: 'Romania', flagComponent: <EmojiFlag emoji="🇷🇴" label="Romania" /> }
  if (norm.includes('bulgaria') || norm === 'bg') return { code: 'BG', name: 'Bulgaria', flagComponent: <EmojiFlag emoji="🇧🇬" label="Bulgaria" /> }
  if (norm.includes('croatia') || norm === 'hr') return { code: 'HR', name: 'Croatia', flagComponent: <EmojiFlag emoji="🇭🇷" label="Croatia" /> }
  if (norm.includes('serbia') || norm === 'rs') return { code: 'RS', name: 'Serbia', flagComponent: <EmojiFlag emoji="🇷🇸" label="Serbia" /> }
  if (norm.includes('slovenia') || norm === 'si') return { code: 'SI', name: 'Slovenia', flagComponent: <EmojiFlag emoji="🇸🇮" label="Slovenia" /> }
  if (norm.includes('greece') || norm === 'gr') return { code: 'GR', name: 'Greece', flagComponent: <EmojiFlag emoji="🇬🇷" label="Greece" /> }
  if (norm.includes('ukraine') || norm === 'ua') return { code: 'UA', name: 'Ukraine', flagComponent: <EmojiFlag emoji="🇺🇦" label="Ukraine" /> }
  if (norm.includes('russia') || norm === 'ru') return { code: 'RU', name: 'Russia', flagComponent: <EmojiFlag emoji="🇷🇺" label="Russia" /> }
  if (norm.includes('turkey') || norm.includes('türkiye') || norm === 'tr') return { code: 'TR', name: 'Turkey', flagComponent: <EmojiFlag emoji="🇹🇷" label="Turkey" /> }
  if (norm.includes('luxembourg') || norm === 'lu') return { code: 'LU', name: 'Luxembourg', flagComponent: <EmojiFlag emoji="🇱🇺" label="Luxembourg" /> }
  if (norm.includes('iceland') || norm === 'is') return { code: 'IS', name: 'Iceland', flagComponent: <EmojiFlag emoji="🇮🇸" label="Iceland" /> }
  if (norm.includes('malta') || norm === 'mt') return { code: 'MT', name: 'Malta', flagComponent: <EmojiFlag emoji="🇲🇹" label="Malta" /> }
  if (norm.includes('cyprus') || norm === 'cy') return { code: 'CY', name: 'Cyprus', flagComponent: <EmojiFlag emoji="🇨🇾" label="Cyprus" /> }
  if (norm.includes('latvia') || norm === 'lv') return { code: 'LV', name: 'Latvia', flagComponent: <EmojiFlag emoji="🇱🇻" label="Latvia" /> }
  if (norm.includes('lithuania') || norm === 'lt') return { code: 'LT', name: 'Lithuania', flagComponent: <EmojiFlag emoji="🇱🇹" label="Lithuania" /> }
  if (norm.includes('estonia') || norm === 'ee') return { code: 'EE', name: 'Estonia', flagComponent: <EmojiFlag emoji="🇪🇪" label="Estonia" /> }
  if (norm.includes('north macedonia') || norm.includes('macedonia') || norm === 'mk') return { code: 'MK', name: 'North Macedonia', flagComponent: <EmojiFlag emoji="🇲🇰" label="North Macedonia" /> }
  if (norm.includes('albania') || norm === 'al') return { code: 'AL', name: 'Albania', flagComponent: <EmojiFlag emoji="🇦🇱" label="Albania" /> }
  if (norm.includes('bosnia') || norm === 'ba') return { code: 'BA', name: 'Bosnia & Herzegovina', flagComponent: <EmojiFlag emoji="🇧🇦" label="Bosnia" /> }
  if (norm.includes('montenegro') || norm === 'me') return { code: 'ME', name: 'Montenegro', flagComponent: <EmojiFlag emoji="🇲🇪" label="Montenegro" /> }
  if (norm.includes('kosovo') || norm === 'xk') return { code: 'XK', name: 'Kosovo', flagComponent: <EmojiFlag emoji="🇽🇰" label="Kosovo" /> }

  // ── Middle East ──
  if (norm.includes('qatar') || norm === 'qa') return { code: 'QA', name: 'Qatar', flagComponent: <EmojiFlag emoji="🇶🇦" label="Qatar" /> }
  if (norm.includes('kuwait') || norm === 'kw') return { code: 'KW', name: 'Kuwait', flagComponent: <EmojiFlag emoji="🇰🇼" label="Kuwait" /> }
  if (norm.includes('bahrain') || norm === 'bh') return { code: 'BH', name: 'Bahrain', flagComponent: <EmojiFlag emoji="🇧🇭" label="Bahrain" /> }
  if (norm.includes('oman') || norm === 'om') return { code: 'OM', name: 'Oman', flagComponent: <EmojiFlag emoji="🇴🇲" label="Oman" /> }
  if (norm.includes('israel') || norm === 'il') return { code: 'IL', name: 'Israel', flagComponent: <EmojiFlag emoji="🇮🇱" label="Israel" /> }
  if (norm.includes('jordan') || norm === 'jo') return { code: 'JO', name: 'Jordan', flagComponent: <EmojiFlag emoji="🇯🇴" label="Jordan" /> }
  if (norm.includes('lebanon') || norm === 'lb') return { code: 'LB', name: 'Lebanon', flagComponent: <EmojiFlag emoji="🇱🇧" label="Lebanon" /> }
  if (norm.includes('iraq') || norm === 'iq') return { code: 'IQ', name: 'Iraq', flagComponent: <EmojiFlag emoji="🇮🇶" label="Iraq" /> }
  if (norm.includes('iran') || norm === 'ir') return { code: 'IR', name: 'Iran', flagComponent: <EmojiFlag emoji="🇮🇷" label="Iran" /> }
  if (norm.includes('yemen') || norm === 'ye') return { code: 'YE', name: 'Yemen', flagComponent: <EmojiFlag emoji="🇾🇪" label="Yemen" /> }
  if (norm.includes('syria') || norm === 'sy') return { code: 'SY', name: 'Syria', flagComponent: <EmojiFlag emoji="🇸🇾" label="Syria" /> }

  // ── Africa ──
  if (norm.includes('south africa') || norm === 'za') return { code: 'ZA', name: 'South Africa', flagComponent: <EmojiFlag emoji="🇿🇦" label="South Africa" /> }
  if (norm.includes('nigeria') || norm === 'ng') return { code: 'NG', name: 'Nigeria', flagComponent: <EmojiFlag emoji="🇳🇬" label="Nigeria" /> }
  if (norm.includes('kenya') || norm === 'ke') return { code: 'KE', name: 'Kenya', flagComponent: <EmojiFlag emoji="🇰🇪" label="Kenya" /> }
  if (norm.includes('ghana') || norm === 'gh') return { code: 'GH', name: 'Ghana', flagComponent: <EmojiFlag emoji="🇬🇭" label="Ghana" /> }
  if (norm.includes('ethiopia') || norm === 'et') return { code: 'ET', name: 'Ethiopia', flagComponent: <EmojiFlag emoji="🇪🇹" label="Ethiopia" /> }
  if (norm.includes('tanzania') || norm === 'tz') return { code: 'TZ', name: 'Tanzania', flagComponent: <EmojiFlag emoji="🇹🇿" label="Tanzania" /> }
  if (norm.includes('uganda') || norm === 'ug') return { code: 'UG', name: 'Uganda', flagComponent: <EmojiFlag emoji="🇺🇬" label="Uganda" /> }
  if (norm.includes('zimbabwe') || norm === 'zw') return { code: 'ZW', name: 'Zimbabwe', flagComponent: <EmojiFlag emoji="🇿🇼" label="Zimbabwe" /> }
  if (norm.includes('zambia') || norm === 'zm') return { code: 'ZM', name: 'Zambia', flagComponent: <EmojiFlag emoji="🇿🇲" label="Zambia" /> }
  if (norm.includes('rwanda') || norm === 'rw') return { code: 'RW', name: 'Rwanda', flagComponent: <EmojiFlag emoji="🇷🇼" label="Rwanda" /> }
  if (norm.includes('senegal') || norm === 'sn') return { code: 'SN', name: 'Senegal', flagComponent: <EmojiFlag emoji="🇸🇳" label="Senegal" /> }
  if (norm.includes('ivory coast') || norm.includes('cote d') || norm === 'ci') return { code: 'CI', name: 'Ivory Coast', flagComponent: <EmojiFlag emoji="🇨🇮" label="Ivory Coast" /> }
  if (norm.includes('cameroon') || norm === 'cm') return { code: 'CM', name: 'Cameroon', flagComponent: <EmojiFlag emoji="🇨🇲" label="Cameroon" /> }
  if (norm.includes('morocco') || norm === 'ma') return { code: 'MA', name: 'Morocco', flagComponent: <EmojiFlag emoji="🇲🇦" label="Morocco" /> }
  if (norm.includes('algeria') || norm === 'dz') return { code: 'DZ', name: 'Algeria', flagComponent: <EmojiFlag emoji="🇩🇿" label="Algeria" /> }
  if (norm.includes('tunisia') || norm === 'tn') return { code: 'TN', name: 'Tunisia', flagComponent: <EmojiFlag emoji="🇹🇳" label="Tunisia" /> }
  if (norm.includes('libya') || norm === 'ly') return { code: 'LY', name: 'Libya', flagComponent: <EmojiFlag emoji="🇱🇾" label="Libya" /> }
  if (norm.includes('egypt') || norm === 'eg') return { code: 'EG', name: 'Egypt', flagComponent: <EmojiFlag emoji="🇪🇬" label="Egypt" /> }
  if (norm.includes('sudan') || norm === 'sd') return { code: 'SD', name: 'Sudan', flagComponent: <EmojiFlag emoji="🇸🇩" label="Sudan" /> }
  if (norm.includes('angola') || norm === 'ao') return { code: 'AO', name: 'Angola', flagComponent: <EmojiFlag emoji="🇦🇴" label="Angola" /> }
  if (norm.includes('mozambique') || norm === 'mz') return { code: 'MZ', name: 'Mozambique', flagComponent: <EmojiFlag emoji="🇲🇿" label="Mozambique" /> }
  if (norm.includes('madagascar') || norm === 'mg') return { code: 'MG', name: 'Madagascar', flagComponent: <EmojiFlag emoji="🇲🇬" label="Madagascar" /> }
  if (norm.includes('namibia') || norm === 'na') return { code: 'NA', name: 'Namibia', flagComponent: <EmojiFlag emoji="🇳🇦" label="Namibia" /> }
  if (norm.includes('botswana') || norm === 'bw') return { code: 'BW', name: 'Botswana', flagComponent: <EmojiFlag emoji="🇧🇼" label="Botswana" /> }

  // ── Americas ──
  if (norm.includes('mexico') || norm === 'mx') return { code: 'MX', name: 'Mexico', flagComponent: <EmojiFlag emoji="🇲🇽" label="Mexico" /> }
  if (norm.includes('brazil') || norm === 'br') return { code: 'BR', name: 'Brazil', flagComponent: <EmojiFlag emoji="🇧🇷" label="Brazil" /> }
  if (norm.includes('argentina') || norm === 'ar') return { code: 'AR', name: 'Argentina', flagComponent: <EmojiFlag emoji="🇦🇷" label="Argentina" /> }
  if (norm.includes('chile') || norm === 'cl') return { code: 'CL', name: 'Chile', flagComponent: <EmojiFlag emoji="🇨🇱" label="Chile" /> }
  if (norm.includes('colombia') || norm === 'co') return { code: 'CO', name: 'Colombia', flagComponent: <EmojiFlag emoji="🇨🇴" label="Colombia" /> }
  if (norm.includes('peru') || norm === 'pe') return { code: 'PE', name: 'Peru', flagComponent: <EmojiFlag emoji="🇵🇪" label="Peru" /> }
  if (norm.includes('venezuela') || norm === 've') return { code: 'VE', name: 'Venezuela', flagComponent: <EmojiFlag emoji="🇻🇪" label="Venezuela" /> }
  if (norm.includes('ecuador') || norm === 'ec') return { code: 'EC', name: 'Ecuador', flagComponent: <EmojiFlag emoji="🇪🇨" label="Ecuador" /> }
  if (norm.includes('bolivia') || norm === 'bo') return { code: 'BO', name: 'Bolivia', flagComponent: <EmojiFlag emoji="🇧🇴" label="Bolivia" /> }
  if (norm.includes('paraguay') || norm === 'py') return { code: 'PY', name: 'Paraguay', flagComponent: <EmojiFlag emoji="🇵🇾" label="Paraguay" /> }
  if (norm.includes('uruguay') || norm === 'uy') return { code: 'UY', name: 'Uruguay', flagComponent: <EmojiFlag emoji="🇺🇾" label="Uruguay" /> }
  if (norm.includes('guatemala') || norm === 'gt') return { code: 'GT', name: 'Guatemala', flagComponent: <EmojiFlag emoji="🇬🇹" label="Guatemala" /> }
  if (norm.includes('costa rica') || norm === 'cr') return { code: 'CR', name: 'Costa Rica', flagComponent: <EmojiFlag emoji="🇨🇷" label="Costa Rica" /> }
  if (norm.includes('panama') || norm === 'pa') return { code: 'PA', name: 'Panama', flagComponent: <EmojiFlag emoji="🇵🇦" label="Panama" /> }
  if (norm.includes('cuba') || norm === 'cu') return { code: 'CU', name: 'Cuba', flagComponent: <EmojiFlag emoji="🇨🇺" label="Cuba" /> }
  if (norm.includes('dominican') || norm === 'do') return { code: 'DO', name: 'Dominican Republic', flagComponent: <EmojiFlag emoji="🇩🇴" label="Dominican Republic" /> }
  if (norm.includes('jamaica') || norm === 'jm') return { code: 'JM', name: 'Jamaica', flagComponent: <EmojiFlag emoji="🇯🇲" label="Jamaica" /> }
  if (norm.includes('trinidad') || norm === 'tt') return { code: 'TT', name: 'Trinidad & Tobago', flagComponent: <EmojiFlag emoji="🇹🇹" label="Trinidad & Tobago" /> }

  // Fallback for any unlisted custom location
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
