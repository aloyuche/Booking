import React, { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi, FaPlane, FaCamera, FaBed } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { BsFillCalendarMonthFill } from "react-icons/bs";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-datepicker/dist/react-datepicker.css"; // theme css file
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
// import hotels from "../pages/hotelas/Hotels";
// import { format } from "date-fns";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <div className="bg-gradient-to-r from-black to-slate-600 p-3 px-3">
      <div className="flex flex-row justify-between pt-4">
        <Link to={"/"} className="no-underline">
          <div className="flex text-orange-600 text-3xl font-bold px-5">
            <h1>CHELOYTEC</h1>
          </div>
        </Link>
        <div className="flex px-5">
          <p
            type="button"
            className=" flex btn btn-outline-light uppercase mx-3"
          >
            Register
          </p>
          <p
            type="button"
            className="btn btn-outline-light uppercase px-4 flex"
          >
            Login
          </p>
        </div>
      </div>
      <div className="flex justify-evenly cursor-pointer text-orange-300 px-5 py-3 ">
        <div className="flex mx-2 p-2 border-2  rounded-md border-orange-100 text-red-600  hover:translate-x-2 hover:duration-500  hover:bg-red-500 hover:text-white ">
          <FaBed size={20} />
          <span className="mx-2">Stay</span>
        </div>
        <div className="flex mx-2 p-2  hover:text-orange-100 rounded-md hover:translate-x-2 hover:duration-500  hover:bg-red-500 ">
          <FaPlane size={20} /> <span className="mx-2"> Flight</span>
        </div>
        <div className="flex mx-2 p-2  hover:text-orange-100 rounded-md hover:translate-x-2 hover:duration-500  hover:bg-red-500 ">
          <FaTaxi size={20} /> <span className="mx-2">Car Rentals</span>
        </div>
        <div className="flex mx-2 p-2  hover:text-orange-100 rounded-md hover:translate-x-2 hover:duration-500  hover:bg-red-500 ">
          <FaCamera size={20} />
          <span className="mx-2">Attractions</span>
        </div>
        <div className="flex mx-2 p-2  hover:text-orange-100 rounded-md hover:translate-x-2 hover:duration-500  hover:bg-red-500">
          <AiFillCar size={20} /> <span className="mx-2">Airport Taxi</span>
        </div>
      </div>

      {type !== "smallHeader" && (
        <>
          {" "}
          <div className="tit">
            <h1 className="text-center text-4xl font-bold uppercase text-white pt-3 mt-3">
              Make you reservation at cheaper rate
            </h1>
          </div>
          <div className="mx-3 px-6 pt-3 text-center text-white text-sm">
            Get rewarded for travel unlock instant saving of 10% with CheloyTec
            Booking
          </div>
          <div className="ml-40 pt-3">
            <button className="bg-blue-500 rounded-lg  text-white cursor-pointer px-3 p-2">
              Sign in / Register
            </button>
          </div>
          {/* {type !== "smallHeader" && ( */}
          {/* <div className="items-center "> */}
          <div className=" search flex w-100 h-6 rounded-md bg-white border-2 content-center shadow-sm shadow-neutral-500 border-orange-400 justify-between items-center relative cursor-pointer top-12">
            <div className="search-item flex w-sm rounded-md cursor-pointer py-2 border-r-2 hover:duration-200 translate-x-3 border-orange-500 text-center">
              <FaBed className="text-gray-400" size={40} />
              <input
                type="text"
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where are you going"
                className="rounded-md space-x-2 "
              />
            </div>
            <div className="flex rounded-md w-sm cursor-pointer content-center ml-5 pl-5 py-3 items-center space-x-2 hover:duration-200 hover:bg-orange-500 hover:text-teal-100 border-r-2 border-orange-500">
              <BsFillCalendarMonthFill className="text-gray-400" size={30} />
              <span onMouseEnter={() => setOpenDate(!openDate)}>
                {" "}
                {`${format(date[0].startDate, "dd MM yyyy")}, -- ${format(
                  date[0].endDate,
                  "dd MM yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="absolute top-16 flex-col  bg-white space-x-1 text-gray-500 py-2 w-30 mr-2 shadow-2xl shadow-gray-600 "
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="flex rounded-md w-sm cursor-pointer text-center px-0 py-3 items-center hover:bg-orange-500 hover:duration-200 hover:text-teal-100 border-r-2 border-orange-500">
              <GiPerson className="text-gray-400 space-x-2" size={30} />{" "}
              <span onMouseEnter={() => setOpenOptions(!openOptions)}>
                {`${options.adult} Adult - ${options.children} Children - ${options.room} Room`}
              </span>
              {openOptions && (
                <div className=" flex-col absolute top-16 bg-white space-x-1 text-gray-500 py-2 w-30 mr-2 shadow-2xl shadow-gray-600">
                  <div className="flex justify-between mx-4 space-x-1 ">
                    <span className="optionText">Adult</span>
                    <div className="flex items-center gap-1 text-black text-lg">
                      <button
                        disabled={options.adult <= 1}
                        onClick={() => handleOption("adult", "d")}
                        className="bg-gray-200 border-2 hover:bg-gray-800 hover:text-yellow-50 border-gray-700 text-black px-2 m-2"
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleOption("adult", "i")}
                        className="bg-gray-200 border-2 hover:bg-gray-800 hover:text-yellow-50 border-gray-700 text-black px-2 m-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mx-4">
                    <span className="optionText">Children</span>
                    <div className="flex items-center gap-1 text-black text-lg">
                      <button
                        type="button"
                        disabled={options.children <= 0}
                        onClick={() => handleOption("children", "d")}
                        className="bg-gray-200 border-2 hover:bg-gray-800 hover:text-yellow-50 border-gray-700 text-black px-2 m-2"
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        onClick={() => handleOption("children", "i")}
                        type="button"
                        className="bg-gray-200 border-2 hover:bg-gray-800 hover:text-yellow-50 border-gray-700 text-black px-2 m-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between mx-4">
                    <span className="optionText">Room</span>
                    <div className="flex items-center gap-1 text-black text-lg">
                      <button
                        type="button"
                        disabled={options.room <= 1}
                        onClick={() => handleOption("room", "d")}
                        className="bg-gray-200 border-2 hover:bg-gray-800 hover:text-yellow-50 border-gray-700 text-black px-2 m-2"
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleOption("room", "i")}
                        className="bg-gray-200 border-2 hover:bg-gray-800 hover:text-yellow-50 border-gray-700 text-black px-2 m-2"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex rounded-md w-sm text-center cursor-pointer py-2 items-center">
              <button className=" p-2 px-4" onClick={handleSearch}>
                <GoSearch size={40} />
              </button>
            </div>
          </div>
          {/* </div> */}
        </>
      )}
    </div>
  );
};

export default Header;
