import { FaMap } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { ProfileForm } from "@/components/Form";

export const metadata = {
  title: "Contact",
  description: "This is the contact page to get in touch with us.",
};

export default function Contact() {
  return (
    <div>
      <div className="max-w-[1440px] mx-auto px-7 md:px-14 mt-16 md:grid md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold mb-4 md:mb-10 md:text-5xl md:font-bold">
            Say Hello.
          </h1>
          <p className="text-zinc-700 md:max-w-[23rem] lg:max-w-[40rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="h-[2px] rounded w-20 my-12 md:my-10 bg-[#1B9C85]" />
          <ul className="space-y-3 mb-10">
            <li className="flex items-center gap-4 text-zinc-700">
              <FaMap className="text-[#1B9C85] text-xl" /> 212 7th St SE,
              Washington, DC 20003, USA
            </li>
            <li className="flex items-center gap-4 text-zinc-700">
              <IoIosMail className="text-[#1B9C85] text-xl" /> info@example.com
            </li>
            <li className="flex items-center gap-4 text-zinc-700">
              <FaPhone className="text-[#1B9C85] text-xl" /> 123-456-7890/91
            </li>
          </ul>
        </div>
        <div className="bg-white p-10 rounded mb-10 shadow-md">
          <h1 className="text-2xl font-semibold mb-8">Ask Your Queries</h1>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
