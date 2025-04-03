"use client";

import { ShopContext } from "@/context/shopContext";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddToCart from "@/components/AddToCart";

export default function Cart() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const {
    cartItems,
    deletFromCart,
    removeFromCart,
    addToCart,
    getTotalQuantity,
    getTotalCartAmount,
  } = useContext(ShopContext);

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
      <div className="min-h-screen flex items-center justify-center">
        <AiOutlineLoading3Quarters className="animate-spin text-8xl text-zinc-500" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const totalQuantity = getTotalQuantity();
  const totalAmount = getTotalCartAmount();

  return (
    <div className="px-7 my-30 md:px-14 max-w-[1440px] mx-auto">
      <Table className={``}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Product</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products?.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">
                    <Image
                      src={product.image}
                      className="h-14 w-14"
                      width={50}
                      height={50}
                      alt={product.title}
                    />
                  </TableCell>
                  <TableCell>{product.title.slice(0, 20)}...</TableCell>
                  <TableCell>£{product.price.toFixed(2)}</TableCell>
                  <TableCell>
                    <div className="flex w-fit bg-white shadow-sm rounded items-center">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="duration-150 cursor-pointer h-full px-2 py-1 "
                      >
                        <FaMinus className="" />
                      </button>
                      <span className="border-r px-4 py-1 border-l ">
                        {cartItems[product.id]}
                      </span>
                      <button
                        onClick={() => addToCart(product.id)}
                        className="duration-150 cursor-pointer h-full px-2 py-1"
                      >
                        <FaPlus className="" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    £{(product.price * cartItems[product.id]).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <MdDeleteOutline
                      onClick={() => deletFromCart(product.id)}
                      className="shrink-0 cursor-pointer text-xl"
                    />
                  </TableCell>
                </TableRow>
              );
            }
            return null;
          })}
          {totalQuantity === 0 && (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-4">
                Your cart is empty
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {totalQuantity > 0 && (
        <div className="mt-4 text-right">
          <div className="text-lg font-semibold">
            Total Items: {totalQuantity}
          </div>
          <div className="text-xl font-bold">
            Total Amount: £{totalAmount.toFixed(2)}
          </div>
        </div>
      )}

      <span className="text-center flex items-center justify-center mt-16">
        It is not fullstack app so there is no payment {"<"}3{" "}
      </span>
    </div>
  );
}
