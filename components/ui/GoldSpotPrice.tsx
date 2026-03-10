'use client';

import { useEffect, useState } from 'react';

export default function GoldSpotPrice() {
  const [price, setPrice] = useState<number | null>(null);

  function fetchPrice() {
    fetch('/api/gold-price')
      .then((r) => r.json())
      .then((data: { price: number | null }) => {
        if (typeof data.price === 'number') setPrice(data.price);
      })
      .catch(() => {});
  }

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = price
    ? `$${price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`
    : '—';

  return (
    <span className="hidden xl:inline-flex items-center gap-2 font-mono text-xs border border-obsidian px-3 py-1">
      <span className="text-obsidian/50">XAU/USD</span>
      <span className="font-semibold">{formatted}</span>
    </span>
  );
}
