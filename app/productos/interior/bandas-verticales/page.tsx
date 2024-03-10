import { Product } from '@/app/components/Product'
import Typography from '@mui/material/Typography'
import { Section } from '@/app/components/Section'
import { ImageProp } from '@/app/components/buttons/ImageButton'

export default function Page() {
  const IMAGES: ImageProp[] = [
    {
      src: '/images/vertical-blinds/vorhang-vertical-blind-1.jpg',
      alt: '',
    },
    {
      src: '/images/vertical-blinds/vorhang-vertical-blind-3.jpg',
      alt: '',
    },
    {
      src: '/images/vertical-blinds/vorhang-vertical-blind-4.jpg',
      alt: '',
    },
    {
      src: '/images/vertical-blinds/vorhang-vertical-blind-7.jpg',
      alt: '',
    },
  ]

  return (
    <Section title="Nuestros productos" subtitle="Qué hacemos" disablePadding>
      <Product
        name="Bandas verticales"
        information={
          <Typography>
            Las bandas verticales son las cortinas más funcionales del mercado,
            ya que se pueden accionar desde un extremo generando una apertura
            entre las bandas para que ingrese la luz deseada o desplazándose
            hacia un lateral para poder tener acceso total a la abertura. <br />{' '}
            Otra de sus ventajas es que se pueden realizar de anchos y altos a
            los que se limitan las roller, pudiendo abarcar de forma más eficaz
            las aberturas. Se pueden confeccionar con cualquier tela que esté
            compuesta por PVC (Blackout, Sunscreen o Traslúcidas).
          </Typography>
        }
        description={
          <Typography>
            Nuestras cortinas de bandas verticales son una elección elegante
            para tus espacios. No solo agregan un toque de sofisticación, sino
            que también te brindan un control total sobre la entrada de luz
            natural y la privacidad deseada. Gracias a su diseño único, puedes
            ajustar las bandas verticales para regular la cantidad de luz que
            ingresa, creando un ambiente acogedor y personalizado en tu hogar u
            oficina. <br />
            <br />
            Además de su aspecto estético, nuestras cortinas de bandas
            verticales son altamente funcionales. Permiten el paso suavizado de
            la luz, filtrando los rayos solares directos y protegiendo tus
            muebles y pisos de los dañinos efectos del sol. También son ideales
            para mantener tu privacidad sin sacrificar la luminosidad natural en
            tus espacios.
          </Typography>
        }
        images={IMAGES}
      />
    </Section>
  )
}
