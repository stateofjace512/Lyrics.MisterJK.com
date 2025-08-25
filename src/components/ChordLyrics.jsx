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
        <text x={width / 2} y={14} textAnchor="middle" fontWeight="700">{label}</text>
      )}

      {/* String tops: x / o */}
      {cols.map((c, i) => {
        const x = pad + i * colW;
        if (c === "x" || c === "X") {
          return <text key={`m${i}`} x={x} y={30} textAnchor="middle" fontSize="12">x</text>;
        }
        if (c === "0") {
          return <text key={`o${i}`} x={x} y={30} textAnchor="middle" fontSize="12">o</text>;
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
        return <circle key={`p${i}`} cx={cx} cy={cy} r={7} />;
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
  // Use entities so fonts don't split them, browsers render as one glyph.
  return s.replace(/b/g, "&#9837;").replace(/#/g, "&#9839;");
}


/** Main renderer: turns "(F)Word" into ruby with hoverable chord diagram. */
export default function ChordLyrics({
  text = "", // Default to empty string
  diagrams = {},
  showLegend = true,
}) {
  // Merge defaults with user overrides (user wins)
  const DICTS = useMemo(() => ({ ...DEFAULT_DIAGRAMS, ...diagrams }), [diagrams]);

  // (Chord)Word — chord may include #/b, m, maj7, m7, sus, add, dim, aug, 7, etc.
  const chordWord = /\(([A-G](?:#|b)?[a-zA-Z0-9+()\/#]*)\)\s*([^\s]+)/g;
  const chordSolo = /\(([A-G](?:#|b)?[a-zA-Z0-9+()\/#]*)\)(?!\s*[A-Za-z])/g;

  const html = useMemo(() => {
    // Defensive check for text
    const safeText = text || "";
    
    return safeText
      .replace(chordWord, (_m, ch, word) => {
        const label = prettyChord(ch);
        const fing = DICTS[ch] || DICTS[label] || "";
        const data = fing ? ` data-fingering="${fing}"` : "";
        return `<ruby class="chord-ruby"><span>${word}</span><rt class="chord-rt" data-chord="${label}"${data}>${label}</rt></ruby>`;
      })
      .replace(chordSolo, (_m, ch) => {
        const label = prettyChord(ch);
        const fing = DICTS[ch] || DICTS[label] || "";
        const data = fing ? ` data-fingering="${fing}"` : "";
        return `<span class="chord-tag" data-chord="${label}"${data}>${label}</span>`;
      })
      .replace(/\n/g, "<br>");
  }, [text, DICTS]);

  // Collect unique chords for legend (as typed, not prettified)
  const chordSet = useMemo(() => {
    const safeText = text || "";
    const matches = Array.from(safeText.matchAll(/\(([A-G](?:#|b)?[a-zA-Z0-9+()\/#]*)\)/g)).map(m => m[1]);
    return Array.from(new Set(matches));
  }, [text]);

  return (
    <div>
      <style>{`
        .lyrics { line-height: 1.9; font-size: 1rem; }
        .chord-ruby { ruby-position: over; }
        .chord-rt {
          font-weight: 700;
          font-size: .85rem;
          letter-spacing: .02em;
          opacity: .95;
          position: relative;
          cursor: pointer;
        }
        .chord-tag {
          display:inline-block;
          font-weight:700;
          font-size:.85rem;
          padding:.05rem .35rem;
          border:1px solid currentColor;
          border-radius:.35rem;
          margin-right:.35rem;
          vertical-align:baseline;
          cursor:pointer;
          position:relative;
        }
        /* tooltip */
        .chord-rt:hover .chord-tip,
        .chord-tag:hover .chord-tip { display:block; }
        .chord-tip {
          display:none;
          position:absolute;
          left:50%;
          transform:translateX(-50%);
          top:1.6rem;
          background:#fff;
          color:#000;
          border:1px solid #000;
          border-radius:.5rem;
          padding:.25rem;
          z-index:5;
          box-shadow:0 6px 20px rgba(0,0,0,.15);
          white-space:nowrap;
        }
        .chord-tip .mount { width:140px; height:160px; display:block; }
        .legend {
          margin-top:1.25rem;
          display:flex; flex-wrap:wrap; gap:1rem;
          align-items:flex-start;
        }
        .legend-item { display:flex; gap:.5rem; align-items:center; }
        .legend-item label { font-weight:700; min-width:2.2rem; }
      `}</style>

      {/* Lyrics block */}
      <div className="lyrics" dangerouslySetInnerHTML={{ __html: html }} />

      {/* Tooltips via small enhancer */}
      <EnhanceTooltips />

      {/* Legend of chords */}
      {showLegend && (
        <div className="legend">
          {chordSet.map(raw => {
            const label = prettyChord(raw);
            const fingering = DICTS[raw] || DICTS[label];
            return (
              <div className="legend-item" key={raw}>
                <label>{label}</label>
                {fingering ? (
                  <GuitarChordDiagram label={label} fingering={fingering} />
                ) : (
                  <small style={{ opacity: .7 }}>no fingering</small>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/** Adds tooltip diagrams under any element with data-fingering (since inner HTML isn't React-owned) */
function EnhanceTooltips() {
  React.useEffect(() => {
    const addTip = (el) => {
      if (el.querySelector(".chord-tip")) return;
      const fingering = el.getAttribute("data-fingering");
      const chord = el.getAttribute("data-chord") || "";
      if (!fingering) return;

      const tip = document.createElement("div");
      tip.className = "chord-tip";
      const mount = document.createElement("div");
      mount.className = "mount";
      tip.appendChild(mount);
      el.appendChild(tip);

      import("react-dom").then(ReactDOM => {
        ReactDOM.createRoot(mount).render(
          <GuitarChordDiagram label={chord} fingering={fingering} />
        );
      });
    };

    const targets = document.querySelectorAll(".chord-rt, .chord-tag");
    targets.forEach(addTip);
  }, []);
  return null;
}
