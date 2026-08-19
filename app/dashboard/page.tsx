import { ArrowUpRight, Bell, CreditCard, Search, Shield, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const metrics = [
  { label: "Total Asset", value: "$842,650", change: "+8.2%" },
  { label: "Available Balance", value: "$119,430", change: "+2.4%" },
  { label: "Profit / Loss", value: "$48,940", change: "+5.7%" },
  { label: "Next Payment", value: "Jul 02", change: "ETA 12 days" },
];

const transactions = [
  { type: "Deposit", amount: "+$5,000", status: "Completed", date: "2026-07-20" },
  { type: "Signal Purchase", amount: "-$220", status: "Processed", date: "2026-07-19" },
  { type: "Referral Commission", amount: "+$310", status: "Pending", date: "2026-07-17" },
  { type: "Withdrawal", amount: "-$1,400", status: "Processing", date: "2026-07-15" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#F5F4EF]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:px-10">
        <header className="flex flex-col gap-6 rounded-[28px] border border-[#1D242A] bg-[#0F1518] p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.24em] text-[#A5ABB4]">Portfolio overview</p>
            <h1 className="mt-3 text-3xl tracking-[-0.05em] text-[#F5F4EF]">Welcome back, Alex.</h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-[#2A3137] bg-[#10181D] px-3 py-2 text-sm text-[#D9D7D1]">
              <Search size={16} />
              <span>Search</span>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2A3137] bg-[#10181D]">
              <Bell size={16} />
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C9A96A] font-medium text-[#11161B]">A</div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <Card key={metric.label} className="p-5">
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#A5ABB4]">{metric.label}</div>
              <div className="mt-4 text-3xl font-medium text-[#F5F4EF]">{metric.value}</div>
              <div className="mt-3 inline-flex items-center gap-1 text-sm text-[#71D99E]">
                <ArrowUpRight size={16} />
                {metric.change}
              </div>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#A5ABB4]">Performance</p>
                <h2 className="mt-2 text-2xl text-[#F5F4EF]">Portfolio performance</h2>
              </div>
              <Badge className="border-[#234349] bg-[#0E1C20] text-[#6ED8E6]">Live</Badge>
            </div>

            <div className="mt-8 h-52 rounded-[24px] border border-[#1D242A] bg-[linear-gradient(180deg,#11181D_0%,#0D1317_100%)] p-4">
              <div className="flex h-full items-end gap-3">
                {[44, 58, 50, 76, 72, 88, 96, 90, 110, 126, 118, 142].map((height, index) => (
                  <div key={index} className="flex-1 rounded-t-2xl bg-gradient-to-t from-[#C9A96A] to-[#6ED8E6] opacity-80" style={{ height: `${height}%` }} />
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#11181D] text-[#C9A96A]">
                <Shield size={18} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A5ABB4]">Security</p>
                <h3 className="mt-1 text-xl text-[#F5F4EF]">Protection active</h3>
              </div>
            </div>
            <div className="mt-6 rounded-[20px] border border-[#1D242A] bg-[#10181D] p-4 text-sm text-[#A5ABB4]">
              MFA, session monitoring, and transaction review are enabled for your account.
            </div>
            <div className="mt-5 flex items-center justify-between rounded-[20px] border border-[#1D242A] bg-[#10181D] p-4">
              <span className="text-[#A5ABB4]">Risk</span>
              <span className="text-[#71D99E]">Balanced</span>
            </div>
          </Card>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#A5ABB4]">Transactions</p>
                <h2 className="mt-2 text-2xl text-[#F5F4EF]">Recent activity</h2>
              </div>
              <button className="rounded-full border border-[#2A3137] bg-[#10181D] px-3 py-2 text-sm text-[#F5F4EF]">
                Export
              </button>
            </div>

            <div className="mt-6 space-y-3">
              {transactions.map((transaction) => (
                <div key={transaction.date} className="flex items-center justify-between rounded-[20px] border border-[#1D242A] bg-[#10181D] p-4">
                  <div>
                    <div className="font-medium text-[#F5F4EF]">{transaction.type}</div>
                    <div className="mt-1 text-sm text-[#A5ABB4]">{transaction.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-[#F5F4EF]">{transaction.amount}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-[#A5ABB4]">{transaction.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#A5ABB4]">Quick actions</p>
            <div className="mt-6 space-y-3">
              {[
                { label: "Deposit", icon: CreditCard },
                { label: "Withdraw", icon: TrendingUp },
                { label: "Buy signal", icon: ArrowUpRight },
              ].map(({ label, icon: Icon }) => (
                <button key={label} className="flex w-full items-center justify-between rounded-[20px] border border-[#1D242A] bg-[#10181D] p-4 text-left text-[#F5F4EF]">
                  <span>{label}</span>
                  <Icon size={16} className="text-[#C9A96A]" />
                </button>
              ))}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
