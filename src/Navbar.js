import React, { useEffect, useState } from "react";
import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [navClass, setClass] = useState("navbar-transparent");
  const [displayMenu, setMenu] = useState("hidden");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(window.innerHeight);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function menuClick() {
    setMenu(displayMenu === "hidden" ? "" : "hidden");
  }

  function handleScroll() {
    let scrollHeight = window.innerHeight;

    if (
      document.body.scrollTop > scrollHeight ||
      document.documentElement.scrollTop > scrollHeight
    ) {
      setClass("navbar-normal");
    } else {
      setClass("navbar-transparent");
    }
    console.log(navClass);
  }

  return (
    <React.Fragment>
      <nav className={`navbar navbar-desktop ${navClass} `}>
        <ul className={`navbar-content `}>
          <li className="navbar-item">
            <a href="#home">home</a>
          </li>
          <li className="navbar-item">
            <a href="#about">about</a>
          </li>
          <li className="navbar-item">
            <a href="#works">works</a>
          </li>
          <li className="navbar-item">
            <a href="">contact</a>
          </li>
        </ul>
      </nav>
      <nav className={`navbar nav-mobile ${navClass}`}>
        <div className="navbar-content">
          <ul className={`mobile-content ${displayMenu}`}>
            <li className="navbar-item">
              <a href="#home">home</a>
            </li>
            <li className="navbar-item">
              <a href="#about">about</a>
            </li>
            <li className="navbar-item">
              <a href="#works">works</a>
            </li>
            <li className="navbar-item">
              <a href="#">contact</a>
            </li>
          </ul>
          <FontAwesomeIcon icon="bars" size="2x" onClick={menuClick} />
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
