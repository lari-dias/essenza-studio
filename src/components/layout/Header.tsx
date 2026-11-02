
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navigation } from '../../data/site'
import { Brand } from '../ui/Brand'
import { Button } from '../ui/Button'

export function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggle.current?.focus()
      }
    }

    const closeOnOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Element &&
        !event.target.closest('.site-header')
      ) {
        setOpen(false)
      }
    }

    const media = window.matchMedia('(min-width: 900px)')

    const closeOnDesktop = () => {
      if (media.matches) setOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutside)
    media.addEventListener('change', closeOnDesktop)

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutside)
      media.removeEventListener('change', closeOnDesktop)
    }
  }, [open])

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <Brand />

          <nav
            className="desktop-nav"
            aria-label="Navegação principal"
          >
            {navigation.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <Button href="#tratamentos" className="header-cta">
            Conheça nossos cuidados
          </Button>

          <button
            ref={toggle}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((previous) => !previous)}
          >
            {open ? (
              <X size={26} aria-hidden="true" />
            ) : (
              <Menu size={26} aria-hidden="true" />
            )}
          </button>
        </div>

        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navegação mobile"
          hidden={!open}
        >
          {navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#tratamentos"
            onClick={() => setOpen(false)}
          >
            Conheça nossos cuidados
          </a>
        </nav>
      </header>
    </>
  )
}
