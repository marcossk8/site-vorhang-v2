import { ReactNode } from 'react'
import Image from 'next/image'
import { Typography } from '@/app/material'
import { ServiceIcon } from '@/app/database/types'
import { CardContainer } from '@/app/components/CardContainer'

interface ServiceProps {
  icon: ServiceIcon
  title: string
  description: string
}

export const Service = ({
  icon,
  title,
  description,
}: ServiceProps): ReactNode => {
  const { src, alt, width = 40, height = 40 } = icon

  return (
    <CardContainer>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ margin: '28px 0' }}
      />
      <Typography
        sx={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: '14px', textAlign: 'center' }}>
        {description}
      </Typography>
    </CardContainer>
  )
}
