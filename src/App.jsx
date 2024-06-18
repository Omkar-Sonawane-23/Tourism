import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Homeque from "./components/Homeque";
import DetailView from "./components/DetailView";
import NotFound from "./pages/NotFound";
import { ContactUs } from "./pages/ContactUs"
import "./App.css";
import {Faq} from "./components/Faq";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const [registered, setRegistered] = useState(false);

  return (
    <BrowserRouter>
      <Navbar registered={registered} setRegistered={setRegistered} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/places" element={<Homeque />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/detail" element={<DetailView />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Register registered={registered} setRegistered={setRegistered} />} />
        <Route path="/login" element={<Login registered={registered} setRegistered={setRegistered} />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
