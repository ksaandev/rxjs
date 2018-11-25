import { Observer } from './types';
import { Subscription } from './Subscription';

export abstract class Subscriber<T> implements Observer<T> {
  get closed() {
    return this._subscription.closed;
  }

  constructor(protected _subscription: Subscription) {}

  next(value: T): void {}

  error(err: any): void {}

  complete(): void {}
}