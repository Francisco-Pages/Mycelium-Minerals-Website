import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { FadeInView } from '@/components/ui/FadeInView';

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <NewsPageContent />;
}

// ---------------------------------------------------------------------------
// Placeholder data — TODO: replace with await sanityFetch(pressReleasesQuery)
// ---------------------------------------------------------------------------

const NEWS = [
  {
    date: 'March 2025',
    title: 'Mycelium Minerals Launches 2025 Diamond Drilling Campaign at Los Clavillos',
    excerpt:
      'The Company has commenced its 2025 diamond drilling program at Los Clavillos, Bolivia, targeting high-grade gold mineralisation along the NW-SE carbonate-quartz vein corridor.',
    slug: 'los-clavillos-2025-drill-program',
  },
  {
    date: 'February 2025',
    title: 'Mycelium Minerals Acquires 25,950 Hectares in Santa Cruz, Bolivia',
    excerpt:
      'Mycelium Minerals has expanded its Bolivian land package to 25,950 hectares with the addition of the Cerrito XXI and Cerrito XXII concessions in Bolivia\'s Precambrian Shield and Andean mineral belts.',
    slug: 'concession-acquisition-2025',
  },
  {
    date: 'January 2025',
    title: 'Cerrito XXI and Cerrito XXII Work Plans Filed with AJAM',
    excerpt:
      'The Company has filed LPE work plans for its two new gold concessions, outlining a combined 3,500-metre drill program with a total approved budget of USD $738,358.',
    slug: 'cerrito-work-plans-2025',
  },
  {
    date: 'December 2024',
    title: 'Mycelium Minerals Closes Equity Round to Advance Bolivia Exploration Portfolio',
    excerpt:
      'The Company has secured a USD $1,000,000 equity raise to fund the 5,000-metre diamond drilling campaign across its three gold and silver concessions in Santa Cruz Department.',
    slug: 'equity-raise-2024',
  },
  {
    date: 'October 2024',
    title: 'Historical Drill Results at Los Clavillos Confirm Peak Grade of 12.95 g/t Au',
    excerpt:
      'A review of 26 historical drill holes totalling 3,129 metres at Los Clavillos returned peak intercepts of 12.95 g/t Au, supporting the polymetallic orogenic deposit thesis.',
    slug: 'los-clavillos-historical-results-2024',
  },
  {
    date: 'September 2024',
    title: 'Mycelium Minerals Signs Exploration Agreement with Crown Mining Bolivia S.R.L.',
    excerpt:
      'The Company has formalised its operator agreement with Crown Mining Bolivia S.R.L. at the Los Clavillos concession under the existing 30-year AJAM extraction contract.',
    slug: 'crown-mining-agreement-2024',
  },
] as const;

// ---------------------------------------------------------------------------
// Page composition
// ---------------------------------------------------------------------------

function NewsPageContent() {
  const t = useTranslations('news');

  return (
    <div>
      {/* Hero */}
      <section className="bg-offwhite border-b border-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <p className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
              {t('pressRelease')}
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

      {/* News Grid */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian">
                {t('allReleases')}
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-obsidian">
            {NEWS.map((article) => (
              <article
                key={article.slug}
                className="border-b border-r border-obsidian/20 bg-white p-6 flex flex-col gap-4 group hover:bg-offwhite transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-gold">
                    {t('pressRelease')}
                  </span>
                  <span className="text-xs font-mono text-obsidian/50">·</span>
                  <time className="text-xs font-mono text-obsidian/65 uppercase tracking-widest">
                    {article.date}
                  </time>
                </div>
                <h3 className="font-inter font-bold text-lg text-obsidian leading-tight group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-obsidian/70 leading-relaxed flex-1">{article.excerpt}</p>
                <Link
                  href={`/news/${article.slug}`}
                  className="text-xs font-mono text-obsidian/65 group-hover:text-gold transition-colors mt-auto pt-4 border-t border-obsidian/10 inline-block"
                >
                  {t('readArticle')} →
                </Link>
              </article>
            ))}
          </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
