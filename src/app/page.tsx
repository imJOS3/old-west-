import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'
import { InstagramIcon, FacebookIcon } from '@/app/components/BrandIcons'
import PhotoFrame from '@/app/components/PhotoFrame'
import Reveal from '@/components/Reveal'

const barberos = [
  { id: '1', nombre: 'Carlos Rueda', especialidad: 'Fade & barba', foto: '/images/barberos/carlos.jpg' },
  { id: '2', nombre: 'Andrés Peña', especialidad: 'Clásico', foto: '/images/barberos/andres.jpg' },
  { id: '3', nombre: 'Miguel Soto', especialidad: 'Diseño y líneas', foto: '/images/barberos/miguel.jpg' },
]

const servicios = [
  {
    nombre: 'Corte clásico',
    minutos: '20',
    precio: '$25.000',
    detalle: 'Corte a tijera y máquina, ajustado a tu estilo.',
    incluye: ['Lavado y masaje capilar', 'Corte personalizado', 'Peinado final'],
    foto: '/images/cortes/clasico-raya.jpg',
  },
  {
    nombre: 'Fade + Barba',
    minutos: '35',
    precio: '$40.000',
    detalle: 'El combo completo para un look impecable de pies a cabeza.',
    incluye: ['Degradado de precisión', 'Barba perfilada con navaja', 'Toalla caliente'],
    foto: '/images/cortes/fade-barba.jpg',
  },
  {
    nombre: 'Afeitado clásico',
    minutos: '20',
    precio: '$22.000',
    detalle: 'El ritual tradicional de barbería, a la antigua.',
    incluye: ['Toalla caliente', 'Afeitado con navaja', 'Loción after shave'],
    foto: '/images/cortes/textura.jpg',
  },
  {
    nombre: 'Diseño y líneas',
    minutos: '15',
    precio: '$15.000',
    detalle: 'El detalle final que le da carácter a tu corte.',
    incluye: ['Líneas de precisión', 'Diseños personalizados', 'Acabado con navaja'],
    foto: '/images/cortes/diseno-linea.jpg',
  },
]

const pasos = [
  { n: '01', t: 'Reserva tu hora', d: 'Escoge el día y la hora que más te convenga, directo desde tu celular.' },
  { n: '02', t: 'Llega y listo', d: 'Sin filas ni esperas. Tu silla te espera a la hora que reservaste.' },
]

const redes = [
  { nombre: 'Instagram', href: 'https://instagram.com/', Icon: InstagramIcon },
  { nombre: 'Facebook', href: 'https://facebook.com/', Icon: FacebookIcon },
  { nombre: 'WhatsApp', href: 'https://wa.me/57XXXXXXXXXX', Icon: MessageCircle },
]

