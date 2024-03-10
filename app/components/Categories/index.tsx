'use client'

import Box from '@mui/material/Box'
import { useRouter } from 'next/navigation'
import { ImageButton } from '@/app/components/buttons/ImageButton'
import { Category } from '@/app/components/Categories/types'
import { INITIAL_CATEGORIES } from '@/app/components/Categories/constants'

interface Props {
  categories?: Category[]
}

export const Categories = ({ categories = INITIAL_CATEGORIES }: Props) => {
  const router = useRouter()

  return (
    <Box sx={{ width: '100%', display: 'flex' }}>
      {categories.map(({ id, onClick, title, img }) => (
        <ImageButton
          key={id}
          title={title}
          img={img}
          onClick={() => onClick(router)}
        />
      ))}
    </Box>
  )
}
