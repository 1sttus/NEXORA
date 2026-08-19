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
    "inline-flex items-center justify-center rounded-full bg-[#C9A96A] px-5 py-3 text-sm font-medium text-[#11161B] transition hover:bg-[#d9b982]",
    className,
  );

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes}>{children}</button>;
}
