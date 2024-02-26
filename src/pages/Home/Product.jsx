import React, { useState, useEffect } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../../Components/Card";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const response = await fetch("/Products.json");
        const prod = await response.json();
        setProducts(prod);
        setFilteredItems(prod);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFunc();
  }, []);
  //console.log(products);

  const filter = (Category) => {
    const filtered =
      Category === "all"
        ? products
        : products.filter((product) => product.Category === Category);
    setFilteredItems(filtered);
    setSelectedCategory(Category);
  };

  const allProducts = () => {
    setFilteredItems(products);
    setSelectedCategory("all");
  };

  const handleSort = (sort) => {
    setSort(sort);
    if (sort == "default") {
      setFilteredItems(products);
    }

    if (sort == "A-Z") {
      const sorted = [...filteredItems].sort((a, b) =>
        a.Name.localeCompare(b.Name)
      );
      setFilteredItems(sorted);
    }

    if (sort == "Z-A") {
      const sorted = [...filteredItems].sort((a, b) =>
        b.Name.localeCompare(a.Name)
      );
      setFilteredItems(sorted);
    }

    if (sort == "Low-to-High") {
      const sorted = [...filteredItems].sort(
        (a, b) =>
          parseFloat(a.price.replace(/\$/g, "")) -
          parseFloat(b.price.replace(/\$/g, ""))
      );
      setFilteredItems(sorted);
    }

    if (sort === "High-to-Low") {
      const sorted = [...filteredItems].sort(
        (a, b) =>
          parseFloat(b.price.replace(/\$/g, "")) -
          parseFloat(a.price.replace(/\$/g, ""))
      );
      setFilteredItems(sorted);
    }
  };

  return (
    <div className="w-full mx-auto container xl:px-28 px-4 mt-12">
      <h2 className="style1">Subscribe to our News Letter</h2>

      <div className="mt-12 mb-10">
        <div className="flex flex-col sm:justify-center md:flex-row md:justify-between items-center gap-4 flex-wrap">
          <div className="flex flex-row items-center gap-4 flex-wrap">
            <button className="style2" onClick={allProducts}>
              All Products
            </button>
            <button className="style2" onClick={() => filter("shirt")}>
              Shirts
            </button>
            <button className="style2" onClick={() => filter("hood")}>
              Hoods
            </button>
            <button className="style2" onClick={() => filter("shoe")}>
              Shoes
            </button>
          </div>

          <div className="flex flex-row items-center gap-4 flex-wrap">
            <FaFilter className="h-4 w-4" />
            <select
              value={sort}
              className="px-2 py-1 rounded-sm"
              onChange={(event) => handleSort(event.target.value)}
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Low-to-High">Low to High</option>
              <option value="High-to-Low">High to Low</option>
            </select>
          </div>
        </div>
      </div>

      <Card filteredItems={filteredItems} />
    </div>
  );
};

export default Product;
