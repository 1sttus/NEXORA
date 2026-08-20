import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "About", href: "/about" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Contact", href: "/contact" },
  ],
  Platform: [
    { label: "Markets", href: "/markets" },
    { label: "Signals", href: "/signals" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  Legal: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Risk disclosure", href: "/risk" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[transparent]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-sm font-semibold text-[var(--gold)]">
              N
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">NEXORA</div>
              <div className="text-xs text-[var(--text-soft)]">Precision without noise</div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-[var(--text-soft)]">
            Clarity for every market move. NEXORA helps users monitor portfolio performance and market intelligence with discipline and transparency.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">{heading}</h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--text-soft)]">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[var(--text)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
