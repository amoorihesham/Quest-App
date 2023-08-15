import React, { useEffect } from "react";
import Carousl from "./Carousl";
import "./testimoniels.css";

const TestimonielsSection = ({ classList }) => {
  useEffect(() => {
    document.title = "Quest App - Testimoniels";
  }, []);
  return (
    <div className={classList}>
      <h2 className="text-primary mb-5">Testimoniels</h2>
      <div className="container">
        <div className="row">
          <Carousl />
        </div>
      </div>
    </div>
  );
};

export default TestimonielsSection;
