'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { Route, ROUTES } from '@/app/routes'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const MENU_ITEMS: Route[] = Object.values(ROUTES)

  return (
    <Box
      component="header"
      sx={{
        padding: '8px 16px',
        width: '100% ',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyItems: 'center',
        }}
        href="/"
      >
        <Image src="/clean_logo.svg" alt="Logo" width={24} height={24} />
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: 'bold',
            marginLeft: '8px',
            color: '#333333',
          }}
          variant="h1"
        >
          VORHANG
        </Typography>
      </Link>
      <IconButton onClick={() => setIsMenuOpen((prev) => !prev)} edge="end">
        <MenuRoundedIcon />
      </IconButton>
      <Drawer
        sx={{
          width: '232px',
        }}
        anchor="right"
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      >
        <IconButton
          sx={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            zIndex: 1,
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          <CloseRoundedIcon />
        </IconButton>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
          }}
        >
          <List sx={{ padding: '120px 0 0 0', width: '230px' }}>
            {MENU_ITEMS.map(({ href, label }) => (
              <ListItem
                sx={{
                  height: '60px',
                  borderTop: '1px solid #A7A7A7',
                  '&:last-child': {
                    borderBottom: '1px solid #A7A7A7',
                  },
                }}
                key={label}
                disablePadding
              >
                <ListItemButton href={href}>
                  <ListItemText
                    sx={{
                      '.MuiTypography-root': {
                        fontSize: '14px',
                        color: '#7E7E7E',
                        fontWeight: 700,
                      },
                    }}
                    primary={label}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {pathname !== '/' && (
            <ListItem
              sx={{
                height: '60px',
                borderBottom: '1px solid #A7A7A7',
                marginBottom: '110px',
              }}
              disablePadding
            >
              <ListItemButton href="/">
                <ListItemText
                  sx={{
                    '.MuiTypography-root': {
                      fontSize: '14px',
                      color: '#7E7E7E',
                      fontWeight: 700,
                    },
                  }}
                  primary="Volver al inicio"
                />
              </ListItemButton>
            </ListItem>
          )}
        </Box>
      </Drawer>
    </Box>
  )
}
