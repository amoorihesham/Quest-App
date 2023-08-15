import React from "react";
import "./progress.css";
const ProgressBar = ({ progress, skill }) => {
  return (
    <div
      className="progress mb-4"
      role="progressbar"
      aria-label="Basic example"
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="progress-bar fw-bold text-center"
        style={{ width: progress }}
      >
        {skill}
      </div>
    </div>
  );
};

export default ProgressBar;
