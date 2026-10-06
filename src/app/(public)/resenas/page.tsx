'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'

/* ---------- Datos ---------- */

type Resena = {
  id: string
  autor: string
  barberoId: string
  servicio: string
  estrellas: number
  comentario: string
  fecha: string // YYYY-MM-DD
}

const barberos = [
  { id: '1', nombre: 'Carlos Rueda', especialidad: 'Fade & barba', foto: '/images/barberos/carlos.jpg' },
  { id: '2', nombre: 'Andrés Peña', especialidad: 'Clásico', foto: '/images/barberos/andres.jpg' },
  { id: '3', nombre: 'Miguel Soto', especialidad: 'Diseño y líneas', foto: '/images/barberos/miguel.jpg' },
]

const servicios = ['Corte clásico', 'Fade + Barba', 'Afeitado clásico', 'Diseño y líneas']

// Reseñas de muestra: bórralas cuando tengas reales
const ejemplos: Resena[] = [
  {
    id: 'e1',
    autor: 'Juan P.',
    barberoId: '1',
    servicio: 'Fade + Barba',
    estrellas: 5,
    comentario: 'El mejor degradado que me han hecho. La barba quedó perfilada y me explicó cómo mantenerla en casa.',
    fecha: '2026-09-28',
  },
  {
    id: 'e2',
    autor: 'Andrés M.',
    barberoId: '2',
    servicio: 'Afeitado clásico',
    estrellas: 5,
    comentario: 'La toalla caliente y la navaja, de otra época. Una experiencia aparte, volveré cada mes.',
    fecha: '2026-09-19',
  },
  {
    id: 'e3',
    autor: 'Sebastián R.',
    barberoId: '3',
    servicio: 'Diseño y líneas',
    estrellas: 4,
    comentario: 'Las líneas quedaron muy limpias y justo como las pedí. Tuve que esperar un poco, pero valió la pena.',
    fecha: '2026-09-10',
  },
]

const CLAVE = 'el-corte-resenas'

/* ---------- Estilos reutilizados ---------- */

const btnPrimario =
  'bg-[var(--color-brass)] text-[var(--color-ink)] font-semibold rounded-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-transform font-mono uppercase tracking-wide'

const etiqueta =
  'block font-mono text-xs uppercase tracking-wide text-[var(--color-muted)] mb-1.5'

const campo =
  'w-full bg-[var(--color-ink)] border border-[var(--color-line)] rounded-sm px-3 py-2.5 text-sm text-[var(--color-parchment)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-brass)] focus:ring-1 focus:ring-[var(--color-brass)] focus:outline-none'

/* ---------- Piezas ---------- */

