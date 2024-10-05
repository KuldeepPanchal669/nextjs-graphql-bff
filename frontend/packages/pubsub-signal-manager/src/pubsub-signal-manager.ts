import { SignalManager } from "./interface/signal-manager";
import { Callback, Signal, SignalType, Subscription, Topic } from "./types";

export class PubSubSignalObserver implements SignalManager {
  private subscribers = new Map<Topic, Map<Subscription, Callback>>();

  getOrCreateSubscribers = (topic: Topic): Map<Subscription, Callback> =>
    this.subscribers.get(topic) ??
    this.subscribers.set(topic, new Map()).get(topic)!;

  getSubscribers = (topic: Topic): Map<Subscription, Callback> | undefined => {
    return this.subscribers.get(topic);
  };

  publish<T extends Signal>(signal: T): void {
    const subscribersByTopic = this.subscribers.get(signal.topic);

    subscribersByTopic?.forEach((callback, subscription) => {
      setTimeout(() => {
        try {
          callback.onSuccess(signal, subscription);
        } catch (error) {
          callback.onError?.(error as Error, signal);
        }
      }, 0);
    });
  }

  subscribe<T extends SignalType>(
    topic: Topic,
    signalType: T,
    callback: Callback
  ): Subscription {
    const subscriberByTopic = this.getOrCreateSubscribers(topic);
    const subscription = {
      signalType: signalType,
      unsubscribe: () => this.unsubscribe(topic, subscription),
    };
    subscriberByTopic.set(subscription, callback);
    return subscription;
  }

  unsubscribe(topic: Topic, subscription: Subscription): void {
    const subscribersByTopic = this.subscribers.get(topic);

    if (!subscribersByTopic) {
      return;
    }

    subscribersByTopic.delete(subscription);
  }
}
