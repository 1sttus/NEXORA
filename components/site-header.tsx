import Link from "next/link";

const nav = [
  { label: "Prices", href: "/markets" },
  { label: "Learn", href: "/about" },
  { label: "Wallet", href: "/dashboard" },
  { label: "Buy & Sell", href: "/register" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(10,6,24,0.55)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <div className="text-3xl font-black tracking-[-0.08em]">NEXORA</div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:border-[#a98dff] md:inline-flex">
            Login
          </Link>
          <Link href="/register" className="inline-flex rounded-full bg-[#ff8a5b] px-4 py-2.5 text-sm font-semibold text-[#170d24] shadow-[0_18px_35px_rgba(255,138,91,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff9d73]">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
