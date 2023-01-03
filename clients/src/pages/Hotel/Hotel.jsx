import React from "react";
import Header from "../../components/Header";
import { FaMapMarkedAlt } from "react-icons/fa";
import PhotoAlbum from "react-photo-album";
import Subscribe from "../../components/subscribe/Subscribe";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
const Hotel = () => {
  const Photos = [
    {
      src: "/images/ho4.jpg",
      width: 800,
      height: 600,
    },
    {
      src: "/images/ho6.jpg",
      width: 800,
      height: 600,
    },
    {
      src: "/images/ho1.jpg",
      width: 800,
      height: 600,
    },
    {
      src: "/images/ho5.jpg",
      width: 800,
      height: 600,
    },
    {
      src: "/images/ho7.jpg",
      width: 800,
      height: 600,
    },
    {
      src: "/images/ho.jpg",
      width: 800,
      height: 600,
    },
    {
      src: "/images/ho9.jpg",
      width: 800,
      height: 600,
    },
  ];
  const location = useLocation();
  console.log(location);
  const { data, loading, error, refresh } = useFetch(`/api/hotels`);
  return (
    <>
      <Header type={"smallHeader"} />
      <div className="hotelContainer">
        <div className="hotelRow flex flex-row justify-between mt-5 px-5">
          <div className="hotelCol px-3">
            <h2 className="classTitle text-orange-600 uppercase space-x-3">
              Industrial 1893
            </h2>
            <span className="flex gap-2">
              <FaMapMarkedAlt />
              Provoskla round-about province A calwick
            </span>
          </div>
          <div className="hotelCol uppercase">
            <button className="bg-black text-white p-2 text-center rounded-md hover:bg-orange-600">
              Booking Now
            </button>
          </div>
        </div>
        <div className="hotelRow p-4 transition hover:ease-in-out duration-300">
          <PhotoAlbum layout="rows" photos={Photos} />
        </div>
        <div className="hotelRow space-x-4 text-justify text-xl px-5 ">
          <h2 className="photoTitle">Descriptions</h2>
          <p className="text-justify">
            I don't have any time available to keep maintaining this package. If
            you have any request, try to sort it within the community. I'm able
            to merge pull requests that look safe from time to time but no
            commitment on timelines here. If you would like something completely
            custom, you can pass custom animation handler functions to
            animationHandler, swipeAnimationHandler, and stopSwipingHandler.
          </p>
        </div>
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Hotel;
