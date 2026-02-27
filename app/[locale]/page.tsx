import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageContent />;
}

function HomePageContent() {
  const t = useTranslations('home');

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 py-24 border-b border-obsidian">
      <p className="text-sm font-mono uppercase tracking-widest text-gold mb-6">
        TSX Listed · Gold &amp; Silver · Bolivia
      </p>
      <h1 className="text-5xl md:text-7xl font-clash font-bold text-obsidian text-center max-w-4xl leading-tight">
        {t('heroTitle')}
      </h1>
      <p className="mt-6 text-lg text-obsidian/70 text-center max-w-2xl">{t('heroSubtitle')}</p>
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <a
          href="projects"
          className="px-8 py-3 bg-obsidian text-white font-inter font-semibold border-1.5 border-obsidian hover:bg-white hover:text-obsidian transition-colors"
        >
          {t('ctaPrimary')}
        </a>
        <a
          href="investor-relations"
          className="px-8 py-3 bg-transparent text-obsidian font-inter font-semibold border-1.5 border-obsidian hover:bg-obsidian hover:text-white transition-colors"
        >
          {t('ctaSecondary')}
        </a>
      </div>
    </div>
  );
}
