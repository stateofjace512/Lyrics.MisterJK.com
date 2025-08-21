import React from 'react';
import SongPage from '../components/SongPage';

export default function InContempt() {
  const lyrics = `You took the stand with a practiced smile
Played the victim like it’s been a while
Said I was crazy, said you were calm
Funny how your story forgets what it’s from

You passed the blame like closing remarks
Told ‘em I left without showing the marks
But I kept the texts and the proof you erased
So don’t act clean in a courtroom of grace

Now I’m in contempt
Of you and your grin
Told the whole room you never gave in
You called it love, I call it perjury
Your honor, he broke more than just me
I rest my case, but not my rage
You’re free to go, I’ll set the stage
No need for bail or good intent
This court is closed, and I’m in contempt

Your alibi’s stitched with holes and flair
But I cross-examined every stare
They gasped when you said you “meant no harm”
I smiled and rolled up my emotional arms

You wore the charm like a tailored suit
But I had the motive and I had the proof
You faked the tears, I filed the facts
And brought your secrets in legal pads

Now I’m in contempt
Of you and your grin
Told the whole room you never gave in
You called it love, I call it perjury
Your honor, he broke more than just me
I rest my case, but not my rage
You’re free to go, I’ll set the stage
No need for bail or good intent
This court is closed, and I’m in contempt

So let the jury talk, let the gavel fall
I don’t need justice, I’ve heard it all
You want forgiveness? File appeal
But I don’t reopen what I had to feel

I’m in contempt
For holdin’ it in
For swallowin’ truths just to let you win
You called it love, I call it perjury
And I won’t fake peace just to set you free
I rest my voice, but not my name
You lost your right to plead the same
No sentence fits the time you spent
So here’s your verdict: I’m in contempt`;

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
      title="In Contempt"
      artist="Georgia Wixen"
      releaseDate="September 19, 2025"
      lyrics={lyrics}
      credits={credits}
      listenUrl="#soon"
      coverImage="https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9759764%2D%2DC36AE360%2DAB1D%2D404C%2DAC1986A16472E946%2D%2Dmod%2D1755673003%2Ejpg"
    />
  );
}
