"use client";
import { useState } from "react";
import Image from "next/image";
import { FaCartPlus, FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import { useShoppingCart } from "use-shopping-cart";

export default function ProductCard({
  imageSrc,
  hoverImageSrc,
  name,
  price,
  slug,
  price_id,
}) {
  const [currentImage, setCurrentImage] = useState(imageSrc);
  const [isHovered, setIsHovered] = useState(false);
  const [item, setItem] = useState({
    name: name,
    price: price,
    currency: "USD",
    image: currentImage,
    price_id: price_id,
  });

  const { addItem, handleCartClick } = useShoppingCart();

  const handleMouseEnter = () => {
    setCurrentImage(hoverImageSrc);
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setCurrentImage(imageSrc);
    setIsHovered(false);
  };

  return (
    <div
      className="cursor-pointer overflow-hidden h-[40vh] md:h-[70vh] lg:h-[65vh]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-[80%] border overflow-hidden rounded-lg shadow-lg ab">
        <Link href={`/products/${slug}`}>
          <Image
            src={currentImage}
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 opacity-95"
            fill={true}
            sizes="100%"
          />
        </Link>
        <div
          className={`w-full absolute bottom-0  flex justify-center gap-x-2 p-5 transition-all duration-1000 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Cart Button with Hover Text */}
          <div className="relative group overflow-visible">
            <button
              className="text-xl p-3 rounded-full bg-gray-950 mb hover:bg-accent transition-colors duration-300"
              onClick={() => {
                addItem(item), handleCartClick();
              }}
            >
              <FaCartPlus className="text-white" />
            </button>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-xs bg-gray-950 bg-opacity-50 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[100px] text-center p-2">
              Add to Cart
            </span>
          </div>

          {/* Arrow Button with Hover Text */}
          <div className="relative group overflow-visible">
            <Link href={`/products/${slug}`}>
              <button className="text-xl p-3 rounded-full bg-gray-950 hover:bg-accent transition-colors duration-300">
                <FaArrowCircleRight className="text-white" />
              </button>
            </Link>
            <span className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-xs bg-gray-950 bg-opacity-50 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-[120px] text-center p-2">
              See Product
            </span>
          </div>
        </div>
      </div>
      <div className="text-center p-5">
        <h1 className="font-bold">{name}</h1>
        <p className="text-[10px] text-gray-500">${price}</p>
      </div>
    </div>
  );
}
