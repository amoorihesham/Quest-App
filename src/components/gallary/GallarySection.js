import React, { useEffect } from "react";
import Card from "./Card";
import "./gallary.css";
import proj1 from "../../Assets/images/1.webp";
import proj2 from "../../Assets/images/2.webp";
import proj3 from "../../Assets/images/3.webp";
import proj4 from "../../Assets/images/4.webp";
import proj5 from "../../Assets/images/5.webp";
import proj6 from "../../Assets/images/6.webp";

const GallarySection = ({ classList }) => {
  useEffect(() => {
    document.title = "Quest App - Gallary";
  }, []);
  return (
    <div className={classList}>
      <h2 className="mb-5">Gallary</h2>
      <div className="container">
        <div className="row g-4">
          <Card link="https://google.com" image={proj1} title="Project 1" />
          <Card link="https://google.com" image={proj2} title="Project 2" />
          <Card link="https://google.com" image={proj3} title="Project 3" />
          <Card link="https://google.com" image={proj4} title="Project 4" />
          <Card link="https://google.com" image={proj5} title="Project 5" />
          <Card link="https://google.com" image={proj6} title="Project 6" />
        </div>
      </div>
    </div>
  );
};

export default GallarySection;
