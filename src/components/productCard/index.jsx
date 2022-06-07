import React from "react";
import { useNavigate } from "react-router-dom";
import "./productCard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

const ProductCard = ({ data, setData, details, setItemsCount }) => {
  const navigate = useNavigate();
  const view = () => {
    navigate("/product", { state: details });
  };
  const notifySuccess = (msg) =>
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER,
      closeButton: false,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });

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
          <h4
            onClick={() => {
              setData([...data, details]);
              notifySuccess("Item has been added to cart.");
            }}
            className="add"
          >
            Add to Cart
          </h4>
        </div>
      </div>
      <ToastContainer
        closeButton={false}
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
      />
    </div>
  );
};

export default ProductCard;
