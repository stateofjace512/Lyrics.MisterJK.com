import React from 'react';
import SongPage from '../components/SongPage';

export default function AskMama() {
  const lyrics = `(B) (G#m) (E) (F#)

I said I wouldn't (B)call him
I said I knew the cost
But now I'm wearin' (G#m)perfume
That smells a little lost

I typed out "you up(E)?" and paused
Heart racin', red alert
I said I'd never (F#)go back
But I've done dumber things in skirts

I could blame the (E)wine
Or this old (F#)T-shirt
But if I press (G#m)send
Someone's gonna get hurt

So I'll ask (E)Mama
She'll talk me (F#)down
Say, "Baby, if it's (B)love, you don't (F#/Bb)need to chase it '(G#m)round"
She'll say "You called me (E)last time with the same reg(F#)ret"
So I'll ask (E)Mama
(F#)Just not ye(B)t

(B)

He said he's (B)changed, of course he did
They always do when you forget
I got his (G#m)number in a folder
Marked "We Don't Text"

But I (E)miss the sound he made
When he said my name half wrong
Like he (F#)never fully got me
But I still played along

Mama said, "(B)The nice ones'll kill you quicker"
But silence hurts (G#m)too
And I'm a slow forgiver

So I'll ask (E)Mama
If I should (F#)reply
Maybe she'll rem(B)ind me of the (F#/Bb)last good(G#m)bye
She'll say, "Did he say (E)sorry or did you just forg(F#)et?"
So I'll ask (E)Mama
(F#)Just not yet

(G#m7) (F#/Bb)

(B)Mama sai(E)d,
"If you gotta (B)ask me,
then (F#)you already know"
And she was (E)right
But knowing ain't the (B)same
As not wanting to (F#)go

So I asked (E)Mama
She didn't say (F#)much
Just looked at (G#m7)me with e(B)yes that had enough
She said, "I won't (E)stop you But I won't pre(F#)tend"
"If you go back, (G#m)baby, (G#m7)don't call me again"

So (E)I hung up the phone
(F#)Put down the threat
And (B)whispered to the ceiling,
"Not (G#m7)yet"

I'll ask (E)mama, when I'm (F#)ready
To (B)hear what I already know

(G#m7)`;

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
          <li><strong>Genre:</strong> Country</li>
          <li><strong>Track:</strong> 2 of 10</li>
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
      title="I'll Ask Mama"
      artist="The Nice Girls"
      albumTitle="The Nice Girls (Diamond Edition)"
      releaseDate="July 4, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="https://www.youtube.com/watch?v=HW6-5e4kEeE&list=OLAK5uy_m0moqCtsFL3rPgy3eEAdhxNq-XWR-AwQI&index=2"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2D0C6CDD92%2D888F%2D4153%2D8D22A7371C7CA986%2D%2D0%2D%2D6081121%2D%2Dedit5%2Ejpg"
      albumSlug="the-nice-girls-diamond-edition"
      isAlbumTrack={true}
    />
  );
}
