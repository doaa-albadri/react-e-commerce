import React from "react";
import Products from "./products";

const Home = ({ data, setData, setItemsCount }) => {
  return (
    <>
      <Products setItemsCount={setItemsCount} data={data} setData={setData} />
    </>
  );
};

export default Home;
