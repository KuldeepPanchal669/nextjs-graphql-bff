import { fetchProductList } from "../api/fetch-product-list";
import ProductCard from "./ProductCard";

const ProductListModule = async () => {
  const { products } = await fetchProductList();
  console.log("ProductListModule");
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductListModule;
