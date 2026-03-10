'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function InvestorAlertSignup() {
  const t = useTranslations('investorRelations');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to mailing list provider (Mailchimp / AWS SES)
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="border border-obsidian/20 bg-white p-8 flex flex-col gap-3 items-start">
        <span className="w-2 h-2 bg-gold inline-block" />
        <p className="font-inter font-bold text-lg text-obsidian">{t('investorAlertSuccess')}</p>
        <p className="text-xs font-mono text-obsidian/50">{email}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={t('investorAlertNamePlaceholder')}
          className="px-4 py-3 border border-obsidian/30 bg-white font-inter text-sm text-obsidian placeholder:text-obsidian/30 focus:outline-none focus:border-obsidian transition-colors"
        />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('investorAlertEmailPlaceholder')}
          className="px-4 py-3 border border-obsidian/30 bg-white font-inter text-sm text-obsidian placeholder:text-obsidian/30 focus:outline-none focus:border-obsidian transition-colors"
        />
      </div>
      <div className="flex items-center gap-6">
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3 bg-gold text-obsidian font-semibold text-sm border border-gold rounded-lg hover:bg-obsidian hover:text-white hover:border-obsidian transition-colors disabled:opacity-50"
        >
          {loading ? '...' : t('investorAlertCta')}
        </button>
        <p className="text-xs font-mono text-obsidian/60">{t('investorAlertDisclaimer')}</p>
      </div>
    </form>
  );
}
