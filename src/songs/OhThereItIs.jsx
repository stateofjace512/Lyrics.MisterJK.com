import React from 'react';
import SongPage from '../components/SongPage';

export default function OhThereItIs() {
  const lyrics = `I can't find my purse
Have you seen my purse?
Oh, there it is

(Em) (D) (C) (G)

Everything I am is (Em)in that bag
ID, lip gloss, keys to the (D)past
Receipts of heartbreak, (C)coins of regret
Mascara I wore when (G)I first left

I dug through couches, (Em)floors, my soul
Thought I lost my (D)self control
Spinning rooms, for(C)gotten names
Empty hands and full of blame

Oh, there it is
(G)In the mirror, in the dark
(D)By the door where I fell (Em)apart
Oh, there it (C)is
(G)Sitting still through all my doubt
(D)Like it never even left the hou(Em)se
Oh, there it (C)is
The (Am7)proof I'm still al(D)ive
The purse that holds my life

(G)

It's got gum (Em)from 2010
A note I (D)never dared to send
A scrunchie that s(C)till smells like June
An old receipt (G)for a silver spoon

I thought I (Em)lost my place in time
Turns out it was (D)just under my mind
The zipper stuck, the lining to(C)rn
But it still carries everything I've worn

Oh, there it is
(G)On the counter by the light
(D)Where I searched a hundred nigh(Em)ts
Oh, there it i(C)s
(Oh, there it is)
(G)All the weight I thought I dropped
(D)Turns out I just forgot to st(Em)op
Oh, there it i(C)s

Don't need a map
Don't (D)need a prayer
My (Em)purse was always (D)sitting there
And (G)maybe I'm the same as it
Scuffed and loud but still legit

Oh, there it i(A#)s
(F)Not just leather, not just (Gm)straps
It's everything I (D#)ever had
Oh, there it i(A#)s
If I ever get lost (F)again
I'll check the purse
And start from t(Gm)he(D#)n
Oh, there it i(A#)s
Oh, there it i(F)s
Oh, there I a(Gm)m

(D#)`;

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
          <li><strong>Track:</strong> 1 of 10</li>
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
  const bpm = 100;
  const keySig = "Em - B♭ major";
  const capo = "No capo";

  return (
    <SongPage
      title="Oh, There It Is!"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=1"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
      bpm={bpm} 
      keySig={keySig} 
      capo={capo}  
    />
  );
}
