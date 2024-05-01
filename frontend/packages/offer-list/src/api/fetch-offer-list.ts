import { FetchOfferListResponse, OfferList } from "../types/types";

const fetchOfferList = async (): Promise<OfferList> => {
  const response = await fetch("http://localhost:5000/offers");
  const data = await response.json();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
};

export default fetchOfferList;
