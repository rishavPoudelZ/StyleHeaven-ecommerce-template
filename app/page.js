//Main page for app '/' route of application
// Contains hero image, and catagories for male, female and kids
// Also contains trending products section which is a reusable component located in components/utils/TrendingProducts.js

import Image from "next/image";
import { client, urlFor } from "@/lib/client";
import Link from "next/link";
import ProductCard from "@/components/utils/ProductCard";
import { FaArrowRight } from "react-icons/fa";

export const dynamic = "force-dynamic";
export const revalidate = 0; // Revalidate this page every 60 seconds

async function fetchProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc)[0...8] {
    _id,
    name,
    "imageSrc": images[0].asset->url,
    "hoverImageSrc": images[1].asset->url,
    price,
    "slug": slug.current,
    price_id
  }`;

  return await client.fetch(query);
}

export default async function Home() {
  //get products for trending products section
  const products = await fetchProducts();

  // Fetch the hero image data from Sanity
  const query = `*[_type == "heroImage"][0]`;
  const heroImage = await client.fetch(query, {
    revalidate: new Date().getSeconds(),
  });

  return (
    <>
      <div className="relative h-[100vh]">
        {heroImage ? (
          <Image
            src={urlFor(heroImage.image).url()}
            alt={heroImage.altText || "Hero Image for Homepage"}
            className="z-0 w-full h-full object-cover"
            fill={true}
            sizes="100%"
          />
        ) : (
          <p>No hero image available.</p>
        )}
      </div>
      <div className="flex flex-col w-full h-[150vh] lg:flex-row lg:h-[65vh] p-5 gap-y-10 lg:gap-y-0 lg:gap-x-10 pt-10">
        <Link
          href={"/products?category=women"}
          className="w-full h-[33%] lg:w-[30%] lg:h-full  relative hover:text-accent hover:cursor-pointer transition-colors duration-300 "
        >
          <Image
            src="/h1-bn-2.png"
            alt="Hero Image for Homepage"
            className="z-0 w-full h-auto object-cover transform transition-transform duration-300 lg:hover:scale-110"
            fill={true}
            sizes="100%"
          />
          <div className="absolute top-0 left-0 p-7">
            <h1 className="text-4xl font-bold z-10">Women</h1>
            <span className="text-[18px] text-gray-500 z-10">4 Items</span>
          </div>
        </Link>
        <Link
          href={"/products?category=men"}
          className="w-full h-[33%] lg:w-[30%] lg:h-full relative hover:text-accent hover:cursor-pointer transition-colors duration-300"
        >
          <Image
            src="/h1-bn-1.png"
            alt="Hero Image for Homepage"
            className="z-0 w-full h-full object-cover transform transition-transform duration-300 lg:hover:scale-110"
            fill={true}
            sizes="100%"
          />
          <div className="absolute top-0 left-0 p-7">
            <h1 className="text-4xl font-bold z-10">Men</h1>
            <span className="text-[18px] text-gray-500 z-10">4 Items</span>
          </div>
        </Link>
        <Link
          href={"/products?category=kids"}
          className="w-full h-[33%] lg:w-[30%] lg:h-full relative hover:text-accent hover:cursor-pointer transition-colors duration-300"
        >
          <Image
            src="/h1-bn-2-2.png"
            alt="Hero Image for Homepage"
            className="z-0 w-full h-full object-cover transform transition-transform duration-300 lg:hover:scale-110"
            fill={true}
            sizes="100%"
          />
          <div className="absolute top-0 left-0 p-7">
            <h1 className="text-4xl font-bold z-10">Kids</h1>
            <span className="text-[18px] text-gray-500 z-10">4 Items</span>
          </div>
        </Link>
      </div>
      <div className="text-center pt-20 flex flex-col gap-y-3">
        <h1 className="text-center text-4xl">Trending This Week</h1>
        <p className="text-[10px] text-gray-400">
          Find a bright ideal to suit your taste with our great selection of
          suspension,
          <br /> wall, floor and table lights.
        </p>
      </div>
      <div>
        <div className="flex flex-col w-full h-auto lg:h-[140vh] p-2 pt-5">
          <div className="grid grid-cols-2 gap-x-2 lg:grid-flow-row lg:grid-cols-4 w-full h-full lg:p-10 gap-y-5 lg:gap-x-5">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                imageSrc={product.imageSrc}
                hoverImageSrc={product.hoverImageSrc}
                name={product.name}
                price={product.price}
                slug={product.slug}
                price_id={product.price_id}
              />
            ))}
          </div>
        </div>
        <p className="text-center text-[12px] hover:text-accent hover:text-[18px] transition-all duration-300 h-6">
          <Link href="/products" className="text-center font-bold">
            See All Products <FaArrowRight className="inline" />
          </Link>
        </p>
      </div>
    </>
  );
}
