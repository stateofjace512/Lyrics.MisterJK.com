import React from 'react';
import Navigation from './Navigation';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import ChordLyrics from "./ChordLyrics";

export default function SongPage({
  title,
  artist,
  albumTitle,
  releaseDate,
  lyrics,
  credits,
  listenUrl,
  coverImage,
  albumSlug,
  isAlbumTrack = false,
}) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Paper / subtle noise background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(1200px 800px at 20% -10%, rgba(0,0,0,0.06), transparent 60%), radial-gradient(1000px 700px at 110% 10%, rgba(0,0,0,0.05), transparent 55%), linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)',
        }}
      />

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-20"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.015" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <Navigation />

      <main className="relative z-10 min-h-screen pt-20 pb-8 px-4">
        <div className="w-full max-w-4xl mx-auto">
          {/* Button row */}
          <div className="mb-6 flex gap-4 items-center">
            {/* Home button */}
            <EmbossedLink
              href="https://misterjk.com/"
              className="inline-flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return Home</span>
            </EmbossedLink>
      
            {/* Lyrics button */}
            <EmbossedLink href="/" className="inline-flex items-center space-x-2">
              <span>View All Lyrics</span>
            </EmbossedLink>
          </div>
          {/* Main content card */}
          <div className="rounded-2xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.15)] ring-1 ring-black/5 p-6 md:p-10">
            {/* Header with cover art */}
            <div className="flex flex-col md:flex-row gap-8 mb-10">
              {coverImage && (
                <div className="flex-shrink-0">
                  <div className="relative rounded-xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-50 shadow-[0_10px_20px_rgba(0,0,0,0.18)] p-3 w-48">
                    <div className="rounded-lg p-1 bg-gradient-to-b from-white/80 to-neutral-100/80">
                      <img
                        src={coverImage}
                        alt={`${title} cover`}
                        className="w-full aspect-square object-cover rounded-md"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm mb-4">
                  {title}
                </h1>

                {artist && <p className="text-2xl text-neutral-700 mb-2">{artist}</p>}

                {albumTitle && (
                  <p className="text-lg text-neutral-600 mb-2">
                    from <em>{albumTitle}</em>
                  </p>
                )}

                {releaseDate && (
                  <p className="text-sm text-neutral-500 mb-6">{releaseDate}</p>
                )}

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3">
                  {listenUrl && (
                    <EmbossedLink href={listenUrl} external>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Listen Now
                    </EmbossedLink>
                  )}

                  {isAlbumTrack && albumSlug && (
                    <EmbossedLink href={`/album/${albumSlug}`}>
                      View Full Album
                    </EmbossedLink>
                  )}
                </div>
              </div>
            </div>

            {/* Lyrics Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-neutral-800 mb-6">Lyrics</h2>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                <div className="prose prose-neutral max-w-none">
                  <ChordLyrics text={lyrics} />
                </div>
              </div>
            </section>
            {/* Credits Section */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-neutral-800 mb-6">
                Credits & Information
              </h2>
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">{credits}</div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <footer className="text-center mt-10 px-4 py-6">
            <div className="mx-auto inline-block rounded-xl border border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-200 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)]">
              <p className="text-xs text-neutral-700">
                © MRJK Records, a division of Jake Robison Records. © Georgia Wixen
                Records, a division of Jake Robison Records. The Nice Girls™ name,
                photos, and music are the property of Jake Robison Records.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function EmbossedLink({ href, children, external = false, className = '' }) {
  const base =
    'inline-flex items-center justify-center rounded-md border border-neutral-300 ' +
    'bg-gradient-to-b from-white to-neutral-200 text-neutral-900 ' +
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_6px_rgba(0,0,0,0.12)] ' +
    'active:shadow-inner active:translate-y-px focus:outline-none focus:ring-2 focus:ring-blue-500/60 ' +
    'transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ' +
    'px-4 py-2 text-sm font-semibold';

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${className}`}>
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={`${base} ${className}`}>
      {children}
    </a>
  );
}
