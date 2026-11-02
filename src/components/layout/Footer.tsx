
import { ArrowUp, Camera } from 'lucide-react'
import { navigation, site } from '../../data/site'
import { Brand } from '../ui/Brand'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Brand />

            <p>
              O cuidado floresce de dentro para fora.
              <br />
              Sua beleza, no seu tempo.
            </p>
          </div>

          <nav
            className="footer-nav"
            aria-label="Navegação do rodapé"
          >
            {navigation.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-social">
            {site.instagramUrl ? (
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Essenza Studio"
              >
                <Camera size={18} aria-hidden="true" />
                Instagram
              </a>
            ) : (
              <span>
                <Camera size={18} aria-hidden="true" />
                Instagram em breve
              </span>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Essenza Studio.{' '}
          </span>

          <span>
            Desenvolvido por{' '}
            <a
              href="https://www.instagram.com/dev.lari/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Lari Dev"
            >
              Lari Dev
            </a>
          </span>

          <a
            className="footer-back-top"
            href="#inicio"
            aria-label="Voltar ao início"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
