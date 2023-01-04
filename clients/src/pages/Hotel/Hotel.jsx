import React, { useContext } from "react";
import Header from "../../components/Header";
import { FaMapMarkedAlt } from "react-icons/fa";
import PhotoAlbum from "react-photo-album";
import Subscribe from "../../components/subscribe/Subscribe";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
const Hotel = () => {
  // const Photos = [
  //   {
  //     src: "/images/ho4.jpg",
  //     width: 800,
  //     height: 600,
  //   },
  //   {
  //     src: "/images/ho6.jpg",
  //     width: 800,
  //     height: 600,
  //   },
  //   {
  //     src: "/images/ho1.jpg",
  //     width: 800,
  //     height: 600,
  //   },
  //   {
  //     src: "/images/ho5.jpg",
  //     width: 800,
  //     height: 600,
  //   },
  //   {
  //     src: "/images/ho7.jpg",
  //     width: 800,
  //     height: 600,
  //   },
  //   {
  //     src: "/images/ho.jpg",
  //     width: 800,
  //     height: 600,
  //   },
  //   {
  //     src: "/images/ho9.jpg",
  //     width: 800,
  //     height: 600,
  //   },
  // ];
  const location = useLocation();
  console.log(location);
  const id = location.toString().split("/"[2]);
  const { data, loading, error, refresh } = useFetch(`/api/hotels/find/${id}`);
  const { date } = useContext(SearchContext);
  console.log(date);
  //const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  // const dayDifference = (date1, date2) => {
  //   const timeDifferent = Math.abs(date2.getTime() - date1.getTime());
  //   const differentDay = Math.ceil(timeDifferent / MILLISECONDS_PER_DAY);
  //   return differentDay;
  // };

  return (
    <>
      <Header type={"smallHeader"} />
      {loading ? (
        <h2>Loading ...</h2>
      ) : (
        <div className="hotelContainer">
          <div className="hotelRow flex flex-row justify-between mt-5 px-5">
            <div className="hotelCol px-3">
              <h2 className="classTitle text-orange-600 uppercase space-x-3">
                {data.name}
              </h2>
              <span className="flex gap-2">
                <FaMapMarkedAlt />
                {data.address}
              </span>
              <br />
            </div>
            <div className="hotelCol uppercase">
              <button className="bg-black text-white p-2 text-center rounded-md hover:bg-orange-600">
                Booking Now
              </button>
            </div>
          </div>

          <div className="hotelRow p-4 transition hover:ease-in-out duration-300">
            <PhotoAlbum layout="rows" photos={data.photos} />
          </div>
          <div className="hotelRow space-x-4 text-justify text-xl px-5 ">
            <h2 className="photoTitle">Descriptions</h2>
            <p className="text-justify">{data.desc}</p>
          </div>
        </div>
      )}

      <Subscribe />
      <Footer />
    </>
  );
};

export default Hotel;
