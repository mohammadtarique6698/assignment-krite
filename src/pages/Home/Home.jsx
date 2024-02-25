import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Product from "./Product";
import BestSeller from "./BestSeller";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <>
      <Banner />
      <Category />
      <Product />
      <BestSeller />
      <NewsLetter />
    </>
  );
};

export default Home;
