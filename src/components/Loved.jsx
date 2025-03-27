import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default async function Loved() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();

  const dataFilter = data.filter((dat) => dat.rating.rate > 4);

  return (
    <div className="mt-28 px-7 md:px-14 max-w-[1440px] mx-auto">
      <h1 className="text-center font-bold text-2xl md:text-4xl">
        Most Loved Products
      </h1>
      <div className="h-[3px] mx-auto my-7 mb-16 w-7 bg-[#1B9C85]" />
      <div className="flex flex-col text-center md:flex-row md:gap-10">
        {dataFilter.slice(0,4).map((dat) => (
          <Link
            className="flex flex-col items-center w-full mx-auto shadow-sm p-2 rounded mb-7 md:mb-0"
            key={dat.id}
            href={`/products/${dat.id}`}
          >
            <Image
              src={dat.image}
              className="rounded w-full md:h-[15rem] mb-4 shrink-0"
              width={500}
              height={500}
              alt={dat.title}
            />
            <div className="flex flex-col h-full justify-between">
              <h6 className="mt-3 mb-4 text-zinc-500 capitalize">
                {dat.category}
              </h6>
              <h3 className="text- font-semibold">{dat.title}</h3>
              <span className="text-sm my-1 flex items-center justify-center">
                {Array.from({ length: Math.floor(dat.rating.rate) }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </span>
              <h3 className="font-semibold">£{dat.price.toFixed(2)}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
