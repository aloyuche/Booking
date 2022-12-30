import React from "react";
import "./Grid.css";
import { Gallery } from "react-grid-gallery";

const Grid = () => {
  const IMAGES = [
    {
      src: "/images/c1.jpg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },

    {
      src: "/images/c8.jpg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/c9.jpg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/c6.jpg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/c5.jpg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/c4.jpg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/c2.jpg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/c3.jpg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
  ];
  return (
    <div className="gridImages">
      <h2 className="gridImageTitle">Get Inspiration on your next trip</h2>
      <Gallery images={IMAGES} />
    </div>
  );
};

export default Grid;
