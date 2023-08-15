import React, { useEffect } from "react";
import ProgressHero from "./ProgressHero";
import progPhoto from "../../Assets/images/hero.webp";
import AllProgrssBars from "./AllProgrssBars";

const ProgressSection = ({ classList }) => {
  useEffect(() => {
    document.title = "Quest App - Skills";
  }, []);
  return (
    <div className={classList} id="skills">
      <h2 className="mb-5">Skills</h2>
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-6 col-xxl-6 col-md-12">
            <ProgressHero image={progPhoto} />
          </div>
          <div className="col-xl-6 col-xxl-6 col-md-12">
            <AllProgrssBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSection;
