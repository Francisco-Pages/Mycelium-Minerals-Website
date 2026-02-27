import { setRequestLocale } from 'next-intl/server';

export default async function PressReleaseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  return (
    <div className="px-6 py-24 max-w-4xl mx-auto">
      <p className="text-sm font-mono uppercase tracking-widest text-gold mb-4">Press Release</p>
      <h1 className="text-4xl md:text-5xl font-clash font-bold text-obsidian capitalize">
        {slug.replace(/-/g, ' ')}
      </h1>
      <div className="mt-16 border border-obsidian p-8 text-center text-obsidian/40 font-mono text-sm">
        Press release content will be loaded from Sanity CMS
      </div>
    </div>
  );
}
