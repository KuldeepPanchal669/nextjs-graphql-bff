"use client";
// import { revalidatePath } from "next/cache";
import { useOfferListContext } from "../context/offer-list-context";
import { setAddOffer } from "../store/actions/action";
import { useRouter } from "next/navigation";

export const InputHandler = () => {
  const { state, dispatch } = useOfferListContext();
  const router = useRouter();
  const handleClick = () => {
    dispatch(setAddOffer(10));
    // revalidatePath('/')
  };
  return (
    <button type="button" onClick={handleClick}>
      Update State
    </button>
  );
};
