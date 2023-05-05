import React, { useState } from "react";
import "./styles.css";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="header">
      <button className="hamburger" onClick={toggleNav}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <nav className={`nav ${isNavVisible ? "visible" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#Education">Education</a>
        <a href="#footer">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
