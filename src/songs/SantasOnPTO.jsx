import React from 'react';
import SongPage from '../components/SongPage';
import ChordLyrics from '../components/ChordLyrics';
export default function SantasOnPTO() {
  const lyrics = `(F) (Dm) 

(F)Out of office, red suit's dry cleaned
(Dm)He left the elves on read and dipped the scene
(Bb)Said "I'm tired of letters, give me sand"
(C)Now he's barefoot with a drink in hand
(F)Mrs. Claus said "he's been tense"
(Dm)Now he's shirtless on a beach in France
(Bb)Reindeer gone, no sleigh in sight
(C)Santa took a jet and missed his flight

(F)Santa's on PTO
He's not checkin' (Dm)twice, he's letting it go
No (Gm)chimney dives, no ho-ho-ho
He said (Bb)"baby, I'm burnt out, (C)let it snow"
Nah, (F)he's sippin' (Am)eggnog (Dm)on a (Bb)boat 
(Gm)Sleigh parked, no coat Let the North Pole (Bb)know 
Santa's on (C)PTO 

(F)

He (F)unfollowed the naughty list
Said "I've been (Dm)working through December pissed"
Now (Bb)he's got SPF on his belly
Watching (C)Die Hard in a beach house in Maui
(F)Candy canes in a coconut cup
(Dm)Rudolph's out here turnin' up
(Bb)Christmas in July's the mood
(C)Santa said, "catch me in swim trunks, dude"

(F)Santa's on PTO
Burned his calendar, (Dm)let the deadlines go
No (Gm)reindeer, no snow patrol
He's (Bb)ghosted the Pole and (C)gained control
Yeah, he's (Dm)on a hammock with a (Am)tan
Reading fan mail (Dm)from a (Bb)fan 
(Gm)Tell the elves "don't call, just (Bb)go"
Santa's on (C)PTO 

(F)

You (Bb)better not pout, better not cry
He's not (C)answering 'til the 25th of July
No (Gm)cookies, no milk, just (Bb)rum and lime
(F)Santa's reclaiming his (Bb)overtime

(F)Santa's on PTO
No sleigh (Dm)bells, just a radio
Flip-(Gm)flops where the boots should go
He said “(Bb)Merry whatever, I'm (C)moving slow"
So, (F)if your tree's on (A)fire
Or your (Dm)lights won't (Bb)glow
(Gm)Too bad, (G)babe (Bb)Santa's on (A)PTO`;
  const credits = (
    <>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Production</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Artist:</strong> Harley Towers</li>
          <li><strong>Written by:</strong> Jacob Robison & Harley Towers</li>
          <li><strong>Produced by:</strong> Jacob Robison</li>
          <li><strong>Mixed by:</strong> Jacob Robison</li>
          <li><strong>Mastered by:</strong> Jacob Robison</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-neutral-900 mb-3">Release Information</h3>
        <ul className="text-neutral-700 space-y-1">
          <li><strong>Label:</strong> MRJK Records</li>
          <li><strong>Release Date:</strong> June 1, 2025</li>
          <li><strong>Genre:</strong> Holiday/Pop</li>
          <li><strong>Duration:</strong> 2:46</li>
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
      title="Santa's On PTO"
      artist="Harley Towers"
      releaseDate="June 1, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=Lh1CxSsQRVI&list=OLAK5uy_nHYB7FsLDcL7XxNrqNoJAgmcdyUrJmhbk"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D1DC9FD7B%2D1509%2D4336%2D9FEDBC965141046C%2D%2D0%2D%2D3926753%2D%2DHAHHAHA%2Ejpg"
    />
  );
}
