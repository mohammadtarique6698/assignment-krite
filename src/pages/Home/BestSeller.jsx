import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BestSeller = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/Products.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const DataForBestSeller = products.filter(
    (item) => item.status === "Best Seller"
  );

  //console.log(DataForBestSeller);

  return (
    <div className="w-full mx-auto container xl:px-28 px-4 mt-12">
      <h2 className="text-4xl font-semibold text-center mb-8">
        Our Best Sellers
      </h2>
      <p className="text-Black/75 capitalize mx-auto md:w-2/3 mb-8">
        Elevate your style with our top brands: Nike for performance-driven
        sportswear, Adidas for timeless casual elegance, and Lawman/Valcom for
        refined classics. Reebok leads in fitness fashion, offering quality
        athletic gear. Explore our curated collection for a stylish and active
        lifestyle.
      </p>

      <div className="mt-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            550: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {DataForBestSeller.map((item) => (
            <SwiperSlide key={item.id}>
              <div key={item.id}>
                <Link to={`/shop/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.Name}
                    className="h-56 w-full bg-cover hover:scale-105 transition-all duration-200"
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;
