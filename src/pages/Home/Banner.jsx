import React from "react";
import B_IMG from "../../assets/Banner Image/b-girl.png";
import { MdLock } from "react-icons/md";

const Banner = () => {
  return (
    <div className="bg-Primary py-12 xl:px-28 px-4">
      <div className="py-5 pl-6 flex flex-col md:flex-row justify-around items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-lg mb-5">
            You can explore here for different collections from various popular
            brands.
          </p>
          <button
            className="bg-Black text-white justify-center p-3 rounded-lg flex items-center gap-2 hover:bg-purple
          -500 font-semibold"
          >
            <MdLock />
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2">
          <img
            style={{
              borderTopLeftRadius: "10rem",
              borderBottomRightRadius: "10rem",
              borderLeft: "3px solid grey",
              borderRight: "3px solid grey",
              padding: "1rem",
              height: "50rem",
            }}
            src={B_IMG}
            alt="banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
