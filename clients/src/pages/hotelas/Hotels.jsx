import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/Header";
import ListHotels from "../../components/listHotels/ListHotels";
import Search from "../../components/search/Search";
import Subscribe from "../../components/subscribe/Subscribe";
// import SearchItem from "../../components/searchItem/SearchItem";

const Hotels = () => {
  return (
    <div>
      <Header type="smallHeader" />
      <div className="hotelContainer ">
        <div className="hotelsRow flex mt-5">
          <div className="hotelsCol flex-2">
            <Search />
          </div>
          <div className="hotelsCol flex-1 p-3 ">
            <ListHotels />
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Hotels;
