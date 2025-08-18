import React, { useState } from "react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-scroll"; // <-- Import Link from react-scroll
import "./Header.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Profile", to: "profile" },
    { name: "Case Studies", to: "Studies" },
    { name: "Personal Project", to: "Perpro" },
    { name: "Recent Work", to: "Recentwork" },
    { name: "Get In Touch", to: "contactform" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Desktop menu */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true} // <-- enables smooth scrolling
                duration={500} // <-- scroll duration in ms
                offset={-50} // <-- optional: adjust for fixed header
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="social-icons">
          <a
            href="https://github.com/nhansreynaet9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
          <a
            href="https://facebook.com/nhansreynaet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://linkedin.com/nhan-sreynaet-199585342"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mobile-icons">
              <a
                href="https://github.com/nhansreynaet9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon" />
              </a>
              <a
                href="https://facebook.com/nhansreynaet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon" />
              </a>
              <a
                href="https://linkedin.com/nhan-sreynaet-199585342"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
