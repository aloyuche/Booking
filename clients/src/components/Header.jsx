import React, { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { FaTaxi, FaPlane, FaCamera, FaBed } from "react-icons/fa";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-datepicker/dist/react-datepicker.css"; // theme css file
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
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
          <div className="headerSearch py-2">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going?"
                className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="headerSearchItem py-4">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Room</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.room <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>
                Search
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
