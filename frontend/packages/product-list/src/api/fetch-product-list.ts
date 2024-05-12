import { ProductListType } from "../types/types";

export const fetchProductList = async (): Promise<ProductListType> => {
  try {
    const response = await fetch("http://localhost:5000/products");
    const data = await response.json();
    return data;
  } catch (e) {
    return Promise.resolve({ products: [], total: 0, skip: 0, limit: 0 });
  }
};
