
import { Clock3, MapPin, Heart } from 'lucide-react'
import { images } from '../data/site'
import { EditorialImage } from '../components/ui/EditorialImage'
import { Reveal } from '../components/ui/Reveal'

export function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container contact-layout">
        <div className="contact-image">
          <EditorialImage
            src={images.spa.src}
            alt={images.spa.alt}
            width={600}
            height={700}
            loading="lazy"
            decoding="async"
          />
        </div>

        <Reveal className="contact-content">
          <p className="eyebrow">VAMOS CUIDAR DE VOCÊ?</p>

          <h2>
            Sua beleza,
            <br />
            <em>no seu tempo.</em>
          </h2>

          <p className="contact-description">
            Descubra uma experiência de autocuidado
            pensada para valorizar sua beleza e bem-estar.
          </p>

          <a className="contact-placeholder" href="#tratamentos">
            <Heart size={19} aria-hidden="true" />
            Conheça nossos cuidados
          </a>
        </Reveal>

        <Reveal className="contact-info">
          <p className="eyebrow">ONDE ESTAMOS</p>

          <div className="contact-info-item">
            <span className="contact-info-icon">
              <MapPin
                size={20}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>

            <div>
              <h3>Localização</h3>
              <p>Rua das Camélias, 128</p>
              <p>Jardim das Essências</p>
              <p>São Paulo — SP</p>
            </div>
          </div>

          <div className="contact-info-item">
            <span className="contact-info-icon">
              <Clock3
                size={20}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>

            <div>
              <h3>Horário de atendimento</h3>
              <p>Segunda a sexta: 9h às 19h</p>
              <p>Sábado: 9h às 14h</p>
              <p>Domingo: fechado</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
