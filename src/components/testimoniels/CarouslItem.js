import React, { Fragment } from "react";
import "./testimoniels.css";
const CarouslItem = ({ image, pName, pWord }) => {
  return (
    <Fragment>
      <img
        src={image}
        className="d-block mb-4 rounded-circle mx-auto"
        alt="Some Of Our Testimoniels Words About Us"
        loading="lazy"
      />
      <div className="carousel-caption d-none d-md-block position-static">
        <h5 className="text-black">{pName}</h5>
        <p className="text-black fw-light">{pWord}</p>
      </div>
    </Fragment>
  );
};

export default CarouslItem;
