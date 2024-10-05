"use client";

import ProductCard from "@/components/utils/ProductCard";
import { client } from "@/lib/client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
// Fetch products data

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const searchParams = useSearchParams();
  const [sortOption, setSortOption] = useState("Most Popular"); // State to track sorting option
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");

  const category = searchParams.get("category");

  useEffect(() => {
    async function fetchProducts() {
      const query = `*[_type == "product"] | order(_createdAt desc) {
        _id,
        name,
        "imageSrc": images[0].asset->url,
        "hoverImageSrc": images[1].asset->url,
        price,
        "slug": slug.current,
        "category": category->name,
        price_id
      }`;

      const products = await client.fetch(query);
      setProducts(products);
      if (category) {
        setSelectedCategory(category);
      } else {
        setFilteredProducts(products);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    // Fetch the categories from Sanity
    const fetchCategories = async () => {
      const query = '*[_type == "category"]{name, _id}';
      const result = await client.fetch(query);
      setCategories(result);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const filteredProducts = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;

    setFilteredProducts(filteredProducts);
  }, [selectedCategory]); 

  useEffect(() => {
    let sortedProducts = [...filteredProducts];

    if (sortOption === "Price low to high") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price high to low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortOption === "Latest") {
      sortedProducts = [...products]; // Reset to default fetched state (latest products)
    }

    setFilteredProducts(sortedProducts);
  }, [sortOption]);

  useEffect(() => {
    setSelected(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <h1 className="text-4xl text-center pt-10">Products</h1>
      <div className="flex p-1 lg:p-5">
        <div className="hidden lg:block w-[30%]">
          <div className="w-full h-full p-5">
            <h2 className="text-lg font-semibold mb-4 border-b">Categories</h2>
            <div className="space-y-3">
              {/* Category 1 */}
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <label
                      className="relative cursor-pointer flex items-center space-x-2 group"
                      onClick={() => setSelectedCategory("")}
                    >
                      <input
                        type="radio"
                        name="category"
                        className="sr-only peer"
                        onChange={() => setSelectedCategory("")}
                      />
                      <div className="w-3 h-3 bg-gray-300 rounded-full transition-colors duration-300 group-hover:bg-accent peer-checked:bg-accent"></div>
                      <span className="text-sm transition-colors duration-300 group-hover:text-accent">
                        All
                      </span>
                    </label>
                  </li>
                  {categories.map((category) => (
                    <li
                      className="flex items-center space-x-2"
                      key={category._id}
                    >
                      <label
                        className="relative cursor-pointer flex items-center space-x-2 group"
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        <input
                          type="radio"
                          name="category"
                          className="sr-only peer"
                          onChange={() => setSelectedCategory(category.name)}
                          checked={selected === category.name}
                        />
                        <div className="w-3 h-3 bg-gray-300 rounded-full transition-colors duration-300 group-hover:bg-accent peer-checked:bg-accent"></div>
                        <span className="text-sm transition-colors duration-300 group-hover:text-accent">
                          {category.name}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-4 border-b mt-5">Sizes</h2>
            <div className="space-y-3">
              {/* Category 1 */}
              <div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <label className="relative cursor-pointer flex items-center space-x-2 group">
                      <input
                        type="radio"
                        name="category"
                        className="sr-only peer"
                      />
                      <div className="w-3 h-3 bg-gray-300 rounded-full transition-colors duration-300 group-hover:bg-accent peer-checked:bg-accent"></div>
                      <span className="text-sm transition-colors duration-300 group-hover:text-accent">
                        Option 1
                      </span>
                    </label>
                  </li>
                  <li className="flex items-center space-x-2">
                    <label className="relative cursor-pointer flex items-center space-x-2 group">
                      <input
                        type="radio"
                        name="category"
                        className="sr-only peer"
                        id="item2"
                      />
                      <div className="w-3 h-3 bg-gray-300 rounded-full transition-colors duration-300 group-hover:bg-accent peer-checked:bg-accent"></div>
                      <span className="text-sm transition-colors duration-300 group-hover:text-accent">
                        Item 2
                      </span>
                    </label>
                  </li>
                  <li className="flex items-center space-x-2">
                    <label className="relative cursor-pointer flex items-center space-x-2 group">
                      <input
                        type="radio"
                        name="category"
                        className="sr-only peer"
                        id="item3"
                      />
                      <div className="w-3 h-3 bg-gray-300 rounded-full transition-colors duration-300 group-hover:bg-accent peer-checked:bg-accent"></div>
                      <span className="text-sm transition-colors duration-300 group-hover:text-accent">
                        Item 3
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto border-l">
          <div className="self-end flex items-center w-full justify-end text-gray-400 border-b">
            <span className="text-xs font-medium"> Sort By : </span>
            <select
              className="select w-[32%] p-2 border-b-gray-300 rounded-none max-w-xs focus:border-none m-2 focus:outline-none"
              defaultValue={"Most Popular"}
              onChange={(e) => setSortOption(e.target.value)} // Update sort option
            >
              <option>Most Popular</option>
              <option>Latest</option>
              <option>Price low to high</option>
              <option>Price high to low</option>
            </select>
          </div>
          {filteredProducts.length != 0 ? (
            <div className="grid grid-cols-2 gap-x-2 lg:grid-flow-row lg:grid-cols-3 w-full h-full lg:p-5 gap-y-5 lg:gap-x-5">
              {filteredProducts.map((product) => (
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
          ) : (
            <div className="flex w-full h-full justify-center items-center">
              <h1 className="text-xl text-gray-500 ">Loading....</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
