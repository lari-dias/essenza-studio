
import { ArrowRight } from 'lucide-react'
import { EditorialImage } from '../components/ui/EditorialImage'
import { Reveal } from '../components/ui/Reveal'
import { treatments } from '../data/site'

export function Treatments() {
  return (
    <section id="tratamentos" className="section treatments">
      <div className="container treatments-layout">
        <Reveal className="treatments-intro">
          <p className="eyebrow">TRATAMENTOS</p>

          <h2>
            Nossos principais
            <br />
            <em>serviços</em>
          </h2>

          <p>
            Procedimentos estéticos com foco em beleza,
            autocuidado e bem-estar.
          </p>

          <a className="treatments-all-link" href="#cuidados">
            Conheça nossos planos
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </Reveal>

        <div className="treatment-grid">
          {treatments.map((item) => (
            <Reveal key={item.title}>
              <article className="treatment-card">
                <div className="treatment-photo">
                  <EditorialImage
                    src={item.image}
                    alt={item.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 25vw"
                    width={800}
                    height={900}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="treatment-content">
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <a
                    className="treatment-action"
                    href="#cuidados"
                    aria-label={`Conhecer os planos relacionados a ${item.title.toLowerCase()}`}
                  >
                    <ArrowRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
