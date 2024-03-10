import { ReactNode } from 'react'
import { ImageBannerContainer } from '@/app/components/ImageBannerContainer'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export const QuoterBanner = (): ReactNode => {
  return (
    <ImageBannerContainer
      src="/images/banners/quoter-banner.jpg"
      imageStyles={{
        opacity: 'none',
        filter: 'grayscale(100%)',
      }}
      contentStyles={{
        position: 'absolute',
        width: '100%',
        backgroundColor: '#00000054',
      }}
    >
      <Typography
        sx={{
          fontSize: '24px',
          color: '#fff',
          fontWeight: 700,
          lineHeight: 'normal',
          margin: '0 0 70px 0',
        }}
      >
        Planifica tus gastos con anticipación.
      </Typography>
      <Typography sx={{ color: '#fff', width: '70%', margin: '0 0 70px 0' }}>
        Convierte tus sueños en realidad con nuestro cotizador online. Seguí los
        pasos de tus productos deseados y comienza a planificar tus proyectos.
      </Typography>
      <Link
        style={{
          color: '#fff',
          backgroundColor: '#000',
          padding: '6px 16px',
          height: '36px',
          fontSize: '14px',
          margin: '12px 12px 12px 0',
          borderRadius: '16px',
          width: '150px',
          textAlign: 'center',
          boxShadow:
            '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
        }}
        href="/cotizador"
      >
        Saber más
      </Link>
    </ImageBannerContainer>
  )
}
