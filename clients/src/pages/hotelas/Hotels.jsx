import Footer from "../../components/footer/Footer";
import Header from "../../components/Header";
import ItemHotel from "../../components/itemHotel/ItemHotel";
import Search from "../../components/search/Search";
import Subscribe from "../../components/subscribe/Subscribe";
import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
// import SearchItem from "../../components/searchItem/SearchItem";

const Hotels = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState(location.state.date);
  const { data, loading, error, refresh } = useFetch(
    `/api/hotels?city=${destination} &min=${min || 0}&max=${max || 9999}`
  );

  const handleClick = () => {
    refresh();
  };

  return (
    <div>
      <Header type="smallHeader" />
      <div className="hotelContainer ">
        <div className="hotelsRow flex mt-5">
          <div className="hotelsCol flex-2">
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
                    {`${format(
                      date[0].startDate,
                      "dd / MM / yyyy"
                    )} -- ${format(date[0].endDate, "dd / MM / yyyy")}`}
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
                        onChange={(e) => setMin(e.target.value)}
                        className="searchOptionInput p-2 text-lg font-bold"
                      />
                    </div>
                    <div className="searchOptions-items flex flex-col pb-3">
                      <span className="searchOptiontext">
                        Max price <small>per night</small>
                      </span>
                      <input
                        type="number"
                        onChange={(e) => setMax(e.target.value)}
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
                  <button
                    className=" p-2 px-4 flex gap-1 "
                    loading={loading}
                    data={data}
                    onClick={handleClick}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hotelsCol flex-1 p-3 ">
            <div className="listhotel mx-5">
              {loading ? (
                <h2>Loading ..</h2>
              ) : (
                <>
                  {data.map((item) => (
                    <ItemHotel item={item} key={item._id} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Hotels;
