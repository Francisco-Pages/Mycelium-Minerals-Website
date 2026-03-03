import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import Badge from '@/components/ui/Badge';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  return <ProjectDetailContent slug={slug} />;
}

// ---------------------------------------------------------------------------
// Placeholder data — TODO: replace with await sanityFetch(projectBySlugQuery, { slug })
// ---------------------------------------------------------------------------

interface ProjectData {
  name: string;
  stage: string;
  commodities: string[];
  location: string;
  department: string;
  stats: {
    production: string;
    resources: string;
    area: string;
    since: string;
  };
  description: string[];
  highlights: string[];
  documents: string[];
}

const PROJECT_DATA: Record<string, ProjectData> = {
  'cerro-blanco': {
    name: 'Cerro Blanco',
    stage: 'Production',
    commodities: ['Gold', 'Silver'],
    location: 'Oruro Department, Bolivia',
    department: 'Oruro',
    stats: {
      production: '~28,000 oz Au/yr',
      resources: 'N/A — producing asset',
      area: '320 km²',
      since: '2011',
    },
    description: [
      "Cerro Blanco is Mycelium Minerals' flagship gold-silver operation, located in the Oruro Department of Bolivia at an elevation of approximately 4,200 metres above sea level. The mine has been in continuous operation since 2011, leveraging conventional open-pit and underground mining methods.",
      'The property hosts a high-grade gold-silver skarn system. Recent mill upgrades completed in 2023 increased throughput capacity by 22%, directly contributing to the record quarterly production achieved in Q4 2024.',
      'Cerro Blanco benefits from excellent infrastructure, including paved road access, grid power, and a dedicated water management system developed in partnership with local communities.',
    ],
    highlights: [
      'Flagship producing asset since 2011',
      'High-grade Au-Ag skarn system',
      '22% mill throughput increase in 2023',
      'Record Q4 2024 output of ~9,000 oz Au',
      'Fully permitted for current production levels',
      'Community partnership agreements in place',
    ],
    documents: [
      'NI 43-101 Technical Report — Cerro Blanco (October 2023)',
      'Environmental Impact Assessment (2022 Update)',
      'Mine Plan Summary — FY2025',
    ],
  },
  'san-cristobal-norte': {
    name: 'San Cristóbal Norte',
    stage: 'Development',
    commodities: ['Silver'],
    location: 'Potosí Department, Bolivia',
    department: 'Potosí',
    stats: {
      production: 'Est. production 2027',
      resources: '~12M oz Ag (Indicated)',
      area: '180 km²',
      since: 'Development stage',
    },
    description: [
      "San Cristóbal Norte is an advanced-stage silver development project situated in the prolific Potosí silver belt, one of the world's most historically significant silver-producing regions. The project hosts an NI 43-101 compliant Indicated resource of approximately 12 million ounces of silver.",
      'A $45M credit facility closed in January 2025 provides the capital required to advance the project through pre-feasibility, environmental permitting, and initial construction through 2026, with first production targeted for 2027.',
      'The deposit benefits from proximity to existing Bolivian silver processing infrastructure and strong community support secured through early engagement since project acquisition in 2021.',
    ],
    highlights: [
      '~12M oz Ag Indicated resource (NI 43-101)',
      '$45M development facility closed January 2025',
      'Pre-feasibility study underway',
      'First production targeted for 2027',
      'Located in the historic Potosí silver belt',
      'Strong community relations established',
    ],
    documents: [
      'NI 43-101 Technical Report — San Cristóbal Norte (February 2024)',
      'Pre-Feasibility Study Scoping Report (2024)',
      'Environmental Baseline Assessment',
    ],
  },
  'rio-mulatos': {
    name: 'Río Mulatos',
    stage: 'Production',
    commodities: ['Gold'],
    location: 'La Paz Department, Bolivia',
    department: 'La Paz',
    stats: {
      production: '~18,500 oz Au/yr',
      resources: 'N/A — producing asset',
      area: '145 km²',
      since: '2016',
    },
    description: [
      "Río Mulatos is a producing gold mine in the La Paz Department of Bolivia, operated by Mycelium Minerals since 2016. The operation uses conventional open-pit mining with heap-leach gold recovery, a method well-suited to the deposit's lower-grade but bulk-tonnage nature.",
      "The mine contributed approximately 18,500 ounces of gold to Mycelium's total 2024 production. Ongoing exploration drilling on the property has identified extensions to the main mineralized zone, which management expects to support a resource update in H2 2025.",
      'Río Mulatos operates with a low-water-intensity processing circuit and has implemented a progressive rehabilitation program across its three completed mining phases.',
    ],
    highlights: [
      'Continuous production since 2016',
      'Heap-leach gold recovery operation',
      'Resource extension drilling ongoing',
      'Updated resource estimate expected H2 2025',
      'Low-water-intensity processing',
      'Progressive rehabilitation underway',
    ],
    documents: [
      'NI 43-101 Technical Report — Río Mulatos (March 2022)',
      'Exploration Update — Drilling Results Q3 2024',
      'Environmental Compliance Report (2024)',
    ],
  },
  'colquiri-sur': {
    name: 'Colquiri Sur',
    stage: 'Exploration',
    commodities: ['Silver', 'Zinc'],
    location: 'Cochabamba Department, Bolivia',
    department: 'Cochabamba',
    stats: {
      production: 'Early exploration stage',
      resources: 'Resource estimate pending',
      area: '95 km²',
      since: 'Acquisition 2022',
    },
    description: [
      "Colquiri Sur is an early-stage exploration property in the Cochabamba Department of Bolivia, acquired by Mycelium Minerals in 2022. The property is located adjacent to the historically significant Colquiri tin-zinc district and is being evaluated for silver-zinc polymetallic mineralization.",
      "The Company completed an initial airborne geophysics survey over the property in 2023, identifying multiple high-priority drill targets. A first-pass drill program of approximately 2,000 metres is planned for 2025, pending final permit approvals.",
      "Colquiri Sur represents Mycelium's long-range pipeline and is not expected to contribute to production during the current five-year operating plan.",
    ],
    highlights: [
      'Acquired in 2022 for silver-zinc potential',
      'Adjacent to Colquiri tin-zinc district',
      'Airborne geophysics completed (2023)',
      'Multiple high-priority drill targets identified',
      '2,000 m drill program planned for 2025',
      'Early-stage exploration — long-range pipeline',
    ],
    documents: [
      'Property Acquisition Report (2022)',
      'Airborne Geophysics Survey Results (2023)',
      'Exploration Program Proposal — 2025',
    ],
  },
};

