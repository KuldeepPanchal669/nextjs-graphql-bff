export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}
export interface ProductListType {
  products: Array<ProductType>;
  total: number;
  skip: number;
  limit: number;
}

export interface FetchProductListResponse {
  data: ProductListType;
}
