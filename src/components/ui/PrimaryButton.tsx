import React from "react";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "solid" | "outline" | "glass";
  size?: "sm" | "md" | "lg";
}

export function PrimaryButton({
  children,
  className,
  variant = "solid",
  size = "md",
  ...props
}: PrimaryButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 transform active:scale-95";
  
  const variants = {
    solid:
      "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-light hover:-translate-y-0.5",
    outline:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary/5 hover:-translate-y-0.5",
    glass:
      "bg-white/40 backdrop-blur-md border border-white/60 text-text-heading hover:bg-white/60 hover:-translate-y-0.5",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
