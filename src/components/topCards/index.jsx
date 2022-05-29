import React from "react";
import "./topCards.css";
import clothes from "../../assets/images/clothes.jpg";
import makeup from "../../assets/images/makeup.jpg";
import accessories from "../../assets/images/accessories.jpg";
import { Link } from "react-router-dom";

const TopCards = () => {
  const cards = [
    { image: clothes, title: "Clothes", path: "clothes" },
    { image: makeup, title: "Make-Up", path: "makeup" },
    { image: accessories, title: "Accessories", path: "accessories" },
  ];

  return (
    <div className="card-container">
      {cards.map((card) => {
        return (
          <div key={card.title} className="img-container">
            <img src={card.image} />
            <div className="titles-div">
              <Link className="link" to={card.path}>
                <h4 className="title">{card.title}</h4>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TopCards;
