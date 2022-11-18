import React from "react";
import Landing from "./pages/landing";
import { Routes, Route } from "react-router-dom";
import AboutQBett from "./pages/AboutQBett";
import Whitepaper from "./pages/whitepaper";
import QBbettApps from "./pages/QBbettApps";
import Developers from "./pages/developers";
import Tokenomics from "./pages/Tokenomics";
import Staking from "./pages/staking";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/QBbettApps" element={<QBbettApps />} />
        <Route path="/Tokenomics" element={<Tokenomics />} />
        <Route path="/AboutQBett" element={<AboutQBett />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/staking" element={<Staking />} />
      </Routes>
    </ScrollToTop>
  );
}

export default App;
