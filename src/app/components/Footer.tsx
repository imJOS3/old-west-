export default function Footer() {
    return (
      <footer className="border-t border-[var(--color-line)] bg-[var(--color-ink)] px-4 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--color-muted)] text-center">
          <span>© {new Date().getFullYear()} El Corte Barbería</span>
          <span>Calle 123 #45-67, Bogotá · Lun - Sáb 9:00 - 19:00</span>
        </div>
      </footer>
    )
  }