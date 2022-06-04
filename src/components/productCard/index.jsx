import React from "react";
import { useNavigate } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ data, setData, details, setItemsCount }) => {
  const navigate = useNavigate();
  const view = () => {
    navigate("/product", { state: details });
  };

  return (
    <div className="product-container">
      <div className="product-img-container">
        <img src={details.img} />
      </div>
      <div className="product-info">
        <div>
          <div className="product-by">
            <h4 className="product">{details.name}</h4>
            <h4 className="by">by:</h4>
            <h4 className="brand">{details.brand}</h4>
          </div>
          <div className="price-div">
            <h4 className="price">Price:</h4>
            <h4 className="price-num">${details.price}</h4>
          </div>
        </div>
        <div>
          <h4 className="view">
            <a onClick={view} href="/product">
              View Product
            </a>
          </h4>
          <h4 onClick={() => setData([...data, details])} className="add">
            Add to Cart
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
