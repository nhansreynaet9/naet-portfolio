import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebook } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="#profile">Profile </a>
          </li>
          <li>
            <a href="#studies">Case Studies</a>
          </li>
          <li>
            <a href="#perpro">Personal Projects</a>
          </li>
          <li>
            <a href="#Recentwork">Recent Work</a>
          </li>
          <li>
            <a href="#contact">Get In Touch</a>
          </li>
        </ul>
        <div className="social-icons">
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#https://github.com/nhansreynaet9">
            <FaGithub />
          </a>
          <a href="#https://www.facebook.com/share/14EeGxHti6u/?mibextid=wwXIfr">
            <FaFacebook />
          </a>
        </div>
      </nav>
    </header>
  );
}
