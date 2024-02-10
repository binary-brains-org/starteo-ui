import { fetcher } from './index';
import { User as UserData } from '@/types/User.type';
import Token from '@/core/token';

class User {
  public static async whoami(): Promise<UserData> {
    return (
      await fetcher.get('/auth/whoami', {
        headers: {
          Authorization: 'Bearer ' + Token.get(),
        },
      })
    ).data;
  }

  public static async setProfile(userId: string, data: any): Promise<UserData> {
    return (
      await fetcher.post(`/users/${userId}/picture/raw`, data, {
        headers: {
          Authorization: 'Bearer ' + Token.get(),
        },
      })
    ).data;
  }
}

export default User;
