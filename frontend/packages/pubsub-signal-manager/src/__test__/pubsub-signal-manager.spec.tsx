import { PubSubSignalManager } from "../../src";
import { Signal, Callback, Topic, Subscription, SignalType } from "../types";
import { SignalManager } from "../interface/signal-manager";

describe("PubSubSignalObserver", () => {
  let pubSubSignalManager = PubSubSignalManager;
  let mockCallback: Callback;
  let topic: Topic;
  let signal: Signal;
  let signalType: SignalType;


  beforeEach(() => {
    mockCallback = {
      onSignal: jest.fn(),
      onError: jest.fn(),
    };
    signalType = "TEST_SIGNAL_TYPE";
    topic = "TEST_TOPIC";
    signal = { topic: topic, payload: {} };
  });

  test("subscribe should add a subscription", () => {
    const subscription = pubSubSignalManager.subscribe(
      signalType,
      topic,
      mockCallback
    );
    expect(pubSubSignalManager.getOrCreateSubscribers(topic)?.has(subscription)).toBe(true);
  });

  // test("publish should call the callback", () => {
  //   const subscription = pubSubSignalObserver.subscribe(
  //     SignalType,
  //     topic,
  //     mockCallback
  //   );
  //   pubSubSignalObserver.publish(signal);
  //   expect(mockCallback.onSignal).toHaveBeenCalledWith(signal, subscription);
  // });

  // test("unsubscribe should remove a subscription", () => {
  //   const subscription = pubSubSignalObserver.subscribe(
  //     SignalType,
  //     topic,
  //     mockCallback
  //   );
  //   pubSubSignalObserver.unsubscribe(topic, subscription);
  //   expect(
  //     pubSubSignalObserver["subscribers"].get(topic)?.has(subscription)
  //   ).toBe(false);
  // });
});
