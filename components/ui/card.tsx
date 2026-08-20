import { cn } from "@/lib/cn";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-[24px] border border-[var(--line)] bg-[var(--panel)] shadow-[0_16px_40px_rgba(15,23,42,0.04)]", className)}>
      {children}
    </div>
  );
}
