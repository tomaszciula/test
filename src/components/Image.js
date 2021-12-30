import React from "react";
import image from "../Assets/hangman.jpg";

const Image = () => {
  return (
    <div className="w-2/5 mx-12 opacity-5">
      <img src={image} alt="hangman" />
    </div>
  );
};

export default Image;
