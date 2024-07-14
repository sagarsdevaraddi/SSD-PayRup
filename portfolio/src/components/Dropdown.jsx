import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        <ul >
          <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/introsection" onClick={toggleMenu}>MyIntro</Link>
          </li>
          <li>
            <Link to="/projectssection" onClick={toggleMenu}>Projects</Link>
          </li>
          <li>
            <Link to="/featuressection" onClick={toggleMenu}>Features</Link>
          </li>
          <li>
            <Link to="/servicessection" onClick={toggleMenu}>Services</Link>
          </li>
          <li>
            <Link to="/skillssection" onClick={toggleMenu}>Skills</Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dropdown;
