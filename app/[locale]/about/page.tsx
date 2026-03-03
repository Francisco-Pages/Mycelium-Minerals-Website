import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutContent />;
}

// ---------------------------------------------------------------------------
// Placeholder data — TODO: replace with await sanityFetch(teamMembersQuery)
// ---------------------------------------------------------------------------

const EXECUTIVES = [
  {
    name: 'María Elena Vargas',
    title: 'Chief Executive Officer',
    bio: 'Over 20 years leading gold and silver operations across Latin America, including prior roles at Antamina and Barrick.',
  },
  {
    name: 'James Thornton',
    title: 'Chief Financial Officer',
    bio: 'Former mining analyst at RBC Capital Markets with extensive experience in TSX-listed company finance and capital allocation.',
  },
  {
    name: 'Roberto Chávez Quispe',
    title: 'Chief Operating Officer',
    bio: 'Bolivian national with 18 years of operational experience across the Oruro and La Paz mining districts.',
  },
  {
    name: 'Dr. Sarah Okonkwo',
    title: 'VP Exploration',
    bio: 'Holds a PhD in Economic Geology from the University of Toronto; led discovery of the San Cristóbal Norte deposit.',
  },
  {
    name: 'Alejandro Mamani',
    title: 'VP Sustainability',
    bio: 'Architect of Mycelium\'s community engagement framework and lead partner on the Bolivian reforestation program.',
  },
  {
    name: 'Catherine Beaumont',
    title: 'General Counsel',
    bio: 'Specialized in cross-border mining law with 15 years advising TSX issuers on Bolivian regulatory compliance.',
  },
  {
    name: 'Michael Patterson',
    title: 'VP Investor Relations',
    bio: 'Former buy-side analyst covering precious metals; oversees all capital markets communication for the Company.',
  },
] as const;

const BOARD = [
  {
    name: 'William H. Dawson',
    title: 'Chair of the Board',
    bio: 'Former CEO of a mid-tier gold producer with 35 years of mining industry leadership in Canada and internationally.',
  },
  {
    name: 'Patricia Nkrumah',
    title: 'Lead Independent Director',
    bio: 'Senior partner at a leading Canadian law firm; extensive TSX governance and securities law expertise.',
  },
  {
    name: 'François Lemaire',
    title: 'Independent Director',
    bio: 'Former CFO of a major Quebec-based mining company; currently serves on three TSX-listed mining boards.',
  },
  {
    name: 'Dr. Lucia Flores Mamani',
    title: 'Independent Director',
    bio: 'Bolivian environmental scientist and academic; advisor to the Bolivian Ministry of Mining and Metallurgy.',
  },
  {
    name: 'Thomas Westerberg',
    title: 'Independent Director',
    bio: 'Managing Director at a global commodities-focused private equity firm with deep expertise in South American assets.',
  },
] as const;

// ---------------------------------------------------------------------------
// Page composition
// ---------------------------------------------------------------------------

function AboutContent() {
  const t = useTranslations('about');

  return (
    <div>
      {/* Hero */}
      <section className="bg-offwhite border-b border-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
            Leadership &amp; Governance
          </p>
          <h1 className="font-clash font-bold text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
            {t('title')}
          </h1>
          <p className="mt-4 text-base text-obsidian/70 max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Executive Team */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <div>
              <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
                {t('executiveTeam')}
              </h2>
              <p className="mt-2 text-sm text-obsidian/60">{t('executiveTeamSubtitle')}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-obsidian">
            {EXECUTIVES.map((person) => (
              <div
                key={person.name}
                className="border-b border-r border-obsidian/20 bg-white p-6 flex flex-col gap-4 group"
              >
                {/* Photo placeholder */}
                <div className="w-full aspect-square bg-obsidian/10" />
                <div>
                  <p className="font-clash font-bold text-lg text-obsidian leading-tight">
                    {person.name}
                  </p>
                  <p className="mt-1 text-xs font-mono uppercase tracking-widest text-gold">
                    {person.title}
                  </p>
                </div>
                <p className="text-sm text-obsidian/60 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <div>
              <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
                {t('boardTitle')}
              </h2>
              <p className="mt-2 text-sm text-obsidian/60">{t('boardSubtitle')}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-obsidian">
            {BOARD.map((person) => (
              <div
                key={person.name}
                className="border-b border-r border-obsidian/20 bg-white p-6 flex flex-col gap-4"
              >
                {/* Photo placeholder */}
                <div className="w-full aspect-square bg-obsidian/10" />
                <div>
                  <p className="font-clash font-bold text-lg text-obsidian leading-tight">
                    {person.name}
                  </p>
                  <p className="mt-1 text-xs font-mono uppercase tracking-widest text-gold">
                    {person.title}
                  </p>
                </div>
                <p className="text-sm text-obsidian/60 leading-relaxed">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-8">
            {t('values')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            <div className="border-b md:border-b-0 border-r border-white/10 p-8">
              <h3 className="font-clash font-bold text-2xl text-white leading-tight">
                {t('value1Title')}
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">{t('value1Desc')}</p>
            </div>
            <div className="border-b md:border-b-0 border-r border-white/10 p-8">
              <h3 className="font-clash font-bold text-2xl text-white leading-tight">
                {t('value2Title')}
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">{t('value2Desc')}</p>
            </div>
            <div className="p-8">
              <h3 className="font-clash font-bold text-2xl text-white leading-tight">
                {t('value3Title')}
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">{t('value3Desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
