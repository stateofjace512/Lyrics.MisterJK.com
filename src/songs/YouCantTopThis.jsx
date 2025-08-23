import React from 'react';
import SongPage from '../components/SongPage';

export default function YouCantTopThis() {
  const lyrics = `I saw her in your story
Blonde, too sweet
Wearin' that smile you said you hated on me
She copies my laugh, my pose, my tone
Tell me baby, how's it feel dating a clone?

You say "it's different" but she orders what I did
You say "I've moved on" but your playlist still hits
You're lookin' for me in lips that don't bite
You're in love with the ghost you swore you didn't like

YOU CAN'T TOP THIS
Top this
Top this
Top this
Top this
Top this
Top this
I'm the climax in your silence
In your silence
In your silence
In your silence
The name you skip in therapy the girl who made you timeless
Oh go ahead play pretend
But every high's a myth
You can date lips but
YOU CAN'T TOP THIS

I'm not mad
I'm not pressed
I got promoted to "ex you regret"
I sleep fine, while you obsess over girls who dress like me
And almost impress

You say "she's better"
But she quotes my line
You said you're "over it", then liked my post at midnight
You ran away, but I became the sky
You can't stop watching what you let die

YOU CAN'T TOP THIS
I'm the peak that broke your meter
The taste in your new lips
That only makes it weaker
Try again call it bliss
But every touch still twists
You can move your hips but
YOU CAN'T TOP THIS

You didn't break me
You branded me
Every girl after carries a piece of me
You don't date you compare
You don't heal you stare
You made you mess, but I made history

YOU CAN'T TOP THIS
I'm the burn beneath your rebound
The echo in your new sound
The scream you can't admit
Go flirt, go fuck, go fake a fit
You'll get a spark but not this hit
You had a flame but I lit the wick
And baby you can't
Top this`;

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
          <li><strong>Genre:</strong> Pop/Alternative</li>
          <li><strong>Track:</strong> 9 of 10</li>
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
      title="You Can't Top This"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=9"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}
