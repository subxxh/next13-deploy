import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-subsubheading">
          GelMatters goal is..
        </h1>
        <p className="primary-text">
        Gel Matter is creating sustainable, synthetic mucus materials that mimic the structures and properties of animal mucus. 
        </p>
        <p className="primary-text">
        The commercial demand for animal-harvested mucus is diverse and targets applications in dermatology, filtration systems, eyecare, antimicrobial coatings, drug delivery, and tissue culture.
         Gel Matter’s technology eliminates animal use and addresses global demand.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
