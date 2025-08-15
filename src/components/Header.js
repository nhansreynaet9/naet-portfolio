import React from "react";
import { FaLinkedinIn, FaBehance, FaTwitter } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <p href="profile">Profile</p>
          </li>
          <li>
            <p href="#studies">Case Studies</p>
          </li>
          <li>
            <p href="perpro">Personal Projects</p>
          </li>
          <li>
            <p href="Recentwork">Recent Work</p>
          </li>
          <li>
            <p href="#contact">Get In Touch</p>
          </li>
        </ul>
        <div className="social-icons">
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaBehance />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </div>
      </nav>
    </header>
  );
}
