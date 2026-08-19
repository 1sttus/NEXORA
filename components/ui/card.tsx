import { cn } from "@/lib/cn";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("rounded-[24px] border border-[#1D242A] bg-[#0F1518]", className)}>
      {children}
    </div>
  );
}
