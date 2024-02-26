/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaStar } from "react-icons/fa";
import { useCart } from "./Context";

const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [quant, setQuant] = useState(1);
  const [error, setError] = useState(null);
  const { state, dispatch } = useCart();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Products.json");
        const data = await response.json();
        const singleProduct = data.filter((item) => id == item.id);
        setProduct(singleProduct[0]);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const handleQuantityChange = (event) => {
    const enteredValue = parseInt(event.target.value, 10);

    if (!isNaN(enteredValue) && enteredValue > 10) {
      setError("Quantity cannot exceed 10");
    } else {
      setError(null);
      setQuant(enteredValue);
    }
  };

  const handleAddToCart = () => {
    const productInCart = state.cartItems.find(
      (item) => item.id === product.id
    );

    if (quant > 11) {
      setError("Quantity cannot exceed 10");
    } else if (quant > 0) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...product, quantity: quant },
      });
      setQuant(1); // Reset the quantity input after adding to cart
      setError(null); // Clear any previous error
    } else {
      setError("Quantity must be greater than 0");
    }
  };

  const { image, Name, Category, price, count } = product;

  return (
    <div className="w-full mx-auto container xl:px-16 px-4 mt-12">
      <div className="p-3 max-w-20xl m-auto">
        <a href="/" className="text-gray-600">
          Home{" "}
        </a>
        <a href={`/shop/${id}`} className="font-bold text-Black">
          / Shop
        </a>
        <div className="mt-6 sm:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <img src={image} alt={Name} className="h-42 w-full" />
            </div>

            <div>
              <h1 className="font-semibold text-4xl mb-8">{Name}</h1>
              <p className="font-semibold text-gray-500 text-base leading-6">
                Embark on a journey into the world of unparalleled style as you
                delve into our exceptional collection of best-selling brands,
                where the intersection of fashion and innovation is nothing
                short of extraordinary. At the forefront of this sartorial
                adventure is Nike, a trailblazer in sportswear, seamlessly
                weaving together performance and trendsetting design. Immerse
                yourself in the iconic swoosh, symbolizing not just a brand but
                a lifestyle that effortlessly blends athletic prowess with
                unparalleled elegance. As you traverse through the realm of
                timeless favorites, Adidas emerges as a beacon of casual
                elegance. Redefining the very essence of casual wear, Adidas
                unveils a diverse array of sneakers and activewear, embodying a
                perfect fusion of sophistication and comfort. Enter the world of
                Lawman and Valcom, where sophistication takes center stage.
                These brands cater to those with a penchant for refined charm,
                offering classic full shirts that stand as testaments to
                exquisite craftsmanship and timeless fashion. Venture further
                into the landscape of fitness fashion with Reebok, a brand that
                epitomizes an active lifestyle. Imbued with a commitment to
                quality, Reebok's athletic shoes and apparel inspire you to
                embrace vitality and wellness in every stride. In our carefully
                curated collection, discover the classics that transcend time
                and trends, allowing you to embrace your individuality. Each
                piece is a statement, ensuring that every step you take is not
                just a step but a stylish expression of your unique persona. In
                this curated haven of style, we invite you to explore, indulge,
                and redefine your fashion narrative. Our collection goes beyond
                mere clothing; it is an embodiment of self-expression, where
                each garment tells a story of innovation, sophistication, and
                the enduring spirit of individuality. Step into a world where
                every fashion choice is a conscious decision to embrace the
                epitome of style.
              </p>

              <div className="flex mt-7 text-yellow-400">
                {Array.from({ length: count }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <div>
                <p className="text-xl text-red-500 font-semibold mt-7">
                  {price}
                </p>
              </div>

              <div className="mt-7">
                <div className="text-left flex flex-col gap-2 w-full">
                  <label className="font-semibold">Quantity</label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={quant}
                    onChange={handleQuantityChange}
                    required
                    className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500"
                  ></input>
                </div>
                {error && <p className="text-red-500">{error}</p>}
              </div>
              <div className="mt-4">
                <Link to={`/cart`}>
                  <button
                    className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                    onClick={handleAddToCart}
                  >
                    <span>Order Now</span>
                    <FaArrowAltCircleRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
