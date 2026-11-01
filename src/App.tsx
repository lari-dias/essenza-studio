import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Treatments } from './sections/Treatments'
import { CarePlans } from './sections/CarePlans'
import { Testimonials } from './sections/Testimonials'
import { Contact } from './sections/Contact'
export default function App() {
  return <><Header /><main id="conteudo"><Hero /><About /><Treatments /><CarePlans /><Testimonials /><Contact /></main><Footer /></>
}
