import React from "react";
import ProductsPage from "../../../components/products";
import dress1 from "../../../assets/images/dress1.jpg";
import dress2 from "../../../assets/images/dress2.jpg";

const Clothes = ({ data, setData }) => {
  const details = [
    { img: dress1, name: "Dress 1", brand: "Brand 1", price: "100" },
    { img: dress2, name: "Dress 2", brand: "Brand 2", price: "200" },
    { img: dress1, name: "Dress 1", brand: "Brand 1", price: "100" },
    { img: dress2, name: "Dress 2", brand: "Brand 2", price: "200" },
    { img: dress1, name: "Dress 1", brand: "Brand 1", price: "100" },
    { img: dress2, name: "Dress 2", brand: "Brand 2", price: "200" },
    { img: dress1, name: "Dress 1", brand: "Brand 1", price: "100" },
    { img: dress2, name: "Dress 2", brand: "Brand 2", price: "200" },
    { img: dress2, name: "Dress 2", brand: "Brand 2", price: "200" },
  ];
  return (
    <ProductsPage
      data={data}
      setData={setData}
      title="Clothes"
      itemDetails={details}
    />
  );
};

export default Clothes;
