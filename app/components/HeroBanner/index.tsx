import Box from '@mui/material/Box'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

export const HeroBanner = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '180px',
      }}
    >
      <Image
        style={{
          width: '100vw',
          height: '100%',
          objectFit: 'cover',
        }}
        src={'/hero-banner.jpg'}
        alt={''}
        width={100}
        height={175}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          height: '-webkit-fill-available',
          textAlign: 'center',
          width: '-webkit-fill-available',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: 'rgba(250, 250, 250, 0.68)',
          margin: '16px 32px',
        }}
      >
        <Typography
          sx={{
            fontSize: '28px',
            fontWeight: 'bold',
          }}
          variant="h2"
        >
          VORHANG
        </Typography>
        <Typography sx={{ fontSize: '16px' }} variant="h3">
          Fábrica de cortinas y toldos
        </Typography>
      </Box>
    </Box>
  )
}
