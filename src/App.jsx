import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Homeque from "./components/Homeque";
import DetailView from "./components/DetailView";
import NotFound from "./pages/NotFound";
import ContactUs from "./pages/ContactUs";
import { ModeProvider } from '../src/components/ModeContext';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <ModeProvider>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homeque />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/detail" element={<DetailView />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
      </ModeProvider>
    </BrowserRouter>
  );
}

export default App;
