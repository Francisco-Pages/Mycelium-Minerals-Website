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
  'los-clavillos': {
    name: 'Los Clavillos',
    stage: 'Exploration',
    commodities: ['Gold'],
    location: 'Cantón San Ramón, Ñuflo de Chávez, Santa Cruz, Bolivia',
    department: 'Santa Cruz',
    stats: {
      production: 'Active 2025 Program',
      resources: 'Reserve determination drilling',
      area: '275 ha (11 cuadrículas)',
      since: '30-Year Contract (2019)',
    },
    description: [
      "Los Clavillos is Mycelium Minerals' most advanced exploration project — a 275-hectare (11 cuadrículas) concession in Cantón San Ramón, Ñuflo de Chávez Province, Santa Cruz Department, Bolivia. The property is operated by Crown Mining Bolivia S.R.L. under a 30-year contract approved by AJAM (No. AJAM/DDSC/CAM/0010/2019, February 18, 2019), with continuous patent payments and active exploration dating back to 2013. Access is 180 km on paved highway from Santa Cruz city plus 5.5 km of gravel road.",
      'The 2025 work program included soil prospection in the northern zone, tailings sampling using both manual methods and a CAT 320D2L excavator, trenching in the western and southern zones, and a diamond drilling program using an Ingetrol Explorer rig aimed at defining mineral reserves in the open-pit zone. The program is staffed by one resident geologist, a dedicated drill crew, three specialist consultant groups, and 10 field laborers — a team that recorded zero accidents in 2025.',
      'Environmental compliance is fully current. A Declaratoria de Impacto Ambiental (DIA No. 071103/02/DIA/5936/15) was obtained in February 2015, and annual water and air quality monitoring is conducted by PetroLab. The 10th Annual Environmental Monitoring Report (IMA 2024–2025) has been submitted to Bolivia\'s Ministry of Mining, Ministry of Environment, and the Santa Cruz Gobernación.',
    ],
    highlights: [
      '275 ha under active 30-year AJAM contract (approved 2019)',
      'Most advanced project — drilling for reserve definition in 2025',
      'Continuous patent payments and field operations since 2013',
      'Full environmental permitting (DIA 2015) — 10 annual IMA reports filed',
      '2025: Soil prospection, tailings sampling, trenching, diamond drilling',
      'Zero accidents recorded in 2025',
    ],
    documents: [
      'Informe Técnico — Los Clavillos (Período 2025)',
      'Declaratoria de Impacto Ambiental (DIA No. 071103/02/DIA/5936/15)',
      'Informe de Monitoreo Ambiental IMA 2024–2025',
    ],
  },
  'cerrito-xxi': {
    name: 'Cerrito XXI',
    stage: 'Exploration',
    commodities: ['Gold'],
    location: 'Concepción, Ñuflo de Chávez, Santa Cruz, Bolivia',
    department: 'Santa Cruz',
    stats: {
      production: '~$365,649 USD Budget',
      resources: '1,500 m Diamond Drill Program',
      area: '1,000 ha (40 cuadrículas)',
      since: 'LPE Application Pending',
    },
    description: [
      'Cerrito XXI is a 1,000-hectare (40 cuadrículas) gold exploration concession held by Mycelium Minerals Bolivia MMB S.R.L. in the municipality of Concepción, Ñuflo de Chávez Province, Santa Cruz Department, Bolivia (unique code: 2058709). The property sits on the Brazilian Precambrian Shield within the Chiquitanía geological domain — a prolific terrain that hosts orogenic gold systems across the region. An LPE (Licencia de Prospección y Exploración) application is currently pending with Bolivian authorities.',
      'The bedrock geology includes Precambrian metamorphic rocks of the Complejo Metamórfico de Concepción (gneisses and migmatites), intruded by granitic bodies of the Granitoides de Refugio, and locally overlain by the Grupo Tajibos sedimentary sequence (Formación Psamita de Zapocoz and Formación Esquisto de Laguna). Gold mineralization is interpreted as orogenic style, controlled by regional shear zones, quartz veins, and hydrothermal breccias — the same gold-forming environment that hosts significant deposits elsewhere in the Brazilian Shield.',
      'The approved 5-year exploration program totals approximately $365,649 USD and proceeds in three phases: pre-field ASTER satellite imagery analysis, a systematic field campaign including 20-point soil sampling and geological mapping, and a 1,500-metre Ingetrol diamond drill program with approximately 2,700 laboratory analyses. The property is accessed via a 5-hour drive from Santa Cruz city through Pailón, San Julián, San Ramón, and San Javier (282 km).',
    ],
    highlights: [
      '1,000 ha (40 cuadrículas) gold exploration concession — code 2058709',
      'Brazilian Shield / Chiquitanía domain — proven orogenic gold setting',
      'Host rocks: Complejo Metamórfico de Concepción (gneisses, migmatites, granites)',
      '1,500-metre Ingetrol diamond drill program planned',
      '5-year exploration budget: ~$365,649 USD',
      'LPE application pending with Bolivian authorities',
    ],
    documents: [
      'Plan de Trabajo — Cerrito XXI (Mycelium Minerals Bolivia MMB S.R.L.)',
      'ASTER Satellite Imagery Analysis & Target Definition',
      'Exploration Program Budget Summary — 5-Year Plan',
    ],
  },
  'cerrito-xxii': {
    name: 'Cerrito XXII',
    stage: 'Exploration',
    commodities: ['Gold'],
    location: 'Concepción, Ñuflo de Chávez, Santa Cruz, Bolivia',
    department: 'Santa Cruz',
    stats: {
      production: '~$372,709 USD Budget',
      resources: '2,000 m Diamond Drill Program',
      area: '1,575 ha (63 cuadrículas)',
      since: 'LPE Application Pending',
    },
    description: [
      'Cerrito XXII is a 1,575-hectare (63 cuadrículas) gold exploration concession held by Mycelium Minerals Bolivia MMB S.R.L. in the municipality of Concepción, Ñuflo de Chávez Province, Santa Cruz Department, Bolivia (unique code: 2058753) — the largest concession in the portfolio. Located immediately northwest of Cerrito XXI, it shares the same favorable Brazilian Shield geological setting and benefits from logistical and operational synergies with the sister concession. An LPE application is pending.',
      'The bedrock geology of Cerrito XXII is more complex than its neighbor, comprising the Complejo Granulítico Lomas Maneches (Transamazónico cycle), the Complejo Gnéisico Chiquitanía, and the Supergrupo Esquistos San Ignacio. Of particular significance is a northwest-southeast trending brechiated quartz vein of Cretaceous age, approximately 4 km in length, intruded as Granitoide San Andrés — a direct structural target for orogenic gold. Quaternary alluvial deposits across the lower topography may also host secondary placer gold potential.',
      'The 5-year exploration program totals approximately $372,709 USD, encompassing three phases: ASTER satellite pre-field analysis, systematic soil sampling at 20 priority points with geological mapping across the full 1,575 ha, and a 2,000-metre diamond drill program with approximately 3,200 laboratory analyses. The program is designed to mirror best practices at Cerrito XXI, maximizing efficiency across both concessions with shared equipment and personnel.',
    ],
    highlights: [
      '1,575 ha (63 cuadrículas) — largest concession in the portfolio, code 2058753',
      'Cretaceous NW-SE brechiated quartz vein (~4 km) — direct gold drill target',
      'Orogenic gold + secondary placer potential in Quaternary alluvials',
      '2,000-metre diamond drill program planned (~3,200 lab samples)',
      '5-year exploration budget: ~$372,709 USD',
      'Operational synergies with adjacent Cerrito XXI concession',
    ],
    documents: [
      'Plan de Trabajo — Cerrito XXII (Mycelium Minerals Bolivia MMB S.R.L.)',
      'Geological Mapping & Priority Target Definition',
      'Exploration Program Budget Summary — 5-Year Plan',
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
          <h1 className="font-clash font-bold text-4xl sm:text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
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
