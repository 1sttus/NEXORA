import { ArrowUpRight, Filter, Search } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { marketSnapshots } from "@/lib/market-data";

const marketRows = marketSnapshots.map((snapshot) => ({
  name: snapshot.name,
  symbol: snapshot.symbol,
  price: snapshot.priceLabel,
  change: `${snapshot.changePercent >= 0 ? "+" : ""}${snapshot.changePercent.toFixed(2)}%`,
  volume: snapshot.volume,
  marketCap:
    snapshot.symbol === "BTC"
      ? "$1.34T"
      : snapshot.symbol === "ETH"
        ? "$458.9B"
        : snapshot.symbol === "SOL"
          ? "$77.3B"
          : snapshot.symbol === "XRP"
            ? "$34.1B"
            : snapshot.symbol === "DOGE"
              ? "$25.7B"
              : "N/A",
}));

const movers = [
  { label: "Positive movers", items: ["BTC", "SOL", "XAU"] },
  { label: "Weakest movers", items: ["DOGE", "EURUSD", "SPX"] },
];

export default function MarketsPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-14">
        <div className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">Market overview</p>
              <h1 className="mt-3 text-4xl font-medium tracking-[-0.07em] text-[var(--text)] md:text-5xl">Markets</h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-soft)]">
                A clean list of the most relevant assets, designed to feel readable at a glance.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--soft)] px-4 py-2 text-sm text-[var(--text-soft)]">
                <Search size={16} />
                <span>Search assets</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--soft)] px-4 py-2 text-sm text-[var(--text-soft)]">
                <Filter size={16} />
                <span>Filters</span>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-6">
            {movers.map((group) => (
              <div key={group.label} className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{group.label}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-[var(--line)] bg-[var(--soft)] px-3 py-1.5 text-sm text-[var(--text-soft)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-[24px] border border-[var(--line)] bg-[linear-gradient(180deg,#ffffff,#f9f7f2)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Asset detail</div>
              <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Bitcoin overview</h2>
              <div className="mt-5 flex items-center gap-2 text-sm text-[var(--success)]">
                <ArrowUpRight size={16} />
                +2.84% today
              </div>
              <div className="mt-6 grid gap-4">
                {[
                  { label: "Price", value: "$68,420.12" },
                  { label: "Volume", value: "$31.2T" },
                  { label: "Market cap", value: "$1.34T" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-[20px] border border-[var(--line)] bg-[var(--panel)] p-4">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{stat.label}</div>
                    <div className="mt-3 text-2xl font-medium text-[var(--text)]">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-4 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
            <div className="overflow-hidden rounded-[18px] border border-[var(--line)]">
              <table className="min-w-full divide-y divide-[var(--line)] text-left">
                <thead className="bg-[var(--soft)] text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  <tr>
                    <th className="px-5 py-4">Asset</th>
                    <th className="px-5 py-4">Price</th>
                    <th className="px-5 py-4">24h</th>
                    <th className="px-5 py-4">Volume</th>
                    <th className="px-5 py-4">Market cap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--line)] text-sm text-[var(--text-soft)]">
                  {marketRows.map((row) => (
                    <tr key={row.symbol} className="hover:bg-[var(--soft)]/70">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-xs font-semibold text-[var(--gold)]">
                            {row.symbol.slice(0, 1)}
                          </div>
                          <div>
                            <div className="font-medium text-[var(--text)]">{row.name}</div>
                            <div className="text-[var(--muted)]">{row.symbol}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-4 font-medium text-[var(--text)]">{row.price}</td>
                      <td className="px-5 py-4 text-[var(--success)]">{row.change}</td>
                      <td className="px-5 py-4 text-[var(--muted)]">{row.volume}</td>
                      <td className="px-5 py-4 text-[var(--muted)]">{row.marketCap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </section>

      <SiteFooter />
    </main>
  );
}
