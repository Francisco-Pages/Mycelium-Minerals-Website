'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const NAV_LINKS = [
  { key: 'projects', href: '/projects' },
  { key: 'investorRelations', href: '/investor-relations' },
  { key: 'about', href: '/about' },
  { key: 'sustainability', href: '/sustainability' },
  { key: 'news', href: '/news' },
  { key: 'careers', href: '/careers' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Footer() {
  const t = useTranslations('nav');
  const tf = useTranslations('footer');
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-obsidian text-white border-t border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link
              href={`/${locale}`}
              className="font-clash font-bold text-xl text-white tracking-tight"
            >
              Mycelium Minerals
            </Link>
            <p className="text-sm font-mono text-white/50">{tf('exchange')}</p>

            {/* IR contact */}
            <div className="mt-4 border border-white/20 p-4">
              <p className="text-xs font-mono uppercase tracking-widest text-white/65 mb-2">
                Investor Relations
              </p>
              <p className="text-sm text-white/70">contact@mycelium-mc.com</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white/65 mb-2">
              Navigation
            </p>
            {NAV_LINKS.map(({ key, href }) => (
              <Link
                key={key}
                href={`/${locale}${href}`}
                className="text-sm text-white/70 hover:text-gold transition-colors"
              >
                {t(key)}
              </Link>
            ))}
          </nav>

          {/* Projects quick links */}
          <nav className="flex flex-col gap-3">
            <p className="text-xs font-mono uppercase tracking-widest text-white/65 mb-2">
              Projects
            </p>
            {[
              { label: 'Los Clavillos', href: '/projects/los-clavillos' },
              { label: 'Cerrito XXI', href: '/projects/cerrito-xxi' },
              { label: 'Cerrito XXII', href: '/projects/cerrito-xxii' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={`/${locale}${href}`}
                className="text-sm text-white/70 hover:text-gold transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Legal + Social */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-mono uppercase tracking-widest text-white/65 mb-2">
              Legal
            </p>
            <p className="text-xs text-white/50 leading-relaxed">{tf('disclaimer')}</p>

            {/* Social links */}
            <div className="mt-6">
              <p className="text-xs font-mono uppercase tracking-widest text-white/65 mb-3">
                {tf('socialTitle')}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-gold transition-colors font-mono"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-gold transition-colors font-mono"
                >
                  X / Twitter
                </a>
                <a
                  href="#"
                  className="text-sm text-white/60 hover:text-gold transition-colors font-mono"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs font-mono text-white/65">
            {tf('copyright', { year })}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-white/55 hover:text-white/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-white/55 hover:text-white/80 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
