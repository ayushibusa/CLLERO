"use client";

import React, { useState } from "react";
import { AccordionItem } from "@/components/ui/AccordionItem";
import { faqData } from "@/lib/data";

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Use the first 5 FAQs on the homepage
  const homepageFAQs = faqData.slice(0, 5);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col">
        {homepageFAQs.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
