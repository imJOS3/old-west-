'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Menu, X } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Cortes top', href: '/cortes-top' },
  { label: 'Registrarme', href: '/registro' },
  { label: 'Reservar', href: '/reservas/nueva' },
]

export default function GlobalNavbar() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [canGoBack, setCanGoBack] = useState(false)

  useEffect(() => {
    setCanGoBack(window.history.length > 1)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-ink)]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            disabled={!canGoBack}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-parchment)] transition hover:border-[var(--color-brass)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft size={18} />
          </button>
          <Link href="/" className="font-display text-2xl tracking-wide text-[var(--color-parchment)]">
            El Corte
          </Link>
        </div>

        <nav className="hidden items-center gap-8 font-mono text-sm uppercase tracking-wide md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[var(--color-muted)] transition hover:text-[var(--color-brass)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--color-line)] bg-[var(--color-surface)] text-[var(--color-parchment)] transition hover:border-[var(--color-brass)] md:hidden"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`${menuOpen ? 'max-h-60 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'} overflow-hidden transition-all duration-300 md:hidden`}>
        <nav className="flex flex-col gap-3 px-4 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-sm border border-[var(--color-line)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-muted)] transition hover:border-[var(--color-brass)] hover:text-[var(--color-parchment)]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
