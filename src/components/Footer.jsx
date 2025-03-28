import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#222222]">
      <footer className="px-7 max-w-[1440px]  mx-auto text-white py-16 md:grid md:grid-cols-4 md:px-14  md:gap-10">
        <div>
          <h1 className="font-semibold text-xl mb-4">NextJs Store Practice</h1>
          <div className="flex items-center gap-4 mb-4">
            <Link className="duration-150 hover:text-[#1B9C85]" href={`/#`}>
              <FaInstagram />
            </Link>
            <Link className="duration-150 hover:text-[#1B9C85]" href={`/#`}>
              <FaTwitter />
            </Link>
            <Link className="duration-150 hover:text-[#1B9C85]" href={`/#`}>
              <FaLinkedin />
            </Link>
            <Link className="duration-150 hover:text-[#1B9C85]" href={`/#`}>
              <FaFacebookSquare />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl mb-4">
            Get in Touch with Us for the Best Quality Custom Prints & Supplies.
          </h1>
          <p className="mb-4">
            Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
            sed quia non numquam eius modi tempora incidunt lores ta porro ame.
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-xl mb-4">Quick Links</h1>
          <div className="mb-4 flex flex-col gap-1">
            <Link
              className="duration-150 hover:text-[#1B9C85] w-fit"
              href={`/about`}
            >
              Know More About Us
            </Link>
            <Link
              className="duration-150 hover:text-[#1B9C85] w-fit"
              href={`/products`}
            >
              Visit Store
            </Link>
            <Link
              className="duration-150 hover:text-[#1B9C85] w-fit"
              href={`/contact`}
            >
              Let’s Connect
            </Link>
          </div>
        </div>
        <div>
          <h1 className="font-semibold text-xl mb-4">Important Links</h1>
          <div className="mb-4 flex flex-col gap-1">
            <Link
              className="duration-150 hover:text-[#1B9C85] w-fit"
              href={`/`}
            >
              Privacy Policy
            </Link>
            <Link
              className="duration-150 hover:text-[#1B9C85] w-fit"
              href={`/`}
            >
              Shipping Details
            </Link>
            <Link
              className="duration-150 hover:text-[#1B9C85] w-fit"
              href={`/`}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </footer>
      <div className="px-7 border-t border-t-zinc-600 bg-[#222222] text-white py-10 text-center">
        <p>© 2025 NextJs Store Practice. All Rights Reserved.</p>
      </div>
    </div>
  );
}
