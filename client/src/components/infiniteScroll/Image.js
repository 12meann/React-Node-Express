import React from "react";

const Image = ({ image }) => {
  return <img src={image.urls.thumb} alt="" className="single-photo" />;
};

export default Image;
