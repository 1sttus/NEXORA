"use client";

import { ArrowDownLeft, Bell, ChevronRight, Search, ShieldCheck, TrendingUp } from "lucide-react";

import { DemoSessionActions } from "@/components/demo-session-actions";
import { useDemoSession } from "@/hooks/use-demo-session";

const menuItems = [
  { label: "Dashboard", active: true },
  { label: "Trading" },
  { label: "Crypto" },
  { label: "Reports" },
  { label: "Apps" },
  { label: "CMS" },
  { label: "Charts" },
  { label: "Bootstrap" },
  { label: "Plugins" },
  { label: "Widget" },
  { label: "Forms" },
  { label: "Table" },
  { label: "Pages" },
];

const metrics = [
  { label: "Withdraw Money", value: "$2,353.25", icon: ArrowDownLeft, tone: "gold" },
  { label: "Followers", value: "2023k", icon: TrendingUp, tone: "cyan" },
  { label: "Following", value: "2024k", icon: TrendingUp, tone: "cyan" },
];

const watchlist = [
  { name: "Bitcoin", symbol: "BTC", price: "$68,420.12", change: "+2.84%" },
  { name: "Ethereum", symbol: "ETH", price: "$3,810.56", change: "+1.67%" },
  { name: "Solana", symbol: "SOL", price: "$164.90", change: "+4.12%" },
  { name: "XRP", symbol: "XRP", price: "$0.62", change: "+1.20%" },
  { name: "Dogecoin", symbol: "DOGE", price: "$0.18", change: "+2.05%" },
];

const activity = [
  { type: "Buy Order", value: "+$5,200", status: "Success" },
  { type: "Signal Purchase", value: "-$220", status: "Processed" },
  { type: "Referral Credit", value: "+$310", status: "Pending" },
  { type: "Withdrawal", value: "-$1,400", status: "Processing" },
];

const holdings = [
  { name: "Bitcoin", amount: "1.250 BTC", value: "$85,500" },
  { name: "Ethereum", amount: "6.800 ETH", value: "$25,900" },
  { name: "Solana", amount: "180 SOL", value: "$29,640" },
];

