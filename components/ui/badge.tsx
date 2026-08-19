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
        "inline-flex items-center rounded-full border border-[#2B3138] bg-[#10151A] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#D9D7D1]",
        className,
      )}
    >
      {children}
    </span>
  );
}
