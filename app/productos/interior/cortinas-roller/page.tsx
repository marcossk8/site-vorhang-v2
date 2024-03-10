import { Product } from '@/app/components/Product'
import { Section } from '@/app/components/Section'
import Typography from '@mui/material/Typography'
import { ImageProp } from '@/app/components/buttons/ImageButton'

export default function Page() {
  const IMAGES: ImageProp[] = [
    {
      src: '/images/roller-blinds/blackout/vorhang-roller-blind-7.jpg',
      alt: '',
    },
    {
      src: '/images/roller-blinds/blackout/vorhang-roller-blind-1.jpg',
      alt: '',
    },
    {
      src: '/images/roller-blinds/sunscreen-classics/vorhang-roller-blind-6.jpg',
      alt: '',
    },
    {
      src: '/images/roller-blinds/sunscreen-rustic/vorhang-roller-blind-7.jpg',
      alt: '',
    },
  ]

  return (
    <Section title="Nuestros productos" subtitle="Qué hacemos" disablePadding>
      <Product
        name="Cortinas roller"
        information={
          <Typography>
            Las cortinas roller son ideales para casas, departamentos, locales
            comerciales, oficinas y todo ambiente que requiera moderar o anular
            el ingreso de luminosidad al ambiente, favoreciendo a una mejor
            estética y decoración sin perder de vista la privacidad del usuario.{' '}
            <br />
            <br />
            Nuestros tejidos Sunscreen y Blackout de alto rendimiento son la
            opción preferida para el ahorro energético y control de temperatura
            ya que están fabricadas a partir de fibra de vidrio revestida.
          </Typography>
        }
        description={
          <Typography>
            Nuestras cortinas roller no solo son funcionales, sino que también
            son respetuosas con el medio ambiente. Gracias a su diseño
            innovador, ayudan a conservar la energía, manteniendo la temperatura
            adecuada en cualquier época del año. Esto no solo te permitirá
            disfrutar de un ambiente más confortable, sino que también
            contribuirás al ahorro de energía y reducción de tu huella
            ecológica. <br />
            <br />
            Ya sea que desees darle un toque moderno a tu sala de estar,
            bloquear la luz solar en tu dormitorio o brindar privacidad en tu
            espacio de trabajo, nuestras cortinas roller son la elección
            perfecta. Además, su fácil instalación y mantenimiento las
            convierten en una solución práctica y duradera.
          </Typography>
        }
        images={IMAGES}
      />
    </Section>
  )
}
