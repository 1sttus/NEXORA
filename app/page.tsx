import Link from "next/link";
import { ArrowRight, BarChart3, ShieldCheck, TrendingUp, Wallet2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { formatCompactCurrency, formatCurrency } from "@/lib/finance";

const marketTicker = [
  { symbol: "BTC/USD", value: "$68,420.12", delta: "+2.84%" },
  { symbol: "ETH/USD", value: "$3,810.56", delta: "+1.67%" },
  { symbol: "EUR/USD", value: "1.0912", delta: "+0.18%" },
  { symbol: "XAU/USD", value: "$2,426.70", delta: "+0.74%" },
  { symbol: "S&P 500", value: "5,482.13", delta: "+0.63%" },
];

const metrics = [
  { label: "Deposited", value: formatCurrency(138540), delta: "+12.4%" },
  { label: "Withdrawn", value: formatCurrency(73240), delta: "+4.8%" },
  { label: "Profit", value: formatCurrency(40520), delta: "+8.1%" },
  { label: "Signal Fee", value: formatCurrency(2140), delta: "-0.6%" },
];

const platformHighlights = [
  {
    icon: Wallet2,
    title: "Capital visibility",
    description: "Monitor deposits, portfolio movement, and net performance from a single premium command surface.",
  },
  {
    icon: TrendingUp,
    title: "Actionable market data",
    description: "Track live prices, watchlists, and chart performance with readable context for each asset class.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first operations",
    description: "Server-side validation, audit logging, and strict permission checks protect financial records.",
  },
  {
    icon: BarChart3,
    title: "Signal intelligence",
    description: "Stay aligned with trusted signals, clear positions, and disciplined execution frameworks.",
  },
];

const marketRows = [
  { name: "Bitcoin", symbol: "BTC", price: "$68,420.12", change: "+2.84%", volume: "$31.2T" },
  { name: "Ethereum", symbol: "ETH", price: "$3,810.56", change: "+1.67%", volume: "$18.6T" },
  { name: "Solana", symbol: "SOL", price: "$164.90", change: "+4.12%", volume: "$7.4T" },
  { name: "XRP", symbol: "XRP", price: "$0.62", change: "+1.20%", volume: "$2.7T" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F4EF]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-[#2B3138] bg-[#12181D] text-lg font-semibold text-[#C9A96A]">
            N
          </div>
          <div className="text-[10px] uppercase tracking-[0.35em] text-[#A5ABB4]">NEXORA</div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-[#D9D7D1] md:flex">
          <Link href="#markets">Markets</Link>
          <Link href="#signals">Signals</Link>
          <Link href="#platform">Platform</Link>
          <Link href="#security">Security</Link>
          <Link href="#pricing">Pricing</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="#login" className="hidden rounded-full border border-[#3A4047] px-4 py-2 text-sm text-[#F5F4EF] md:inline-flex">
            Sign in
          </Link>
          <Link href="#register" className="inline-flex rounded-full bg-[#C9A96A] px-4 py-2 text-sm font-medium text-[#11161B] transition hover:bg-[#d9b982]">
            Explore platform
          </Link>
        </div>
      </header>

      <main>
        <section className="border-y border-[#1B2126] bg-[radial-gradient(circle_at_top,_rgba(201,169,106,0.12),transparent_25%),linear-gradient(180deg,#0B0D10,#10161B)]">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
            <div className="mb-8 flex justify-center md:justify-start">
              <Badge>Clarity for Every Market Move.</Badge>
            </div>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <h1 className="max-w-xl text-5xl font-medium tracking-[-0.06em] text-[#F5F4EF] md:text-6xl">
                  Premium insight for disciplined digital asset decisions.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#A5ABB4]">
                  NEXORA brings market visibility, portfolio context, and timely trading intelligence together in a calmer, more credible product experience.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="#register" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C9A96A] px-6 py-3 text-sm font-medium text-[#11161B] transition hover:bg-[#d9b982]">
                    Explore the platform
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="#markets" className="inline-flex items-center justify-center rounded-full border border-[#3B4249] px-6 py-3 text-sm font-medium text-[#F5F4EF]">
                    View markets
                  </Link>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#242A32] bg-[#0F1418]/80 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <div className="mb-5 flex items-center justify-between border-b border-[#1D242A] pb-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#A5ABB4]">Market overview</p>
                    <h2 className="mt-2 text-2xl font-medium text-[#F5F4EF]">Portfolio pulse</h2>
                  </div>
                  <Badge className="border-[#234349] bg-[#0E1C20] text-[#6ED8E6]">Live</Badge>
                </div>

                <div className="space-y-4">
                  {metrics.map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded-2xl border border-[#1A2228] bg-[#10161A] px-4 py-3">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.24em] text-[#A5ABB4]">{item.label}</div>
                        <div className="mt-2 text-2xl font-medium text-[#F5F4EF]">{item.value}</div>
                      </div>
                      <div className="text-sm font-medium text-[#6ED8E6]">{item.delta}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-b border-[#1B2126] bg-[#0B0D10]">
          <div className="mx-auto flex max-w-7xl gap-8 overflow-x-auto whitespace-nowrap px-6 py-4 text-sm text-[#C7CBCF] lg:px-10">
            {marketTicker.map((item) => (
              <div key={item.symbol} className="flex shrink-0 items-center gap-3 border-l border-[#1C2127] pl-4 first:border-l-0 first:pl-0">
                <span className="font-medium text-[#F5F4EF]">{item.symbol}</span>
                <span>{item.value}</span>
                <span className="text-[#71D99E]">{item.delta}</span>
              </div>
            ))}
          </div>
        </div>

        <section id="platform" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mb-10 max-w-2xl">
            <Badge>Platform overview</Badge>
            <h2 className="mt-6 text-4xl tracking-[-0.05em] text-[#F5F4EF]">Built for clarity, trust, and execution.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {platformHighlights.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-[24px] border border-[#1D242A] bg-[#0F1518] p-6">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#2A3137] bg-[#121A1E] text-[#C9A96A]">
                  <Icon size={18} />
                </div>
                <h3 className="text-xl font-medium text-[#F5F4EF]">{title}</h3>
                <p className="mt-4 text-base leading-7 text-[#A5ABB4]">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="markets" className="border-y border-[#1B2126] bg-[#0E1318]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <Badge>Market intelligence</Badge>
                <h2 className="mt-5 text-4xl tracking-[-0.05em] text-[#F5F4EF]">A disciplined view of the market.</h2>
              </div>
              <Link href="#markets" className="hidden text-sm text-[#C9A96A] md:inline-flex">
                View all assets →
              </Link>
            </div>

            <div className="overflow-hidden rounded-[24px] border border-[#1D242A] bg-[#0C1115]">
              <table className="min-w-full divide-y divide-[#192229] text-left">
                <thead className="bg-[#10171C] text-[10px] uppercase tracking-[0.2em] text-[#A5ABB4]">
                  <tr>
                    <th className="px-6 py-4">Asset</th>
                    <th className="px-6 py-4">Price</th>
                    <th className="px-6 py-4">24h</th>
                    <th className="px-6 py-4">Volume</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#192229] text-sm text-[#E8E4DE]">
                  {marketRows.map((row) => (
                    <tr key={row.symbol} className="hover:bg-[#10181D]">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B242B] text-xs font-semibold text-[#C9A96A]">
                            {row.symbol.slice(0, 1)}
                          </div>
                          <div>
                            <div className="font-medium text-[#F5F4EF]">{row.name}</div>
                            <div className="text-[#A5ABB4]">{row.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-[#F5F4EF]">{row.price}</td>
                      <td className="px-6 py-4 text-[#71D99E]">{row.change}</td>
                      <td className="px-6 py-4 text-[#A5ABB4]">{row.volume}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="signals" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Badge>Signals</Badge>
              <h2 className="mt-5 text-4xl tracking-[-0.05em] text-[#F5F4EF]">Actionable insight without the noise.</h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-[#A5ABB4]">
                Structured signal coverage, disciplined pricing, and clean execution context keep every decision transparent and grounded.
              </p>
            </div>
            <div className="rounded-[24px] border border-[#1D242A] bg-[#0F1518] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "BTC breakout", direction: "Long", entry: "$68,240", tp: "$71,920", sl: "$66,710" },
                  { label: "ETH trend", direction: "Long", entry: "$3,790", tp: "$4,050", sl: "$3,600" },
                  { label: "XAU hedge", direction: "Neutral", entry: "$2,420", tp: "$2,460", sl: "$2,390" },
                  { label: "SOL momentum", direction: "Long", entry: "$161.20", tp: "$176.00", sl: "$152.00" },
                ].map((signal) => (
                  <div key={signal.label} className="rounded-2xl border border-[#202932] bg-[#10181D] p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-[#F5F4EF]">{signal.label}</div>
                      <span className="rounded-full bg-[#1D2B26] px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#71D99E]">{signal.direction}</span>
                    </div>
                    <div className="mt-5 space-y-2 text-sm text-[#A5ABB4]">
                      <div className="flex justify-between"><span>Entry</span><span className="text-[#F5F4EF]">{signal.entry}</span></div>
                      <div className="flex justify-between"><span>TP</span><span className="text-[#F5F4EF]">{signal.tp}</span></div>
                      <div className="flex justify-between"><span>SL</span><span className="text-[#F5F4EF]">{signal.sl}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="security" className="border-t border-[#1B2126] bg-[#0B0D10]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <Badge>Security</Badge>
                <h2 className="mt-5 text-4xl tracking-[-0.05em] text-[#F5F4EF]">Financial-grade controls at every layer.</h2>
                <p className="mt-6 max-w-lg text-lg leading-8 text-[#A5ABB4]">
                  We never accept client-side balance truth. Every transaction is validated server-side and recorded in an auditable financial ledger.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Server-authoritative ledger",
                  "Audit-ready admin actions",
                  "Granular permissions",
                  "Secure session architecture",
                  "Rate limiting and validation",
                  "Idempotent financial operations",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#1D242A] bg-[#0F1518] p-4 text-sm text-[#E8E4DE]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[28px] border border-[#1D242A] bg-[linear-gradient(135deg,#11181D,#0E1418)] p-8 md:p-12">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <Badge>Referrals</Badge>
                <h2 className="mt-5 text-4xl tracking-[-0.05em] text-[#F5F4EF]">Grow with a premium referral engine.</h2>
              </div>
              <div className="rounded-full border border-[#2A3137] bg-[#10181D] px-4 py-2 text-sm text-[#D9D7D1]">
                {formatCompactCurrency(128000)} tracked commission value
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: "Unique referral links", value: "14.8k" },
                { title: "Qualified referrals", value: "2,640" },
                { title: "Commission paid", value: formatCurrency(128000) },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#1D242A] bg-[#10181D] p-6">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#A5ABB4]">{item.title}</div>
                  <div className="mt-4 text-3xl font-medium text-[#F5F4EF]">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
