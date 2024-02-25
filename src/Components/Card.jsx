/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ filteredItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-10 shadow-sm">
      {filteredItems.map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.image}
              alt={item.Name}
              className="h-56 w-full hover:scale-105 transition-all duration-200"
            />
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">{item.Name}</h4>
          </div>
          <div className="flex flex-row justify-between mt-4 px-4">
            <p className="text-black/50">{item.Category}</p>
            <p className="font-semibold">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
