import React from "react";
import "./itemhotel.css";
const ItemHotel = () => {
  return (
    <div className="itemHotel m-3">
      <div className="itemhotelsCol h-20 object-cover w-wf">
        <img src="/images/city6.jpg" alt="Homey" />
      </div>
      <div className="itemhotelsCol flex flex-col justify-between p-2">
        <div className="itemHotelDiv uppercase space-x-3">
          <h2>Industralized Home</h2>
        </div>
        <div className="itemHotelsDivs flex flex-row ">
          <div className="itemHotelDiv bg-black text-white p-2 rounded-md items-center text-center">
            <span>9.2</span>
          </div>
          <div className="itemHotelDiv flex flex-col mx-4">
            <span className="space-x-2">Wonderful</span>
            <span className="space-x-2">611 Review</span>
          </div>
        </div>
      </div>
      <div className="itemhotelsCol flex-2 flex flex-col justify-between">
        <div className="itemhotelCol_Text">
          <h2>$98.00</h2>
        </div>
        <div className="itemHotelCols_service flex flex-col text-orange-500">
          <span>Free WiFi</span>
          <span>Free Packing Space</span>
          <span>Free Breakfast</span>
        </div>
        <div className=" p-1 bg-gray-900 rounded-sm text-center text-white justify-center">
          <button>View Deal</button>
        </div>
      </div>
    </div>
  );
};

export default ItemHotel;
