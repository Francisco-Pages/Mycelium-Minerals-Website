'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

const PHOTOS = [
  { src: '/images/gallery/ops-01.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Diamond drill rig on site.' },
  { src: '/images/gallery/ops-02.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Core sample extraction.' },
  { src: '/images/gallery/ops-03.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Drill crew at work.' },
  { src: '/images/gallery/ops-04.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Geological logging of core samples.' },
  { src: '/images/gallery/ops-05.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Site preparation and excavation.' },
  { src: '/images/gallery/ops-06.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'CAT 320D2L excavator in operation.' },
  { src: '/images/gallery/ops-07.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Core tray with mineralized samples.' },
  { src: '/images/gallery/ops-08.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Field geologist reviewing core.' },
  { src: '/images/gallery/ops-09.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Ingetrol Explorer drill rig setup.' },
  { src: '/images/gallery/ops-10.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Access road to drill platform.' },
  { src: '/images/gallery/ops-11.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Soil sampling grid in the north zone.' },
  { src: '/images/gallery/ops-12.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Trench excavation in the SW zone.' },
  { src: '/images/gallery/ops-13.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Water quality monitoring by PetroLab.' },
  { src: '/images/gallery/ops-14.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Core sample with visible mineralization.' },
  { src: '/images/gallery/ops-15.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Field team morning briefing.' },
  { src: '/images/gallery/ops-16.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Scania P140 dump truck on site.' },
  { src: '/images/gallery/ops-17.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Open-pit target zone.' },
  { src: '/images/gallery/ops-18.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Drill hole collar marking.' },
  { src: '/images/gallery/ops-19.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Carbonate-quartz vein outcrop.' },
  { src: '/images/gallery/ops-20.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Sample bagging for ALS Peru lab.' },
  { src: '/images/gallery/ops-21.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Resident geologist on site.' },
  { src: '/images/gallery/ops-22.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Paved highway access from Santa Cruz.' },
  { src: '/images/gallery/ops-23.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Drill rod assembly.' },
  { src: '/images/gallery/ops-24.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Core trays lined up for logging.' },
  { src: '/images/gallery/ops-25.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Tailings area under evaluation.' },
  { src: '/images/gallery/ops-26.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Biotite schist host rock sample.' },
  { src: '/images/gallery/ops-27.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Survey equipment in the field.' },
  { src: '/images/gallery/ops-28.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Field camp at the project site.' },
  { src: '/images/gallery/ops-29.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Drill rig at dusk.' },
  { src: '/images/gallery/ops-30.jpg', location: 'Los Clavillos, Santa Cruz', caption: 'Ground crew changing drill rods.' },
  { src: '/images/gallery/ops-31.jpg', location: 'Cerrito XXI, Concepción', caption: 'Geological reconnaissance traverse.' },
  { src: '/images/gallery/ops-32.jpg', location: 'Cerrito XXI, Concepción', caption: 'Precambrian gneiss outcrop.' },
  { src: '/images/gallery/ops-33.jpg', location: 'Cerrito XXI, Concepción', caption: 'Quartz vein with amethyst.' },
  { src: '/images/gallery/ops-34.jpg', location: 'Cerrito XXI, Concepción', caption: 'Laterite cap exposure at surface.' },
  { src: '/images/gallery/ops-35.jpg', location: 'Cerrito XXI, Concepción', caption: 'Soil sampling at grid point.' },
  { src: '/images/gallery/ops-36.jpg', location: 'Cerrito XXI, Concepción', caption: 'K-feldspar megacrysts in gneiss.' },
  { src: '/images/gallery/ops-37.jpg', location: 'Cerrito XXI, Concepción', caption: 'Field mapping in the Chiquitanía domain.' },
  { src: '/images/gallery/ops-38.jpg', location: 'Cerrito XXI, Concepción', caption: 'GPS boundary survey.' },
  { src: '/images/gallery/ops-39.jpg', location: 'Cerrito XXI, Concepción', caption: 'Dense vegetation cover above outcrop.' },
  { src: '/images/gallery/ops-40.jpg', location: 'Cerrito XXI, Concepción', caption: 'Paved highway access from San Ramón.' },
  { src: '/images/gallery/ops-41.jpg', location: 'Cerrito XXII, Concepción', caption: 'Brecciated quartz vein target zone.' },
  { src: '/images/gallery/ops-42.jpg', location: 'Cerrito XXII, Concepción', caption: '4 km NW-SE vein corridor.' },
  { src: '/images/gallery/ops-43.jpg', location: 'Cerrito XXII, Concepción', caption: 'Amphibolite schist in San Ignacio supergroup.' },
  { src: '/images/gallery/ops-44.jpg', location: 'Cerrito XXII, Concepción', caption: 'Quaternary alluvial sediments — placer target.' },
  { src: '/images/gallery/ops-45.jpg', location: 'Cerrito XXII, Concepción', caption: 'Iron oxide-stained quartz breccia.' },
  { src: '/images/gallery/ops-46.jpg', location: 'Cerrito XXII, Concepción', caption: 'Field team during mapping campaign.' },
  { src: '/images/gallery/ops-47.jpg', location: 'Cerrito XXII, Concepción', caption: 'Augengneis with K-feldspar phenocrysts.' },
  { src: '/images/gallery/ops-48.jpg', location: 'Cerrito XXII, Concepción', caption: 'Geological cross-section reference point.' },
  { src: '/images/gallery/ops-49.jpg', location: 'Cerrito XXII, Concepción', caption: 'Shear zone in gneiss complex.' },
  { src: '/images/gallery/ops-50.jpg', location: 'Cerrito XXII, Concepción', caption: 'Priority drill target — NW corridor.' },
  { src: '/images/gallery/ops-51.jpg', location: 'Precambrian Shield, Bolivia', caption: 'Regional landscape over the concession area.' },
  { src: '/images/gallery/ops-52.jpg', location: 'Precambrian Shield, Bolivia', caption: 'Bolivian Shield savanna terrain.' },
  { src: '/images/gallery/ops-53.jpg', location: 'Precambrian Shield, Bolivia', caption: 'Community liaison visit.' },
  { src: '/images/gallery/ops-54.jpg', location: 'Precambrian Shield, Bolivia', caption: 'Team debrief after field session.' },
  { src: '/images/gallery/ops-55.jpg', location: 'Precambrian Shield, Bolivia', caption: 'Sunset over the eastern Bolivia lowlands.' },
].map((p) => ({ ...p, alt: `${p.location} — ${p.caption}` }));

export function GalleryGrid() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(() => setSelected((i) => (i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null)), []);
  const next = useCallback(() => setSelected((i) => (i !== null ? (i + 1) % PHOTOS.length : null)), []);

  useEffect(() => {
    if (selected === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, close, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = selected !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selected]);

  return (
    <>
      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-0">
        {PHOTOS.map((photo, i) => (
          <button
            key={photo.src}
            onClick={() => setSelected(i)}
            className="block w-full break-inside-avoid border border-obsidian/10 hover:border-obsidian transition-colors cursor-pointer group text-left"
          >
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
            <div className="px-4 py-3 border-t border-obsidian/10 bg-white group-hover:bg-offwhite transition-colors">
              <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold truncate">
                {photo.location}
              </p>
              <p className="mt-0.5 text-sm text-obsidian/70 leading-snug">
                {photo.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-obsidian/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/70 hover:text-white font-mono text-sm uppercase tracking-widest transition-colors z-10"
          >
            Close ✕
          </button>

          {/* Counter */}
          <p className="absolute top-6 left-6 font-mono text-sm text-white/50">
            {selected + 1} / {PHOTOS.length}
          </p>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-white/60 hover:text-white font-mono text-2xl transition-colors z-10 px-4 py-8"
          >
            ←
          </button>

          {/* Image + caption */}
          <div
            className="relative w-full max-w-5xl mx-16 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[selected].src}
              alt={PHOTOS[selected].alt}
              width={1200}
              height={900}
              className="object-contain w-full max-h-[78vh]"
              priority
            />
            <div className="mt-3 px-1">
              <p className="text-xs font-mono font-medium uppercase tracking-widest text-gold">
                {PHOTOS[selected].location}
              </p>
              <p className="mt-1 text-sm text-white/80">
                {PHOTOS[selected].caption}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-white/60 hover:text-white font-mono text-2xl transition-colors z-10 px-4 py-8"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
