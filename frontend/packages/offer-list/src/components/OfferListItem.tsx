import { OfferListItem } from "../types/types";

interface OfferListItemProps {
  offer: OfferListItem;
}
const OfferListItem = ({ offer }: OfferListItemProps) => {
  return offer.title;
};

export default OfferListItem;
