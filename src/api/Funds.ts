import fetcher from "./fetcher";
import { IdeaType } from "@/api/Ideas";
import { User } from "@/types";


export interface FundsInput {
  value: number;
  userId: string;
}

export interface FundData {
  id: string;
  idea: IdeaType;
  user: User;
  value: number;
}

class Funds {
  public static async put(ideaId: string, data: FundsInput): Promise<FundData[]> {
    return (await fetcher.put(`/funds/${ideaId}`, data)).data;
  }
}

export default Funds;