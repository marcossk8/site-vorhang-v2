import { Review } from '@/app/database/types'

export const reviews: Review[] = [
  {
    id: 'review-1',
    stars: 5,
    user: {
      id: 'user-1',
      name: 'Agostina Ramirez',
      photo_url: '/images/reviews/users/user-1.svg',
    },
    comment:
      'Excelente atención y asesoramiento!!!! Los recomiendo, muy buena calidad de los productos y muy buenos precios. Gracias Isaías y Lucrecia por el trabajo hermoso que hicieron.',
  },
  {
    id: 'review-2',
    stars: 5,
    user: {
      id: 'user-2',
      name: 'Rosario Baudino',
      photo_url: '/images/reviews/users/user-2.svg',
    },
    comment:
      'Excelente experiencia desde el inicio hasta el final. Mi contacto fue vía Instagram, Isaías siempre atento, buen asesoramiento, producto de alta calidad, precio excelente con respecto a otras marcas, tiempo de espera acorde, nada que objetar. Estoy muy contenta. Recomiendo 100%',
  },
  {
    id: 'review-3',
    stars: 5,
    user: {
      id: 'user-3',
      name: 'Maria Guadalupe Mendez',
      photo_url: '/images/reviews/users/user-3.svg',
    },
    comment:
      'Excelente atención,  tuve una rápida respuesta,  los tiempos de entrega fueron los pactados y la instalación perfecta. Los productos son de primera calidad. Super recomendable.',
  },
]