const btnPrimario =
  'bg-[var(--color-brass)] text-[var(--color-ink)] font-semibold rounded-sm hover:opacity-90 hover:scale-105 active:scale-95 transition-transform font-mono uppercase tracking-wide'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-ink)] texture-canvas overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)] px-4 py-16 sm:py-24 text-center">
        <div className="absolute inset-0">
          <Image
            src="/images/barberia-interior.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover scale-105"  
          />
        </div>
        <div className="absolute inset-0 bg-[var(--color-ink)]/78" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span className="emblem mb-6 sm:mb-8 animate-fade-up">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-brass)" strokeWidth="1.5">
              <circle cx="6" cy="6" r="2.5" />
              <circle cx="6" cy="18" r="2.5" />
              <line x1="8" y1="8" x2="19" y2="19" />
              <line x1="8" y1="16" x2="19" y2="5" />
            </svg>
          </span>

          <p
            className="font-script text-2xl sm:text-3xl text-[var(--color-brass)] mb-2 animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            Bienvenido a
          </p>

          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl leading-tight mb-6 animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            <span className="text-[var(--color-parchment)]">EL</span>{' '}
            <span className="text-[var(--color-brass)]">CORTE</span>
            <br />
            <span className="text-[var(--color-parchment)]">BARBERÍA</span>
          </h1>

          <p className="text-[var(--color-muted)] max-w-xl mb-10 animate-fade-up" style={{ animationDelay: '300ms' }}>
            Tradición, oficio y carácter en cada corte. Reserva con tu barbero
            de confianza y vive la experiencia clásica de barbería.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
            <Link href="/reservas/nueva" className={`${btnPrimario} px-8 py-3 text-sm`}>
              Agendar cita
            </Link>
            <Link
              href="/cortes-top"
              className="border border-[var(--color-brass)] text-[var(--color-brass)] px-8 py-3 rounded-sm hover:bg-[var(--color-brass)] hover:text-[var(--color-ink)] hover:scale-105 active:scale-95 transition font-mono text-sm uppercase tracking-wide"
            >
              Ver cortes
            </Link>
          </div>
        </div>
      </section>

      {/* Nuestro espacio */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <PhotoFrame
              src="/images/barberia-interior.jpg"
              alt="Interior de la barbería El Corte"
              sizes="(min-width: 768px) 50vw, 100vw"
              aspectClass="aspect-[4/3]"
            />
            <div>
              <p className="font-mono text-xs text-[var(--color-brass)] uppercase tracking-widest mb-3">
                Nuestro espacio
              </p>
              <h2 className="font-display text-3xl sm:text-4xl mb-4">Un lugar hecho para tu visita</h2>
              <p className="text-[var(--color-muted)] mb-6">
                Diseñamos cada rincón para que tu corte sea parte de la
                experiencia: buena luz, buena música y la comodidad de
                sentirte en casa mientras te atendemos.
              </p>
              <Link href="/reservas" className={`inline-block ${btnPrimario} px-6 py-3 text-sm`}>
                Conócenos, reserva ya
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Nuestro equipo */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-10">
            <p className="font-mono text-xs text-[var(--color-brass)] uppercase tracking-widest mb-3">
              Nuestro equipo
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">Agenda con tu barbero</h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {barberos.map((b, i) => (
            <Reveal key={b.id} delay={i * 120}>
              <div className="h-full flex flex-col">
                <PhotoFrame
                  src={b.foto}
                  alt={b.nombre}
                  sizes="(min-width: 768px) 30vw, 90vw"
                  aspectClass="aspect-[4/5]"
                />
                <div className="p-5 flex flex-col flex-1 bg-[var(--color-surface)] border border-t-0 border-[var(--color-line)]">
                  <h3 className="font-display text-2xl mb-1">{b.nombre}</h3>
                  <p className="text-[var(--color-muted)] text-sm mb-4">{b.especialidad}</p>
                  <Link
                    href={`/reservas`}
                    className="mt-auto text-center bg-[var(--color-brass)] text-[var(--color-ink)] font-semibold py-2.5 rounded-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-transform font-mono text-xs uppercase tracking-wide"
                  >
                    Reservar con {b.nombre.split(' ')[0]}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-6">
          {pasos.map((item, i) => (
            <Reveal key={item.n} delay={i * 120}>
              <div className="hover-lift h-full bg-[var(--color-surface)] border border-[var(--color-line)] rounded-sm p-6">
                <p className="font-mono text-xs text-[var(--color-brass)] uppercase mb-2">{item.n}</p>
                <h3 className="font-display text-2xl mb-2">{item.t}</h3>
                <p className="text-[var(--color-muted)] text-sm">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-4">
            <p className="font-mono text-xs text-[var(--color-brass)] uppercase tracking-widest mb-3">
              Lo que incluye tu visita
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-4">Nuestros servicios</h2>
            <p className="text-[var(--color-muted)] max-w-xl mx-auto mb-12">
              Cada servicio está pensado para que salgas exactamente con el
              look que buscabas, sin afanes y sin sorpresas. Elige el tuyo y
              agenda tu silla en menos de un minuto.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {servicios.map((s, i) => (
            <Reveal key={s.nombre} delay={i * 100}>
              {/* A: tarjeta */}
              <div className="h-full bg-[var(--color-surface)] border border-[var(--color-line)] overflow-hidden flex flex-col">
                <PhotoFrame
                  src={s.foto}
                  alt={s.nombre}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  aspectClass="aspect-[16/9]"
                  className="rounded-none"
                />

                {/* B: contenido */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-2xl">{s.nombre}</h3>
                    <span className="font-mono text-xs text-[var(--color-ink)] bg-[var(--color-brass)] px-2.5 py-1 rounded-sm whitespace-nowrap">
                      {s.minutos} min
                    </span>
                  </div>

                  <p className="text-[var(--color-muted)] text-sm mb-4">{s.detalle}</p>

                  <ul className="space-y-1.5 mb-6">
                    {s.incluye.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[var(--color-parchment)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brass)] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* C: precio + botón */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-[var(--color-line)]">
                    <span className="font-mono text-lg text-[var(--color-brass)]">{s.precio}</span>
                    <Link href="/reservas" className={`${btnPrimario} px-4 py-2 text-xs`}>
                      Quiero este
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-10 text-center bg-[var(--color-surface-alt)] border border-[var(--color-brass)] rounded-sm p-8">
            <h3 className="font-display text-2xl sm:text-3xl mb-2">¿Listo para tu cambio de look?</h3>
            <p className="text-[var(--color-muted)] mb-6 max-w-md mx-auto">
              Tu silla te está esperando. Agenda ahora y asegura tu horario
              antes de que se llene la semana.
            </p>
            <Link href="/reservas" className={`inline-block ${btnPrimario} px-8 py-3 text-sm`}>
              Quiero mi cita
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Síguenos */}
      <section className="px-4 py-16 border-t border-[var(--color-line)]">
        <Reveal>
          <div className="max-w-6xl mx-auto text-center">
            <p className="font-mono text-xs text-[var(--color-brass)] uppercase tracking-widest mb-3">
              Comunidad
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-8">Síguenos</h2>
            <div className="flex items-center justify-center gap-4">
              {redes.map(({ nombre, href, Icon }) => (
                <a
                  key={nombre}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={nombre}
                  className="w-14 h-14 rounded-full border border-[var(--color-brass)] flex items-center justify-center text-[var(--color-brass)] hover:bg-[var(--color-brass)] hover:text-[var(--color-ink)] hover:scale-110 active:scale-95 transition"
                >
                  <Icon size={22} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

    </main>
  )
}