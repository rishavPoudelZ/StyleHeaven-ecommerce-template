import ProductCard from "@/components/utils/ProductCard";
import SideBar from "@/components/utils/SideBar";
import { client } from "@/lib/client";

export const revalidate = 0; // Revalidate this page every 60 seconds

// Fetch products data
async function fetchProducts() {
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    name,
    "imageSrc": images[0].asset->url,
    "hoverImageSrc": images[1].asset->url,
    price,
    "slug": slug.current
  }`;

  return await client.fetch(query);
}

export default async function Products(products) {
  const products = await fetchProducts();

  return (
    <>
      <h1 className="text-4xl text-center pt-10">Products</h1>
      <div className="flex p-1 lg:p-5">
        <div className="hidden lg:block w-[30%]">
          {" "}
          <SideBar />{" "}
        </div>
        <div className="flex flex-col w-full h-auto border-l">
          <div className="self-end flex items-center w-full justify-end text-gray-400 border-b">
            <span className="text-xs font-medium"> Sort By : </span>
            <select
              className="select w-[32%] p-2 border-b-gray-300 rounded-none max-w-xs focus:border-none m-2 focus:outline-none"
              defaultValue={"Pick your favorite Simpson"}
            >
              <option disabled>Pick your favorite Simpson</option>
              <option>Home</option>
              <option>Marge</option>
              <option>Bart</option>
              <option>Lisa</option>
              <option>Maggie</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-x-2 lg:grid-flow-row lg:grid-cols-3 w-full h-full lg:p-5 gap-y-5 lg:gap-x-5">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                imageSrc={product.imageSrc}
                hoverImageSrc={product.hoverImageSrc}
                name={product.name}
                price={product.price}
                slug={product.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
