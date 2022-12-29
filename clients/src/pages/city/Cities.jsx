import React from "react";
import { Link } from "react-router-dom";

const cities = () => {
  return (
    <div className="py-6 px-3 w-full mt-10">
      <h2 className="space-x-1 mb-1">Explore The Rising Sun City</h2>
      <p className="space-x-1 mb-7">
        The Land of milk and honey, even though its desolate we will rebuild it
      </p>
      <div className="flex flex-wrap justify-between mx-2">
        <div className="hover:transform hover:scale-105 hover:translate-x-2">
          <Link to={"/"}>
            <div className="w-100 h-15 shadow-md shadow-gray-700">
              <img
                src="/images/city2.jpg"
                alt="The guide"
                className="w-wf h-100 object-cover mb-2 rounded-md "
              />
            </div>
            <h4 className="space-x-1 uppercase text-red-500 none">
              Alabama City
            </h4>
            <span className="text-lg">132 Alaoma</span>
          </Link>
        </div>
        <div className="hover:transform hover:scale-105 hover:translate-x-2">
          <Link to={"/"}>
            <div className="w-100 h-15 shadow-md shadow-gray-700">
              <img
                src="/images/County.jpg"
                alt="The guide"
                className="w-wf h-100 object-cover mb-2 rounded-md"
              />
            </div>
            <h4 className="space-x-1 uppercase text-red-500 none">
              The JoliHub
            </h4>
            <span className="text-lg">The TechHub</span>
          </Link>
        </div>
        <div className="hover:transform hover:scale-105 hover:translate-x-2">
          <Link to={"/"}>
            <div className="w-100 h-15 shadow-md shadow-gray-700">
              <img
                src="/images/m2.jpg"
                alt="The guide"
                className="w-wf h-100 object-cover mb-2 rounded-md"
              />
            </div>
            <h4 className="space-x-1 uppercase text-red-500 none">
              East Essex
            </h4>
            <span className="text-lg">When God said yes</span>
          </Link>
        </div>
        <div className="hover:transform hover:scale-105 hover:translate-y-2">
          <Link to={"/"}>
            <div className="w-100 h-15 shadow-md shadow-gray-700">
              <img
                src="/images/m6.jpg"
                alt="The guide"
                className="w-wf h-100 object-cover mb-2 rounded-md"
              />
            </div>
            <h4 className="space-x-1 uppercase text-red-500 none">Bermigham</h4>
            <span className="text-lg top-0">Ihere adighi eme anyi</span>
          </Link>
        </div>
        <div className="hover:transform hover:scale-105 hover:translate-x-4">
          <Link to={"/"}>
            <div className="w-100 h-15 shadow-md shadow-gray-700">
              <img
                src="/images/m5.jpg"
                alt="The guide"
                className="w-wf h-100 object-cover mb-2 rounded-md"
              />
            </div>
            <h4 className="space-x-1 uppercase text-red-500 none">Arizona</h4>
            <span className="text-lg top-0">Ka- anyi gaba niru</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default cities;
