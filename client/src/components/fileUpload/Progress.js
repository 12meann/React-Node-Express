import React from "react";
import PropTypes from "prop-types";

const Progress = ({ percentage }) => {
  return (
    <div className="section">
      <progress class="progress is-info is-medium" value={percentage} max="100">
        {percentage}%
      </progress>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Progress;
