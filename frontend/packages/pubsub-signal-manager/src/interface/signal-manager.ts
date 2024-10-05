import { Callback, Signal, SignalType, Subscription, Topic } from "../types";

export interface SignalManager {
  publish<T extends Signal>(signal: T): void;
  subscribe<T extends SignalType>(
    signalType: T,
    topic: T,
    callback: Callback
  ): void;
  unsubscribe(topic: Topic, subscription: Subscription): void;
}
