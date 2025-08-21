import React from 'react';
import SongPage from '../components/SongPage';

export default function CryMeARealtor() {
  const lyrics = `You got the porch swing, the pearly gate fence
Told your friends I was high-maintenance
I got the silence, the legal fees
And a lawn full of dead daffodils and dreams

You hung my picture where the liquor once lived
Now you're drunk on the mess you said I did
You’re postin’ prayers from your parents' pool
Bless your heart, you sentimental fool

You miss the view, I miss my name
You miss the shade, I miss the flame
Don’t call me cryin’ like you lost a war
Go cry to someone who sells metaphor

Cry me a realtor, maybe they’ll care
When you’re locked outta love and your boxes are bare
You took the house, the couch, and my dignity too
Now you’re weepin’ on hardwood like I did for you
You want someone to show up? I ain’t your dealer
Dial 1-800-Cry-Me-A-Realtor

You held the keys like a Bible belt
Preached about truth while you kissed someone else
I stopped by once to grab my coat
Saw her standin’ in my robe like a wedding ghost

The walls still echo when she says your name
I left my soul in the windowpane
But she’ll find the rot in the crawlspace soon
And blame the foundation, not the groom

You miss the porch, I miss the light
You miss the buzz, I miss the fight
You think you’re lonely with a mortgage score?
Go cry to someone who sells metaphor

Cry me a realtor, maybe they’ll care
When you’re locked outta love and your boxes are bare
You took the house, the couch, and my dignity too
Now you’re weepin’ on hardwood like I did for you
You want someone to show up? I ain’t your dealer
Dial 1-800-Cry-Me-A-Realtor

I built the life, you listed it
You made your bed — she rented it
And if you’re wonderin’ where I went?
Try the backyard, past regret, behind the tent

Cry me a realtor, hope they pick up
Tell ‘em you’re stuck with your half-empty cup
You sold your soul for a walk-in closet
Now cry me a closing, and I hope you lost it
You want sympathy staged? Better call her sooner
Or leave a voicemail for your realtor rumor

This listing has expired. Bye.`;

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
          <li><strong>Genre:</strong> Country</li>
          <li><strong>Duration:</strong> 3:19</li>
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
      title="Cry Me A Realtor"
      artist="Georgia Wixen"
      releaseDate="September 19, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="#soon"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2DC36AE360%2DAB1D%2D404C%2DAC1986A16472E946%2D%2Dmod%2D1755673003%2Ejpg"
    />
  );
}
