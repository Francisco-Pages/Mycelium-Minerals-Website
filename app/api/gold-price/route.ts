import { NextResponse } from 'next/server';

export const revalidate = 300; // cache 5 minutes on the server

export async function GET() {
  try {
    const res = await fetch(
      'https://query1.finance.yahoo.com/v8/finance/chart/GC%3DF?interval=1d&range=1d',
      {
        headers: { 'User-Agent': 'Mozilla/5.0' },
        next: { revalidate: 300 },
      },
    );
    if (!res.ok) throw new Error(`yahoo returned ${res.status}`);
    const data = await res.json();
    const price: number | undefined =
      data?.chart?.result?.[0]?.meta?.regularMarketPrice;
    if (typeof price !== 'number') throw new Error('unexpected shape');
    return NextResponse.json({ price });
  } catch {
    return NextResponse.json({ price: null }, { status: 502 });
  }
}
