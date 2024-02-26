import React from "react";
import { Link } from "react-router-dom";

const NewsLetter = () => {
  return (
    <div className="bg-#[1E2832] bg-opacity-5 w-full xl:px-28 px-4 py-16">
      <h2 className="style1 mb-8">
        Follow Products and Discounts on Our Twitter Page
      </h2>

      <div className="flex flex-wrap gap-4 items-center justify-center mb-20">
        <Link to="/">
          <img
            src="../../../NewsLetter/1.jpg"
            alt="fashion image"
            className="h-64 w-64 bg-cover"
          ></img>
        </Link>
        <Link to="/">
          <img
            src="../../../NewsLetter/4.jpg"
            alt="fashion image"
            className="h-64 w-64 bg-cover"
          ></img>
        </Link>
        <Link to="/">
          <img
            src="../../../NewsLetter/3.jpg"
            alt="fashion image"
            className="h-64 w-64 bg-cover"
          ></img>
        </Link>
        <Link to="/">
          <img
            src="../../../NewsLetter/6.jpg"
            alt="fashion image"
            className="h-64 w-64 bg-cover"
          ></img>
        </Link>
      </div>

      <div>
        <h2 className="style1 mb-8">Subscribe to Our News Letter</h2>
        <form className="md:w-1/2 mx-auto text-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            className="h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-Black/50 mr-4"
          />
          <input
            type="submit"
            value={"submit"}
            className="bg-black text-white px-6 py-1 rounded-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
