'use client';

import { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';

const CELL      = 10;        // marching-squares cell size (px)
const SCALE     = 0.0020;    // noise spatial frequency — lower = larger shapes
const SPEED     = 0.0006;    // animation speed — lower = slower
const LEVELS    = 13;        // number of contour lines
const OPACITY   = 0.07;      // line opacity

const thresholds = Array.from(
  { length: LEVELS },
  (_, i) => -0.85 + (i / (LEVELS - 1)) * 1.7,
);

export function TopoBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const noise = createNoise3D();
    let animId: number;
    let t = 0;

    function resize() {
      canvas!.width  = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    // Fractal Brownian Motion — 4 octaves
    function fbm(x: number, y: number): number {
      let v = 0, amp = 1, freq = 1, max = 0;
      for (let o = 0; o < 4; o++) {
        v   += noise(x * SCALE * freq, y * SCALE * freq, t * (1 + o * 0.4)) * amp;
        max += amp;
        amp  *= 0.5;
        freq *= 2.1;
      }
      return v / max;
    }

    function draw() {
      const W = canvas!.width;
      const H = canvas!.height;
      ctx!.clearRect(0, 0, W, H);
      ctx!.strokeStyle = '#0a0a0a';
      ctx!.lineWidth   = 0.75;
      ctx!.globalAlpha = OPACITY;

      const cols = Math.ceil(W / CELL) + 1;
      const rows = Math.ceil(H / CELL) + 1;

      // Sample noise field
      const field = new Float32Array(cols * rows);
      for (let r = 0; r < rows; r++)
        for (let c = 0; c < cols; c++)
          field[r * cols + c] = fbm(c * CELL, r * CELL);

      // Marching squares
      for (const thr of thresholds) {
        ctx!.beginPath();
        for (let r = 0; r < rows - 1; r++) {
          for (let c = 0; c < cols - 1; c++) {
            const x   = c * CELL, y = r * CELL;
            const v00 = field[r * cols + c];
            const v10 = field[r * cols + c + 1];
            const v01 = field[(r + 1) * cols + c];
            const v11 = field[(r + 1) * cols + c + 1];

            const s = ((v00 > thr) ? 8 : 0) | ((v10 > thr) ? 4 : 0)
                    | ((v11 > thr) ? 2 : 0) | ((v01 > thr) ? 1 : 0);
            if (s === 0 || s === 15) continue;

            const eps  = 1e-6;
            const top    = [x + ((thr - v00) / (v10 - v00 + eps)) * CELL, y];
            const right  = [x + CELL, y + ((thr - v10) / (v11 - v10 + eps)) * CELL];
            const bottom = [x + ((thr - v01) / (v11 - v01 + eps)) * CELL, y + CELL];
            const left   = [x, y + ((thr - v00) / (v01 - v00 + eps)) * CELL];

            const segs: number[][][] = [];
            switch (s) {
              case  1: case 14: segs.push([bottom, left]);          break;
              case  2: case 13: segs.push([right,  bottom]);        break;
              case  3: case 12: segs.push([right,  left]);          break;
              case  4: case 11: segs.push([top,    right]);         break;
              case  6: case  9: segs.push([top,    bottom]);        break;
              case  7: case  8: segs.push([top,    left]);          break;
              case  5: segs.push([top, left],   [right, bottom]);   break;
              case 10: segs.push([top, right],  [bottom, left]);    break;
            }
            for (const [a, b] of segs) {
              ctx!.moveTo(a[0], a[1]);
              ctx!.lineTo(b[0], b[1]);
            }
          }
        }
        ctx!.stroke();
      }

      t += SPEED;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
