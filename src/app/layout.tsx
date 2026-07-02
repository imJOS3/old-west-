import type { Metadata } from 'next'
import './globals.css'
import GlobalNavbar from '@/app/components/GlobalNavbar'
import WhatsAppButton from '@/app/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'El Corte Barbería | Reservas y cortes top',
  description: 'Reserva con tu barbero favorito y mira los cortes más destacados de la semana.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <GlobalNavbar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}