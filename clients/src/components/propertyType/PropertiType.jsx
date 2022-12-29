import React from "react";

const PropertiType = () => {
  return (
    <div className="py-6 px-3 w-full mt-10">
      <h2 className="mt-10 space-x-1">Browse by property type</h2>
      <div className="flex flex-wrap justify-between mx-2 overflow-x-auto">
        <div className="hover:transform hover:scale-105 hover:translate-x-2">
          <div className="w-100 h-15 shadow-md shadow-gray-700">
            <img
              src="/images/city6.jpg"
              alt="The guide"
              className="w-wf h-100 object-cover mb-2 rounded-md "
            />
          </div>
          <h4 className="space-x-1 uppercase text-red-600">The Holy city</h4>
          <span className="text-lg">132 Alaoma</span>
        </div>
        <div className="hover:transform hover:scale-105 hover:translate-x-2">
          <div className="w-100 h-15 shadow-md shadow-gray-700">
            <img
              src="/images/city.jpg"
              alt="The guide"
              className="w-wf h-100 object-cover mb-2 rounded-md"
            />
          </div>
          <h4 className="space-x-1 uppercase text-red-600">Aba City</h4>
          <span className="text-lg">The TechHub</span>
        </div>
        <div className="hover:transform hover:scale-105 hover:translate-x-2">
          <div className="w-100 h-15 shadow-md shadow-gray-700">
            <img
              src="/images/city5.jpg"
              alt="The guide"
              className="w-wf h-100 object-cover mb-2 rounded-md"
            />
          </div>
          <h4 className="space-x-1 uppercase text-red-600">God is with Us</h4>
          <span className="text-lg">When God said yes</span>
        </div>
        <div className="hover:transform hover:scale-105 hover:translate-x-2">
          <div className="w-100 h-15 shadow-md shadow-gray-700">
            <img
              src="/images/city3.jpg"
              alt="The guide"
              className="w-wf h-100 object-cover mb-2 rounded-md"
            />
          </div>
          <h4 className="space-x-1 uppercase text-red-600">Umuchukwu</h4>
          <span className="text-lg">Ihere adighi eme anyi</span>
        </div>
        <div className="hover:transform hover:scale-105 hover:translate-x-2">
          <div className="w-wf h-15 shadow-md shadow-gray-700">
            <img
              src="/images/city1.jpg"
              alt="The guide"
              className="w-wf h-100 object-cover mb-2 rounded-md"
            />
          </div>
          <h4 className="space-x-1 uppercase text-red-600">Abanganla</h4>
          <span className="text-lg">Ka- anyi gaba niru</span>
        </div>
        <div className="hover:transform hover:scale-105 hover:translate-x-2">
          <div className="w-wf h-15 shadow-md shadow-gray-700">
            <img
              src="/images/city1.jpg"
              alt="The guide"
              className="w-wf h-100 object-cover mb-2 rounded-md"
            />
          </div>
          <h4 className="space-x-1 uppercase text-red-600">Abanganla</h4>
          <span className="text-lg">Ka- anyi gaba niru</span>
        </div>
      </div>
    </div>
  );
};

export default PropertiType;
