import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function MiddleSection() {
  return (
    <div id="taxi" className="">
      <div className="p-7 mt-16 max-w-[1440px] mx-auto md:p-14">
        <h2 className="mb-2 text-xl text-white font-semibold md:text-2xl">Hurry Up!</h2>
        <h1 className="text-white font-semibold text-2xl md:text-4xl">Deal of the Day!</h1>
        <p className="text-white my-7 md:text-lg">Buy This T-shirt At 20% Discount, Use Code Off20</p>
        <Link
          href={`/`}
          className="flex items-center gap-2 w-fit bg-[#1B9C85] shadow-sm text-white font-semibold px-6 py-3 cursor-pointer duration-150 hover:bg-[#4b8a7d] rounded-sm"
        >
          SHOP NOW <FaAngleRight />
        </Link>{" "}
      </div>
    </div>
  );
}
