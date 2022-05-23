import React from "react";
import "./products.css";
import ProductCard from "../../../components/productCard";
import brush1 from "../../../assets/images/brush1.jpg";
import watch1 from "../../../assets/images/watch1.jpg";
import lipstick1 from "../../../assets/images/lipstick1.jpg";

const Soon = () => {
  const details = [
    { img: brush1, name: "Brush", brand: "Brand 7", price: "700" },
    { img: watch1, name: "Watch", brand: "Brand 8", price: "800" },
    { img: lipstick1, name: "Lipstick", brand: "Brand 9", price: "900" },
  ];
  return (
    <div className="products-container">
      <h2 className="div-title">SOON</h2>
      <div className="product-cards-container">
        {details.map((product) => {
          return <ProductCard details={product} />;
        })}
      </div>
    </div>
  );
};

export default Soon;
