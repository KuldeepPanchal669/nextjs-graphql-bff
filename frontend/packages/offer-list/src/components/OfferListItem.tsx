import { OfferListItemType } from "../types/types";

interface OfferListItemProps {
  offer: OfferListItemType;
}
const OfferListItem = ({ offer }: OfferListItemProps) => {
  return offer.title;
};

export default OfferListItem;
