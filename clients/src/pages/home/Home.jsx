import React from "react";
import Header from "../../components/Header";
import PropertiType from "../../components/propertyType/PropertiType";
import Top from "../../components/top/Top";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="ptycontainer">
        <PropertiType />
        <Top />
      </div>
    </div>
  );
};

export default Home;
