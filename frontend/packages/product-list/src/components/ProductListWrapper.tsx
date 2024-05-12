import { Suspense } from "react";
import ProductListModule from "./ProductListModule";

const ProductListWrapper = () => {
  console.log("ProductListWrapper");
  return (
    <>
      <h3>Product List Wrapper</h3>
      <Suspense fallback="Loading ...">
        <ProductListModule />
      </Suspense>
    </>
  );
};

export default ProductListWrapper;
