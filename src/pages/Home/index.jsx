import React from "react";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import Navbar from "../../layouts/navbar";
import Banner from "../../components/banner";
import TopCards from "../../components/topCards";
import Products from "./products";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <TopCards />
      <Products />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
