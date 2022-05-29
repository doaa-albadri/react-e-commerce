import React from "react";
import ProductsPage from "../../../components/products";
import brush1 from "../../../assets/images/brush1.jpg";
import lipstick1 from "../../../assets/images/lipstick1.jpg";
import mascara1 from "../../../assets/images/mascara1.jpg";

const MakeUp = () => {
  const details = [
    { img: brush1, name: "Brush 1", brand: "Brand 1", price: "100" },
    { img: lipstick1, name: "Lipstick 1", brand: "Brand 1", price: "200" },
    { img: mascara1, name: "Mascara 1", brand: "Brand 1", price: "300" },
    { img: brush1, name: "Brush 1", brand: "Brand 1", price: "100" },
    { img: lipstick1, name: "Lipstick 1", brand: "Brand 1", price: "200" },
    { img: mascara1, name: "Mascara 1", brand: "Brand 1", price: "300" },
    { img: brush1, name: "Brush 1", brand: "Brand 1", price: "100" },
    { img: lipstick1, name: "Lipstick 1", brand: "Brand 1", price: "200" },
    { img: mascara1, name: "Mascara 1", brand: "Brand 1", price: "300" },
  ];
  return <ProductsPage title="Make Up" itemDetails={details} />;
};

export default MakeUp;
