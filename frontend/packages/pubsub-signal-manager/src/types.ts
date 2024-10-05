export type SignalType = Uppercase<string>;

export type Signal = {
  topic: Topic;
  payload: unknown;
};

export type Topic = Uppercase<string>;

export type Subscription = { signalType: SignalType; unsubscribe: () => void };

export type Callback = {
  onSuccess: (signal: Signal, suscription: Subscription) => void;
  onError?: { (error: Error, signal: Signal): void };
};
