import React from "react";
import "./footer.css";
const Footer = ({ classList }) => {
  return (
    <div className={classList}>
      <div className="container">
        <h2 className="fs-1 text-white">Quests</h2>
        <p className="text-white fw-light">
          All Copyright Reserved To 2023
          <span className="text-primary d-inline-block ms-1">@Amr Hesham</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
