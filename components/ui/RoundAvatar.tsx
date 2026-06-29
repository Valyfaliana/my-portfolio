interface RoundAvatarProps {
  src: string;
  alt: string;
  sizeClassName?: string;
}

export default function RoundAvatar({
  src,
  alt,
  sizeClassName = "size-10",
}: RoundAvatarProps) {
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-full border border-border bg-surface ${sizeClassName}`}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}
