"use client";

import { ArrowDownLeft, ShieldCheck, TrendingUp } from "lucide-react";

import { DemoSessionActions } from "@/components/demo-session-actions";
import { useDemoSession } from "@/hooks/use-demo-session";

const menuItems = ["Overview", "Trading", "Crypto", "Reports", "Security", "Settings"];

const metrics = [
  { label: "Portfolio value", value: "$34,010.00", delta: "+2.25%" },
  { label: "24h P&L", value: "+$1,810.05", delta: "+4.8%" },
  { label: "Staked assets", value: "$12,500.00", delta: "+1.2%" },
];

const watchlist = [
  { name: "Bitcoin", symbol: "BTC", price: "$68,420.12", change: "+2.84%" },
  { name: "Ethereum", symbol: "ETH", price: "$3,810.56", change: "+1.67%" },
  { name: "Solana", symbol: "SOL", price: "$164.90", change: "+4.12%" },
  { name: "XRP", symbol: "XRP", price: "$0.62", change: "+1.20%" },
];

const activity = [
  { type: "Buy Order", value: "+$5,200", status: "Success" },
  { type: "Signal Purchase", value: "-$220", status: "Processed" },
  { type: "Referral Credit", value: "+$310", status: "Pending" },
  { type: "Withdrawal", value: "-$1,400", status: "Processing" },
];

export default function DashboardPage() {
  const { session, status, logout, switchRole } = useDemoSession({ role: "user", loginPath: "/login" });

  if (status === "loading" || !session) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-[var(--text)]">
        <div className="w-full max-w-md rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6 text-center shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-lg font-semibold text-[var(--gold)]">
            N
          </div>
          <div className="mt-5 text-2xl font-medium tracking-[-0.06em]">Loading your workspace</div>
          <p className="mt-3 text-sm text-[var(--text-soft)]">Checking your demo session and restoring the dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen px-4 py-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 border-b border-[var(--line)] pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">Dashboard</div>
            <h1 className="mt-2 text-3xl font-medium tracking-[-0.06em] text-[var(--text)]">Welcome back, {session.name}.</h1>
            <p className="mt-2 text-sm text-[var(--text-soft)]">A quieter view of your portfolio, risk, and market flow.</p>
          </div>

          <DemoSessionActions session={session} variant="panel" onLogout={() => logout("/login")} onSwitchRole={switchRole} />
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-3 border-b border-[var(--line)] pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-lg font-semibold text-[var(--gold)]">
                N
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">NEXORA</div>
                <div className="mt-1 text-xs text-[var(--text-soft)]">User portal</div>
              </div>
            </div>

            <nav className="mt-5 space-y-1">
              {menuItems.map((item, index) => (
                <button
                  key={item}
                  className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition ${
                    index === 0 ? "bg-[var(--soft)] text-[var(--text)]" : "text-[var(--text-soft)] hover:bg-[var(--soft)]"
                  }`}
                >
                  <span>{item}</span>
                  {index === 0 && <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />}
                </button>
              ))}
            </nav>

            <div className="mt-8 rounded-[22px] border border-[var(--line)] bg-[var(--soft)] p-4">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">System</div>
              <div className="mt-3 text-lg font-medium text-[var(--text)]">Operational</div>
              <div className="mt-2 text-sm text-[var(--text-soft)]">All core services healthy</div>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Portfolio</div>
                    <div className="mt-3 text-5xl font-medium tracking-[-0.07em] text-[var(--text)]">$34,010.00</div>
                    <div className="mt-2 text-sm text-[var(--success)]">+2.25% this week</div>
                  </div>

                  <div className="flex gap-3">
                    <button className="inline-flex items-center gap-2 rounded-full bg-[var(--text)] px-4 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]">
                      <ArrowDownLeft size={16} />
                      Deposit
                    </button>
                    <button className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--gold)]">
                      Withdraw
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Cash", value: "$12,400" },
                    { label: "Crypto", value: "$18,210" },
                    { label: "Yield", value: "$3,400" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-[22px] border border-[var(--line)] bg-[var(--soft)] p-4">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">{item.label}</div>
                      <div className="mt-3 text-2xl font-medium text-[var(--text)]">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[24px] border border-[var(--line)] bg-[var(--soft)] p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Trend</div>
                    <div className="flex items-center gap-2 text-sm text-[var(--success)]">
                      <TrendingUp size={15} />
                      Balanced
                    </div>
                  </div>
                  <div className="mt-4 grid h-28 grid-cols-12 items-end gap-2">
                    {[34, 42, 48, 55, 51, 60, 68, 64, 72, 78, 74, 86].map((height, index) => (
                      <div
                        key={`${height}-${index}`}
                        className="rounded-t-full bg-[linear-gradient(180deg,#e4c98d_0%,#ba9150_100%)]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Risk</div>
                    <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Protection</h2>
                  </div>
                  <ShieldCheck className="text-[var(--gold)]" size={18} />
                </div>

                <div className="mt-6 space-y-3 text-sm text-[var(--text-soft)]">
                  <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--soft)] px-4 py-3">
                    <span>2FA</span>
                    <span className="text-[var(--success)]">Enabled</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--soft)] px-4 py-3">
                    <span>Auto lock</span>
                    <span className="text-[var(--text)]">12 min</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--soft)] px-4 py-3">
                    <span>Risk profile</span>
                    <span className="text-[var(--success)]">Balanced</span>
                  </div>
                </div>
              </div>
            </div>

            <section className="grid gap-4 md:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{metric.label}</div>
                  <div className="mt-4 text-3xl font-medium text-[var(--text)]">{metric.value}</div>
                  <div className="mt-2 text-sm text-[var(--success)]">{metric.delta}</div>
                </div>
              ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Watchlist</div>
                    <h3 className="mt-2 text-2xl font-medium text-[var(--text)]">Market overview</h3>
                  </div>
                  <button className="rounded-full border border-[var(--line)] bg-[var(--soft)] px-3 py-2 text-sm text-[var(--text)]">
                    View all
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  {watchlist.map((asset) => (
                    <div key={asset.symbol} className="flex items-center justify-between rounded-[20px] border border-[var(--line)] bg-[var(--soft)] px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--panel)] text-sm font-semibold text-[var(--gold)]">
                          {asset.symbol.slice(0, 1)}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[var(--text)]">{asset.name}</div>
                          <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{asset.symbol}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-[var(--text)]">{asset.price}</div>
                        <div className="text-xs text-[var(--success)]">{asset.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Activity</div>
                    <h3 className="mt-2 text-2xl font-medium text-[var(--text)]">Recent activity</h3>
                  </div>
                  <button className="rounded-full border border-[var(--line)] bg-[var(--soft)] px-3 py-2 text-sm text-[var(--text)]">
                    Export
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  {activity.map((item) => (
                    <div key={item.type} className="flex items-center justify-between rounded-[20px] border border-[var(--line)] bg-[var(--soft)] px-4 py-3">
                      <div>
                        <div className="text-sm font-medium text-[var(--text)]">{item.type}</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{item.status}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-medium text-[var(--text)]">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
