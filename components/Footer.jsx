//footer component

import Link from "next/link";
import { Baskervville } from "next/font/google";
import { FaArrowRight } from "react-icons/fa";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <footer className="h-[50vh] w-full bg-black opacity-85 mt-10 p-3">
      <div className="w-full h-[70%] flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-5 lg:p-10 text-white">
        <Link
          href={"/"}
          className={` text-2xl lg:text-3xl  text-accent ${baskervville.className}`}
        >
          Style <sub>Heaven</sub>
        </Link>
        <p className="text-xs">
          1892 Riverbend Drive, Kivalina,
          <br /> Alaska, Fantori, United States
        </p>
        <p className="text-xs">
          (+91)5-632-1490 <br /> Example@example.com
        </p>
        <a href="/" className="flex gap-x-2 hover:text-accent">
          JOIN OUR NEWSLETTER <FaArrowRight />
        </a>
      </div>
      <div className="w-full h-[30%] border-t-[0.1rem] border-gray-500 p-5 lg:p-10 flex justify-between">
        <p className="pr-5 lg:pr-0">
          Copyright © 2019 Rishav. All rights reserved.
        </p>
        <div className="flex gap-x-5">
          <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-5">
            <a
              href="/"
              className="hover:text-accent transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="/"
              className="hover:text-accent transition-all duration-300"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-5">
            <a
              href="/"
              className="hover:text-accent transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              className="hover:text-accent transition-all duration-300"
            >
              <FaPinterest />
            </a>
          </div>
          <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-5">
            <a
              href="/"
              className="hover:text-accent transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
