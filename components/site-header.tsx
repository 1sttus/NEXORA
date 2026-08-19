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
    <header className="border-b border-[#1B2126] bg-[#0B0D10]/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md border border-[#2B3138] bg-[#12181D] text-sm font-semibold text-[#C9A96A]">
            N
          </div>
          <div className="text-[10px] uppercase tracking-[0.35em] text-[#A5ABB4]">NEXORA</div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-[#D9D7D1] md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#F5F4EF]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden rounded-full border border-[#3A4047] px-4 py-2 text-sm text-[#F5F4EF] md:inline-flex">
            Sign in
          </Link>
          <Link href="/register" className="inline-flex rounded-full bg-[#C9A96A] px-4 py-2 text-sm font-medium text-[#11161B] transition hover:bg-[#d9b982]">
            Explore platform
          </Link>
        </div>
      </div>
    </header>
  );
}
