import React from "react";
import { FaStar } from "react-icons/fa";
const StarFixed = ({ratings}) => {
  return (
    <div className="flex justify-center items-center">
      <h5 className="text-xs pl-2 font-semibold">{ratings}</h5>
      <label>
        <input className="hidden" type="radio" name="rating" />
        <FaStar size={15} className="text-[#ffc107]" />
      </label>
    </div>
  );
};

export default StarFixed;
