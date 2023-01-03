import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const City = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/hotel/bycity?cities=Alabama_City,Tinapa_Garden,Alaska_Villa,Ugwuocha_Hill,Ubudu"
  );
  return (
    <div className="cities">
      <div className="py-6 px-3 w-full mt-10">
        <h2 className="space-x-1 mb-1">Explore Modern Biafra</h2>
        <p className="space-x-1 mb-7">
          Visiting these cities has a lot to offer
        </p>
        <div className="flex flex-wrap justify-between mx-2">
          {loading ? (
            <h2>Loading ....</h2>
          ) : (
            <>
              <div className="hover:transform hover:scale-105 hover:translate-x-2">
                <Link to={"/"} className="no-underline">
                  <div className="w-100 h-20 shadow-md shadow-gray-700">
                    <img
                      src="https://res.cloudinary.com/cheloytec/image/upload/v1672358808/online-shop/c9.jpg"
                      alt="The guide"
                      className="w-wf h-100 object-cover mb-2 rounded-md "
                    />
                  </div>
                  <h4 className="space-x-1 uppercase text-red-500 none">
                    Alabama_City
                  </h4>
                  <span className="text-lg">{data[0]} Properties</span>
                </Link>
              </div>
              <div className="hover:transform hover:scale-105 hover:translate-x-2">
                <Link to={"/"} className="no-underline">
                  <div className="w-100 h-20 shadow-md shadow-gray-700">
                    <img
                      src="https://res.cloudinary.com/cheloytec/image/upload/v1672358808/online-shop/c11.jpg"
                      alt="Ugwuocha Hill"
                      className="w-wf h-100 object-cover mb-2 rounded-md "
                    />
                  </div>
                  <h4 className="space-x-1 uppercase text-red-500 none">
                    Ugwuocha-Hill
                  </h4>
                  <span className="text-lg">{data[3]} properties</span>
                </Link>
              </div>
              <div className="hover:transform hover:scale-105 hover:translate-x-2">
                <Link to={"/"} className="no-underline">
                  <div className="w-100 h-20 shadow-md shadow-gray-700">
                    <img
                      src="https://res.cloudinary.com/cheloytec/image/upload/v1672358808/online-shop/c6.jpg"
                      alt="The Tinapa"
                      className="w-wf h-100 object-cover mb-2 rounded-md "
                    />
                  </div>
                  <h4 className="space-x-1 uppercase text-red-500 none">
                    Tinapa_Garden
                  </h4>
                  <span className="text-lg">{data[1]} properties</span>
                </Link>
              </div>
              <div className="hover:transform hover:scale-105 hover:translate-x-2">
                <Link to={"/"} className="no-underline">
                  <div className="w-100 h-20 shadow-md shadow-gray-700">
                    <img
                      src="https://res.cloudinary.com/cheloytec/image/upload/v1672358808/online-shop/c8.jpg"
                      alt="The guide"
                      className="w-wf h-100 object-cover mb-2 rounded-md "
                    />
                  </div>
                  <h4 className="space-x-1 uppercase text-red-500 none">
                    Ubudu
                  </h4>
                  <span className="text-lg">{data[4]} properties</span>
                </Link>
              </div>
              <div className="hover:transform hover:scale-105 hover:translate-x-2">
                <Link to={"/"} className="no-underline">
                  <div className="w-100 h-20 shadow-md shadow-gray-700">
                    <img
                      src="https://res.cloudinary.com/cheloytec/image/upload/v1672358808/online-shop/c5.jpg"
                      alt="Alaska Villa"
                      className="w-wf h-100 object-cover mb-2 rounded-md "
                    />
                  </div>
                  <h4 className="space-x-1 uppercase text-red-500 none">
                    Alaska_Villa
                  </h4>
                  <span className="text-lg">{data[2]} properties</span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default City;
