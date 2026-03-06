'use client';

import Link from 'next/link';
import { useState } from 'react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-obsidian">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="font-clash font-bold text-xl text-obsidian tracking-tight"
          onClick={closeMenu}
        >
          Mycelium Minerals
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={`/${locale}${href}`}
              className="text-xs xl:text-sm font-inter font-medium text-obsidian hover:text-gold transition-colors whitespace-nowrap"
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Right side: stock ticker + lang switcher + IR CTA + hamburger */}
        <div className="flex items-center gap-4">
          {/* Stock ticker placeholder */}
          <span className="hidden md:inline-flex items-center gap-2 font-mono text-xs border border-obsidian px-3 py-1">
            <span className="text-obsidian/50">TSX:</span>
            <span className="font-semibold">MYC</span>
            <span className="text-obsidian/60">—</span>
          </span>

          {/* Language switcher */}
          <div className="flex items-center gap-1">
            {LOCALES.map((loc) => (
              <Link
                key={loc}
                href={`/${loc}`}
                onClick={closeMenu}
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

          {/* IR CTA — desktop only */}
          <Link
            href={`/${locale}/investor-relations`}
            className="hidden md:inline-flex px-4 py-2 bg-gold text-obsidian font-semibold text-sm border border-gold hover:bg-obsidian hover:text-white hover:border-obsidian transition-colors"
          >
            {tc('investorPortal')}
          </Link>

          {/* Hamburger button — mobile/tablet only */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-obsidian"
          >
            {isMenuOpen ? (
              /* X icon */
              <span className="block w-5 relative h-4">
                <span className="absolute top-1/2 left-0 w-5 h-px bg-obsidian rotate-45 -translate-y-1/2" />
                <span className="absolute top-1/2 left-0 w-5 h-px bg-obsidian -rotate-45 -translate-y-1/2" />
              </span>
            ) : (
              /* Hamburger icon */
              <>
                <span className="block w-5 h-px bg-obsidian" />
                <span className="block w-5 h-px bg-obsidian" />
                <span className="block w-5 h-px bg-obsidian" />
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-obsidian">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col">
            {NAV_LINKS.map(({ key, href }) => (
              <Link
                key={key}
                href={`/${locale}${href}`}
                onClick={closeMenu}
                className="py-3 text-sm font-inter font-medium text-obsidian hover:text-gold transition-colors border-b border-obsidian/10 last:border-b-0"
              >
                {t(key)}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href={`/${locale}/investor-relations`}
                onClick={closeMenu}
                className="inline-flex px-5 py-2.5 bg-gold text-obsidian font-semibold text-sm border border-gold hover:bg-obsidian hover:text-white hover:border-obsidian transition-colors"
              >
                {tc('investorPortal')}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
