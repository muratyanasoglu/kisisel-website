import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import MySkills from './components/MySkills'; // MySkills bileşenini import et
import MyContacts from './components/MyContacts';
import MyCV from './components/MyCV'; // MyCV bileşenini import et
import MyCertificates from './components/MyCertificates';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<MySkills />} /> {/* MySkills için yeni rota */}
        <Route path="/contacts" element={<MyContacts />} /> {/* MyContacts için rota */}
        <Route path="/cv" element={<MyCV />} />
        <Route path="/certificates" element={<MyCertificates />} />
        {/* Diğer rotalar buraya eklenebilir */}
      </Routes>
    </div>
  );
}

export default App;
