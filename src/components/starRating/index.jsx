import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
const StarRating = (props) => {
  const { noOfStars } = props;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleRating = (getCurrentIndex) => {
    // console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  };
  const handleMouseEnter = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleRating(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
