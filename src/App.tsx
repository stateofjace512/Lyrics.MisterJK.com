import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LyricsHomePage from './pages/LyricsHomePage';
import NotFound from './pages/NotFound';

// TNG
import AskMama from './songs/AskMama';
import ReturnPolicy from './songs/ReturnPolicy';
import SharinLocation from './songs/SharinLocation';
import SatWithThat from './songs/SatWithThat';
import InsideVoice from './songs/InsideVoice';
import GirlsX3 from './songs/GirlsX3';
import MissedMeOut from './songs/MissedMeOut';
import YouCantTopThis from './songs/YouCantTopThis';
import GirlDown from './songs/GirlDown';
import OhThereItIs from './songs/OhThereItIs';
//Georgia TSTT
import IDoIDont from './songs/IDoIDont';
import HairMeOut from './songs/HairMeOut';
import CryMeARealtor from './songs/CryMeARealtor';
import InContempt from './songs/InContempt';
import YallCanWait from './songs/YallCanWait';
//Other Artists
import SantasOnPTO from './songs/SantasOnPTO';
import HoldSecureEvacuate from './songs/HoldSecureEvacuate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LyricsHomePage />} />

        {/* Individual song routes */}
        <Route path="/song/oh-there-it-is" element={<OhThereItIs />} />
        <Route path="/song/ill-ask-mama" element={<AskMama />} />
        <Route path="/song/return-policy" element={<ReturnPolicy />} />
        <Route path="/song/sharin-location" element={<SharinLocation />} />
        <Route path="/song/i-sat-with-that" element={<SatWithThat />} />
        <Route path="/song/inside-voice" element={<InsideVoice />} />
        <Route path="/song/girlsgirlsgirls" element={<GirlsX3 />} />
        <Route path="/song/missed-me-missed-out" element={<MissedMeOut />} />
        <Route path="/song/you-cant-top-this" element={<YouCantTopThis />} />
        <Route path="/song/girl-down" element={<GirlDown />} />
        <Route path="/song/i-do-i-dont" element={<IDoIDont />} />
        <Route path="/song/hair-me-out" element={<HairMeOut />} />
        <Route path="/song/santas-on-pto" element={<SantasOnPTO />} />
        <Route path="/song/hold-secure-evacuate" element={<HoldSecureEvacuate />} />

        {/* Catch-all for unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
