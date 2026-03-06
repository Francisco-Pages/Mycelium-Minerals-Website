'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactContent() {
  const t = useTranslations('contact');

  return (
    <div>
      {/* Hero */}
      <section className="bg-offwhite border-b border-obsidian py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-gold mb-4">
            Get in Touch
          </p>
          <h1 className="font-clash font-bold text-5xl md:text-7xl text-obsidian max-w-3xl leading-tight">
            {t('title')}
          </h1>
          <p className="mt-4 text-base text-obsidian/70 max-w-2xl leading-relaxed">
            {t('subtitle')}
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-white border-b border-obsidian">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <ContactForm t={t} />
          <ContactInfo />
        </div>
      </section>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Contact form — client-side submission with loading / success / error states
// ---------------------------------------------------------------------------

function ContactForm({ t }: { t: ReturnType<typeof useTranslations<'contact'>> }) {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      subject: (form.elements.namedItem('subject') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputClass =
    'w-full border border-obsidian px-4 py-3 font-inter text-sm text-obsidian bg-white focus:outline-none focus:border-gold transition-colors placeholder:text-obsidian/30';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-2">
          {t('name')}
        </label>
        <input type="text" name="name" required className={inputClass} />
      </div>
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-2">
          {t('email')}
        </label>
        <input type="email" name="email" required className={inputClass} />
      </div>
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-2">
          {t('subject')}
        </label>
        <input type="text" name="subject" className={inputClass} />
      </div>
      <div>
        <label className="block text-xs font-mono uppercase tracking-widest text-obsidian/50 mb-2">
          {t('message')}
        </label>
        <textarea name="message" rows={6} required className={`${inputClass} resize-none`} />
      </div>

      <div className="flex flex-col gap-3">
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="self-start px-8 py-3 bg-obsidian text-white text-sm font-inter font-semibold border border-obsidian hover:bg-gold hover:border-gold transition-colors disabled:opacity-50 disabled:pointer-events-none"
        >
          {status === 'loading' ? 'Sending…' : t('send')}
        </button>

        {status === 'success' && (
          <p className="text-sm font-mono text-green border border-green/30 bg-green/5 px-4 py-3">
            {t('success')}
          </p>
        )}
        {status === 'error' && (
          <p className="text-sm font-mono text-alert-red border border-alert-red/30 bg-alert-red/5 px-4 py-3">
            {t('error')}
          </p>
        )}
      </div>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Contact info sidebar
// ---------------------------------------------------------------------------

function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-obsidian/65 mb-4">
          Investor Relations
        </p>
        <div className="flex flex-col gap-2">
          <a
            href="mailto:ir@myceliumminerals.com"
            className="text-sm font-mono text-obsidian hover:text-gold transition-colors"
          >
            ir@myceliumminerals.com
          </a>
          <a
            href="tel:+14160000000"
            className="text-sm font-mono text-obsidian hover:text-gold transition-colors"
          >
            +1 (416) 000-0000
          </a>
        </div>
      </div>
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-obsidian/65 mb-4">
          Head Office
        </p>
        <p className="text-sm text-obsidian/70 leading-relaxed">
          Suite 1200, 100 King Street West<br />
          Toronto, ON M5X 1B1<br />
          Canada
        </p>
      </div>
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-obsidian/65 mb-4">
          Bolivia Operations
        </p>
        <p className="text-sm text-obsidian/70 leading-relaxed">
          operations@myceliumminerals.com
        </p>
      </div>
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-obsidian/65 mb-4">
          Careers
        </p>
        <p className="text-sm text-obsidian/70 leading-relaxed">
          careers@myceliumminerals.com
        </p>
      </div>
    </div>
  );
}
