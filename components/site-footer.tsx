import Link from "next/link";

const nav = ["Home", "What is ico", "Product", "Token", "Road Map", "Team", "Contact Us"];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#020b18] text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
          <div className="text-4xl font-black tracking-[-0.08em] text-white sm:text-5xl md:text-6xl">
            NEXORA
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white/70 md:gap-8">
            {nav.map((item) => (
              <Link key={item} href="/" className="transition hover:text-[#f9c74f]">
                {item}
              </Link>
            ))}
            <Link href="/login" className="rounded-full bg-[#f9c74f] px-5 py-2.5 text-sm font-semibold text-[#0a1527] transition hover:opacity-90">
              Login
            </Link>
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 NEXORA. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/about" className="transition hover:text-white">About</Link>
            <Link href="/faq" className="transition hover:text-white">FAQ</Link>
            <Link href="/contact" className="transition hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
