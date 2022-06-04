import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header-container">
      <header className="logo">E-Commerce</header>
      <div className="header-info">
        <i className="fa fa-phone"></i>
        <label>+21892123456</label>
        <i className="fa fa-envelope"></i>
        <label>ecommerce@gmail.com</label>
      </div>
    </div>
  );
};

export default Header;
