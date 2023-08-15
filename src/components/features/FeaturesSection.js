import React, { useEffect } from "react";
import "./featCard.css";
import FeatCard from "./FeatCard";

const FeaturesSection = ({ classList }) => {
  useEffect(() => {
    document.title = "Quest App - Features";
  }, []);
  return (
    <div className={classList}>
      <h2 className="text-primary mb-5 ">Features</h2>
      <div className="container">
        <div className="row g-4">
          <FeatCard
            title="Feat 1"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          />
          <FeatCard
            title="Feat 1"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          />
          <FeatCard
            title="Feat 1"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          />
          <FeatCard
            title="Feat 1"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturesSection;
