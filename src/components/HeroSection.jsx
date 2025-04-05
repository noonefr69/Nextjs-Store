import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div className="bg-zinc-100 ">
      {" "}
      <div className="pt-28 md:pt-0 px-7 md:px-14 flex flex-col md:flex-row md:items-center md:gap-4 max-w-[1440px] mx-auto">
        <div className="md:w-1/2">
          <h3 className="mb-3 md:text-2xl text-[#415161] font-semibold text-lg">
            Best Quality Products
          </h3>
          <h1 className="mb-4 leading-20 text-3xl md:text-6xl text-[#415161] font-bold">
            We Print What You Want!
          </h1>
          <p className="text-[#000000d0] md:text-lg mb-10">
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sapien.
          </p>
          <button className="flex items-center gap-4 bg-[#1B9C85] text-white font-semibold px-8 py-2 cursor-pointer duration-150 hover:bg-[#4b8a7d] rounded-sm">
            GET STARTED <FaAngleRight />
          </button>
        </div>
        <div className="mt-16 md:w-1/2 lg:w-1/3 self-end flex justify-between mx-auto items-center">
          <Image
            src={`/image26-free.png`}
            alt="image26-free.png"
            className="w-full"
            width={538}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