// ---------------------------------------------------------------------------
// Page composition
// ---------------------------------------------------------------------------

function ProjectDetailContent({ slug }: { slug: string }) {
  const t = useTranslations('projects');
  const project = PROJECT_DATA[slug];

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24">
        <p className="font-mono text-sm text-obsidian/50">Project not found.</p>
        <Link
          href="/projects"
          className="mt-4 inline-block text-sm font-mono text-obsidian hover:text-gold transition-colors"
        >
          {t('backToProjects')}
        </Link>
      </div>
    );
  }

  const statsRows = [
    { label: t('annualProduction'), value: project.stats.production },
    { label: t('resources'), value: project.stats.resources },
    { label: t('projectArea'), value: project.stats.area },
    { label: t('operatingSince'), value: project.stats.since },
  ];

  return (
    <div>
      {/* Project Hero */}
      <section className="bg-offwhite border-b border-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/projects"
            className="text-xs font-mono text-obsidian/50 hover:text-gold transition-colors uppercase tracking-widest"
          >
            {t('backToProjects')}
          </Link>
          <div className="mt-6 flex flex-wrap gap-2 mb-4">
            <Badge label={project.stage} variant="stage" />
            {project.commodities.map((c) => (
              <Badge key={c} label={c} variant="commodity" />
            ))}
          </div>
          <h1 className="font-clash font-bold text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
            {project.name}
          </h1>
          <p className="mt-4 text-xs font-mono uppercase tracking-widest text-obsidian/50">
            {project.location}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-mono uppercase tracking-widest text-obsidian/40 mb-8 text-center">
            {t('keyStats')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {statsRows.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center py-6 px-4 ${i < statsRows.length - 1 ? 'border-r border-obsidian/20' : ''}`}
              >
                <span className="font-clash font-bold text-2xl md:text-3xl text-obsidian text-center leading-tight">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-mono uppercase tracking-widest text-obsidian/50 text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + Highlights */}
      <section className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="font-clash font-bold text-3xl text-obsidian mb-6">
                {t('projectOverview')}
              </h2>
              <div className="flex flex-col gap-4">
                {project.description.map((para, i) => (
                  <p key={i} className="text-sm text-obsidian/70 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            {/* Key Highlights */}
            <div>
              <h2 className="font-clash font-bold text-3xl text-obsidian mb-6">
                {t('keyHighlights')}
              </h2>
              <ul className="flex flex-col gap-0 border border-obsidian">
                {project.highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 px-5 py-4 border-b border-obsidian/20 last:border-b-0 bg-white"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 bg-gold flex-shrink-0" />
                    <span className="text-sm text-obsidian leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="border border-obsidian h-64 flex items-center justify-center">
            <p className="font-mono text-xs text-obsidian/30 uppercase tracking-widest">
              Project Map — {project.department} Department · Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Documents Table */}
      <section className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
              {t('documents')}
            </h2>
          </div>
          <div className="border border-obsidian">
            {project.documents.map((doc, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-6 py-5 border-b border-obsidian/20 last:border-b-0 bg-white hover:bg-offwhite transition-colors group"
              >
                <span className="text-sm font-inter text-obsidian">{doc}</span>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 border border-obsidian/20 group-hover:border-obsidian text-xs font-mono text-obsidian/50 group-hover:text-obsidian transition-colors"
                >
                  {t('downloadReport')} ↓
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
