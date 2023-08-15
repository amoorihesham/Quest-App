import React from "react";

const Card = ({ link, image, title }) => {
  return (
    <div className="col-md-6 col-xl-4 col-xxl4">
      <div className="card">
        <img
          src={image}
          className="card-img-top img-fluid"
          alt="Project Alpha"
          loading="lazy"
        />
        <div className="card-body">
          <h5 className="card-title mb-3">{title}</h5>
          <a href={link} className="btn btn-primary" target="_blank">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
