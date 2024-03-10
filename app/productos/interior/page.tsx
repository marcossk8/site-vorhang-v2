'use client'

import { Categories } from '@/app/components/Categories'
import { INTERIOR_CATEGORIES } from '@/app/components/Categories/constants'
import { Section } from '@/app/components/Section'

export default function Page() {
  return (
    <Section title="Nuestros productos" subtitle="Qué hacemos" disablePadding>
      <Categories categories={INTERIOR_CATEGORIES} />
    </Section>
  )
}
