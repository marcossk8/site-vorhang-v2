import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

export const INITIAL_CATEGORIES = [
  {
    title: 'INTERIOR',
    onClick: (router: AppRouterInstance) => router.push('/productos/interior'),
    id: 'cat_interior',
    img: {
      src: '/images/roller-blinds/blackout/vorhang-roller-blind-2.jpg',
      alt: '',
    },
  },
  {
    title: 'EXTERIOR',
    onClick: (router: AppRouterInstance) =>
      router.push('/productos/exterior/toldos'),
    id: 'cat_exterior',
    img: {
      src: '/images/awnings/vorhang-awnings-1.jpg',
      alt: '',
    },
  },
]

export const INTERIOR_CATEGORIES = [
  {
    title: 'BANDAS VERTICALES',
    id: 'cat_bandas',
    onClick: (router: AppRouterInstance) =>
      router.push('/productos/interior/bandas-verticales'),
    img: {
      src: '/images/vertical-blinds/vorhang-vertical-blind-1.jpg',
      alt: '',
    },
  },
  {
    title: 'CORTINAS ROLLER',
    id: 'cat_cortinas',
    onClick: (router: AppRouterInstance) =>
      router.push('/productos/interior/cortinas-roller'),
    img: {
      src: '/images/roller-blinds/blackout/vorhang-roller-blind-2.jpg',
      alt: '',
    },
  },
]
