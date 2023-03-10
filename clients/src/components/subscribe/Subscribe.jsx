import React from "react";
import "./subscribe.css";

const Subscribe = () => {
  return (
    <div className="Subscribe">
      <h2 className="subscribeTitle">Save time, save Money</h2>
      <p className="subscribeDesc">
        Sign up and we'll send the best deals to you
      </p>
      <div className="subscribeInput">
        <form
          action="https://getform.io/f/b26f0ca3-3fd6-42a1-8723-10143e5948ff"
          method="POST"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-1 py-2 w-35 shadow-md shadow-gray-500 border-none"
          />
          <button className="px-3 py-2 bg-black space-x-2 cursor-pointer uppercase text-white shadow-md shadow-gray-500 hover:bg-orange-600">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
