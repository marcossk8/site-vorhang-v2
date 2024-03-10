export const QUOTER_LABEL = 'Cotizador'

export const PRODUCTS_LABEL = 'Productos'

export const CONTACT_LABEL = 'Contacto'

export const FREQUENT_QUESTIONS_LABEL = 'Preguntas frecuentes'

export enum Routes {
  _QUOTER = '/cotizador',
  _PRODUCTS = '/productos',
  _CONTACT = '/contacto',
  _FREQUENT_QUESTIONS = '/preguntas-frecuentes',
}

export interface Route {
  href: string
  label: string
}

export const ROUTES: {
  [key: string]: Route
} = {
  [Routes._PRODUCTS]: {
    href: Routes._PRODUCTS,
    label: PRODUCTS_LABEL,
  },
  [Routes._QUOTER]: {
    href: Routes._QUOTER,
    label: QUOTER_LABEL,
  },
  [Routes._CONTACT]: {
    href: Routes._CONTACT,
    label: CONTACT_LABEL,
  },
  [Routes._FREQUENT_QUESTIONS]: {
    href: Routes._FREQUENT_QUESTIONS,
    label: FREQUENT_QUESTIONS_LABEL,
  },
}
