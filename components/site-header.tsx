import Link from "next/link";

const nav = [
  { label: "Markets", href: "/markets" },
  { label: "Signals", href: "/signals" },
  { label: "Platform", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[var(--line)]/80 bg-[rgba(245,243,238,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-sm font-semibold text-[var(--gold)] shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            N
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">NEXORA</div>
            <div className="text-xs text-[var(--text-soft)]">Minimal market intelligence</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-[var(--text-soft)] md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--text)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-sm text-[var(--text)] transition hover:border-[var(--gold)] md:inline-flex">
            Sign in
          </Link>
          <Link href="/register" className="inline-flex rounded-full bg-[var(--text)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]">
            Explore platform
          </Link>
        </div>
      </div>
    </header>
  );
}
