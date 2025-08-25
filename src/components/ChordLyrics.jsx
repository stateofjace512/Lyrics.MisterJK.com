import React, { useMemo } from "react";

/* ========================= DEFAULT DIAGRAMS =========================
   Common guitar chord fingerings with hardcoded barre info.
   Type flats as Bb/Db/etc. Pretty display (B♭, F♯) is handled by prettyChord().
   Override anything by passing a `diagrams` prop (yours win).
==================================================================== */
export const DEFAULT_DIAGRAMS = {
  // ---- MAJOR (open / barre) ----
  C:  { f: "x32010" },
  D:  { f: "xx0232" },
  E:  { f: "022100" },
  // Common F shape is a 1st-fret full barre
  F:  { f: "133211", barre: { fret: 1, start: 0, end: 5 } },
  G:  { f: "320003" },
  A:  { f: "x02220" },
  B:  { f: "x24442", barre: { fret: 2, start: 1, end: 5 } },
  // Enharmonics / flats (typical A-shape barre at 1)
  Bb: { f: "x13331", barre: { fret: 1, start: 1, end: 5 } },  "A#": { f: "x13331", barre: { fret: 1, start: 1, end: 5 } },
  Db: { f: "x46664", barre: { fret: 4, start: 1, end: 5 } },  "C#": { f: "x46664", barre: { fret: 4, start: 1, end: 5 } },
  Eb: { f: "x65343", barre: { fret: 6, start: 1, end: 5 } },  "D#": { f: "x65343", barre: { fret: 6, start: 1, end: 5 } },
  Gb: { f: "244322", barre: { fret: 2, start: 0, end: 5 } },  "F#": { f: "244322", barre: { fret: 2, start: 0, end: 5 } },
  Ab: { f: "466544", barre: { fret: 4, start: 0, end: 5 } },  "G#": { f: "466544", barre: { fret: 4, start: 0, end: 5 } },
  // ---- MINOR ----
  Am:  { f: "x02210" },
  Dm:  { f: "xx0231" },
  Em:  { f: "022000" },
  Fm:  { f: "133111", barre: { fret: 1, start: 0, end: 5 } },
  Gm:  { f: "355333", barre: { fret: 3, start: 0, end: 5 } },
  Bm:  { f: "x24432", barre: { fret: 2, start: 1, end: 5 } },
  Cm:  { f: "x35543", barre: { fret: 3, start: 1, end: 5 } },
  Bbm: { f: "x13321", barre: { fret: 1, start: 1, end: 5 } }, "A#m": { f: "x13321", barre: { fret: 1, start: 1, end: 5 } },
  Dbm: { f: "x46654", barre: { fret: 4, start: 1, end: 5 } }, "C#m": { f: "x46654", barre: { fret: 4, start: 1, end: 5 } },
  Ebm: { f: "x65343", barre: { fret: 6, start: 1, end: 5 } }, "D#m": { f: "x65343", barre: { fret: 6, start: 1, end: 5 } },
  Gbm: { f: "244222", barre: { fret: 2, start: 0, end: 5 } }, "F#m": { f: "244222", barre: { fret: 2, start: 0, end: 5 } },
  Abm: { f: "466444", barre: { fret: 4, start: 0, end: 5 } }, "G#m": { f: "466444", barre: { fret: 4, start: 0, end: 5 } },
  // ---- 7ths ----
  A7:  { f: "x02020" },
  B7:  { f: "x21202" },
  C7:  { f: "x32310" },
  D7:  { f: "xx0212" },
  E7:  { f: "020100" },
  F7:  { f: "131211", barre: { fret: 1, start: 0, end: 5 } },
  G7:  { f: "320001" },
  Bb7: { f: "x13131", barre: { fret: 1, start: 1, end: 5 } }, "A#7": { f: "x13131", barre: { fret: 1, start: 1, end: 5 } },
  // ---- m7 / maj7 ----
  Am7:   { f: "x02010" },
  Dm7:   { f: "xx0211" },
  Em7:   { f: "022030" },
  Cmaj7: { f: "x32000" },
  Gmaj7: { f: "320002" },
  Amaj7: { f: "x02120" },
  Fmaj7: { f: "xx3210" },
  Bbmaj7:{ f: "x13231", barre: { fret: 1, start: 1, end: 5 } }, "A#maj7": { f: "x13231", barre: { fret: 1, start: 1, end: 5 } },
  // ---- sus / add ----
  Asus2:   { f: "x02200" },
  Asus4:   { f: "x02230" },
  Dsus2:   { f: "xx0230" },
  Dsus4:   { f: "xx0233" },
  Esus4:   { f: "022200" },
  Csus2:   { f: "x30010" },
  Csus4:   { f: "x33011" },
  Gsus4:   { f: "330013" },
  Cadd9:   { f: "x32033" },
  "F(add9)": { f: "1x3213", barre: { fret: 1, start: 0, end: 5 } },
  "Dsus2/F#": { f: "2x0230" },
  // ---- dim / aug ----
  Bdim: { f: "x20101" },
  Ddim: { f: "xx0101" },
  Ebdim:{ f: "xx1212" },
  Caug: { f: "x32110" },
  Eaug: { f: "032110" },
};

