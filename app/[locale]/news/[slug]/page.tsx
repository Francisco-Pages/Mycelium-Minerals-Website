import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Badge from '@/components/ui/Badge';

export default async function PressReleaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  return <ArticleContent slug={slug} />;
}

// ---------------------------------------------------------------------------
// Placeholder data — TODO: replace with await sanityFetch(pressReleaseBySlugQuery, { slug })
// ---------------------------------------------------------------------------

interface ArticleData {
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  relatedSlugs: string[];
}

const NEWS_DATA: Record<string, ArticleData> = {
  'q4-2024-production-results': {
    date: 'February 18, 2025',
    title: 'Mycelium Minerals Reports Record Q4 2024 Gold Production of 34,200 oz',
    excerpt:
      'Fourth-quarter output surpassed guidance by 8%, driven by improved mill throughput at Cerro Blanco and Río Mulatos.',
    body: [
      'TORONTO, February 18, 2025 — Mycelium Minerals Inc. today announced record fourth-quarter 2024 gold production of 34,200 ounces of gold equivalent, surpassing the Company\'s quarterly guidance range by approximately 8%.',
      'Gold production from the Cerro Blanco mine reached 9,100 ounces in Q4, reflecting the full operational benefit of the mill throughput expansion completed in August 2024. Río Mulatos contributed 4,800 ounces of gold, supported by higher mill availability following scheduled maintenance in Q3.',
      'Silver production for the quarter totalled approximately 493,000 ounces, primarily from Cerro Blanco\'s high-grade skarn zones. Combined with gold output, total Q4 production was approximately 34,200 gold-equivalent ounces when applying a 90:1 gold-to-silver conversion ratio.',
      '"This was the strongest quarter in the Company\'s history," said CEO María Elena Vargas. "The Cerro Blanco expansion has performed exactly as anticipated, and we enter 2025 with strong operational momentum across all four sites."',
      'Full-year 2024 production is expected to be reported alongside financial results in April 2025. The Company will host an investor conference call on March 5, 2025 to discuss Q4 results and 2025 guidance.',
    ],
    relatedSlugs: ['2025-guidance', 'cerro-blanco-mill-expansion-2024'],
  },
  'credit-facility-2025': {
    date: 'January 30, 2025',
    title: 'Mycelium Minerals Closes $45M Credit Facility to Fund Expansion',
    excerpt:
      'The revolving credit facility provides capital flexibility to advance the San Cristóbal Norte development program through 2026.',
    body: [
      'TORONTO, January 30, 2025 — Mycelium Minerals Inc. today announced the closing of a C$45 million revolving credit facility with a syndicate of Canadian financial institutions led by a major Canadian bank.',
      'The facility carries a three-year term and provides flexible draw-down mechanics to fund development capital at San Cristóbal Norte. Proceeds will be used primarily for pre-feasibility study advancement, environmental permitting, and early-stage site preparation work.',
      '"This financing underpins our commitment to advancing San Cristóbal Norte toward construction," said CFO James Thornton. "The facility terms reflect confidence in our balance sheet and the project\'s development timeline."',
      'The Company expects to draw approximately C$18 million over the next 12 months for pre-feasibility and permitting activities, with remaining capacity available for construction financing beginning in H2 2026.',
      'Mycelium Minerals retains full flexibility to repay and redraw under the facility, providing capital efficiency as project milestones are achieved and funding requirements evolve.',
    ],
    relatedSlugs: ['san-cristobal-resource-update-2024', '2025-guidance'],
  },
  '2025-guidance': {
    date: 'January 9, 2025',
    title: 'Mycelium Minerals Announces 2025 Production Guidance and Capital Budget',
    excerpt:
      'The Company guides 120,000–130,000 oz Au equivalent for 2025, with a sustaining capital budget of $28M across all operating sites.',
    body: [
      'TORONTO, January 9, 2025 — Mycelium Minerals Inc. today provided production guidance and capital budget for the fiscal year ending December 31, 2025.',
      'The Company guides consolidated gold-equivalent production of 120,000 to 130,000 ounces for 2025, with Cerro Blanco expected to contribute 27,000–29,000 ounces of gold and Río Mulatos expected to contribute 17,500–19,000 ounces.',
      'Total sustaining capital expenditure for 2025 is budgeted at approximately C$28 million, allocated across underground development at Cerro Blanco (C$12M), heap-leach expansion at Río Mulatos (C$8M), and site infrastructure investments (C$8M combined).',
      'All-in sustaining costs (AISC) are guided at a range to be disclosed with Q4 2024 financial results. The Company expects to maintain its strong free cash flow profile through 2025 as capital intensity remains below historical levels.',
      'Guidance assumes continued normal operations and does not incorporate any contribution from San Cristóbal Norte, which remains in development stage.',
    ],
    relatedSlugs: ['q4-2024-production-results', 'credit-facility-2025'],
  },
  'q3-2024-results': {
    date: 'November 12, 2024',
    title: 'Mycelium Minerals Releases Q3 2024 Financial Results',
    excerpt:
      'Third-quarter gold production of 31,400 oz Au and silver production of 458,000 oz Ag, tracking above full-year guidance.',
    body: [
      'TORONTO, November 12, 2024 — Mycelium Minerals Inc. today released financial and operational results for the third quarter ended September 30, 2024.',
      'Q3 2024 gold production totalled 31,400 ounces, a 4% increase over Q2 2024, with Cerro Blanco contributing approximately 8,500 ounces following completion of the mill throughput expansion in August. Río Mulatos contributed 4,600 ounces.',
      'Silver production for the quarter was approximately 458,000 ounces. Year-to-date production through Q3 2024 was approximately 89,700 gold-equivalent ounces, tracking above the mid-point of the Company\'s full-year guidance range.',
      'Revenue for Q3 2024 and full financial results will be detailed in the Management Discussion & Analysis and consolidated financial statements filed today on SEDAR+.',
      '"The mill expansion at Cerro Blanco came online in August and immediately delivered the throughput gains we projected," said CEO María Elena Vargas. "We are well-positioned to meet or exceed our full-year production target."',
    ],
    relatedSlugs: ['cerro-blanco-mill-expansion-2024', 'q4-2024-production-results'],
  },
  'san-cristobal-resource-update-2024': {
    date: 'October 3, 2024',
    title: 'Mycelium Minerals Expands San Cristóbal Norte Resource by 22%',
    excerpt:
      'Updated NI 43-101 resource estimate confirms Indicated silver resources of approximately 12 million ounces, a 22% increase over the prior estimate.',
    body: [
      'TORONTO, October 3, 2024 — Mycelium Minerals Inc. today announced an updated NI 43-101 compliant mineral resource estimate for its San Cristóbal Norte silver development project in Potosí Department, Bolivia.',
      'The updated Indicated resource of approximately 12.0 million ounces of silver (58 million tonnes grading 6.4 g/t Ag) represents a 22% increase over the prior estimate of 9.8 million ounces, attributable to infill and step-out drilling completed during H1 2024.',
      'The resource estimate was prepared by independent qualified person Dr. Elena Schulz P.Geo. (SRK Consulting) and is disclosed in accordance with NI 43-101 Standards of Disclosure for Mineral Projects.',
      '"This updated resource confirms the scale potential of San Cristóbal Norte and directly supports our pre-feasibility study advancement," said VP Exploration Dr. Sarah Okonkwo. "We remain on track to complete the pre-feasibility study in H1 2025."',
      'The technical report supporting this estimate will be filed on SEDAR+ within 45 days of this announcement.',
    ],
    relatedSlugs: ['credit-facility-2025', '2025-guidance'],
  },
  'cerro-blanco-mill-expansion-2024': {
    date: 'August 15, 2024',
    title: 'Mycelium Minerals Completes Mill Expansion at Cerro Blanco',
    excerpt:
      'The throughput expansion project was completed on schedule and budget, increasing processing capacity by 22% to approximately 3,200 tonnes per day.',
    body: [
      'TORONTO, August 15, 2024 — Mycelium Minerals Inc. today announced the successful completion of the Cerro Blanco mill throughput expansion, increasing processing capacity from approximately 2,600 to 3,200 tonnes per day.',
      'The expansion project was completed on schedule and within the C$12 million capital budget approved at the beginning of 2024. Commissioning began in early August with commercial throughput rates achieved by August 12, 2024.',
      'The increased throughput capacity is expected to support incremental annual gold production of approximately 3,500–4,000 ounces at Cerro Blanco, and is a key driver of the Company\'s Q4 2024 production guidance.',
      '"Completing this project on time and on budget reflects the operational capabilities of our Bolivian team," said COO Roberto Chávez Quispe. "Cerro Blanco is now operating at its highest design capacity since commissioning in 2011."',
      'The expanded mill will process higher-grade ore from newly accessed underground zones during H2 2024 and into 2025, supporting the production ramp-up reflected in updated full-year guidance.',
    ],
    relatedSlugs: ['q3-2024-results', 'q4-2024-production-results'],
  },
};

