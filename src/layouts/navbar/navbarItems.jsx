import React from "react";

const NavbarItems = () => {
  const items = ["Home", "About", "Shop", "Account", "Cart"];
  return (
    <>
      <ul>
        {items.map((item) => {
          <li>
            <a href="#">{item}</a>
          </li>;
        })}
      </ul>
    </>
  );
};
export default NavbarItems;