function GuitarChordDiagram({
  label,
  chordData,
  strings = 6,
  showLabel = true,
}) {
  const fingering = chordData?.f || chordData || "";
  const barreInfo = chordData?.barre;
  
  const cols = fingering.trim().split("");
  const usedFrets = cols
    .map(c => (/[1-9]/.test(c) ? Number(c) : null))
    .filter((n) => n !== null);

  const minFret = usedFrets.length ? Math.min(...usedFrets) : 1;
  const maxFret = usedFrets.length ? Math.max(...usedFrets) : 1;

  // Base fret = lowest used fret, but never less than 1
  const base = Math.max(1, minFret);

  // Dynamic rows: always show at least 4 frets, expand if chord spans more
  const rows = Math.max(4, maxFret - base + 1);

  const width = 120, height = 150, pad = 16;
  const gridW = width - pad * 2, gridH = height - pad * 2 - 30;
  const colW = gridW / (cols.length - 1 || 1);
  const rowH = gridH / rows;

  return (
    <svg width={width} height={height} aria-label={`${label} chord`} role="img">
      {/* Paint a solid background so surrounding text can't show through */}
      <rect x="0" y="0" width={width} height={height} fill="#fff" />
   
      {/* Label */}
      {showLabel && (
        <text x={width / 2} y={14} textAnchor="middle" fontWeight="700" fontSize="14">
          {label}
        </text>
      )}

      {/* String tops: x / o */}
      {cols.map((c, i) => {
        const x = pad + i * colW;
        if (c === "x" || c === "X") {
          return <text key={`m${i}`} x={x} y={30} textAnchor="middle" fontSize="12">×</text>;
        }
        if (c === "0") {
          return <circle key={`o${i}`} cx={x} cy={25} r={4} fill="none" stroke="#000" strokeWidth="2"/>;
        }
        return null;
      })}

      {/* Grid */}
      {Array.from({ length: rows + 1 }).map((_, r) => (
        <line
          key={`r${r}`}
          x1={pad} x2={pad + gridW}
          y1={pad + 30 + r * rowH}
          y2={pad + 30 + r * rowH}
          stroke="#000"
          strokeWidth={r === 0 && base === 1 ? 3 : 1}
        />
      ))}
      {cols.map((_, c) => (
        <line
          key={`c${c}`}
          x1={pad + c * colW}
          x2={pad + c * colW}
          y1={pad + 30}
          y2={pad + 30 + gridH}
          stroke="#000"
          strokeWidth="1"
        />
      ))}

      {/* Barre line (if specified) */}
      {barreInfo && (() => {
        const fret = barreInfo.fret;
        const rel = fret - base + 1; // 1..rows
        if (rel >= 1 && rel <= rows) {
          const cy = pad + 30 + rel * rowH - rowH / 2;
          const startX = pad + barreInfo.start * colW;
          const endX = pad + barreInfo.end * colW;
          return (
            <line
              key="barre"
              x1={startX}
              x2={endX}
              y1={cy}
              y2={cy}
              stroke="#000"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.7"
            />
          );
        }
        return null;
      })()}

      {/* Dots */}
      {cols.map((c, i) => {
        if (!/[1-9]/.test(c)) return null;
        const fret = Number(c);
        const rel = fret - base + 1; // 1..rows
        if (rel < 1 || rel > rows) return null;
        const cx = pad + i * colW;
        const cy = pad + 30 + rel * rowH - rowH / 2;

        // Don't draw dots for barre positions if it's part of a defined barre
        if (barreInfo && barreInfo.fret === fret && i >= barreInfo.start && i <= barreInfo.end) {
          return null;
        }

        return <circle key={`p${i}`} cx={cx} cy={cy} r={7} fill="#000" />;
      })}

      {/* Base fret marker if >1 */}
      {base > 1 && (
        <text x={pad + gridW + 8} y={pad + 30 + rowH - 4} fontSize="10">{base}</text>
      )}
    </svg>
  );
}


