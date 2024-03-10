import { Service } from '@/app/database/types'

export const services: Service[] = [
  {
    id: 1,
    title: 'Garantía de 3 años',
    description:
      'Junto con nuestra garantía de 3 años, te brindamos soporte completo y atención personalizada para asegurarnos de que estés satisfecho.',
    icon: {
      src: '/guarantee-icon.svg',
      alt: 'Ícono de Garantía',
    },
  },
  {
    id: 2,
    title: 'Asesoramiento personalizado',
    description:
      'Llevamos nuestro asesoramiento directamente a tu puerta, aprovechando nuestra amplia experiencia profesional.',
    icon: {
      src: '/personalized-advice-icon.svg',
      alt: 'Ícono de Garantía',
    },
  },
  {
    id: 3,
    title: 'Envíos a todo el país',
    description:
      'Realizamos envíos seguros a cualquier parte del país, protegiendo cuidadosamente nuestros productos para evitar daños.',
    icon: {
      src: '/shipments-icon.svg',
      alt: 'Ícono de Garantía',
      width: 80,
      height: 30,
    },
  },
]
