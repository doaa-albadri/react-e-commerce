import React, { useState } from "react";
import Search from "../../components/search";
import "./navbar.css";
import NavbarItems from "./navbarItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar-container">
        <div className="search_toggle">
          <Search />
          <div>
            <a href="#" className="toggle-button">
              <i
                onClick={() => setIsOpen(!isOpen)}
                className="fas fa-bars open"
              ></i>
            </a>
          </div>
        </div>
        <nav className={isOpen === true ? "navLink-list" : "navLink"}>
          <NavbarItems />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
