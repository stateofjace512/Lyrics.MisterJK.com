import React from 'react';
import SongPage from '../components/SongPage';

export default function YallCanWait() {
  const lyrics = `Don’t knock, I heard you
I know what time it is
But I’m still brushing through
The parts of me that don’t forgive
The coffee's cold, the sky’s turned gray
My phone’s lit up, I let it stay
Some days, just getting dressed
Is all the war I’ve got to wage

So if I show up late or not at all
Don’t take it personal, don’t call
I’m not your story to narrate
And I’m not here to validate

Y’all can wait
If I need more time
To find my breath, to feel alright
I won’t twist just to fit your view
Ain’t running just to prove it to you
Y’all can wait
While I move slow
Healing don’t follow a “should’ve” road
I’ll be there when I’ve cleared the weight
And if I’m not
Y’all can wait

Lower your expectations
I’m not making accommodations
Not shrinking just to keep the peace
Not rushing so you’ll think of me sweet

Y’all can wait
I’ve earned this grace
Every minute, every place
I gave too much for too long
Now I don’t owe what I don’t want
Y’all can wait
Let me be late
Let me be whole at my own rate
This heart don’t bend for old debate
You want me now?
Y’all can wait`;

  const credits = (
    <>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Production</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Artist:</strong> Georgia Wixen</li>
          <li><strong>Written by:</strong> Jacob Robison & Georgia Wixen</li>
          <li><strong>Produced by:</strong> Jacob Robison</li>
          <li><strong>Mixed by:</strong> Jacob Robison</li>
          <li><strong>Mastered by:</strong> Jacob Robison</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Release Information</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Label:</strong> Georgia Wixen Records</li>
          <li><strong>Release Date:</strong> September 19, 2025</li>
          <li><strong>Genre:</strong> Country/Rock</li>
          <li><strong>Duration:</strong> 2:24</li>
        </ul>
        <div className="mt-4 pt-4 border-t border-neutral-300">
          <p className="text-neutral-500 text-sm">
            Lyrics © Jacob Robison. Licensed in perpetuity to Jacob Robison (MRJK).<br />
            Recording ℗ MRJK / Jacob Robison.<br />
            © MRJK Records 2025 / © Georgia Wixen Records 2025
          </p>
        </div>
      </div>
    </>
  );

  return (
    <SongPage
      title="Y'all Can Wait"
      artist="Georgia Wixen"
      releaseDate="September 19, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="#soon"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2DC36AE360%2DAB1D%2D404C%2DAC1986A16472E946%2D%2Dmod%2D1755673003%2Ejpg"
    />
  );
}
