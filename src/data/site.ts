
import heroImage from '../assets/images/hero.webp'
import recepcaoImage from '../assets/images/recepcao.webp'
import limpezaPeleImage from '../assets/images/limpeza-pele.webp'
import skinboosterImage from '../assets/images/skinbooster.webp'
import modelagemCorporalImage from '../assets/images/modelagem-corporal.png'
import tratamentoFacialImage from '../assets/images/tratamento-facial.webp'
import spaImage from '../assets/images/spa.webp'

export const site = {
  instagramUrl: '',
}

export const navigation = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Planos', href: '#cuidados' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Contato', href: '#contato' },
]

export const images = {
  hero: {
    src: heroImage,
    alt: 'Mulher relaxando durante um momento de autocuidado',
  },
  about: {
    src: recepcaoImage,
    alt: 'Recepção ilustrativa do Essenza Studio',
  },
  limpezaPele: {
    src: limpezaPeleImage,
    alt: 'Aplicação de máscara durante um tratamento facial',
  },
  skinbooster: {
    src: skinboosterImage,
    alt: 'Detalhe de cuidados com a pele do rosto',
  },
  modelagemCorporal: {
    src: modelagemCorporalImage,
    alt: 'Cuidados estéticos corporais',
  },
  tratamentoFacial: {
    src: tratamentoFacialImage,
    alt: 'Mulher relaxando durante tratamento facial',
  },
  spa: {
    src: spaImage,
    alt: 'Toalhas e elementos de spa em um ambiente acolhedor',
  },
}

export const treatments = [
  {
    title: 'Limpeza de pele',
    description: 'Mais saúde e luminosidade para a sua pele.',
    image: images.limpezaPele.src,
    alt: images.limpezaPele.alt,
  },
  {
    title: 'Skinbooster',
    description: 'Hidratação profunda e cuidado com a pele.',
    image: images.skinbooster.src,
    alt: images.skinbooster.alt,
  },
  {
    title: 'Modelagem corporal',
    description: 'Cuidados personalizados para o seu corpo.',
    image: images.modelagemCorporal.src,
    alt: images.modelagemCorporal.alt,
  },
  {
    title: 'Tratamentos faciais',
    description: 'Experiências de cuidado para cada necessidade.',
    image: images.tratamentoFacial.src,
    alt: images.tratamentoFacial.alt,
  },
]

export const carePlans = [
  {
    title: 'Essencial',
    subtitle: 'O primeiro passo para se cuidar.',
    description: 'Para quem deseja começar uma rotina de autocuidado.',
    items: [
      'Avaliação personalizada',
      'Limpeza de pele',
      'Cuidados essenciais',
    ],
  },
  {
    title: 'Equilíbrio',
    subtitle: 'Seu bem-estar em primeiro lugar.',
    description: 'Para quem busca cuidados contínuos e personalizados.',
    items: [
      'Avaliação e plano personalizado',
      'Acompanhamento contínuo',
      'Tratamentos combinados',
    ],
  },
  {
    title: 'Completo',
    subtitle: 'Uma experiência de cuidado integral.',
    description: 'Para quem deseja um acompanhamento mais abrangente.',
    items: [
      'Avaliação e plano completo',
      'Tratamentos personalizados',
      'Cuidados avançados',
    ],
  },
]

export const careSteps = [
  {
    title: 'Primeiro, ouvir',
    text: 'Seu momento, suas preferências e suas expectativas abrem a conversa.',
  },
  {
    title: 'Depois, personalizar',
    text: 'As possibilidades de cuidado são escolhidas a partir da avaliação individual.',
  },
  {
    title: 'Sempre, respeitar',
    text: 'Cada etapa considera seu conforto, suas escolhas e o seu tempo.',
  },
]
