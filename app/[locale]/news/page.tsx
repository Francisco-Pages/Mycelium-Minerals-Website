import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

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
    date: 'February 18, 2025',
    title: 'Mycelium Minerals Reports Record Q4 2024 Gold Production of 34,200 oz',
    excerpt:
      'Fourth-quarter output surpassed guidance by 8%, driven by improved mill throughput at Cerro Blanco and Río Mulatos.',
    slug: 'q4-2024-production-results',
  },
  {
    date: 'January 30, 2025',
    title: 'Mycelium Minerals Closes $45M Credit Facility to Fund Expansion',
    excerpt:
      'The revolving credit facility provides capital flexibility to advance the San Cristóbal Norte development program through 2026.',
    slug: 'credit-facility-2025',
  },
  {
    date: 'January 9, 2025',
    title: 'Mycelium Minerals Announces 2025 Production Guidance and Capital Budget',
    excerpt:
      'The Company guides 120,000–130,000 oz Au equivalent for 2025, with a sustaining capital budget of $28M across all operating sites.',
    slug: '2025-guidance',
  },
  {
    date: 'November 12, 2024',
    title: 'Mycelium Minerals Releases Q3 2024 Financial Results',
    excerpt:
      'Third-quarter gold production of 31,400 oz Au and silver production of 458,000 oz Ag, tracking above full-year guidance.',
    slug: 'q3-2024-results',
  },
  {
    date: 'October 3, 2024',
    title: 'Mycelium Minerals Expands San Cristóbal Norte Resource by 22%',
    excerpt:
      'Updated NI 43-101 resource estimate confirms Indicated silver resources of approximately 12 million ounces, a 22% increase over the prior estimate.',
    slug: 'san-cristobal-resource-update-2024',
  },
  {
    date: 'August 15, 2024',
    title: 'Mycelium Minerals Completes Mill Expansion at Cerro Blanco',
    excerpt:
      'The throughput expansion project was completed on schedule and budget, increasing processing capacity by 22% to approximately 3,200 tonnes per day.',
    slug: 'cerro-blanco-mill-expansion-2024',
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
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
            {t('pressRelease')}
          </p>
          <h1 className="font-clash font-bold text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
            {t('title')}
          </h1>
          <p className="mt-4 text-base text-obsidian/70 max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
              {t('allReleases')}
            </h2>
          </div>
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
                  <span className="text-xs font-mono text-obsidian/30">·</span>
                  <time className="text-xs font-mono text-obsidian/40 uppercase tracking-widest">
                    {article.date}
                  </time>
                </div>
                <h3 className="font-clash font-bold text-lg text-obsidian leading-tight group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-obsidian/70 leading-relaxed flex-1">{article.excerpt}</p>
                <Link
                  href={`/news/${article.slug}`}
                  className="text-xs font-mono text-obsidian/40 group-hover:text-gold transition-colors mt-auto pt-4 border-t border-obsidian/10 inline-block"
                >
                  {t('readArticle')} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
