"use client";

import { usePathname } from "next/navigation";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import { RxSketchLogo } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

import SheetCart from "./SheetCart";

export default function Navbar() {
  const isActive = usePathname();
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Products", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Account", href: "/account" },
  ];
  return (
    <div className="bg-zinc-100 fixed top-0 left-0 right-0 z-50 shadow-md md:shadow-none md:relative">
      <nav className="flex items-center justify-between px-7 py-4 border-b md:border-none md:px-14 md:py-8 max-w-[1440px] mx-auto">
        <Link href={`/`}>
          <RxSketchLogo className="text-[#1B9C85] text-4xl" />
        </Link>
        <div className="flex items-center ">
          <div className="md:flex items-center hidden">
            {navLinks.map((navLink, index) => (
              <Link
                className={`mr-7 duration-150 font-semibold hover:text-[#1B9C85] ${
                  isActive === navLink.href ? "text-[#1B9C85]" : ""
                }`}
                key={index}
                href={navLink.href}
              >
                {navLink.label}
              </Link>
            ))}
          </div>
          <SheetCart />
          <div className="block md:hidden ml-3">
            <DropdownMenu>
              <DropdownMenuTrigger className="ml-3 text-2xl bg-[#1B9C85] text-zinc-100 p-2 cursor-pointer rounded">
                <IoMenu />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className={`w-screen mt-3 shadow-sm text-center p-0`}
              >
                <DropdownMenuItem>
                  <Link
                    className="uppercase w-full h-full p-2 duration-150 font-semibold border-none outline-none rounded"
                    href={`/`}
                  >
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="uppercase w-full h-full p-2 duration-150 font-semibold border-none outline-none rounded"
                    href={`/products`}
                  >
                    All Products
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="uppercase w-full h-full p-2 duration-150 font-semibold border-none outline-none rounded"
                    href={`/about`}
                  >
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="uppercase w-full h-full p-2 duration-150 font-semibold border-none outline-none rounded"
                    href={`/contact`}
                  >
                    Contact
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="uppercase w-full h-full p-2 duration-150 font-semibold border-none outline-none rounded"
                    href={`/`}
                  >
                    Account
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
    </div>
  );
}
