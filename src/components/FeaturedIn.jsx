import Image from "next/image";
import React from "react";

export default function FeaturedIn() {
  return (
    <div className="text-center my-20 px-7 md:my-10 md:px-14 max-w-[1440px] mx-auto md:flex md:items-center md:justify-center">
      <h1 className="font-semibold relative top-1 text-2xl md:w-[15rem] md:top-2">Featured In:</h1>
      <div className="grid grid-cols-2 md:mt-8 gap-5 px-7 md:grid-cols-5 md:gap-10 justify-center items-center">
        <Image className="w-full opacity-70 duration-150 hover:opacity-100 ~p-10/60" src={`/logo-2.png`} alt="logo" width={100} height={100} />
        <Image className="w-full opacity-70 duration-150 hover:opacity-100 ~p-10/60" src={`/logo-7.png`} alt="logo" width={100} height={100} />
        <Image className="w-full opacity-70 duration-150 hover:opacity-100 ~p-10/60" src={`/logo-9.png`} alt="logo" width={100} height={100} />
        <Image className="w-full opacity-70 duration-150 hover:opacity-100 ~p-10/60" src={`/logo-10.png`} alt="logo" width={100} height={100} />
        <Image className="w-full opacity-70 duration-150 hover:opacity-100 ~p-10/60" src={`/logo-11.png`} alt="logo" width={100} height={100} />
      </div>
    </div>
  );
}
