import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
      
          <span>Help</span>
          <span>Share</span>
          <span>Donate</span>
          <span>Something else</span>
        </div>
        <div className="footer-section-columns">
          <span>000-000-0000</span>
          <span>another way to contact</span>
          <span>another way to contact</span>
          <span>inava-medina@gelmatter.com</span>
        </div>
        <div className="footer-section-columns">
          <span>   Terms & Conditions</span>
          <span>   Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
