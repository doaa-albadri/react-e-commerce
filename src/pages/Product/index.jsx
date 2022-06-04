import React from "react";
import CartActions from "./CartActions";
import ProductDetails from "./ProductDetails";
import { useLocation } from "react-router-dom";

const Product = ({ data, setData }) => {
  const location = useLocation();
  const details = location.state;
  return (
    <>
      <ProductDetails details={details} />
      <CartActions data={data} setData={setData} details={details} />
    </>
  );
};

export default Product;
