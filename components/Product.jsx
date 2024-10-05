"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "use-shopping-cart";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Product = ({ product }) => {
  const [mainSrc, setMainSrc] = useState(product.images[0]);
  const [activeTab, setActiveTab] = useState("description");
  const { addItem, handleCartClick } = useShoppingCart();
  const [item, setItem] = useState({
    name: product.name,
    price: product.price,
    currency: "USD",
    image: mainSrc,
    price_id: product.price_id,
  });

  useEffect(() => {
    setMainSrc(product.images[0]);
    setItem({
      name: product.name,
      price: product.price,
      currency: "USD",
      image: mainSrc,
      price_id: product.price_id,
    });
  }, [product]);

  return (
    <>
      <div className="flex flex-col h-[120vh] lg:flex-row w-full lg:h-[100vh] p-2 lg:p-10 ">
        <div className="w-full h-[65%] lg:h-full lg:w-[54%] flex flex-col lg:flex-row">
          <div className="w-full flex lg:block h-[20%] lg:h-full lg:w-[20%]">
            {product.images.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-full lg:h-[20%] hover:cursor-pointer hover:brightness-75 transition-all duration-300"
                onClick={() => setMainSrc(image)}
              >
                <Image
                  src={image}
                  className="object-cover p-2"
                  alt="Product"
                  fill={true}
                  sizes="100%"
                ></Image>
              </div>
            ))}
          </div>
          <div className="w-full h-[100%] lg:w-[80%] relative lg:float-right">
            <Image
              src={mainSrc}
              className="object-cover object-center"
              alt="Product"
              fill={true}
              sizes="100%"
              objectPosition="center"
            />
          </div>
        </div>

        <div
          className={`w-full lg:w-[46%] flex flex-col pt-10 lg:pt-0 lg:pl-10 gap-y-5 lg:gap-y-0 ${poppins.className}`}
        >
          <div className="flex gap-x-2 items-center">
            <div className="border-2 border-green-600 w-20 h-7 rounded-sm flex items-center justify-center">
              <p className="text-center text-green-600 font-semibold text-xs">
                In Stock
              </p>
            </div>
            <span className="text-xs text-gray-500">
              {product.stocks} Items
            </span>
          </div>
          <h1 className="text-2xl font-bold lg:pt-7">{product.name}</h1>
          <div>
            <p className="text-xl font-semibold lg:pt-10">${product.price}</p>
            <p className="text-gray-400">Tax included</p>
          </div>
          <p className="lg:pt-10">
            Quantity:{" "}
            <input
              type="number"
              min="1"
              max={product.stocks}
              placeholder="Qty"
              className="w-20 p-2 text-center text-gray-700 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            />
          </p>
          <button
            className="btn lg:mt-10 w-[50%] rounded-none bg-black hover:bg-accent text-white"
            onClick={() => {
              addItem(item), handleCartClick();
            }}
            id={product._id}
          >
            {" "}
            <FaShoppingCart /> Add to cart
          </button>
        </div>
      </div>

      <div className="w-full p-2 lg:p-5">
        <div className="flex border">
          {/* Tabs Sidebar */}
          <div className=" w-[30%] lg:w-1/4 bg-white border-r border-gray-200">
            <ul className="">
              <li>
                <button
                  className={`w-full text-left px-2 lg:px-4 py-4 border-b border-l-2 hover:text-accent font-semibold  transition-all duration-300 ${
                    activeTab === "description"
                      ? "text-accent border-l-2 border-l-accent"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-4 hover:text-accent font-semibold border-l-2 border-b  transition-all duration-300 ${
                    activeTab === "reviews"
                      ? "text-accent border-l-2 border-l-accent"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </button>
              </li>
              <li>
                <button
                  className={`w-full text-left px-4 py-4 hover:text-accent font-semibold border-b border-l-2  transition-all duration-300 ${
                    activeTab === "extra"
                      ? "text-accent border-l-2 border-l-accent"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("extra")}
                >
                  Extra
                </button>
              </li>
            </ul>
          </div>

          {/* Tab Content */}
          <div className="w-2/3 p-4 text-gray-500">
            {activeTab === "description" && (
              <div className="">
                <h2 className="text-xl font-bold">Description</h2>
                <p className="">{product.description}</p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div className="">
                <h2 className="text-xl font-bold">Reviews</h2>
                <p>Your reviews content here.</p>
              </div>
            )}
            {activeTab === "extra" && (
              <div className="">
                <p>
                  Sed molestie orci sem, at semper est molestie ac. Suspendisse
                  cursus feugiat erat, eu posuere massa. Nullam posuere nibh non
                  eros lobortis tempus. Maecenas dignissim elementum massa, vel
                  accumsan urna elementum in. Suspendisse at dui euismod,
                  rhoncus eros non, imperdiet ipsum. Vestibulum vehicula vel
                  turpis et vestibulum. Ut porta et ex maximus malesuada.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
