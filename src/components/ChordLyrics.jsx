import React, { useMemo } from "react";

/* ========================= DEFAULT DIAGRAMS =========================
   Common guitar chord fingerings (open + standard barre).
   Type flats as Bb/Db/etc. Pretty display (B♭, F♯) is handled by prettyChord().
   Override anything by passing a `diagrams` prop (yours win).
==================================================================== */
export const DEFAULT_DIAGRAMS = {
  // ---- MAJOR (open / barre) ----
  C: "x32010",
  D: "xx0232",
  E: "022100",
  F: "133211",
  G: "320003",
  A: "x02220",
  B: "x24442",

  Bb: "x13331",  "A#": "x13331",
  Db: "x46664",  "C#": "x46664",
  Eb: "x65343",  "D#": "x65343",
  Gb: "244322",  "F#": "244322",
  Ab: "466544",  "G#": "466544",

  // ---- MINOR ----
  Am: "x02210",
  Dm: "xx0231",
  Em: "022000",
  Fm: "133111",
  Gm: "355333",
  Bm: "x24432",
  Cm: "x35543",
  Bbm: "x13321", "A#m": "x13321",
  Dbm: "x46654", "C#m": "x46654",
  Ebm: "x65343", "D#m": "x65343",
  Gbm: "244222", "F#m": "244222",
  Abm: "466444", "G#m": "466444",

  // ---- 7ths ----
  A7: "x02020",
  B7: "x21202",
  C7: "x32310",
  D7: "xx0212",
  E7: "020100",
  F7: "131211",
  G7: "320001",
  Bb7: "x13131", "A#7": "x13131",

  // ---- m7 / maj7 ----
  Am7: "x02010",
  Dm7: "xx0211",
  Em7: "022030",
  Cmaj7: "x32000",
  Gmaj7: "320002",
  Amaj7: "x02120",
  Fmaj7: "xx3210",
  Bbmaj7: "x13231", "A#maj7": "x13231",

  // ---- sus / add ----
  Asus2: "x02200",
  Asus4: "x02230",
  Dsus2: "xx0230",
  Dsus4: "xx0233",
  Esus4: "022200",
  Csus2: "x30010",
  Csus4: "x33011",
  Gsus4: "330013",
  Cadd9: "x32033",
  "F(add9)": "1x3213",
  "Dsus2/F#": "2x0230",

  // ---- dim / aug ----
  Bdim: "x20101",
  Ddim: "xx0101",
  Ebdim: "xx1212",
  Caug: "x32110",
  Eaug: "032110",
};

