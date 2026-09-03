import Image from 'next/image'

interface ProjectVisualProps {
  imageSrc?: string
  alt?: string
  caption?: string
}

export default function ProjectVisual({
  imageSrc = '/home-img/satyapaan-min 2.png',
  alt = 'Satyaapan Passport Verification Portal Interface',
  caption,
}: ProjectVisualProps) {
  return (
    <section className="py-8 sm:py-12 bg-white font-['Plus_Jakarta_Sans',sans-serif] overflow-hidden">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden border border-gray-200/90 shadow-lg bg-gray-50">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 1280px"
            priority
          />
        </div>
        {caption && (
          <p className="text-center text-xs text-gray-500 mt-3 italic font-medium">
            {caption}
          </p>
        )}
      </div>
    </section>
  )
}
