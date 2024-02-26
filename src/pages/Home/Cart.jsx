/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useCart } from "./Context";

const Cart = () => {
  const { state } = useCart();
  const { cartItems } = state;
  //console.log(cartItems[0].id);

  return (
    <div className="w-full mx-auto container xl:px-16 px-4 mt-12">
      <a href="/" className="font-bold text-Black">
        home{" "}
      </a>
      <div className="p-3 max-w-20xl m-auto">
        <h1 className="font-semibold text-2xl mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-4xl font-semibold">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col justify-between items-center border border-black/50 rounded-md py-4 px-5">
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-3 gap-7">
                <div className="flex flex-col justify-center items-center text-center">
                  <img src={item.image} alt={item.Name} className="w-90 h-90" />
                  <p className="font-semibold text-lg text-black py-5 w-full">
                    Product Name: {item.Name}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-left">
                  <p className="text-gray-500 font-semibold text-2xl">
                    Price: {item.price}
                  </p>
                  <p className="text-gray-500 font-semibold text-2xl mt-5">
                    Quantity: {item.quantity}
                  </p>
                  <p className="mt-10">
                    Thank you for shopping with us! Your cart is now ready for
                    checkout. Our carefully curated selection of products
                    reflects the latest trends and timeless classics. Each item
                    is chosen with quality and style in mind, ensuring that you
                    receive the best in fashion and functionality. Happy
                    shopping!
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center sm:flex-row sm:gap-3 ">
                  <h2 className="text-gray-500 font-bold text-2xl">
                    Total Price:
                  </h2>
                  <p className="font-semibold text-2xl text-red-500 sm:text-center">
                    $
                    {item.price
                      ? parseInt(item.price.split("$")[1]) * item.quantity
                      : 0}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
