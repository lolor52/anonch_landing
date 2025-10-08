import Wordmark from './Wordmark';

export default function Header(): JSX.Element {
  return (
    <header
      className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/30"
      style={{
        borderBottom: '1px solid var(--border)',
        background: 'linear-gradient(180deg, rgba(25,24,22,.75), rgba(25,24,22,.35) 40%, rgba(25,24,22,0))',
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Wordmark />
          <span
            className="hidden md:inline-flex items-center gap-2 text-[13px] leading-none text-[var(--text-2)] border px-2 py-1 rounded-full"
            style={{ borderColor: 'var(--border)' }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: 'var(--active)' }} />
            Скоро запуск • 1 января 2026
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--text-2)]">
          <a className="hover:text-[var(--text-1)]" href="#idea">
            Идея
          </a>
          <a className="hover:text-[var(--text-1)]" href="#how">
            Как работает
          </a>
          <a className="hover:text-[var(--text-1)]" href="#safety">
            Безопасность
          </a>
          <a className="hover:text-[var(--text-1)]" href="#faq">
            FAQ
          </a>
          <a className="hover:text-[var(--text-1)]" href="#fsi">
            ФСИ
          </a>
        </nav>
      </div>
    </header>
  );
}
