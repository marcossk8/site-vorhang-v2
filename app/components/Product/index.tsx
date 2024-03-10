import { FC, ReactNode } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import { Types } from '@/app/components/Product/types'
import { ImageProp } from '@/app/components/buttons/ImageButton'

interface Props {
  name: string
  description: ReactNode
  type?: Types._INTERIOR | Types._EXTERIOR
  information: ReactNode
  images: ImageProp[]
}

interface GalleryProps {
  images: Props['images']
}

export const Product = ({
  name,
  description,
  type = Types._INTERIOR,
  information,
  images,
}: Props) => {
  return (
    <Box sx={{ padding: '16px' }}>
      <Gallery images={images} />
      <Typography
        variant="h1"
        sx={{ fontSize: '18px', margin: '48px 0 56px 0', fontWeight: 700 }}
      >
        {name}
      </Typography>
      {information}
      <Box
        sx={{
          height: '60px',
          borderTop: '1px solid #7E7E7E',
          borderBottom: '1px solid #7E7E7E',
          display: 'flex',
          alignItems: 'center',
          margin: '48px 0',
        }}
      >
        <Typography sx={{ fontSize: '18px', fontWeight: 700 }}>
          Tipo
          <Box
            component="span"
            sx={{
              color: '#1D1D1B',
              marginLeft: '86px',
              fontWeight: 400,
              fontSize: '16px',
            }}
          >
            {type}
          </Box>
        </Typography>
      </Box>
      <Box
        sx={{
          weight: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        <Typography variant="h2" sx={{ fontSize: '18px', fontWeight: 700 }}>
          Descripción
        </Typography>
        <Box
          sx={{
            background: '#B4CF1F',
            height: '4px',
            width: '50%',
            marginTop: '8px',
          }}
        />
      </Box>
      {description}
    </Box>
  )
}

const Gallery: FC<GalleryProps> = ({ images }) => {
  const [majorImage, ...secondaryImages] = images

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          sx={{
            position: 'relative',
            height: '350px',
            width: '100%',
          }}
        >
          <Image
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            alt={majorImage.alt}
            src={majorImage.src}
            fill
            objectFit="cover"
          />
        </Box>
      </Grid>
      {secondaryImages.map((image, index) => (
        <Grid key={index} item xs={4}>
          <Box
            sx={{
              position: 'relative',
              height: '98px',
              width: '100%',
            }}
          >
            <Image
              style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
              alt={image.alt}
              src={image.src}
              fill
              objectFit="cover"
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}
