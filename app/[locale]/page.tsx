import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { ButtonLink } from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { FadeInView } from '@/components/ui/FadeInView';

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
    title: 'Los Clavillos',
    stage: 'Exploration',
    commodities: ['Gold', 'Silver', 'Copper', 'Zinc', 'Lead'],
    location: 'Ñuflo de Chávez, Santa Cruz',
    slug: 'los-clavillos',
  },
  {
    title: 'Cerrito XXI',
    stage: 'Exploration',
    commodities: ['Gold', 'Silver'],
    location: 'Ñuflo de Chávez, Santa Cruz',
    slug: 'cerrito-xxi',
  },
  {
    title: 'Cerrito XXII',
    stage: 'Exploration',
    commodities: ['Gold'],
    location: 'Ñuflo de Chávez, Santa Cruz',
    slug: 'cerrito-xxii',
  },
  {
    title: 'Mycel Project',
    stage: 'Exploration',
    commodities: ['Silver', 'Gold', 'Zinc'],
    location: 'Southwestern Bolivia',
    slug: 'mycel-project',
  },
] as const;

const NEWS = [
  {
    date: 'February 2025',
    title: 'Mycelium Minerals Submits 10th Annual Environmental Monitoring Report for Los Clavillos',
    excerpt:
      "The Company's Los Clavillos project maintains its DIA environmental permit in good standing, with 2025 water and air quality monitoring completed by PetroLab and reported to Bolivia's Ministry of Mining.",
    slug: 'ima-2025',
  },
  {
    date: 'January 2025',
    title: 'Diamond Drill Program Commences at Los Clavillos, Santa Cruz',
    excerpt:
      'The 2025 exploration program at Los Clavillos is underway, with an Ingetrol Explorer diamond drill rig targeting reserve definition in the open-pit zone alongside soil prospection and trenching campaigns.',
    slug: 'los-clavillos-drilling-2025',
  },
  {
    date: 'December 2024',
    title: 'Work Plans Filed for Cerrito XXI and Cerrito XXII Gold Concessions',
    excerpt:
      '5-year exploration programs totaling approximately $738,000 USD have been submitted for the two new concessions in Concepción, Ñuflo de Chávez — including 1,500 m and 2,000 m diamond drill programs respectively.',
    slug: 'cerrito-work-plans',
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
      <ProblemSolutionSection t={t} />
      <ProjectsGrid t={t} />
      <LatestNews t={t} />
      <BoliviaPanel t={t} />
      <ESGTeaser t={t} />
      <GalleryTeaser t={t} />
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
    <section className="relative flex flex-col items-center justify-center px-6 py-28 sm:py-24 sm:min-h-[85vh] border-b border-obsidian text-center overflow-hidden bg-obsidian">
      {/* Background video — place your file at /public/video/hero.mp4 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-obsidian/55" />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center text-center">
        <FadeInView>
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-6">
            {t('irBandTicker')} · Gold &amp; Silver · Bolivia
          </p>
        </FadeInView>
        <FadeInView delay={0.1}>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-inter font-bold text-white max-w-5xl leading-tight">
            {t('heroTitle')}
          </h1>
        </FadeInView>
        <FadeInView delay={0.2}>
          <p className="mt-6 text-lg text-white/70 max-w-2xl">{t('heroSubtitle')}</p>
        </FadeInView>
        <FadeInView delay={0.3}>
          <div className="mt-10 flex gap-4 flex-wrap justify-center">
            <ButtonLink href="/projects" variant="hero" size="lg">
              {t('ctaPrimary')}
            </ButtonLink>
            <ButtonLink href="/investor-relations" variant="hero" size="lg">
              {t('ctaSecondary')}
            </ButtonLink>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 2. Metrics Bar — dark background, large gold numbers
// ---------------------------------------------------------------------------

function MetricsBar({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  const metrics = [
    { value: t('metric1Value'), label: t('metric1Label') },
    { value: t('metric2Value'), label: t('metric2Label') },
    { value: t('metric3Value'), label: t('metric3Label') },
    { value: t('metric4Value'), label: t('metric4Label') },
  ];

  return (
    <section className="bg-obsidian border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <FadeInView>
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-white/60 mb-10 text-center">
            {t('metricsEyebrow')}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={[
                  'flex flex-col items-center py-8 px-4 border-white/10',
                  // 1-col: bottom border between items
                  i < 3 ? 'border-b' : '',
                  // sm 2-col: right border on left column, bottom border between rows only
                  i % 2 === 0 ? 'sm:border-r' : 'sm:border-r-0',
                  i < 2 ? 'sm:border-b' : 'sm:border-b-0',
                  // xl 4-col: right border on all but last, no bottom border
                  i < 3 ? 'xl:border-r xl:border-b-0' : 'xl:border-r-0 xl:border-b-0',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span className="font-inter font-bold text-5xl text-gold leading-none tabular-nums whitespace-nowrap">
                  {metric.value}
                </span>
                <span className="mt-4 text-sm font-mono font-bold uppercase tracking-widest text-white/60">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 3. Problem / Solution — full-bleed split panel
// ---------------------------------------------------------------------------

function ProblemSolutionSection({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  return (
    <section className="border-b border-obsidian overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[480px]">
        {/* Left: The Problem */}
        <FadeInView
          direction="left"
          className="bg-white px-8 md:px-16 py-20 flex flex-col justify-center border-r border-obsidian/10"
        >
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-obsidian/60 mb-8">
            {t('problemEyebrow')}
          </p>
          <div className="mb-6">
            <span className="font-inter font-bold text-5xl sm:text-7xl md:text-[9rem] text-obsidian leading-none block">
              {t('problemStat')}
            </span>
            <p className="mt-3 text-sm text-obsidian/50 max-w-xs leading-relaxed">
              {t('problemStatLabel')}
            </p>
          </div>
          <p className="text-base text-obsidian/70 max-w-md leading-relaxed">
            {t('problemBody')}
          </p>
        </FadeInView>

        {/* Right: The Solution */}
        <FadeInView
          direction="right"
          className="bg-obsidian px-8 md:px-16 py-20 flex flex-col justify-center"
        >
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-8">
            {t('solutionEyebrow')}
          </p>
          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-6xl text-white leading-tight mb-6">
            {t('solutionTitle')}
          </h2>
          <p className="text-base text-white/60 max-w-md leading-relaxed mb-10">
            {t('solutionBody')}
          </p>
          <Link
            href="/projects"
            className="text-sm font-mono font-medium text-gold hover:text-white transition-colors"
          >
            {t('solutionCta')} →
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 4. Projects Grid
// ---------------------------------------------------------------------------

function ProjectsGrid({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  // TODO: replace PROJECTS with await sanityFetch(projectsQuery) once Sanity is configured

  return (
    <section className="bg-white border-b border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section header */}
        <FadeInView>
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <div>
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian">
                {t('projectsSectionTitle')}
              </h2>
              <p className="mt-2 text-sm text-obsidian/60">{t('projectsSectionSubtitle')}</p>
            </div>
            <Link
              href="/projects"
              className="hidden sm:inline text-sm font-mono font-medium text-obsidian hover:text-gold transition-colors whitespace-nowrap ml-8"
            >
              {t('projectsViewAll')} →
            </Link>
          </div>
        </FadeInView>

        {/* 3-column project cards */}
        <FadeInView delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-obsidian rounded-xl overflow-hidden">
            {PROJECTS.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="border-b border-r border-obsidian/20 bg-white p-6 flex flex-col gap-4 group hover:bg-offwhite transition-colors"
              >
                <span className="text-xs font-mono text-obsidian/65 uppercase tracking-widest">
                  {project.stage} · {project.location}
                </span>
                <h3 className="font-inter font-bold text-lg text-obsidian leading-tight group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 flex-1">
                  {project.commodities.map((c) => (
                    <Badge key={c} label={c} variant="commodity" />
                  ))}
                </div>
                <span className="text-xs font-mono text-obsidian/65 group-hover:text-gold transition-colors mt-auto pt-4 border-t border-obsidian/10 inline-block">
                  {t('projectsViewAll')} →
                </span>
              </Link>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 5. Latest News
// ---------------------------------------------------------------------------

function LatestNews({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  // TODO: replace NEWS with await sanityFetch(pressReleasesQuery) once Sanity is configured

  return (
    <section className="bg-offwhite border-b border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Section header */}
        <FadeInView>
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <div>
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian">
                {t('newsSectionTitle')}
              </h2>
              <p className="mt-2 text-sm text-obsidian/60">{t('newsSectionSubtitle')}</p>
            </div>
            <Link
              href="/news"
              className="hidden sm:inline text-sm font-mono font-medium text-obsidian hover:text-gold transition-colors whitespace-nowrap ml-8"
            >
              {t('newsViewAll')} →
            </Link>
          </div>
        </FadeInView>

        {/* 3-column news cards */}
        <FadeInView delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-obsidian rounded-xl overflow-hidden">
            {NEWS.map((article) => (
              <article
                key={article.slug}
                className="border-b border-r border-obsidian/20 bg-white p-6 flex flex-col gap-4 group hover:bg-offwhite transition-colors"
              >
                <time className="text-xs font-mono text-obsidian/65 uppercase tracking-widest">
                  {article.date}
                </time>
                <h3 className="font-inter font-bold text-lg text-obsidian leading-tight group-hover:text-gold transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-obsidian/70 leading-relaxed flex-1">{article.excerpt}</p>
                <Link
                  href={`/news/${article.slug}`}
                  className="text-xs font-mono text-obsidian/65 group-hover:text-gold transition-colors mt-auto pt-4 border-t border-obsidian/10 inline-block"
                >
                  {t('newsReadMore')} →
                </Link>
              </article>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 6. Bolivia Panel — geographic footprint stats
// ---------------------------------------------------------------------------

function BoliviaPanel({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  const stats = [
    { value: t('boliviaStat1Value'), label: t('boliviaStat1Label') },
    { value: t('boliviaStat2Value'), label: t('boliviaStat2Label') },
    { value: t('boliviaStat3Value'), label: t('boliviaStat3Label') },
    { value: t('boliviaStat4Value'), label: t('boliviaStat4Label') },
  ];

  return (
    <section className="bg-white border-b border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <FadeInView>
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-4">
            {t('boliviaEyebrow')}
          </p>
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian max-w-xl leading-tight mb-14">
            {t('boliviaTitle')}
          </h2>
        </FadeInView>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-obsidian rounded-xl overflow-hidden">
          {stats.map((stat, i) => (
            <FadeInView
              key={stat.label}
              delay={i * 0.09}
              className={`flex flex-col p-8 bg-offwhite ${
                i < stats.length - 1 ? 'border-r border-obsidian/20' : ''
              }`}
            >
              <span className="font-mono font-bold text-3xl sm:text-4xl md:text-5xl text-obsidian tabular-nums leading-none">
                {stat.value}
              </span>
              <span className="mt-4 text-xs font-mono uppercase tracking-widest text-obsidian/65 leading-relaxed">
                {stat.label}
              </span>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 7. ESG Teaser
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
        <FadeInView>
          <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-6">
            Sustainability &amp; ESG
          </p>
          <h2 className="font-inter font-bold text-4xl md:text-5xl text-white max-w-3xl leading-tight">
            {t('esgSectionTitle')}
          </h2>
          <p className="mt-6 text-base text-white/60 max-w-2xl leading-relaxed">
            {t('esgSectionSubtitle')}
          </p>
        </FadeInView>

        {/* Pillar stats */}
        <FadeInView delay={0.15}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10 rounded-xl overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center py-10 px-8 ${
                  i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/10' : ''
                }`}
              >
                <span className="font-inter font-bold text-5xl text-gold">{stat.value}</span>
                <span className="mt-3 text-xs font-mono uppercase tracking-widest text-white/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </FadeInView>

        <FadeInView delay={0.25}>
          <div className="mt-10">
            <Link
              href="/sustainability"
              className="text-sm font-mono font-medium text-gold hover:text-white transition-colors"
            >
              {t('esgCta')} →
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 8. Gallery Teaser — 6-photo preview strip
// ---------------------------------------------------------------------------

const GALLERY_PREVIEW = [1, 8, 15, 22, 34, 47].map((n) => ({
  src: `/images/gallery/ops-${String(n).padStart(2, '0')}.jpg`,
  alt: `Mycelium Minerals field operations — photo ${n}`,
}));

function GalleryTeaser({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  return (
    <section className="bg-offwhite border-b border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <FadeInView>
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <div>
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian">
                {t('galleryTitle')}
              </h2>
              <p className="mt-2 text-sm text-obsidian/60">{t('gallerySubtitle')}</p>
            </div>
            <Link
              href="/gallery"
              className="hidden sm:inline text-sm font-mono font-medium text-obsidian hover:text-gold transition-colors whitespace-nowrap ml-8"
            >
              {t('galleryViewAll')} →
            </Link>
          </div>
        </FadeInView>
        <FadeInView delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-obsidian rounded-xl overflow-hidden">
            {GALLERY_PREVIEW.map((photo, i) => (
              <Link
                key={photo.src}
                href="/gallery"
                className={`relative aspect-square overflow-hidden group ${i < GALLERY_PREVIEW.length - 1 ? 'border-r border-obsidian/20' : ''}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 17vw"
                />
                <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/20 transition-colors" />
              </Link>
            ))}
          </div>
        </FadeInView>
        <FadeInView delay={0.15}>
          <div className="mt-6 flex sm:hidden justify-start">
            <Link
              href="/gallery"
              className="text-sm font-mono font-medium text-obsidian hover:text-gold transition-colors"
            >
              {t('galleryViewAll')} →
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// 9. IR Band
// ---------------------------------------------------------------------------

function IRBand({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  return (
    <section className="bg-gold border-y border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Company name */}
        <div className="flex items-baseline gap-4">
          <span className="font-inter font-bold text-3xl text-obsidian">{t('irBandTicker')}</span>
        </div>

        {/* Quick-access links */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/investor-relations#annual-report"
            className="px-5 py-2.5 border border-obsidian text-obsidian text-sm font-inter font-semibold rounded-lg hover:bg-obsidian hover:text-white transition-colors"
          >
            {t('irBandAnnualReport')}
          </Link>
          <Link
            href="/investor-relations#presentation"
            className="px-5 py-2.5 border border-obsidian text-obsidian text-sm font-inter font-semibold rounded-lg hover:bg-obsidian hover:text-white transition-colors"
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
// 9. Contact CTA Band
// ---------------------------------------------------------------------------

function ContactCTABand({ t }: { t: ReturnType<typeof useTranslations<'home'>> }) {
  return (
    <section className="bg-white border-t border-obsidian">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: headline + subtext */}
        <FadeInView direction="left" className="max-w-lg">
          <h2 className="font-inter font-bold text-3xl md:text-4xl text-obsidian leading-tight">
            {t('contactBandTitle')}
          </h2>
          <p className="mt-3 text-sm text-obsidian/60 leading-relaxed">
            {t('contactBandSubtitle')}
          </p>
        </FadeInView>

        {/* Right: email + CTA */}
        <FadeInView direction="right" className="flex flex-col items-start md:items-end gap-4">
          <a
            href={`mailto:${t('contactBandEmail')}`}
            className="font-mono text-base text-obsidian hover:text-gold transition-colors"
          >
            {t('contactBandEmail')}
          </a>
          <ButtonLink href="/contact" variant="secondary" size="md">
            {t('contactBandCta')}
          </ButtonLink>
        </FadeInView>
      </div>
    </section>
  );
}
