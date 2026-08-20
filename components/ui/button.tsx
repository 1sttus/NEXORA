import Link from "next/link";
import { cn } from "@/lib/cn";

export function Button({
  href,
  children,
  className,
}: {
  href?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--text)] px-5 py-3 text-sm font-medium text-[var(--bg)] transition hover:bg-[#1f2937]",
    className,
  );

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes}>{children}</button>;
}
