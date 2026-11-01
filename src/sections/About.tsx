import { ShieldCheck, Sparkles, UsersRound } from 'lucide-react'
import { EditorialImage } from '../components/ui/EditorialImage'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { images } from '../data/site'

const highlights = [
  { icon: Sparkles, label: 'Ambiente acolhedor' },
  { icon: UsersRound, label: 'Profissionais qualificados' },
  { icon: ShieldCheck, label: 'Protocolos seguros' },
]

export function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container about-grid">
        <Reveal className="about-image">
          <EditorialImage
            src={images.about.src}
            alt={images.about.alt}
            width={900}
            height={1050}
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <Reveal className="about-copy">
          <p className="eyebrow">SOBRE O ESSENZA STUDIO</p>

          <h2>
            Estética que
            <br />
            <em>cuida de você</em>
          </h2>

          <p className="about-description">
            Acreditamos que beleza vai além da aparência.
            É sobre bem-estar, saúde e confiança em todas
            as fases da sua vida.
          </p>

          <div className="about-highlights">
            {highlights.map(({ icon: Icon, label }) => (
              <div className="about-highlight" key={label}>
                <span className="about-highlight-icon">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <Button href="#contato" variant="outline">
            Conheça a Essenza
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
