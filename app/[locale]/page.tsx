import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Card from '@/components/ui/Card';
import { ButtonLink } from '@/components/ui/Button';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageContent />;
}

// ---------------------------------------------------------------------------
// Placeholder data (replace with sanityFetch() calls once Sanity is configured)
// ---------------------------------------------------------------------------

const PROJECTS = [
  {
    title: 'Cerro Blanco',
    stage: 'Production',
    commodities: ['Gold', 'Silver'],
    location: 'Oruro Department',
    slug: 'cerro-blanco',
  },
  {
    title: 'San Cristóbal Norte',
    stage: 'Development',
    commodities: ['Silver'],
    location: 'Potosí Department',
    slug: 'san-cristobal-norte',
  },
  {
    title: 'Río Mulatos',
    stage: 'Production',
    commodities: ['Gold'],
    location: 'La Paz Department',
    slug: 'rio-mulatos',
  },
  {
    title: 'Colquiri Sur',
    stage: 'Exploration',
    commodities: ['Silver', 'Zinc'],
    location: 'Cochabamba Department',
    slug: 'colquiri-sur',
  },
] as const;

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
] as const;

// ---------------------------------------------------------------------------
// Page composition
// ---------------------------------------------------------------------------

function HomePageContent() {
  const t = useTranslations('home');

  return (
    <div>
      <HeroSection t={t} />
      <MetricsBar t={t} />
      <ProjectsGrid t={t} />
      <LatestNews t={t} />
      <ESGTeaser t={t} />
      <IRBand t={t} />
      <ContactCTABand t={t} />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 1. Hero
// ---------------------------------------------------------------------------

function HeroSection({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center px-6 py-24 border-b border-obsidian text-center">
      <p className="text-xs font-mono uppercase tracking-widest text-gold mb-6">
        {t('irBandTicker')} · Gold &amp; Silver · Bolivia
      </p>
      <h1 className="text-6xl md:text-8xl font-clash font-bold text-obsidian max-w-5xl leading-tight">
        {t('heroTitle')}
      </h1>
      <p className="mt-6 text-lg text-obsidian/70 max-w-2xl">{t('heroSubtitle')}</p>
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <ButtonLink href="/projects" variant="primary" size="lg">
          {t('ctaPrimary')}
        </ButtonLink>
        <ButtonLink href="/investor-relations" variant="secondary" size="lg">
          {t('ctaSecondary')}
        </ButtonLink>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 2. Metrics Bar
// ---------------------------------------------------------------------------

function MetricsBar({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  const metrics = [
    { value: t('metric1Value'), label: t('metric1Label') },
    { value: t('metric2Value'), label: t('metric2Label') },
    { value: t('metric3Value'), label: t('metric3Label') },
    { value: t('metric4Value'), label: t('metric4Label') },
  ];

  return (
    <section className="bg-offwhite border-b border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-xs font-mono uppercase tracking-widest text-obsidian/40 mb-8 text-center">
          {t('metricsEyebrow')}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`flex flex-col items-center py-6 px-4 ${
                i < metrics.length - 1 ? 'border-r border-obsidian/20' : ''
              }`}
            >
              <span className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
                {metric.value}
              </span>
              <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 3. Projects Grid
// ---------------------------------------------------------------------------

function ProjectsGrid({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  // TODO: replace PROJECTS with await sanityFetch(projectsQuery) once Sanity is configured

  return (
    <section className="bg-white border-b border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
          <div>
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
              {t('projectsSectionTitle')}
            </h2>
            <p className="mt-2 text-sm text-obsidian/60">{t('projectsSectionSubtitle')}</p>
          </div>
          <Link
            href="/projects"
            className="text-sm font-mono font-medium text-obsidian hover:text-gold transition-colors whitespace-nowrap ml-8"
          >
            {t('projectsViewAll')} →
          </Link>
        </div>

        {/* 2×2 card grid — zero gap so borders touch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-obsidian">
          {PROJECTS.map((project) => (
            <Card
              key={project.slug}
              title={project.title}
              stage={project.stage}
              commodities={[...project.commodities]}
              location={project.location}
              href={`/projects/${project.slug}`}
              className="border-0 border-b border-r border-obsidian/20"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 4. Latest News
// ---------------------------------------------------------------------------

function LatestNews({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  // TODO: replace NEWS with await sanityFetch(pressReleasesQuery) once Sanity is configured

  return (
    <section className="bg-offwhite border-b border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section header */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
          <div>
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
              {t('newsSectionTitle')}
            </h2>
            <p className="mt-2 text-sm text-obsidian/60">{t('newsSectionSubtitle')}</p>
          </div>
          <Link
            href="/news"
            className="text-sm font-mono font-medium text-obsidian hover:text-gold transition-colors whitespace-nowrap ml-8"
          >
            {t('newsViewAll')} →
          </Link>
        </div>

        {/* 3-column news cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-obsidian">
          {NEWS.map((article) => (
            <article
              key={article.slug}
              className="border-b border-r border-obsidian/20 bg-white p-6 flex flex-col gap-4 group hover:bg-offwhite transition-colors"
            >
              <time className="text-xs font-mono text-obsidian/40 uppercase tracking-widest">
                {article.date}
              </time>
              <h3 className="font-clash font-bold text-lg text-obsidian leading-tight group-hover:text-gold transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-obsidian/70 leading-relaxed flex-1">{article.excerpt}</p>
              <Link
                href={`/news/${article.slug}`}
                className="text-xs font-mono text-obsidian/40 group-hover:text-gold transition-colors mt-auto pt-4 border-t border-obsidian/10 inline-block"
              >
                {t('newsReadMore')} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 5. ESG Teaser
// ---------------------------------------------------------------------------

function ESGTeaser({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  const stats = [
    { value: t('esgStat1Value'), label: t('esgStat1Label') },
    { value: t('esgStat2Value'), label: t('esgStat2Label') },
    { value: t('esgStat3Value'), label: t('esgStat3Label') },
  ];

  return (
    <section className="bg-obsidian border-b border-obsidian text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs font-mono uppercase tracking-widest text-gold mb-6">
          Sustainability &amp; ESG
        </p>
        <h2 className="font-clash font-bold text-4xl md:text-5xl text-white max-w-3xl leading-tight">
          {t('esgSectionTitle')}
        </h2>
        <p className="mt-6 text-base text-white/60 max-w-2xl leading-relaxed">
          {t('esgSectionSubtitle')}
        </p>

        {/* Pillar stats */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center py-10 px-8 ${
                i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''
              }`}
            >
              <span className="font-clash font-bold text-5xl text-gold">{stat.value}</span>
              <span className="mt-3 text-xs font-mono uppercase tracking-widest text-white/50">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/sustainability"
            className="text-sm font-mono font-medium text-gold hover:text-white transition-colors"
          >
            {t('esgCta')} →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 6. IR Band
// ---------------------------------------------------------------------------

function IRBand({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  return (
    <section className="bg-gold border-y border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Stock ticker */}
        <div className="flex items-baseline gap-4">
          <span className="font-clash font-bold text-3xl text-obsidian">{t('irBandTicker')}</span>
          <span className="font-mono text-obsidian/50 text-lg">— C$—</span>
        </div>

        {/* Quick-access links */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/investor-relations#annual-report"
            className="px-5 py-2.5 border border-obsidian text-obsidian text-sm font-inter font-semibold hover:bg-obsidian hover:text-white transition-colors"
          >
            {t('irBandAnnualReport')}
          </Link>
          <Link
            href="/investor-relations#presentation"
            className="px-5 py-2.5 border border-obsidian text-obsidian text-sm font-inter font-semibold hover:bg-obsidian hover:text-white transition-colors"
          >
            {t('irBandPresentation')}
          </Link>
          <ButtonLink href="/investor-relations" variant="primary" size="md">
            {t('irBandCta')}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 7. Contact CTA Band
// ---------------------------------------------------------------------------

function ContactCTABand({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  return (
    <section className="bg-white border-t border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: headline + subtext */}
        <div className="max-w-lg">
          <h2 className="font-clash font-bold text-3xl md:text-4xl text-obsidian leading-tight">
            {t('contactBandTitle')}
          </h2>
          <p className="mt-3 text-sm text-obsidian/60 leading-relaxed">
            {t('contactBandSubtitle')}
          </p>
        </div>

        {/* Right: email + CTA */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <a
            href={`mailto:${t('contactBandEmail')}`}
            className="font-mono text-base text-obsidian hover:text-gold transition-colors"
          >
            {t('contactBandEmail')}
          </a>
          <ButtonLink href="/contact" variant="secondary" size="md">
            {t('contactBandCta')}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
