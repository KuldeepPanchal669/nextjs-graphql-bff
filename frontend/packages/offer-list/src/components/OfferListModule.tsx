import { revalidatePath } from "next/cache";
import fetchOfferList from "../api/fetch-offer-list";
import OfferListItem from "./OfferListItem";

const OfferListModule = async () => {
  console.log("OfferListModule");
  const { offers } = await fetchOfferList();

  return (
    <>
      {offers.map((offer) => (
        <OfferListItem key={offer.id} offer={offer} />
      ))}
    </>
  );
};

export default OfferListModule;
