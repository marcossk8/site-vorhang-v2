import './globals.css'
import {ReactNode} from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vorhang - Fábrica de cortinas roller y toldos',
  description: 'Somos una empresa dedicada a la producción y diseño de cortinas roller y toldos a medida, nuestra compañía se caracteriza por trabajar las telas Premium del mercado en diferentes texturas y colores; brindando bienestar, decoración y confort visual a nuestros clientes.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
