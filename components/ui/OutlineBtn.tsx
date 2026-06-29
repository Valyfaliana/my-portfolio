interface OutlineButtonProps {
  href: string;
  rel?: string;
  target?: string;
  children: React.ReactNode;
}

export default function OutlineBtn({ href, children, rel = '', target = '' }: OutlineButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-flex items-center justify-center rounded-full border border-myPrimary px-4 py-2 font-semibold text-myPrimary"
    >
      {children}
    </a>
  );
}
