import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryBtn({
  href,
  children,
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-full bg-myPrimary px-4 py-2 font-semibold text-bg transition-all duration-300"
    >
      {children}
      <ArrowRight size={20} strokeWidth={2.5} />
    </a>
  );
}