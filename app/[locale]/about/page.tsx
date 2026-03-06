import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { FadeInView } from '@/components/ui/FadeInView';

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
    name: 'Francisco Pages',
    title: 'Chief Executive Officer',
    bio: 'Founder and 49% shareholder of Mycelium Minerals Bolivia SRL. Has led the company since its establishment in Bolivia in 2011, overseeing the strategic acquisition of 25,950 hectares of mineral concessions across eastern Bolivia.',
  },
  {
    name: 'Jeffery Zelinski',
    title: 'VP Exploration',
    bio: 'Geologist and equity option holder in Mycelium Minerals Bolivia SRL. Leads all exploration programs across the portfolio, including the planned 5,000-meter diamond drill campaign at the Concepción Project targeting a gold-bearing mineralized system.',
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
          <FadeInView>
            <p className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
              Leadership &amp; Governance
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h1 className="font-clash font-bold text-4xl sm:text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
              {t('title')}
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="mt-4 text-base text-obsidian/70 max-w-2xl leading-relaxed">
              {t('subtitle')}
            </p>
          </FadeInView>
        </div>
      </section>

      {/* CEO Spotlight — full-bleed 50/50 split */}
      <section className="border-b border-obsidian overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[540px]">
          {/* Photo */}
          <FadeInView
            direction="left"
            className="bg-obsidian/8 border-r border-obsidian/10 relative flex items-center justify-center min-h-[360px] md:min-h-0"
          >
            {/* Photo placeholder — replace with <Image> when headshots are available */}
            <span className="text-obsidian/20 font-mono text-xs uppercase tracking-widest">
              Photo
            </span>
          </FadeInView>

          {/* Content */}
          <FadeInView
            direction="right"
            className="bg-white px-10 md:px-16 py-16 flex flex-col justify-center"
          >
            <p className="text-xs font-mono uppercase tracking-widest text-gold mb-6">
              {t('ceoEyebrow')}
            </p>
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian leading-tight">
              {EXECUTIVES[0].name}
            </h2>

            {/* Quick stats */}
            <div className="mt-8 flex gap-10 border-y border-obsidian/10 py-6">
              <div>
                <span className="font-mono font-bold text-3xl text-gold">
                  {t('ceoYearsValue')}
                </span>
                <p className="text-xs font-mono font-medium uppercase tracking-widest text-obsidian/65 mt-1">
                  {t('ceoYearsLabel')}
                </p>
              </div>
              <div className="border-l border-obsidian/10 pl-10">
                <p className="text-xs font-mono font-medium uppercase tracking-widest text-obsidian/60 mb-1">
                  Corporate Structure
                </p>
                <p className="font-mono text-sm text-obsidian/60">{t('ceoPriorLabel')}</p>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mt-8 border-l-2 border-gold pl-6">
              <p className="text-lg text-obsidian/70 leading-relaxed italic">
                &ldquo;{t('ceoQuote')}&rdquo;
              </p>
            </blockquote>
          </FadeInView>
        </div>
      </section>

      {/* Executive Team */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
              <div>
                <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
                  {t('executiveTeam')}
                </h2>
                <p className="mt-2 text-sm text-obsidian/60">{t('executiveTeamSubtitle')}</p>
              </div>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
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
          </FadeInView>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
              <div>
                <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
                  {t('boardTitle')}
                </h2>
                <p className="mt-2 text-sm text-obsidian/60">{t('boardSubtitle')}</p>
              </div>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
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
          </FadeInView>
        </div>
      </section>

      {/* Values */}
      <section className="bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeInView>
            <p className="text-xs font-mono uppercase tracking-widest text-gold mb-8">
              {t('values')}
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
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
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