/** Pretty display for accidentals (Bb -> B♭; # -> ♯) */
function prettyChord(chord) {
  if (!chord) return "";
  const s = String(chord);
  // Return actual Unicode characters instead of HTML entities
  return s.replace(/b/g, "♭").replace(/#/g, "♯");
}

/** Main renderer: turns "(F)Word" into ruby with hoverable chord diagram. */
export default function ChordLyrics({
  text = "", 
  diagrams = {},
  showLegend = true,
  mode = "lyrics-only", 
}) {

// Modes: "lyrics-only", "inline", "full"
if (mode === "lyrics-only") {
  return <div className="lyrics">{text.replace(/\([^)]*\)/g, "")}</div>;
}

if (mode === "inline") {
  return <div className="lyrics">{text}</div>;
}


  // Merge defaults with user overrides (user wins)
  const DICTS = useMemo(() => ({ ...DEFAULT_DIAGRAMS, ...diagrams }), [diagrams]);

  const processedContent = useMemo(() => {
    const safeText = text || "";
    let processed = safeText;
    
    // Enhanced regex to better capture chord variations
    const chordWord = /\(([A-G](?:#|b|♯|♭)?(?:m|maj|min|sus|add|dim|aug|\d)*(?:\/[A-G](?:#|b|♯|♭)?)?)\)[ \t]*([^\s()\n]+)/g;
    const chordSolo = /\(([A-G](?:#|b|♯|♭)?(?:m|maj|min|sus|add|dim|aug|\d)*(?:\/[A-G](?:#|b|♯|♭)?)?)\)(?=(?:\s*(?:\(|$|\n)))/g;
    
    const parts = [];
    
    // Process chord-word combinations first
    processed = processed.replace(chordWord, (match, chord, word) => {
      const originalChord = chord;
      const label = prettyChord(chord);
      const chordData = DICTS[originalChord] || DICTS[chord] || "";
      
      parts.push({
        type: 'chord-word',
        chord: originalChord,
        label: label,
        word: word,
        chordData: chordData,
        original: match
      });
      
      return `__CHORD_WORD_${parts.length - 1}__`;
    });
    
    // Process solo chords - improved detection to handle consecutive chords
    const chordSoloMatches = [];
    let match;
    while ((match = chordSolo.exec(processed)) !== null) {
      chordSoloMatches.push({
        match: match[0],
        chord: match[1],
        index: match.index,
        lastIndex: chordSolo.lastIndex
      });
    }
    
    // Count total chord matches to determine spacing behavior
    const totalChords = chordSoloMatches.length;
    
    // Process matches in reverse order to maintain indices
    for (let i = chordSoloMatches.length - 1; i >= 0; i--) {
      const matchData = chordSoloMatches[i];
      const originalChord = matchData.chord;
      const label = prettyChord(originalChord);
      const chordData = DICTS[originalChord] || DICTS[originalChord] || "";
      
      // Check if this is part of a sequence of consecutive chords
      const nextMatch = chordSoloMatches[i + 1];
      const prevMatch = chordSoloMatches[i - 1];
      
      // Check what comes immediately after this chord
      const afterChord = processed.slice(matchData.lastIndex);
      const isFollowedByChord = nextMatch && (nextMatch.index - matchData.lastIndex <= 5); // Allow some whitespace
      const isFollowedByText = /^\s*[A-Za-z]/.test(afterChord);
      const isAtLineEnd = /^\s*\n/.test(afterChord) || afterChord === '';
      
      // Check what comes before
      const beforeChord = processed.slice(0, matchData.index);
      const isPrecededByChord = prevMatch && (matchData.index - prevMatch.lastIndex <= 5);
      const isAtLineStart = /\n\s*$/.test(beforeChord) || beforeChord === '';
      
      const isInChordSequence = isFollowedByChord || isPrecededByChord;
      const isStandalone = (isAtLineStart || isAtLineEnd) && !isFollowedByText;
      
      // NEW LOGIC: Single standalone chord gets line break, multiple chords stay together
      const isSingleStandaloneChord = totalChords === 1 && isStandalone && isAtLineStart && isAtLineEnd;
      
      parts.push({
        type: 'chord-solo',
        chord: originalChord,
        label: label,
        chordData: chordData,
        original: matchData.match,
        isStandalone: isStandalone || isInChordSequence,
        isInSequence: isInChordSequence,
        isSingleStandaloneChord: isSingleStandaloneChord
      });
      
      const replacement = `__CHORD_SOLO_${parts.length - 1}__`;
      processed = processed.slice(0, matchData.index) + replacement + processed.slice(matchData.lastIndex);
    }
    
    return { processed, parts };
  }, [text, DICTS]);

   // Collect unique chords for legend
   const chordSet = useMemo(() => {
     const safeText = text || "";
     const allChordsRegex = /\(([A-G](?:#|b|♯|♭)?(?:m|maj|min|sus|add|dim|aug|\d)*(?:\/[A-G](?:#|b|♯|♭)?)?)\)/g;
     const matches = Array.from(safeText.matchAll(allChordsRegex)).map(m => m[1]);
   
     // Normalize: convert pretty chars to plain form so Bb and B♭ collapse
     const normalize = (chord) => chord.replace(/♭/g, "b").replace(/♯/g, "#");
   
     const unique = new Map();
     for (const chord of matches) {
       const norm = normalize(chord);
       if (!unique.has(norm)) unique.set(norm, chord);
     }
   
     return Array.from(unique.values());
   }, [text]);


  return (
    <div className="chord-lyrics-container">
      <style>{`
         .chord-lyrics-container {
         }
         
         .lyrics { 
           line-height: 2.2; 
           font-size: 1rem; 
           white-space: pre-wrap;
           margin-bottom: 2rem;
         }
         
         .chord-ruby { 
           position: relative;
           display: inline-block;
         }
         
         /* Remove stacking context from the inline blue label */
         .chord-rt {
           position: absolute;
           top: -1.2em;
           left: 0;
           font-weight: 700;
           font-size: .75rem;
           color: #2563eb;
           cursor: pointer;
           white-space: nowrap;
           z-index: auto; /* was 10 */
         }
         
         /* Tag chips for stand-alone chords */
         .chord-tag {
           display: inline-block;
           font-weight: 700;
           font-size: .75rem;
           padding: .2rem .4rem;
           background: #eff6ff;
           color: #2563eb;
           border: 1px solid #2563eb;
           border-radius: .25rem;
           margin-right: .5rem;
           margin-bottom: .25rem;
           cursor: pointer;
           position: relative;
         }
         
         .chord-tag-solo {
           margin-bottom: .5rem;
           margin-top: .25rem;
         }
         
         .chord-tag-sequence {
           margin-right: .3rem;
           margin-bottom: .25rem;
         }
         
         .chord-tag-single-standalone {
           display: block;
           width: fit-content;
           margin-bottom: 1.5rem;
           margin-top: 1rem;
           margin-right: 0;
         }
         
         /* Tooltip sits above everything; isolate to avoid weird blending */
         .chord-tooltip {
           display: none;
           position: absolute;
           top: 100%;
           left: 50%;
           transform: translateX(-50%);
           margin-top: .5rem;
           background: white;
           border: 1px solid #d1d5db;
           border-radius: .5rem;
           padding: .5rem;
           box-shadow: 0 10px 25px rgba(0,0,0,.15);
           z-index: 999999;          /* higher than any inline text */
           white-space: nowrap;
           pointer-events: none;
           isolation: isolate;        /* creates a clean stacking context */
         }
         
         /* Show tooltip on hover */
         .chord-rt:hover .chord-tooltip,
         .chord-tag:hover .chord-tooltip {
           display: block;
         }
         
         /* Optional: hide the blue label while tooltip is open to prevent any overlap artifacts */
         .chord-rt:hover { color: transparent; text-shadow: none; }
         
         .legend {
           margin-top: 2rem;
           padding-top: 2rem;
           border-top: 1px solid #e5e7eb;
           position: relative;
           z-index: 1;
         }
         
         .legend h3 {
           font-size: 1.1rem;
           font-weight: 700;
           margin-bottom: 1rem;
           color: #374151;
         }
         
         .legend-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
           gap: 1.5rem;
         }
         
         .legend-item {
           display: flex;
           flex-direction: column;
           align-items: center;
           text-align: center;
         }
         
         .legend-item .chord-name {
           font-weight: 700;
           font-size: .9rem;
           margin-bottom: .5rem;
           color: #2563eb;
         }

      `}</style>

      <div className="lyrics">
        {processedContent.processed.split(/(__CHORD_(?:WORD|SOLO)_\d+__)/g).map((part, index) => {
          const chordWordMatch = part.match(/__CHORD_WORD_(\d+)__/);
          const chordSoloMatch = part.match(/__CHORD_SOLO_(\d+)__/);
          
          if (chordWordMatch) {
            const partIndex = parseInt(chordWordMatch[1]);
            const chordPart = processedContent.parts[partIndex];
            return (
              <span key={index} className="chord-ruby">
                <span className="chord-rt">
                  {chordPart.label}
                  {chordPart.chordData && (
                    <div className="chord-tooltip">
                      <GuitarChordDiagram 
                        label={chordPart.label} 
                        chordData={chordPart.chordData} 
                        showLabel={false}
                      />
                    </div>
                  )}
                </span>
                {chordPart.word}
              </span>
            );
          }
          
          if (chordSoloMatch) {
            const partIndex = parseInt(chordSoloMatch[1]);
            const chordPart = processedContent.parts[partIndex];
            
            // Determine className based on chord context
            let className = "chord-tag";
            if (chordPart.isSingleStandaloneChord) {
              className += " chord-tag-single-standalone";
            } else if (chordPart.isInSequence) {
              className += " chord-tag-sequence";
            } else if (chordPart.isStandalone) {
              className += " chord-tag-solo";
            }
            
            return (
              <span key={index} className={className}>
                {chordPart.label}
                {chordPart.chordData && (
                  <div className="chord-tooltip">
                    <GuitarChordDiagram 
                      label={chordPart.label} 
                      chordData={chordPart.chordData} 
                      showLabel={false}
                    />
                  </div>
                )}
              </span>
            );
          }
          
          // Regular text - convert line breaks
          return part.split('\n').map((line, lineIndex, lines) => (
            <React.Fragment key={`${index}-${lineIndex}`}>
              {line}
              {lineIndex < lines.length - 1 && <br />}
            </React.Fragment>
          ));
        })}
      </div>

      {showLegend && chordSet.length > 0 && (
        <div className="legend">
          <h3>Chord Reference</h3>
          <div className="legend-grid">
            {chordSet.map(chord => {
              const label = prettyChord(chord);
              const chordData = DICTS[chord] || DICTS[label];
              return (
                <div className="legend-item" key={chord}>
                  <div className="chord-name">{label}</div>
                  {chordData ? (
                     <GuitarChordDiagram 
                       label={label} 
                       chordData={chordData} 
                       showLabel={false}
                     />
                  ) : (
                    <div style={{ opacity: 0.6, fontSize: '0.8rem' }}>
                      Fingering not available
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
