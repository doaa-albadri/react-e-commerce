import React from "react";
import ProductsPage from "../../../components/products";
import neckless2 from "../../../assets/images/neckless2.jpg";
import sunglasses1 from "../../../assets/images/sunglasses1.png";
import watch1 from "../../../assets/images/watch1.jpg";

const Accessories = ({ data, setData }) => {
  const details = [
    { img: neckless2, name: "Necless 1", brand: "Brand 1", price: "100" },
    { img: sunglasses1, name: "Sunglasses 1", brand: "Brand 1", price: "200" },
    { img: watch1, name: "Watch 1", brand: "Brand 1", price: "300" },
    { img: neckless2, name: "Necless 1", brand: "Brand 1", price: "100" },
    { img: sunglasses1, name: "Sunglasses 1", brand: "Brand 1", price: "200" },
    { img: watch1, name: "Watch 1", brand: "Brand 1", price: "300" },
    { img: neckless2, name: "Necless 1", brand: "Brand 1", price: "100" },
    { img: sunglasses1, name: "Sunglasses 1", brand: "Brand 1", price: "200" },
    { img: watch1, name: "Watch 1", brand: "Brand 1", price: "300" },
  ];
  return (
    <ProductsPage
      data={data}
      setData={setData}
      title="Accessories"
      itemDetails={details}
    />
  );
};

export default Accessories;
