import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-10 bg-white xl:px-20 px-8 items-center justify-center py-8">
        <div>
          <p>If you have any queries do reach out to to our social handles</p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 cursor-pointer">
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">Catalogs</h3>
          <div className="flex flex-col gap-1 font-semibold">
            <Link to="/">Jwellery</Link>
            <Link to="/">Bags</Link>
            <Link to="/">Hoodies</Link>
            <Link to="/">Shoes</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">Customer Services</h3>
          <div className="flex flex-col gap-1 font-semibold">
            <Link to="/">Contact Us</Link>
            <Link to="/">Track Your Orders</Link>
            <Link to="/">Book an Appointment</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">About Us</h3>
          <div className="flex flex-col gap-1 font-semibold">
            <Link to="/">Our Products</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Terms and Conditions</Link>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-2 w-full text-center">
        <p>Created By @Tarique for Mishal Tech.</p>
      </div>
    </>
  );
};

export default Footer;
