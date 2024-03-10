'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import Image from 'next/image'
import Box from '@mui/material/Box'

SwiperCore.use([Autoplay])

interface ImageProps {
  src: string
  alt: string
}

interface SwiperProps {
  images: ImageProps[]
}

export const ImagesSwiper = ({ images }: SwiperProps) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop
      style={{
        width: '100%',
        height: '193px',
        padding: '16px 16px 11px 16px',
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
      modules={[Autoplay]}
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide
            style={{
              paddingRight: '16px',
              boxSizing: 'border-box',
            }}
            key={index}
          >
            <Box
              sx={{
                position: 'relative',
                height: '100%',
              }}
            >
              <Image src={image.src} alt={image.alt} fill objectFit="cover" />
            </Box>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
/**
 *  <div style={{
 *             width: 300,
 *             height: 300,
 *             backgroundColor: 'red',
 *             margin: 5
 *           }}>
 *             <Image src={image.src} alt={image.alt} width={50} height={50}/>
 *           </div>p
 */
