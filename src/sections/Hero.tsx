
import { EditorialImage } from '../components/ui/EditorialImage'
import {
  ArrowRight,
  Heart,
  Leaf,
  Sparkles,
  Sprout,
  Waves,
} from 'lucide-react'
import { images } from '../data/site'
import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'

const highlights = [
  {
    icon: Leaf,
    label: 'Tratamentos faciais',
  },
  {
    icon: Waves,
    label: 'Tratamentos corporais',
  },
  {
    icon: Sparkles,
    label: 'Tecnologia avançada',
  },
  {
    icon: Heart,
    label: 'Atendimento personalizado',
  },
]

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">
            BELEZA · SAÚDE · AUTOCUIDADO
          </p>

          <h1>
            Realce a sua
            <br />
            <em>melhor versão</em>
          </h1>

          <p className="hero-description">
            Tratamentos estéticos personalizados para mais
            autoestima, bem-estar e qualidade de vida.
          </p>

          <Button href="#tratamentos">
            Conheça nossos cuidados
            <ArrowRight
              size={19}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          </Button>
        </Reveal>

        <div className="hero-image-area">
          <div className="hero-image-wrap">
            <EditorialImage
              className="hero-image"
              src={images.hero.src}
              alt={images.hero.alt}
              width={1400}
              height={1600}
              fetchPriority="high"
            />
          </div>

          <div className="hero-handwritten" aria-hidden="true">
            <span>Cuidar</span>
            <span>de você</span>
            <span>também</span>
            <span>é essencial</span>
            <Heart size={19} strokeWidth={1.5} />
          </div>

          <Sprout
            className="hero-botanical"
            size={110}
            strokeWidth={0.8}
            aria-hidden="true"
          />
        </div>
      </div>

      <div className="container hero-highlights">
        {highlights.map(({ icon: Icon, label }) => (
          <div className="hero-highlight" key={label}>
            <span className="hero-highlight-icon">
              <Icon
                size={22}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>

            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
