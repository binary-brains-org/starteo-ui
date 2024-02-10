import fetcher from './fetcher';
import { FundInput, Funds as FundType } from '@/types/funds.type';
import Token from '@/core/token';

class Funds {
  public static async createFund(
    ideaId: string,
    data: FundInput,
  ): Promise<FundType[]> {
    return (await fetcher.put(`/funds/${ideaId}`, data)).data;
  }

  public static async getFunds(id: string): Promise<FundType[]> {
    return (
      await fetcher.get(`/funds/${id})`, {
        headers: { Authorization: 'Bearer ' + Token.get() },
      })
    ).data;
  }
}

export default Funds;
