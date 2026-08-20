import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--soft)] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-soft)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
