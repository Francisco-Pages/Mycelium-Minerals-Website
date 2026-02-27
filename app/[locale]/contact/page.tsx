import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations('contact');

  return (
    <div className="px-6 py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-clash font-bold text-obsidian">{t('title')}</h1>
      <p className="mt-4 text-lg text-obsidian/70 max-w-xl">{t('subtitle')}</p>
      <form
        action="/api/contact"
        method="POST"
        className="mt-16 grid grid-cols-1 gap-6"
      >
        <div>
          <label className="block text-sm font-semibold mb-2">{t('name')}</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border-1.5 border-obsidian px-4 py-3 font-inter focus:outline-none focus:border-gold bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">{t('email')}</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border-1.5 border-obsidian px-4 py-3 font-inter focus:outline-none focus:border-gold bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">{t('subject')}</label>
          <input
            type="text"
            name="subject"
            className="w-full border-1.5 border-obsidian px-4 py-3 font-inter focus:outline-none focus:border-gold bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">{t('message')}</label>
          <textarea
            name="message"
            rows={6}
            required
            className="w-full border-1.5 border-obsidian px-4 py-3 font-inter focus:outline-none focus:border-gold bg-white resize-none"
          />
        </div>
        <button
          type="submit"
          className="self-start px-8 py-3 bg-obsidian text-white font-semibold border-1.5 border-obsidian hover:bg-gold hover:border-gold transition-colors"
        >
          {t('send')}
        </button>
      </form>
    </div>
  );
}
