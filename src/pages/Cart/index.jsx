import React, { useState } from "react";
import Search from "../../components/search";
import Table from "../../components/table";
import "./cart.css";

const Cart = ({ data, setData, items }) => {
  const headers = ["Image", "Name", "Brand", "Price", "Actions"];
  const [searchTerm, setSearchTerm] = useState("");
  const [sortTerm, setSortTerm] = useState("DSC");

  const sort = (sortOption) => {
    if (sortTerm === "ASC") {
      const sorted = [...data].sort((a, b) => {
        return a[sortOption] > b[sortOption] ? 1 : -1;
      });
      setData(sorted);
      setSortTerm("DSC");
    }
    if (sortTerm === "DSC") {
      const sorted = [...data].sort((a, b) => {
        return a[sortOption] < b[sortOption] ? 1 : -1;
      });
      setData(sorted);
      setSortTerm("ASC");
    }
  };

  return (
    <div className="cart-container">
      <div className="title-container">
        <h2 className="cart-h">Cart</h2>
        <h4>Number of Items: {items}</h4>
      </div>
      <div className="search-container">
        <Search
          data={data}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        <button onClick={() => sort("Name")}>
          <i class="fas fa-sort"></i>
        </button>
      </div>
      <Table
        searchTerm={searchTerm}
        headers={headers}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export default Cart;
