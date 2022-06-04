import React from "react";
import Button from "../../../UI/button";
import "./cartActions.css";

const CartActions = ({ data, setData, details }) => {
  return (
    <div className="actions-container">
      <div className="btns-container">
        <Button>
          <h6 onClick={() => setData([...data, details])}>Add to Cart</h6>
        </Button>
      </div>
    </div>
  );
};

export default CartActions;
