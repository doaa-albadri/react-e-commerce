import React from "react";
import "./itemsCount.css";

const ItemsCount = ({ items }) => {
  return (
    <div className="count-container">
      <span className="count">{items}</span>
    </div>
  );
};

export default ItemsCount;
