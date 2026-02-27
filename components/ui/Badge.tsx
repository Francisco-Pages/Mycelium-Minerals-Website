type BadgeVariant = 'stage' | 'commodity' | 'default';

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  stage: 'bg-gold/10 text-obsidian border border-gold',
  commodity: 'bg-green/10 text-green border border-green',
  default: 'bg-offwhite text-obsidian border border-obsidian/20',
};

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({ label, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-mono font-medium tracking-wide ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
