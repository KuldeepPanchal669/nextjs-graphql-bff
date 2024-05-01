export interface OfferListItem {
  id: number;
  title: string;
  description: string;
  discount: number;
}

export interface OfferList {
  offers: Array<OfferListItem>;
  total: number;
  skip: number;
  limit: number;
}

export interface FetchOfferListResponse {
  data: OfferList;
}
