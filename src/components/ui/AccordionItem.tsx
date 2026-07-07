"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE, DURATION } from "@/lib/motion.config";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  className,
}: AccordionItemProps) {
  return (
    <div className={cn("border-b border-primary/10 py-4", className)}>
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left font-bold text-text-heading text-lg py-2 hover:text-primary transition-colors focus:outline-none"
      >
        <span>{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-primary transition-transform duration-300",
            isOpen && "transform rotate-180"
          )}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: DURATION.base, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="text-text-body text-base py-3 leading-relaxed pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
