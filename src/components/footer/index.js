import React from "react";
import "./style.css";

import {
    FaFacebookSquare,
  FaGithub,
  FaLinkedin,
  FaInstagram,
 
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-item footer-about">
          
            <p> Orgulhosamente feito por  Rafael Yokoyama </p>
            <div className="social-links ">
              <a href="#">
                {" "}
                <FaFacebookSquare size={30} />
              </a>
              <a href="#">
                {" "}
                <FaGithub size={30} />
              </a>
              <a href="#">
                {" "}
                <FaLinkedin size={30} />
              </a>
              <a href="#">
                {" "}
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
        
       
          
        </div>
      </div>

   
    </footer>
  );
};

export default Footer;
