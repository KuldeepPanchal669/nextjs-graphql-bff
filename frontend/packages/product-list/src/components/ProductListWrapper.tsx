import { Suspense } from "react";
import ProductListModule from "./ProductListModule";

const ProductListWrapper = () => {
  return <><Suspense fallback="Loading ..."><ProductListModule /></Suspense></>;
};

export default ProductListWrapper;
