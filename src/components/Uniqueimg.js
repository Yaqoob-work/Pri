import "./Uniqueimg.css";
import img1 from "../images/img1.jpeg";
import { Link } from "react-router-dom";
import React from 'react';


const Uniqueimg = () => {
  return (
    <div className="uniqmaindiv">
      <div className="uniqimage">
        <img className="uniqimg" src={img1} alt="abc" />
      </div>
      <div className="uniqtext">
        <p>HANDMADE TEXTILE</p>
        <div>Unique Products, Crafted with Love</div>
      <Link to="./About" className="uniqaboutbutton">About Us</Link>

      </div>
    </div>
  );
};

export default Uniqueimg;

