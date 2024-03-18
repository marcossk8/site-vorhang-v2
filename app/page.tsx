import { AboutUs } from '@/app/components/AboutUs'
import { Services } from '@/app/components/Services'
import Box from '@mui/material/Box'
import { Us } from './components/Us'
import { Categories } from '@/app/components/Categories'
import { ContactUs } from '@/app/components/ContactUs'
import { Reviews } from '@/app/components/Reviews'
import { Section } from '@/app/components/Section'

export default function Home() {
  return (
    <main>
      <Box sx={{ padding: '0 32px' }}>
        <AboutUs />
        {/* <NewsLetter /> */}
      </Box>
      <Services />
      <Us />
      <Section title="Nuestros productos" subtitle="Qué hacemos" disablePadding>
        <Categories />
      </Section>
      <ContactUs />
      <Reviews />
    </main>
  )
}
