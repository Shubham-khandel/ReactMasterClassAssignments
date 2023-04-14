import React from 'react';
import './App.css';
import { Home } from './home';
import { Contact } from './contact';
import { Nav } from './Nav';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <div>
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
export default App;
