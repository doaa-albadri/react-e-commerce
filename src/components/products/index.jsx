import React from "react";
import ProductCard from "../productCard";
import "./productItems.css";

const ProductsPage = ({ title, itemDetails }) => {
  return (
    <div className="items-container">
      <h2 className="items-type">{title}</h2>
      <div className="items-cards-container">
        {itemDetails.map((product) => {
          return <ProductCard key={product.name} details={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
