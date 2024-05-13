import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Homeque from "./components/Homeque";
import DetailView from "./components/DetailView";
import NotFound from "./pages/NotFound";
import "./App.css";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/places" element={<Homeque />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/detail" element={<DetailView />} />
        <Route path="/" element={<Home />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
