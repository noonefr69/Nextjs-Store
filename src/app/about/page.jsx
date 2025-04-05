import { FaRegSnowflake } from "react-icons/fa";
import { FaRegHandPaper } from "react-icons/fa";
import { SlSocialDropbox } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { TfiBookmark } from "react-icons/tfi";
import { IoPricetagsOutline } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About",
  description: "About Nextjs Store that built by a junior developer",
};

export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <div className="bg-zinc-100 py-28 text-center px-7 md:px-14 w-full">
          <h1 className="text-3xl font-semibold text-zinc-800 md:text-5xl md:font-bold">
            About Us
          </h1>
          <p className="text-zinc-700 text-center mt-4 max-w-[40rem] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        <div className="lg:flex max-w-[1440px] mx-auto">
          <div className="px-7 md:px-14 my-10 max-w-[1440px] mx-auto lg:w-1/2">
            <h1 className="text-3xl font-semibold mb-4 lg:text-4xl lg:max-w-[25rem]">
              We Are Your Favourite, Online Store.
            </h1>
            <p className="text-zinc-700 max-w-[30rem]">
              Dui habitasse provident eu etiam praesent placeat maiores
              temporibus, accumsan parturient autem, mi animi ipsa. Lobortis
              maxime quos, pellentesq. <br />
              Ee platea animi commodo tincidunt ridiculus tempora, ornare lorem
              quam sit possimus? Quam cras facilisi officia fusce. Ac, excepteur
              excepteur fusce? Sunt minim expedita magnis!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:w-1/2">
            <div className="flex flex-col items-center md:items-start px-7 md:px-14 mt-16 lg:mt-10">
              <FaRegSnowflake className="text-[#1B9C85] text-3xl" />
              <h2 className="text-2xl font-semibold my-2">Eros Imperdie</h2>
              <p className="text-center md:text-start text-zinc-700">
                We’ll generate a sitemap for your site, submit it to search
                engine is and track.
              </p>
            </div>
            <div className="flex flex-col items-center px-7 md:items-start md:px-14 mt-10 md:mt-16 lg:mt-10">
              <FaRegHandPaper className="text-[#1B9C85] text-3xl" />
              <h2 className="text-2xl font-semibold my-2">Rerum Rutrum</h2>
              <p className="text-center md:text-start text-zinc-700">
                We’ll generate a sitemap for your site, submit it to search
                engine is and track.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start px-7 md:px-14 mt-10">
              <SlSocialDropbox className="text-[#1B9C85] text-3xl" />
              <h2 className="text-2xl font-semibold my-2">Proident Congu</h2>
              <p className="text-center md:text-start text-zinc-700">
                We’ll generate a sitemap for your site, submit it to search
                engine is and track.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start px-7 md:px-14 mt-10">
              <FiLink className="text-[#1B9C85] text-3xl" />
              <h2 className="text-2xl font-semibold my-2">Vero Maecenas</h2>
              <p className="text-center md:text-start text-zinc-700">
                We’ll generate a sitemap for your site, submit it to search
                engine is and track.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#1B9C85] px-7 py-10 md:px-14 my-14">
          <div className=" max-w-[1440px] mx-auto flex flex-col gap-8 items-center text-center md:flex-row md:justify-between md:items-center">
            <h1 className="text-white font-bold text-2xl md:text-4xl mb-8 md:mb-0">
              Get Best Offers On Customized Designs!
            </h1>
            <Link
              className="text-white shrink-0 font-semibold flex items-center gap-4 border w-fit rounded px-5 duration-150 py-2 hover:bg-zinc-50 hover:text-[#1B9C85]"
              href={`/#`}
            >
              GET STARTED <FaAngleRight />
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-semibold text-zinc-800">
            Meet Our Creative Team
          </h1>
          <div className="h-[3px] mx-auto mb-10 mt-4 w-7 bg-[#1B9C85]" />
          <div className="px-7 md:px-14 text-center md:flex md:gap-5">
            <div className="mb-6">
              <Image
                src={`/about/image-14.jpg`}
                className="mb-4"
                alt="image-14.jpg"
                width={350}
                height={200}
              />
              <h3 className="text-xl font-semibold">Amanda Lee</h3>
              <h6 className="text-zinc-700">Creative Head</h6>
            </div>
            <div className="mb-6">
              <Image
                src={`/about/team-0.jpg`}
                className="mb-4"
                alt="team-0.jpg"
                width={350}
                height={200}
              />
              <h3 className="text-xl font-semibold">Lee Stoner</h3>
              <h6 className="text-zinc-700">Marketing Head</h6>
            </div>
            <div className="mb-6">
              <Image
                src={`/about/team-01.jpg`}
                className="mb-4"
                alt="team-01.jpg"
                width={350}
                height={200}
              />
              <h3 className="text-xl font-semibold">Monica Gala</h3>
              <h6 className="text-zinc-700">Graphic Designer</h6>
            </div>
          </div>
        </div>

        <div
          id="cursor"
          className="w-full h-[5rem] mt-10 mb-5 hidden md:block"
        ></div>

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="px-7 md:px-14 my-10">
            <h1 className="text-xl font-semibold text-zinc-800 md:text-2xl lg:text-3xl">
              Best Quality Printed T-Shirts & Mugs At Affordable Price!
            </h1>
            <ul className="flex flex-col mt-7">
              <li className="flex items-center gap-2 my-1 text-zinc-700">
                <FaHeart className="text-white bg-[#1B9C85] rounded-full p-1 text-xl " />{" "}
                Personal Gifts
              </li>
              <li className="flex items-center gap-2 my-1 text-zinc-700">
                <FaHeart className="text-white bg-[#1B9C85] rounded-full p-1 text-xl " />{" "}
                Occasional Gifts
              </li>
              <li className="flex items-center gap-2 my-1 text-zinc-700">
                <FaHeart className="text-white bg-[#1B9C85] rounded-full p-1 text-xl " />{" "}
                Corporate Gifts
              </li>
              <li className="flex items-center gap-2 my-1 text-zinc-700">
                <FaHeart className="text-white bg-[#1B9C85] rounded-full p-1 text-xl " />
                Couple Tshirt
              </li>
              <li className="flex items-center gap-2 my-1 text-zinc-700">
                <FaHeart className="text-white bg-[#1B9C85] rounded-full p-1 text-xl " />{" "}
                Wedding Package
              </li>
              <li className="flex items-center gap-2 my-1 text-zinc-700">
                <FaHeart className="text-white bg-[#1B9C85] rounded-full p-1 text-xl " />{" "}
                Corporate Gifts
              </li>
            </ul>
          </div>
          <div className="px-7 md:px-14 w-full mb-10">
            <Accordion
              type="single"
              collapsible
              className="w-full shadow-sm px-4"
            >
              <AccordionItem value="item-1" className="w-full">
                <AccordionTrigger className="w-full cursor-pointer font-bold text-lg md:text-[16px]">
                  We Can Custom Design Your Ideas
                </AccordionTrigger>
                <AccordionContent className="w-full text-zinc-700">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="w-full">
                <AccordionTrigger className="w-full cursor-pointer font-bold text-lg md:text-[16px]">
                  Your Payment Is Safe And Secured
                </AccordionTrigger>
                <AccordionContent className="w-full text-zinc-700">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="w-full">
                <AccordionTrigger className="w-full cursor-pointer font-bold text-lg md:text-[16px]">
                  We Offer Discounts And Coupons
                </AccordionTrigger>
                <AccordionContent className="w-full text-zinc-700">
                  Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                  ullamcorper mattis, pulvinar dapibus leo.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center text-center w-full bg-[#EDF6EE] md:mt-14 py-10">
          <div className="px-7 md:px-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10 pt-8 max-w-[1440px] mx-auto">
            <div className="text-center flex flex-col items-center mb-10">
              <TbWorld className="text-8xl md:text-7xl lg:text-6xl text-zinc-700 mb-3" />
              <h1 className="font-semibold text-xl mb-4">WorldWide Shipping</h1>
              <p className="text-zinc-700 text-[15px] max-w-[22rem]">
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
            <div className="text-center flex flex-col items-center mb-10">
              <TfiBookmark className="text-8xl md:text-7xl lg:text-6xl text-zinc-700 mb-3" />
              <h1 className="font-semibold text-xl mb-4">Best Quality</h1>
              <p className="text-zinc-700 text-[15px] max-w-[22rem]">
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
            <div className="text-center flex flex-col items-center mb-10">
              <IoPricetagsOutline className="text-8xl md:text-7xl lg:text-6xl text-zinc-700 mb-3" />
              <h1 className="font-semibold text-xl mb-4">Best Offers</h1>
              <p className="text-zinc-700 text-[15px] max-w-[22rem]">
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
            <div className="text-center flex flex-col items-center mb-10">
              <MdLockOutline className="text-8xl md:text-7xl lg:text-6xl text-zinc-700 mb-3" />
              <h1 className="font-semibold text-xl mb-4">Secure Payments</h1>
              <p className="text-zinc-700 text-[15px] max-w-[22rem]">
                It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
