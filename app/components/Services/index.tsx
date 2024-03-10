import { List } from '@/app/material'
import { Section } from '@/app/components/Section'
import { services } from '@/app/database/services'
import { Service } from '@/app/components/Service'

export const Services = () => {
  return (
    <Section title="Nuestros servicios" subtitle="¿Qué hacemos?">
      <List
        sx={{
          padding: '0 16px',
        }}
      >
        {services.map(({ id, icon, title, description }) => (
          <Service
            key={id}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </List>
    </Section>
  )
}
