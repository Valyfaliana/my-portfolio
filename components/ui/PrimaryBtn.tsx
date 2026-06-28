import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function PrimaryBtn({
  href,
  children,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 font-semibold text-black transition-all duration-300"
    >
      {children}
      <ArrowRight size={20} strokeWidth={2.5} />
    </Link>
  );
}