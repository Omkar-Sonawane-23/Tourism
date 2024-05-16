

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore'
import Homeque from './components/Homeque';
import DetailView from './components/DetailView';
import "./App.css"
import Login from './components/Login';
import Signup from './components/Signup';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Homeque />} />

        <Route path='/explore' element={<Explore/>}/>
        <Route path="/detail" element={<DetailView />} /> {/* Corrected the placement of element prop */}
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      


      </Routes>
    </BrowserRouter>
  );
}

export default App;
