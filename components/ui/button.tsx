import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
  asChild?: boolean;
  className?: string;
};

export function Button({ variant = "default", asChild, className = "", children, ...props }: ButtonProps) {
  const base = "px-4 py-2 rounded-2xl text-sm transition";
  const styles =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
      : "bg-gray-900 text-white hover:bg-gray-800";
  if (asChild) {
    return <span className={`${base} ${styles} ${className}`}>{children}</span>;
  }
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
