import { Link } from "react-scroll";

import logo from "/logo.png";

import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  function toggleNav() {
    if (menuToggle) {
      setMenuToggle(!menuToggle);
    } else {
      setMenuToggle(true);
    }
  }

  function sideClick() {
    setMenuToggle(false);
  }

  return (
    <div className="Navbar flex">
      <Link to="hero" spy={true} offset={-100} smooth={true} duration={500}>
        <div className="logo flex">
          <img src={logo} alt="" />
          <div className="title">Om Yoga</div>
        </div>
      </Link>

      <div onClick={toggleNav} className="menuToggle flex">
        <div className={menuToggle ? "hamburger hamburgerClose" : "hamburger"}>
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </div>
      </div>

      <div
        className={menuToggle ? "overlay" : "overlay overlayClose"}
        onClick={sideClick}
      ></div>

      <div className={`links flex ${menuToggle ? "menuOpen" : "menuClose"}`}>
        <Link
          to="hero"
          onClick={sideClick}
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
        >
          <div className="link">Home</div>
        </Link>
        <Link
          to="instructor"
          spy={true}
          onClick={sideClick}
          offset={-100}
          smooth={true}
          duration={500}
        >
          <div className="link">Meet our instructor</div>
        </Link>
        <Link
          to="whyyoga"
          onClick={sideClick}
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
        >
          <div className="link">Why Yoga?</div>
        </Link>
        <Link
          to="join"
          onClick={sideClick}
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
        >
          <div className="button">Join now</div>
        </Link>
        <Link
          onClick={sideClick}
          to="contact"
          spy={true}
          offset={-100}
          smooth={true}
          duration={500}
        >
          <div className="button">Contact</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
