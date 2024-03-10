import { ReactNode } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

interface CardContainerProps {
  children: ReactNode
}

export const CardContainer = ({ children }: CardContainerProps): ReactNode => {
  return (
    <Card sx={{ borderRadius: '8px', marginBottom: 2 }}>
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {children}
      </CardContent>
    </Card>
  )
}
