export class Store<T> {
  state: T;
  listeners: Set<() => void>;

  constructor(initialState: T) {
    this.state = initialState;
    this.listeners = new Set();
  }

  get() {
    return this.state;
  }

  set(newState: T) {
    this.state = newState;
    this.notify();
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  notify() {
    this.listeners.forEach((listener) => listener());
  }
}
