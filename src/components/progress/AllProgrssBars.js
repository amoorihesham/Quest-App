import React, { Fragment } from "react";
import ProgressBar from "./ProgressBar";

const AllProgrssBars = () => {
  return <Fragment>
  <ProgressBar progress="95%" skill="HTML" />
  <ProgressBar progress="98%" skill="CSS" />
  <ProgressBar progress="88%" skill="JavaScript" />
  <ProgressBar progress="70%" skill="React JS" />
  <ProgressBar progress="95%" skill="Bootstrap" />
  <ProgressBar progress="85%" skill="Jquery" />
  <ProgressBar progress="80%" skill="Tailwind CSS" />
  <ProgressBar progress="65%" skill="Ajax" />
  <ProgressBar progress="100%" skill="Responsive Design" />
  </Fragment>;
};

export default AllProgrssBars;
