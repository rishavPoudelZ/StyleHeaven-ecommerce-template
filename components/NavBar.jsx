//navigation bar
//uses drawer compoenet to display navigation links on mobile

"use client";

import { FaSearch, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Baskervville } from "next/font/google";
import MobileDrawer from "./utils/MobileDrawer";
import CartDrawer from "./utils/CartDrawer";
import BreadCrumbs from "./utils/BreadCrumbs";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";

const baskervville = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
});

const NavBar = () => {
  const pathname = usePathname(); // Get the current route
  const [bars, setBars] = useState(false);

  const { cartCount } = useShoppingCart();

  return (
    <>
      <nav
        className={`z-10 ${
          pathname === "/" ? "absolute top-0 left-0" : ""
        } w-full text-black`}
      >
        <div className="p-7 flex justify-between items-center">
          <Link
            href={"/"}
            className={`text-3xl ${baskervville.className} text-accent`}
          >
            Style <sub>Heaven</sub>
          </Link>
          <ul className="hidden lg:flex font-medium space-x-20 text-xl">
            <li
              className={`hover:text-accent transition-colors duration-300 ${
                pathname === "/" ? "text-accent" : ""
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`hover:text-accent transition-colors duration-300 ${
                pathname === "/products" ? "text-accent" : ""
              }`}
            >
              <Link href="/products">Products</Link>
            </li>
            <li
              className={`hover:text-accent transition-colors duration-300 ${
                pathname === "/faq" ? "text-accent" : ""
              }`}
            >
              <Link href="/faq">FAQ</Link>
            </li>
            <li
              className={`hover:text-accent transition-colors duration-300 ${
                pathname === "/contact" ? "text-accent" : ""
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex space-x-2 lg:space-x-5">
            <div
              className={`${bars ? "z-20" : "z-10"} lg:hidden`}
              onClick={() => setBars(true)}
            >
              <MobileDrawer />
            </div>
            <a href="https://github.com/rishavPoudelZ/StyleHeaven-ecommerce-template">
              <FaGithub className=" hidden md:block hover:cursor-pointer text-2xl hover:text-accent transition-all duration-300 lg:text-xl" />
            </a>
            <div className="indicator"> 
              <div
                className={`${bars ? "z-10" : "z-20"} indicator`}
                onClick={() => setBars(false)}
              >
                <CartDrawer />
              </div>
              <span className="badge badge-xs indicator-item">{cartCount}</span>
            </div>
          </div>
        </div>
      </nav>
      {pathname != "/" && <BreadCrumbs pathname={pathname} />}
    </>
  );
};

export default NavBar;
