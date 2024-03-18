import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Section } from '@/app/components/Section'
import Link from 'next/link'

export const Us = () => {
  return (
    <Section title="Nosotros" subtitle="Quienes somos">
      <Box
        sx={{
          padding: '0 16px',
        }}
      >
        <Image
          src="/us-banner.jpg"
          alt="Imagen de cortina roller instalada"
          width={328}
          height={335}
          style={{ width: '100%' }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              padding: '32px 16px',
              textAlign: 'center',
            }}
          >
            Sabemos lo importante que es para vos contar con productos de
            calidad y un servicio confiable. Es por eso que nos esforzamos por
            mantener altos estándares en cada aspecto de nuestro trabajo. Nos
            enorgullece la satisfacción de nuestros clientes que respaldan
            nuestra reputación dentro de este rubro.
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
            href="/sobre-nosotros"
          >
            Saber más
          </Link>
        </Box>
      </Box>
    </Section>
  )
}
