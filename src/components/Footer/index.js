import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Nhan Sreyneat</h3>
        <p>Versatile Web & Mobile Developer | React JS Enthusiast</p>
        <div className="social-links">
          <a
            href="https://github.com/nhansreynaet9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/your-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nhan Sreyneat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
