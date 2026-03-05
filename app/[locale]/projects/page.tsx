import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Card from '@/components/ui/Card';

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProjectsPageContent />;
}

// ---------------------------------------------------------------------------
// Placeholder data — TODO: replace with await sanityFetch(projectsQuery)
// ---------------------------------------------------------------------------

const PROJECTS = [
  {
    title: 'Los Clavillos',
    stage: 'Exploration',
    commodities: ['Gold'],
    location: 'Ñuflo de Chávez, Santa Cruz',
    slug: 'los-clavillos',
  },
  {
    title: 'Cerrito XXI',
    stage: 'Exploration',
    commodities: ['Gold'],
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
] as const;

// ---------------------------------------------------------------------------
// Page composition
// ---------------------------------------------------------------------------

function ProjectsPageContent() {
  const t = useTranslations('projects');

  return (
    <div>
      {/* Hero */}
      <section className="bg-offwhite border-b border-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
            TSX: MYC · Bolivia
          </p>
          <h1 className="font-clash font-bold text-4xl sm:text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
            {t('title')}
          </h1>
          <p className="mt-4 text-base text-obsidian/70 max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
          <p className="mt-6 font-mono text-sm text-obsidian/50 uppercase tracking-widest">
            {t('projectCount')}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
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

      {/* Map Teaser */}
      <section className="bg-obsidian border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-6">
            Bolivia
          </p>
          <h2 className="font-clash font-bold text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight">
            {t('mapTeaserTitle')}
          </h2>
          <p className="mt-4 text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
            {t('mapTeaserSubtitle')}
          </p>
          <div className="mt-14 border border-white/20 h-72 flex items-center justify-center">
            <p className="font-mono text-xs text-white/30 uppercase tracking-widest">
              {t('mapComingSoon')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
