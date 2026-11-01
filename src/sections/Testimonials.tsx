
import { Heart, ShieldCheck, Sparkles } from 'lucide-react'
import { Reveal } from '../components/ui/Reveal'

const benefits = [
  {
    icon: Heart,
    title: 'Cuidado personalizado',
    description:
      'Cada pessoa é única. Por isso, valorizamos suas necessidades e objetivos em cada etapa.',
  },
  {
    icon: Sparkles,
    title: 'Beleza e bem-estar',
    description:
      'Uma experiência que une autocuidado, conforto e atenção aos detalhes.',
  },
  {
    icon: ShieldCheck,
    title: 'Atenção em cada detalhe',
    description:
      'Um ambiente pensado para proporcionar acolhimento, tranquilidade e confiança.',
  },
]

export function Testimonials() {
  return (
    <section id="diferenciais" className="section testimonials">
      <div className="container">
        <Reveal className="testimonials-heading">
          <p className="eyebrow">NOSSO JEITO DE CUIDAR</p>

          <h2>
            Por que escolher
            <br />
            <em>a Essenza?</em>
          </h2>

          <p>
            Mais do que tratamentos, uma experiência de cuidado
            pensada para você.
          </p>
        </Reveal>

        <div className="testimonials-grid">
          {benefits.map(({ icon: Icon, title, description }) => (
            <Reveal key={title} className="testimonial-card">
              <Icon
                className="testimonial-quote"
                size={28}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <h3>{title}</h3>

              <p className="testimonial-text">
                {description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
