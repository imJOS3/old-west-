import Image from 'next/image'

type PhotoFrameProps = {
  src: string
  alt: string
  sizes: string
  aspectClass?: string
  priority?: boolean
  className?: string
  children?: React.ReactNode
}

export default function PhotoFrame({
  src,
  alt,
  sizes,
  aspectClass = 'aspect-[4/5]',
  priority = false,
  className = '',
  children,
}: PhotoFrameProps) {
  return (
    <div className={`group photo-frame ${className}`}>
      <span className="photo-frame-corner photo-frame-corner-tl" />
      <span className="photo-frame-corner photo-frame-corner-tr" />
      <span className="photo-frame-corner photo-frame-corner-bl" />
      <span className="photo-frame-corner photo-frame-corner-br" />
      <div className={`photo-frame-inner relative overflow-hidden ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="photo-shine" />
        <span className="photo-vignette" />
        {children}
      </div>
      <span className="photo-frame-stripe" />
    </div>
  )
}
