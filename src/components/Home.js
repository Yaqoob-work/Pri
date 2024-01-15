import React from "react";
// import img1 from '../images/img1.jpeg'
// import img2 from '../images/img2.jpg'
import ImageSlider from "./ImageSlider";
import WordSlider from "./WordSlider";
import Uniqueimg from "./Uniqueimg";
import Form from "./Form";
import EthnicImg from "./EthnicImg";
// import './ImageSlider.css';

const Home = () => {
  const images = ["img1.jpeg", "img2.jpg"];
  const captions = ["Caption for Image 1", "Caption for Image 2"];
  const slidetext = ["skill", "love", "care"];
  return (
    <div>
      <ImageSlider images={images} captions={captions} />
      <WordSlider slidetext={slidetext} className="slidetext"/>
      <Uniqueimg />
      <EthnicImg />
      <Form />
    </div>
  );
};

export default Home;
