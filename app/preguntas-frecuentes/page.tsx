import { Section } from '@/app/components/Section'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { questions } from '@/app/preguntas-frecuentes/constant'

export default function Page() {
  return (
    <Section
      title="Sacate tus dudas"
      subtitle="Preguntas frecuentes"
      backgroundColor="#fff"
    >
      <Box sx={{ padding: '48px 0 0 0' }}>
        {questions.map(({ id, title, answer }) => (
          <Box key={id} sx={{ padding: '16px' }}>
            <Typography
              sx={{
                backgroundColor: '#F5F5F5',
                padding: '16px',
                marginBottom: '16px',
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                backgroundColor: '#F5F5F5',
                padding: '16px',
                color: '#7E7E7E',
              }}
            >
              {answer}
            </Typography>
          </Box>
        ))}
      </Box>
    </Section>
  )
}
