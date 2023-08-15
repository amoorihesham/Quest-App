import React from "react";
import CarouslItem from "./CarouslItem";
import person1 from "../../Assets/images/person1.jpg";
import person2 from "../../Assets/images/person2.jpg";
import person3 from "../../Assets/images/person3.jpg";
import "./testimoniels.css";

const CarouslInner = () => {
  return (
    <div className="carousel-inner">
      <div className="carousel-item active">
        <CarouslItem
          image={person1}
          pName="Angel Marcoos"
          pWord="Some representative placeholder content for the first slide."
        />
      </div>
      <div className="carousel-item">
        <CarouslItem
          image={person3}
          pName="Mariam Mahfouz"
          pWord="Some representative placeholder content for the first slide."
        />
      </div>
      <div className="carousel-item">
        <CarouslItem
          image={person2}
          pName="David Alonso"
          pWord="Some representative placeholder content for the first slide."
        />
      </div>
    </div>
  );
};

export default CarouslInner;
