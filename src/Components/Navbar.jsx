import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          BakeMEHappy 🎂
        </Link>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? "hamburger open" : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link" onClick={toggleMenu}>
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link" onClick={toggleMenu}>
              Our Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/order" className="nav-link" onClick={toggleMenu}>
              Order
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/reviews" className="nav-link" onClick={toggleMenu}>
              Reviews
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
