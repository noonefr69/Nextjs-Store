import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { PriceFilter } from "@/components/PriceFilter";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products/");
  const data = await res.json();

  return (
    <div className="max-w-[1440px] mx-auto px-7 md:px-14">
      <div className="flex flex-col md:grid md:grid-cols-10 md:gap-7 md:mt-14 md:mb-20">
        <aside className="col-span-3 pt-10  md:p-7">
          <h6 className="block md:hidden text-zinc-600 md:mb-8">
            <Link className="duration-100 hover:text-[#1B9C85]" href={`/`}>
              Home
            </Link>{" "}
            / Shop
          </h6>
          <h1 className="block md:hidden text-4xl my-7 md:text-6xl text-[#1B9C85] md:mb-20">
            Shop
          </h1>
          <h1 className="text-3xl mb-4 md:text-4xl font-semibold md:mb-5">Filter by price</h1>
          <PriceFilter />

          <div className="mt-10">
            <h1 className="font-semibold md:text-3xl mb-5">Catrgories</h1>
            <ul>
              <li className="flex items-center justify-between text-[#1b9c84d7]">
                <span>electronics</span>
                <span className="text-zinc-900">( 5 )</span>
              </li>
              <li className="flex items-center justify-between text-[#1b9c84d7]">
                <span>jewelery</span>
                <span className="text-zinc-900">( 5 )</span>
              </li>
              <li className="flex items-center justify-between text-[#1b9c84d7]">
                <span>men's clothing"</span>
                <span className="text-zinc-900">( 5 )</span>
              </li>
              <li className="flex items-center justify-between text-[#1b9c84d7]">
                <span>women's clothing</span>
                <span className="text-zinc-900">( 5 )</span>
              </li>
            </ul>
          </div>
        </aside>

        <div className="h-full w-[2px] hidden md:block bg-[#00000015]"></div>

        <section className="col-span-6 pt-10 md:p-7">
          <h6 className="hidden md:block text-zinc-600 md:mb-8">
            <Link className="duration-100 hover:text-[#1B9C85]" href={`/`}>
              Home
            </Link>{" "}
            / Shop
          </h6>
          <h1 className="hidden md:block md:text-6xl text-[#1B9C85] md:mb-20">
            Shop
          </h1>
          <nav className="flex justify-between items-center mb-4 md:mb-7">
            <span className="text-zinc-600 md:w-fit">Showing 1–20 of 20 results</span>
            <Select>
              <SelectTrigger className="w-[210px] text-zinc-600 cursor-pointer rounded">
                <SelectValue placeholder="Default" className="text-zinc-600" />
              </SelectTrigger>
              <SelectContent className={`w-[210px] rounded`} align="center">
                <SelectItem
                  className={`text-zinc-600 cursor-pointer`}
                  value="default"
                >
                  Sort by default
                </SelectItem>
                <SelectItem
                  className={`text-zinc-600 cursor-pointer`}
                  value="popularity"
                >
                  Sort by popularity
                </SelectItem>
                <SelectItem
                  className={`text-zinc-600 cursor-pointer`}
                  value="lowToHigh"
                >
                  Sort by price: low to high
                </SelectItem>
                <SelectItem
                  className={`text-zinc-600 cursor-pointer`}
                  value="HighToLow"
                >
                  Sort by price: high to low
                </SelectItem>
              </SelectContent>
            </Select>
          </nav>
          <div className="md:grid md:grid-cols-3 md:gap-4">
            {data.map((dat) => (
              <Link
                className="flex flex-col text-center items-center w-full mx-auto shadow-sm p-2 rounded mb-7 md:mb-0"
                key={dat.id}
                href={`/${dat.id}`}
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
                    {Array.from(
                      { length: Math.floor(dat.rating.rate) },
                      (_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      )
                    )}
                  </span>
                  <h3 className="font-semibold">£{dat.price.toFixed(2)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
