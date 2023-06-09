import React, { useState } from "react";
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

// Navbar component that renders links at the top of the page

const Navbar = () => {

  // Sets click function for hamburger menu on icons

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  
    const [color, setColor] = useState(false);
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/free-school">
        <h1>Free School</h1>
      </Link>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/free-school">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/myevents">My Classes</Link>
        </li>
        <li>
          <Link to="/addevent">Add Class</Link>
        </li>
      </ul>

      {/* Icons for hamburger menu */}

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: 'white' }} />
        ) : (
          <FaBars size={20} style={{ color: 'white' }} />
        )}
        
      </div>
    </div>
  );
};

export default Navbar;