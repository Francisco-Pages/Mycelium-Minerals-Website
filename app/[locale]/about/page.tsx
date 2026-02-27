import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations('about');

  return (
    <div className="px-6 py-24 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-clash font-bold text-obsidian">{t('title')}</h1>
      <p className="mt-4 text-lg text-obsidian/70 max-w-xl">{t('subtitle')}</p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-obsidian p-8 text-center text-obsidian/40 font-mono text-sm">
          {t('team')} — will be loaded from Sanity CMS
        </div>
        <div className="border border-obsidian p-8 text-center text-obsidian/40 font-mono text-sm">
          {t('board')} — will be loaded from Sanity CMS
        </div>
      </div>
    </div>
  );
}
