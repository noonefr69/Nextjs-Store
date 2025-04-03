"use client";

import { MdOutlineShoppingCart } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Link from "next/link";
import { ShopContext } from "@/context/shopContext";
import { useContext, useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";

export default function SheetCart() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const { cartItems, deletFromCart, getTotalQuantity, getTotalCartAmount } =
    useContext(ShopContext);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="relative flex items-center">
        <span className="text-[#1B9C85] font-semibold mr-1 md:mr-3">£0.00</span>

        <MdOutlineShoppingCart className="text-2xl text-[#1B9C85]" />
        <div className="h-4 w-4 text-sm font-semibold absolute -top-2 -right-2 bg-[#1B9C85] rounded-full text-black flex items-center justify-center">
          0
        </div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalQuantity = getTotalQuantity();
  const totalAmount = getTotalCartAmount();

  return (
    <div className="flex items-center">
      <span className="text-[#1B9C85] font-semibold mr-1 md:mr-3">
        £{totalAmount.toFixed(2)}
      </span>
      <Sheet>
        <SheetTrigger className={`cursor-pointer relative`}>
          <MdOutlineShoppingCart className="text-2xl text-[#1B9C85]" />
          <div className="h-4 w-4 text-sm font-semibold absolute -top-2 -right-2 bg-[#1B9C85] rounded-full text-black flex items-center justify-center">
            {totalQuantity}
          </div>
        </SheetTrigger>
        <SheetContent className={`overflow-x-hidden`}>
          <SheetHeader className={`border-b`}>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          {products?.map((product) => {
            if (cartItems[product.id] !== 0) {
              return (
                <div
                  // href={`/products/${product.id}`}
                  className="flex shadow-sm items-center justify-between mx-2 px-2 py-1 mb-1 duration-200 hover:shadow-lg gap-4"
                  key={product.id}
                >
                  <div className="flex items-center gap-3">
                    <Image
                      src={product.image}
                      className="h-14 w-14"
                      width={50}
                      height={50}
                      alt={product.title}
                    />
                    <div>
                      <h1 className="">{product.title.slice(0, 20)}...</h1>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">
                          £{product.price.toFixed(2) * totalQuantity}
                        </p>
                        <p className="font-semibold">
                          {cartItems[product.id]}
                          <span className="font-normal">x</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <MdDeleteOutline
                    onClick={() => deletFromCart(product.id)}
                    className="shrink-0 cursor-pointer text-xl"
                  />
                </div>
              );
            }
          })}

          {totalQuantity > 0 ? (
            <div className="h-full flex flex-col justify-center relative items-center">
              <Link
              href={`/cart`}
                className="absolute bottom-[70px] bg-[#1b9c84de] duration-100 hover:bg-[#1B9C85] w-[90%] px-4 py-2 text-center rounded text-white"
              >
                VIEW CART
              </Link>
              <Link
                className="absolute bottom-4 bg-[#1b9c84de] duration-100 hover:bg-[#1B9C85] w-[90%] px-4 py-2 text-center rounded text-white"
                href={`/products`}
              >
                CHECKOUT
              </Link>
            </div>
          ) : (
            <div className="h-full flex flex-col justify-center relative items-center">
              <h1 className="text-zinc-700">No Products in the cart</h1>
              <Link
                className="absolute bottom-4 bg-[#1b9c84de] duration-100 hover:bg-[#1B9C85] w-[90%] px-4 py-2 text-center rounded text-white"
                href={`/products`}
              >
                GO SHOPPING
              </Link>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
