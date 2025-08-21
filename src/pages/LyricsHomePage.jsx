import React from 'react';
import Navigation from '../components/Navigation';
import { Music, FileText } from 'lucide-react';

export default function LyricsHomePage() {
  const releases = [
    {
      title: 'The Sweet Tea Tragedies',
      artist: 'Georgia Wixen',
      date: 'coming 9/19/2025',
      cover: 'https://i.postimg.cc/XnzbZ5kp/TSSTCDFRONTEDIT.jpg',
      alt: 'The Sweet Tea Tragedies cover',
      songs: [
        { title: "Y'all Can Wait", slug: 'yall-can-wait', artist: 'Georgia Wixen' },
        { title: "Hair Me Out", slug: 'hair-me-out', artist: 'Georgia Wixen' },
        { title: "Cry Me a Realtor", slug: 'cry-me-a-realtor', artist: 'Georgia Wixen' },
        { title: "In Contempt", slug: 'in-contempt', artist: 'Georgia Wixen' },
        { title: "I Do (I Don't)", slug: 'i-do-i-dont', artist: 'Georgia Wixen' }
      ],
    },
    {
      title: "I Do (I Don't)",
      artist: 'Georgia Wixen',
      date: '8/10/2025',
      cover: 'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D5889D19C%2DF5B1%2D4BE6%2DBDBCB5BE5D86238A%2D%2D0%2D%2D9283746%2D%2Dididpromocover8%2E11%2E25%2Ejpg',
      alt: "I Do (I Don't) cover",
      songs: [
        { title: "I Do (I Don't)", slug: 'i-do-i-dont', artist: 'Georgia Wixen' }
      ],
    },
    {
      title: 'Hair Me Out',
      artist: 'Georgia Wixen',
      date: '8/8/2025',
      cover: 'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2DED907914%2DC769%2D4575%2DA2C5E3B070BC57E9%2D%2D0%2D%2D334737%2D%2Dhmoinstaedit%2Ejpg',
      alt: 'Hair Me Out cover',
      songs: [
        { title: 'Hair Me Out', slug: 'hair-me-out', artist: 'Georgia Wixen' }
      ],
    },
    {
      title: 'The Nice Girls (Diamond Edition)',
      artist: 'The Nice Girls',
      date: '07/04/2025',
      cover: 'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg',
      alt: 'The Nice Girls Diamond Edition cover',
      songs: [
        { title: "Oh, There It Is!", slug: 'oh-there-it-is', artist: 'Jasmine Erica' },
        { title: "I'll Ask Mama", slug: 'ill-ask-mama', artist: 'Georgia Wixen' },
        { title: 'Return Policy', slug: 'return-policy', artist: 'Danica Williams' },
        { title: "Sharin' Location", slug: 'sharin-location', artist: 'Georgia Wixen' },
        { title: 'I Sat With That', slug: 'i-sat-with-that', artist: 'Jasmine Erica' },
        { title: 'Inside Voice', slug: 'inside-voice', artist: 'Danica Williams' },
        { title: 'GIRLSGIRLSGIRLS', slug: 'girlsgirlsgirls', artist: 'Georgia Wixen' },
        { title: 'Missed Me, Missed Out', slug: 'missed-me-missed-out', artist: 'Jasmine Erica' },
        { title: "You Can't Top This", slug: 'you-cant-top-this', artist: 'Danica Williams' },
        { title: 'Girl Down', slug: 'girl-down', artist: 'The Nice Girls' },
      ],
    },
    {
      title: "Santa's On PTO",
      artist: 'Harley Towers',
      date: '06/01/2025',
      cover: 'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D1DC9FD7B%2D1509%2D4336%2D9FEDBC965141046C%2D%2D0%2D%2D3926753%2D%2DHAHHAHA%2Ejpg',
      alt: "Santa's On PTO cover",
      songs: [
        { title: "Santa's On PTO", slug: 'santas-on-pto', artist: 'Harley Towers' }
      ],
    },
    {
      title: 'Hold, Secure, Evacuate (Know The Way)',
      artist: 'Various Artists',
      date: '02/29/2024',
      cover: 'https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D7A9F72C5%2DBE14%2D408E%2D868A1582EDF3F6E0%2D%2D0%2D%2D16938%2D%2Dtempcov%2Ejpg',
      alt: 'HSE cover',
      songs: [
        { title: 'Hold, Secure, Evacuate (Know The Way)', slug: 'hold-secure-evacuate', artist: 'Various Artists' }
      ],
    },
  ];

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
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.015" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Navigation */}
      <Navigation />

      {/* Header splash */}
      <div className="w-full mt-[6rem]">
        <div className="relative mx-auto max-w-6xl px-4">
          <div className="relative">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-b from-white to-neutral-200 shadow-[0_20px_40px_rgba(0,0,0,0.25)]" />
            <div className="relative rounded-lg border border-neutral-300 bg-white">
              <div className="rounded-lg p-8 bg-gradient-to-b from-white to-neutral-50 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm mb-4">
                  Song Lyrics & Credits
                </h1>
                <p className="text-xl text-neutral-600">
                  Browse lyrics and production credits from all MRJK Records releases
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shelf shadow */}
      <div className="pointer-events-none absolute left-1/2 top-[420px] h-6 w-[90%] -translate-x-1/2 rounded-full bg-neutral-900/10 blur-2xl" />

      {/* Main content */}
      <main className="relative z-10 min-h-screen pt-12 pb-0 px-4">
        <div className="w-full">
          <div className="rounded-2xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.15)] ring-1 ring-black/5 p-6 md:p-10">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-neutral-800 drop-shadow-sm mb-8">
              All Releases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {releases.map((release, index) => (
                <PolaroidTile key={index} release={release} />
              ))}
            </div>
          </div>

          <footer className="text-center mt-10 px-4 py-6">
            <div className="mx-auto inline-block rounded-xl border border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-200 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_8px_20px_rgba(0,0,0,0.15)]">
              <p className="text-xs text-neutral-700">
                © MRJK Records, a division of Jake Robison Records. © Georgia Wixen Records, a division of Jake Robison Records.
                The Nice Girls™ name, photos, and music are the property of Jake Robison Records.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function PolaroidTile({ release }) {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="relative">
      <div className="relative rounded-xl border border-neutral-300 bg-gradient-to-b from-white to-neutral-50 shadow-[0_10px_20px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-300 p-4">
        <div className="rounded-lg p-1 bg-gradient-to-b from-white/80 to-neutral-100/80 relative z-10">
          <div className="aspect-square mb-3 overflow-hidden rounded-md">
            <img
              src={release.cover}
              alt={release.alt}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <h3 className="text-lg font-semibold text-neutral-900">
              {release.title}
            </h3>
            {release.artist && (
              <p className="text-sm text-neutral-700">
                {release.artist}
              </p>
            )}
            {release.date && (
              <p className="text-xs text-neutral-600 mt-1">{release.date}</p>
            )}
          </div>

          <div className="mt-3">
            {release.songs.length > 0 ? (
              <EmbossedButton 
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full"
              >
                {isExpanded ? 'Hide Songs' : `View ${release.songs.length} Song${release.songs.length !== 1 ? 's' : ''}`}
              </EmbossedButton>
            ) : (
              <div className="text-center py-2 text-sm text-neutral-500 italic">
                Coming Soon
              </div>
            )}
          </div>

          {isExpanded && release.songs.length > 0 && (
            <div className="mt-3 space-y-2 border-t border-neutral-200 pt-3">
              {release.songs.map((song, songIndex) => (
                <SongLink key={songIndex} song={song} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SongLink({ song }) {
  return (
    <a 
      href={`/song/${song.slug}`}
      className="flex items-center space-x-3 p-2 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors cursor-pointer block shadow-sm hover:shadow-md"
    >
      <FileText className="w-4 h-4 text-neutral-500 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-neutral-800 text-sm truncate">
          {song.title}
        </p>
        <p className="text-xs text-neutral-600 truncate">
          {song.artist}
        </p>
      </div>
    </a>
  );
}

function EmbossedButton({ onClick, children, className = "" }) {
  const base =
    'inline-flex items-center justify-center rounded-md border border-neutral-300 ' +
    'bg-gradient-to-b from-white to-neutral-200 text-neutral-900 ' +
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_2px_6px_rgba(0,0,0,0.12)] ' +
    'active:shadow-inner active:translate-y-px focus:outline-none focus:ring-2 focus:ring-blue-500/60 ' +
    'transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ' +
    'px-4 py-2 text-sm font-semibold cursor-pointer';

  return (
    <button onClick={onClick} className={`${base} ${className}`}>
      {children}
    </button>
  );
}
