import { Activity, Bell, CreditCard, DollarSign, Search, ShieldCheck, TrendingUp, Users } from "lucide-react";

const sidebar = [
  "Overview",
  "Users",
  "Transactions",
  "Risk",
  "KYC",
  "Signals",
  "Market",
  "Security",
  "Settings",
];

const metrics = [
  { label: "Total users", value: "126.4K", sub: "+8.2%", icon: Users },
  { label: "Monthly volume", value: "$8.4M", sub: "+12.1%", icon: DollarSign },
  { label: "Active trades", value: "4,812", sub: "+3.8%", icon: Activity },
  { label: "Risk score", value: "Low", sub: "Stable", icon: ShieldCheck },
];

const userRows = [
  { name: "Yatin Sharma", email: "yatin@nexora.io", country: "India", status: "Verified" },
  { name: "Amelia James", email: "amelia@demo.io", country: "UK", status: "Pending" },
  { name: "Daniel Yu", email: "daniel@demo.io", country: "Singapore", status: "Verified" },
  { name: "Noah Kim", email: "noah@demo.io", country: "Korea", status: "Reviewed" },
];

const recentEvents = [
  { label: "Withdrawal approval", time: "5 min ago" },
  { label: "New referral bonus", time: "22 min ago" },
  { label: "Risk alert cleared", time: "1 hr ago" },
  { label: "Portfolio sync success", time: "2 hrs ago" },
];

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto flex max-w-[1600px] gap-6 p-4 lg:p-6">
        <aside className="hidden w-[280px] shrink-0 rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-5 lg:flex lg:flex-col">
          <div className="flex items-center gap-3 border-b border-[var(--line)] pb-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--line)] bg-[var(--card)] text-lg font-semibold text-[var(--gold)]">N</div>
            <div>
              <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">NEXORA</div>
              <div className="mt-1 text-xs text-[var(--muted)]">Admin</div>
            </div>
          </div>

          <nav className="mt-5 space-y-2">
            {sidebar.map((item, index) => (
              <button
                key={item}
                className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition ${
                  index === 0 ? "bg-[var(--card)] text-[var(--text)]" : "text-[var(--muted)] hover:bg-[var(--card)]"
                }`}
              >
                <span>{item}</span>
                {index === 0 && <span className="text-[var(--gold)]">•</span>}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-[24px] border border-[var(--line)] bg-[var(--card)] p-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">System</div>
            <div className="mt-3 text-lg font-medium text-[var(--text)]">Operational</div>
            <div className="mt-2 text-sm text-[var(--muted)]">All core services healthy</div>
          </div>
        </aside>

        <main className="flex-1 rounded-[30px] border border-[var(--line)] bg-[var(--panel)] p-4 md:p-6">
          <header className="flex flex-col gap-4 border-b border-[var(--line)] pb-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Control center</div>
              <h1 className="mt-2 text-3xl font-medium tracking-[-0.06em] text-[var(--text)]">Operations dashboard</h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--card)] px-3 py-2 text-sm text-[var(--text)]">
                <Search size={15} />
                <span className="hidden sm:inline">Search</span>
              </div>
              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--card)] text-[var(--text)]">
                <Bell size={16} />
              </button>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--gold)] font-semibold text-[#14181b]">A</div>
            </div>
          </header>

          <section className="mt-6 grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
            {metrics.map(({ label, value, sub, icon: Icon }) => (
              <div key={label} className="rounded-[24px] border border-[var(--line)] bg-[var(--card)] p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{label}</div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--soft)] text-[var(--gold)]">
                    <Icon size={15} />
                  </div>
                </div>
                <div className="mt-6 text-3xl font-medium text-[var(--text)]">{value}</div>
                <div className="mt-2 text-sm text-[var(--success)]">{sub}</div>
              </div>
            ))}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--card)] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Users</div>
                  <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Customer overview</h2>
                </div>
                <button className="rounded-full border border-[var(--line)] bg-[var(--panel)] px-3 py-2 text-sm text-[var(--text)]">Export</button>
              </div>

              <div className="mt-5 space-y-3">
                {userRows.map((row) => (
                  <div key={row.email} className="grid gap-3 rounded-[20px] border border-[var(--line)] bg-[var(--panel)] px-4 py-3 md:grid-cols-[1.4fr_1fr_0.8fr_0.8fr] md:items-center">
                    <div>
                      <div className="text-sm font-medium text-[var(--text)]">{row.name}</div>
                      <div className="text-xs text-[var(--muted)]">{row.email}</div>
                    </div>
                    <div className="text-sm text-[var(--muted)]">{row.country}</div>
                    <div className="text-sm text-[var(--muted)]">{row.status}</div>
                    <button className="justify-self-start rounded-full bg-[var(--gold)] px-3 py-2 text-xs font-semibold text-[#14181b]">Manage</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--line)] bg-[var(--card)] p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Live activity</div>
              <div className="mt-5 space-y-3">
                {recentEvents.map((event) => (
                  <div key={event.label} className="flex items-center justify-between rounded-[18px] border border-[var(--line)] bg-[var(--panel)] px-3 py-3">
                    <div className="text-sm text-[var(--text)]">{event.label}</div>
                    <div className="text-xs text-[var(--muted)]">{event.time}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[20px] border border-[var(--line)] bg-[var(--panel)] p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--muted)]">Compliance</span>
                  <span className="text-sm text-[var(--success)]">Healthy</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-[var(--soft)]">
                  <div className="h-2 w-[82%] rounded-full bg-[var(--gold)]" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
