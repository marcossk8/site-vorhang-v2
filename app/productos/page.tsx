import { Section } from '@/app/components/Section'
import { Categories } from '@/app/components/Categories'

export default function Page() {
  return (
    <Section title="Nuestros productos" subtitle="Qué hacemos" disablePadding>
      <Categories />
    </Section>
  )
}
