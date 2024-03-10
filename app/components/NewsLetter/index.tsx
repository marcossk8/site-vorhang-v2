'use client'
import Box from '@mui/material/Box/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material'

export const NewsLetter = () => {
  return (
    <Box
      sx={{
        marginBottom: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box>
        <Typography
          sx={{
            color: '#767676',
            fontSize: '32px',
            fontWeight: 800,
            fontStyle: 'italic',
            width: '80%',
            lineHeight: 'normal',
            margin: '0 0 16px 0',
          }}
        >
          10% de descuento
        </Typography>
        <Typography
          sx={{
            color: '#A7A7A7',
            fontSize: '16px',
            fontWeight: 'bold',
            margin: '0 0 8px 0',
          }}
        >
          Suscribite a nuestro newsletter
        </Typography>
      </Box>
      <Typography
        sx={{
          color: '#A7A7A7',
          fontSize: '14px',
          fontWeight: 500,
        }}
      >
        Recibe inspiración y ofertas exclusivas en tu bandeja de entrada
      </Typography>
      <MailInput sx={{ margin: '32px 0' }} label="Mail" fullWidth />
      <Button
        sx={{
          backgroundColor: '#B4CF1F',
          borderRadius: '16px',
          minWidth: '116px',
        }}
        variant="contained"
      >
        Siguiente
      </Button>
    </Box>
  )
}

const MailInput = styled(TextField)({
  '& label': {
    color: '#D9D9D9',
  },
  '& label.Mui-focused': {
    color: '#D9D9D9',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    border: 'none',
    borderRadius: '50px',
    boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
})
