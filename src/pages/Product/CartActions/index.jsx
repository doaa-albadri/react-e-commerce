import React from "react";
import Button from "../../../UI/button";
import "./cartActions.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

const CartActions = ({ data, setData, details }) => {
  const notifySuccess = (msg) =>
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER,
      closeButton: false,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });

  return (
    <div className="actions-container">
      <div className="btns-container">
        <Button>
          <h6
            onClick={() => {
              setData([...data, details]);
              notifySuccess("Item has been added to cart.");
            }}
          >
            Add to Cart
          </h6>
        </Button>
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

export default CartActions;
