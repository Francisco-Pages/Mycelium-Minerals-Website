import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Badge from '@/components/ui/Badge';
import { FadeInView } from '@/components/ui/FadeInView';

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
          <FadeInView>
            <p className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
              Gold · Silver · Bolivia
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
            <p className="mt-6 font-mono text-sm text-obsidian/50 uppercase tracking-widest">
              {t('projectCount')}
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
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
                    View project →
                  </span>
                </Link>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* New Concessions Banner */}
      <section className="bg-gold border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-obsidian/60 mb-2">
              {t('newConcessionEyebrow')}
            </p>
            <h3 className="font-inter font-bold text-2xl md:text-3xl text-obsidian leading-tight">
              {t('newConcessionTitle')}
            </h3>
            <p className="mt-2 text-sm text-obsidian/70 max-w-2xl leading-relaxed">
              {t('newConcessionDesc')}
            </p>
          </div>
          <div className="flex-shrink-0 text-right">
            <p className="font-mono font-bold text-4xl text-obsidian">25,950 ha</p>
            <p className="text-xs font-mono uppercase tracking-widest text-obsidian/60 mt-1">
              {t('newConcessionAreaLabel')}
            </p>
          </div>
        </div>
      </section>

      {/* Map Teaser */}
      <section className="bg-obsidian border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <FadeInView>
            <p className="text-xs font-mono uppercase tracking-widest text-gold mb-6">
              Bolivia
            </p>
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-white max-w-3xl mx-auto leading-tight">
              {t('mapTeaserTitle')}
            </h2>
            <p className="mt-4 text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
              {t('mapTeaserSubtitle')}
            </p>
          </FadeInView>
          <FadeInView delay={0.15}>
            <div className="mt-14 border border-white/20 h-72 flex items-center justify-center">
              <p className="font-mono text-xs font-medium text-white/60 uppercase tracking-widest">
                {t('mapComingSoon')}
              </p>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
