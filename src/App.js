import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./layouts/navbar";
import Header from "./layouts/header";
import Banner from "./layouts/banner";
import TopCards from "./components/topCards";
import Footer from "./layouts/footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Clothes from "./pages/Products/Clothes";
import MakeUp from "./pages/Products/MakeUp";
import Accessories from "./pages/Products/Accessories";
import Cart from "./pages/Cart";
import ItemsCount from "./layouts/itemsCount";
import dress1 from "./assets/images/dress1.jpg";
import dress2 from "./assets/images/dress2.jpg";
import brush1 from "./assets/images/brush1.jpg";

function App() {
  const [data, setData] = useState([
    { Image: dress1, Name: "Dress 1", Brand: "Brand 1", Price: "100" },
    { Image: dress2, Name: "Dress 2", Brand: "Brand 1", Price: "200" },
    { Image: brush1, Name: "Brush 1", Brand: "Brand 1", Price: "300" },
    { Image: dress1, Name: "Dress 1", Brand: "Brand 1", Price: "100" },
    { Image: dress2, Name: "Dress 2", Brand: "Brand 1", Price: "200" },
    { Image: brush1, Name: "Brush 1", Brand: "Brand 1", Price: "300" },
  ]);

  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <ItemsCount items={data.length} />
        <Banner />
        <TopCards />
        <Routes>
          <Route path="/" element={<Home data={data} setData={setData} />} />
          <Route
            path="/product"
            element={<Product data={data} setData={setData} />}
          />
          <Route
            path="/clothes"
            element={<Clothes data={data} setData={setData} />}
          />
          <Route
            path="/makeup"
            element={<MakeUp data={data} setData={setData} />}
          />
          <Route
            path="/accessories"
            element={<Accessories data={data} setData={setData} />}
          />
          <Route
            path="/cart"
            element={<Cart items={data.length} data={data} setData={setData} />}
          />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
