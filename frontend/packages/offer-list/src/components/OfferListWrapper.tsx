import { Suspense } from "react";
import OfferListModule from "./OfferListModule";
import { OfferListContextProvider } from "../context/offer-list-context";
import { InputHandler } from "../input-handler/input-handler";
import { revalidatePath } from "next/cache";

const OfferListWrapper = async () => {
  console.log("OfferListWrapper");
  const checkIfOfferUpdated = async () => {
    "use server";
    revalidatePath("/offers");
  };
  return (
    <>
      <h3>Offer List Wrapper</h3>
      <OfferListContextProvider>
        <InputHandler />
        <Suspense fallback="Loading...">
          <OfferListModule />
        </Suspense>
        <form action={checkIfOfferUpdated}>
          <button type="submit">Check if offers udpated</button>
        </form>
      </OfferListContextProvider>
    </>
  );
};

export default OfferListWrapper;
