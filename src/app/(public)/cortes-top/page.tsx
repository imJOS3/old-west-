import Reveal from '@/components/Reveal'

const cortes = [
  { id: 1, barbero: 'Carlos Rueda', estilo: 'Fade bajo' },
  { id: 2, barbero: 'Miguel Soto', estilo: 'Diseño con línea' },
  { id: 3, barbero: 'Andrés Peña', estilo: 'Clásico con raya' },
  { id: 4, barbero: 'Carlos Rueda', estilo: 'Fade alto + barba' },
  { id: 5, barbero: 'Miguel Soto', estilo: 'Textura arriba' },
  { id: 6, barbero: 'Andrés Peña', estilo: 'Pompadour' },
]

export default function CortesTopPage() {
  return (
    <main className="min-h-screen bg-[var(--color-ink)] texture-canvas">
      <section className="border-b border-[var(--color-line)] px-4 py-14 sm:py-16 text-center">
        <p className="font-mono text-xs text-[var(--color-brass)] tracking-widest uppercase mb-3 animate-fade-up">
          Barbería · Bogotá
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
          Cortes que marcan estilo
        </h1>
        <p className="text-[var(--color-muted)] max-w-xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
          Cada corte lleva la firma de nuestro equipo. Mira los trabajos más
          destacados de la semana y reserva con quien más te guste.
        </p>
        <a
          href="/reservas/nueva"
          className="inline-block bg-[var(--color-brass)] text-[var(--color-ink)] font-semibold px-6 py-3 rounded-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-transform animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          Reservar ahora
        </a>
      </section>

      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="font-display text-3xl mb-6">Cortes top</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cortes.map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <div className="hover-lift group relative aspect-[3/4] rounded-sm overflow-hidden border border-[var(--color-line)] bg-[var(--color-surface)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface-alt)] to-[var(--color-ink)]" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-sm font-medium">{c.estilo}</p>
                  <p className="font-mono text-xs text-[var(--color-brass)]">{c.barbero}</p>
                </div>
                <div className="absolute top-0 left-0 w-1 h-full barber-stripe opacity-0 group-hover:opacity-100 transition" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 border-t border-[var(--color-line)]">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 font-mono text-sm text-center sm:text-left">
          <div>
            <p className="text-[var(--color-brass)] uppercase text-xs mb-2">Dirección</p>
            <p className="text-[var(--color-muted)]">Calle 123 #45-67, Bogotá</p>
          </div>
          <div>
            <p className="text-[var(--color-brass)] uppercase text-xs mb-2">Horario</p>
            <p className="text-[var(--color-muted)]">Lun - Sáb · 9:00 - 19:00</p>
          </div>
          <div>
            <p className="text-[var(--color-brass)] uppercase text-xs mb-2">Contacto</p>
            <p className="text-[var(--color-muted)]">300 123 4567</p>
          </div>
        </div>
      </section>
    </main>
  )
}