import { FetchProductListResponse, ProductListType } from "../types/types";

export const fetchProductList = async (): Promise<ProductListType> => {
  const response = await fetch("https://dummyjson.com/products?limit=2");
  const data = await response.json();
  return data;
};
