import React from "react";
import "./featCard.css";
const FeatCard = ({ title, description }) => {
  return (
    <div className="col-md-6 col-xl-4 col-xxl-3">
      <div className="featCard bg-body-secondary p-3">
        <h4 className="mb-3 text-start">{title}</h4>
        <p className="text-black-50">{description}</p>
      </div>
    </div>
  );
};

export default FeatCard;
