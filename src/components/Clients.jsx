import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default async function Clients() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();

  return (
    <div className="mt-28 px-7 md:px-14 max-w-[1440px] mx-auto">
      <h1 className="text-center font-bold text-2xl md:text-4xl">
        Our Happy Clients!
      </h1>
      <div className="h-[3px] mx-auto my-7 mb-16 w-7 bg-[#1B9C85]" />
      <div className="flex flex-col md:flex-row items-center gap-7">
        <div className="shadow-sm p-8 bg-white rounded-lg flex flex-col gap-4 mb-7 md:mb-0">
          <p>
            "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare
            nunc, autem."
          </p>
          <div className="flex items-center gap-1">
            <FaStar className="text-[#1B9C85] " />
            <FaStar className="text-[#1B9C85] " />
            <FaStar className="text-[#1B9C85] " />
            <FaStar className="text-[#1B9C85] " />
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={`/client02-free-img.jpg`}
              alt="img"
              width={60}
              height={10}
              loading="lazy"
            />
            <h6 className="font-semibold">Diana Burnwood</h6>
          </div>
        </div>

        <div className="shadow-sm p-8 bg-white rounded-lg flex flex-col gap-4 mb-7 md:mb-0">
          <p>
            "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare
            nunc, autem."
          </p>
          <div className="flex items-center gap-1">
            <FaStar className="text-[#1B9C85] " />
            <FaStar className="text-[#1B9C85] " />
            <FaStar className="text-[#1B9C85] " />
            <FaStar className="text-[#1B9C85] " />
            <FaStar className="text-[#1B9C85] " />
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={`/client2-free-img.png`}
              alt="img"
              width={60}
              height={10}
              loading="lazy"
            />
            <h6 className="font-semibold">Jessica Fox</h6>
          </div>
        </div>

        <div className="shadow-sm p-8 bg-white rounded-lg flex flex-col gap-4">
          <p>
            "Lectus, nonummy et. Occaecat delectus erat, minima dapibus ornare
            nunc, autem."
          </p>
          <div className="flex items-center gap-1">
            <FaStar className="text-[#1B9C85] " />
            <FaStar className="text-[#1B9C85] " />
            <FaStar className="text-[#1B9C85] " />
            <FaStar className="text-[#1B9C85] " />
            <FaStar className="text-[#1B9C85] " />
          </div>
          <div className="flex items-center gap-2">
            <Image
              src={`/client3-free-img.png`}
              alt="img"
              width={60}
              height={10}
              loading="lazy"
            />
            <h6 className="font-semibold">Lily Granger​</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
