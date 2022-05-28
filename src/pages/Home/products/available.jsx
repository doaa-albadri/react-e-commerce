import React from "react";
import "./products.css";
import ProductCard from "../../../components/productCard";
import dress1 from "../../../assets/images/dress1.jpg";
import neckless1 from "../../../assets/images/neckless1.jpg";
import sunglasses1 from "../../../assets/images/sunglasses1.png";

const Available = () => {
  const details = [
    { img: dress1, name: "Dress 1", brand: "Brand 1", price: "100" },
    { img: neckless1, name: "Neckless", brand: "Brand 2", price: "200" },
    { img: sunglasses1, name: "Sunglasses", brand: "Brand 3", price: "300" },
  ];
  return (
    <div className="products-container">
      <h2 className="div-title">AVAILABLE</h2>
      <div className="product-cards-container">
        {details.map((product) => {
          return <ProductCard key={product.name} details={product} />;
        })}
      </div>
    </div>
  );
};

export default Available;
