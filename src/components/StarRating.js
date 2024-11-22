import React from "react";

const StarRating = ({ rating, onRatingChange }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= rating ? "star filled" : "star"}
        onClick={() => onRatingChange(i)} // Trigger the rating change when a star is clicked
      >
        ★
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;