'use client'

import { Suspense, useState } from 'react'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

const barberos = [
  { id: '1', nombre: 'Carlos Rueda', especialidad: 'Fade & barba', foto: null as string | null },
  { id: '2', nombre: 'Andrés Peña', especialidad: 'Clásico', foto: null as string | null },
  { id: '3', nombre: 'Miguel Soto', especialidad: 'Diseño y líneas', foto: null as string | null },
  // Cuando tengas la foto real, cambia el "null" por la ruta, ej:
  // { id: '1', nombre: 'Carlos Rueda', especialidad: 'Fade & barba', foto: '/images/barberos/carlos.jpg' },
]

const horas = ['9:00', '10:00', '11:00', '2:00', '3:00', '4:00', '5:00']

function iniciales(nombre: string) {
  return nombre.split(' ').map((p) => p[0]).join('').toUpperCase()
}

function NuevaReservaContent() {
  const searchParams = useSearchParams()
  const preseleccionado = searchParams.get('barbero')
  const inicial = barberos.some((b) => b.id === preseleccionado) ? preseleccionado! : barberos[0].id

  const [barberoId, setBarberoId] = useState(inicial)
  const [hora, setHora] = useState<string | null>(null)

  const barbero = barberos.find((b) => b.id === barberoId)!

  return (
    <main className="min-h-screen bg-[var(--color-ink)] texture-canvas px-4 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-[var(--color-brass)] mb-2 tracking-widest uppercase">
          Nueva reserva
        </p>
        <h1 className="font-display text-3xl sm:text-4xl mb-8">Elige tu barbero</h1>

        {/* Tarjetas verticales de barberos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
          {barberos.map((b) => {
            const seleccionado = barberoId === b.id
            return (
              <button
                key={b.id}
                onClick={() => { setBarberoId(b.id); setHora(null) }}
                className={`group text-left rounded-sm border overflow-hidden transition-colors ${
                  seleccionado
                    ? 'border-[var(--color-brass)]'
                    : 'border-[var(--color-line)] hover:border-[var(--color-muted)]'
                }`}
              >
                <div className="barber-photo barber-photo-glow relative aspect-[3/4] bg-gradient-to-br from-[var(--color-surface-alt)] to-[var(--color-ink)]">
                  {b.foto ? (
                    <Image
                      src={b.foto}
                      alt={b.nombre}
                      fill
                      sizes="(min-width: 640px) 200px, 45vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--color-barber-red)] flex items-center justify-center font-display text-xl">
                        {iniciales(b.nombre)}
                      </span>
                    </div>
                  )}

                  {seleccionado && (
                    <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-[var(--color-brass)] flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink)" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  )}
                </div>

                <div className={`p-3 ${seleccionado ? 'bg-[var(--color-surface-alt)]' : 'bg-[var(--color-surface)]'}`}>
                  <p className="text-sm font-medium truncate">{b.nombre}</p>
                  <p className="text-xs text-[var(--color-muted)] truncate">{b.especialidad}</p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Panel de horario */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-line)] rounded-sm p-5 sm:p-6 relative overflow-hidden max-w-2xl">
          <div className="absolute top-0 left-0 w-full h-1 barber-stripe" />

          <p className="text-sm text-[var(--color-muted)] mb-1">Reservando con</p>
          <h2 className="font-display text-2xl mb-6">{barbero.nombre}</h2>

          <p className="font-mono text-xs text-[var(--color-muted)] uppercase mb-2">
            Horarios disponibles hoy
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-8">
            {horas.map((h) => (
              <button
                key={h}
                onClick={() => setHora(h)}
                className={`font-mono text-sm py-2 rounded-sm border transition-all hover:scale-105 active:scale-95 ${
                  hora === h
                    ? 'bg-[var(--color-brass)] text-[var(--color-ink)] border-[var(--color-brass)] scale-105'
                    : 'border-[var(--color-line)] hover:border-[var(--color-brass)]'
                }`}
              >
                {h}
              </button>
            ))}
          </div>

          <button
            disabled={!hora}
            className="w-full bg-[var(--color-brass)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 text-[var(--color-ink)] font-semibold py-3 rounded-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Confirmar reserva {hora ? `· ${hora}` : ''}
          </button>
        </div>
      </div>
    </main>
  )
}

export default function NuevaReservaPage() {
  return (
    <Suspense fallback={null}>
      <NuevaReservaContent />
    </Suspense>
  )
}