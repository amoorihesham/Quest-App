import React, { useEffect } from "react";
import "./main.css";

const Hero = ({ classList }) => {
  useEffect(() => {
    document.title = "Quest App - Home";
  }, []);
  return (
    <div className={classList}>
      <div className="container">
        <h1 className="text-white">Hello And Welcom</h1>
        <p className="text-white">This Is My First Simple React Js Template.</p>
      </div>
    </div>
  );
};
export default Hero;
