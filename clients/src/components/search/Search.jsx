import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { GoSearch } from "react-icons/go";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);

  return (
    <div className="Search-Hotels bg-orange-500 rounded-md text-white p-3 m-10">
      <div className="search">
        <div className="searchItem flex flex-col pb-3">
          <span className="dsc">Destination</span>
          <input
            type="text"
            placeholder={destination}
            className="p-2 text-gray-700 text-lg font-bold"
          />
        </div>

        <div className="searchItem flex flex-col pb-3">
          <span>Check in Date</span>
          <span
            onMouseEnter={() => setOpenDate(!openDate)}
            className="bg-white p-2 text-black text-lg"
          >
            {" "}
            {`${format(date[0].startDate, "dd / MM / yyyy")} -- ${format(
              date[0].endDate,
              "dd / MM / yyyy"
            )}`}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              minDate={new Date()}
            />
          )}
        </div>

        <div className="searchItem">
          <div className="searchOptions">
            <div className="searchOptions-items flex flex-col pb-3">
              <span className="searchOptiontext">
                Min price <small>per night</small>
              </span>
              <input
                type="number"
                className="searchOptionInput p-2 text-lg font-bold"
              />
            </div>
            <div className="searchOptions-items flex flex-col pb-3">
              <span className="searchOptiontext">
                Max price <small>per night</small>
              </span>
              <input
                type="number"
                className="searchOptionInput p-2 text-lg font-bold"
              />
            </div>
            <div className="searchOptions-items flex flex-col pb-3">
              <span className="searchOptiontext">Adult</span>
              <input
                type="number"
                min={1}
                className="searchOptionInput p-2 text-lg font-bold"
                placeholder={options.adult}
              />
            </div>
            <div className="searchOptions-items flex flex-col pb-3">
              <span className="searchOptiontext">Children</span>
              <input
                type="number"
                min={0}
                className="searchOptionInput p-2 text-lg font-bold"
                placeholder={options.children}
              />
            </div>
            <div className="searchOptions-items flex flex-col pb-3">
              <span className="searchOptiontext">Room</span>
              <input
                type="number"
                min={1}
                className="searchOptionInput p-2 text-lg font-bold"
                placeholder={options.room}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row rounded-md px-2 bg-gray-800 justify-center text-white cursor-pointer text-2xl items-center">
          <button className=" p-2 px-4 flex gap-1">
            <GoSearch size={30} /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
