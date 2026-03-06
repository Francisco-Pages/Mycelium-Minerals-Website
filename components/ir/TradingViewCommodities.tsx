'use client';

import { useEffect, useRef } from 'react';

export function TradingViewCommodities() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.innerHTML = '';

    const widgetDiv = document.createElement('div');
    widgetDiv.className = 'tradingview-widget-container__widget';

    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute(
      'src',
      'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js',
    );
    script.setAttribute('async', 'true');
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: 220,
      symbolsGroups: [
        {
          name: 'Precious Metals',
          symbols: [
            { name: 'FOREXCOM:XAUUSD', displayName: 'Gold (XAU/USD)' },
            { name: 'FOREXCOM:XAGUSD', displayName: 'Silver (XAG/USD)' },
            { name: 'COMEX:HG1!', displayName: 'Copper (HG)' },
          ],
        },
      ],
      showSymbolLogo: false,
      colorTheme: 'light',
      isTransparent: true,
      locale: 'en',
    });

    el.appendChild(widgetDiv);
    el.appendChild(script);

    return () => {
      el.innerHTML = '';
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container"
      style={{ minHeight: 220 }}
    />
  );
}
