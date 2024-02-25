import React, { useState } from "react";
import MT from "../logo/mishal tech.png";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, serIsSearchOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    serIsSearchOpen(!isSearchOpen);
  };

  const NavItems = [
    {
      title: "Clothes and Shoes",
      path: "/",
    },
    {
      title: "Party Dress",
      path: "/",
    },
    {
      title: "Neck Accessories",
      path: "/",
    },
    {
      title: "Miscellaneous",
      path: "/",
    },
  ];
  return (
    <header className="w-full xl:px-28 px-4 bg-Primary">
      <nav className="flex justify-between items-center md:py-4 pt-6 pb-3">
        <a href="/">
          <img src={MT} alt="logo" height={100} width={100} />
        </a>
        <div className="flex gap-3">
          <button onClick={toggleSearch}>
            <FaSearch className="text-Black w-5 h-5 cursor-pointer md:block" />
          </button>
          {isSearchOpen ? (
            <div className="relative rounded-md shadow-sm">
              <input
                type="text"
                placeholder="Search"
                className="py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-4 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
              />
            </div>
          ) : null}
        </div>
        <div className="sm:flex flex-row items-center gap-4 text-lg text-Black hidden">
          <a href="/">
            <FaRegUser /> User
          </a>
          <a href="/">
            <MdOutlineShoppingCart /> Cart
          </a>
        </div>

        <div className="sm:hidden">
          <button onClick={toggle}>
            {isOpen ? (
              <FaTimes className="w-5 h-5 text-Black" />
            ) : (
              <FaBars className="w-5 h-5 text-Black" />
            )}
          </button>
        </div>
      </nav>
      <hr />
      <div className="pt-4 pb-5">
        <ul className="sm:flex justify-between items-center hidden">
          {NavItems.map((item) => (
            <li key={item.title} className="hover:text-purple-500">
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul
          className={`bg-Black text-white px-4 py-2 rounded ${
            isOpen ? "" : "hidden"
          }`}
        >
          {NavItems.map((item) => (
            <li
              key={item.title}
              className="hover:text-purple-500 my-3 cursor-pointer"
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
