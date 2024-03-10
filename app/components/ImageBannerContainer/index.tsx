import { CSSProperties, ReactNode } from 'react'
import Box from '@mui/material/Box'
import Image from 'next/image'

interface ImageBannerContainerProps {
  children: ReactNode
  src: string
  imageStyles?: CSSProperties
  contentStyles?: CSSProperties
}

export const ImageBannerContainer = ({
  children,
  src,
  imageStyles,
  contentStyles,
}: ImageBannerContainerProps) => {
  return (
    <Box
      sx={{
        position: 'relative',
        marginTop: '5px',
        width: '100%',
        height: '668px',
      }}
    >
      <Image
        style={{ opacity: 0.2, position: 'absolute', ...imageStyles }}
        src={src}
        alt="Cortinas bandas verticales Vorhang"
        fill
        objectFit="cover"
      />
      <Box
        sx={{
          padding: '32px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          ...contentStyles,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
