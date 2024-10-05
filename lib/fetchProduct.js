// lib/fetchProduct.js
import { client } from "@/lib/client";

export const fetchProductBySlug = async (slug) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
    _id,
    name,
    "images": images[].asset->url,
    description,
    price,
    stocks,
    price_id,
  }`;

  const product = await client.fetch(query);
  return product;
};
