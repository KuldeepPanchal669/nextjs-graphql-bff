"use client";
import React, { FC, ReactNode, useContext, useReducer } from "react";
import offerListReducer from "../store/reducer/offerListReducer";

type OfferListContextProviderProps = {
  children?: ReactNode;
};

export const OfferListContext = React.createContext({});

export const OfferListContextProvider = (
  props: OfferListContextProviderProps
) => {
  const { children } = props;
  const [state, dispatch] = useReducer(offerListReducer, { discount: 10 });
  return (
    <OfferListContext.Provider value={{ state, dispatch }}>
      {children}
    </OfferListContext.Provider>
  );
};

export const useOfferListContext = () => {
  const context = useContext(OfferListContext);
  return context;
};
