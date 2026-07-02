'use client'

const WHATSAPP_NUMBER = '573001234567' // Reemplaza por tu número real
const MENSAJE = 'Hola, quiero agendar una cita en El Corte Barbería'

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MENSAJE
  )}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3"
    >
      <span className="hidden sm:block bg-[var(--color-surface)] border border-[var(--color-line)] text-[var(--color-parchment)] text-sm px-3 py-2 rounded-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all whitespace-nowrap font-mono">
        Escríbenos por WhatsApp
      </span>

      <span className="relative block w-14 h-14 shrink-0">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />

        <span className="absolute inset-0 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg group-hover:scale-110 group-active:scale-95 transition-transform">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="white"
            aria-hidden="true"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.552 4.11 1.518 5.833L0 24l6.335-1.652A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.895a9.83 9.83 0 0 1-5.02-1.377l-.36-.213-3.75.978.998-3.653-.235-.375A9.822 9.822 0 0 1 2.104 12c0-5.462 4.434-9.896 9.896-9.896S21.896 6.538 21.896 12 17.462 21.895 12 21.895z" />
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </span>
      </span>
    </a>
  )
}