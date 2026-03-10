import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { FadeInView } from '@/components/ui/FadeInView';
import { TradingViewCommodities } from '@/components/ir/TradingViewCommodities';
import { InvestorAlertSignup } from '@/components/ir/InvestorAlertSignup';

export default async function InvestorRelationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <InvestorRelationsContent />;
}

// ---------------------------------------------------------------------------
// Placeholder data — TODO: replace with await sanityFetch(irDocumentsQuery)
// ---------------------------------------------------------------------------

const FINANCIAL_HIGHLIGHTS = [
  {
    metric: 'Total Concession Area (ha)',
    fy2024: '31,125',
    fy2023: '25,950',
  },
  {
    metric: 'Active Projects',
    fy2024: '4',
    fy2023: '3',
  },
  {
    metric: 'Committed Exploration Budget (USD)',
    fy2024: '$738,358',
    fy2023: '—',
  },
  {
    metric: 'Phase I Drill Program (Concepción)',
    fy2024: '5,000m — Q2 2026',
    fy2023: '—',
  },
] as const;

const TIMELINE = [
  {
    step: '01',
    phase: 'Exploration',
    desc: 'Active diamond drilling, geological surveys, and target identification across 25,950 ha in eastern Bolivia.',
    active: true,
  },
  {
    step: '02',
    phase: 'Resource Estimate',
    desc: 'Compliant mineral resource estimate to be defined following the 5,000m Concepción drill program.',
    active: false,
  },
  {
    step: '03',
    phase: 'Permitting',
    desc: 'Environmental approvals (LPE) and community agreements for Cerrito XXI and XXII currently pending.',
    active: false,
  },
  {
    step: '04',
    phase: 'Development',
    desc: 'Mine construction, metallurgical testing, and workforce scaling.',
    active: false,
  },
  {
    step: '05',
    phase: 'Production',
    desc: 'Revenue-generating operations supported by a formal resource estimate and mine plan.',
    active: false,
  },
] as const;

// ---------------------------------------------------------------------------
// Page composition
// ---------------------------------------------------------------------------

