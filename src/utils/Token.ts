import { storage } from '@/core';

class Token {
  private static KEY = 'user_token';
  static get() {
    const value: string = storage.local.get(this.KEY);
    return value ? `Bearer ${value}` : '';
  }
  static set(value: string) {
    return storage.local.set(this.KEY, value);
  }
  static clear() {
    return storage.local.remove(this.KEY);
  }
}

export { Token };
