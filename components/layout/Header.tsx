'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const NAV_LINKS = [
  { key: 'projects', href: '/projects' },
  { key: 'investorRelations', href: '/investor-relations' },
  { key: 'about', href: '/about' },
  { key: 'sustainability', href: '/sustainability' },
  { key: 'news', href: '/news' },
] as const;

const LOCALES = ['en', 'es', 'fr'] as const;

export default function Header() {
  const t = useTranslations('nav');
  const tc = useTranslations('common');
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-obsidian">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="font-clash font-bold text-xl text-obsidian tracking-tight"
        >
          Mycelium Minerals
        </Link>

        {/* Primary Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={`/${locale}${href}`}
              className="text-sm font-inter font-medium text-obsidian hover:text-gold transition-colors"
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Right side: Stock ticker placeholder + Lang switcher + CTA */}
        <div className="flex items-center gap-4">
          {/* Stock ticker placeholder */}
          <span className="hidden md:inline-flex items-center gap-2 font-mono text-xs border border-obsidian px-3 py-1">
            <span className="text-obsidian/50">TSX:</span>
            <span className="font-semibold">MYC</span>
            <span className="text-obsidian/40">—</span>
          </span>

          {/* Language switcher */}
          <div className="flex items-center gap-1">
            {LOCALES.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}`}
                className={`text-xs font-mono uppercase px-2 py-1 transition-colors ${
                  locale === loc
                    ? 'bg-obsidian text-white'
                    : 'text-obsidian/60 hover:text-obsidian'
                }`}
              >
                {loc}
              </Link>
            ))}
          </div>

          {/* IR CTA */}
          <Link
            href={`/${locale}/investor-relations`}
            className="hidden md:inline-flex px-4 py-2 bg-gold text-obsidian font-semibold text-sm border border-gold hover:bg-obsidian hover:text-white hover:border-obsidian transition-colors"
          >
            {tc('investorPortal')}
          </Link>
        </div>
      </div>
    </header>
  );
}
