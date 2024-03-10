import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context'

export interface Category {
  title: string
  // eslint-disable-next-line no-unused-vars
  onClick: (router: AppRouterInstance) => void
  id: string
}
