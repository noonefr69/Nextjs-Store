import Image from "next/image";
import React from "react";

export default function Samples() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {" "}
      <div className="text-center mt-24 flex flex-col gap-16 px-7 md:px-14 md:flex-row md:items-center md:gap-4 ">
        <div className="flex flex-col items-center md:gap-4 md:flex-col-reverse ">
          <div className="flex flex-col items-center ">
            {" "}
            <h6 className="text-xl font-semibold text-zinc-800">
              Most Loved Designs
            </h6>
            <h1 className="text-2xl md:text-xl font-bold mb-4">
              Customize Your T-Shirts
            </h1>
          </div>
          <Image
            className="rounded w-full"
            src={`/image-01.jpg`}
            alt="img1"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center relative ">
          <h6 className="text-xl font-semibold text-zinc-800">
            Design of the Week
          </h6>
          <h1 className="text-2xl font-bold md:text-xl mb-4">
            Rubber Print Your T-Shirt
          </h1>
          <Image
            className="rounded  w-full"
            src={`/image-03.jpg`}
            alt="img2"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col md:gap-4 md:flex-col-reverse items-center">
          <div className="flex flex-col items-center">
            {" "}
            <h6 className="text-xl font-semibold text-zinc-800">
              New T-shirt Edition
            </h6>
            <h1 className="text-2xl font-bold md:text-xl mb-4">
              Customize Plain Colors
            </h1>
          </div>
          <Image
            className="rounded  w-full"
            src={`/image-02.jpg`}
            alt="img3"
            width={500}
            height={500}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
