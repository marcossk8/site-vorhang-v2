export interface ServiceIcon {
  src: string
  alt: string
  width?: number
  height?: number
}

export interface Service {
  id: number
  title: string
  description: string
  icon: ServiceIcon
}

/* Reviews */

export interface Review {
  id: string
  stars: number
  user: User
  comment: string
}

export interface User {
  id: string
  name: string
  photo_url: string
}
