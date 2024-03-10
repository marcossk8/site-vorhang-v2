'use client'
import Typography from '@mui/material/Typography'
import { CustomButton } from '@/app/components/buttons/Button'
import { ImageBannerContainer } from '@/app/components/ImageBannerContainer'

export const ContactUs = () => {
  return (
    <ImageBannerContainer src="/contact-us-banner.jpg">
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: 700,
          marginBottom: '23px',
        }}
      >
        ¿Interesado en nuestros trabajos?
      </Typography>
      <Typography
        sx={{
          fontSize: '14px',
        }}
      >
        Experiencia, innovación y compromiso al servicio de tus necesidades.
      </Typography>
      <Typography sx={{ fontSize: '14px', fontWeight: 700, margin: '30px 0' }}>
        ¡Dejanos tu mensaje!
      </Typography>
      <CustomButton
        text="Escríbenos"
        sx={{
          backgroundColor: '#000',
          margin: '12px 12px 76px 12px',
          width: '120px',
          boxSizing: 'content-box',
        }}
      />
    </ImageBannerContainer>
  )
}
