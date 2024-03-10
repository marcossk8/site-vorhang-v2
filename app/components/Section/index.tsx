'use client'

import { ReactElement, ReactNode } from 'react'
import { Box, Divider, Typography } from '@/app/material'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

interface SectionProps {
  title: string
  subtitle: string
  children: ReactNode
  disablePadding?: boolean
  description?: string
  backgroundColor?: string
}

export const Section = ({
  title,
  subtitle,
  children,
  disablePadding,
  description,
  backgroundColor = '#F6F6F6',
}: SectionProps): ReactElement => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor,
        width: '100%',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#F6F6F6',
          width: '100%',
          padding: disablePadding ? 0 : '0 16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {pathname !== '/' && (
          <IconButton onClick={() => router.back()}>
            <ArrowBackIosNewRoundedIcon />
          </IconButton>
        )}

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            padding: '0 16px 0 0',
          }}
        >
          <Typography
            sx={{
              color: '#A7A7A7',
              fontSize: '12px',
              margin: '32px 0 0 0',
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            sx={{
              fontSize: '18px',
              margin: '16px 0',
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>
          {description && (
            <Typography
              sx={{
                fontSize: '12px',
                margin: '0 0 16px 0',
                fontWeight: 500,
                textAlign: 'center',
              }}
            >
              {description}
            </Typography>
          )}
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
                width: '130px',
                height: '5px',
                backgroundColor: '#D9D9D9',
                margin: '0 0 32px 0',
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%' }}>{children}</Box>
    </Box>
  )
}
