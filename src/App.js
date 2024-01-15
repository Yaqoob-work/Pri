import './App.css';
import Home from './components/Home'
import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbars from './components/Navbars'
import About from './components/About'
import Services from './components/Services';
import Contact from './components/Contact';
import Privacy from './components/Privacy';


function App() {
  
  return (

    <div className="App ">
      <Navbars  />
      <Router >
        <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
