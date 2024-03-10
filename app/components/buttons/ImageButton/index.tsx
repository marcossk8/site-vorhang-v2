import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Image from 'next/image'
import Typography from '@mui/material/Typography'

export interface ImageProp {
  src: string
  alt: string
}

interface ImageButtonProps {
  title: string
  onClick: () => void
  img: ImageProp
}

export const ImageButton = ({ title, onClick, img }: ImageButtonProps) => {
  return (
    <Box
      sx={{
        width: '50%',
      }}
    >
      <Button
        sx={{
          width: '100%',
          padding: 0,
          borderRadius: 0,
          position: 'relative',
          color: '#fff',
          height: '150px',
        }}
        onClick={onClick}
      >
        <Image
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}
          src={img.src}
          alt={img.alt}
          fill
          objectFit="cover"
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <Typography sx={{ fontSize: '14px' }}>{title}</Typography>
        </Box>
      </Button>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          margin: '5px 0',
        }}
      >
        <Box
          sx={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: '#7E7E7E',
          }}
        />
      </Box>
    </Box>
  )
}
