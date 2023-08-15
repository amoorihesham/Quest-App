import React from "react";

const ProgressHero = ({ image }) => {
  return (
    <div>
      <img
        src={image}
        className="img-fluid"
        alt="Personal Show"
        loading="lazy"
      />
    </div>
  );
};

export default ProgressHero;
