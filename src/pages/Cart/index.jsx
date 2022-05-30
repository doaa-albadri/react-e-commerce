import React from "react";
import Table from "../../components/table";
import "./cart.css";
import dress1 from "../../assets/images/dress1.jpg";
import dress2 from "../../assets/images/dress2.jpg";
import brush1 from "../../assets/images/brush1.jpg";

const Cart = () => {
  const headers = ["Image", "Name", "Brand", "Price"];
  const data = [
    { Image: dress1, Name: "Dress 1", Brand: "Brand 1", Price: "100" },
    { Image: dress2, Name: "Dress 2", Brand: "Brand 1", Price: "200" },
    { Image: brush1, Name: "Brush 1", Brand: "Brand 1", Price: "300" },
  ];
  return (
    <div className="cart-container">
      <h2 className="cart-h">Cart</h2>
      <Table headers={headers} data={data} />
    </div>
  );
};

export default Cart;
