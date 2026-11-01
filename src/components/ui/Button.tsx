
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'light'
  external?: boolean
  className?: string
  showArrow?: boolean
}

export function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
  showArrow = true,
}: Props) {
  return (
    <a
      className={`button button-${variant} ${className}`}
      href={href}
      {...(external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {})}
    >
      {children}

      {showArrow && (
        <ArrowRight
          size={18}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      )}
    </a>
  )
}
