import Link from "next/link";
import { ArrowRight, BarChart3, Bell, ChevronRight, ShieldCheck, Sparkles, TrendingUp, Wallet2 } from "lucide-react";

import { formatCompactCurrency, formatCurrency } from "@/lib/finance";

const marketTicker = [
  { symbol: "BTC/USD", value: "$68,420.12", delta: "+2.84%" },
  { symbol: "ETH/USD", value: "$3,810.56", delta: "+1.67%" },
  { symbol: "SOL/USD", value: "$164.90", delta: "+4.12%" },
  { symbol: "XAU/USD", value: "$2,426.70", delta: "+0.74%" },
  { symbol: "SPX", value: "5,482.13", delta: "+0.63%" },
];

const statCards = [
  { label: "Portfolio value", value: "$34,010.00", change: "+2.25%" },
  { label: "24h P&L", value: "+$1,810.05", change: "+4.8%" },
  { label: "Staked", value: "$12,500.00", change: "+1.2%" },
];

const watchlist = [
  { name: "Bitcoin", symbol: "BTC", price: "$68,420.12", change: "+2.84%" },
  { name: "Ethereum", symbol: "ETH", price: "$3,810.56", change: "+1.67%" },
  { name: "Solana", symbol: "SOL", price: "$164.90", change: "+4.12%" },
  { name: "XRP", symbol: "XRP", price: "$0.62", change: "+1.20%" },
];

const features = [
  {
    icon: Wallet2,
    title: "Portfolio controls",
    description: "Track balances, performance, and withdrawals with account-level clarity and protected flows.",
  },
  {
    icon: TrendingUp,
    title: "Market intelligence",
    description: "See live pricing, rankings, and trend context without noisy or distracting clutter.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by design",
    description: "Every transaction is validated server-side and kept auditable with a ledger-first approach.",
  },
  {
    icon: BarChart3,
    title: "Signal-ready execution",
    description: "Surface positions, entries, and execution windows in one clean decision workspace.",
  },
];

