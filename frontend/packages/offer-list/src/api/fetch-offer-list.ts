import { FetchOfferListResponse, OfferListType } from "../types/types";

const fetchOfferList = async (): Promise<OfferListType> => {
  try {
    const response = await fetch("http://localhost:5000/offers");
    const data = await response.json();
    return data;
  } catch (e) {
    return Promise.resolve({ offers: [], total: 0, skip: 0, limit: 0 });
  }
};

export default fetchOfferList;
