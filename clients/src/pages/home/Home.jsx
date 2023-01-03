import React from "react";
import City from "../../components/city/City";
import Footer from "../../components/footer/Footer";
import Grid from "../../components/gridGallery/Grid";
import Header from "../../components/Header";
import PropertiType from "../../components/propertyType/PropertiType";
import Subscribe from "../../components/subscribe/Subscribe";
import Top from "../../components/top/Top";
// import Cities from "../city/Cities";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="ptycontainer">
        <City />
        <PropertiType />
        <Top />
        <Grid />
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
