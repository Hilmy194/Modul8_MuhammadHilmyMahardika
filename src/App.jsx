import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import PrakDMJ from "./components/PrakDmj.jsx";
import PrakOS from "./components/PrakOs.jsx";
import PrakSBD from "./components/PrakSbd.jsx";

export default function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dmj" element={<PrakDMJ />} />
          <Route path="/os" element={<PrakOS />} />
          <Route path="/sbd" element={<PrakSBD />} />
        </Routes>
      </div>
    </Router>
  );
}