function Estrellas({ valor }: { valor: number }) {
  return (
    <span className="inline-flex whitespace-nowrap" role="img" aria-label={`${valor.toFixed(1)} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          aria-hidden="true"
          className={n <= Math.round(valor) ? 'text-[var(--color-brass)]' : 'text-[var(--color-muted)]/40'}
        >
          ★
        </span>
      ))}
    </span>
  )
}

function formatearFecha(fecha: string) {
  return new Date(fecha).toLocaleDateString('es-CO', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

/* ---------- Página ---------- */

export default function ResenasPage() {
  const [propias, setPropias] = useState<Resena[]>([])
  const [cargado, setCargado] = useState(false)
  const [filtro, setFiltro] = useState('todos')

  const [autor, setAutor] = useState('')
  const [barberoId, setBarberoId] = useState(barberos[0].id)
  const [servicio, setServicio] = useState(servicios[0])
  const [estrellas, setEstrellas] = useState(0)
  const [hover, setHover] = useState(0)
  const [comentario, setComentario] = useState('')
  const [error, setError] = useState('')
  const [enviada, setEnviada] = useState(false)

  useEffect(() => {
    try {
      const guardado = localStorage.getItem(CLAVE)
      if (guardado) setPropias(JSON.parse(guardado))
    } catch {
      /* seguimos sin reseñas guardadas */
    }
    setCargado(true)
  }, [])

  useEffect(() => {
    if (!cargado) return
    try {
      localStorage.setItem(CLAVE, JSON.stringify(propias))
    } catch {
      /* almacenamiento no disponible */
    }
  }, [propias, cargado])

  const todas = useMemo(
    () => [...propias, ...ejemplos].sort((a, b) => b.fecha.localeCompare(a.fecha)),
    [propias]
  )

  const resumen = useMemo(
    () =>
      barberos.map((b) => {
        const lista = todas.filter((r) => r.barberoId === b.id)
        const promedio = lista.length ? lista.reduce((s, r) => s + r.estrellas, 0) / lista.length : 0
        return { ...b, total: lista.length, promedio }
      }),
    [todas]
  )

  const visibles = filtro === 'todos' ? todas : todas.filter((r) => r.barberoId === filtro)
  const nombreBarbero = (id: string) => barberos.find((b) => b.id === id)?.nombre ?? ''

  function enviar(e: React.FormEvent) {
    e.preventDefault()
    setEnviada(false)

    if (!autor.trim()) return setError('Escribe tu nombre.')
    if (estrellas === 0) return setError('Elige una calificación de 1 a 5 estrellas.')
    if (comentario.trim().length < 10) return setError('Cuéntanos un poco más (mínimo 10 caracteres).')

    setPropias((prev) => [
      {
        id: `u${Date.now()}`,
        autor: autor.trim(),
        barberoId,
        servicio,
        estrellas,
        comentario: comentario.trim(),
        fecha: new Date().toISOString().slice(0, 10),
      },
      ...prev,
    ])
    setAutor('')
    setComentario('')
    setEstrellas(0)
    setHover(0)
    setError('')
    setEnviada(true)
    setFiltro('todos')
  }

  return (
    <main className="min-h-screen bg-[var(--color-ink)] texture-canvas overflow-x-hidden pb-16">
      {/* Encabezado */}
      <section className="relative border-b border-[var(--color-line)] px-4 py-16 sm:py-20 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="font-script text-2xl sm:text-3xl text-[var(--color-brass)] mb-2 animate-fade-up">
            Lo dicen nuestros clientes
          </p>
          <h1
            className="font-display text-5xl sm:text-6xl leading-tight mb-5 animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            <span className="text-[var(--color-parchment)]">RE</span>
            <span className="text-[var(--color-brass)]">SEÑAS</span>
          </h1>
          <p
            className="text-[var(--color-muted)] max-w-xl animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            Opiniones reales de cada visita, organizadas por barbero. Cuéntanos cómo te fue con tu corte.
          </p>
        </div>
      </section>

      {/* Filtro por barbero */}
      <section className="px-4 pt-12 max-w-6xl mx-auto" aria-label="Filtrar por barbero">
        <Reveal>
          <p className="font-mono text-xs text-[var(--color-brass)] uppercase tracking-widest mb-4 text-center">
            Nuestro equipo
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              type="button"
              aria-pressed={filtro === 'todos'}
              onClick={() => setFiltro('todos')}
              className={`hover-lift flex items-center gap-3 text-left p-3 rounded-sm bg-[var(--color-surface)] border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brass)] ${
                filtro === 'todos' ? 'border-[var(--color-brass)]' : 'border-[var(--color-line)]'
              }`}
            >
              <span className="w-14 h-14 shrink-0 rounded-full border border-[var(--color-brass)] flex items-center justify-center font-display text-xl text-[var(--color-brass)]">
                ★
              </span>
              <span>
                <span className="block font-display text-lg leading-tight">Todos</span>
                <span className="block text-xs text-[var(--color-muted)]">{todas.length} reseñas</span>
              </span>
            </button>

            {resumen.map((b) => (
              <button
                key={b.id}
                type="button"
                aria-pressed={filtro === b.id}
                onClick={() => setFiltro(b.id)}
                className={`hover-lift flex items-center gap-3 text-left p-3 rounded-sm bg-[var(--color-surface)] border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brass)] ${
                  filtro === b.id ? 'border-[var(--color-brass)]' : 'border-[var(--color-line)]'
                }`}
              >
                <span className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border border-[var(--color-brass)]">
                  <Image src={b.foto} alt="" fill sizes="56px" className="object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg leading-tight">{b.nombre}</span>
                  <span className="block text-xs text-[var(--color-muted)]">{b.especialidad}</span>
                  <span className="flex items-center gap-2 mt-1 text-xs">
                    <Estrellas valor={b.promedio} />
                    <span className="font-mono text-[var(--color-muted)]">
                      {b.total ? b.promedio.toFixed(1) : '—'} ({b.total})
                    </span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Formulario + lista */}
      <section className="px-4 pt-10 max-w-6xl mx-auto grid lg:grid-cols-[380px_1fr] gap-8 items-start">
        <Reveal>
          <form
            onSubmit={enviar}
            noValidate
            className="bg-[var(--color-surface)] border border-[var(--color-brass)] rounded-sm p-6 lg:sticky lg:top-6"
          >
            <h2 className="font-display text-2xl mb-5 text-[var(--color-brass)]">Deja tu reseña</h2>

            <div className="mb-4">
              <label htmlFor="autor" className={etiqueta}>Tu nombre</label>
              <input
                id="autor"
                type="text"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
                maxLength={40}
                placeholder="Ej. Juan P."
                className={campo}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-4">
              <div>
                <label htmlFor="barbero" className={etiqueta}>¿Quién te atendió?</label>
                <select id="barbero" value={barberoId} onChange={(e) => setBarberoId(e.target.value)} className={campo}>
                  {barberos.map((b) => (
                    <option key={b.id} value={b.id}>{b.nombre}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="servicio" className={etiqueta}>Servicio</label>
                <select id="servicio" value={servicio} onChange={(e) => setServicio(e.target.value)} className={campo}>
                  {servicios.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <fieldset className="mb-4">
              <legend className={etiqueta}>Calificación</legend>
              <div className="flex gap-1" onMouseLeave={() => setHover(0)}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    aria-label={`${n} ${n === 1 ? 'estrella' : 'estrellas'}`}
                    aria-pressed={estrellas === n}
                    onMouseEnter={() => setHover(n)}
                    onClick={() => setEstrellas(n)}
                    className={`text-3xl leading-none px-0.5 transition-transform hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brass)] ${
                      n <= (hover || estrellas) ? 'text-[var(--color-brass)]' : 'text-[var(--color-muted)]/40'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mb-4">
              <label htmlFor="comentario" className={etiqueta}>Tu experiencia</label>
              <textarea
                id="comentario"
                rows={4}
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                maxLength={400}
                placeholder="¿Cómo quedó el corte? ¿Qué tal la atención?"
                className={`${campo} resize-y`}
              />
              <p className="text-right font-mono text-xs text-[var(--color-muted)] mt-1">{comentario.length}/400</p>
            </div>

            {error && (
              <p role="alert" className="mb-4 text-sm bg-[var(--color-barber-red)]/25 border-l-4 border-[var(--color-barber-red)] px-3 py-2">
                {error}
              </p>
            )}
            {enviada && (
              <p role="status" className="mb-4 text-sm bg-[var(--color-brass)]/15 border-l-4 border-[var(--color-brass)] px-3 py-2">
                Reseña publicada. Gracias por tu opinión.
              </p>
            )}

            <button type="submit" className={`${btnPrimario} w-full py-3 text-sm`}>
              Publicar reseña
            </button>
          </form>
        </Reveal>

        <div className="flex flex-col gap-4" aria-live="polite">
          {visibles.length === 0 && (
            <p className="text-center text-[var(--color-muted)] border border-dashed border-[var(--color-line)] rounded-sm px-4 py-10">
              Todavía no hay reseñas para este barbero. Sé el primero en dejar una.
            </p>
          )}

          {visibles.map((r) => (
            <article
              key={r.id}
              className="hover-lift bg-[var(--color-surface)] border border-[var(--color-line)] border-l-4 border-l-[var(--color-barber-red)] rounded-sm p-5"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="w-10 h-10 shrink-0 rounded-full bg-[var(--color-parchment)] text-[var(--color-ink)] font-display flex items-center justify-center">
                  {r.autor[0]?.toUpperCase()}
                </span>
                <div className="flex-1 min-w-[120px] leading-tight">
                  <p className="font-semibold">{r.autor}</p>
                  <p className="font-mono text-xs text-[var(--color-muted)]">{formatearFecha(r.fecha)}</p>
                </div>
                <Estrellas valor={r.estrellas} />
              </div>

              <p className="my-4 text-[var(--color-parchment)]">{r.comentario}</p>

              <div className="flex flex-wrap gap-2 font-mono text-xs">
                <span className="border border-[var(--color-brass)] text-[var(--color-brass)] rounded-sm px-2.5 py-1">
                  Atendió {nombreBarbero(r.barberoId)}
                </span>
                <span className="border border-[var(--color-line)] text-[var(--color-muted)] rounded-sm px-2.5 py-1">
                  {r.servicio}
                </span>
              </div>
            </article>
          ))}

          <div className="mt-4 text-center bg-[var(--color-surface-alt)] border border-[var(--color-brass)] rounded-sm p-8">
            <h3 className="font-display text-2xl mb-2">¿Listo para tu próximo corte?</h3>
            <p className="text-[var(--color-muted)] mb-6 max-w-md mx-auto text-sm">
              Reserva con tu barbero de confianza y asegura tu silla.
            </p>
            <Link href="/reservas/nueva" className={`inline-block ${btnPrimario} px-8 py-3 text-sm`}>
              Agendar cita
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}