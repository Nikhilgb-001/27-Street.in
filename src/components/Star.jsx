import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
const Star = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="flex justify-center items-center">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label>
            <input
              className="hidden"
              key={star}
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />

            <FaStar              
              size={15}
              color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <h5 className="text-xs pl-2 font-semibold">Ratings : {rating}</h5>
    </div>
  );
};

export default Star;
