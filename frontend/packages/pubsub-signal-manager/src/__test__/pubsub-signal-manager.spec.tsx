import { waitFor } from "@testing-library/react";
import { Signal, Callback, Topic, SignalType } from "../types";
import { PubSubSignalObserver } from "../pubsub-signal-manager";

describe("PubSubSignalObserver", () => {
  let mockCallback: Callback;
  let topic: Topic;
  let topic2: Topic;
  let signal: Signal;
  let signalType: SignalType;

  beforeEach(() => {
    mockCallback = {
      onSuccess: jest.fn(),
      onError: jest.fn(),
    };
    signalType = "TEST_SIGNAL_TYPE";
    topic = "TEST_TOPIC";
    topic2 = "TEST_TOPIC_2";
    signal = { topic: topic, payload: {} };
  });

  test("subscribe should add a subscription", () => {
    const pubSubSignalManager = new PubSubSignalObserver();

    const subscription = pubSubSignalManager.subscribe(
      topic,
      signalType,
      mockCallback
    );
    expect(
      pubSubSignalManager?.getOrCreateSubscribers(topic)?.has(subscription)
    ).toBe(true);
  });

  test("PubSubSignalManager should unsubscription from a subscription", () => {
    const pubSubSignalManager = new PubSubSignalObserver();
    const subscription = pubSubSignalManager.subscribe(
      topic,
      signalType,
      mockCallback
    );
    expect(
      pubSubSignalManager.getOrCreateSubscribers(topic)?.has(subscription)
    ).toBe(true);

    expect(subscription.unsubscribe).toBeDefined();
    subscription.unsubscribe();

    const topicSubscribers = pubSubSignalManager.getSubscribers(topic);

    expect(topicSubscribers?.size).toBe(0);
  });

  test("PubSubSignalManager should use the existing topic for subscription, when topic is available", () => {
    const pubSubSignalManager = new PubSubSignalObserver();
    pubSubSignalManager.subscribe(topic, signalType, mockCallback);
    pubSubSignalManager.subscribe(topic2, signalType, mockCallback);
    const subscription = pubSubSignalManager.subscribe(
      topic,
      signalType,
      mockCallback
    );
    expect(subscription).toBeDefined();
    expect(subscription.unsubscribe).toBeDefined();
    expect(pubSubSignalManager.getSubscribers(topic)?.has(subscription)).toBe(
      true
    );
    expect(pubSubSignalManager.getSubscribers(topic)?.size).toBe(2);
  });

  test("PubSubSignalManager should get the subscribers for a topic, when available", () => {
    const pubSubSignalManager = new PubSubSignalObserver();
    pubSubSignalManager.subscribe(topic, signalType, mockCallback);
    pubSubSignalManager.subscribe(topic2, signalType, mockCallback);
    const subscribers = pubSubSignalManager.getSubscribers(topic);
    expect(subscribers).toBeDefined();
    expect(subscribers?.size).toBe(1);
  });

  test("PubSubSignalManager should call onSuccess, when subscribed signal is published", async () => {
    const pubSubSignalManager = new PubSubSignalObserver();
    const subscription = pubSubSignalManager.subscribe(
      topic,
      signalType,
      mockCallback
    );
    pubSubSignalManager.publish(signal);

    await waitFor(() => {
      expect(mockCallback.onSuccess).toHaveBeenCalledWith(signal, subscription);
      expect(mockCallback.onSuccess).toHaveBeenCalledTimes(1);
    });
  });

  test("PubSubSignalManager should not call onSuccess, when not-subscribed signal is published", async () => {
    const pubSubSignalManager = new PubSubSignalObserver();
    pubSubSignalManager.subscribe(topic, signalType, mockCallback);
    signal.topic = topic2;
    pubSubSignalManager.publish(signal);

    await waitFor(() => {
      expect(mockCallback.onSuccess).not.toHaveBeenCalled();
    });
  });

  test("PubSubSignalManager should call onError, when subscribed signal is published and error is thrown", async () => {
    const pubSubSignalManager = new PubSubSignalObserver();
    pubSubSignalManager.subscribe(topic, signalType, {
      ...mockCallback,
      onSuccess: () => {
        throw new Error("Test Error");
      },
    });
    pubSubSignalManager.publish(signal);

    await waitFor(() => {
      expect(mockCallback.onError).toHaveBeenCalledWith(
        new Error("Test Error"),
        signal
      );
      expect(mockCallback.onError).toHaveBeenCalledTimes(1);
    });
  });

  test("PubSubSignalManager should do nothing, when error callback is not provided and error is thrown", async () => {
    const pubSubSignalManager = new PubSubSignalObserver();
    pubSubSignalManager.subscribe(topic, signalType, {
      onSuccess: () => {
        throw new Error("Test Error");
      },
    });
    pubSubSignalManager.publish(signal);

    await waitFor(() => {
      expect(mockCallback.onError).not.toHaveBeenCalled();
    });
  });

  test("PubSubSignalManager should call onSuccess, when unsubscribed signal is published", async () => {
    const pubSubSignalManager = new PubSubSignalObserver();
    const subscription = pubSubSignalManager.subscribe(
      topic,
      signalType,
      mockCallback
    );
    subscription.unsubscribe();
    pubSubSignalManager.publish(signal);

    await waitFor(() => {
      expect(mockCallback.onSuccess).not.toHaveBeenCalled();
    });
  });
});
