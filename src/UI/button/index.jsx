import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button className="btn">
      <h3>{props.children}</h3>
    </button>
  );
};

export default Button;
