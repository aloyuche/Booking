import React from "react";
import Carousel from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <>
      <Carousel showArrows={true} autoplay={true} interval={3000}>
        <div className="cImage">
          <Link to={"/"}>
            <img src="/images/city1.jpg" alt="" />
            <div className="imgDesc">
              <h2 className="imgTitile">Bongoro</h2>
              <span className="imgPrty"></span>
            </div>
          </Link>
        </div>
      </Carousel>
    </>
  );
};

export default Top;
