import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CareersContent />;
}

// ---------------------------------------------------------------------------
// Placeholder data — TODO: replace with await sanityFetch(jobListingsQuery)
// ---------------------------------------------------------------------------

const OPEN_ROLES = [
  {
    title: 'Senior Geologist',
    department: 'Exploration',
    location: 'Oruro, Bolivia',
    type: 'Full-time',
    slug: 'senior-geologist',
  },
  {
    title: 'Environmental & Social Manager',
    department: 'Sustainability',
    location: 'La Paz, Bolivia',
    type: 'Full-time',
    slug: 'environmental-social-manager',
  },
  {
    title: 'Financial Analyst, Investor Relations',
    department: 'Finance',
    location: 'Toronto, ON',
    type: 'Full-time',
    slug: 'financial-analyst-ir',
  },
] as const;

// ---------------------------------------------------------------------------
// Page composition
// ---------------------------------------------------------------------------

function CareersContent() {
  const t = useTranslations('careers');

  return (
    <div>
      {/* Hero */}
      <section className="bg-offwhite border-b border-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-4">Join Us</p>
          <h1 className="font-clash font-bold text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
            {t('title')}
          </h1>
          <p className="mt-4 text-base text-obsidian/70 max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Open Roles */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <div>
              <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
                {t('openRoles')}
              </h2>
              <p className="mt-2 text-sm text-obsidian/60">{t('openRolesSubtitle')}</p>
            </div>
          </div>

          {OPEN_ROLES.length > 0 ? (
            <div className="border border-obsidian">
              {/* Table header */}
              <div className="hidden md:grid md:grid-cols-4 border-b border-obsidian bg-obsidian text-white px-6 py-3">
                <span className="text-xs font-mono uppercase tracking-widest">Position</span>
                <span className="text-xs font-mono uppercase tracking-widest">
                  {t('department')}
                </span>
                <span className="text-xs font-mono uppercase tracking-widest">{t('location')}</span>
                <span className="text-xs font-mono uppercase tracking-widest">{t('type')}</span>
              </div>
              {/* Job rows */}
              {OPEN_ROLES.map((role) => (
                <div
                  key={role.slug}
                  className="grid grid-cols-1 md:grid-cols-4 border-b border-obsidian/20 last:border-b-0 px-6 py-5 items-center gap-2 md:gap-0 hover:bg-offwhite transition-colors group"
                >
                  <div>
                    <p className="font-clash font-bold text-base text-obsidian group-hover:text-gold transition-colors">
                      {role.title}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-obsidian/50 md:hidden">
                      {t('department')}:{' '}
                    </span>
                    <span className="text-sm text-obsidian/70">{role.department}</span>
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-obsidian/50 md:hidden">
                      {t('location')}:{' '}
                    </span>
                    <span className="text-sm text-obsidian/70">{role.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-obsidian/50 md:hidden">
                        {t('type')}:{' '}
                      </span>
                      <span className="text-xs font-mono text-obsidian/50 uppercase tracking-widest">
                        {role.type}
                      </span>
                    </div>
                    <a
                      href={`mailto:careers@myceliumminerals.com?subject=Application: ${role.title}`}
                      className="px-5 py-2 border border-obsidian text-xs font-mono font-semibold text-obsidian hover:bg-obsidian hover:text-white transition-colors"
                    >
                      {t('apply')}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty state */
            <div className="border border-obsidian p-12 text-center">
              <p className="font-clash font-bold text-xl text-obsidian">{t('noRoles')}</p>
              <p className="mt-3 text-sm text-obsidian/60 max-w-md mx-auto">
                {t('noRolesSubtitle')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Culture Band */}
      <section className="bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-8">
            {t('cultureTitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
            <div className="border-b md:border-b-0 border-r border-white/10 p-8">
              <h3 className="font-clash font-bold text-2xl text-white leading-tight">
                {t('culture1Title')}
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">{t('culture1Desc')}</p>
            </div>
            <div className="border-b md:border-b-0 border-r border-white/10 p-8">
              <h3 className="font-clash font-bold text-2xl text-white leading-tight">
                {t('culture2Title')}
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">{t('culture2Desc')}</p>
            </div>
            <div className="p-8">
              <h3 className="font-clash font-bold text-2xl text-white leading-tight">
                {t('culture3Title')}
              </h3>
              <p className="mt-4 text-sm text-white/60 leading-relaxed">{t('culture3Desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
