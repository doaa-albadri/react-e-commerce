import React from "react";
import "./topCards.css";
import clothes from "../../assets/images/clothes.jpg";
import makeup from "../../assets/images/makeup.jpg";
import accessories from "../../assets/images/accessories.jpg";

const TopCards = () => {
  const cards = [
    { image: clothes, title: "Clothes" },
    { image: makeup, title: "Make-Up" },
    { image: accessories, title: "Accessories" },
  ];

  return (
    <div className="card-container">
      {cards.map((card) => {
        return (
          <div key={card.title} className="img-container">
            <img src={card.image} />
            <div className="titles-div">
              <h4 className="title">{card.title}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default TopCards;
