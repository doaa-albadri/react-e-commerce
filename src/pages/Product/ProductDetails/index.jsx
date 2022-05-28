import React from "react";
import { useLocation } from "react-router-dom";
import "./product.css";

export const ProductDetails = () => {
  const location = useLocation();
  const details = location.state;

  return (
    <div className="p-container">
      <div className="p-details-container">
        <div className="p-img">
          <img src={details.img} />
        </div>
        <div className="p-info">
          <div className="p-info-left">
            <div className="name-brand">
              <div className="name-by">
                <h4 className="p-name">{details.name}</h4>
                <h4 className="p-by">by:</h4>
              </div>

              <h4 className="p-brand">{details.brand}</h4>
            </div>
          </div>
          <div className="p-info-right">
            <div className="description">
              <h4>Description:</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="p-price">
              <h4>{`$${details.price}`}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
