import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { FadeInView } from '@/components/ui/FadeInView';

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
          <FadeInView>
            <p className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
              ESG &amp; Sustainability
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
              {t('title')}
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="mt-4 text-base text-obsidian/70 max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>
          </FadeInView>
        </div>
      </section>

      {/* 4EverForest Partnership */}
      <section className="bg-green border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeInView>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-6">
              Conservation Partnership
            </p>
            <h2 className="font-inter font-bold text-4xl md:text-6xl text-white max-w-3xl leading-tight mb-4">
              Reforesting the Chiquitania with 4EverForest
            </h2>
            <p className="text-base text-white/70 max-w-2xl leading-relaxed mb-12">
              Mycelium Minerals is proud to partner with 4EverForest, a not-for-profit organization focused on reforestation and regenerative agriculture in South America — operating in the same Chiquitania region as our exploration projects.
            </p>
          </FadeInView>

          {/* Stats */}
          <FadeInView delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/20 mb-14">
              {[
                { value: '50,000+', label: 'Trees Planted' },
                { value: '40+', label: 'Community Partners' },
                { value: '80%+', label: 'Indigenous Women Partners' },
                { value: '5,000,000', label: 'Tree Goal' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center py-10 px-6 ${i < 3 ? 'border-b md:border-b-0 md:border-r border-white/20' : ''}`}
                >
                  <span className="font-inter font-bold text-4xl text-gold">{stat.value}</span>
                  <span className="mt-2 text-xs font-mono uppercase tracking-widest text-white/60 text-center">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeInView>

          {/* Description + Techniques */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-14">
            <FadeInView direction="left">
              <h3 className="font-inter font-bold text-2xl text-white mb-4">Our Shared Mission</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                4EverForest is on a mission to revitalize and reforest areas of Bolivia and Brazil that have been burned, degraded by farming, or deforested — by planting Baru trees and other native species, primarily in the Chiquitania forest of the Cerrado Biome.
              </p>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                The Chiquitania is the second largest biome in South America after the Amazon, and nowhere in the region is deforestation more acute. 4EverForest counters the three most significant emissions Bolivia produces — CO₂, CH₄, and N₂O — caused by deforestation, cattle farming, and agriculture.
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                Through a partnership with KarbonX, 4EverForest is advancing forest monitoring systems to international specifications, enabling reforestation projects to receive carbon credits and creating a sustainable economic model for conservation.
              </p>
            </FadeInView>
            <FadeInView direction="right">
              <h3 className="font-inter font-bold text-2xl text-white mb-4">How They Work</h3>
              <ul className="flex flex-col gap-0 border border-white/20">
                {[
                  ['Environmental Education', 'Teaching cattle farmers and locals how to care for their land and how trees benefit crops and provide shade.'],
                  ['Silvicultural Practices', 'Intensive thinning, pruning, and enrichment to improve growth rates, absorb atmospheric carbon, and reduce fire risk.'],
                  ['Local Collaborations', 'Working with locals who know the land, the crops, and the trees — supplying communities with seedlings, training, and supplies.'],
                  ['Economic Value', 'Planting Baru trees whose nuts provide a viable food source for cattle and a harvestable income stream for indigenous farmers.'],
                  ['Long-Term Protection', 'Fire-resistant and drought-resistant species selected to protect the surrounding forest for generations.'],
                ].map(([title, desc], i) => (
                  <li key={i} className="flex items-start gap-4 px-5 py-4 border-b border-white/10 last:border-b-0">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-gold flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="text-xs text-white/60 leading-relaxed mt-0.5">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </FadeInView>
          </div>

          {/* Founder Quote */}
          <FadeInView delay={0.15}>
            <blockquote className="border-l-4 border-gold pl-8 py-2 mb-10">
              <p className="text-lg text-white/90 italic leading-relaxed max-w-3xl">
                &ldquo;Changing the culture and mentality of an area isn&apos;t easy, but my team and I quickly began with training programs in the local communities. Our mission is to help educate the local population on gaining economic growth and development through planting, harvesting, and maintenance of the Baru tree and other native species.&rdquo;
              </p>
              <footer className="mt-4 text-xs font-mono uppercase tracking-widest text-gold">
                Jeff Zelinski — Founder, 4EverForest · Chief Geologist, Mycelium Minerals
              </footer>
            </blockquote>
          </FadeInView>

          <FadeInView delay={0.2}>
            <a
              href="https://4everforest.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white text-white text-sm font-inter font-semibold hover:bg-white hover:text-green transition-colors"
            >
              Visit 4EverForest.org ↗
            </a>
          </FadeInView>
        </div>
      </section>

      {/* Pillar Stats */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-obsidian/65 mb-10 text-center">
              {t('pillarsTitle')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-obsidian">
              <div className="border-b md:border-b-0 border-r border-obsidian/20 flex flex-col items-center py-12 px-8">
                <span className="font-inter font-bold text-5xl text-gold">{t('envStat1Value')}</span>
                <span className="mt-3 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                  {t('envStat1Label')}
                </span>
              </div>
              <div className="border-b md:border-b-0 border-r border-obsidian/20 flex flex-col items-center py-12 px-8">
                <span className="font-inter font-bold text-5xl text-gold">
                  {t('socialStat1Value')}
                </span>
                <span className="mt-3 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                  {t('socialStat1Label')}
                </span>
              </div>
              <div className="flex flex-col items-center py-12 px-8">
                <span className="font-inter font-bold text-5xl text-gold">
                  {t('socialStat2Value')}
                </span>
                <span className="mt-3 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                  {t('socialStat2Label')}
                </span>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Environmental Section */}
      <section className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian">
                {t('environmental')}
              </h2>
            </div>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <FadeInView direction="left">
              <p className="text-base text-obsidian/70 leading-relaxed">{t('environmentalDesc')}</p>
            </FadeInView>
            <FadeInView direction="right">
              <div className="grid grid-cols-2 gap-0 border border-obsidian">
                <div className="border-r border-obsidian/20 flex flex-col items-center py-10 px-6">
                  <span className="font-inter font-bold text-4xl text-gold">
                    {t('envStat1Value')}
                  </span>
                  <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                    {t('envStat1Label')}
                  </span>
                </div>
                <div className="flex flex-col items-center py-10 px-6">
                  <span className="font-inter font-bold text-4xl text-gold">
                    {t('envStat2Value')}
                  </span>
                  <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                    {t('envStat2Label')}
                  </span>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian">
                {t('social')}
              </h2>
            </div>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <FadeInView direction="left">
              <p className="text-base text-obsidian/70 leading-relaxed">{t('socialDesc')}</p>
            </FadeInView>
            <FadeInView direction="right">
              <div className="grid grid-cols-2 gap-0 border border-obsidian">
                <div className="border-r border-obsidian/20 flex flex-col items-center py-10 px-6">
                  <span className="font-inter font-bold text-4xl text-gold">
                    {t('socialStat1Value')}
                  </span>
                  <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                    {t('socialStat1Label')}
                  </span>
                </div>
                <div className="flex flex-col items-center py-10 px-6">
                  <span className="font-inter font-bold text-4xl text-gold">
                    {t('socialStat2Value')}
                  </span>
                  <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                    {t('socialStat2Label')}
                  </span>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian">
                {t('governance')}
              </h2>
            </div>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <FadeInView direction="left">
              <p className="text-base text-obsidian/70 leading-relaxed">{t('governanceDesc')}</p>
            </FadeInView>
            <FadeInView direction="right">
              <div className="grid grid-cols-2 gap-0 border border-obsidian">
                <div className="border-r border-obsidian/20 flex flex-col items-center py-10 px-6">
                  <span className="font-inter font-bold text-4xl text-gold">
                    {t('govStat1Value')}
                  </span>
                  <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                    {t('govStat1Label')}
                  </span>
                </div>
                <div className="flex flex-col items-center py-10 px-6">
                  <span className="font-inter font-bold text-4xl text-gold">
                    {t('govStat2Value')}
                  </span>
                  <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                    {t('govStat2Label')}
                  </span>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* Report Download Band */}
      <section className="bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeInView direction="left" className="max-w-xl">
            <h2 className="font-inter font-bold text-3xl md:text-4xl text-white leading-tight">
              {t('reportTitle')}
            </h2>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">{t('reportDesc')}</p>
          </FadeInView>
          <FadeInView direction="right" className="flex-shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white text-white text-base font-inter font-semibold hover:bg-white hover:text-obsidian transition-colors"
            >
              {t('reportCta')} ↓
            </a>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
