import React, { useState } from "react";
import "./navbar.css";
const NavbarC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <nav className="navLink">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </nav>
        <div className="navbar-flex-end">
          <a href="#" className="toggle-button">
            <i
              onClick={() => setIsOpen(!isOpen)}
              className="fas fa-bars open"
            ></i>
          </a>
        </div>
        {isOpen === true ? (
          <div className="navbar-flex-start">
            <nav className="navLink-list">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Cart</a>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default NavbarC;