export default function DashboardPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "user", loginPath: "/login" });

  if (status === "loading" || !session) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0b1014] px-6 text-[#f5f4ef]">
        <div className="w-full max-w-md rounded-[28px] border border-[#1d242a] bg-[#0d1418] p-6 text-center shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2d3740] bg-[#101a1f] text-lg font-semibold text-[#d7b77c]">
            N
          </div>
          <div className="mt-5 text-2xl font-medium tracking-[-0.05em]">Loading your workspace</div>
          <p className="mt-3 text-sm text-[#a7afb8]">Checking your demo session and preparing the dashboard shell.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1014] text-[#f5f4ef]">
      <div className="mx-auto flex max-w-[1600px] gap-6 p-4 lg:p-6">
        <aside className="hidden w-[300px] shrink-0 rounded-[28px] border border-[#1d242a] bg-[#0d1418] p-5 lg:flex lg:flex-col">
          <div className="flex items-center gap-3 border-b border-[#1d242a] pb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#2f3940] bg-[#101a1f] text-lg font-semibold text-[#d7b77c]">
              N
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-[#9aa4ad]">NEXORA</div>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition ${
                  item.active ? "bg-[#111b22] text-[#f5f4ef] shadow-[inset_0_0_0_1px_#1d242a]" : "text-[#b7bec6] hover:bg-[#101a1f]"
                }`}
              >
                <span>{item.label}</span>
                {item.active && <ChevronRight size={15} className="text-[#d7b77c]" />}
              </button>
            ))}
          </div>

          <div className="mt-auto rounded-[24px] border border-[#1d242a] bg-[#101a1f] p-4">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Template</div>
            <div className="mt-3 text-lg font-medium text-[#f5f4ef]">Jiade Crypto Trading UI</div>
            <div className="mt-2 text-sm text-[#b7bec6]">© 2026 All rights reserved</div>
          </div>
        </aside>

        <main className="flex-1 rounded-[30px] border border-[#1d242a] bg-[#0d1418] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.24)] md:p-6">
          <header className="flex flex-col gap-4 border-b border-[#1d242a] pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#9aa4ad]">Dashboard</div>
              <h1 className="mt-2 text-3xl font-medium tracking-[-0.05em] text-[#f5f4ef]">Welcome back {session.name}!</h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 rounded-full border border-[#2d3740] bg-[#101a1f] px-3 py-2 text-sm text-[#d7d7d5]">
                <Search size={15} />
                <span className="hidden sm:inline">Search</span>
              </div>
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[#2d3740] bg-[#101a1f] text-[#d9d7d1]">
                <Bell size={16} />
              </button>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d7b77c] font-semibold text-[#11171b]">
                Y
              </div>
            </div>
          </header>

          <div className="mt-6 grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
            <section className="rounded-[28px] border border-[#1d242a] bg-[#0f171b] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">My Portfolio</div>
                  <div className="mt-3 text-4xl font-medium tracking-[-0.06em] text-[#f5f4ef]">$34,010.00</div>
                </div>
                <div className="rounded-full border border-[#224235] bg-[#102418] px-2.5 py-1 text-xs font-medium text-[#71d99e]">+2.25%</div>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {metrics.map(({ label, value, icon: Icon, tone }) => (
                  <div key={label} className="rounded-[22px] border border-[#1d242a] bg-[#10181d] p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-[#9aa4ad]">{label}</div>
                      <div className={`flex h-9 w-9 items-center justify-center rounded-full ${tone === "gold" ? "bg-[#1b1d16] text-[#d7b77c]" : "bg-[#132127] text-[#6ed8e6]"}`}>
                        <Icon size={15} />
                      </div>
                    </div>
                    <div className="mt-5 text-2xl font-medium text-[#f5f4ef]">{value}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button className="flex-1 rounded-full bg-[#d7b77c] px-5 py-3 text-sm font-semibold text-[#11171b]">Deposit</button>
                <button className="flex-1 rounded-full border border-[#2d3740] bg-[#101a1f] px-5 py-3 text-sm font-medium text-[#f5f4ef]">Withdrawal</button>
              </div>
            </section>

            <aside className="rounded-[28px] border border-[#1d242a] bg-[#0f171b] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Quick Trade</div>
                  <h3 className="mt-2 text-2xl font-medium text-[#f5f4ef]">Buy Order</h3>
                </div>
                <button className="text-[#d7b77c]">Albania</button>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-[#1d242a] bg-[#10181d] p-3">
                  <div className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#9aa4ad]">Price</div>
                  <div className="text-2xl font-medium text-[#f5f4ef]">$68,420.12</div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  <div className="rounded-2xl border border-[#1d242a] bg-[#10181d] p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#9aa4ad]">Amount</div>
                    <div className="mt-2 text-xl font-medium text-[#f5f4ef]">0.543 BTC</div>
                  </div>
                  <div className="rounded-2xl border border-[#1d242a] bg-[#10181d] p-3">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[#9aa4ad]">Total</div>
                    <div className="mt-2 text-xl font-medium text-[#f5f4ef]">$37,120.30</div>
                  </div>
                </div>

                <button className="w-full rounded-full bg-[#d7b77c] px-4 py-3 text-sm font-semibold text-[#11171b]">Buy BTC</button>
              </div>
            </aside>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
            <section className="rounded-[28px] border border-[#1d242a] bg-[#0f171b] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Performance</div>
                  <h2 className="mt-2 text-2xl font-medium text-[#f5f4ef]">Portfolio statistics</h2>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#2d3740] bg-[#101a1f] px-3 py-2 text-sm text-[#71d99e]">
                  <TrendingUp size={15} />
                  +8.24%
                </div>
              </div>

              <div className="h-52 rounded-[22px] border border-[#1d242a] bg-[linear-gradient(180deg,#111a1f_0%,#0b1116_100%)] p-4">
                <div className="flex h-full items-end justify-between gap-2">
                  {[34, 52, 47, 68, 62, 90, 88, 102, 95, 118, 110, 136].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t-xl bg-gradient-to-t from-[#d7b77c] via-[#b9c9d9] to-[#6ed8e6] opacity-90" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </section>

            <aside className="rounded-[28px] border border-[#1d242a] bg-[#0f171b] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Risk</div>
                  <h3 className="mt-2 text-2xl font-medium text-[#f5f4ef]">Protection</h3>
                </div>
                <ShieldCheck className="text-[#d7b77c]" size={18} />
              </div>

              <div className="mt-5 space-y-3 text-sm text-[#b7bec6]">
                <div className="flex items-center justify-between rounded-2xl border border-[#1d242a] bg-[#10181d] px-3 py-3">
                  <span>2FA</span>
                  <span className="text-[#71d99e]">Enabled</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-[#1d242a] bg-[#10181d] px-3 py-3">
                  <span>Auto lock</span>
                  <span className="text-[#f5f4ef]">12 min</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-[#1d242a] bg-[#10181d] px-3 py-3">
                  <span>Risk profile</span>
                  <span className="text-[#71d99e]">Balanced</span>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <section className="rounded-[28px] border border-[#1d242a] bg-[#0f171b] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Watchlist</div>
                  <h2 className="mt-2 text-2xl font-medium text-[#f5f4ef]">Market overview</h2>
                </div>
                <button className="rounded-full border border-[#2d3740] bg-[#101a1f] px-3 py-2 text-sm text-[#f5f4ef]">View all</button>
              </div>

              <div className="mt-5 space-y-3">
                {watchlist.map((asset) => (
                  <div key={asset.symbol} className="flex items-center justify-between rounded-[20px] border border-[#1d242a] bg-[#10181d] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#161f25] text-sm font-semibold text-[#d7b77c]">
                        {asset.symbol.slice(0, 1)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#f5f4ef]">{asset.name}</div>
                        <div className="text-[10px] uppercase tracking-[0.18em] text-[#9aa4ad]">{asset.symbol}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-[#f5f4ef]">{asset.price}</div>
                      <div className="text-xs text-[#71d99e]">{asset.change}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <aside className="rounded-[28px] border border-[#1d242a] bg-[#0f171b] p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Holdings</div>
              <h3 className="mt-2 text-2xl font-medium text-[#f5f4ef]">Asset mix</h3>

              <div className="mt-5 space-y-4">
                {holdings.map((hold) => (
                  <div key={hold.name} className="rounded-[20px] border border-[#1d242a] bg-[#10181d] p-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-[#f5f4ef]">{hold.name}</div>
                      <div className="text-sm text-[#d7b77c]">{hold.value}</div>
                    </div>
                    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[#9aa4ad]">{hold.amount}</div>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="mt-6 rounded-[28px] border border-[#1d242a] bg-[#0f171b] p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#9aa4ad]">Activity</div>
                <h2 className="mt-2 text-2xl font-medium text-[#f5f4ef]">Recent activity</h2>
              </div>
              <button className="rounded-full border border-[#2d3740] bg-[#101a1f] px-3 py-2 text-sm text-[#f5f4ef]">Export</button>
            </div>

            <div className="mt-5 space-y-3">
              {activity.map((item) => (
                <div key={item.type} className="flex items-center justify-between rounded-[20px] border border-[#1d242a] bg-[#10181d] px-4 py-3">
                  <div>
                    <div className="text-sm font-medium text-[#f5f4ef]">{item.type}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#9aa4ad]">{item.status}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium text-[#f5f4ef]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
