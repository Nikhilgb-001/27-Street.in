import React from "react";
// import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
const Searchbar = () => {
  return (
    <div className="">
      <div className="relative w-full max-w-[500px]">
        <input
          type="text"
          placeholder="Serch..."
          className="w-80 px-5 py-1 rounded-xl border-2 border-zinc-600 bg-zinc-800 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
        <IoIosSearch className="absolute top-0 right-0 mt-3 font-bold mr-5 text-zinc-50" />
      </div>
    </div>
  );
};

export default Searchbar;
