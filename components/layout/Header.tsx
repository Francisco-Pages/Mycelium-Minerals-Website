'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import GoldSpotPrice from '@/components/ui/GoldSpotPrice';

const NAV_LINKS = [
  { key: 'projects', href: '/projects' },
  { key: 'gallery', href: '/gallery' },
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
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo.png"
            alt="Mycelium Minerals"
            width={140}
            height={78}
            className="h-20 w-auto"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-4">
          {NAV_LINKS.map(({ key, href }) => (
            <Link
              key={key}
              href={`/${locale}${href}`}
              className="text-sm font-inter font-medium text-obsidian hover:text-gold transition-colors whitespace-nowrap"
            >
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Right side: stock ticker + lang switcher + IR CTA + hamburger */}
        <div className="flex items-center gap-2">
          {/* Gold spot price */}
          <GoldSpotPrice />

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
            className="hidden lg:inline-flex px-4 py-2 bg-gold text-obsidian font-semibold text-sm border border-gold rounded-lg hover:bg-obsidian hover:text-white hover:border-obsidian transition-colors whitespace-nowrap"
          >
            {tc('investorPortal')}
          </Link>

          {/* Hamburger button — shown below lg */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 text-obsidian cursor-pointer rounded hover:bg-obsidian/10 transition-colors"
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
                className="inline-flex px-5 py-2.5 bg-gold text-obsidian font-semibold text-sm border border-gold rounded-lg hover:bg-obsidian hover:text-white hover:border-obsidian transition-colors"
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
