import React from "react";
import Available from "./available";
import Sale from "./sale";
import Soon from "./soon";

const Products = ({ data, setData }) => {
  return (
    <>
      <Available data={data} setData={setData} />
      <Sale data={data} setData={setData} />
      <Soon />
    </>
  );
};

export default Products;
