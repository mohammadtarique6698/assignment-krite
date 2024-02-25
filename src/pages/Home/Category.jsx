import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const companyLogos = [
    {
      id: 1,
      image: {
        src: "../../../Brand Logos/nike.jpg",
        alt: "Nike",
      },
    },
    {
      id: 2,
      image: {
        src: "../../../Brand Logos/puma.jpg",
        alt: "Puma",
      },
    },
    {
      id: 3,
      image: {
        src: "../../../Brand Logos/reebok.jpg",
        alt: "Reebok",
      },
    },
    {
      id: 4,
      image: {
        src: "../../../Brand Logos/adidas.png",
        alt: "Adidas",
      },
    },
    {
      id: 5,
      image: {
        src: "../../../Brand Logos/converse.jpg",
        alt: "Converse",
      },
    },
    {
      id: 6,
      image: {
        src: "../../../Brand Logos/killer.png",
        alt: "Killer",
      },
    },
    {
      id: 7,
      image: {
        src: "../../../Brand Logos/Lacoste.png",
        alt: "Lacoste",
      },
    },
    {
      id: 8,
      image: {
        src: "../../../Brand Logos/lawman.jpg",
        alt: "Lawman",
      },
    },
  ];

  return (
    <>
      <div className="w-full mx-auto container xl:px-28 px-4 py-10">
        <h1 className="text-6xl font-semibold text-center py-10">Our Brands</h1>
        <div className="flex flex-row flex-wrap items-center justify-around gap-4">
          {companyLogos.map((item) => (
            <div key={item.id} className="cursor-pointer">
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="h-22 w-60 bg-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-5xl font-semibold uppercase text-center rounded-sm bg-Primary py-10">
          Deep dive in the world of fashion
        </p>

        <div className="pt-8 px-16 pb-12 bg-Primary ">
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
            <Link to="/">
              <img
                src="../../../fashion/fashion3.jpg"
                alt=""
                className="h-full w-full hover:scale-105 transition-all duration-200"
              />
            </Link>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid grid-rows-2 gap-4">
                <Link to="/">
                  <img
                    src="../../../fashion/fashion1.jpg"
                    alt=""
                    className="h-full w-full hover:scale-105 transition-all duration-200"
                  />
                </Link>
                <Link to="/">
                  <img
                    src="../../../fashion/fashion2.jpg"
                    alt=""
                    className="h-full w-full hover:scale-105 transition-all duration-200"
                  />
                </Link>
              </div>
              <div className="grid grid-rows-2 gap-4">
                <Link to="/">
                  <img
                    src="../../../fashion/fashion4.jpg"
                    alt=""
                    className="h-full w-full hover:scale-105 transition-all duration-200"
                  />
                </Link>
                <Link to="/">
                  <img
                    src="../../../fashion/fashion5.jpg"
                    alt=""
                    className="h-full w-full hover:scale-105 transition-all duration-200"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
