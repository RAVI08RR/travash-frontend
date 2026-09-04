import { MapPin, Globe2, Building2 } from 'lucide-react'

export interface OfficeLocation {
  label: string
  address: string
}

interface OfficeLocationsProps {
  offices?: OfficeLocation[]
}

const DEFAULT_OFFICES: OfficeLocation[] = [
  {
    label: 'India Development Center',
    address: 'Sanali Spazio building, Inorbit Mall Road, Madhapur, Hyderabad, Telangana 500081',
  },
  {
    label: 'Dubai / UAE Regional Office',
    address: 'SAIF ZONE ADDRESS : Saif Office Q1-05-103/A Sharjah, United Arab Emirates',
  },
]

export default function OfficeLocations({ offices }: OfficeLocationsProps) {
  const items = offices && offices.length > 0 ? offices : DEFAULT_OFFICES

  return (
    <div className="space-y-4 font-['Plus_Jakarta_Sans',sans-serif]">
      <h3 className="text-base font-bold text-[#0B1E3D] uppercase tracking-wider text-xs mb-3 text-gray-500">
        Our Global Presence
      </h3>
      {items.map((office, idx) => (
        <div
          key={idx}
          className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-100 hover:border-gray-200 transition-colors flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#004771] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#0B1E3D] mb-1">{office.label}</h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{office.address}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
