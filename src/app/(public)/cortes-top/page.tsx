import Image from 'next/image'
import PhotoFrame from '@/app/components/PhotoFrame'
import Reveal from '@/components/Reveal'

const cortes = [
  { id: 1, barbero: 'Carlos Rueda', estilo: 'Fade bajo', foto: '/images/cortes/fade-bajo.jpg' },
  { id: 2, barbero: 'Miguel Soto', estilo: 'Diseñ o con línea', foto: '/images/cortes/diseno-linea.jpg' },
  { id: 3, barbero: 'Andrés Peña', estilo: 'Clásico con raya', foto: '/images/cortes/clasico-raya.jpg' },
  { id: 4, barbero: 'Carlos Rueda', estilo: 'Fade alto + barba', foto: '/images/cortes/fade-barba.jpg' },
  { id: 5, barbero: 'Miguel Soto', estilo: 'Textura arriba', foto: '/images/cortes/textura.jpg' },
  { id: 6, barbero: 'Andrés Peña', estilo: 'Pompadour', foto: '/images/cortes/pompadour.jpg' },
]

export default function CortesTopPage() {
  return (
    <main className="min-h-screen bg-[var(--color-ink)] texture-canvas">
      <section className="relative overflow-hidden border-b border-[var(--color-line)] px-4 py-14 sm:py-16 text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/cortes/fade-barba.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
        </div>
        <div className="absolute top-0 left-0 w-full h-1 " />
        <div className="relative z-10">
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
        </div>
      </section>

      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="font-display text-3xl mb-6">Cortes top</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {cortes.map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <a href="/reservas/nueva" className="block">
                <PhotoFrame
                  src={c.foto}
                  alt={`${c.estilo} por ${c.barbero}`}
                  sizes="(min-width: 768px) 30vw, (min-width: 640px) 50vw, 100vw"
                  aspectClass="aspect-[3/4]"
                >
                  <div className="absolute bottom-0 left-0 right-0 z-[3] p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{c.estilo}</p>
                    <p className="font-mono text-xs text-[var(--color-brass)]">{c.barbero}</p>
                  </div>
                </PhotoFrame>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

    </main>
  )
}
