import { Section } from '@/app/components/Section'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ImagesSwiper } from '@/app/components/ImagesSwiper'
import { images } from '@/app/database/images'

export default function AboutUs() {
  return (
    <Section
      title="Quienes somos"
      subtitle="¿Qué hacemos?"
      backgroundColor="#fff"
    >
      <Box sx={{ width: '100%', padding: '16px' }}>
        <Image
          style={{ width: '100%', height: 'auto' }}
          src="/images/us-banner.jpg"
          alt="Quienes somos banner"
          width={500}
          height={500}
        />
      </Box>
      <Box sx={{ padding: '32px' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            marginBottom: '32px',
          }}
        >
          ¡Descubre la elegancia perfecta para tus aberturas!
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
          }}
        >
          Somos expertos en cortinas roller, bandas verticales, toldos y lonas
          de alta calidad. Nuestra amplia gama de telas nacionales e importadas
          premium garantiza opciones únicas para cada proyecto. <br />
          <br />
          Desde nuestra fundación en 2019, nos enorgullece ofrecer un servicio
          integral y trabajos a medida. Desde la toma de medidas hasta la
          entrega e instalación, nos encargamos de todo. Además, nuestro equipo
          de expertos proporciona asesoramiento personalizado para encontrar el
          producto ideal que se ajuste a tus necesidades. <br />
          <br />
          Enfocados en mantener una relación precio-calidad inigualable, nos
          esforzamos por expandir nuestra oferta y llegar a más personas.
          También nos comprometemos a brindar un excepcional servicio post-venta
          que garantice la satisfacción de nuestros clientes y fomente su
          lealtad hacia nuestra empresa. <br />
          <br />
          Ya sea que busques crear un ambiente acogedor en tu hogar o mejorar la
          imagen de tu negocio, en nuestra empresa encontrarás soluciones de
          cortinas y toldos que destacarán por su estilo y durabilidad. <br />
          <br />
          Nuestro equipo de artesanos altamente capacitados confecciona cada
          cortina con precisión y atención al detalle. Utilizamos materiales de
          la más alta calidad para asegurar su resistencia y un acabado
          impecable. Además, trabajamos con telas cuidadosamente seleccionadas
          para ofrecerte una amplia variedad de estilos y colores, adaptándonos
          a tus preferencias y a la estética de tus espacios.
          <br />
          <br />
          Ofrecemos un servicio completo, desde la asesoría inicial hasta la
          instalación final. Nuestros expertos estarán contigo en cada paso del
          proceso, brindándote recomendaciones personalizadas y asegurándose de
          que el resultado final supere tus expectativas. <br />
          <br />
          Sabemos lo importante que es contar con productos de calidad y un
          servicio confiable. Nos esforzamos por mantener altos estándares en
          cada aspecto de nuestro trabajo. Nos enorgullece la satisfacción de
          nuestros clientes y los comentarios positivos que respaldan nuestra
          reputación como líderes en el mercado. <br />
          <br />
          <strong>
            No esperes más para transformar tus espacios con nuestras cortinas
            roller, bandas verticales, toldos y lonas de alta calidad.
            Contáctanos hoy mismo y descubre la diferencia que podemos hacer en
            tu vida.
          </strong>
        </Typography>
      </Box>
      <ImagesSwiper images={images} />
    </Section>
  )
}
