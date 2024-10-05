import React from "react";
import { SignalManager } from "../interface/signal-manager";

type PubSubSignalManagerContextType = {
  manager: SignalManager;
};
const defaultPubSubSignalManager = {
  subscribe: () => ({ signalType: "" }),
  unsubscribe: () => void 0,
  publish: () => void 0,
};

const PubSubSignalManagerContext =
  React.createContext<PubSubSignalManagerContextType>({
    manager: defaultPubSubSignalManager,
  });

export const usePubSubSignalManager = () => {
  const context = React.useContext(PubSubSignalManagerContext);
  if (!context) {
    throw new Error(
      "usePubSubSignalManager must be used within a PubSubSignalManagerContext"
    );
  }
  return context;
};

export const PubSubSignalManagerContextProvider: React.FC<
  React.PropsWithChildren<PubSubSignalManagerContextType>
> = ({ children, manager }) => {
  const pubSubSignalManager = React.useMemo(() => {
    return { manager };
  }, [manager]);
  return (
    <PubSubSignalManagerContext.Provider value={pubSubSignalManager}>
      {children}
    </PubSubSignalManagerContext.Provider>
  );
};
