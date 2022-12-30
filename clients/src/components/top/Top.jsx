import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./top.css";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <>
      <Carousel autoPlay={true} infiniteLoop={true} transitionTime={1500}>
        <div className="cImage">
          <Link to={"/"}>
            <img src="/images/c3.jpg" alt="First City" />
            <div className="imgDesc mt-5 pt-3">
              <h2 className="no-underline">First City</h2>
              <p className="-top-3">13 properties</p>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to={"/"}>
            <img src="/images/c6.jpg" alt="" />
            <div className="imgDesc mt-5 pt-3">
              <h2 className="imgTitile">Bongoro</h2>
              <p className="-top-2">10 properties</p>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to={"/"}>
            <img src="/images/city4.jpg" alt="" />
            <div className="imgDesc mt-5 pt-3">
              <h2 className="imgTitile">The Shaw</h2>
              <p className="imgPrty">Zen land</p>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to={"/"}>
            <img src="/images/c9.jpg" alt="" />
            <div className="imgDesc mt-5 pt-3">
              <h2 className="imgTitile">Higher Land</h2>
              <p className="imgPrty">23 properties</p>
            </div>
          </Link>
        </div>
        <div className="cImage">
          <Link to={"/"}>
            <img src="/images/city7.jpg" alt="" />
            <div className="imgDesc mt-5">
              <h2 className="imgTitile">Wander Land</h2>
              <span className="imgPrty">Island Bay</span>
            </div>
          </Link>
        </div>
      </Carousel>
    </>
  );
};

export default Top;
