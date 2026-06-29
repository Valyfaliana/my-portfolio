import Link from "next/link";

interface OutlineButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function OutlineBtn({ href, children }: OutlineButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full border border-myPrimary px-4 py-2 font-semibold text-myPrimary"
    >
      {children}
    </Link>
  );
}
