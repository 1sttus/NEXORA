import { ArrowUpRight, Filter, Search } from "lucide-react";

const marketRows = [
  { name: "Bitcoin", symbol: "BTC", price: "$68,420.12", change: "+2.84%", volume: "$31.2T", marketCap: "$1.34T" },
  { name: "Ethereum", symbol: "ETH", price: "$3,810.56", change: "+1.67%", volume: "$18.6T", marketCap: "$458.9B" },
  { name: "Solana", symbol: "SOL", price: "$164.90", change: "+4.12%", volume: "$7.4T", marketCap: "$77.3B" },
  { name: "XRP", symbol: "XRP", price: "$0.62", change: "+1.20%", volume: "$2.7T", marketCap: "$34.1B" },
  { name: "Dogecoin", symbol: "DOGE", price: "$0.18", change: "+2.05%", volume: "$1.3T", marketCap: "$25.7B" },
  { name: "EUR/USD", symbol: "EURUSD", price: "1.0912", change: "+0.18%", volume: "—", marketCap: "—" },
  { name: "Gold", symbol: "XAU", price: "$2,426.70", change: "+0.74%", volume: "—", marketCap: "—" },
  { name: "S&P 500", symbol: "SPX", price: "5,482.13", change: "+0.63%", volume: "—", marketCap: "—" },
];

const movers = [
  { label: "Positive movers", items: ["BTC", "SOL", "XAU"] },
  { label: "Weakest movers", items: ["DOGE", "EURUSD", "SPX"] },
];

export default function MarketsPage() {
  return (
    <main className="min-h-screen bg-[#0B0D10] text-[#F5F4EF]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <header className="rounded-[28px] border border-[#1D242A] bg-[#0F1518] p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-[#A5ABB4]">Market overview</p>
              <h1 className="mt-3 text-4xl tracking-[-0.05em] text-[#F5F4EF]">Markets</h1>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center gap-3 rounded-full border border-[#2A3137] bg-[#10181D] px-4 py-2 text-sm text-[#D9D7D1]">
                <Search size={16} />
                <span>Search assets</span>
              </div>
              <div className="flex items-center gap-3 rounded-full border border-[#2A3137] bg-[#10181D] px-4 py-2 text-sm text-[#D9D7D1]">
                <Filter size={16} />
                <span>Filters</span>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-6">
            {movers.map((group) => (
              <div key={group.label} className="rounded-[24px] border border-[#1D242A] bg-[#0F1518] p-5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A5ABB4]">{group.label}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-[#2A3137] bg-[#10181D] px-3 py-1.5 text-sm text-[#D9D7D1]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[24px] border border-[#1D242A] bg-[#0F1518] p-4">
            <div className="overflow-hidden rounded-[18px] border border-[#1D242A] bg-[#0C1115]">
              <table className="min-w-full divide-y divide-[#192229] text-left">
                <thead className="bg-[#10171C] text-[10px] uppercase tracking-[0.2em] text-[#A5ABB4]">
                  <tr>
                    <th className="px-5 py-4">Asset</th>
                    <th className="px-5 py-4">Price</th>
                    <th className="px-5 py-4">24h</th>
                    <th className="px-5 py-4">Volume</th>
                    <th className="px-5 py-4">Market cap</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#192229] text-sm text-[#E8E4DE]">
                  {marketRows.map((row) => (
                    <tr key={row.symbol} className="hover:bg-[#10181D]">
                      <td className="px-5 py-4">
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
                      <td className="px-5 py-4 font-medium text-[#F5F4EF]">{row.price}</td>
                      <td className="px-5 py-4 text-[#71D99E]">{row.change}</td>
                      <td className="px-5 py-4 text-[#A5ABB4]">{row.volume}</td>
                      <td className="px-5 py-4 text-[#A5ABB4]">{row.marketCap}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[28px] border border-[#1D242A] bg-[linear-gradient(135deg,#11181D,#0F1518)] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#A5ABB4]">Asset detail</p>
              <h2 className="mt-2 text-2xl text-[#F5F4EF]">Bitcoin overview</h2>
            </div>
            <div className="inline-flex items-center gap-2 text-sm text-[#71D99E]">
              <ArrowUpRight size={16} />
              +2.84% today
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { label: "Price", value: "$68,420.12" },
              { label: "Volume", value: "$31.2T" },
              { label: "Market cap", value: "$1.34T" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-[20px] border border-[#1D242A] bg-[#10181D] p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#A5ABB4]">{stat.label}</div>
                <div className="mt-3 text-2xl font-medium text-[#F5F4EF]">{stat.value}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
