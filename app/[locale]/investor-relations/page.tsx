import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

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
    metric: 'Gold Production (oz)',
    fy2024: '125,000',
    fy2023: '112,400',
  },
  {
    metric: 'Silver Production (oz)',
    fy2024: '1,840,000',
    fy2023: '1,620,000',
  },
  {
    metric: 'Revenue (C$M)',
    fy2024: '—',
    fy2023: '—',
  },
  {
    metric: 'AISC ($/oz Au eq.)',
    fy2024: '—',
    fy2023: '—',
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
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
            TSX: MYC
          </p>
          <h1 className="font-clash font-bold text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
            {t('title')}
          </h1>
          <p className="mt-4 text-base text-obsidian/70 max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
          <a
            href={`mailto:${t('irEmail')}`}
            className="mt-6 inline-block font-mono text-sm text-obsidian hover:text-gold transition-colors"
          >
            {t('irEmail')}
          </a>
        </div>
      </section>

      {/* Stock Info Band */}
      <section className="bg-gold border-y border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            <div className="py-4 px-6 border-r border-obsidian/20">
              <p className="text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-1">
                {t('ticker')}
              </p>
              <p className="font-clash font-bold text-2xl text-obsidian">MYC</p>
              <p className="text-xs font-mono text-obsidian/60 mt-1">{t('exchange')}: TSX</p>
            </div>
            <div className="py-4 px-6 border-r border-obsidian/20">
              <p className="text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-1">
                {t('price')}
              </p>
              <p className="font-clash font-bold text-2xl text-obsidian">C$—</p>
              <p className="text-xs font-mono text-obsidian/60 mt-1">Real-time data coming soon</p>
            </div>
            <div className="py-4 px-6 border-r border-obsidian/20">
              <p className="text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-1">
                {t('marketCap')}
              </p>
              <p className="font-clash font-bold text-2xl text-obsidian">—</p>
            </div>
            <div className="py-4 px-6">
              <p className="text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-1">
                {t('week52Range')}
              </p>
              <p className="font-clash font-bold text-2xl text-obsidian">— / —</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section id="documents" className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
              {t('documents')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-obsidian">
            {/* Annual Reports */}
            <div id="annual-report" className="border-b border-r border-obsidian/20 p-8 flex flex-col gap-4">
              <h3 className="font-clash font-bold text-xl text-obsidian">{t('annualReports')}</h3>
              <p className="text-sm text-obsidian/60">{t('annualReportsDesc')}</p>
              <ul className="mt-2 flex flex-col gap-2">
                {['2024 Annual Report', '2023 Annual Report', '2022 Annual Report'].map((doc) => (
                  <li key={doc}>
                    <a
                      href="#"
                      className="flex items-center justify-between px-4 py-3 border border-obsidian/20 hover:border-obsidian hover:bg-offwhite transition-colors group"
                    >
                      <span className="text-sm font-inter text-obsidian">{doc}</span>
                      <span className="text-xs font-mono text-obsidian/40 group-hover:text-gold transition-colors">
                        PDF ↓
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Corporate Presentations */}
            <div id="presentation" className="border-b border-obsidian/20 p-8 flex flex-col gap-4">
              <h3 className="font-clash font-bold text-xl text-obsidian">{t('presentations')}</h3>
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
                        <span className="text-xs font-mono text-obsidian/40 group-hover:text-gold transition-colors">
                          PDF ↓
                        </span>
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* MD&A & Financial Statements */}
            <div className="border-r border-obsidian/20 p-8 flex flex-col gap-4">
              <h3 className="font-clash font-bold text-xl text-obsidian">
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
                      <span className="text-xs font-mono text-obsidian/40 group-hover:text-gold transition-colors">
                        PDF ↓
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Reports */}
            <div className="p-8 flex flex-col gap-4">
              <h3 className="font-clash font-bold text-xl text-obsidian">
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
                      <span className="text-xs font-mono text-obsidian/40 group-hover:text-gold transition-colors">
                        PDF ↓
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Highlights */}
      <section className="bg-offwhite border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
              {t('financialHighlights')}
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border border-obsidian">
              <thead>
                <tr className="border-b border-obsidian bg-obsidian text-white">
                  <th className="text-left px-6 py-4 text-xs font-mono uppercase tracking-widest font-normal">
                    Metric
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-mono uppercase tracking-widest font-normal">
                    FY2024
                  </th>
                  <th className="text-right px-6 py-4 text-xs font-mono uppercase tracking-widest font-normal border-l border-white/10">
                    FY2023
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
        </div>
      </section>

      {/* Analyst Coverage */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-end justify-between mb-10 pb-6 border-b border-obsidian">
            <h2 className="font-clash font-bold text-4xl md:text-5xl text-obsidian">
              {t('analystCoverage')}
            </h2>
          </div>
          <div className="border border-obsidian p-10 text-center">
            <p className="text-base text-obsidian/60 max-w-xl mx-auto">{t('analystCoverageDesc')}</p>
            <a
              href={`mailto:${t('irEmail')}`}
              className="mt-6 inline-block font-mono text-sm text-obsidian hover:text-gold transition-colors"
            >
              {t('irEmail')}
            </a>
          </div>
        </div>
      </section>

      {/* IR Contact Band */}
      <section className="bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-8">
            {t('irContact')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-clash font-bold text-2xl text-white mb-6">
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
        </div>
      </section>
    </div>
  );
}
