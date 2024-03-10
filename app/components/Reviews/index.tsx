import React, { ReactNode } from 'react'
import Image from 'next/image'
import { Section } from '@/app/components/Section'
import { reviews } from '@/app/database/reviews'
import { Review } from '@/app/database/types'
import { CardContainer } from '../CardContainer'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'

export const Reviews = (): ReactNode => {
  return (
    <Section
      title="¿Qué dicen nuestros clientes...?"
      subtitle="¿Qué hacemos?"
      description="Descubre lo que nuestros clientes satisfechos dicen sobre nosotros."
    >
      <Box
        sx={{
          padding: '0 16px',
        }}
      >
        {reviews.map((review: Review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </Box>
    </Section>
  )
}

interface ReviewCardProps {
  review: Review
}

const ReviewCard = ({ review }: ReviewCardProps): ReactNode => {
  return (
    <li>
      <CardContainer>
        <Image
          src={review.user.photo_url}
          alt={review.user.name + ' photo'}
          width={72}
          height={72}
          style={{ borderRadius: '50%', margin: '10px 0 0 0' }}
        />
        <Image
          src="/images/icons/format-quote-rounded.svg"
          alt={review.user.name + ' photo'}
          width={34}
          height={24}
          style={{ margin: '24px 0 42px 0' }}
        />
        <div>
          <Typography
            sx={{
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 700,
              textAlign: 'left',
            }}
          >
            {review.user.name}
          </Typography>
          <Rating
            sx={{
              color: '#B4CF1F',
              width: '24px',
              height: '24px',
              margin: '8px 0',
              '& .MuiRating-decimal': {
                margin: '0 8px 0 0',
              },
            }}
            name="text-feedback"
            value={review.stars}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Typography>{review.comment}</Typography>
        </div>
      </CardContainer>
    </li>
  )
}
