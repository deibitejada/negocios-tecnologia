import * as React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "outline" | "secondary";
};

export function Badge({ variant = "default", className = "", ...props }: BadgeProps) {
  const base = "inline-flex items-center px-2 py-1 rounded-full text-xs";
  const styles =
    variant === "outline"
      ? "border border-gray-300 text-gray-700 bg-white"
      : variant === "secondary"
      ? "bg-gray-100 text-gray-800"
      : "bg-gray-900 text-white";
  return <span className={`${base} ${styles} ${className}`} {...props} />;
}
