import { Product } from '@/app/components/Product'
import Typography from '@mui/material/Typography'
import { Types } from '@/app/components/Product/types'
import { ImageProp } from '@/app/components/buttons/ImageButton'
import { Section } from '@/app/components/Section'

export default function Page() {
  const IMAGES: ImageProp[] = [
    {
      src: '/images/awnings/vorhang-awnings-1.jpg',
      alt: '',
    },
    {
      src: '/images/awnings/vorhang-awnings-2.png',
      alt: '',
    },
  ]

  return (
    <Section title="Nuestros productos" subtitle="Qué hacemos" disablePadding>
      <Product
        name="Toldos"
        information={
          <Typography>
            Dentro de nuestros productos ahora se encuentran los toldos.
            <br />
            Ellos presentan como un elemento clave de decoración exterior, una
            verdadera ventaja medioambiental y una solución para el ahorro de
            energía. <br />
            <br />
            Ideales para el hogar o para aquellos locales que buscan proteger su
            mercadería sin dejar de exhibir sus productos.
          </Typography>
        }
        type={Types._EXTERIOR}
        description={
          <Typography>
            Los toldos de exteriores son estructuras diseñadas específicamente
            para proporcionar sombra y protección contra los elementos en áreas
            al aire libre, como terrazas, patios, jardines o espacios
            comerciales. Estos toldos están diseñados para resistir condiciones
            climáticas adversas y brindar comodidad a los usuarios.
            <br />
            <br />
            Los toldos de exteriores generalmente están compuestos por una
            estructura resistente que puede ser de metal, aluminio tratada para
            resistir la intemperie. Esta estructura sostiene una cubierta de
            lona o tela sintética que se extiende sobre el área a proteger.
            <br />
            <br />
            Además de su función principal de proporcionar sombra, los toldos de
            exteriores también pueden agregar un elemento estético a la fachada
            del edificio o al área al aire libre. Vienen en una amplia variedad
            de diseños, colores y estilos para adaptarse a diferentes
            preferencias estéticas.
          </Typography>
        }
        images={IMAGES}
      />
    </Section>
  )
}
