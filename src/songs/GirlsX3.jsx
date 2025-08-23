import React from 'react';
import SongPage from '../components/SongPage';

export default function GirlsX3() {
  const lyrics = `Met a girl lip gloss cherry red
Heart racing girl crush in my head
Sneaking smiles sneaking out at night
Yeah she's trouble but she feels just right

Text my friends like "Oh my God"
Is it real or am I caught
Dreamin in colors I never knew
Falling hard is she feelin it too

GIRLSGIRLSGIRLS break my heart just right
Glossy lips bedroom eyes midnight fights
Boys are fine but girls change lives
Every day's pride when you're on my mind

GIRLSGIRLSGIRLS keep me up all night
Drama queen prom dress scenes neon lights
Boys are cute but girls define
Every single lyric in my mind

Best friend's sleepovers turned into something else
Summer secrets hiding kisses on the shelf
Her perfume still stuck on my sweater
Girls do everything better

Told my mom she just smiled
Said "I know it took a while"
All my playlists scream her name
Never been so glad to blame

GIRLSGIRLSGIRLS break my heart just right
Glossy lips bedroom eyes midnight fights
Boys are fine but girls change lives
Every day's pride when you're on my mind

GIRLSGIRLSGIRLS keep me up all night
Drama queen prom dress scenes neon lights
Boys are cute but girls define
Every single lyric in my mind

First crush, first kiss, first heartbreak worth it
Bad at math good at this
Loving girls is happiness

GIRLSGIRLSGIRLS crack my heart just right
Glossy lips bedroom eyes midnight fights
Boys are fine but girls change lives
Every day's pride when you're on my mind
Mind`;

  const credits = (
    <>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Production</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Performed by:</strong> Jasmine Erica, Georgia Wixen & Danica Williams</li>
          <li><strong>Written by:</strong> Jacob Robison</li>
          <li><strong>Produced by:</strong> Jacob Robison</li>
          <li><strong>Mixed by:</strong> Jacob Robison</li>
          <li><strong>Mastered by:</strong> Jacob Robison</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Album Information</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Album:</strong> The Nice Girls (Diamond Edition)</li>
          <li><strong>Label:</strong> MRJK Records</li>
          <li><strong>Release Date:</strong> July 4, 2025</li>
          <li><strong>Genre:</strong> Pop</li>
          <li><strong>Track:</strong> 7 of 10</li>
        </ul>
        <div className="mt-4 pt-4 border-t border-neutral-300">
          <p className="text-neutral-500 text-sm">
            Lyrics © Jacob Robison. Licensed in perpetuity to Jacob Robison (MRJK).<br />
            Recording ℗ MRJK / Jacob Robison.<br />
            © MRJK Records 2025
          </p>
        </div>
      </div>
    </>
  );

  return (
    <SongPage
      title="GIRLSGIRLSGIRLS"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=7"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}
