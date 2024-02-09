import storage from './storage';

class Token {
  public static get() {
    return storage.local.get('user_token');
  }

  public static set(token: string) {
    return storage.local.set('user_token', token);
  }

  public static clear() {
    return storage.local.remove('user_token');
  }
}

export default Token;
