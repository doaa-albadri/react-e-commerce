import React from "react";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import Navbar from "../../layouts/navbar";
import Banner from "../../components/banner";
import Card from "../../components/card";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      {/* <Card /> */}
      <Footer />
    </>
  );
};

export default Home;