const RELATED_NEWS = Object.fromEntries(
  Object.entries(NEWS_DATA).map(([slug, article]) => [slug, { title: article.title, date: article.date }])
);

// ---------------------------------------------------------------------------
// Page composition
// ---------------------------------------------------------------------------

function ArticleContent({ slug }: { slug: string }) {
  const t = useTranslations('news');
  const article = NEWS_DATA[slug];

  if (!article) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24">
        <p className="font-mono text-sm text-obsidian/50">Article not found.</p>
        <Link
          href="/news"
          className="mt-4 inline-block text-sm font-mono text-obsidian hover:text-gold transition-colors"
        >
          {t('backToNews')}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Article Hero */}
      <section className="bg-offwhite border-b border-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/news"
            className="text-xs font-mono text-obsidian/50 hover:text-gold transition-colors uppercase tracking-widest"
          >
            {t('backToNews')}
          </Link>
          <div className="mt-6 flex items-center gap-3">
            <Badge label={t('pressRelease')} variant="stage" />
            <time className="text-xs font-mono text-obsidian/65 uppercase tracking-widest">
              {article.date}
            </time>
          </div>
          <h1 className="mt-4 font-inter font-bold text-3xl sm:text-4xl md:text-6xl text-obsidian max-w-4xl leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-base text-obsidian/70 max-w-2xl leading-relaxed">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <div className="flex flex-col gap-6">
            {article.body.map((paragraph, i) => (
              <p key={i} className="text-base text-obsidian/80 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* About Mycelium Minerals boilerplate */}
          <div className="mt-16 pt-10 border-t border-obsidian/20">
            <p className="text-xs font-mono uppercase tracking-widest text-obsidian/65 mb-4">
              About Mycelium Minerals
            </p>
            <p className="text-sm text-obsidian/60 leading-relaxed">
              Mycelium Minerals Inc. is a gold and silver exploration company with three
              concessions totalling 25,950 hectares in Bolivia's Precambrian Shield and Andean mineral belts
              Department. The Company is advancing active drill programs at Los Clavillos and the Cerrito
              project area. Mycelium Minerals is committed to responsible exploration practices, community
              partnership, and transparent governance.
            </p>
          </div>
        </div>
      </section>

      {/* Back Band + Related */}
      <section className="bg-offwhite border-t border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <Link
              href="/news"
              className="text-sm font-mono text-obsidian hover:text-gold transition-colors"
            >
              {t('backToNews')}
            </Link>
            {article.relatedSlugs.length > 0 && (
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-obsidian/65 mb-4">
                  {t('relatedReleases')}
                </p>
                <div className="flex flex-col gap-3">
                  {article.relatedSlugs.map((relatedSlug) => {
                    const related = RELATED_NEWS[relatedSlug];
                    if (!related) return null;
                    return (
                      <Link
                        key={relatedSlug}
                        href={`/news/${relatedSlug}`}
                        className="group flex flex-col gap-1 max-w-sm"
                      >
                        <time className="text-xs font-mono text-obsidian/65">
                          {related.date}
                        </time>
                        <p className="text-sm font-inter text-obsidian group-hover:text-gold transition-colors leading-snug">
                          {related.title}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
