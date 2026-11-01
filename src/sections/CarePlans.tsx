
import { Check, Flower2, Leaf, Sparkles } from 'lucide-react'
import { carePlans } from '../data/site'
import { Reveal } from '../components/ui/Reveal'
import { Button } from '../components/ui/Button'

const planIcons = [Leaf, Flower2, Sparkles]

export function CarePlans() {
  return (
    <section id="cuidados" className="section care-plans">
      <div className="container">
        <Reveal className="center-heading">
          <p className="eyebrow">SEU CUIDADO, DO SEU JEITO</p>

          <h2>
            Encontre o cuidado
            <br />
            <em>ideal para você.</em>
          </h2>

          <p>
            Experiências personalizadas para cada momento.
          </p>
        </Reveal>

        <div className="plans-grid">
          {carePlans.map((plan, index) => {
            const Icon = planIcons[index] ?? Leaf
            const featured = index === 1

            return (
              <Reveal
                key={plan.title}
                className={`plan ${featured ? 'plan-featured' : ''}`}
              >
                <article>
                  {featured && (
                    <span className="plan-badge">
                      Em destaque
                    </span>
                  )}

                  <div className="plan-top">
                    <Icon
                      size={30}
                      strokeWidth={1.2}
                      aria-hidden="true"
                    />

                    <span className="plan-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3>{plan.title}</h3>

                  <span className="plan-subtitle">
                    {plan.subtitle}
                  </span>

                  <p>{plan.description}</p>

                  <ul>
                    {plan.items.map((item) => (
                      <li key={item}>
                        <Check
                          size={16}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href="#tratamentos"
                    variant={featured ? 'primary' : 'outline'}
                  >
                    Explorar nossos cuidados
                  </Button>
                </article>
              </Reveal>
            )
          })}
        </div>

        <p className="plans-disclaimer">
          Cada experiência é personalizável. A indicação dos
          cuidados depende de avaliação individual.
        </p>
      </div>
    </section>
  )
}
