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

interface DrillHighlight {
  hole: string;
  grade: string;
  label: string;
  peak?: boolean;
}

interface DrillCampaign {
  period: string;
  holes: string;
  metres: string;
  note: string;
}

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
  statLabels?: {
    production?: string;
    resources?: string;
    area?: string;
    since?: string;
  };
  description: string[];
  highlights: string[];
  documents: string[];
  primaryDocument?: string;
  drillHighlights?: DrillHighlight[];
  drillCampaigns?: DrillCampaign[];
}

const PROJECT_DATA: Record<string, ProjectData> = {
  'los-clavillos': {
    name: 'Los Clavillos',
    stage: 'Exploration',
    commodities: ['Gold', 'Silver', 'Copper', 'Zinc', 'Lead'],
    location: 'Cantón San Ramón, Ñuflo de Chávez, Santa Cruz, Bolivia',
    department: 'Santa Cruz',
    stats: {
      production: 'Up to 12.95 g/t Au',
      resources: '3,129m Drilled (26 Holes)',
      area: '275 ha (11 cuadrículas)',
      since: '30-Year Contract (2019)',
    },
    statLabels: {
      production: 'Peak Gold Grade',
      resources: 'Total Historical Drilling',
      area: 'Project Area',
      since: 'Contract Status',
    },
    description: [
      "Los Clavillos is Mycelium Minerals' most advanced exploration project — a 275-hectare (11 cuadrículas) concession in Cantón San Ramón, Ñuflo de Chávez Province, Santa Cruz Department, Bolivia. The property is operated by Crown Mining Bolivia S.R.L. under a 30-year contract approved by AJAM (No. AJAM/DDSC/CAM/0010/2019, February 18, 2019), with continuous patent payments and active exploration dating back to 2013. Access is 180 km on paved highway from Santa Cruz city plus 5.5 km of gravel road.",
      "Historical diamond drilling has confirmed a gold-bearing orogenic/mesothermal system hosted in greenstone, biotite schist, and muscovite schist, with mineralization controlled by northwest-southeast trending carbonate-quartz vein arrays dipping 45–90°. Three drilling campaigns have been completed: 2013 (13 holes, 1,371m), 2020–2021 (13 holes, 1,758m), and the ongoing 2025 program — totalling over 3,129 metres and 2,400+ assay samples analyzed by ALS Peru. Peak gold grades include intercepts of 12.95 g/t Au and 4.04 g/t Au in the 2020–2021 campaign, with multiple holes returning 1–4 g/t zones. Polymetallic assay suites confirm the presence of silver, copper, zinc, and lead alongside gold.",
      'The 2025 work program targets reserve definition in the open-pit zone using an Ingetrol Explorer rig, supplemented by soil prospection in the north zone, tailings re-processing evaluation, and trenching in the southwest and south. The program is staffed by one resident geologist, a dedicated drill crew, three specialist consultant groups, and 10 field laborers — a team that recorded zero accidents in 2025.',
      'Environmental compliance is fully current. A Declaratoria de Impacto Ambiental (DIA No. 071103/02/DIA/5936/15) was obtained in February 2015, and annual water and air quality monitoring is conducted by PetroLab. The 10th Annual Environmental Monitoring Report (IMA 2024–2025) has been submitted to Bolivia\'s Ministry of Mining, Ministry of Environment, and the Santa Cruz Gobernación.',
    ],
    highlights: [
      'Peak intercept: 12.95 g/t Au (CMB-017-2020) — multiple 1–4 g/t zones',
      'Polymetallic deposit: Au · Ag · Cu · Zn · Pb confirmed by ALS Peru assays',
      'Orogenic/mesothermal gold system — NW-SE carbonate-quartz vein arrays, 45–90° dip',
      '3,129m drilled across 26 holes (2013, 2020–2021, 2025 ongoing)',
      '275 ha under active 30-year AJAM contract — continuous operations since 2013',
      '2025: Reserve definition drilling + tailings re-processing evaluation',
      'Full environmental permitting (DIA 2015) — 10 annual IMA reports filed',
      'Zero accidents recorded in 2025',
    ],
    documents: [
      'Informe Técnico — Los Clavillos (Período 2025)',
      'Crown Mining Bolivia — Technical Report (Drill Results 2020–2021)',
      'Declaratoria de Impacto Ambiental (DIA No. 071103/02/DIA/5936/15)',
      'Informe de Monitoreo Ambiental IMA 2024–2025',
    ],
    primaryDocument: 'Informe Técnico — Los Clavillos (Período 2025)',
    drillHighlights: [
      { hole: 'CMB-017-2020', grade: '12.95 g/t Au', label: 'Peak Intercept', peak: true },
      { hole: '2020–2021 Campaign', grade: '4.04 g/t Au', label: 'Confirmed Intercept' },
      { hole: 'Multiple Holes', grade: '1–4 g/t Au', label: 'Consistent Zones' },
    ],
    drillCampaigns: [
      { period: '2013', holes: 'CMB-01 → CMB-13', metres: '1,371 m', note: '13 holes' },
      { period: '2020–2021', holes: 'CMB-14 → CMB-26', metres: '1,758 m', note: '13 holes · ALS Peru' },
      { period: '2025', holes: 'Ongoing', metres: '—', note: 'Reserve definition' },
    ],
  },
  'cerrito-xxi': {
    name: 'Cerrito XXI',
    stage: 'Exploration',
    commodities: ['Gold', 'Silver'],
    location: 'Concepción, Ñuflo de Chávez, Santa Cruz, Bolivia',
    department: 'Santa Cruz',
    stats: {
      production: '~$365,649 USD',
      resources: '1,500m Diamond Drill Program',
      area: '1,000 ha (40 cuadrículas)',
      since: 'LPE Application Pending',
    },
    description: [
      'Cerrito XXI is a 1,000-hectare (40 cuadrículas) gold and silver exploration concession held by Mycelium Minerals Bolivia MMB S.R.L. in the municipality of Concepción, Ñuflo de Chávez Province, Santa Cruz Department, Bolivia (unique code: 2058709). The property sits on the Brazilian Precambrian Shield within the Chiquitanía geological domain — a prolific terrain that hosts orogenic gold systems across the region. The concession is accessed via a 5-hour, 282 km paved highway drive from Santa Cruz through Pailón, San Julián, San Ramón, and San Javier. Elevation ranges from 460 to 800 m above sea level; the dry field season runs June through August (annual mean temperature 23–24°C). An LPE (Licencia de Prospección y Exploración) application is currently pending.',
      'The bedrock geology includes Precambrian metamorphic rocks of the Complejo Metamórfico de Concepción (banded gneisses and migmatites with K-feldspar megacrysts up to 4 cm), intruded by the Granitoides de Refugio (foliated granites with blastomylonitic textures), and locally overlain by the Grupo Tajibos metasedimentary sequence (Formación Psamita de Zapocoz quartzites and Formación Esquisto de Laguna graphitic phyllites). A Tertiary laterite cap up to 40 m thick overlies portions of the concession. Gold mineralization is interpreted as orogenic style, controlled by regional shear zones, quartz veins, and hydrothermal breccias. The primary target metals are gold and silver; geochemical tracer elements anticipated include arsenic, antimony, tungsten, bismuth, and silver — consistent with orogenic gold systems globally. Amethyst has been identified at two quartz vein localities within the concession.',
      'The approved 5-year exploration program totals approximately $365,649 USD across three phases: pre-field ASTER satellite imagery analysis for hydrothermal alteration mapping, a systematic 16–18 month field campaign including geological mapping, soil sampling at 27 grid points, trenching, and a 1,500-metre Ingetrol diamond drill program, followed by approximately 2,700 laboratory analyses at a certified laboratory.',
    ],
    highlights: [
      '1,000 ha (40 cuadrículas) — code 2058709; gold and silver target',
      'Brazilian Shield / Chiquitanía domain — proven orogenic gold-silver setting',
      'Host rocks: Precambrian gneisses, Refuge granitoids, Tajibos metasediments',
      'Tracer elements: Au, Ag, As, Sb, W, Bi — consistent with orogenic gold system',
      'Amethyst identified at 2 quartz vein localities within concession',
      'Tertiary laterite cap (up to 40m) — favorable supergene enrichment conditions',
      '1,500m Ingetrol diamond drill program planned',
      '5-year exploration budget: ~$365,649 USD — LPE pending',
    ],
    documents: [
      'Plan de Trabajo — Cerrito XXI (Mycelium Minerals Bolivia MMB S.R.L.)',
      'ASTER Satellite Imagery Analysis & Target Definition',
      'Exploration Program Budget Summary — 5-Year Plan',
    ],
    primaryDocument: 'Plan de Trabajo — Cerrito XXI (Mycelium Minerals Bolivia MMB S.R.L.)',
  },
  'cerrito-xxii': {
    name: 'Cerrito XXII',
    stage: 'Exploration',
    commodities: ['Gold'],
    location: 'Concepción, Ñuflo de Chávez, Santa Cruz, Bolivia',
    department: 'Santa Cruz',
    stats: {
      production: '~$372,709 USD',
      resources: '2,000m Diamond Drill Program',
      area: '1,575 ha (63 cuadrículas)',
      since: 'LPE Application Pending',
    },
    description: [
      'Cerrito XXII is a 1,575-hectare (63 cuadrículas) gold exploration concession held by Mycelium Minerals Bolivia MMB S.R.L. in the municipality of Concepción, Ñuflo de Chávez Province, Santa Cruz Department, Bolivia (unique code: 2058753) — the largest concession in the portfolio. Located immediately northwest of Cerrito XXI, it shares the same paved-highway access route (282 km, 5 hours from Santa Cruz), the same Chiquitano dry forest environment (460–800 m elevation, 23–24°C mean, dry field season June–August), and benefits from full logistical and equipment synergies with the adjacent concession. An LPE application is pending.',
      'The geology of Cerrito XXII spans the full Precambrian chronostratigraphic column of the Brazilian Shield: from the Transamazónico Complejo Granulítico Lomas Maneches (the oldest basement rocks, >2 Ga), through the San Ignacio Complejo Gnéisico Chiquitanía (light grey banded gneiss-migmatites with pegmatite intrusives and abundant quartz veins 0.2–0.6 m thick, strongly fractured and shear-zone hosted), the Supergrupo Esquistos San Ignacio (La Dolorida muscovite schists, Zapocó amphibolite schists, and graphitic metapelites), and the Sunsas Granitoide San Andrés augengneis (porphyroblastic texture with K-feldspar phenocrysts up to 3 cm). Overlying these are Quaternary alluvial and fluvio-lacustrine sediments that represent a secondary placer gold exploration target.',
      'Of particular significance is a Cretaceous brecciated quartz vein system trending NW–SE for approximately 4 km across the concession — angular, brown-reddish quartz with feldspathic phenocrysts, volcanic rock fragments, and Fe-oxide matrix, forming a direct structural target for gold. Primary gold mineralization is interpreted as orogenic style, controlled by shear zones, faults, and brittle-ductile deformation zones within the metamorphic basement. The 5-year program totals ~$372,709 USD, including ASTER pre-field analysis, systematic soil and trench sampling (20 priority points across 63 cuadrículas), and a 2,000-metre diamond drill program with ~3,200 certified laboratory analyses.',
    ],
    highlights: [
      '1,575 ha (63 cuadrículas) — largest concession in the portfolio, code 2058753',
      '4 km NW-SE Cretaceous brecciated quartz vein — direct orogenic gold drill target',
      'Full Brazilian Shield chronostratigraphy: granulites → gneisses → schists → granitoids',
      'Orogenic gold (primary) + placer gold in Quaternary alluvials (secondary)',
      'Shear-hosted gneiss complex with abundant 0.2–0.6 m quartz veins confirmed in field',
      '2,000m diamond drill program planned — ~3,200 certified lab analyses',
      '5-year exploration budget: ~$372,709 USD — operational synergies with Cerrito XXI',
      'LPE application pending with Bolivian authorities (AJAM)',
    ],
    documents: [
      'Plan de Trabajo — Cerrito XXII (Mycelium Minerals Bolivia MMB S.R.L.)',
      'Geological Mapping & Priority Target Definition',
      'Exploration Program Budget Summary — 5-Year Plan',
    ],
    primaryDocument: 'Plan de Trabajo — Cerrito XXII (Mycelium Minerals Bolivia MMB S.R.L.)',
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
    { label: project.statLabels?.production ?? t('annualProduction'), value: project.stats.production },
    { label: project.statLabels?.resources ?? t('resources'), value: project.stats.resources },
    { label: project.statLabels?.area ?? t('projectArea'), value: project.stats.area },
    { label: project.statLabels?.since ?? t('operatingSince'), value: project.stats.since },
  ];

  const anchorLinks = [
    { label: t('anchorOverview'), href: '#overview' },
    ...(project.drillHighlights ? [{ label: t('anchorDrillResults'), href: '#drill-results' }] : []),
    { label: t('anchorLocation'), href: '#location' },
    { label: t('anchorDocuments'), href: '#documents' },
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

      {/* Anchor Navigation */}
      <nav className="bg-white border-b border-obsidian sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto">
            {anchorLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex-shrink-0 px-6 py-4 text-xs font-mono uppercase tracking-widest text-obsidian/50 hover:text-obsidian hover:bg-offwhite transition-colors border-r border-obsidian/10 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Stats Bar */}
      <section id="overview" className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="text-xs font-mono uppercase tracking-widest text-obsidian/65 mb-8 text-center">
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

      {/* Drill Results — Los Clavillos only */}
      {project.drillHighlights && project.drillCampaigns && (
        <section id="drill-results" className="bg-obsidian border-b border-obsidian">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-4">
              {t('drillResultsTitle')}
            </p>
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-white mb-12">
              {t('drillResultsTitle')}
            </h2>

            {/* Grade Highlight Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/20 mb-10">
              {project.drillHighlights.map((result, i) => (
                <div
                  key={i}
                  className={`p-8 flex flex-col gap-2 ${
                    result.peak ? 'bg-gold' : 'bg-white/5'
                  } ${i < project.drillHighlights!.length - 1 ? 'border-b md:border-b-0 md:border-r border-white/20' : ''}`}
                >
                  <p className={`text-xs font-mono uppercase tracking-widest ${result.peak ? 'text-obsidian/50' : 'text-white/70'}`}>
                    {result.hole}
                  </p>
                  <p className={`font-clash font-bold text-4xl md:text-5xl leading-none ${result.peak ? 'text-obsidian' : 'text-white'}`}>
                    {result.grade}
                  </p>
                  <p className={`text-xs font-mono uppercase tracking-widest ${result.peak ? 'text-obsidian/60' : 'text-white/50'}`}>
                    {result.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Campaign Summary Table */}
            <div className="border border-white/20">
              <div className="grid grid-cols-4 border-b border-white/20 bg-white/5 px-6 py-3">
                {['Period', 'Holes', 'Metres', 'Notes'].map((h) => (
                  <span key={h} className="text-xs font-mono uppercase tracking-widest text-white/60">
                    {h}
                  </span>
                ))}
              </div>
              {project.drillCampaigns.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-cols-4 px-6 py-4 border-b border-white/10 last:border-b-0"
                >
                  <span className="font-mono text-sm text-gold">{row.period}</span>
                  <span className="font-mono text-sm text-white/70">{row.holes}</span>
                  <span className="font-mono text-sm text-white/70">{row.metres}</span>
                  <span className="font-mono text-sm text-white/50">{row.note}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs font-mono text-white/60">{t('drillResultsNote')}</p>
          </div>
        </section>
      )}

      {/* Map Placeholder */}
      <section id="location" className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="border border-obsidian h-64 flex items-center justify-center">
            <p className="font-mono text-xs text-obsidian/60 uppercase tracking-widest">
              Project Map — {project.department} Department · Coming Soon
            </p>
          </div>
        </div>
      </section>

      {/* Documents Table */}
      <section id="documents" className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-obsidian gap-4">
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
              {t('documents')}
            </h2>
            {project.primaryDocument && (
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 bg-obsidian text-white text-sm font-mono hover:bg-gold hover:text-obsidian border border-obsidian hover:border-gold transition-colors whitespace-nowrap"
              >
                {t('downloadPrimaryReport')} ↓
              </a>
            )}
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
