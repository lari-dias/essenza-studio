
import { Leaf } from 'lucide-react'

export function Brand() {
  return (
    <a
      href="#inicio"
      className="brand"
      aria-label="Essenza Studio — voltar ao início"
    >
      <Leaf
        className="brand-icon"
        size={29}
        strokeWidth={1.25}
        aria-hidden="true"
      />

      <span className="brand-name">ESSENZA</span>

      <span className="brand-subtitle">STUDIO</span>
    </a>
  )
}
