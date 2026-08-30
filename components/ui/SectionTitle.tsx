"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps) {
  const { ref, revealed } = useScrollReveal<HTMLHeadingElement>();

  return (
    <h2
      ref={ref}
      data-revealed={revealed ? "true" : "false"}
      className={`section-title ${className}`}
    >
      {children}
    </h2>
  );
}
