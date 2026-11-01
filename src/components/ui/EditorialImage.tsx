import type { ImgHTMLAttributes } from 'react'

type Props = ImgHTMLAttributes<HTMLImageElement> & { src: string; alt: string }

export function EditorialImage({ src, alt, sizes = '(max-width: 640px) 100vw, 50vw', ...props }: Props) {
  const responsive = src.startsWith('https://images.unsplash.com/')
    ? [400, 800, 1400].map(width => `${src.replace(/w=\d+/, `w=${width}`)} ${width}w`).join(', ')
    : undefined

  return <img src={src} alt={alt} srcSet={responsive} sizes={responsive ? sizes : undefined} {...props} />
}
