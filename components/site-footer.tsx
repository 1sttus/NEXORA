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
    <footer className="border-t border-[#1B2126] bg-[#0B0D10]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[#2B3138] bg-[#12181D] text-sm font-semibold text-[#C9A96A]">
              N
            </div>
            <div className="text-[10px] uppercase tracking-[0.35em] text-[#A5ABB4]">NEXORA</div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-7 text-[#A5ABB4]">
            Clarity for every market move. NEXORA helps users monitor portfolio performance and market intelligence with discipline and transparency.
          </p>
        </div>

        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <h3 className="text-[10px] uppercase tracking-[0.24em] text-[#A5ABB4]">{heading}</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#D9D7D1]">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[#F5F4EF]">
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
