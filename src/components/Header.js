import React, { useState } from "react";
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./Header.css"; // Import CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "profile", href: "#profile" },
    { name: "Case Studies", href: "#studies" },
    { name: "Personal project", href: "#perpro" },
    { name: "Recent work", href: "#Recentwork" },
    { name: "Get In Touch", href: "#contactform" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Desktop menu */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
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
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
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
