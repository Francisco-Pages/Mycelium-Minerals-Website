import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function SustainabilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SustainabilityContent />;
}

// ---------------------------------------------------------------------------
// Page composition
// ---------------------------------------------------------------------------

function SustainabilityContent() {
  const t = useTranslations('sustainability');

  return (
    <div>
      {/* Hero */}
      <section className="bg-offwhite border-b border-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
            ESG &amp; Sustainability
          </p>
          <h1 className="font-clash font-bold text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
            {t('title')}
          </h1>
          <p className="mt-4 text-base text-obsidian/70 max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Pillar Stats */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-xs font-mono uppercase tracking-widest text-obsidian/40 mb-10 text-center">
            {t('pillarsTitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-obsidian">
            <div className="border-b md:border-b-0 border-r border-obsidian/20 flex flex-col items-center py-12 px-8">
              <span className="font-clash font-bold text-5xl text-gold">{t('envStat1Value')}</span>
              <span className="mt-3 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                {t('envStat1Label')}
              </span>
            </div>
            <div className="border-b md:border-b-0 border-r border-obsidian/20 flex flex-col items-center py-12 px-8">
              <span className="font-clash font-bold text-5xl text-gold">
                {t('socialStat1Value')}
              </span>
              <span className="mt-3 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                {t('socialStat1Label')}
              </span>
            </div>
            <div className="flex flex-col items-center py-12 px-8">
              <span className="font-clash font-bold text-5xl text-gold">
                {t('socialStat2Value')}
              </span>
              <span className="mt-3 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                {t('socialStat2Label')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Section */}
      <section className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
              {t('environmental')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <p className="text-base text-obsidian/70 leading-relaxed">{t('environmentalDesc')}</p>
            <div className="grid grid-cols-2 gap-0 border border-obsidian">
              <div className="border-r border-obsidian/20 flex flex-col items-center py-10 px-6">
                <span className="font-clash font-bold text-4xl text-gold">
                  {t('envStat1Value')}
                </span>
                <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                  {t('envStat1Label')}
                </span>
              </div>
              <div className="flex flex-col items-center py-10 px-6">
                <span className="font-clash font-bold text-4xl text-gold">
                  {t('envStat2Value')}
                </span>
                <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                  {t('envStat2Label')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
              {t('social')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <p className="text-base text-obsidian/70 leading-relaxed">{t('socialDesc')}</p>
            <div className="grid grid-cols-2 gap-0 border border-obsidian">
              <div className="border-r border-obsidian/20 flex flex-col items-center py-10 px-6">
                <span className="font-clash font-bold text-4xl text-gold">
                  {t('socialStat1Value')}
                </span>
                <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                  {t('socialStat1Label')}
                </span>
              </div>
              <div className="flex flex-col items-center py-10 px-6">
                <span className="font-clash font-bold text-4xl text-gold">
                  {t('socialStat2Value')}
                </span>
                <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                  {t('socialStat2Label')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
              {t('governance')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <p className="text-base text-obsidian/70 leading-relaxed">{t('governanceDesc')}</p>
            <div className="grid grid-cols-2 gap-0 border border-obsidian">
              <div className="border-r border-obsidian/20 flex flex-col items-center py-10 px-6">
                <span className="font-clash font-bold text-4xl text-gold">
                  {t('govStat1Value')}
                </span>
                <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                  {t('govStat1Label')}
                </span>
              </div>
              <div className="flex flex-col items-center py-10 px-6">
                <span className="font-clash font-bold text-4xl text-gold">
                  {t('govStat2Value')}
                </span>
                <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                  {t('govStat2Label')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Download Band */}
      <section className="bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-clash font-bold text-3xl md:text-4xl text-white leading-tight">
              {t('reportTitle')}
            </h2>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">{t('reportDesc')}</p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white text-white text-base font-inter font-semibold hover:bg-white hover:text-obsidian transition-colors"
            >
              {t('reportCta')} ↓
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