function InvestorRelationsContent() {
  const t = useTranslations('investorRelations');

  return (
    <div>
      {/* Hero */}
      <section className="bg-offwhite border-b border-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeInView>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-4">
              Gold &amp; Silver · Bolivia
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
            <p className="mt-3 text-xs font-mono font-medium uppercase tracking-widest text-gold">
              {t('credibilityLine')}
            </p>
            <a
              href={`mailto:${t('irEmail')}`}
              className="mt-6 inline-block font-mono text-sm text-obsidian hover:text-gold transition-colors"
            >
              {t('irEmail')}
            </a>
          </FadeInView>
        </div>
      </section>

      {/* Stock Info Band */}
      <section className="bg-gold border-y border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            <div className="py-4 px-6 border-r border-obsidian/20">
              <p className="text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-1">
                {t('concessionArea')}
              </p>
              <p className="font-inter font-bold text-2xl text-obsidian">25,950 ha</p>
              <p className="text-xs font-mono text-obsidian/60 mt-1">Bolivia</p>
            </div>
            <div className="py-4 px-6 border-r border-obsidian/20">
              <p className="text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-1">
                {t('price')}
              </p>
              <p className="font-inter font-bold text-2xl text-obsidian">C$—</p>
              <p className="text-xs font-mono text-obsidian/60 mt-1">Real-time data coming soon</p>
            </div>
            <div className="py-4 px-6 border-r border-obsidian/20">
              <p className="text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-1">
                {t('marketCap')}
              </p>
              <p className="font-inter font-bold text-2xl text-obsidian">—</p>
            </div>
            <div className="py-4 px-6">
              <p className="text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-1">
                {t('week52Range')}
              </p>
              <p className="font-inter font-bold text-2xl text-obsidian">— / —</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data — TradingView */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <FadeInView>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-2">
              {t('marketDataEyebrow')}
            </p>
            <p className="text-sm text-obsidian/50 mb-6">{t('marketDataSubtitle')}</p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <TradingViewCommodities />
          </FadeInView>
        </div>
      </section>

      {/* Why Bolivia? */}
      <section className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-4">
              {t('whyBoliviaEyebrow')}
            </p>
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian max-w-2xl leading-tight mb-4">
              {t('whyBoliviaTitle')}
            </h2>
            <p className="text-base text-obsidian/60 max-w-2xl leading-relaxed mb-12">
              {t('whyBoliviaSubtitle')}
            </p>
          </FadeInView>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border border-obsidian">
            {(
              [
                ['whyBolivia1Title', 'whyBolivia1Desc'],
                ['whyBolivia2Title', 'whyBolivia2Desc'],
                ['whyBolivia3Title', 'whyBolivia3Desc'],
                ['whyBolivia4Title', 'whyBolivia4Desc'],
                ['whyBolivia5Title', 'whyBolivia5Desc'],
                ['whyBolivia6Title', 'whyBolivia6Desc'],
              ] as const
            ).map(([titleKey, descKey], i) => (
              <FadeInView
                key={titleKey}
                delay={i * 0.06}
                className="bg-white p-8 border-b border-r border-obsidian/20 flex flex-col gap-3"
              >
                <span className="font-mono text-xs text-obsidian/55">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-inter font-bold text-xl text-obsidian">{t(titleKey)}</h3>
                <p className="text-sm text-obsidian/60 leading-relaxed">{t(descKey)}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Timeline */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-4">
              {t('timelineEyebrow')}
            </p>
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian mb-12">
              {t('timelineTitle')}
            </h2>
          </FadeInView>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border border-obsidian">
            {TIMELINE.map((item, i) => (
              <FadeInView
                key={item.step}
                delay={i * 0.08}
                className={`p-6 flex flex-col gap-3 ${
                  item.active ? 'bg-gold' : 'bg-white'
                } ${i < TIMELINE.length - 1 ? 'border-b md:border-b-0 md:border-r border-obsidian/20' : ''}`}
              >
                <span className="font-mono text-xs text-obsidian/55">{item.step}</span>
                <h3 className="font-inter font-bold text-xl text-obsidian">{item.phase}</h3>
                <p className="text-xs text-obsidian/60 leading-relaxed flex-1">{item.desc}</p>
                {item.active && (
                  <span className="mt-2 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-obsidian">
                    <span className="w-2 h-2 bg-obsidian inline-block" />
                    Active
                  </span>
                )}
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="bg-obsidian border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <FadeInView>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-6">
              {t('investmentOpportunityEyebrow')}
            </p>
            <h2 className="font-inter font-bold text-4xl md:text-6xl text-white max-w-3xl leading-tight mb-4">
              {t('investmentOpportunityTitle')}
            </h2>
            <p className="text-base text-white/60 max-w-2xl leading-relaxed mb-12">
              {t('investmentOpportunitySubtitle')}
            </p>
          </FadeInView>

          <FadeInView delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/20 mb-12">
              <div className="p-8 border-b md:border-b-0 border-r border-white/20">
                <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-3">
                  {t('investmentEquityLabel')}
                </p>
                <p className="font-inter font-bold text-4xl text-white">{t('investmentEquityValue')}</p>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">{t('investmentEquityDesc')}</p>
              </div>
              <div className="p-8 border-b md:border-b-0 border-r border-white/20">
                <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-3">
                  {t('investmentCapitalLabel')}
                </p>
                <p className="font-inter font-bold text-4xl text-white">{t('investmentCapitalValue')}</p>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">{t('investmentCapitalDesc')}</p>
              </div>
              <div className="p-8 border-b md:border-b-0 border-r border-white/20">
                <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-3">
                  {t('investmentDrillLabel')}
                </p>
                <p className="font-inter font-bold text-4xl text-white">{t('investmentDrillValue')}</p>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">{t('investmentDrillDesc')}</p>
              </div>
              <div className="p-8">
                <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-3">
                  {t('investmentPortfolioLabel')}
                </p>
                <p className="font-inter font-bold text-4xl text-white">{t('investmentPortfolioValue')}</p>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">{t('investmentPortfolioDesc')}</p>
              </div>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="border border-white/20 p-8 bg-white/5">
              <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-4">
                {t('investmentUseProceedsLabel')}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {(['investmentUse1', 'investmentUse2', 'investmentUse3', 'investmentUse4'] as const).map((key) => (
                  <li key={key} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 bg-gold flex-shrink-0" />
                    <span className="text-sm text-white/70">{t(key)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={`mailto:${t('irEmail')}`}
                  className="inline-block font-mono text-sm text-white hover:text-gold transition-colors border border-white/30 hover:border-gold px-6 py-3"
                >
                  {t('investmentCta')} →
                </a>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Investor Alert Signup */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-4">
              {t('investorAlertEyebrow')}
            </p>
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian mb-3">
              {t('investorAlertTitle')}
            </h2>
            <p className="text-base text-obsidian/60 max-w-xl leading-relaxed mb-10">
              {t('investorAlertSubtitle')}
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <InvestorAlertSignup />
          </FadeInView>
        </div>
      </section>

      {/* Documents Grid */}
      <section id="documents" className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian">
                {t('documents')}
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-obsidian">
              {/* Annual Reports */}
              <div id="annual-report" className="border-b border-r border-obsidian/20 bg-white p-8 flex flex-col gap-4">
                <h3 className="font-inter font-bold text-xl text-obsidian">{t('annualReports')}</h3>
                <p className="text-sm text-obsidian/60">{t('annualReportsDesc')}</p>
                <ul className="mt-2 flex flex-col gap-2">
                  {['2024 Annual Report', '2023 Annual Report', '2022 Annual Report'].map((doc) => (
                    <li key={doc}>
                      <a
                        href="#"
                        className="flex items-center justify-between px-4 py-3 border border-obsidian/20 hover:border-obsidian hover:bg-offwhite transition-colors group"
                      >
                        <span className="text-sm font-inter text-obsidian">{doc}</span>
                        <span className="text-xs font-mono text-obsidian/65 group-hover:text-gold transition-colors">
                          PDF ↓
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corporate Presentations */}
              <div id="presentation" className="border-b border-obsidian/20 bg-white p-8 flex flex-col gap-4">
                <h3 className="font-inter font-bold text-xl text-obsidian">{t('presentations')}</h3>
                <p className="text-sm text-obsidian/60">{t('presentationsDesc')}</p>
                <ul className="mt-2 flex flex-col gap-2">
                  {['Corporate Presentation — Q1 2025', 'Corporate Presentation — Q4 2024'].map(
                    (doc) => (
                      <li key={doc}>
                        <a
                          href="#"
                          className="flex items-center justify-between px-4 py-3 border border-obsidian/20 hover:border-obsidian hover:bg-offwhite transition-colors group"
                        >
                          <span className="text-sm font-inter text-obsidian">{doc}</span>
                          <span className="text-xs font-mono text-obsidian/65 group-hover:text-gold transition-colors">
                            PDF ↓
                          </span>
                        </a>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* MD&A & Financial Statements */}
              <div className="border-r border-obsidian/20 bg-white p-8 flex flex-col gap-4">
                <h3 className="font-inter font-bold text-xl text-obsidian">
                  {t('financialStatements')}
                </h3>
                <p className="text-sm text-obsidian/60">{t('financialStatementsDesc')}</p>
                <ul className="mt-2 flex flex-col gap-2">
                  {[
                    'Q3 2024 Financial Statements',
                    'Q2 2024 Financial Statements',
                    'Q1 2024 Financial Statements',
                  ].map((doc) => (
                    <li key={doc}>
                      <a
                        href="#"
                        className="flex items-center justify-between px-4 py-3 border border-obsidian/20 hover:border-obsidian hover:bg-offwhite transition-colors group"
                      >
                        <span className="text-sm font-inter text-obsidian">{doc}</span>
                        <span className="text-xs font-mono text-obsidian/65 group-hover:text-gold transition-colors">
                          PDF ↓
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Reports */}
              <div className="bg-white p-8 flex flex-col gap-4">
                <h3 className="font-inter font-bold text-xl text-obsidian">
                  {t('technicalReports')}
                </h3>
                <p className="text-sm text-obsidian/60">{t('technicalReportsDesc')}</p>
                <ul className="mt-2 flex flex-col gap-2">
                  {[
                    'NI 43-101 — Cerro Blanco (2023)',
                    'NI 43-101 — San Cristóbal Norte (2024)',
                    'NI 43-101 — Río Mulatos (2022)',
                    'NI 43-101 — Colquiri Sur (2023)',
                  ].map((doc) => (
                    <li key={doc}>
                      <a
                        href="#"
                        className="flex items-center justify-between px-4 py-3 border border-obsidian/20 hover:border-obsidian hover:bg-offwhite transition-colors group"
                      >
                        <span className="text-sm font-inter text-obsidian">{doc}</span>
                        <span className="text-xs font-mono text-obsidian/65 group-hover:text-gold transition-colors">
                          PDF ↓
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian">
                {t('financialHighlights')}
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
            <div className="overflow-x-auto">
              <table className="w-full border border-obsidian">
                <thead>
                  <tr className="border-b border-obsidian bg-obsidian text-white">
                    <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-widest font-normal">
                      Metric
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-mono uppercase tracking-widest font-normal">
                      Current
                    </th>
                    <th className="text-right px-6 py-4 text-xs font-mono uppercase tracking-widest font-normal border-l border-white/10">
                      Prior
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {FINANCIAL_HIGHLIGHTS.map((row, i) => (
                    <tr
                      key={row.metric}
                      className={`border-b border-obsidian/20 ${i % 2 === 0 ? 'bg-white' : 'bg-offwhite'}`}
                    >
                      <td className="px-6 py-4 text-sm font-inter text-obsidian">{row.metric}</td>
                      <td className="px-6 py-4 text-right font-mono text-sm text-obsidian">
                        {row.fy2024}
                      </td>
                      <td className="px-6 py-4 text-right font-mono text-sm text-obsidian/60 border-l border-obsidian/10">
                        {row.fy2023}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Analyst Coverage */}
      <section className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
              <h2 className="font-inter font-bold text-4xl md:text-5xl text-obsidian">
                {t('analystCoverage')}
              </h2>
            </div>
          </FadeInView>
          <FadeInView delay={0.1}>
            <div className="border border-obsidian bg-white p-10 text-center">
              <p className="text-base text-obsidian/60 max-w-xl mx-auto">{t('analystCoverageDesc')}</p>
              <a
                href={`mailto:${t('irEmail')}`}
                className="mt-6 inline-block font-mono text-sm text-obsidian hover:text-gold transition-colors"
              >
                {t('irEmail')}
              </a>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* IR Contact Band */}
      <section className="bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <FadeInView>
            <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold mb-8">
              {t('irContact')}
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="font-inter font-bold text-2xl text-white mb-6">
                  {t('irContactName')}
                </p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`mailto:${t('irEmail')}`}
                    className="font-mono text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {t('irEmail')}
                  </a>
                  <a
                    href={`tel:${t('irPhone')}`}
                    className="font-mono text-sm text-white/70 hover:text-gold transition-colors"
                  >
                    {t('irPhone')}
                  </a>
                  <p className="font-mono text-sm text-white/50">{t('irAddress')}</p>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </div>
  );
}