const performanceBars = [
  { label: "BTC", value: 82 },
  { label: "ETH", value: 62 },
  { label: "SOL", value: 51 },
  { label: "XAU", value: 39 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b0f] text-[#f5f4ef]">
      <div className="mx-auto max-w-7xl px-5 py-6 lg:px-8">
        <header className="rounded-[26px] border border-[#1d242a] bg-[#0d1418]/90 px-5 py-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#2d3740] bg-[#111a1f] text-lg font-semibold text-[#d7b77c]">
                N
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] text-[#9aa4ad]">NEXORA</div>
              </div>
            </div>

            <nav className="hidden items-center gap-7 text-sm text-[#d9d7d1] md:flex">
              <Link href="#overview">Overview</Link>
              <Link href="#markets">Markets</Link>
              <Link href="#signals">Signals</Link>
              <Link href="#security">Security</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link href="/login" className="rounded-full border border-[#2f3940] bg-[#0f171b] px-4 py-2 text-sm font-medium text-[#f5f4ef] transition hover:border-[#4a535b]">
                Sign in
              </Link>
              <Link href="/register" className="rounded-full bg-[#d7b77c] px-4 py-2 text-sm font-semibold text-[#12171b] transition hover:bg-[#e6c88a]">
                Create account
              </Link>
            </div>
          </div>
        </header>

        <section className="mt-6 rounded-[30px] border border-[#1d242a] bg-[radial-gradient(circle_at_top,_rgba(215,183,124,0.18),transparent_22%),linear-gradient(180deg,#0b1217,#0d1418)] p-5 shadow-[0_30px_80px_rgba(3,6,7,0.42)] lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#2b3740] bg-[#101a1f] px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-[#d7b77c]">
                <Sparkles size={12} />
                Clarity for every market move
              </div>

              <h1 className="max-w-xl text-4xl font-medium tracking-[-0.07em] text-[#f5f4ef] md:text-6xl">
                Trade smarter with a calmer, sharper view.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-[#a7afb8] md:text-lg">
                NEXORA brings together portfolio visibility, live market data, and disciplined signal intelligence in one premium trading workspace.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/register" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b77c] px-6 py-3 text-sm font-semibold text-[#12171b] transition hover:bg-[#e6c88a]">
                  Get started
                  <ArrowRight size={16} />
                </Link>
                <Link href="/login" className="inline-flex items-center justify-center rounded-full border border-[#303b43] bg-[#0f171b] px-6 py-3 text-sm font-medium text-[#f5f4ef] transition hover:border-[#4a535b]">
                  Sign in
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {statCards.map((stat) => (
                  <div key={stat.label} className="rounded-[22px] border border-[#1d242a] bg-[#0f171b] p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">{stat.label}</div>
                    <div className="mt-3 text-2xl font-medium text-[#f5f4ef]">{stat.value}</div>
                    <div className="mt-1 text-sm text-[#71d99e]">{stat.change}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[#1d242a] bg-[#0d1418] p-4 sm:p-5">
              <div className="rounded-[22px] border border-[#1d242a] bg-[#101a1f] p-4">
                <div className="flex items-center justify-between border-b border-[#1d242a] pb-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Portfolio</div>
                    <h2 className="mt-2 text-3xl font-medium text-[#f5f4ef]">$34,010.00</h2>
                  </div>
                  <div className="rounded-full border border-[#2d4135] bg-[#102118] px-2.5 py-1 text-xs font-medium text-[#71d99e]">+2.25%</div>
                </div>

                <div className="mt-5 flex gap-3">
                  <button className="flex-1 rounded-full bg-[#d7b77c] px-4 py-3 text-sm font-semibold text-[#11171b]">Deposit</button>
                  <button className="flex-1 rounded-full border border-[#2d3740] bg-[#0f171b] px-4 py-3 text-sm font-medium text-[#f5f4ef]">Withdraw</button>
                </div>

                <div className="mt-6 space-y-3">
                  {watchlist.map((asset) => (
                    <div key={asset.symbol} className="flex items-center justify-between rounded-2xl border border-[#1d242a] bg-[#0e1519] px-3 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#161f25] text-xs font-semibold text-[#d7b77c]">
                          {asset.symbol.slice(0, 1)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#f5f4ef]">{asset.name}</div>
                          <div className="text-[11px] uppercase tracking-[0.18em] text-[#9aa4ad]">{asset.symbol}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-[#f5f4ef]">{asset.price}</div>
                        <div className="text-xs text-[#71d99e]">{asset.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[28px] border border-[#1d242a] bg-[#0d1418] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Market overview</div>
                <h3 className="mt-2 text-2xl font-medium text-[#f5f4ef]">A cleaner market pulse</h3>
              </div>
              <Link href="/markets" className="inline-flex items-center gap-2 text-sm text-[#d7b77c]">
                View all <ChevronRight size={16} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-[#1d242a] bg-[#0b1116]">
              <div className="flex items-end gap-3 border-b border-[#1d242a] px-4 py-4">
                {performanceBars.map((bar) => (
                  <div key={bar.label} className="flex flex-1 flex-col items-center gap-3">
                    <div className="flex h-24 w-full items-end justify-center rounded-t-xl bg-[linear-gradient(180deg,#1a2730_0%,#d7b77c_100%)] p-1 shadow-inner shadow-black/20" style={{ height: `${bar.value * 1.6}px`, maxHeight: "120px" }}>
                      <div className="h-full w-full rounded-t-lg bg-[linear-gradient(180deg,rgba(255,255,255,0.15),rgba(0,0,0,0.08))]" />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#a7afb8]">{bar.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#1d242a] bg-[#0d1418] p-5">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Live market</div>
            <div className="mt-4 space-y-3">
              {marketTicker.map((item) => (
                <div key={item.symbol} className="flex items-center justify-between rounded-2xl border border-[#1d242a] bg-[#0f171b] px-3 py-3">
                  <div>
                    <div className="text-sm font-medium text-[#f5f4ef]">{item.symbol}</div>
                    <div className="text-xs text-[#a7afb8]">{item.value}</div>
                  </div>
                  <div className="text-xs font-medium text-[#71d99e]">{item.delta}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="signals" className="mt-8 rounded-[28px] border border-[#1d242a] bg-[#0d1418] p-5 lg:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Signals</div>
              <h3 className="mt-2 text-3xl font-medium text-[#f5f4ef]">Actionable signal intelligence</h3>
            </div>
            <Link href="/signals" className="inline-flex items-center gap-2 rounded-full border border-[#2d3740] bg-[#0f171b] px-4 py-2 text-sm text-[#f5f4ef]">
              Explore signals <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "BTC Breakout", direction: "Long", entry: "$68,240", tp: "$71,920", sl: "$66,710" },
              { title: "ETH Trend", direction: "Long", entry: "$3,790", tp: "$4,050", sl: "$3,600" },
              { title: "SOL Momentum", direction: "Long", entry: "$161.20", tp: "$176.00", sl: "$152.00" },
              { title: "XAU Hedge", direction: "Neutral", entry: "$2,420", tp: "$2,460", sl: "$2,390" },
            ].map((item) => (
              <article key={item.title} className="rounded-[22px] border border-[#1d242a] bg-[#0f171b] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[#f5f4ef]">{item.title}</span>
                  <span className="rounded-full bg-[#11231a] px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-[#71d99e]">{item.direction}</span>
                </div>
                <div className="mt-5 space-y-2 text-sm text-[#a7afb8]">
                  <div className="flex justify-between"><span>Entry</span><span className="text-[#f5f4ef]">{item.entry}</span></div>
                  <div className="flex justify-between"><span>TP</span><span className="text-[#f5f4ef]">{item.tp}</span></div>
                  <div className="flex justify-between"><span>SL</span><span className="text-[#f5f4ef]">{item.sl}</span></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="security" className="mt-8 grid gap-6 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-[24px] border border-[#1d242a] bg-[#0d1418] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#2d3740] bg-[#111a1f] text-[#d7b77c]">
                <Icon size={18} />
              </div>
              <h4 className="mt-5 text-xl font-medium text-[#f5f4ef]">{title}</h4>
              <p className="mt-3 text-sm leading-7 text-[#a7afb8]">{description}</p>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-[30px] border border-[#1d242a] bg-[linear-gradient(135deg,#0d1418,#111c24)] p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Start here</div>
              <h3 className="mt-2 text-3xl font-medium text-[#f5f4ef]">Ready for your next market move?</h3>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/login" className="inline-flex items-center justify-center rounded-full border border-[#2d3740] bg-[#0f171b] px-5 py-3 text-sm font-medium text-[#f5f4ef]">
                Sign in
              </Link>
              <Link href="/register" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b77c] px-5 py-3 text-sm font-semibold text-[#11171b]">
                Create account <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <footer className="mt-8 flex flex-col gap-3 pb-10 pt-3 text-sm text-[#9aa4ad] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#2d3740] bg-[#101a1f] text-xs font-semibold text-[#d7b77c]">
              N
            </div>
            NEXORA © 2026
          </div>
          <div className="flex items-center gap-5">
            <Link href="/markets">Markets</Link>
            <Link href="/signals">Signals</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Signup</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
