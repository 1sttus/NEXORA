"use client";

import { Activity, DollarSign, ShieldCheck, Users } from "lucide-react";

import { DemoSessionActions } from "@/components/demo-session-actions";
import { useDemoSession } from "@/hooks/use-demo-session";

const sidebar = ["Overview", "Users", "Transactions", "Risk", "KYC", "Signals", "Market", "Security", "Settings"];

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
  const { session, status, logout, switchRole } = useDemoSession({ role: "admin", loginPath: "/admin/login" });

  if (status === "loading" || !session) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-[var(--text)]">
        <div className="w-full max-w-md rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6 text-center shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-lg font-semibold text-[var(--gold)]">
            N
          </div>
          <div className="mt-5 text-2xl font-medium tracking-[-0.06em]">Loading admin workspace</div>
          <p className="mt-3 text-sm text-[var(--text-soft)]">Verifying the admin session and restoring control access.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen px-4 py-4 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 border-b border-[var(--line)] pb-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-[var(--muted)]">Control center</div>
            <h1 className="mt-2 text-3xl font-medium tracking-[-0.06em] text-[var(--text)]">Operations dashboard</h1>
            <p className="mt-2 text-sm text-[var(--text-soft)]">A cleaner admin view for monitoring users, flow, and risk.</p>
          </div>

          <DemoSessionActions session={session} variant="panel" onLogout={() => logout("/admin/login")} onSwitchRole={switchRole} />
        </header>

        <div className="mt-6 grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
            <div className="flex items-center gap-3 border-b border-[var(--line)] pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-lg font-semibold text-[var(--gold)]">
                N
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-[var(--muted)]">NEXORA</div>
                <div className="mt-1 text-xs text-[var(--text-soft)]">Admin portal</div>
              </div>
            </div>

            <nav className="mt-5 space-y-1">
              {sidebar.map((item, index) => (
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
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {metrics.map(({ label, value, sub, icon: Icon }) => (
                <div key={label} className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-5 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                  <div className="flex items-center justify-between">
                    <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">{label}</div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--soft)] text-[var(--gold)]">
                      <Icon size={15} />
                    </div>
                  </div>
                  <div className="mt-6 text-3xl font-medium text-[var(--text)]">{value}</div>
                  <div className="mt-2 text-sm text-[var(--success)]">{sub}</div>
                </div>
              ))}
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Users</div>
                    <h2 className="mt-2 text-2xl font-medium text-[var(--text)]">Customer overview</h2>
                  </div>
                  <button className="rounded-full border border-[var(--line)] bg-[var(--soft)] px-3 py-2 text-sm text-[var(--text)]">
                    Export
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  {userRows.map((row) => (
                    <div key={row.email} className="grid gap-3 rounded-[20px] border border-[var(--line)] bg-[var(--soft)] px-4 py-3 md:grid-cols-[1.4fr_1fr_0.8fr_0.8fr] md:items-center">
                      <div>
                        <div className="text-sm font-medium text-[var(--text)]">{row.name}</div>
                        <div className="text-xs text-[var(--muted)]">{row.email}</div>
                      </div>
                      <div className="text-sm text-[var(--text-soft)]">{row.country}</div>
                      <div className="text-sm text-[var(--text-soft)]">{row.status}</div>
                      <button className="justify-self-start rounded-full bg-[var(--text)] px-3 py-2 text-xs font-medium text-[var(--bg)]">
                        Manage
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[var(--line)] bg-[var(--panel)] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">Live activity</div>
                <div className="mt-5 space-y-3">
                  {recentEvents.map((event) => (
                    <div key={event.label} className="flex items-center justify-between rounded-[18px] border border-[var(--line)] bg-[var(--soft)] px-4 py-3">
                      <div className="text-sm text-[var(--text)]">{event.label}</div>
                      <div className="text-xs text-[var(--muted)]">{event.time}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-[22px] border border-[var(--line)] bg-[var(--soft)] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[var(--text-soft)]">Compliance</span>
                    <span className="text-sm text-[var(--success)]">Healthy</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-[var(--panel)]">
                    <div className="h-2 w-[82%] rounded-full bg-[var(--gold)]" />
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </main>
  );
}
