import React from "react";
import "./products.css";
import ProductCard from "../../../components/productCard";
import dress2 from "../../../assets/images/dress2.jpg";
import mascara1 from "../../../assets/images/mascara1.jpg";
import neckless2 from "../../../assets/images/neckless2.jpg";

const Sale = ({ data, setData }) => {
  const details = [
    { img: dress2, name: "Dress 2", brand: "Brand 4", price: "400" },
    { img: mascara1, name: "Mascara", brand: "Brand 5", price: "500" },
    { img: neckless2, name: "Neckless", brand: "Brand 6", price: "600" },
  ];
  return (
    <div className="products-container">
      <h2 className="div-title">ON SALE</h2>
      <div className="product-cards-container">
        {details.map((product) => {
          return (
            <ProductCard
              data={data}
              setData={setData}
              key={product.name}
              details={product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sale;
