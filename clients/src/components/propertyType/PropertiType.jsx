import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const PropertiType = () => {
  const { data, loading, error } = useFetch("api/hotel/bytpe");

  const Images = [
    "https://res.cloudinary.com/cheloytec/image/upload/v1672358806/online-shop/ho.jpg",
    "https://res.cloudinary.com/cheloytec/image/upload/v1672358806/online-shop/ho4.jpg",
    "https://res.cloudinary.com/cheloytec/image/upload/v1672358806/online-shop/ho5.jpg",
    "https://res.cloudinary.com/cheloytec/image/upload/v1672358806/online-shop/ho3.jpg",
    "https://res.cloudinary.com/cheloytec/image/upload/v1672358806/online-shop/ho11.jpg",
    "https://res.cloudinary.com/cheloytec/image/upload/v1672358806/online-shop/ho1.jpg",
  ];

  return (
    <div className="py-6 px-3 w-full mt-10">
      <h2 className="mt-10 space-x-1">Browse by property type</h2>
      <div className="flex flex-wrap justify-between mx-2 overflow-x-auto">
        {loading ? <h2>Loading ...</h2> : <></>}
        {data &&
          Images.map((img, i) => (
            <div className="hover:transform hover:scale-105 hover:translate-x-2">
              <Link to={"/"} className="no-underline">
                <div className="w-100 h-15 shadow-md shadow-gray-700">
                  <img
                    src={img}
                    alt="The guide"
                    className="w-wf h-100 object-cover mb-2 rounded-md "
                  />
                </div>
                <h4 className="space-x-1 uppercase text-red-600">
                  {data[i]?.type}
                </h4>
                <span className="text-lg">
                  {data[i]?.count} {data[i]?.type}
                </span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PropertiType;
