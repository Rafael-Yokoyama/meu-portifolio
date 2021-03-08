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
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="footer-item footer-about">
            <p> Orgulhosamente feito por Rafael Yokoyama </p>
            <div className="social-links ">
              <a
                href="https://www.facebook.com/rafael.yokoyama.5"
                target="_blank"
              >
                {" "}
                <FaFacebookSquare size={30} />
              </a>
              <a href="https://github.com/Rafael-Yokoyama" target="_blank">
                {" "}
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-yokoyama/"
                target="_blank"
              >
                {" "}
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.instagram.com/rafael.yokoyama99/"
                target="_blank"
              >
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
