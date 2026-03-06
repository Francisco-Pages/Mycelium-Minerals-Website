import Link from 'next/link';
import Badge from './Badge';

interface CardProps {
  title: string;
  subtitle?: string;
  stage?: string;
  commodities?: string[];
  location?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  subtitle,
  stage,
  commodities,
  location,
  href,
  className = '',
  children,
}: CardProps) {
  const inner = (
    <div
      className={`border border-obsidian bg-white p-6 flex flex-col gap-4 group ${className}`}
    >
      {/* Badges */}
      {(stage || commodities?.length) && (
        <div className="flex flex-wrap gap-2">
          {stage && <Badge label={stage} variant="stage" />}
          {commodities?.map((c) => (
            <Badge key={c} label={c} variant="commodity" />
          ))}
        </div>
      )}

      {/* Title */}
      <div>
        <h3 className="font-clash font-bold text-xl text-obsidian group-hover:text-gold transition-colors leading-tight">
          {title}
        </h3>
        {subtitle && <p className="mt-1 text-sm text-obsidian/60">{subtitle}</p>}
      </div>

      {/* Location */}
      {location && (
        <p className="text-xs font-mono text-obsidian/50 uppercase tracking-widest">
          {location}
        </p>
      )}

      {/* Slot for custom content */}
      {children}

      {/* Arrow indicator for linked cards */}
      {href && (
        <div className="mt-auto pt-4 border-t border-obsidian/10 flex items-center justify-between">
          <span className="text-xs font-mono font-medium text-obsidian/65 group-hover:text-gold transition-colors">
            Learn more →
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {inner}
      </Link>
    );
  }

  return inner;
}
