// Navbar.js
import React, { useState } from 'react';
import './Navbars.css';  // Assuming you have a CSS file for styling
import logo from '../images/logo.png'
import { LiaTimesSolid } from "react-icons/lia";
import { FaLongArrowAltRight } from "react-icons/fa";
import { TbPhoneCall } from "react-icons/tb";
const Navbars = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar1">
      <button className="toggle-button" onClick={toggleNav}>
        ☰
      </button>
      <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <li><img className="brand" src={logo} alt="a" /></li>
        <li><a href="/call" className='call' ><TbPhoneCall/></a></li>
        <li><a href="/talk" className='talk' >Let's Talk</a></li>
        <li><a href="/" className='x' onClick={toggleNav}><span className='xclose'>close</span> <LiaTimesSolid className='closeicon'/></a></li>
        <li><a href="/">Home  <FaLongArrowAltRight className='arrow'/></a></li>
        <li><a href="/about">About Us  <FaLongArrowAltRight className='arrow'/></a></li>
        <li><a href="/services">Our Services  <FaLongArrowAltRight className='arrow'/></a></li>
        <li><a href="/contact">Contact  <FaLongArrowAltRight className='arrow'/></a></li>
        <li><a href="/privacy">Privacy Policy  <FaLongArrowAltRight className='arrow'/></a></li>
      </ul>
    </nav>
  );
};

export default Navbars;
