import Image from 'next/image'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

export const AboutUs = () => {
  return (
    <Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Divider
          sx={{
            margin: '50px 0 30px 0',
            width: '130px',
            height: '5px',
            backgroundColor: '#D9D9D9',
          }}
        />
      </Box>
      <Typography
        sx={{
          fontSize: '14px',
          textAlign: 'center',
          color: '#000',
        }}
      >
        Somos una empresa dedicada a la producción y diseño de cortinas Roller,
        Bandas verticlaes, lonas y toldos a medida, nuestra compañía se
        caracteriza por trabajar las telas Premium del mercado en diferentes
        texturas y colores; brindando bienestar, decoración y confort visual a
        nuestros clientes.
      </Typography>
      <Image
        src="/about-us-banner.jpg"
        alt={''}
        style={{
          width: '100%',
          height: 350,
          objectFit: 'cover',
          margin: '60px 0',
        }}
        width={200}
        height={350}
      />
    </Box>
  )
}
