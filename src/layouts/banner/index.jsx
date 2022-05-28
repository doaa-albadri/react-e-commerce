import React from "react";
import "./banner.css";
import banner from "../../assets/images/banner.png";
import Button from "../../UI/button";

const Banner = (props) => {
  return (
    <>
      <div className="banner-container">
        <div className="banner">
          <div className="banner-left-side">
            <div className="banner-txt-btns">
              <div className="banner-text">
                <h1>Shop here to get your best styles!</h1>
                <h4>Clothing, Accessories and Make-Up.</h4>
              </div>
              <div className="banner-btns">
                <div className="banner-btn">
                  <Button>Shop</Button>
                </div>
                <div className="banner-btn">
                  <Button>Offers</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-img-container">
            <img className="banner-img" src={banner} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
