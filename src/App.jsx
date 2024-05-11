// App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Homeque from './components/Homeque';
import DetailView from './components/DetailView';
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <BrowserRouter>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/home" element={<Homeque darkMode={darkMode} />} />
        <Route path='/explore' element={<Explore darkMode={darkMode} />} />
        <Route path="/detail" element={<DetailView darkMode={darkMode} />} />
        <Route path='/' element={<Home darkMode={darkMode} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
