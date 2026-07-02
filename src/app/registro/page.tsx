'use client'

import { useState } from 'react'

export default function RegistroPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmar: '',
  })
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (form.password !== form.confirmar) {
      setError('Las contraseñas no coinciden')
      return
    }
    setError('')
    console.log('Registrando:', form)
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-10 bg-[var(--color-ink)] texture-canvas">
      <div className="w-full max-w-md flex animate-fade-up">
        <div className="w-2 barber-stripe rounded-l-sm shrink-0" />

        <div className="flex-1 bg-[var(--color-surface)] border border-[var(--color-line)] rounded-r-sm p-6 sm:p-8">
          <p className="font-mono text-xs text-[var(--color-brass)] mb-2 tracking-widest uppercase">
            Nuevo cliente
          </p>
          <h1 className="font-display text-3xl sm:text-4xl mb-6">Únete a la barbería</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-mono text-xs text-[var(--color-muted)] mb-1 uppercase">
                Nombre completo
              </label>
              <input
                type="text"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                className="w-full bg-[var(--color-surface-alt)] border border-[var(--color-line)] rounded-sm px-3 py-2 text-[var(--color-parchment)] outline-none transition-colors focus:border-[var(--color-brass)]"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-[var(--color-muted)] mb-1 uppercase">
                Correo
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-[var(--color-surface-alt)] border border-[var(--color-line)] rounded-sm px-3 py-2 text-[var(--color-parchment)] outline-none transition-colors focus:border-[var(--color-brass)]"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-[var(--color-muted)] mb-1 uppercase">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                required
                value={form.password}
                onChange={handleChange}
                className="w-full bg-[var(--color-surface-alt)] border border-[var(--color-line)] rounded-sm px-3 py-2 text-[var(--color-parchment)] outline-none transition-colors focus:border-[var(--color-brass)]"
              />
            </div>

            <div>
              <label className="block font-mono text-xs text-[var(--color-muted)] mb-1 uppercase">
                Confirmar contraseña
              </label>
              <input
                type="password"
                name="confirmar"
                required
                value={form.confirmar}
                onChange={handleChange}
                className="w-full bg-[var(--color-surface-alt)] border border-[var(--color-line)] rounded-sm px-3 py-2 text-[var(--color-parchment)] outline-none transition-colors focus:border-[var(--color-brass)]"
              />
            </div>

            {error && (
              <p className="text-[var(--color-barber-red)] text-sm">{error}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[var(--color-brass)] text-[var(--color-ink)] font-semibold py-2 rounded-sm hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              Crear cuenta
            </button>
          </form>

          <p className="text-[var(--color-muted)] text-sm mt-4">
            ¿Ya tienes cuenta?{' '}
            <a href="/login" className="text-[var(--color-brass)] underline">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}