import React from "react";
import "./EthnicImg.css";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpeg"
const EthnicImg = () => {
  return (
    <div className="ethnicmaindiv">
      <div className="ethnicimage  ">
        <img className="ethnicimg3" src={img3} alt="abc" />
        <img className="ethnicimg4" src={img4} alt="abc" />
      </div>
      <div className="ethnictext ">
        <div className="ethnictext1 ">ETHNIC CRAFTS</div>
        <div className="ethnictext2">Made by Human for Human</div>
      </div>
    </div>
  );
};

export default EthnicImg;
