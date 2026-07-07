import React from "react";
import { cn } from "@/lib/utils";
import * as motion from "framer-motion/client";

interface SectionEyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionEyebrow({ children, className }: SectionEyebrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(
        "inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4",
        className
      )}
    >
      <span className="text-primary text-xs font-bold tracking-widest uppercase">
        {children}
      </span>
    </motion.div>
  );
}
