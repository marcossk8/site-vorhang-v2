'use client'
import { ReactNode } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Footer = (): ReactNode => {
  const pathname = usePathname()

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#292929',
        padding: '32px 32px 32px 16px',
        color: '#7E7E7E',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          margin: '0 0 48px 0',
          textAlign: 'center',
        }}
      >
        <Image
          src="/images/logo-white.svg"
          alt="Vorhang logo"
          width={80}
          height={80}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            margin: '0 0 0 48px',
            textAlign: 'left',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              width: '100%',
              margin: '0 0 20px 0',
              color: '#fff',
            }}
          >
            VORHANG
          </Typography>
          <Typography sx={{ fontSize: '12px' }}>
            Somos una empresa dedicada a la venta y confección de cortinas tipo
            roller, bandas verticales, toldos y lonas de alta calidad.
            Trabajamos con telas nacionales e importadas premium para ofrecer a
            nuestros clientes una amplia variedad de opciones para cada
            proyecto.
          </Typography>
        </Box>
      </Box>
      <List>
        <ListItem>
          <Link
            style={{
              fontSize: '18px',
              padding: '12px',
              margin: '0 0 12px 0',
              width: '100%',
              textAlign: 'center',
            }}
            href="/productos"
          >
            Productos
          </Link>
        </ListItem>
        <ListItem>
          <Link
            style={{
              fontSize: '18px',
              padding: '12px',
              margin: '0 0 12px 0',
              width: '100%',
              textAlign: 'center',
            }}
            href="/cotizador"
          >
            Cotizador
          </Link>
        </ListItem>
        <ListItem>
          <Link
            style={{
              fontSize: '18px',
              padding: '12px',
              margin: '0 0 12px 0',
              width: '100%',
              textAlign: 'center',
            }}
            href="/contacto"
          >
            Contacto
          </Link>
        </ListItem>
        <ListItem>
          <Link
            style={{
              fontSize: '18px',
              padding: '12px',
              margin: '0 0 12px 0',
              width: '100%',
              textAlign: 'center',
            }}
            href="/preguntas-frecuentes"
          >
            Cotizador
          </Link>
        </ListItem>
        <ListItem>
          {pathname !== '/' && (
            <Link
              style={{
                fontSize: '18px',
                padding: '12px',
                margin: '0 0 12px 0',
                width: '100%',
                textAlign: 'center',
              }}
              href="/"
            >
              Volver al inicio
            </Link>
          )}
        </ListItem>
      </List>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          target="_blank"
          href="https://www.facebook.com/vorhangcortinasroller"
        >
          <FacebookIcon sx={{ color: '#fff' }} />
        </IconButton>
        <IconButton
          target="_blank"
          href="https://www.instagram.com/vorhang.cortinas/"
        >
          <InstagramIcon sx={{ color: '#fff' }} />
        </IconButton>
      </Box>
      <Typography
        sx={{
          margin: '28px 0',
          width: '100%',
          textAlign: 'center',
        }}
      >
        +54 9 3546406776
      </Typography>
      <Typography
        sx={{
          margin: '0 0 28px 0',
          width: '100%',
          textAlign: 'center',
        }}
      >
        ventas@vorhangcortinas.com
      </Typography>
      <Typography sx={{ width: '100%', textAlign: 'center' }}>
        © 2024 Blah Marketing Digital - Agencia de Marketing Digital / Daniela
        Liendo - Desarrollo Web
      </Typography>
    </Box>
  )
}
