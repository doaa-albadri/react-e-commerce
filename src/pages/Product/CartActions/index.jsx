import React from "react";
import Button from "../../../UI/button";
import "./cartActions.css";

const CartActions = () => {
  return (
    <div className="actions-container">
      <div className="btns-container">
        <Button>
          <h6>Add to Cart</h6>
        </Button>
        <Button>
          <h6>Remove from Cart</h6>
        </Button>
      </div>
    </div>
  );
};

export default CartActions;
