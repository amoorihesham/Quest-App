import React from "react";
import "./testimoniels.css";
import CarouslIndicators from "./CarouslIndicators";
import CarouslInner from "./CarouslInner";

const Carousl = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <CarouslIndicators />
      <CarouslInner />
    </div>
  );
};

export default Carousl;
