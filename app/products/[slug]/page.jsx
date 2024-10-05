// pages/products/[slug].js (or .tsx if using TypeScript)
import Product from "@/components/Product";
import { fetchProductBySlug } from "@/lib/fetchProduct";

const ProductPage = async ({ params }) => {
  const product = await fetchProductBySlug(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }
  return <Product product={product} />;
};

export default ProductPage;
