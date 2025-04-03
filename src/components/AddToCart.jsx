"use client";

import { ShopContext } from "@/context/shopContext";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export default function AddToCart({ productId }) {
  const { addToCart, cartItems, removeFromCart, getTotalQuantity } =
    useContext(ShopContext);

  return (
    <div className="flex items-center gap-4">
      {cartItems[productId] !== 0 ? (
        <div className="flex bg-white shadow-sm rounded items-center">
          <button
            onClick={() => removeFromCart(productId)}
            className="duration-150 cursor-pointer h-full px-2 py-1 "
          >
            <FaMinus className=""/>
          </button>
          <span className="border-r px-4 py-1 border-l ">
            {cartItems[productId]}
          </span>
          <button
            onClick={() => addToCart(productId)}
            className="duration-150 cursor-pointer h-full px-2 py-1"
          >
            <FaPlus className=""/>
          </button>
        </div>
      ) : (
        <button
          onClick={() => addToCart(productId)}
          className="cursor-pointer py-1 px-7 rounded text-white duration-150 hover:bg-[#1B9C85] bg-[#1b9c84c9] w-fit"
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
}
