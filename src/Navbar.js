import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './components/Img/g (5).png';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css'; // Ensure this CSS file contains your navbar styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  const [icon, setIcon] = useState('dark_mode'); // Initial state for the icon

  // Check if dark mode is already applied (if so, set the initial state accordingly)
  useEffect(() => {
    if (document.body.classList.contains('dark-mode')) {
      setIcon('sunny'); // If dark mode is active, set the icon to the sun (light mode)
    }
  }, []);

  // Handle the toggle action
  const handleToggle = () => {
    const newIcon = icon === 'dark_mode' ? 'sunny' : 'dark_mode';
    setIcon(newIcon);
    
    // Toggle the dark mode class on the body
    document.body.classList.toggle('sunny', newIcon === 'sunny');
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-header">
        {/* Hamburger Icon */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>
      </div>

      {/* Navigation Links */}
      <ul className={`listof ${isOpen ? "open" : ""}`}>
        <li className="list" onClick={closeMenu}>
          <Link to="/">Home</Link>
        </li>
        <li className="list" onClick={closeMenu}>
          <Link to="/about">About</Link>
        </li>
        <li className="list" onClick={closeMenu}>
          <Link to="/service">Services</Link>
        </li>
        <li className="list" onClick={closeMenu}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className="list" onClick={closeMenu}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
        <li className='day_night'>
          <span
            onClick={handleToggle}
            className={`toggle-icon ${icon === 'dark_mode' ? 'dark-mode-style' : 'sunny-style'}`}
          >
            <FontAwesomeIcon icon={icon === 'dark_mode' ? faMoon : faSun} />
          </span>
        </li>
    </nav>
  );
};

export default Navbar;
