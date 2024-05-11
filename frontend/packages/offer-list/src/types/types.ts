export interface OfferListItemType {
  id: number;
  title: string;
  description: string;
  discount: number;
}

export interface OfferListType {
  offers: Array<OfferListItemType>;
  total: number;
  skip: number;
  limit: number;
}

export interface FetchOfferListResponse {
  data: OfferListType;
}