function GuitarChordDiagram({
  label,
  fingering,
  strings = 6,
  showLabel = true,
}) {
  const cols = fingering.trim().split("");
  const usedFrets = cols
    .map(c => (/[1-9]/.test(c) ? Number(c) : null))
    .filter((n) => n !== null);

  const minFret = usedFrets.length ? Math.min(...usedFrets) : 1;
  const base = Math.max(1, Math.min(minFret, 1));
  const rows = 4; // show 4 frets
  const width = 120, height = 150, pad = 16;
  const gridW = width - pad * 2, gridH = height - pad * 2 - 30;
  const colW = gridW / (cols.length - 1 || 1);
  const rowH = gridH / rows;

  return (
    <svg width={width} height={height} aria-label={`${label} chord`} role="img">
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

      {/* Dots */}
      {cols.map((c, i) => {
        if (!/[1-9]/.test(c)) return null;
        const fret = Number(c);
        const rel = fret - base + 1; // 1..rows
        if (rel < 1 || rel > rows) return null;
        const cx = pad + i * colW;
        const cy = pad + 30 + rel * rowH - rowH / 2;
        return <circle key={`p${i}`} cx={cx} cy={cy} r={7} fill="#000" />;
      })}

      {/* Base fret marker if >1 */}
      {base > 1 && (
        <text x={pad + gridW + 8} y={pad + 30 + rowH - 4} fontSize="10">{base}fr</text>
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
}) {
  // Merge defaults with user overrides (user wins)
  const DICTS = useMemo(() => ({ ...DEFAULT_DIAGRAMS, ...diagrams }), [diagrams]);

  // Enhanced regex to better capture chord variations
  const chordWord = /\(([A-G](?:#|b|♯|♭)?(?:m|maj|min|sus|add|dim|aug|\d)*(?:\/[A-G](?:#|b|♯|♭)?)?)\)\s*([^\s\(\)]+)/g;
  const chordSolo = /\(([A-G](?:#|b|♯|♭)?(?:m|maj|min|sus|add|dim|aug|\d)*(?:\/[A-G](?:#|b|♯|♭)?)?)\)(?!\s*[A-Za-z\d])/g;

  const processedContent = useMemo(() => {
    const safeText = text || "";
    let processed = safeText;
    
    // Track processed chords and their positions
    const processedPositions = [];
    
    // First pass: chord-word combinations
    processed = processed.replace(chordWord, (match, chord, word, offset) => {
      const originalChord = chord;
      const label = prettyChord(chord);
      const fingering = DICTS[originalChord] || DICTS[chord] || "";
      
      processedPositions.push({ start: offset, end: offset + match.length });
      
      return {
        type: 'chord-word',
        chord: originalChord,
        label: label,
        word: word,
        fingering: fingering
      };
    });
    
    // Second pass: solo chords (avoiding already processed areas)
    let result = [];
    let lastIndex = 0;
    
    // Convert processed to array format for easier handling
    const parts = [];
    let tempProcessed = safeText;
    
    // Process chord-word combinations
    tempProcessed = tempProcessed.replace(chordWord, (match, chord, word) => {
      const originalChord = chord;
      const label = prettyChord(chord);
      const fingering = DICTS[originalChord] || DICTS[chord] || "";
      
      parts.push({
        type: 'chord-word',
        chord: originalChord,
        label: label,
        word: word,
        fingering: fingering,
        original: match
      });
      
      return `__CHORD_WORD_${parts.length - 1}__`;
    });
    
    // Process solo chords
    tempProcessed = tempProcessed.replace(chordSolo, (match, chord) => {
      const originalChord = chord;
      const label = prettyChord(chord);
      const fingering = DICTS[originalChord] || DICTS[chord] || "";
      
      parts.push({
        type: 'chord-solo',
        chord: originalChord,
        label: label,
        fingering: fingering,
        original: match
      });
      
      return `__CHORD_SOLO_${parts.length - 1}__`;
    });
    
    return { tempProcessed, parts };
  }, [text, DICTS]);

  // Collect unique chords for legend
  const chordSet = useMemo(() => {
    const safeText = text || "";
    const allChordsRegex = /\(([A-G](?:#|b|♯|♭)?(?:m|maj|min|sus|add|dim|aug|\d)*(?:\/[A-G](?:#|b|♯|♭)?)?)\)/g;
    const matches = Array.from(safeText.matchAll(allChordsRegex)).map(m => m[1]);
    return Array.from(new Set(matches));
  }, [text]);

  return (
    <div className="chord-lyrics-container">
      <style>{`
        .chord-lyrics-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
        .chord-rt {
          position: absolute;
          top: -1.2em;
          left: 0;
          font-weight: 700;
          font-size: .75rem;
          color: #2563eb;
          cursor: pointer;
          white-space: nowrap;
          z-index: 1;
        }
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
          z-index: 10;
          white-space: nowrap;
        }
        .chord-rt:hover .chord-tooltip,
        .chord-tag:hover .chord-tooltip {
          display: block;
        }
        .legend {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #e5e7eb;
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
        {processedContent.tempProcessed.split(/(__CHORD_(?:WORD|SOLO)_\d+__)/g).map((part, index) => {
          const chordWordMatch = part.match(/__CHORD_WORD_(\d+)__/);
          const chordSoloMatch = part.match(/__CHORD_SOLO_(\d+)__/);
          
          if (chordWordMatch) {
            const partIndex = parseInt(chordWordMatch[1]);
            const chordPart = processedContent.parts[partIndex];
            return (
              <span key={index} className="chord-ruby">
                <span className="chord-rt">
                  {chordPart.label}
                  {chordPart.fingering && (
                    <div className="chord-tooltip">
                      <GuitarChordDiagram 
                        label={chordPart.label} 
                        fingering={chordPart.fingering} 
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
            return (
              <span key={index} className="chord-tag">
                {chordPart.label}
                {chordPart.fingering && (
                  <div className="chord-tooltip">
                    <GuitarChordDiagram 
                      label={chordPart.label} 
                      fingering={chordPart.fingering} 
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
              const fingering = DICTS[chord] || DICTS[label];
              return (
                <div className="legend-item" key={chord}>
                  <div className="chord-name">{label}</div>
                  {fingering ? (
                    <GuitarChordDiagram label={label} fingering={fingering} />
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
