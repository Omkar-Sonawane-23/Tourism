import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore'
import Homeque from './components/Homeque';
import DetailView from './components/DetailView';
import "./App.css"
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
     
      <Routes>
        
        <Route path="/home" element={<Homeque />} />
        <Route path='/explore' element={<Explore/>}/>
        <Route path="/detail" element={<DetailView />} /> {/* Corrected the placement of element prop */}
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
