import { ReactNode } from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

interface Props extends ButtonProps {
  text: string
  sx?: any
}

export const CustomButton = ({
  text,
  variant = 'contained',
  sx = { backgroundColor: '#B4CF1F' },
  onClick,
  ...props
}: Props): ReactNode => {
  const backgroundColor = sx?.backgroundColor ?? '#B4CF1F'

  return (
    <Button
      sx={{
        backgroundColor,
        borderRadius: '16px',
        minWidth: '116px',
        '&:hover': {
          backgroundColor,
        },
        ...sx,
      }}
      onClick={onClick}
      variant={variant}
      {...props}
    >
      {text}
    </Button>
  )
}
